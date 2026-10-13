import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { edgeTtsSynthesize } from "./edge_tts.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Configurações do Azure
const AZURE_SPEECH_REGION = "eastus2";
const AZURE_AI_AGENT_URL = "https://geniantis-org.services.ai.azure.com/api/projects/proj-geniantis-agente/openai/v1/responses";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

// Cache de áudio no servidor (bucket privado tts-cache, ver migration
// 20261015000001): cada texto é gerado UMA vez por voz/velocidade e reaproveitado
// por todos os usuários — o Google só cobra o que é novo. Qualquer falha no
// cache só é registrada no log: o áudio é gerado e devolvido normalmente.
const TTS_CACHE_BUCKET = "tts-cache";
// Sobe quando mudar algo que altera o áudio gerado (velocidade, qualidade...):
// os arquivos antigos deixam de ser usados e tudo é gerado de novo.
const TTS_CACHE_VERSION = "v1";
const storageAdmin = SERVICE_ROLE_KEY ? createClient(SUPABASE_URL, SERVICE_ROLE_KEY) : null;

// Voz atual do app (Microsoft Francisca, via edge-tts com o Azure de reserva).
// É o padrão quando o admin não escolheu voz: o Google só entra quando uma voz
// Chirp 3 HD é escolhida na aba "Voz do app".
const MICROSOFT_VOICE_ID = "microsoft-francisca";

// Trava mensal do Google: a cota grátis das Chirp 3 HD é 1 milhão de
// caracteres/mês; para de gerar no Google ao chegar em 900 mil (margem), até
// virar o mês. Contagem em public.tts_usage (migration 20261015000002).
const GOOGLE_MONTHLY_CHAR_LIMIT = 900_000;

function currentUsageMonth(): string {
  return new Date().toISOString().slice(0, 7); // AAAA-MM (UTC)
}

async function googleMonthlyUsage(): Promise<number> {
  if (!storageAdmin) return 0;
  try {
    const { data } = await storageAdmin.from("tts_usage").select("google_chars").eq("month", currentUsageMonth()).maybeSingle();
    return Number(data?.google_chars ?? 0);
  } catch (e) {
    console.error("Leitura do uso do Google TTS falhou:", (e as Error).message);
    return 0;
  }
}

async function addGoogleMonthlyUsage(chars: number): Promise<void> {
  if (!storageAdmin) return;
  const { error } = await storageAdmin.rpc("add_tts_usage", { p_month: currentUsageMonth(), p_chars: chars });
  if (error) console.error("Registro do uso do Google TTS falhou:", error.message);
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Caminho = serviço/voz/hash(velocidade|texto). O serviço e a voz entram no
// caminho pra áudio do edge-tts (quando o Google falha) nunca ser servido como
// se fosse da voz do Google, e vice-versa.
async function ttsCachePath(provider: string, voice: string, text: string, ttsRate?: string): Promise<string> {
  return `${TTS_CACHE_VERSION}/${provider}/${voice}/${await sha256Hex(`${ttsRate ?? ""}|${text}`)}.mp3`;
}

async function readTtsCache(path: string): Promise<string | null> {
  if (!storageAdmin) return null;
  try {
    const { data, error } = await storageAdmin.storage.from(TTS_CACHE_BUCKET).download(path);
    if (error || !data) return null;
    return encodeBase64(new Uint8Array(await data.arrayBuffer()));
  } catch (e) {
    console.error("Cache de TTS (leitura) falhou:", (e as Error).message);
    return null;
  }
}

// Grava em segundo plano quando o runtime permite (EdgeRuntime.waitUntil): o
// áudio volta pro usuário na hora e a gravação termina depois.
function saveTtsCacheInBackground(path: string, audioBase64: string): Promise<void> {
  const task = writeTtsCache(path, audioBase64);
  // deno-lint-ignore no-explicit-any
  const runtime = (globalThis as any).EdgeRuntime;
  if (runtime?.waitUntil) {
    runtime.waitUntil(task);
    return Promise.resolve();
  }
  return task;
}

async function writeTtsCache(path: string, audioBase64: string): Promise<void> {
  if (!storageAdmin) return;
  try {
    const bytes = Uint8Array.from(atob(audioBase64), (c) => c.charCodeAt(0));
    const { error } = await storageAdmin.storage.from(TTS_CACHE_BUCKET)
      .upload(path, bytes, { contentType: "audio/mpeg", upsert: true });
    if (error) console.error("Cache de TTS (gravação) falhou:", error.message);
  } catch (e) {
    console.error("Cache de TTS (gravação) falhou:", (e as Error).message);
  }
}

Deno.serve(async (req) => {
  // Trata requisições OPTIONS (CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Sem isso, essa function era um proxy aberto pro serviço pago da Azure
    // (chat/STT/TTS) — qualquer um que descobrisse a URL conseguia gerar
    // custo à vontade, sem estar logado no app.
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) {
      return new Response(JSON.stringify({ error: "Não autenticado." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }
    const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: callerData, error: callerError } = await callerClient.auth.getUser();
    if (callerError || !callerData?.user) {
      return new Response(JSON.stringify({ error: "Sessão inválida." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }

    // A chave só é exigida nos fluxos que falam com a Azure (chat com IA e STT).
    // O TTS das atividades (ttsText) funciona sem chave, via edge-tts gratuito.
    const apiKey = Deno.env.get("azure_ai_key");

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      if (!apiKey) {
        throw new Error("Variavel de ambiente azure_ai_key nao configurada no Supabase.");
      }
      // ----------------------------------------------------
      // FLUXO DE ÁUDIO (Speech-to-Text -> Agente -> Text-to-Speech)
      // ----------------------------------------------------
      const formData = await req.formData();
      const audioFile = formData.get("audio") as File;
      const messagesJson = formData.get("messages") as string;
      const messages = JSON.parse(messagesJson || "[]");

      if (!audioFile) {
        return new Response(
          JSON.stringify({ error: "Nenhum arquivo de audio recebido" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      // Transcreve a fala usando Azure STT
      const audioBytes = new Uint8Array(await audioFile.arrayBuffer());
      const transcription = await transcribeAudioWithAzure(audioBytes, apiKey);

      // Adiciona o texto transcrito ao historico como mensagem do usuario
      messages.push({ role: "user", content: transcription });

      // Chama o Agente Azure AI Foundry
      const reply = await getAgentResponse(messages, apiKey);

      // Gera o audio falado da resposta usando Azure TTS
      const audioBase64 = await synthesizeTextWithAzure(reply, apiKey);

      return new Response(
        JSON.stringify({ reply, audio: audioBase64, user_transcription: transcription }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );

    } else {
      // ----------------------------------------------------
      // FLUXO DE TEXTO CLÁSSICO
      // ----------------------------------------------------
      const { messages, generateAudio, ttsText, ttsRate, ttsVoice } = await req.json();

      // TTS puro (botão de som dos exercícios): só sintetiza o texto recebido,
      // sem passar pelo agente de IA. Ordem: Google Cloud TTS (se configurado),
      // edge-tts gratuito, e por último o Azure TTS se houver chave.
      // ttsRate (opcional): ajuste de velocidade via SSML <prosody rate>, usado
      // pelo seletor de velocidade do exercício "Leitura de Texto" — sintetizado
      // já na velocidade certa (evita o efeito robótico de esticar o áudio no
      // navegador via playbackRate). Sem ttsRate, mantém o -15% padrão de sempre.
      if (ttsText) {
        let audioBase64: string | null = null;
        // Qual voz gerou o áudio — a aba "Voz do app" avisa quando uma voz do
        // Google foi pedida mas não respondeu (sem chave/erro/limite do mês).
        let provider = "microsoft";
        let cached = false;
        let googleLimitReached = false;
        const speechText = cleanTextForSpeech(ttsText);

        // 1º Google, só se o admin escolheu uma voz Chirp 3 HD (ou se o projeto
        // define GOOGLE_TTS_VOICE) e o secret GOOGLE_TTS_API_KEY existe. Áudio
        // já guardado sai do cache mesmo com o limite do mês atingido.
        const googleKey = Deno.env.get("GOOGLE_TTS_API_KEY");
        const googleVoice = resolveGoogleVoice(ttsVoice);
        if (googleKey && googleVoice) {
          const googlePath = await ttsCachePath("google", googleVoice, speechText, ttsRate);
          audioBase64 = await readTtsCache(googlePath);
          cached = !!audioBase64;
          if (!audioBase64) {
            googleLimitReached = (await googleMonthlyUsage()) >= GOOGLE_MONTHLY_CHAR_LIMIT;
            if (googleLimitReached) {
              console.warn("Limite mensal do Google TTS atingido; usando a voz da Microsoft até virar o mês.");
            } else {
              try {
                audioBase64 = await synthesizeTextWithGoogle(speechText, googleKey, ttsRate, googleVoice);
                await addGoogleMonthlyUsage(speechText.length);
                await saveTtsCacheInBackground(googlePath, audioBase64);
              } catch (googleError) {
                console.error("Google TTS falhou, usando a voz da Microsoft:", (googleError as Error).message);
              }
            }
          }
          if (audioBase64) provider = "google";
        }

        // Voz da Microsoft (Francisca): edge-tts grátis, com o Azure de reserva.
        // Os dois usam a mesma voz, então dividem o cache. O Azure ignora a
        // velocidade (sempre -15%), então só é guardado na velocidade padrão.
        if (!audioBase64) {
          const microsoftPath = await ttsCachePath("microsoft", "francisca", speechText, ttsRate);
          audioBase64 = await readTtsCache(microsoftPath);
          cached = !!audioBase64;
          if (!audioBase64) {
            try {
              audioBase64 = encodeBase64(await edgeTtsSynthesize(speechText, undefined, ttsRate));
              await saveTtsCacheInBackground(microsoftPath, audioBase64);
            } catch (edgeError) {
              console.error("edge-tts falhou, tentando Azure:", (edgeError as Error).message);
              if (!apiKey) throw edgeError;
              audioBase64 = await synthesizeTextWithAzure(ttsText, apiKey);
              if (!ttsRate) await saveTtsCacheInBackground(microsoftPath, audioBase64);
            }
          }
        }
        return new Response(
          JSON.stringify({ audio: audioBase64, provider, cached, googleLimitReached }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
        );
      }

      if (!apiKey) {
        throw new Error("Variavel de ambiente azure_ai_key nao configurada no Supabase.");
      }

      if (!messages) {
        return new Response(
          JSON.stringify({ error: "Nenhuma mensagem enviada" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      const reply = await getAgentResponse(messages, apiKey);

      let audioBase64 = null;
      if (generateAudio) {
        audioBase64 = await synthesizeTextWithAzure(reply, apiKey);
      }

      return new Response(
        JSON.stringify({ reply, audio: audioBase64 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

  } catch (error) {
    console.error("Erro na Edge Function:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});

// Helper: Fala com o Agente de IA na Azure
async function getAgentResponse(messages: any[], apiKey: string): Promise<string> {
  const payload = {
    input: messages,
    agent_reference: {
      name: "falafacil",
      version: "11",
      type: "agent_reference"
    }
  };

  const response = await fetch(AZURE_AI_AGENT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure AI Agent respondeu com erro ${response.status}: ${errText}`);
  }

  const resData = await response.json();
  return resData.output[0].content[0].text;
}

// Helper: Azure Speech-to-Text (Transcrição de Voz)
async function transcribeAudioWithAzure(audioBytes: Uint8Array, apiKey: string): Promise<string> {
  const azureSttUrl = `https://${AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR`;
  
  const response = await fetch(azureSttUrl, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
      "Accept": "application/json",
      "User-Agent": "ComunicaFacilSTT"
    },
    body: audioBytes
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure STT falhou com erro ${response.status}: ${errText}`);
  }

  const data = await response.json();
  if (data.RecognitionStatus !== "Success") {
    throw new Error(`Azure STT falhou em reconhecer a fala: ${data.RecognitionStatus}`);
  }
  
  return data.DisplayText;
}

// A voz não deve ler emojis nem marcação markdown (asteriscos, cerquilhas etc.)
// que a IA às vezes inclui — eles continuam na tela, só saem do texto falado.
export function cleanTextForSpeech(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links markdown -> só o rótulo
    .replace(/[*_#`~]+/g, "") // negrito/itálico/títulos/código
    .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// Helper: Google Cloud Text-to-Speech. Voz configurável pelo secret
// GOOGLE_TTS_VOICE (padrão: Chirp 3 HD feminina em pt-BR). ttsRate chega no
// formato do SSML ("-15%", "+10%"); sem ele, -15% como no edge-tts, pra manter
// o ritmo mais calmo de sempre.
// Vozes que o app pode pedir (seletor "Voz do app" no admin, app_settings
// 'tts_voice'): só a família Chirp 3 HD em pt-BR. Formato fixo de propósito:
// sem ele, qualquer usuário logado poderia usar a chave do Google pra gerar
// vozes de outras famílias (Studio etc., bem mais caras).
const ALLOWED_GOOGLE_VOICE_RE = /^pt-BR-Chirp3-HD-[A-Za-z]+$/;

// Voz do Google a usar, ou null pra voz da Microsoft: a pedida pelo app (se
// for Chirp 3 HD pt-BR); sem pedido, GOOGLE_TTS_VOICE se o projeto definir.
function resolveGoogleVoice(requestedVoice?: string): string | null {
  if (requestedVoice === MICROSOFT_VOICE_ID) return null;
  if (requestedVoice && ALLOWED_GOOGLE_VOICE_RE.test(requestedVoice)) return requestedVoice;
  const envVoice = Deno.env.get("GOOGLE_TTS_VOICE");
  return envVoice && ALLOWED_GOOGLE_VOICE_RE.test(envVoice) ? envVoice : null;
}

async function synthesizeTextWithGoogle(text: string, apiKey: string, ttsRate: string | undefined, voiceName: string): Promise<string> {
  // Os -15% de sempre foram calibrados pro edge-tts; as Chirp 3 HD já falam
  // pausado e, com eles, soavam arrastadas. Aqui o "-15%" padrão vira a
  // velocidade natural (1.0), e os ajustes da Leitura de Texto ("-25%" a
  // "+5%") ficam relativos a ela: -20% → 0.95, +5% → 1.2.
  const ratePercent = Number.parseFloat(String(ttsRate ?? "-15%").replace("%", ""));
  const speakingRate = Number.isFinite(ratePercent) ? Math.min(2, Math.max(0.25, 1 + (ratePercent + 15) / 100)) : 1;

  const request = async (withRate: boolean) => fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Goog-Api-Key": apiKey },
    body: JSON.stringify({
      input: { text },
      voice: { languageCode: "pt-BR", name: voiceName },
      audioConfig: withRate ? { audioEncoding: "MP3", speakingRate } : { audioEncoding: "MP3" },
    }),
  });

  // Algumas famílias de voz não aceitam speakingRate: tenta de novo sem ele
  // antes de desistir do Google.
  let response = await request(true);
  if (response.status === 400) response = await request(false);
  if (!response.ok) {
    throw new Error(`Google TTS respondeu ${response.status}: ${(await response.text()).slice(0, 300)}`);
  }
  const data = await response.json();
  if (!data.audioContent) throw new Error("Google TTS não devolveu áudio.");
  return data.audioContent; // já vem em base64
}

function escapeXmlText(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Helper: Azure Text-to-Speech (Síntese de Voz)
async function synthesizeTextWithAzure(text: string, apiKey: string): Promise<string> {
  const azureTtsUrl = `https://${AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;

  // Formatando o SSML com a voz feminina FranciscaNeural
  // (texto limpo de emojis/markdown e escapado: um '&' na resposta quebrava o SSML)
  const ssml = `<speak version='1.0' xml:lang='pt-BR'>
    <voice xml:lang='pt-BR' xml:gender='Female' name='pt-BR-FranciscaNeural'>
      <prosody rate='-15%'>
        ${escapeXmlText(cleanTextForSpeech(text))}
      </prosody>
    </voice>
  </speak>`;

  const response = await fetch(azureTtsUrl, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
      "User-Agent": "ComunicaFacilTTS"
    },
    body: ssml
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure TTS falhou com erro ${response.status}: ${errText}`);
  }

  const audioArrayBuffer = await response.arrayBuffer();
  return encodeBase64(audioArrayBuffer);
}
