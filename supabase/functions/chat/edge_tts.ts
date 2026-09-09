// TTS gratuito via serviço de leitura em voz alta do Microsoft Edge (mesmo protocolo
// da biblioteca python edge-tts). Usado SOMENTE pelo botão de som das atividades —
// o chat com IA continua no Azure TTS oficial. Sem chave e sem custo; em troca é
// não-oficial: se a Microsoft mudar o protocolo, o chamador deve cair no fallback.
//
// O serviço exige um User-Agent de navegador no handshake (testado: sem ele, 403).
// Como o WebSocket padrão do Deno não permite headers customizados (e o
// WebSocketStream negocia HTTP/2, que este servidor rejeita), o handshake HTTP/1.1
// e o framing WebSocket (RFC 6455) são feitos manualmente sobre Deno.connectTls.

const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const CHROMIUM_FULL_VERSION = "143.0.3650.75";
const HOST = "speech.platform.bing.com";
const PATH = "/consumer/speech/synthesize/readaloud/edge/v1";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) " +
  "Chrome/143.0.0.0 Safari/537.36 Edg/143.0.0.0";

// Sec-MS-GEC: SHA256(ticks do relógio do Windows arredondados p/ 5 min + token), hex maiúsculo.
async function generateSecMsGec(): Promise<string> {
  let ticks = Date.now() / 1000 + 11644473600; // epoch Unix -> epoch Windows (1601)
  ticks -= ticks % 300; // janela de 5 minutos
  ticks *= 1e7; // segundos -> intervalos de 100ns
  const strToHash = `${ticks.toFixed(0)}${TRUSTED_CLIENT_TOKEN}`;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(strToHash));
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();
}

function jsDateString(): string {
  return new Date().toUTCString().replace("GMT", "GMT+0000 (Coordinated Universal Time)");
}

function escapeXml(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function randomHex(bytes: number): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Monta um frame WebSocket de texto vindo do cliente (sempre mascarado, RFC 6455 §5.3)
function makeTextFrame(text: string): Uint8Array {
  const payload = new TextEncoder().encode(text);
  const mask = crypto.getRandomValues(new Uint8Array(4));
  let header: Uint8Array;
  if (payload.length < 126) {
    header = new Uint8Array([0x81, 0x80 | payload.length]);
  } else if (payload.length < 65536) {
    header = new Uint8Array([0x81, 0x80 | 126, payload.length >> 8, payload.length & 0xff]);
  } else {
    throw new Error("edge-tts: payload maior que o suportado");
  }
  const frame = new Uint8Array(header.length + 4 + payload.length);
  frame.set(header, 0);
  frame.set(mask, header.length);
  for (let i = 0; i < payload.length; i++) {
    frame[header.length + 4 + i] = payload[i] ^ mask[i % 4];
  }
  return frame;
}

class FrameParser {
  private buf = new Uint8Array(0);
  private fragments: Uint8Array[] = [];
  private fragmentOpcode = 0;

  push(chunk: Uint8Array): { opcode: number; payload: Uint8Array }[] {
    const merged = new Uint8Array(this.buf.length + chunk.length);
    merged.set(this.buf, 0);
    merged.set(chunk, this.buf.length);
    this.buf = merged;

    const messages: { opcode: number; payload: Uint8Array }[] = [];
    while (true) {
      if (this.buf.length < 2) break;
      const fin = (this.buf[0] & 0x80) !== 0;
      const opcode = this.buf[0] & 0x0f;
      let len = this.buf[1] & 0x7f;
      let offset = 2;
      if (len === 126) {
        if (this.buf.length < 4) break;
        len = (this.buf[2] << 8) | this.buf[3];
        offset = 4;
      } else if (len === 127) {
        if (this.buf.length < 10) break;
        // Tamanhos acima de 2^32 não acontecem aqui; lê só os 4 bytes baixos
        len = (this.buf[6] << 24) | (this.buf[7] << 16) | (this.buf[8] << 8) | this.buf[9];
        offset = 10;
      }
      if (this.buf.length < offset + len) break;
      const payload = this.buf.slice(offset, offset + len);
      this.buf = this.buf.slice(offset + len);

      if (opcode === 0x0) {
        // continuação de mensagem fragmentada
        this.fragments.push(payload);
        if (fin) {
          const total = this.fragments.reduce((n, f) => n + f.length, 0);
          const whole = new Uint8Array(total);
          let o = 0;
          for (const f of this.fragments) { whole.set(f, o); o += f.length; }
          messages.push({ opcode: this.fragmentOpcode, payload: whole });
          this.fragments = [];
        }
      } else if (!fin) {
        this.fragmentOpcode = opcode;
        this.fragments = [payload];
      } else {
        messages.push({ opcode, payload });
      }
    }
    return messages;
  }
}

export async function edgeTtsSynthesize(
  text: string,
  voice = "pt-BR-FranciscaNeural",
  rate = "-15%",
  timeoutMs = 60000,
): Promise<Uint8Array> {
  const secMsGec = await generateSecMsGec();
  const query =
    `?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}&Sec-MS-GEC=${secMsGec}` +
    `&Sec-MS-GEC-Version=1-${CHROMIUM_FULL_VERSION}&ConnectionId=${randomHex(16)}`;

  const conn = await Deno.connectTls({
    hostname: HOST,
    port: 443,
    alpnProtocols: ["http/1.1"], // o endpoint rejeita WebSocket sobre HTTP/2
  });

  const timer = setTimeout(() => {
    try { conn.close(); } catch (_) { /* já fechada */ }
  }, timeoutMs);

  try {
    // --- Handshake HTTP/1.1 ---
    const wsKey = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16))));
    const handshake =
      `GET ${PATH}${query} HTTP/1.1\r\n` +
      `Host: ${HOST}\r\n` +
      "Connection: Upgrade\r\n" +
      "Upgrade: websocket\r\n" +
      "Sec-WebSocket-Version: 13\r\n" +
      `Sec-WebSocket-Key: ${wsKey}\r\n` +
      `User-Agent: ${USER_AGENT}\r\n` +
      "Origin: chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold\r\n" +
      "Pragma: no-cache\r\n" +
      "Cache-Control: no-cache\r\n" +
      "Accept-Language: en-US,en;q=0.9\r\n" +
      `Cookie: muid=${randomHex(16).toUpperCase()};\r\n` +
      "\r\n";
    await conn.write(new TextEncoder().encode(handshake));

    // Lê a resposta do handshake até o fim dos headers (\r\n\r\n)
    const readBuf = new Uint8Array(65536);
    let response = new Uint8Array(0);
    let headerEnd = -1;
    while (headerEnd < 0) {
      const n = await conn.read(readBuf);
      if (n === null) throw new Error("edge-tts: conexão fechada durante o handshake");
      const merged = new Uint8Array(response.length + n);
      merged.set(response, 0);
      merged.set(readBuf.subarray(0, n), response.length);
      response = merged;
      headerEnd = new TextDecoder().decode(response).indexOf("\r\n\r\n");
    }
    const statusLine = new TextDecoder().decode(response.subarray(0, 32));
    if (!statusLine.includes(" 101 ")) {
      throw new Error(`edge-tts: handshake recusado: ${statusLine.split("\r\n")[0]}`);
    }

    // --- Envia configuração e SSML ---
    await conn.write(makeTextFrame(
      `X-Timestamp:${jsDateString()}\r\n` +
        "Content-Type:application/json; charset=utf-8\r\n" +
        "Path:speech.config\r\n\r\n" +
        '{"context":{"synthesis":{"audio":{"metadataoptions":{' +
        '"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},' +
        '"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}\r\n',
    ));
    const ssml =
      "<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>" +
      `<voice name='${voice}'>` +
      `<prosody pitch='+0Hz' rate='${rate}' volume='+0%'>` +
      escapeXml(text) +
      "</prosody></voice></speak>";
    await conn.write(makeTextFrame(
      `X-RequestId:${randomHex(16)}\r\n` +
        "Content-Type:application/ssml+xml\r\n" +
        `X-Timestamp:${jsDateString()}Z\r\n` + // "Z" duplicado: bug histórico do próprio Edge
        "Path:ssml\r\n\r\n" +
        ssml,
    ));

    // --- Recebe frames até turn.end ---
    const parser = new FrameParser();
    const audioChunks: Uint8Array[] = [];
    // Bytes que sobraram depois dos headers do handshake já podem conter frames
    const leftover = response.subarray(headerEnd + 4);
    let pending = parser.push(leftover);

    reading:
    while (true) {
      for (const msg of pending) {
        if (msg.opcode === 0x1) {
          // frame de texto: só interessa o fim do turno
          if (new TextDecoder().decode(msg.payload).includes("Path:turn.end")) break reading;
        } else if (msg.opcode === 0x2) {
          // frame binário: 2 bytes de tamanho do header + headers + áudio.
          // O áudio começa em headerLength + 2 (mesmo recorte do edge-tts python).
          const headerLength = (msg.payload[0] << 8) | msg.payload[1];
          const headerText = new TextDecoder().decode(msg.payload.subarray(2, headerLength + 2));
          if (headerText.includes("Path:audio")) {
            const data = msg.payload.subarray(headerLength + 2);
            if (data.length > 0) audioChunks.push(data);
          }
        } else if (msg.opcode === 0x9) {
          // ping -> pong (mascarado, com o mesmo payload)
          const mask = crypto.getRandomValues(new Uint8Array(4));
          const pong = new Uint8Array(2 + 4 + msg.payload.length);
          pong[0] = 0x8a;
          pong[1] = 0x80 | msg.payload.length;
          pong.set(mask, 2);
          for (let i = 0; i < msg.payload.length; i++) pong[6 + i] = msg.payload[i] ^ mask[i % 4];
          await conn.write(pong);
        } else if (msg.opcode === 0x8) {
          throw new Error("edge-tts: servidor fechou a conexão antes do fim do áudio");
        }
      }
      const n = await conn.read(readBuf);
      if (n === null) throw new Error("edge-tts: conexão encerrada sem turn.end");
      pending = parser.push(readBuf.slice(0, n));
    }

    if (audioChunks.length === 0) throw new Error("edge-tts: nenhum áudio recebido");
    const total = audioChunks.reduce((n, c) => n + c.length, 0);
    const out = new Uint8Array(total);
    let offset = 0;
    for (const c of audioChunks) { out.set(c, offset); offset += c.length; }
    return out;
  } finally {
    clearTimeout(timer);
    try { conn.close(); } catch (_) { /* já fechada */ }
  }
}
