import { supabase } from './supabase.js?v=4';

// Escondido por padrão; só reaparece se applyManagerAccessGuard() (mais
// abaixo) confirmar que quem está logado é admin. Some antes de qualquer
// outra coisa rodar, pra não piscar visível pra quem não pode gerenciar.
document.getElementById('open-manager')?.style.setProperty('display', 'none');

const levels = {
    1: [
        { sentence: ["Eu quero beber", null, "."], answers: ["água"], options: ["água", "cadeira"], icon: "💧" },
        { sentence: ["Eu estou com", null, "."], answers: ["fome"], options: ["fome", "janela"], icon: "🍽️" },
        { sentence: ["Eu preciso de", null, "."], answers: ["ajuda"], options: ["ajuda", "azul"], icon: "🤝" },
        { sentence: ["Eu quero comer", null, "."], answers: ["arroz"], options: ["arroz", "janela"], icon: "🍚" },
        { sentence: ["Eu preciso ir ao", null, "."], answers: ["banheiro"], options: ["banheiro", "azul"], icon: "🚻" },
        { sentence: ["Estou com", null, "."], answers: ["sede"], options: ["sede", "cadeira"], icon: "🥤" },
        { sentence: ["Eu quero", null, "."], answers: ["descansar"], options: ["descansar", "prato"], icon: "🛋️" },
        { sentence: ["Por favor, abra a", null, "."], answers: ["porta"], options: ["porta", "café"], icon: "🚪" },
        { sentence: ["Eu sinto", null, "."], answers: ["dor"], options: ["dor", "sapato"], icon: "🤕" },
        { sentence: ["Quero falar com minha", null, "."], answers: ["família"], options: ["família", "colher"], icon: "👨‍👩‍👧" },
        { sentence: ["Eu preciso do meu", null, "."], answers: ["remédio"], options: ["remédio", "jardim"], icon: "💊" },
        { sentence: ["Vamos para", null, "."], answers: ["casa"], options: ["casa", "pão"], icon: "🏠" },
        { sentence: ["Eu gosto de", null, "."], answers: ["café"], options: ["café", "relógio"], icon: "☕" }
    ],
    2: [
        { sentence: ["Quero ir ao", null, "."], answers: ["banheiro"], options: ["banheiro", "água", "comer", "feliz"], icon: "🚻" },
        { sentence: ["Hoje eu estou", null, "."], answers: ["feliz"], options: ["café", "feliz", "televisão", "sapato"], icon: "😊" },
        { sentence: ["Eu gosto de ouvir", null, "."], answers: ["música"], options: ["cadeira", "chuva", "música", "porta"], icon: "🎵" },
        { sentence: ["Eu preciso falar com o", null, "."], answers: ["médico"], options: ["médico", "garfo", "ônibus", "jardim"], icon: "🩺" },
        { sentence: ["Para ouvir música, ligo o", null, "."], answers: ["rádio"], options: ["rádio", "travesseiro", "prato", "sapato"], icon: "📻" },
        { sentence: ["Eu tomo o remédio com", null, "."], answers: ["água"], options: ["água", "chave", "camisa", "relógio"], icon: "💊" },
        { sentence: ["À noite eu durmo na", null, "."], answers: ["cama"], options: ["cama", "porta", "cozinha", "rua"], icon: "🛏️" },
        { sentence: ["Eu compro comida no", null, "."], answers: ["mercado"], options: ["mercado", "quarto", "telefone", "sofá"], icon: "🛒" },
        { sentence: ["Quando está frio, uso", null, "."], answers: ["casaco"], options: ["casaco", "copo", "banana", "controle"], icon: "🧥" },
        { sentence: ["Com pasta de dente, escovo os", null, "."], answers: ["dentes"], options: ["dentes", "óculos", "pratos", "sapatos"], icon: "🪥" },
        { sentence: ["Para sair, pego minhas", null, "."], answers: ["chaves"], options: ["chaves", "meias", "flores", "xícaras"], icon: "🔑" },
        { sentence: ["Eu vejo as horas no", null, "."], answers: ["relógio"], options: ["relógio", "fogão", "espelho", "travesseiro"], icon: "🕒" },
        { sentence: ["Eu sento na", null, "."], answers: ["cadeira"], options: ["cadeira", "janela", "geladeira", "toalha"], icon: "🪑" }
    ],
    3: [
        { sentence: ["Eu quero", null, "com", null, "."], answers: ["pão", "queijo"], options: ["queijo", "correr", "pão", "azul"], icon: "🥪" },
        { sentence: ["Hoje está", null, "e eu quero", null, "."], answers: ["quente", "água"], options: ["água", "longe", "quente", "cadeira"], icon: "☀️" },
        { sentence: ["Eu estou", null, "e preciso", null, "."], answers: ["cansado", "descansar"], options: ["descansar", "verde", "cansado", "copo"], icon: "😴" },
        { sentence: ["Eu quero", null, "sem", null, "."], answers: ["café", "açúcar"], options: ["açúcar", "café", "sapato", "janela"], icon: "☕" },
        { sentence: ["Hoje estou", null, "e quero", null, "."], answers: ["cansado", "descansar"], options: ["descansar", "cansado", "garfo", "azul"], icon: "🛋️" },
        { sentence: ["Vou ao", null, "comprar", null, "."], answers: ["mercado", "pão"], options: ["pão", "mercado", "rádio", "camisa"], icon: "🛒" },
        { sentence: ["Eu", null, "tomar o", null, "agora."], answers: ["preciso", "remédio"], options: ["remédio", "preciso", "cadeira", "verde"], icon: "💊" },
        { sentence: ["Por favor,", null, "para minha", null, "."], answers: ["ligue", "filha"], options: ["filha", "ligue", "prato", "correr"], icon: "📞" },
        { sentence: ["Quero vestir a", null, null, "."], answers: ["camisa", "azul"], options: ["azul", "camisa", "café", "ônibus"], icon: "👕" },
        { sentence: ["Vou ao", null, "lavar as", null, "."], answers: ["banheiro", "mãos"], options: ["mãos", "banheiro", "televisão", "sapato"], icon: "🧼" },
        { sentence: ["À", null, "eu gosto de ver", null, "."], answers: ["noite", "televisão"], options: ["televisão", "noite", "garfo", "rua"], icon: "📺" },
        { sentence: ["Estou com", null, "na", null, "."], answers: ["dor", "cabeça"], options: ["cabeça", "dor", "janela", "pão"], icon: "🤕" },
        { sentence: ["Vamos tomar", null, "na", null, "."], answers: ["café", "cozinha"], options: ["cozinha", "café", "relógio", "camisa"], icon: "☕" }
    ],
    4: [
        { sentence: [null, null, null, null], answers: ["Eu", "quero", "beber", "água."], options: ["água.", "beber", "Eu", "quero"], icon: "💧" },
        { sentence: [null, null, null, null], answers: ["Hoje", "eu", "estou", "feliz."], options: ["feliz.", "estou", "Hoje", "eu"], icon: "😊" },
        { sentence: [null, null, null, null], answers: ["Preciso", "ir", "ao", "banheiro."], options: ["banheiro.", "ao", "Preciso", "ir"], icon: "🚻" },
        { sentence: [null, null, null, null], answers: ["Eu", "preciso", "de", "ajuda."], options: ["ajuda.", "de", "Eu", "preciso"], icon: "🤝" },
        { sentence: [null, null, null, null], answers: ["Hoje", "eu", "estou", "bem."], options: ["bem.", "eu", "Hoje", "estou"], icon: "🙂" },
        { sentence: [null, null, null, null], answers: ["Quero", "beber", "um", "café."], options: ["café.", "um", "Quero", "beber"], icon: "☕" },
        { sentence: [null, null, null, null], answers: ["Vou", "tomar", "meu", "remédio."], options: ["remédio.", "meu", "tomar", "Vou"], icon: "💊" },
        { sentence: [null, null, null, null], answers: ["Preciso", "usar", "o", "banheiro."], options: ["o", "banheiro.", "Preciso", "usar"], icon: "🚻" },
        { sentence: [null, null, null, null], answers: ["Minha", "cabeça", "está", "doendo."], options: ["doendo.", "Minha", "está", "cabeça"], icon: "🤕" },
        { sentence: [null, null, null, null], answers: ["Vamos", "falar", "mais", "tarde."], options: ["mais", "tarde.", "Vamos", "falar"], icon: "💬" },
        { sentence: [null, null, null, null], answers: ["Eu", "gosto", "desta", "música."], options: ["música.", "desta", "Eu", "gosto"], icon: "🎵" },
        { sentence: [null, null, null, null, null], answers: ["Por", "favor,", "abra", "a", "porta."], options: ["porta.", "a", "Por", "abra", "favor,"], icon: "🚪" },
        { sentence: [null, null, null, null, null], answers: ["Quero", "ligar", "para", "minha", "filha."], options: ["filha.", "para", "Quero", "minha", "ligar"], icon: "📞" }
    ],
    5: [
        { sentence: ["Eu quero beber", null, "."], answers: ["água"], options: ["água", "comida", "telefone"], icons: { água: "💧", comida: "🍽️", telefone: "📱" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Eu quero comer", null, "."], answers: ["maçã"], options: ["maçã", "carro", "cama"], icons: { maçã: "🍎", carro: "🚗", cama: "🛏️" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Eu preciso usar o", null, "."], answers: ["telefone"], options: ["sapato", "telefone", "copo"], icons: { sapato: "👟", telefone: "📱", copo: "🥛" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Eu bebo café na", null, "."], answers: ["xícara"], options: ["xícara", "chave", "sapato"], icons: { xícara: "☕", chave: "🔑", sapato: "👟" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Quando preciso urinar, vou ao", null, "."], answers: ["banheiro"], options: ["banheiro", "cama", "ônibus"], icons: { banheiro: "🚻", cama: "🛏️", ônibus: "🚌" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Vou ligar pelo", null, "."], answers: ["telefone"], options: ["telefone", "rádio", "televisão"], icons: { telefone: "📱", rádio: "📻", televisão: "📺" }, icon: "🗣️", audioOnly: true },
        { sentence: ["É hora do", null, "."], answers: ["remédio"], options: ["remédio", "comida", "sapato"], icons: { remédio: "💊", comida: "🍽️", sapato: "👟" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Eu quero deitar na", null, "."], answers: ["cama"], options: ["cama", "cadeira", "carro"], icons: { cama: "🛏️", cadeira: "🪑", carro: "🚗" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Para abrir a porta, pego a", null, "."], answers: ["chave"], options: ["chave", "colher", "banana"], icons: { chave: "🔑", colher: "🥄", banana: "🍌" }, icon: "🗣️", audioOnly: true },
        { sentence: ["A fruta amarela é a", null, "."], answers: ["banana"], options: ["banana", "carro", "sapato"], icons: { banana: "🍌", carro: "🚗", sapato: "👟" }, icon: "🗣️", audioOnly: true },
        { sentence: ["A roupa que visto no tronco é a", null, "."], answers: ["camisa"], options: ["camisa", "colher", "carro"], icons: { camisa: "👕", colher: "🥄", carro: "🚗" }, icon: "🗣️", audioOnly: true },
        { sentence: ["Quero assistir à", null, "."], answers: ["televisão"], options: ["televisão", "rádio", "livro"], icons: { televisão: "📺", rádio: "📻", livro: "📖" }, icon: "🗣️", audioOnly: true },
        { sentence: ["No ponto, espero o", null, "."], answers: ["ônibus"], options: ["ônibus", "cama", "colher"], icons: { ônibus: "🚌", cama: "🛏️", colher: "🥄" }, icon: "🗣️", audioOnly: true }
    ]
};

const state = { level: 1, round: 0, score: 0, selectedId: null, completed: false, sound: true };
const embeddedMode = new URLSearchParams(window.location.search).get("embedded") === "1";
if (embeddedMode) {
    document.body.classList.add("embedded-mode");
    const scoreCard = document.querySelector(".score-card");
    const exerciseTopline = document.querySelector(".exercise-topline");
    const listenButton = document.getElementById("listen-prompt");
    if (scoreCard && exerciseTopline) exerciseTopline.insertBefore(scoreCard, listenButton);
}
const CUSTOM_QUESTIONS_KEY = "comunicafacil_complete_frase_custom_v1";
const sentenceArea = document.getElementById("sentence-area");
const wordBank = document.getElementById("word-bank");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-round");
const selectionHint = document.getElementById("selection-hint");
const visualClue = document.getElementById("visual-clue");

function loadCustomQuestions() {
    try {
        const saved = JSON.parse(localStorage.getItem(CUSTOM_QUESTIONS_KEY) || "[]");
        if (!Array.isArray(saved)) return [];
        saved.forEach(entry => {
            const level = Number(entry.level);
            if (levels[level] && entry.question) levels[level].push({ ...entry.question, customId: entry.id });
        });
        return saved;
    } catch (error) {
        return [];
    }
}

let customQuestions = loadCustomQuestions();

function currentExercise() { return levels[state.level][state.round]; }

// Mesma voz neural usada na interface principal: pt-BR-FranciscaNeural via edge-tts.
// O cache também é compartilhado com app.js para evitar baixar o mesmo áudio novamente.
const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname) || window.location.protocol === "file:";

// ── Auth guard (mesmo padrão de book-reader.js) ──────────────────────────
// Fora do iframe embutido do app (uso isolado direto pela URL), exige sessão.
// "Gerenciar frases" reaparece pra admin (biblioteca global) ou médico
// (banco próprio, Fase 13) — as duas checagens de verdade continuam sendo
// as policies de RLS em exercises/exercise_items (Fase 10-13, mesma que já
// protege naming/afasia/jogo2), isso aqui só evita mostrar um botão morto.
let canManageQuestions = false;
let isDoctorRole = false;
let currentUserId = null;
let currentPatientDoctorUserId = null; // médico do paciente logado, pra achar o container certo na hora de jogar

async function applyManagerAccessGuard() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        if (!isLocalhost && !embeddedMode) window.location.href = "index.html";
        return;
    }
    currentUserId = session.user.id;
    const { data: roleRow } = await supabase
        .from("user_roles").select("role").eq("user_id", session.user.id).maybeSingle();
    const role = roleRow?.role;
    isDoctorRole = role === "doctor";
    canManageQuestions = role === "admin" || isDoctorRole;
    if (canManageQuestions) document.getElementById("open-manager")?.style.removeProperty("display");

    if (role === "patient") {
        const { data: patientRow } = await supabase
            .from("patients").select("doctor_user_id").eq("user_id", session.user.id).maybeSingle();
        currentPatientDoctorUserId = patientRow?.doctor_user_id || null;
    }

    await loadRemoteCustomQuestions();
}
applyManagerAccessGuard();

supabase.auth.onAuthStateChange((event) => {
    if (event === "SIGNED_OUT" && !isLocalhost && !embeddedMode) window.location.href = "index.html";
});

// ── Perguntas compartilhadas (Fase 13) ────────────────────────────────────
// Mesmo padrão de container por seed_key + doctor_user_id usado por
// naming/afasia/jogo2 em app.js (Fases 10-12), reimplementado aqui porque
// este arquivo roda isolado num iframe, sem acesso ao escopo de app.js.
// Os 5 níveis fixos em `levels` continuam sendo o conteúdo de "fábrica";
// só perguntas customizadas por médico/admin entram no Supabase — o
// fallback em localStorage (customQuestions) continua existindo do jeito
// que sempre existiu, sem nenhuma mudança de comportamento pra quem não
// está online ou não tem papel de médico/admin.
const COMPLETE_FRASE_SEED_KEY = "complete-frase-container";
const COMPLETE_FRASE_TITLE = "Complete a Frase|orange";
const COMPLETE_FRASE_CARD_ROLE = "complete-frase-card";

function doctorScopedSeedKey(baseSeedKey, doctorUserId) {
    return `${baseSeedKey}:doctor:${doctorUserId}`;
}

let remoteCustomQuestions = []; // entradas vindas do Supabase — nunca somadas em customQuestions/localStorage

function parseCompleteFraseItem(item) {
    try {
        const payload = JSON.parse(item.link || "{}");
        if (!payload.level || !payload.question) return null;
        return { id: `remote-${item.id}`, level: payload.level, question: payload.question, remoteItemId: item.id };
    } catch (e) {
        return null;
    }
}

async function fetchCompleteFraseContainerItems(seedKey) {
    const { data: container } = await supabase.from("exercises").select("id").eq("seed_key", seedKey).maybeSingle();
    if (!container) return [];
    const { data: items } = await supabase
        .from("exercise_items").select("*").eq("exercise_id", container.id).eq("role", COMPLETE_FRASE_CARD_ROLE);
    return (items || []).map(parseCompleteFraseItem).filter(Boolean);
}

// Container de quem está autorando: médico usa só o próprio; admin usa o
// global — cria se ainda não existir (mesmo padrão de
// getOrCreateGameContainer em app.js, sem o fallback legado por título, que
// é só pra containers antigos do admin sem seed_key).
async function getOrCreateOwnCompleteFraseContainer() {
    const seedKey = isDoctorRole ? doctorScopedSeedKey(COMPLETE_FRASE_SEED_KEY, currentUserId) : COMPLETE_FRASE_SEED_KEY;
    const { data: existing } = await supabase.from("exercises").select("id").eq("seed_key", seedKey).maybeSingle();
    if (existing) return existing.id;
    const insertPayload = { title: COMPLETE_FRASE_TITLE, visible: false, seed_key: seedKey };
    if (isDoctorRole) insertPayload.doctor_user_id = currentUserId;
    const { data: created, error } = await supabase.from("exercises").insert([insertPayload]).select().single();
    if (error) throw error;
    return created.id;
}

async function loadRemoteCustomQuestions() {
    try {
        let items = [];
        if (canManageQuestions) {
            // Autoria: só o próprio container (médico) ou o global (admin).
            const seedKey = isDoctorRole ? doctorScopedSeedKey(COMPLETE_FRASE_SEED_KEY, currentUserId) : COMPLETE_FRASE_SEED_KEY;
            items = await fetchCompleteFraseContainerItems(seedKey);
        } else if (currentPatientDoctorUserId) {
            // Paciente jogando: tenta o container do próprio médico; se ele
            // não tiver nada customizado ainda, cai pro global do admin —
            // exatamente o comportamento de hoje preservado por padrão.
            items = await fetchCompleteFraseContainerItems(doctorScopedSeedKey(COMPLETE_FRASE_SEED_KEY, currentPatientDoctorUserId));
            if (items.length === 0) items = await fetchCompleteFraseContainerItems(COMPLETE_FRASE_SEED_KEY);
        } else {
            items = await fetchCompleteFraseContainerItems(COMPLETE_FRASE_SEED_KEY);
        }
        remoteCustomQuestions = items;
        items.forEach(entry => {
            if (levels[entry.level]) levels[entry.level].push({ ...entry.question, customId: entry.id });
        });
        if (items.length > 0) renderQuestionLibrary();
    } catch (e) {
        console.warn("Não foi possível carregar perguntas compartilhadas:", e);
    }
}

const LOCAL_TTS_ENDPOINT = "http://127.0.0.1:5001/chat";
const TTS_STORAGE_PREFIX = "comunica_tts_v1:";
const ttsCache = new Map();
let currentAudio = null;
let availableVoices = [];

function loadVoices() {
    if ("speechSynthesis" in window) availableVoices = window.speechSynthesis.getVoices();
}

if ("speechSynthesis" in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

function speechText(text) {
    return String(text || "").replace(/_{2,}/g, " ... ").replace(/\s{2,}/g, " ").trim();
}

function speakNative(text) {
    if (!("speechSynthesis" in window) || !text || !state.sound) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(speechText(text));
    const ptVoices = availableVoices.filter(voice => voice.lang.startsWith("pt"));
    utterance.voice = ptVoices.find(voice =>
        voice.name.includes("Premium") || voice.name.includes("Enhanced") ||
        voice.name.includes("Google") || voice.name.includes("Luciana")
    ) || ptVoices[0] || null;
    utterance.lang = "pt-BR";
    utterance.rate = 0.7;
    window.speechSynthesis.speak(utterance);
}

async function fetchTtsAudio(endpoint, text) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ttsText: speechText(text) })
    });
    const data = await response.json();
    if (!response.ok || !data.audio) throw new Error(data.error || `Erro HTTP ${response.status}`);
    return data.audio;
}

// A função "chat" exige login: supabase.functions.invoke manda o token da
// sessão e usa o projeto certo (produção ou staging). O fetch sem cabeçalho
// que existia aqui levava 401 e caía sempre na voz do navegador.
async function fetchSupabaseTtsAudio(text) {
    const { data, error } = await supabase.functions.invoke("chat", { body: { ttsText: speechText(text) } });
    if (error || !data?.audio) throw error || new Error(data?.error || "Resposta sem áudio");
    return data.audio;
}

function getTtsAudio(text) {
    const normalizedText = speechText(text);
    if (ttsCache.has(normalizedText)) return ttsCache.get(normalizedText);
    const promise = (async () => {
        try {
            const stored = localStorage.getItem(TTS_STORAGE_PREFIX + normalizedText);
            if (stored) return stored;
        } catch (error) { /* continua sem cache persistente */ }

        let audioBase64;
        if (isLocalhost) {
            try {
                audioBase64 = await fetchTtsAudio(LOCAL_TTS_ENDPOINT, normalizedText);
            } catch (localError) {
                audioBase64 = await fetchSupabaseTtsAudio(normalizedText);
            }
        } else {
            audioBase64 = await fetchSupabaseTtsAudio(normalizedText);
        }
        try {
            localStorage.setItem(TTS_STORAGE_PREFIX + normalizedText, audioBase64);
        } catch (error) {
            // Cache cheio: libera as entradas de TTS antigas (facilmente reconstruídas) e
            // tenta de novo, pra não deixar a quota do localStorage lotada — o que impediria
            // o Supabase de persistir o token de sessão depois.
            try {
                const keysToRemove = [];
                for (let i = 0; i < localStorage.length; i++) {
                    const key = localStorage.key(i);
                    if (key && key.startsWith('comunica_tts_')) keysToRemove.push(key);
                }
                keysToRemove.forEach(k => localStorage.removeItem(k));
                localStorage.setItem(TTS_STORAGE_PREFIX + normalizedText, audioBase64);
            } catch (error2) { /* cache cheio: só memória */ }
        }
        return audioBase64;
    })();
    promise.catch(() => ttsCache.delete(normalizedText));
    ttsCache.set(normalizedText, promise);
    return promise;
}

function prefetchTts(text) {
    if (text) getTtsAudio(text).catch(() => { /* o clique usará a voz nativa se necessário */ });
}

async function speak(text) {
    if (!state.sound || !text) return;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (currentAudio) currentAudio.pause();
    try {
        const audioBase64 = await getTtsAudio(text);
        if (!state.sound) return;
        currentAudio = new Audio(`data:audio/mp3;base64,${audioBase64}`);
        await currentAudio.play();
    } catch (error) {
        speakNative(text);
    }
}

function promptText(includeAnswers = false) {
    const item = currentExercise();
    let answerIndex = 0;
    return item.sentence.map(part => {
        if (part !== null) return part;
        const answer = item.answers[answerIndex++];
        return includeAnswers ? answer : "...";
    }).join(" ").replace(/\s+([.?!,])/g, "$1").replace(/\.{4,}/g, "...");
}

function updateCounters() {
    document.getElementById("score-value").textContent = state.score;
    document.getElementById("round-value").textContent = `${state.round + 1}/${levels[state.level].length}`;
}

function setFeedback(type, message, icon = "fa-circle-info") {
    feedback.className = `feedback ${type}`.trim();
    feedback.innerHTML = `<i class="fas ${icon}" aria-hidden="true"></i><span>${message}</span>`;
}

function usesTouchLayout() {
    return window.matchMedia?.("(pointer: coarse)").matches === true;
}

function removalInstruction() {
    return usesTouchLayout()
        ? "Para remover, toque na palavra inserida."
        : "Para remover, clique na palavra inserida ou arraste-a de volta.";
}

function createDropZone(index) {
    const zone = document.createElement("button");
    zone.type = "button";
    zone.className = "drop-zone";
    zone.dataset.slot = index;
    zone.draggable = false;
    zone.setAttribute("aria-label", `Espaço ${index + 1} da frase`);
    zone.addEventListener("click", event => {
        if (zone.classList.contains("filled")) removePlacedOption(zone);
        else placeSelected(zone);
    });
    zone.addEventListener("dragover", event => { event.preventDefault(); zone.classList.add("drag-over"); });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", event => {
        event.preventDefault();
        zone.classList.remove("drag-over");
        if (zone.classList.contains("filled")) removePlacedOption(zone);
        placeOption(event.dataTransfer.getData("text/plain"), zone);
    });
    zone.addEventListener("dragstart", event => {
        if (!zone.classList.contains("filled") || state.completed) {
            event.preventDefault();
            return;
        }
        event.dataTransfer.setData("application/x-comunica-slot", zone.dataset.slot);
        event.dataTransfer.effectAllowed = "move";
        zone.classList.add("dragging-out");
    });
    zone.addEventListener("dragend", () => {
        zone.classList.remove("dragging-out");
        wordBank.classList.remove("return-target");
    });
    return zone;
}

function createOption(word, index, item) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `word-option${item.audioOnly ? " image-only" : ""}`;
    button.id = `option-${index}`;
    button.dataset.word = word;
    button.draggable = true;
    button.setAttribute("aria-label", item.audioOnly ? `Opção: ${word}` : word);
    // textContent (não innerHTML): word/icons vêm de exercícios que o médico
    // cadastra em texto livre — interpolar como HTML permitia gravar
    // <img onerror=...> numa opção e rodar script na sessão do paciente que
    // jogasse aquele exercício.
    const optionSpan = document.createElement("span");
    if (item.audioOnly) optionSpan.setAttribute("aria-hidden", "true");
    optionSpan.textContent = item.audioOnly ? (item.icons[word] || "") : word;
    button.appendChild(optionSpan);
    button.addEventListener("click", () => selectOption(button));
    button.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", button.id);
        event.dataTransfer.effectAllowed = "move";
        selectOption(button);
    });
    return button;
}

function renderExercise() {
    state.selectedId = null;
    state.completed = false;
    sentenceArea.innerHTML = "";
    wordBank.innerHTML = "";
    nextButton.disabled = true;
    nextButton.innerHTML = state.round === levels[state.level].length - 1
        ? `Concluir nível <i class="fas fa-check" aria-hidden="true"></i>`
        : `Próxima <i class="fas fa-arrow-right" aria-hidden="true"></i>`;

    const item = currentExercise();
    let slotIndex = 0;
    item.sentence.forEach(part => {
        if (part === null) {
            sentenceArea.appendChild(createDropZone(slotIndex++));
        } else {
            const text = document.createElement("span");
            text.className = "sentence-word";
            text.textContent = part;
            sentenceArea.appendChild(text);
        }
    });

    item.options.forEach((word, index) => wordBank.appendChild(createOption(word, index, item)));
    visualClue.textContent = item.icon || "";
    visualClue.classList.toggle("visible", Boolean(item.icon));
    document.getElementById("instruction-text").textContent = state.level === 4
        ? "Organize todas as palavras para formar a frase."
        : state.level === 5
            ? "Ouça a frase e escolha a imagem correta."
            : item.answers.length > 1
                ? "Complete os dois espaços na ordem correta."
                : "Leve uma palavra até o espaço vazio.";
    selectionHint.textContent = "Nenhuma opção selecionada";
    setFeedback("", state.level === 5
        ? "Toque em Ouvir frase quando quiser. Depois, escolha uma imagem."
        : `Arraste uma opção até a lacuna. ${removalInstruction()}`);
    const listenBtn = document.getElementById("listen-prompt");
    if (listenBtn) listenBtn.classList.toggle("visible", Boolean(state.level === 5 || state.completed));
    updateCounters();
    prefetchTts(promptText(false));
}

function selectOption(button) {
    if (state.completed || button.classList.contains("used")) return;
    document.querySelectorAll(".word-option.selected").forEach(el => el.classList.remove("selected"));
    button.classList.add("selected");
    state.selectedId = button.id;
    selectionHint.textContent = `Selecionado: ${button.dataset.word}`;

    const emptyZones = [...document.querySelectorAll(".drop-zone:not(.filled)")];
    document.querySelectorAll(".drop-zone").forEach(el => el.classList.remove("selected-target"));
    if (emptyZones.length === 1) placeOption(button.id, emptyZones[0]);
    else emptyZones.forEach(el => el.classList.add("selected-target"));
}

function placeSelected(zone) {
    if (zone.classList.contains("filled") || !state.selectedId) return;
    placeOption(state.selectedId, zone);
}

function placeOption(optionId, zone) {
    if (state.completed || zone.classList.contains("filled")) return;
    const option = document.getElementById(optionId);
    if (!option || option.classList.contains("used")) return;
    zone.textContent = option.dataset.word;
    zone.dataset.optionId = option.id;
    zone.classList.add("filled");
    zone.draggable = true;
    zone.setAttribute("aria-label", `Remover ${option.dataset.word} deste espaço`);
    zone.title = usesTouchLayout()
        ? "Toque para remover e devolver às opções"
        : "Clique ou arraste de volta às opções para remover";
    option.classList.add("used");
    option.classList.remove("selected");
    state.selectedId = null;
    selectionHint.textContent = "Nenhuma opção selecionada";
    document.querySelectorAll(".drop-zone").forEach(el => el.classList.remove("selected-target"));
    validateIfReady();
}

function removePlacedOption(zone) {
    if (state.completed) return;
    const option = document.getElementById(zone.dataset.optionId);
    if (option) option.classList.remove("used", "selected");
    const slotNumber = Number(zone.dataset.slot) + 1;
    zone.textContent = "";
    zone.removeAttribute("data-option-id");
    zone.removeAttribute("title");
    zone.draggable = false;
    zone.classList.remove("filled", "correct", "wrong", "drag-over", "selected-target");
    zone.setAttribute("aria-label", `Espaço ${slotNumber} da frase`);
    state.selectedId = null;
    selectionHint.textContent = "Nenhuma opção selecionada";
    setFeedback("", "Palavra removida. Escolha outra opção ou arraste novamente.");
}

function clearZones() {
    document.querySelectorAll(".drop-zone").forEach(zone => {
        zone.textContent = "";
        zone.removeAttribute("data-option-id");
        zone.removeAttribute("title");
        zone.draggable = false;
        zone.className = "drop-zone";
        zone.setAttribute("aria-label", `Espaço ${Number(zone.dataset.slot) + 1} da frase`);
    });
    document.querySelectorAll(".word-option").forEach(option => option.classList.remove("used", "selected"));
    state.selectedId = null;
    selectionHint.textContent = "Nenhuma opção selecionada";
}

function validateIfReady() {
    const zones = [...document.querySelectorAll(".drop-zone")];
    if (zones.some(zone => !zone.classList.contains("filled"))) return;
    const answers = zones.map(zone => zone.textContent);
    const correct = answers.every((answer, index) => answer === currentExercise().answers[index]);
    if (correct) {
        zones.forEach(zone => zone.classList.add("correct"));
        state.completed = true;
        state.score += 1;
        nextButton.disabled = false;
        const listenBtn = document.getElementById("listen-prompt");
        if (listenBtn) listenBtn.classList.add("visible");
        setFeedback("success", "Muito bem! A frase está completa.", "fa-circle-check");
        updateCounters();
        speak(`Muito bem! ${promptText(true)}`);
        return;
    }

    zones.forEach((zone, index) => zone.classList.add(zone.textContent === currentExercise().answers[index] ? "correct" : "wrong"));
    setFeedback("retry", "Quase! Vamos tentar de outro jeito.", "fa-lightbulb");
    setTimeout(() => {
        clearZones();
        setFeedback("", "Tente outra vez. Você pode tocar em uma opção.");
    }, 900);
}

document.querySelectorAll(".level-button").forEach(button => {
    button.addEventListener("click", () => {
        const selectedLevel = Number(button.dataset.level);
        if (selectedLevel === state.level) return;
        document.querySelectorAll(".level-button").forEach(el => {
            el.classList.remove("active");
            el.setAttribute("aria-pressed", "false");
        });
        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");
        state.level = selectedLevel;
        state.round = 0;
        state.score = 0;
        renderExercise();
    });
});

document.getElementById("listen-prompt").addEventListener("click", () => speak(promptText(false)));
wordBank.addEventListener("dragover", event => {
    if (!Array.from(event.dataTransfer.types || []).includes("application/x-comunica-slot")) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    wordBank.classList.add("return-target");
});
wordBank.addEventListener("dragleave", event => {
    if (!wordBank.contains(event.relatedTarget)) wordBank.classList.remove("return-target");
});
wordBank.addEventListener("drop", event => {
    const slotIndex = event.dataTransfer.getData("application/x-comunica-slot");
    if (slotIndex === "") return;
    event.preventDefault();
    wordBank.classList.remove("return-target");
    const zone = document.querySelector(`.drop-zone[data-slot="${slotIndex}"]`);
    if (zone) removePlacedOption(zone);
});
document.getElementById("reset-round").addEventListener("click", () => {
    state.round = 0;
    state.score = 0;
    state.selectedId = null;
    state.completed = false;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (currentAudio) currentAudio.pause();
    renderExercise();
});
document.getElementById("sound-toggle").addEventListener("click", event => {
    state.sound = !state.sound;
    event.currentTarget.setAttribute("aria-pressed", String(state.sound));
    event.currentTarget.querySelector("i").className = `fas ${state.sound ? "fa-volume-high" : "fa-volume-xmark"}`;
    event.currentTarget.querySelector("span").textContent = state.sound ? "Som ligado" : "Som desligado";
    if (!state.sound) {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        if (currentAudio) currentAudio.pause();
    }
});

nextButton.addEventListener("click", () => {
    if (!state.completed) return;
    if (state.round < levels[state.level].length - 1) {
        state.round += 1;
        renderExercise();
        return;
    }
    setFeedback("success", `Nível concluído! Você acertou ${state.score} de ${levels[state.level].length}.`, "fa-trophy");
    nextButton.disabled = true;
});

// ====================================================
// CADASTRO LOCAL DE PERGUNTAS
// ====================================================
const managerOverlay = document.getElementById("manager-overlay");
const questionForm = document.getElementById("question-form");
const questionLevel = document.getElementById("question-level");
const questionSentence = document.getElementById("question-sentence");
const questionAnswers = document.getElementById("question-answers");
const questionOptions = document.getElementById("question-options");
const questionIcon = document.getElementById("question-icon");
const formError = document.getElementById("form-error");

function openManager() {
    if (!canManageQuestions) return;
    managerOverlay.classList.add("open");
    managerOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => questionLevel.focus(), 50);
}

function closeManager() {
    managerOverlay.classList.remove("open");
    managerOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.getElementById("open-manager").focus();
}

function parseOptions(value) {
    const separator = value.includes("\n") ? /\n+/ : /,+/;
    return [...new Set(value.split(separator).map(item => item.trim()).filter(Boolean))];
}

function parseAnswers(value) {
    return value.split(",").map(item => item.trim()).filter(Boolean);
}

function normalizeSentenceMarkers(value) {
    return value.replace(/\[(?:lacuna|espaço|espaco)\]|\((?:lacuna|espaço|espaco)\)|_{2,}/gi, "____");
}

function sentenceToParts(value) {
    return normalizeSentenceMarkers(value).split(/_{3,}/).map(part => part.trim()).flatMap((part, index, source) =>
        index < source.length - 1 ? [part, null] : [part]
    ).filter(part => part === null || part !== "");
}

function countBlanks(value) {
    return (normalizeSentenceMarkers(value).match(/_{3,}/g) || []).length;
}

function shuffleForDisplay(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const target = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
    }
    return shuffled;
}

function setFormError(message = "") {
    formError.textContent = message;
    formError.classList.toggle("visible", Boolean(message));
}

function updateFormForLevel() {
    const level = Number(questionLevel.value);
    const isOrganizer = level === 4;
    const isVisual = level === 5;
    document.getElementById("answers-field").hidden = isOrganizer;
    document.getElementById("options-field").hidden = isOrganizer;
    document.getElementById("sentence-label").innerHTML = `<b class="field-step">1</b> ${isOrganizer ? "Escreva a frase completa" : "Escreva a frase e marque a lacuna"}`;
    document.getElementById("sentence-help").textContent = isOrganizer
        ? "O sistema separa e embaralha as palavras automaticamente."
        : level === 3
            ? "Use o botão Inserir lacuna duas vezes, uma para cada resposta."
            : "Use o botão Inserir lacuna no ponto em que a resposta deve aparecer.";
    questionSentence.placeholder = isOrganizer
        ? "Ex: Eu quero beber água."
        : level === 3
            ? "Ex: Eu quero [lacuna] com [lacuna]."
            : "Ex: Eu quero beber [lacuna].";
    document.getElementById("insert-blank").hidden = isOrganizer;
    document.getElementById("preview-note").hidden = isOrganizer;
    document.getElementById("answers-label").innerHTML = `<b class="field-step correct">2</b> ${isVisual ? "Resposta correta com imagem" : "Resposta que completa a frase"}`;
    document.getElementById("answers-help").textContent = isVisual
        ? "Use o formato palavra | emoji. Ex: água | 💧"
        : level === 3
            ? "Separe as duas respostas corretas com vírgula."
            : "A resposta será incluída automaticamente entre as opções.";
    questionAnswers.placeholder = isVisual ? "Ex: água | 💧" : level === 3 ? "Ex: pão, queijo" : "Ex: água";
    document.getElementById("options-label").innerHTML = `<b class="field-step wrong">3</b> ${isVisual ? "Outras imagens (somente erradas)" : "Outras opções (somente erradas)"}`;
    document.getElementById("options-help").textContent = isVisual
        ? "Digite somente as opções erradas, no formato palavra | emoji."
        : "Digite somente as respostas erradas, uma por linha.";
    questionOptions.placeholder = isVisual ? "comida | 🍽️\ntelefone | 📱" : level === 1 ? "cadeira" : "cadeira\nsapato\njanela";
    document.getElementById("form-help").textContent = isOrganizer
        ? "Digite a frase inteira; as palavras serão embaralhadas."
        : isVisual
            ? "Associe cada alternativa a uma imagem simples."
            : level === 3
                ? "Crie uma frase com duas lacunas."
                : "Preencha uma frase e suas alternativas.";
    document.getElementById("save-question-label").textContent = `Adicionar ao nível ${level}`;
    setFormError();
    updateQuestionPreview();
}

function updateQuestionPreview() {
    const level = Number(questionLevel.value);
    const sentence = questionSentence.value.trim() || (level === 4 ? "Eu quero beber água." : "Eu quero beber [lacuna].");
    const icon = questionIcon.value.trim() || "✨";
    const rawOptions = parseOptions(questionOptions.value || (level === 5 ? "comida | 🍽️\ntelefone | 📱" : "cadeira"));
    const rawAnswers = parseAnswers(questionAnswers.value || (level === 5 ? "água | 💧" : "água"));
    document.getElementById("preview-icon").textContent = icon;
    document.getElementById("preview-sentence").textContent = level === 4 ? sentence : normalizeSentenceMarkers(sentence).replace(/_{3,}/g, "▢");
    const previewOptions = document.getElementById("preview-options");
    previewOptions.innerHTML = "";
    const items = level === 4 ? sentence.split(/\s+/).filter(Boolean) : [...rawAnswers, ...rawOptions];
    items.slice(0, 6).forEach((option, index) => {
        const chip = document.createElement("span");
        chip.textContent = option;
        if (level !== 4 && index < rawAnswers.length) chip.classList.add("correct-preview");
        previewOptions.appendChild(chip);
    });
    updateOptionsProgress();
}

function updateOptionsProgress() {
    const level = Number(questionLevel.value);
    const progress = document.getElementById("options-progress");
    if (level === 4) return;
    const required = level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 2 : 2;
    const current = parseOptions(questionOptions.value).length;
    const remaining = Math.max(0, required - current);
    progress.classList.toggle("complete", remaining === 0);
    progress.innerHTML = remaining === 0
        ? `<i class="fas fa-circle-check" aria-hidden="true"></i> Quantidade suficiente. A resposta certa entrará automaticamente.`
        : `<i class="fas fa-circle-info" aria-hidden="true"></i> ${remaining === 1 ? "Falta" : "Faltam"} adicionar ${remaining} ${remaining === 1 ? "opção errada" : "opções erradas"}.`;
}

function buildQuestionFromForm() {
    const level = Number(questionLevel.value);
    const sentenceValue = questionSentence.value.trim();
    const icon = questionIcon.value.trim() || "✨";
    if (!sentenceValue) throw new Error("Digite uma frase para continuar.");

    if (level === 4) {
        const words = sentenceValue.split(/\s+/).filter(Boolean);
        if (words.length < 3) throw new Error("Use pelo menos três palavras na frase.");
        return { sentence: words.map(() => null), answers: words, options: shuffleForDisplay(words), icon };
    }

    const expectedBlanks = level === 3 ? 2 : 1;
    const blanks = countBlanks(sentenceValue);
    if (blanks !== expectedBlanks) {
        throw new Error(`Este nível precisa de ${expectedBlanks === 1 ? "uma lacuna" : "duas lacunas"} marcada com ____.`);
    }

    const rawAnswers = parseAnswers(questionAnswers.value);
    const answers = level === 5
        ? rawAnswers.map(answer => answer.split("|")[0].trim()).filter(Boolean)
        : rawAnswers;
    if (answers.length !== expectedBlanks) {
        throw new Error(`Informe ${expectedBlanks === 1 ? "uma resposta" : "duas respostas separadas por vírgula"}.`);
    }

    const rawOptions = parseOptions(questionOptions.value);
    const minimumWrongOptions = level === 1 ? 1 : level === 2 ? 3 : level === 3 ? 2 : 2;
    if (rawOptions.length < minimumWrongOptions) {
        throw new Error(`Informe pelo menos ${minimumWrongOptions} ${minimumWrongOptions === 1 ? "alternativa errada" : "alternativas erradas"}.`);
    }

    if (level === 5) {
        const correctParsed = rawAnswers.map(option => {
            const [word, ...iconParts] = option.split("|");
            return { word: word?.trim(), icon: iconParts.join("|").trim() };
        });
        const wrongParsed = rawOptions.map(option => {
            const [word, ...iconParts] = option.split("|");
            return { word: word?.trim(), icon: iconParts.join("|").trim() };
        });
        if (correctParsed.some(option => !option.word || !option.icon) || wrongParsed.some(option => !option.word || !option.icon)) {
            throw new Error("No nível visual, use o formato palavra | emoji em todos os campos.");
        }
        const visualAnswers = new Set(correctParsed.map(option => option.word.toLocaleLowerCase("pt-BR")));
        const repeatedVisual = wrongParsed.find(option => visualAnswers.has(option.word.toLocaleLowerCase("pt-BR")));
        if (repeatedVisual) {
            throw new Error(`A opção “${repeatedVisual.word}” já é a resposta correta. Informe abaixo somente as erradas.`);
        }
        const allParsed = [...correctParsed, ...wrongParsed];
        const options = shuffleForDisplay(allParsed.map(option => option.word));
        return {
            sentence: sentenceToParts(sentenceValue), answers, options,
            icons: Object.fromEntries(allParsed.map(option => [option.word, option.icon])),
            icon, audioOnly: true
        };
    }

    const normalizedAnswers = new Set(answers.map(answer => answer.toLocaleLowerCase("pt-BR")));
    const duplicateAnswer = rawOptions.find(option => normalizedAnswers.has(option.toLocaleLowerCase("pt-BR")));
    if (duplicateAnswer) {
        throw new Error(`A opção “${duplicateAnswer}” já está no campo de resposta correta. Informe abaixo somente as erradas.`);
    }
    return { sentence: sentenceToParts(sentenceValue), answers, options: shuffleForDisplay([...answers, ...rawOptions]), icon };
}

function saveCustomQuestions() {
    try {
        localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(customQuestions));
    } catch (e) {
        // Quota cheia: libera o cache de TTS (fácil de reconstruir) e tenta de novo, pra
        // não perder a pergunta que o admin/médico acabou de cadastrar.
        try {
            const keysToRemove = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key && key.startsWith('comunica_tts_')) keysToRemove.push(key);
            }
            keysToRemove.forEach(k => localStorage.removeItem(k));
            localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(customQuestions));
        } catch (e2) { console.warn('Erro ao salvar pergunta customizada (possível limite de quota):', e2); }
    }
}

function showSavedToast(message) {
    document.querySelector(".saved-toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "saved-toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `<i class="fas fa-circle-check" aria-hidden="true"></i><span></span>`;
    toast.querySelector("span").textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

function renderQuestionLibrary() {
    const list = document.getElementById("question-list");
    const allCustomQuestions = [...customQuestions, ...remoteCustomQuestions];
    document.getElementById("question-count").textContent = allCustomQuestions.length;
    const standardCount = Object.values(levels).flat().filter(question => !question.customId).length;
    document.getElementById("standard-question-count").textContent = `${standardCount} perguntas prontas`;
    list.innerHTML = "";
    if (!allCustomQuestions.length) {
        const empty = document.createElement("div");
        empty.className = "question-empty";
        empty.innerHTML = `<i class="fas fa-inbox" aria-hidden="true"></i><strong>Nenhuma pergunta personalizada</strong><span>As ${standardCount} perguntas padrão já estão disponíveis para jogar.</span>`;
        list.appendChild(empty);
        return;
    }

    [...allCustomQuestions].reverse().forEach(entry => {
        const item = document.createElement("article");
        item.className = "question-item";
        const top = document.createElement("div");
        top.className = "question-item-top";
        const icon = document.createElement("span");
        icon.className = "question-item-icon";
        icon.textContent = entry.question.icon || "✨";
        const copy = document.createElement("div");
        copy.className = "question-item-copy";
        const title = document.createElement("strong");
        title.textContent = entry.level === 4
            ? entry.question.answers.join(" ")
            : entry.question.sentence.map(part => part === null ? "____" : part).join(" ").replace(/\s+([.?!,])/g, "$1");
        const meta = document.createElement("small");
        meta.textContent = `Nível ${entry.level} · ${entry.question.options.length} opções`;
        copy.append(title, meta);
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "delete-question";
        remove.setAttribute("aria-label", `Excluir pergunta: ${title.textContent}`);
        remove.innerHTML = `<i class="fas fa-trash" aria-hidden="true"></i>`;
        remove.addEventListener("click", () => deleteCustomQuestion(entry.id));
        top.append(icon, copy, remove);
        item.appendChild(top);
        list.appendChild(item);
    });
}

function deleteCustomQuestion(id) {
    const localEntry = customQuestions.find(item => item.id === id);
    if (localEntry) {
        customQuestions = customQuestions.filter(item => item.id !== id);
        levels[localEntry.level] = levels[localEntry.level].filter(question => question.customId !== id);
        saveCustomQuestions();
        renderQuestionLibrary();
        if (state.level === Number(localEntry.level)) {
            state.round = 0;
            state.score = 0;
            renderExercise();
        }
        showSavedToast("Pergunta excluída.");
        return;
    }

    const remoteEntry = remoteCustomQuestions.find(item => item.id === id);
    if (!remoteEntry) return;
    remoteCustomQuestions = remoteCustomQuestions.filter(item => item.id !== id);
    levels[remoteEntry.level] = levels[remoteEntry.level].filter(question => question.customId !== id);
    renderQuestionLibrary();
    if (state.level === Number(remoteEntry.level)) {
        state.round = 0;
        state.score = 0;
        renderExercise();
    }
    showSavedToast("Pergunta excluída.");
    supabase.from("exercise_items").delete().eq("id", remoteEntry.remoteItemId).then(({ error }) => {
        if (error) console.warn("Erro ao excluir pergunta compartilhada no servidor:", error);
    });
}

questionForm.addEventListener("submit", async event => {
    event.preventDefault();
    try {
        const level = Number(questionLevel.value);
        const question = buildQuestionFromForm();
        const id = window.crypto?.randomUUID?.() || `question-${Date.now()}`;
        question.customId = id;

        // Médico/admin: tenta salvar compartilhado no Supabase primeiro —
        // só cai pro localStorage puramente local se isso falhar (offline,
        // por exemplo), pra não duplicar a mesma pergunta nas duas listas.
        let savedRemotely = false;
        if (canManageQuestions) {
            try {
                const exerciseId = await getOrCreateOwnCompleteFraseContainer();
                const { customId, ...questionForStorage } = question;
                const { data: inserted, error } = await supabase.from("exercise_items").insert([{
                    exercise_id: exerciseId,
                    word: (question.answers && question.answers[0]) || "",
                    role: COMPLETE_FRASE_CARD_ROLE,
                    link: JSON.stringify({ level, question: questionForStorage })
                }]).select().single();
                if (error) throw error;
                const remoteId = `remote-${inserted.id}`;
                question.customId = remoteId;
                remoteCustomQuestions.push({ id: remoteId, level, question, remoteItemId: inserted.id });
                savedRemotely = true;
            } catch (syncErr) {
                console.warn("Não foi possível salvar a pergunta compartilhada, salvando só neste navegador:", syncErr);
            }
        }
        if (!savedRemotely) {
            customQuestions.push({ id, level, question });
            saveCustomQuestions();
        }
        levels[level].push(question);
        renderQuestionLibrary();
        if (state.level === level) updateCounters();
        questionSentence.value = "";
        questionAnswers.value = "";
        questionOptions.value = "";
        questionIcon.value = "✨";
        setFormError();
        updateQuestionPreview();
        showSavedToast("Pergunta salva e adicionada ao nível!");
        questionSentence.focus();
    } catch (error) {
        setFormError(error.message);
    }
});

document.getElementById("open-manager").addEventListener("click", openManager);
document.getElementById("close-manager").addEventListener("click", closeManager);
document.getElementById("insert-blank").addEventListener("click", () => {
    const marker = "[lacuna]";
    const start = questionSentence.selectionStart ?? questionSentence.value.length;
    const end = questionSentence.selectionEnd ?? start;
    questionSentence.setRangeText(marker, start, end, "end");
    questionSentence.dispatchEvent(new Event("input", { bubbles: true }));
    questionSentence.focus();
});
managerOverlay.addEventListener("click", event => { if (event.target === managerOverlay) closeManager(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && managerOverlay.classList.contains("open")) closeManager(); });
window.addEventListener("message", event => {
    if (event.origin !== window.location.origin || !event.data?.type) return;
    if (event.data.type === "complete-sentence:open-manager") openManager();
    if (event.data.type === "complete-sentence:pause-audio") {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        if (currentAudio) currentAudio.pause();
    }
});
questionLevel.addEventListener("change", updateFormForLevel);
[questionSentence, questionAnswers, questionOptions, questionIcon].forEach(field => field.addEventListener("input", updateQuestionPreview));

updateFormForLevel();
renderQuestionLibrary();

renderExercise();
