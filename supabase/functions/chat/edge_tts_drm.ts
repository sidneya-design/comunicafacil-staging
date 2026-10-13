// Token Sec-MS-GEC v2 do serviço de leitura em voz alta do Microsoft Edge.
//
// Em outubro/2026 a Microsoft passou a recusar (403) o token antigo (SHA-256
// simples de ticks + token) e a exigir o formato "<16 hex CS64>-<64 hex SHA>",
// junto com Sec-MS-GEC-Version "2-<versão do Chromium>". Este arquivo é um
// porte fiel de edge_tts/drm.py (biblioteca python edge-tts 7.3.1,
// generate_sec_ms_gec_v2). O "SHA-256" daqui NÃO é o padrão: começa de um
// estado intermediário e usa constantes ajustadas; por isso não dá pra usar o
// crypto.subtle. Toda a aritmética é em BigInt pra reproduzir os inteiros sem
// limite do Python (várias somas só são truncadas em 32 bits no final).

const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const WIN_EPOCH = 11644473600;
const M = 0xFFFFFFFFn;

const SHA256_INITIAL = [
  0x6A09E667n, 0xBB67AE85n, 0x3C6EF372n, 0xA54FF53An, 0x510E527Fn, 0x9B05688Cn, 0x1F83D9ABn, 0x5BE0CD19n,
];
const SHA256_STATE = [
  0xFD9FBEA2n, 0x91243CE7n, 0xBE499094n, 0xCD2E1E0An, 0x6C006F49n, 0x04BD35ABn, 0xFEB0A7E4n, 0x03EFFBD2n,
];
const SHA256_SCHEDULE = [
  0xEB24BF9En, 0x1558691Fn, 0xA0C09EE2n, 0x0CFA32BAn, 0xA622EE8Cn, 0xD1DD9491n, 0xC0DD25A0n,
  0xF9E70AB6n, 0xF0C31573n, 0x7058CE4En, 0x7188E606n, 0x00E5AB33n, 0xD258B060n, 0x72766564n,
];
const K = [
  0x428A2F98n, 0x71374491n, 0xB5C0FBCFn, 0xE9B5DBA5n, 0x3956C25Bn, 0x59F111F1n, 0x923F82A4n, 0xAB1C5ED5n,
  0xD807AA98n, 0x12835B01n, 0x243185BEn, 0x550C7DC3n, 0x72BE5D74n, 0x80DEB1FEn, 0x9BDC06A7n, 0xC19BF174n,
  0xE49B69C1n, 0xEFBE4786n, 0x0FC19DC6n, 0x240CA1CCn, 0x2DE92C6Fn, 0x4A7484AAn, 0x5CB0A9DCn, 0x76F988DAn,
  0x983E5152n, 0xA831C66Dn, 0xB00327C8n, 0xBF597FC7n, 0xC6E00BF3n, 0xD5A79147n, 0x06CA6351n, 0x14292967n,
  0x27B70A85n, 0x2E1B2138n, 0x4D2C6DFCn, 0x53380D13n, 0x650A7354n, 0x766A0ABBn, 0x81C2C92En, 0x92722C85n,
  0xA2BFE8A1n, 0xA81A664Bn, 0xC24B8B70n, 0xC76C51A3n, 0xD192E819n, 0xD6990624n, 0xF40E3585n, 0x106AA070n,
  0x19A4C116n, 0x1E376C08n, 0x2748774Cn, 0x34B0BCB5n, 0x391C0CB3n, 0x4ED8AA4An, 0x5B9CCA4Fn, 0x682E6FF3n,
  0x748F82EEn, 0x78A5636Fn, 0x84C87814n, 0x8CC70208n, 0x90BEFFFAn, 0xA4506CEBn, 0xBEF9A3F7n, 0xC67178F2n,
];
const SHA256_ADJUSTMENT = 0xC9DC06A7n;
const K_BLOCK = [...K.slice(0, 14), SHA256_ADJUSTMENT, ...K.slice(15)];
const SIGMA0_ADJUSTMENT = 0x059C0B80n;
const SIGMA1_ADJUSTMENT = 0x000B92C0n;

const CS64_COEFFICIENTS: [bigint, bigint][] = [
  [0xE82E91B1n, 0xB32700D0n], [0x44DE24C6n, 0x88DFF51Dn], [0x3BEB65BCn, 0x29514038n],
  [0xC89C5933n, 0xB328CBDFn], [0x8D1EC211n, 0xD405B4D5n], [0x314EF5D5n, 0x26E55F3Cn],
  [0xE92491B1n, 0x607801C6n], [0xF0A5B9D5n, 0x82B2C1FBn], [0x06064CF3n, 0xFA51A3DAn],
  [0xDA79FA60n, 0x207CC464n], [0xBED20560n, 0x3C3C74F3n], [0x89F9C9F8n, 0xD2D14B61n],
  [0x35FA38C6n, 0xBB04A2C1n], [0xCB49E3C6n, 0xC5626167n],
];
const CS64_FACTOR = 0x82893933n;
const CS64_ADJUSTMENT0 = 0xF2F90B1An;
const CS64_ADJUSTMENT1 = 0x0B1A0000n;

const rol16 = (v: bigint): bigint => {
  v &= M;
  return ((v << 16n) | (v >> 16n)) & M;
};
const sigma0 = (v: bigint): bigint => ((v >> 7n) ^ (v << 25n) ^ (v >> 18n) ^ (v << 14n) ^ (v >> 3n)) & M;
const sigma1 = (v: bigint): bigint => ((v >> 17n) ^ (v << 15n) ^ (v >> 19n) ^ (v << 13n) ^ (v >> 10n)) & M;

// ROTR via multiplicação por 2^32+1 (igual ao Python): os bits altos sobram e
// só são cortados nas somas mascaradas.
const bigSigma1 = (e: bigint): bigint => {
  const r = e * 0x100000001n;
  return (r >> 6n) ^ (r >> 11n) ^ (r >> 25n);
};
const bigSigma0 = (a: bigint): bigint => {
  const r = a * 0x100000001n;
  return (r >> 2n) ^ (r >> 13n) ^ (r >> 22n);
};

// Rodadas SHA-256 (versão simples, sem o desenrolamento do Python, mesmo resultado).
function sha256Rounds(state: bigint[], words: bigint[], firstRound = 0): bigint[] {
  let [a, b, c, d, e, f, g, h] = state;
  const constants = firstRound === 14 ? K_BLOCK : K;
  for (let i = firstRound; i < 64; i++) {
    const t1 = h + bigSigma1(e) + (g ^ (e & (f ^ g))) + constants[i] + words[i];
    const t2 = bigSigma0(a) + ((a & b) | (c & (a | b)));
    h = g; g = f; f = e; e = (d + t1) & M;
    d = c; c = b; b = a; a = (t1 + t2) & M;
  }
  return [a, b, c, d, e, f, g, h];
}

function expandSchedule(words: bigint[], firstWord = 16): void {
  for (let i = firstWord; i < 64; i++) {
    const x = words[i - 2], y = words[i - 15];
    const s1 = (x >> 17n) ^ (x << 15n) ^ (x >> 19n) ^ (x << 13n) ^ (x >> 10n);
    const s0 = (y >> 7n) ^ (y << 25n) ^ (y >> 18n) ^ (y << 14n) ^ (y >> 3n);
    words.push((s1 + words[i - 7] + s0 + words[i - 16]) & M);
  }
}

const beInt = (bytes: Uint8Array): bigint => bytes.reduce((acc, b) => (acc << 8n) | BigInt(b), 0n);

function sha256Init(data: Uint8Array): bigint[] {
  const words: bigint[] = [...Array(14).fill(0n), beInt(data.subarray(0, 3)), beInt(data.subarray(3, 7))];
  for (let i = 16; i < 30; i++) {
    let value = SHA256_SCHEDULE[i - 16];
    if (i - 2 >= 14) value += i === 16 ? (sigma1(words[i - 2]) ^ SIGMA1_ADJUSTMENT) : sigma1(words[i - 2]);
    if (i - 7 >= 14) value += words[i - 7];
    if (i - 15 >= 14) value += i === 29 ? (sigma0(words[i - 15]) ^ SIGMA0_ADJUSTMENT) : sigma0(words[i - 15]);
    words.push(value & M);
  }
  words.push((sigma1(words[28]) + words[23] + sigma0(words[15]) + words[14] + SHA256_ADJUSTMENT - K[14]) & M);
  expandSchedule(words, 31);
  const working = sha256Rounds(SHA256_STATE, words, 14);
  return SHA256_INITIAL.map((x, i) => (x + working[i]) & M);
}

function sha256Digest(data: Uint8Array): Uint8Array {
  if (data.length < 7) throw new Error("Token salt must contain at least seven bytes");
  const length = 57 + data.length;
  const zeros = (((55 - length) % 64) + 64) % 64; // módulo do Python (sempre >= 0)
  const padded = new Uint8Array(data.length - 7 + 1 + zeros + 8);
  padded.set(data.subarray(7), 0);
  padded[data.length - 7] = 0x80;
  new DataView(padded.buffer).setBigUint64(padded.length - 8, BigInt(length * 8), false);
  let state = sha256Init(data.subarray(0, 7));
  const view = new DataView(padded.buffer);
  for (let offset = 0; offset < padded.length; offset += 64) {
    const words: bigint[] = [];
    for (let j = 0; j < 16; j++) words.push(BigInt(view.getUint32(offset + j * 4, false)));
    expandSchedule(words);
    const working = sha256Rounds(state, words);
    state = state.map((x, i) => (x + working[i]) & M);
  }
  const out = new Uint8Array(32);
  const outView = new DataView(out.buffer);
  state.forEach((w, i) => outView.setUint32(i * 4, Number(w), false));
  return out;
}

function wordsLe4Even(data: Uint8Array): bigint[] {
  const padLen = (4 - (data.length % 4)) % 4;
  const padded = new Uint8Array(data.length + padLen);
  padded.set(data);
  const view = new DataView(padded.buffer);
  const words: bigint[] = [];
  for (let i = 0; i < padded.length; i += 4) words.push(BigInt(view.getUint32(i, true)));
  if (words.length % 2) words.push(0n);
  return words;
}

function cs64Digest(data: Uint8Array, digest: Uint8Array): [bigint, bigint] {
  const dv = new DataView(digest.buffer, digest.byteOffset);
  let keyA = BigInt(dv.getUint32(0, true)) | 1n;
  let keyB = BigInt(dv.getUint32(4, true)) | 1n;
  const factors = [(keyA * CS64_FACTOR) & M, (keyB * CS64_FACTOR) & M];
  const terms = CS64_COEFFICIENTS.map(([coef], i) => (coef * factors[i % 2]) & M);
  const offsets = CS64_COEFFICIENTS.map(([, off]) => off);
  const withZero = new Uint8Array(data.length + 1);
  withZero.set(data, 1);
  wordsLe4Even(withZero).forEach((word, i) => {
    let term = word * (i % 2 === 0 ? keyA : keyB);
    let offset = rol16(word) * (i % 2 === 0 ? 0xEF0569FBn : 0xC31713DBn);
    if (i === 0) {
      term += CS64_ADJUSTMENT0 * factors[0];
      offset += CS64_ADJUSTMENT1;
    }
    terms.push(term & M);
    offsets.push(offset & M);
  });
  let swapAcc = 0n, swapLast = 0n, state = 0n, acc = 0n;
  for (let i = 0; i < terms.length; i += 2) {
    const x = terms[i], y = terms[i + 1];
    let t = rol16((offsets[i] + x) & M);
    let q = (t * 0x76F50F34n) & M;
    swapAcc += (rol16(q) * 0xC3EFEA97n + q) & M;
    t = rol16((offsets[i + 1] + y) & M);
    q = (t * 0x1881CE3Cn) & M;
    swapLast = (rol16(q) * 0x35BD1EC9n + q) & M;
    swapAcc = (swapAcc + swapLast) & M;

    state = (state * keyA + x) & M;
    state = (rol16(state) * 0xCF98B111n) & M;
    state = (rol16(state) * 0x87085B9Fn) & M;
    state = (rol16(state) * 0x12CEB96Dn) & M;
    state = (rol16(state) * 0x257E1D83n) & M;
    acc += state;
    t = (state * keyB + y) & M;
    t = (rol16(t) * 0xA27416F5n) & M;
    t = (rol16(t) * 0xD38396FFn) & M;
    state = (rol16((rol16(t) * 0x7C932B89n) & M) * 0xBFA49F69n) & M;
    acc = (acc + state) & M;
  }
  return [swapLast ^ state, swapAcc ^ acc];
}

const toHex = (bytes: Uint8Array): string =>
  Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();

// unixTimestamp só pra teste; sem ele, usa o relógio atual.
export function generateSecMsGecV2(unixTimestamp?: number): string {
  let ticks = (unixTimestamp ?? Date.now() / 1000) + WIN_EPOCH;
  ticks -= ticks % 300; // janela de 5 minutos
  ticks *= 1e7; // segundos -> intervalos de 100ns
  const data = new TextEncoder().encode(`${ticks.toFixed(0)}${TRUSTED_CLIENT_TOKEN}`);
  const digest = sha256Digest(data);
  const [c0, c1] = cs64Digest(data, digest);
  const cs = new Uint8Array(8);
  const csView = new DataView(cs.buffer);
  csView.setUint32(0, Number(c0), true);
  csView.setUint32(4, Number(c1), true);
  return `${toHex(cs)}-${toHex(digest)}`;
}
