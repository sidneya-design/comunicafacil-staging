// "Monte a Frase": o paciente ordena as palavras embaralhadas e, em seguida,
// fala a frase (ouve o modelo, grava, compara). As frases prontas ficam neste
// arquivo; as cadastradas por médico/admin, no Supabase (ver "Acesso e frases
// cadastradas"). O resumo de erros/pistas/fala só existe enquanto a aba
// estiver aberta.
//
// `alt` lista outras ordens que também estão certas ("Hoje vou dormir cedo" /
// "Vou dormir cedo hoje") — exigir só a ordem cadastrada puniria uma resposta
// correta.
//
// Dois modos de montar, com as mesmas pistas e a mesma etapa de fala:
//  - padrão: espaços vazios + banco de palavras, em três níveis;
//  - quadro (?modo=quadro): formato do "Desembaralhe" do Wordwall — as
//    palavras ficam grandes numa lousa e são reordenadas no próprio lugar.
const pageParams = new URLSearchParams(window.location.search);
const boardMode = pageParams.get("modo") === "quadro";
// Dentro do app (iframe em app.html, aberto por openGame('monte-frase')): o
// cabeçalho próprio some e quem conta acessos e tempo de uso é o app, do
// mesmo jeito que faz com o Complete a Frase.
const embeddedMode = pageParams.get("embedded") === "1";

const boardSentences = [
    { text: "O bolo de milho está gostoso.", icon: "🌽" },
    { text: "O café está forte e quente.", icon: "☕", alt: ["O café está quente e forte."] },
    { text: "Amanhã vou viajar para a praia.", icon: "🏖️", alt: ["Vou viajar para a praia amanhã."] },
    { text: "Hoje vou dormir cedo.", icon: "😴", alt: ["Vou dormir cedo hoje."] },
    { text: "Quero visitar minha filha.", icon: "👩" },
    { text: "Ontem teve missa na igreja.", icon: "⛪", alt: ["Teve missa na igreja ontem.", "Teve missa ontem na igreja."] },
    { text: "Minha mãe me ligou.", icon: "📞" },
    { text: "Gosto de ver filme na televisão.", icon: "🎬" },
    { text: "O angu está pronto.", icon: "🍲" },
    { text: "Vou escovar os dentes.", icon: "🪥" }
];

const slotLevels = {
    1: [
        { text: "Eu quero água.", icon: "💧" },
        { text: "O angu está pronto.", icon: "🍲" },
        { text: "Minha mãe me ligou.", icon: "📞" },
        { text: "Vou escovar os dentes.", icon: "🪥" },
        { text: "Quero visitar minha filha.", icon: "👩" },
        { text: "Hoje vou dormir cedo.", icon: "😴", alt: ["Vou dormir cedo hoje."] }
    ],
    2: [
        { text: "Eu preciso tomar meu remédio.", icon: "💊" },
        { text: "Vou ligar para minha filha.", icon: "📞" },
        { text: "Hoje eu estou com fome.", icon: "🍽️", alt: ["Eu estou com fome hoje.", "Eu hoje estou com fome."] },
        { text: "Ontem teve missa na igreja.", icon: "⛪", alt: ["Teve missa na igreja ontem.", "Teve missa ontem na igreja."] },
        { text: "Quero assistir televisão na sala.", icon: "📺" },
        { text: "Vamos tomar café na cozinha.", icon: "☕" }
    ],
    3: [
        { text: "O bolo de milho está gostoso.", icon: "🌽" },
        { text: "O café está forte e quente.", icon: "☕", alt: ["O café está quente e forte."] },
        { text: "Amanhã vou viajar para a praia.", icon: "🏖️", alt: ["Vou viajar para a praia amanhã."] },
        { text: "Gosto de ver filme na televisão.", icon: "🎬" },
        { text: "Hoje à tarde vou ao médico.", icon: "🩺", alt: ["Vou ao médico hoje à tarde."] },
        { text: "Eu quero arroz com feijão e salada.", icon: "🍛" }
    ]
};

// ── Acesso e frases cadastradas ───────────────────────────────────────────
// Quem pode o quê (mesma cadeia dos outros conteúdos do app):
//  - admin: sempre entra; publica a atividade pelo botão de visibilidade do
//    card (game_flags) e cadastra frases no container global;
//  - médico: só entra depois que o admin publicou; cadastra no banco da
//    CLÍNICA (seed_key ":company:<uuid>"), que todos os médicos da mesma
//    empresa veem e editam — médico novo ou substituto encontra tudo o que os
//    colegas já cadastraram. Médico sem empresa usa um banco só dele
//    (":doctor:<uuid>"). Libera por paciente em "Meus Pacientes"
//    (patient_exercise_flags);
//  - paciente (e qualquer outro papel): só entra se o admin publicou E a RLS
//    devolver um container liberado pra ele; nunca cadastra.
// As frases ficam em exercise_items do container (role "monte-frase-card",
// dados em JSON na coluna link), como o Complete a Frase faz. Sem sessão em
// localhost vale a demonstração local: cadastro liberado, salvo só no
// navegador. No modo padrão o nível é decidido pelo número de palavras; no
// quadro entram todas na mesma lista.
const CUSTOM_KEY = "comunicafacil_monte_frase_custom_v1";
const GAME_ID = "monte-frase";
const SEED_KEY = "monte-frase-container"; // = MONTE_FRASE_SEED_KEY em app.js
const CONTAINER_TITLE = "Monte a Frase|blue"; // = MONTE_FRASE_TITLE em app.js
const CARD_ROLE = "monte-frase-card";
const CONFIG_ROLE = "monte-frase-config";
const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

const access = { remote: false, role: null, userId: null, companyId: null, canManage: false, blocked: null, containerId: null, configItemId: null };
let supabase = null;
let custom = { onlyCustom: false, sentences: [] };

function loadLocalCustom() {
    try {
        const saved = JSON.parse(localStorage.getItem(CUSTOM_KEY) || "{}");
        return {
            onlyCustom: Boolean(saved.onlyCustom),
            sentences: Array.isArray(saved.sentences) ? saved.sentences.filter(item => item && typeof item.text === "string") : []
        };
    } catch (error) {
        return { onlyCustom: false, sentences: [] };
    }
}

function doctorScopedSeedKey(doctorUserId) { return `${SEED_KEY}:doctor:${doctorUserId}`; }
function companyScopedSeedKey(companyId) { return `${SEED_KEY}:company:${companyId}`; }

// Banco em que o médico cadastra: o da clínica, se ele tem empresa.
function ownSeedKey() {
    if (access.role !== "doctor") return SEED_KEY;
    return access.companyId ? companyScopedSeedKey(access.companyId) : doctorScopedSeedKey(access.userId);
}

function parseRemoteItems(items) {
    const parsed = { onlyCustom: false, configItemId: null, sentences: [] };
    (items || []).forEach(item => {
        let payload;
        try { payload = JSON.parse(item.link || "{}"); } catch (error) { return; }
        if (item.role === CONFIG_ROLE) {
            parsed.onlyCustom = Boolean(payload.onlyCustom);
            parsed.configItemId = item.id;
        } else if (item.role === CARD_ROLE && typeof payload.text === "string") {
            const entry = { id: `remote-${item.id}`, remoteItemId: item.id, text: payload.text };
            if (Array.isArray(payload.alt) && payload.alt.length) entry.alt = payload.alt;
            if (payload.icon) entry.icon = payload.icon;
            parsed.sentences.push(entry);
        }
    });
    return parsed;
}

async function fetchContainerItems(containerId) {
    const { data, error } = await supabase.from("exercise_items").select("id, role, link").eq("exercise_id", containerId);
    if (error) throw error;
    return parseRemoteItems(data);
}

// Decide se a pessoa entra e carrega as frases do container certo.
async function initAccess() {
    let session = null;
    try {
        ({ supabase } = await import("./supabase.js?v=4"));
        ({ data: { session } } = await supabase.auth.getSession());
    } catch (error) {
        console.warn("Monte a Frase: não consegui falar com o Supabase:", error);
    }

    if (!session) {
        if (isLocalhost) {
            access.canManage = true;
            custom = loadLocalCustom();
            return;
        }
        if (!embeddedMode) window.location.href = "index.html";
        access.blocked = "Entre na sua conta para usar este exercício.";
        return;
    }

    access.remote = true;
    access.userId = session.user.id;
    try {
        const { data: roleRow } = await supabase.from("user_roles").select("role").eq("user_id", access.userId).maybeSingle();
        access.role = roleRow?.role || null;

        if (access.role !== "admin") {
            const { data: flag } = await supabase.from("game_flags").select("visible").eq("game_id", GAME_ID).maybeSingle();
            if (flag?.visible !== true) {
                access.blocked = "Este exercício ainda não foi liberado pelo administrador.";
                return;
            }
        }

        if (access.role === "admin" || access.role === "doctor") {
            // Autoria: o banco global (admin) ou o da clínica do médico.
            access.canManage = true;
            if (access.role === "doctor") {
                const { data: member } = await supabase.from("company_members").select("company_id").eq("user_id", access.userId).maybeSingle();
                access.companyId = member?.company_id || null;
            }
            const { data: own } = await supabase.from("exercises").select("id").eq("seed_key", ownSeedKey()).maybeSingle();
            if (own) {
                access.containerId = own.id;
                const parsed = await fetchContainerItems(own.id);
                custom = { onlyCustom: parsed.onlyCustom, sentences: parsed.sentences };
                access.configItemId = parsed.configItemId;
            }
            return;
        }

        // Paciente: a RLS só devolve containers que o médico liberou pra ele.
        // Ordem: banco da clínica, banco só do médico (médico sem empresa) e,
        // se nenhum tiver frases, o global do admin (quando também liberado).
        const { data: patientRow } = await supabase.from("patients").select("doctor_user_id, company_id").eq("user_id", access.userId).maybeSingle();
        const keys = [];
        if (patientRow?.company_id) keys.push(companyScopedSeedKey(patientRow.company_id));
        if (patientRow?.doctor_user_id) keys.push(doctorScopedSeedKey(patientRow.doctor_user_id));
        keys.push(SEED_KEY);
        const { data: containers } = await supabase.from("exercises").select("id, seed_key").in("seed_key", keys);
        if (!containers?.length) {
            access.blocked = "Este exercício ainda não foi liberado para você. Fale com o seu médico.";
            return;
        }
        for (const key of keys) {
            const container = containers.find(row => row.seed_key === key);
            if (!container) continue;
            const parsed = await fetchContainerItems(container.id);
            if (parsed.sentences.length) {
                custom = { onlyCustom: parsed.onlyCustom, sentences: parsed.sentences };
                break;
            }
        }
    } catch (error) {
        console.warn("Monte a Frase: erro ao verificar o acesso:", error);
        access.canManage = false;
        access.blocked = "Não consegui verificar o acesso a este exercício. Tente de novo em instantes.";
    }
}

// Container de quem está cadastrando — criado na primeira frase (mesmo padrão
// de getOrCreateOwnCompleteFraseContainer em complete-frase.js). O da clínica
// leva company_id: é isso que deixa os colegas lerem e editarem (RLS "banco
// da empresa"), igual aos outros exercícios do médico.
async function getOrCreateOwnContainer() {
    if (access.containerId) return access.containerId;
    const seedKey = ownSeedKey();
    const findExisting = async () => (await supabase.from("exercises").select("id").eq("seed_key", seedKey).maybeSingle()).data;
    let existing = await findExisting();
    if (!existing) {
        const payload = { title: CONTAINER_TITLE, visible: false, seed_key: seedKey };
        if (access.role === "doctor") payload.doctor_user_id = access.userId;
        if (access.role === "doctor" && access.companyId) payload.company_id = access.companyId;
        const { data: created, error } = await supabase.from("exercises").insert([payload]).select().single();
        if (error) {
            // Um colega da clínica pode ter criado o mesmo banco ao mesmo tempo
            // (seed_key é única): nesse caso, usa o dele.
            existing = await findExisting();
            if (!existing) throw error;
        } else {
            existing = created;
        }
    }
    access.containerId = existing.id;
    return existing.id;
}

function sentencePayload(entry) {
    const payload = { text: entry.text };
    if (entry.alt?.length) payload.alt = entry.alt;
    if (entry.icon) payload.icon = entry.icon;
    return payload;
}

function saveLocalCustom() {
    localStorage.setItem(CUSTOM_KEY, JSON.stringify(custom));
}

async function persistNewSentence(entry) {
    if (!access.remote) {
        custom.sentences.push(entry);
        saveLocalCustom();
        return;
    }
    const exerciseId = await getOrCreateOwnContainer();
    const { data: inserted, error } = await supabase.from("exercise_items").insert([{
        exercise_id: exerciseId, word: entry.text, role: CARD_ROLE, link: JSON.stringify(sentencePayload(entry))
    }]).select().single();
    if (error) throw error;
    custom.sentences.push({ ...entry, id: `remote-${inserted.id}`, remoteItemId: inserted.id });
}

// Edição mantém a mesma linha (mesmo id): liberações e ordem das frases não mudam.
async function persistUpdatedSentence(entry, changes) {
    const updated = { ...entry, ...changes };
    if (!updated.alt?.length) delete updated.alt;
    if (!updated.icon) delete updated.icon;
    if (access.remote) {
        const { error } = await supabase.from("exercise_items")
            .update({ word: updated.text, link: JSON.stringify(sentencePayload(updated)) })
            .eq("id", entry.remoteItemId);
        if (error) throw error;
    }
    custom.sentences = custom.sentences.map(other => (other.id === entry.id ? updated : other));
    if (!access.remote) saveLocalCustom();
}

async function persistRemovedSentence(entry) {
    if (access.remote) {
        const { error } = await supabase.from("exercise_items").delete().eq("id", entry.remoteItemId);
        if (error) throw error;
    }
    custom.sentences = custom.sentences.filter(other => other.id !== entry.id);
    if (!access.remote) saveLocalCustom();
}

async function persistOnlyCustom(value) {
    if (!access.remote) {
        custom.onlyCustom = value;
        saveLocalCustom();
        return;
    }
    const link = JSON.stringify({ onlyCustom: value });
    if (access.configItemId) {
        const { error } = await supabase.from("exercise_items").update({ link }).eq("id", access.configItemId);
        if (error) throw error;
    } else {
        const exerciseId = await getOrCreateOwnContainer();
        const { data: inserted, error } = await supabase.from("exercise_items").insert([{
            exercise_id: exerciseId, word: "", role: CONFIG_ROLE, link
        }]).select().single();
        if (error) throw error;
        access.configItemId = inserted.id;
    }
    custom.onlyCustom = value;
}

function levelForSentence(text) {
    const count = sentenceWords(text).length;
    return count <= 4 ? 1 : count === 5 ? 2 : 3;
}

function buildLevels() {
    const useDefaults = !(custom.onlyCustom && custom.sentences.length);
    if (boardMode) return { 1: [...(useDefaults ? boardSentences : []), ...custom.sentences] };
    const built = { 1: [], 2: [], 3: [] };
    if (useDefaults) Object.entries(slotLevels).forEach(([level, items]) => built[level].push(...items));
    custom.sentences.forEach(item => built[levelForSentence(item.text)].push(item));
    return built;
}

let levels = buildLevels();

// Com "usar só as minhas frases", um nível pode ficar vazio.
function firstAvailableLevel(preferred) {
    if (levels[preferred]?.length) return preferred;
    return Number(Object.keys(levels).find(level => levels[level].length));
}

function nextAvailableLevel() {
    return Object.keys(levels).map(Number).find(level => level > state.level && levels[level].length);
}

// `errors` conta montagens erradas no modo padrão e movimentos no modo
// quadro (lá não existe "montagem errada": a frase fecha sozinha quando a
// ordem fica certa).
const state = {
    level: 1, round: 0, sound: true,
    completed: false, busy: false,
    hintLevel: 0, errors: 0, speech: null,
    stats: []
};

const sentenceArea = document.getElementById("sentence-area");
const wordBank = document.getElementById("word-bank");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-round");
const hintButton = document.getElementById("hint-button");
const listenButton = document.getElementById("listen-prompt");
const visualClue = document.getElementById("visual-clue");
const exerciseCard = document.getElementById("exercise-card");
const summaryCard = document.getElementById("summary-card");
const speechPanel = document.getElementById("speech-panel");
const speechRecord = document.getElementById("speech-record");
const speechMine = document.getElementById("speech-mine");
const speechSlow = document.getElementById("speech-slow");
const speechResult = document.getElementById("speech-result");
const speechSelf = document.getElementById("speech-self");

function currentExercise() { return levels[state.level][state.round]; }

// As peças aparecem em minúsculas e sem pontuação: a maiúscula inicial e o
// ponto final entregariam a primeira e a última palavra.
function sentenceWords(text) {
    return text.replace(/[.?!,;:]/g, "").split(/\s+/).filter(Boolean).map(word => word.toLocaleLowerCase("pt-BR"));
}

function acceptedOrders(item) {
    return [item.text, ...(item.alt || [])].map(sentenceWords);
}

function matchesAnOrder(placed, orders) {
    return orders.some(order => order.every((word, index) => word === placed[index]));
}

// Reembaralha enquanto o sorteio cair numa ordem que já é resposta certa.
function shuffleForDisplay(items, orders) {
    const shuffled = [...items];
    for (let attempt = 0; attempt < 12; attempt += 1) {
        for (let index = shuffled.length - 1; index > 0; index -= 1) {
            const target = Math.floor(Math.random() * (index + 1));
            [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
        }
        if (!matchesAnOrder(shuffled, orders)) break;
    }
    return shuffled;
}

// ── Voz ───────────────────────────────────────────────────────────────────
// Mesma voz neural do resto do app (edge-tts da função "chat"). A função exige
// login, então vai por supabase.functions.invoke — que manda o token da sessão
// e usa o projeto certo (produção ou staging); um fetch sem cabeçalho levava
// 401 e caía na voz do navegador. Cache só em memória: o cache de TTS em
// localStorage já lotou a quota e derrubou o login uma vez.
const LOCAL_API = "http://127.0.0.1:5001";
const ttsCache = new Map();
let currentAudio = null;
let slowModel = false;

async function fetchTtsAudio(endpoint, text) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ttsText: text })
    });
    const data = await response.json();
    if (!response.ok || !data.audio) throw new Error(data.error || `Erro HTTP ${response.status}`);
    return data.audio;
}

async function fetchSupabaseTtsAudio(text) {
    if (!supabase) throw new Error("Supabase indisponível");
    const { data, error } = await supabase.functions.invoke("chat", { body: { ttsText: text } });
    if (error || !data?.audio) throw error || new Error(data?.error || "Resposta sem áudio");
    return data.audio;
}

function getTtsAudio(text) {
    if (ttsCache.has(text)) return ttsCache.get(text);
    const promise = (async () => {
        if (isLocalhost) {
            try { return await fetchTtsAudio(`${LOCAL_API}/chat`, text); } catch (localError) { /* cai pro Supabase */ }
        }
        return fetchSupabaseTtsAudio(text);
    })();
    promise.catch(() => ttsCache.delete(text));
    ttsCache.set(text, promise);
    return promise;
}

function stopAudio() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    if (currentAudio) currentAudio.pause();
}

function speakNative(text, slow) {
    if (!("speechSynthesis" in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    const ptVoices = window.speechSynthesis.getVoices().filter(voice => voice.lang.startsWith("pt"));
    utterance.voice = ptVoices.find(voice => voice.name.includes("Google") || voice.name.includes("Luciana")) || ptVoices[0] || null;
    utterance.lang = "pt-BR";
    utterance.rate = slow ? 0.5 : 0.7;
    window.speechSynthesis.speak(utterance);
}

// `force` é pra clique explícito em "Ouvir": o botão de som desliga só as
// falas automáticas (elogio ao acertar), não o que a pessoa pediu pra ouvir.
async function speak(text, { force = false, slow = false } = {}) {
    if (!text || (!state.sound && !force)) return;
    stopAudio();
    try {
        const audioBase64 = await getTtsAudio(text);
        currentAudio = new Audio(`data:audio/mp3;base64,${audioBase64}`);
        currentAudio.playbackRate = slow ? 0.75 : 1;
        await currentAudio.play();
    } catch (error) {
        speakNative(text, slow);
    }
}

// ── Montagem da frase ─────────────────────────────────────────────────────
function setFeedback(type, message, icon = "fa-circle-info") {
    feedback.className = `feedback ${type}`.trim();
    feedback.innerHTML = `<i class="fas ${icon}" aria-hidden="true"></i><span></span>`;
    feedback.querySelector("span").textContent = message;
}

function updateCounters() {
    const total = levels[state.level].length;
    const score = state.stats.filter(stat => stat?.done).length;
    document.getElementById("score-value").textContent = score;
    document.getElementById("round-value").textContent = `${state.round + 1}/${total}`;
    document.getElementById("board-score").textContent = score;
    document.getElementById("board-position").textContent = `${state.round + 1} de ${total}`;
    document.getElementById("board-prev").disabled = state.round === 0;
}

function zones() { return [...sentenceArea.querySelectorAll(".drop-zone")]; }

function createDropZone(index) {
    const zone = document.createElement("button");
    zone.type = "button";
    zone.className = "drop-zone";
    zone.dataset.slot = index;
    zone.setAttribute("aria-label", `Espaço ${index + 1} da frase`);
    zone.addEventListener("click", () => {
        if (zone.classList.contains("filled") && !zone.classList.contains("locked")) {
            removePlacedOption(zone);
            setFeedback("", "Palavra devolvida. Escolha outra.");
        }
    });
    zone.addEventListener("dragover", event => {
        if (zone.classList.contains("locked")) return;
        event.preventDefault();
        zone.classList.add("drag-over");
    });
    zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
    zone.addEventListener("drop", event => {
        event.preventDefault();
        zone.classList.remove("drag-over");
        if (zone.classList.contains("locked")) return;
        if (zone.classList.contains("filled")) removePlacedOption(zone);
        placeOption(event.dataTransfer.getData("text/plain"), zone);
    });
    return zone;
}

function createOption(word, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-option";
    button.id = `option-${index}`;
    button.dataset.word = word;
    button.draggable = true;
    button.textContent = word;
    button.addEventListener("click", () => {
        const firstEmpty = zones().find(zone => !zone.classList.contains("filled"));
        if (firstEmpty) placeOption(button.id, firstEmpty);
    });
    button.addEventListener("dragstart", event => {
        event.dataTransfer.setData("text/plain", button.id);
        event.dataTransfer.effectAllowed = "move";
    });
    return button;
}

function placeOption(optionId, zone, { validate = true } = {}) {
    if (state.completed || state.busy || zone.classList.contains("filled")) return;
    const option = document.getElementById(optionId);
    if (!option || option.classList.contains("used")) return;
    zone.textContent = option.dataset.word;
    zone.dataset.optionId = option.id;
    zone.dataset.word = option.dataset.word;
    zone.classList.add("filled");
    zone.setAttribute("aria-label", `Remover ${option.dataset.word} da frase`);
    option.classList.add("used");
    if (validate) validateIfReady();
}

function removePlacedOption(zone) {
    const option = document.getElementById(zone.dataset.optionId);
    if (option) option.classList.remove("used");
    zone.textContent = "";
    delete zone.dataset.optionId;
    delete zone.dataset.word;
    zone.className = "drop-zone";
    zone.setAttribute("aria-label", `Espaço ${Number(zone.dataset.slot) + 1} da frase`);
}

function validateIfReady() {
    const allZones = zones();
    if (allZones.some(zone => !zone.classList.contains("filled"))) return;
    const placed = allZones.map(zone => zone.dataset.word);
    const orders = acceptedOrders(currentExercise());
    if (matchesAnOrder(placed, orders)) {
        finishAssembly();
        return;
    }

    // Compara com a ordem aceita mais próxima do que a pessoa montou, e devolve
    // só as palavras fora do lugar: as que já estão certas ficam.
    const matches = order => order.filter((word, index) => word === placed[index]).length;
    const closest = orders.reduce((best, order) => (matches(order) > matches(best) ? order : best));
    state.errors += 1;
    state.busy = true;
    allZones.forEach((zone, index) => {
        if (!zone.classList.contains("locked")) zone.classList.add(zone.dataset.word === closest[index] ? "correct" : "wrong");
    });
    setFeedback("retry", "Quase! Algumas palavras estão fora do lugar.", "fa-lightbulb");
    setTimeout(() => {
        if (!allZones[0].isConnected) return; // a pessoa trocou de nível no meio da animação
        allZones.forEach(zone => {
            if (zone.classList.contains("wrong")) removePlacedOption(zone);
            else zone.classList.remove("correct");
        });
        state.busy = false;
        setFeedback("", "As palavras certas ficaram. Tente de novo com as outras.");
    }, 1300);
}

// ── Modo quadro: reordenar no próprio lugar ───────────────────────────────
// Arrastar uma palavra a encaixa onde for solta; tocar em duas palavras troca
// as duas de lugar.
let selectedTile = null;

function tiles() { return [...sentenceArea.querySelectorAll(".board-word")]; }

function checkBoard() {
    const placed = tiles().map(tile => tile.dataset.word);
    if (matchesAnOrder(placed, acceptedOrders(currentExercise()))) finishAssembly();
}

function afterBoardMove() {
    state.errors += 1;
    setFeedback("", "Continue até a frase fazer sentido.");
    checkBoard();
}

function tapTile(tile) {
    if (state.completed || tile.classList.contains("locked")) return;
    if (!selectedTile) {
        selectedTile = tile;
        tile.classList.add("selected");
        setFeedback("", `Agora toque na palavra que vai trocar de lugar com “${tile.dataset.word}”.`);
        return;
    }
    const first = selectedTile;
    selectedTile = null;
    first.classList.remove("selected");
    if (first === tile) return;
    const marker = document.createComment("");
    first.replaceWith(marker);
    tile.replaceWith(first);
    marker.replaceWith(tile);
    afterBoardMove();
}

function createTile(word) {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "board-word";
    tile.dataset.word = word;
    tile.draggable = false;
    tile.textContent = word;
    tile.addEventListener("pointerdown", event => startTileDrag(event, tile));
    // Toque/clique do mouse é tratado no pointerup (endTileDrag); este click
    // só atende o teclado (Enter/Espaço), que chega com detail 0.
    tile.addEventListener("click", event => { if (event.detail === 0) tapTile(tile); });
    return tile;
}

// Arrastar com eventos de ponteiro em vez do drag-and-drop nativo: o nativo
// não funciona no toque, é instável em <button> e só aceitava soltar exatamente
// em cima de outra palavra. Aqui a palavra acompanha o dedo/mouse e as outras
// abrem espaço enquanto ela passa; soltar em qualquer lugar vale.
const DRAG_THRESHOLD = 8; // px — abaixo disso é toque, não arrasto
let drag = null;

function nearestDropTarget(x, y, dragged) {
    let best = null;
    let bestDistance = Infinity;
    tiles().forEach(tile => {
        if (tile === dragged || tile.classList.contains("locked")) return;
        const rect = tile.getBoundingClientRect();
        const dx = Math.max(rect.left - x, 0, x - rect.right);
        const dy = Math.max(rect.top - y, 0, y - rect.bottom);
        const distance = Math.hypot(dx, dy * 3); // estar na mesma fileira pesa mais
        if (distance < bestDistance) {
            best = tile;
            bestDistance = distance;
        }
    });
    return best;
}

function placeDraggedTile(x, y) {
    const { tile } = drag;
    const target = nearestDropTarget(x, y, tile);
    if (target) {
        const rect = target.getBoundingClientRect();
        const before = x < rect.left + rect.width / 2;
        if (before && target.previousElementSibling !== tile) target.before(tile);
        else if (!before && target.nextElementSibling !== tile) target.after(tile);
    }
    // A palavra mudou de lugar no fluxo: recalcula o deslocamento pra ela
    // continuar embaixo do ponteiro.
    tile.style.transform = "";
    const home = tile.getBoundingClientRect();
    tile.style.transform = `translate(${x - drag.grabX - home.left}px, ${y - drag.grabY - home.top}px)`;
}

function moveTileDrag(event) {
    if (!drag) return;
    if (!drag.active) {
        if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < DRAG_THRESHOLD) return;
        drag.active = true;
        drag.tile.classList.add("dragging");
        if (selectedTile) selectedTile.classList.remove("selected");
        selectedTile = null;
    }
    event.preventDefault();
    placeDraggedTile(event.clientX, event.clientY);
}

function endTileDrag(event) {
    if (!drag) return;
    window.removeEventListener("pointermove", moveTileDrag);
    window.removeEventListener("pointerup", endTileDrag);
    window.removeEventListener("pointercancel", endTileDrag);
    const { tile, active, orderBefore } = drag;
    drag = null;
    if (!active) {
        if (event.type === "pointerup") tapTile(tile);
        return;
    }
    tile.classList.remove("dragging");
    tile.style.transform = "";
    if (tiles().some((other, index) => other !== orderBefore[index])) afterBoardMove();
}

function startTileDrag(event, tile) {
    if (drag || state.completed || tile.classList.contains("locked") || event.button > 0) return;
    const rect = tile.getBoundingClientRect();
    drag = {
        tile, active: false, orderBefore: tiles(),
        startX: event.clientX, startY: event.clientY,
        grabX: event.clientX - rect.left, grabY: event.clientY - rect.top
    };
    window.addEventListener("pointermove", moveTileDrag, { passive: false });
    window.addEventListener("pointerup", endTileDrag);
    window.addEventListener("pointercancel", endTileDrag);
}

function lockBoardPrefix(count) {
    const canonical = sentenceWords(currentExercise().text);
    for (let index = 0; index < count; index += 1) {
        const all = tiles();
        const current = all[index];
        if (current.classList.contains("locked")) continue;
        const tile = all.find((other, position) => position >= index && other.dataset.word === canonical[index]);
        if (tile !== current) current.before(tile);
        tile.classList.remove("selected");
        tile.classList.add("locked");
        tile.draggable = false;
        tile.setAttribute("aria-label", `${canonical[index]}, palavra fixada pela pista`);
        if (selectedTile === tile) selectedTile = null;
    }
    checkBoard();
}

function saveStat() {
    state.stats[state.round] = {
        text: currentExercise().text, errors: state.errors, hints: state.hintLevel, speech: state.speech, done: true
    };
}

// Frase que a etapa de fala usa como modelo: a ordem que a pessoa montou
// (pode ser uma das alternativas), não necessariamente a cadastrada.
function modelText() { return state.shownText || currentExercise().text; }

function finishAssembly() {
    const item = currentExercise();
    const placed = (boardMode ? tiles() : zones()).map(element => element.dataset.word);
    state.shownText = [item.text, ...(item.alt || [])].find(text => matchesAnOrder(placed, [sentenceWords(text)])) || item.text;
    state.completed = true;
    saveStat();
    sentenceArea.innerHTML = "";
    const finalSentence = document.createElement("span");
    finalSentence.className = "final-sentence";
    finalSentence.textContent = state.shownText;
    sentenceArea.appendChild(finalSentence);
    wordBank.innerHTML = "";
    document.querySelector(".options-label").hidden = true;
    hintButton.hidden = true;
    listenButton.classList.add("visible");
    nextButton.disabled = false;
    setFeedback("success", "Muito bem! A frase está montada.", "fa-circle-check");
    updateCounters();
    openSpeechPanel();
    speak(`Muito bem! ${state.shownText}`);
}

// ── Pistas em escada ──────────────────────────────────────────────────────
// 1ª pista: ouvir a frase. Da 2ª em diante: cada pedido fixa mais uma palavra
// no lugar, do começo da frase — sempre sobram pelo menos duas pra ordenar.
function maxLockedWords() {
    return Math.max(1, sentenceWords(currentExercise().text).length - 2);
}

function lockPrefix(count) {
    if (boardMode) {
        lockBoardPrefix(count);
        return;
    }
    const canonical = sentenceWords(currentExercise().text);
    const allZones = zones();
    for (let index = 0; index < count; index += 1) {
        const zone = allZones[index];
        if (zone.classList.contains("locked")) continue;
        if (zone.classList.contains("filled")) removePlacedOption(zone);
        let option = [...wordBank.querySelectorAll(".word-option:not(.used)")].find(el => el.dataset.word === canonical[index]);
        if (!option) {
            const holder = allZones.find(other => !other.classList.contains("locked") && other.dataset.word === canonical[index]);
            if (!holder) continue;
            option = document.getElementById(holder.dataset.optionId);
            removePlacedOption(holder);
        }
        placeOption(option.id, zone, { validate: false });
        zone.classList.add("locked");
        zone.setAttribute("aria-label", `${canonical[index]}, palavra fixada pela pista`);
    }
    validateIfReady();
}

function giveHint() {
    if (state.completed || state.busy) return;
    const item = currentExercise();
    state.hintLevel += 1;
    if (state.hintLevel === 1) {
        listenButton.classList.add("visible");
        setFeedback("", "Ouça a frase com atenção.", "fa-volume-high");
        speak(item.text, { force: true });
    } else {
        const locked = Math.min(state.hintLevel - 1, maxLockedWords());
        lockPrefix(locked);
        if (!state.completed) setFeedback("", locked === 1 ? "A primeira palavra já está no lugar." : `As ${locked} primeiras palavras já estão no lugar.`, "fa-lightbulb");
    }
    hintButton.querySelector("span").textContent = "Mais uma pista";
    hintButton.disabled = state.hintLevel - 1 >= maxLockedWords();
}

// ── Etapa de fala ─────────────────────────────────────────────────────────
// Gravador WAV 16 kHz mono, no formato que a Azure STT exige (mesma técnica do
// gravador da aba IA em app.js).
const MAX_RECORDING_MS = 15000;
let recorder = null;
let recordingTimeout = null;
let myRecordingUrl = null;
let myAudio = null;
let transcriptionAvailable = isLocalhost;

async function startRecording() {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    });
    const context = new (window.AudioContext || window.webkitAudioContext)();
    const source = context.createMediaStreamSource(stream);
    const node = context.createScriptProcessor(4096, 1, 1);
    const chunks = [];
    node.onaudioprocess = event => chunks.push(new Float32Array(event.inputBuffer.getChannelData(0)));
    source.connect(node);
    node.connect(context.destination);
    recorder = { stream, context, source, node, chunks, sampleRate: context.sampleRate };
}

async function resampleTo16k(samples, sourceSampleRate) {
    if (Math.round(sourceSampleRate) === 16000) return samples;
    const offline = new OfflineAudioContext(1, Math.ceil(samples.length * 16000 / sourceSampleRate), 16000);
    const buffer = offline.createBuffer(1, samples.length, sourceSampleRate);
    buffer.copyToChannel(samples, 0);
    const source = offline.createBufferSource();
    source.buffer = buffer;
    source.connect(offline.destination);
    source.start();
    return (await offline.startRendering()).getChannelData(0);
}

async function stopRecording() {
    const { stream, context, source, node, chunks, sampleRate } = recorder;
    recorder = null;
    node.disconnect();
    source.disconnect();
    stream.getTracks().forEach(track => track.stop());
    await context.close();

    const raw = new Float32Array(chunks.reduce((total, chunk) => total + chunk.length, 0));
    let offset = 0;
    chunks.forEach(chunk => { raw.set(chunk, offset); offset += chunk.length; });
    if (!raw.length) return null;
    const samples = await resampleTo16k(raw, sampleRate);

    // Normaliza o pico: mic embutido de notebook capta baixo demais pra Azure.
    let peak = 0;
    for (let index = 0; index < samples.length; index += 1) peak = Math.max(peak, Math.abs(samples[index]));
    const gain = peak > 0 && peak < 0.9 ? 0.95 / peak : 1;

    const view = new DataView(new ArrayBuffer(44 + samples.length * 2));
    const writeString = (position, text) => { for (let index = 0; index < text.length; index += 1) view.setUint8(position + index, text.charCodeAt(index)); };
    writeString(0, "RIFF");
    view.setUint32(4, 36 + samples.length * 2, true);
    writeString(8, "WAVE");
    writeString(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, 16000, true);
    view.setUint32(28, 32000, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, "data");
    view.setUint32(40, samples.length * 2, true);
    for (let index = 0; index < samples.length; index += 1) {
        const sample = Math.max(-1, Math.min(1, samples[index] * gain));
        view.setInt16(44 + index * 2, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
    }
    return new Blob([view], { type: "audio/wav" });
}

function normalizeSpoken(text) {
    return text.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/\p{M}/gu, "").replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
}

// Confere palavra por palavra em vez de exigir a frase idêntica: o
// reconhecimento erra bastante com fala afásica, então o retorno tem três
// níveis (tudo / quase / de novo) e nunca um "errado" seco.
function evaluateSpeech(transcription, item) {
    const target = sentenceWords(item.text);
    const pool = normalizeSpoken(transcription);
    const said = target.map(word => {
        const position = pool.indexOf(normalizeSpoken(word)[0]);
        if (position === -1) return false;
        pool.splice(position, 1);
        return true;
    });
    const ratio = said.filter(Boolean).length / target.length;
    return { target, said, verdict: ratio === 1 ? "ok" : ratio >= 0.5 ? "almost" : "retry" };
}

const SPEECH_RANK = { retry: 1, almost: 2, "self-good": 3, ok: 3 };

function registerSpeech(result) {
    if (!state.speech || SPEECH_RANK[result] > SPEECH_RANK[state.speech]) state.speech = result;
}

function showSpeechResult(transcription, evaluation) {
    const messages = {
        ok: "Muito bem! Você falou a frase toda.",
        almost: "Quase! Faltou pouco.",
        retry: "Vamos de novo? Ouça o modelo e fale junto."
    };
    speechResult.className = `speech-result ${evaluation.verdict}`;
    speechResult.innerHTML = "";
    const title = document.createElement("strong");
    title.textContent = messages[evaluation.verdict];
    const words = document.createElement("div");
    words.className = "speech-words";
    evaluation.target.forEach((word, index) => {
        const chip = document.createElement("span");
        chip.textContent = word;
        if (evaluation.said[index]) chip.classList.add("said");
        words.appendChild(chip);
    });
    const heard = document.createElement("small");
    heard.textContent = `O computador entendeu: “${transcription}”`;
    speechResult.append(title, words, heard);
    speechResult.hidden = false;
    speechSelf.hidden = true;
}

function askSelfEvaluation(message) {
    speechResult.className = "speech-result";
    speechResult.textContent = message;
    speechResult.hidden = false;
    speechSelf.hidden = false;
}

async function transcribe(blob) {
    const formData = new FormData();
    formData.append("audio", blob, "fala.wav");
    let response;
    try {
        response = await fetch(`${LOCAL_API}/transcribe`, { method: "POST", body: formData });
    } catch (networkError) {
        transcriptionAvailable = false; // servidor local fora do ar: não tenta de novo nesta sessão
        return null;
    }
    if (response.status === 404) transcriptionAvailable = false;
    if (!response.ok) return null;
    const data = await response.json();
    return (data.transcription || "").trim() || null;
}

function setRecordButton(label, icon, recording) {
    speechRecord.classList.toggle("recording", recording);
    speechRecord.querySelector("i").className = `fas ${icon}`;
    speechRecord.querySelector("span").textContent = label;
}

async function toggleRecording() {
    if (!recorder) {
        stopAudio();
        if (myAudio) myAudio.pause();
        try {
            await startRecording();
        } catch (error) {
            askSelfEvaluation("Não consegui usar o microfone. Verifique a permissão do navegador.");
            speechSelf.hidden = true;
            return;
        }
        setRecordButton("Parar gravação", "fa-stop", true);
        speechResult.hidden = true;
        speechSelf.hidden = true;
        recordingTimeout = setTimeout(toggleRecording, MAX_RECORDING_MS);
        return;
    }

    clearTimeout(recordingTimeout);
    const item = currentExercise();
    setRecordButton("Processando...", "fa-spinner fa-spin", false);
    speechRecord.disabled = true;
    const blob = await stopRecording();
    speechRecord.disabled = false;
    setRecordButton("Gravar de novo", "fa-microphone", false);
    if (!blob) return;
    if (myRecordingUrl) URL.revokeObjectURL(myRecordingUrl);
    myRecordingUrl = URL.createObjectURL(blob);
    speechMine.hidden = false;

    const transcription = transcriptionAvailable ? await transcribe(blob) : null;
    if (item !== currentExercise() || !state.completed) return; // a pessoa já avançou
    if (transcription) {
        const evaluation = evaluateSpeech(transcription, item);
        registerSpeech(evaluation.verdict);
        showSpeechResult(transcription, evaluation);
    } else {
        askSelfEvaluation("Ouça a sua gravação e compare com o modelo.");
    }
}

function openSpeechPanel() {
    speechPanel.hidden = false;
    speechMine.hidden = true;
    speechResult.hidden = true;
    speechSelf.hidden = true;
    setRecordButton("Gravar minha voz", "fa-microphone", false);
}

async function closeSpeechPanel() {
    clearTimeout(recordingTimeout);
    if (recorder) await stopRecording();
    if (myAudio) myAudio.pause();
    if (myRecordingUrl) URL.revokeObjectURL(myRecordingUrl);
    myRecordingUrl = null;
    speechPanel.hidden = true;
}

// ── Rodadas e resumo ──────────────────────────────────────────────────────
function renderExercise() {
    const item = currentExercise();
    Object.assign(state, { completed: false, busy: false, hintLevel: 0, errors: 0, speech: null, shownText: null });
    exerciseCard.hidden = false;
    summaryCard.hidden = true;
    sentenceArea.innerHTML = "";
    wordBank.innerHTML = "";
    document.querySelector(".options-label").hidden = boardMode;
    selectedTile = null;
    const words = sentenceWords(item.text);
    const shuffled = shuffleForDisplay(words, acceptedOrders(item));
    if (boardMode) {
        shuffled.forEach(word => sentenceArea.appendChild(createTile(word)));
    } else {
        words.forEach((word, index) => sentenceArea.appendChild(createDropZone(index)));
        shuffled.forEach((word, index) => wordBank.appendChild(createOption(word, index)));
    }
    visualClue.textContent = item.icon || "";
    visualClue.classList.toggle("visible", Boolean(item.icon));
    listenButton.classList.remove("visible");
    hintButton.hidden = false;
    hintButton.disabled = false;
    hintButton.querySelector("span").textContent = "Preciso de ajuda";
    nextButton.disabled = true;
    nextButton.innerHTML = state.round === levels[state.level].length - 1
        ? `Concluir nível <i class="fas fa-check" aria-hidden="true"></i>`
        : `Próxima <i class="fas fa-arrow-right" aria-hidden="true"></i>`;
    setFeedback("", boardMode
        ? "Arraste uma palavra para o lugar certo, ou toque em duas palavras para trocá-las."
        : "Toque em uma palavra para colocá-la na frase. Toque de novo para tirar.");
    updateCounters();
    getTtsAudio(item.text).catch(() => { /* o clique usa a voz nativa se precisar */ });
}

const SPEECH_LABELS = { ok: "Falou tudo", almost: "Quase", retry: "Tentou", "self-good": "Ficou bom (autoavaliação)" };

// ── Cronômetro (só no modo quadro) ────────────────────────────────────────
// Conta pra cima, como no Wordwall: mede o tempo, não impõe limite.
let timerInterval = null;
let timerStart = 0;

function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerStart = Date.now();
    const timer = document.getElementById("board-timer");
    timer.textContent = "0:00";
    timerInterval = setInterval(() => { timer.textContent = formatTime(Date.now() - timerStart); }, 1000);
}

function renderSummary() {
    clearInterval(timerInterval);
    exerciseCard.hidden = true;
    summaryCard.hidden = false;
    const done = state.stats.filter(stat => stat.done);
    const cards = [
        [done.length, "frases montadas"],
        boardMode
            ? [formatTime(Date.now() - timerStart), "tempo total"]
            : [done.filter(stat => stat.errors === 0 && stat.hints === 0).length, "de primeira, sem pista"],
        [done.reduce((sum, stat) => sum + stat.hints, 0), "pistas usadas"],
        [done.filter(stat => stat.speech === "ok" || stat.speech === "self-good").length, "frases bem faladas"]
    ];
    const grid = document.getElementById("summary-grid");
    grid.innerHTML = "";
    cards.forEach(([value, label]) => {
        const card = document.createElement("div");
        const strong = document.createElement("strong");
        strong.textContent = value;
        const span = document.createElement("span");
        span.textContent = label;
        card.append(strong, span);
        grid.appendChild(card);
    });
    const rows = document.getElementById("summary-rows");
    rows.innerHTML = "";
    state.stats.forEach(stat => {
        const row = document.createElement("tr");
        const values = stat.done
            ? [stat.text, stat.errors, stat.hints, SPEECH_LABELS[stat.speech] || "Não falou"]
            : [stat.text, "—", "—", "Pulou a frase"];
        values.forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        rows.appendChild(row);
    });
    document.getElementById("summary-next-level").hidden = !nextAvailableLevel();
}

function startLevel(level) {
    stopAudio();
    closeSpeechPanel();
    Object.assign(state, { level, round: 0, stats: [] });
    if (boardMode) startTimer();
    document.querySelectorAll(".level-button").forEach(button => {
        const active = Number(button.dataset.level) === level;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
        button.disabled = !levels[button.dataset.level]?.length;
    });
    renderExercise();
}

document.querySelectorAll(".level-button").forEach(button => {
    button.addEventListener("click", () => {
        if (Number(button.dataset.level) !== state.level) startLevel(Number(button.dataset.level));
    });
});

// Sai da frase atual guardando o resultado. No modo quadro dá pra avançar sem
// montar (fica registrado como frase pulada) e voltar pra refazer.
async function leaveRound(step) {
    const target = state.round + step;
    if (target < 0) return;
    stopAudio();
    await closeSpeechPanel();
    if (state.completed) saveStat();
    else if (!state.stats[state.round]) state.stats[state.round] = { text: currentExercise().text, done: false };
    if (target >= levels[state.level].length) {
        renderSummary();
        return;
    }
    state.round = target;
    renderExercise();
}

nextButton.addEventListener("click", () => { if (state.completed) leaveRound(1); });
document.getElementById("board-prev").addEventListener("click", () => leaveRound(-1));
document.getElementById("board-next").addEventListener("click", () => leaveRound(1));

hintButton.addEventListener("click", giveHint);
listenButton.addEventListener("click", () => speak(modelText(), { force: true }));
document.getElementById("speech-model").addEventListener("click", () => speak(modelText(), { force: true, slow: slowModel }));
speechSlow.addEventListener("click", () => {
    slowModel = !slowModel;
    speechSlow.setAttribute("aria-pressed", String(slowModel));
});
speechRecord.addEventListener("click", toggleRecording);
speechMine.addEventListener("click", () => {
    if (!myRecordingUrl) return;
    stopAudio();
    if (myAudio) myAudio.pause();
    myAudio = new Audio(myRecordingUrl);
    myAudio.play();
});
document.getElementById("speech-self-good").addEventListener("click", () => {
    registerSpeech("self-good");
    speechSelf.hidden = true;
    speechResult.className = "speech-result ok";
    speechResult.textContent = "Muito bem!";
});
document.getElementById("speech-self-retry").addEventListener("click", () => {
    registerSpeech("retry");
    speechSelf.hidden = true;
    speechResult.hidden = true;
    speak(modelText(), { force: true, slow: slowModel });
});
document.getElementById("summary-restart").addEventListener("click", () => startLevel(state.level));
document.getElementById("summary-next-level").addEventListener("click", () => startLevel(nextAvailableLevel()));
document.getElementById("sound-toggle").addEventListener("click", event => {
    state.sound = !state.sound;
    event.currentTarget.setAttribute("aria-pressed", String(state.sound));
    event.currentTarget.querySelector("i").className = `fas ${state.sound ? "fa-volume-high" : "fa-volume-xmark"}`;
    event.currentTarget.querySelector("span").textContent = state.sound ? "Som ligado" : "Som desligado";
    if (!state.sound) stopAudio();
});

// ── Gerenciar frases ──────────────────────────────────────────────────────
const managerOverlay = document.getElementById("manager-overlay");
const sentenceForm = document.getElementById("sentence-form");
const sentenceText = document.getElementById("sentence-text");
const sentenceAlt = document.getElementById("sentence-alt");
const sentenceIcon = document.getElementById("sentence-icon");
const formError = document.getElementById("form-error");
const onlyCustom = document.getElementById("only-custom");

function cleanSentence(value) {
    const text = value.trim().replace(/\s+/g, " ");
    return !text || /[.?!]$/.test(text) ? text : `${text}.`;
}

function sameWords(first, second) {
    return sentenceWords(first).sort().join(" ") === sentenceWords(second).sort().join(" ");
}

function setFormError(message = "") {
    formError.textContent = message;
    formError.classList.toggle("visible", Boolean(message));
}

function showToast(message) {
    document.querySelector(".saved-toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "saved-toast";
    toast.setAttribute("role", "status");
    toast.innerHTML = `<i class="fas fa-circle-check" aria-hidden="true"></i><span></span>`;
    toast.querySelector("span").textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
}

function renderSentenceLibrary() {
    const list = document.getElementById("sentence-list");
    document.getElementById("sentence-count").textContent = custom.sentences.length;
    onlyCustom.checked = custom.onlyCustom && custom.sentences.length > 0;
    onlyCustom.disabled = custom.sentences.length === 0;
    document.getElementById("library-help").textContent = custom.onlyCustom && custom.sentences.length
        ? "As frases prontas estão desligadas."
        : "Entram junto com as frases prontas.";
    list.innerHTML = "";
    if (!custom.sentences.length) {
        const empty = document.createElement("div");
        empty.className = "question-empty";
        empty.innerHTML = `<i class="fas fa-inbox" aria-hidden="true"></i><strong>Nenhuma frase cadastrada</strong><span>As frases prontas já estão disponíveis.</span>`;
        list.appendChild(empty);
        return;
    }
    [...custom.sentences].reverse().forEach(entry => {
        const item = document.createElement("article");
        item.className = "question-item";
        const top = document.createElement("div");
        top.className = "question-item-top";
        const icon = document.createElement("span");
        icon.className = "question-item-icon";
        icon.textContent = entry.icon || "💬";
        const copy = document.createElement("div");
        copy.className = "question-item-copy";
        const title = document.createElement("strong");
        title.textContent = entry.text;
        title.title = entry.text;
        const meta = document.createElement("small");
        const words = sentenceWords(entry.text).length;
        const extra = entry.alt?.length ? ` · ${entry.alt.length + 1} ordens aceitas` : "";
        meta.textContent = boardMode ? `${words} palavras${extra}` : `Nível ${levelForSentence(entry.text)} · ${words} palavras${extra}`;
        copy.append(title, meta);
        const edit = document.createElement("button");
        edit.type = "button";
        edit.className = "edit-question";
        edit.setAttribute("aria-label", `Editar frase: ${entry.text}`);
        edit.innerHTML = `<i class="fas fa-pen" aria-hidden="true"></i>`;
        edit.addEventListener("click", () => startEditing(entry));
        if (editingId === entry.id) item.classList.add("editing");
        const remove = document.createElement("button");
        remove.type = "button";
        remove.className = "delete-question";
        remove.setAttribute("aria-label", `Excluir frase: ${entry.text}`);
        remove.innerHTML = `<i class="fas fa-trash" aria-hidden="true"></i>`;
        remove.addEventListener("click", async () => {
            remove.disabled = true;
            try {
                await persistRemovedSentence(entry);
                if (editingId === entry.id) stopEditing();
                applyCustomChange("Frase excluída.");
            } catch (error) {
                remove.disabled = false;
                showToast("Não consegui excluir a frase. Tente de novo.");
            }
        });
        top.append(icon, copy, edit, remove);
        item.appendChild(top);
        list.appendChild(item);
    });
}

// Qualquer mudança no cadastro recomeça o nível: a lista de frases mudou.
function applyCustomChange(message) {
    levels = buildLevels();
    renderSentenceLibrary();
    startLevel(firstAvailableLevel(state.level));
    showToast(message);
}

// ── Edição de uma frase já cadastrada ─────────────────────────────────────
// O mesmo formulário serve pra criar e editar: em edição ele vem preenchido,
// o botão vira "Salvar alterações" e aparece "Cancelar edição".
let editingId = null;

function setFormMode(editing) {
    document.getElementById("new-sentence-title").textContent = editing ? "Editar frase" : "Nova frase";
    document.getElementById("sentence-submit-label").textContent = editing ? "Salvar alterações" : "Adicionar frase";
    document.getElementById("cancel-edit").hidden = !editing;
}

function clearSentenceForm() {
    sentenceText.value = "";
    sentenceAlt.value = "";
    sentenceIcon.value = "";
    setFormError();
}

function startEditing(entry) {
    editingId = entry.id;
    sentenceText.value = entry.text;
    sentenceAlt.value = (entry.alt || []).join("\n");
    sentenceIcon.value = entry.icon || "";
    setFormError();
    setFormMode(true);
    renderSentenceLibrary();
    sentenceText.focus();
}

function stopEditing() {
    editingId = null;
    clearSentenceForm();
    setFormMode(false);
    renderSentenceLibrary();
}

document.getElementById("cancel-edit").addEventListener("click", stopEditing);

sentenceForm.addEventListener("submit", async event => {
    event.preventDefault();
    if (!access.canManage) return;
    const editingEntry = editingId ? custom.sentences.find(other => other.id === editingId) : null;
    const text = cleanSentence(sentenceText.value);
    const alt = sentenceAlt.value.split(/\n+/).map(cleanSentence).filter(Boolean);
    if (sentenceWords(text).length < 3) {
        setFormError("Use pelo menos três palavras na frase.");
        return;
    }
    const wrongAlt = alt.find(other => !sameWords(other, text));
    if (wrongAlt) {
        setFormError(`“${wrongAlt}” não tem as mesmas palavras da frase. Uma ordem alternativa só muda a posição das palavras.`);
        return;
    }
    const entry = { id: window.crypto?.randomUUID?.() || `frase-${Date.now()}`, text };
    const otherOrders = alt.filter(other => sentenceWords(other).join(" ") !== sentenceWords(text).join(" "));
    if (otherOrders.length) entry.alt = otherOrders;
    if (sentenceIcon.value.trim()) entry.icon = sentenceIcon.value.trim();
    const submitButton = sentenceForm.querySelector("button[type=submit]");
    submitButton.disabled = true;
    try {
        if (editingEntry) await persistUpdatedSentence(editingEntry, { text, alt: entry.alt, icon: entry.icon });
        else await persistNewSentence(entry);
    } catch (error) {
        console.warn("Monte a Frase: erro ao salvar frase:", error);
        setFormError("Não consegui salvar a frase. Verifique a conexão e tente de novo.");
        return;
    } finally {
        submitButton.disabled = false;
    }
    const message = editingEntry
        ? "Frase atualizada!"
        : boardMode ? "Frase adicionada!" : `Frase adicionada ao nível ${levelForSentence(text)}!`;
    editingId = null;
    clearSentenceForm();
    setFormMode(false);
    applyCustomChange(message);
    sentenceText.focus();
});

onlyCustom.addEventListener("change", async () => {
    const wanted = onlyCustom.checked;
    onlyCustom.disabled = true;
    try {
        await persistOnlyCustom(wanted);
        applyCustomChange(wanted ? "Usando só as suas frases." : "Frases prontas de volta.");
    } catch (error) {
        console.warn("Monte a Frase: erro ao salvar a opção:", error);
        renderSentenceLibrary(); // volta a caixa pro valor que está salvo
        showToast("Não consegui salvar essa opção. Tente de novo.");
    }
});

function closeManager() {
    if (editingId) stopEditing(); // fechar no meio da edição descarta as mudanças não salvas
    managerOverlay.classList.remove("open");
    managerOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

function openManager() {
    if (!access.canManage) return; // o app também manda este comando; paciente nunca cadastra
    managerOverlay.classList.add("open");
    managerOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => sentenceText.focus(), 50);
}

document.getElementById("open-manager").addEventListener("click", openManager);
document.getElementById("close-manager").addEventListener("click", closeManager);
// Comandos do app quando a página roda embutida (mesmo contrato do
// complete-frase.js, com prefixo próprio).
window.addEventListener("message", event => {
    if (event.origin !== window.location.origin || !event.data?.type) return;
    if (event.data.type === "monte-frase:open-manager") {
        // Pedido que chega antes de terminar a verificação de acesso fica
        // guardado e é atendido logo depois (ver initAccess().then abaixo).
        if (accessReady) openManager();
        else openManagerWhenReady = true;
    }
    if (event.data.type === "monte-frase:pause-audio") {
        stopAudio();
        if (myAudio) myAudio.pause();
    }
});
managerOverlay.addEventListener("click", event => { if (event.target === managerOverlay) closeManager(); });
document.addEventListener("keydown", event => { if (event.key === "Escape" && managerOverlay.classList.contains("open")) closeManager(); });

const modeLink = document.getElementById("mode-link");
if (boardMode) {
    document.body.classList.add("board-mode");
    document.querySelector(".level-picker").hidden = true;
    document.getElementById("board-top").hidden = false;
    document.getElementById("board-nav").hidden = false;
    nextButton.hidden = true;
    document.getElementById("instruction-text").textContent = "Arrume as palavras para formar a frase.";
    document.getElementById("summary-errors-heading").textContent = "Movimentos";
    document.getElementById("summary-restart").lastChild.textContent = " Recomeçar";
    modeLink.querySelector("span").textContent = "Modo espaços";
    modeLink.querySelector("i").className = "fas fa-table-cells-large";
}

const otherModeParams = new URLSearchParams();
if (embeddedMode) otherModeParams.set("embedded", "1");
if (!boardMode) otherModeParams.set("modo", "quadro");
if (pageParams.get("sb")) otherModeParams.set("sb", pageParams.get("sb"));
modeLink.href = `monte-frase.html${otherModeParams.toString() ? `?${otherModeParams}` : ""}`;

if (embeddedMode) {
    document.body.classList.add("embedded-mode");
    // O cabeçalho some no modo embutido: a troca de modo (e, no modo espaços,
    // o placar) descem pra linha de cima do exercício.
    const topline = document.querySelector(".exercise-topline");
    if (!boardMode) topline.insertBefore(document.querySelector(".score-card"), listenButton);
    topline.appendChild(modeLink);
}

let accessReady = false;
let openManagerWhenReady = false;

// Nada do exercício aparece antes de sabermos se a pessoa pode entrar.
const levelPicker = document.querySelector(".level-picker");
levelPicker.hidden = true;
modeLink.hidden = true;

initAccess().then(() => {
    accessReady = true;
    if (access.blocked) {
        const message = document.getElementById("access-message");
        message.innerHTML = `<i class="fas fa-lock" aria-hidden="true"></i><span></span>`;
        message.querySelector("span").textContent = access.blocked;
        return;
    }
    document.getElementById("access-card").hidden = true;
    levelPicker.hidden = boardMode;
    modeLink.hidden = false;
    document.getElementById("open-manager").hidden = !access.canManage;
    document.getElementById("manager-scope").textContent = !access.remote
        ? "Demonstração local: as frases ficam salvas só neste navegador."
        : access.role === "admin"
            ? "Frases do banco global do admin. O médico decide para quais pacientes liberar."
            : access.companyId
                ? "Frases da clínica: todos os médicos da clínica veem e editam. Valem para os pacientes a quem cada um liberar este exercício."
                : "Frases do seu banco. Valem para os pacientes a quem você liberar este exercício.";
    if (access.companyId) {
        document.getElementById("library-title").textContent = "Frases da clínica";
        document.querySelector("#only-custom + span").textContent = "Usar só as frases da clínica";
    }
    levels = buildLevels();
    renderSentenceLibrary();
    startLevel(firstAvailableLevel(1));
    if (openManagerWhenReady) openManager();
});
