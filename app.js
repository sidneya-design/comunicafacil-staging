// DADOS ESTÁTICOS COM DEFINIÇÃO DE CORES DE BORDA E FUNDO
const coreWords = [
    { word: 'eu', styleClass: 'solid-orange' }, { word: 'você', styleClass: 'solid-orange' },
    { word: 'quero', styleClass: 'solid-orange' }, { word: 'gosto', styleClass: 'solid-orange' },
    { word: 'não', styleClass: 'solid-orange' }, { word: 'sim', styleClass: 'solid-orange' },
    { word: 'mais', styleClass: 'solid-orange' }, { word: 'acabou', styleClass: 'solid-orange' },
    { word: 'ajudar', styleClass: 'solid-orange' }, { word: 'comer', styleClass: 'solid-orange' },
    { word: 'beber', styleClass: 'solid-orange' }, { word: 'ir', styleClass: 'solid-orange' }
];

const quickFires = [
    { word: 'oi', styleClass: 'border-blue' }, { word: 'tchau', styleClass: 'border-blue' },
    { word: 'por favor', styleClass: 'border-blue' }, { word: 'obrigado', styleClass: 'border-blue' },
    { word: 'desculpa', styleClass: 'border-blue' }, { word: 'certo', styleClass: 'border-green' },
    { word: 'errado', styleClass: 'border-red' }, { word: 'espera', styleClass: 'border-yellow' },
    { word: 'socorro', styleClass: 'border-red' }
];

const topics = [
    { folder: 'comida', styleClass: 'border-pink', items: [{ word: 'maçã', styleClass: 'border-orange' }, { word: 'pão', styleClass: 'border-orange' }, { word: 'água', styleClass: 'border-blue' }, { word: 'suco', styleClass: 'border-blue' }] },
    { folder: 'brincadeiras', styleClass: 'border-pink', items: [{ word: 'bola', styleClass: 'border-orange' }, { word: 'carrinho', styleClass: 'border-orange' }, { word: 'boneca', styleClass: 'border-orange' }] }
];

const virtues = [
    { folder: 'Sabedoria', styleClass: 'border-green', items: [{ word: 'Amor ao Aprendizado', styleClass: 'border-green' }, { word: 'Criatividade', styleClass: 'border-green' }, { word: 'Critério', styleClass: 'border-green' }, { word: 'Curiosidade', styleClass: 'border-green' }, { word: 'Perspectiva', styleClass: 'border-green' }] },
    { folder: 'Humanidade', styleClass: 'border-orange', items: [{ word: 'Amor', styleClass: 'border-orange' }, { word: 'Generosidade', styleClass: 'border-orange' }, { word: 'Inteligência Social', styleClass: 'border-orange' }] },
    { folder: 'Justiça', styleClass: 'border-yellow', items: [{ word: 'Justiça', styleClass: 'border-yellow' }, { word: 'Liderança', styleClass: 'border-yellow' }, { word: 'Trabalho em Equipe', styleClass: 'border-yellow' }] },
    { folder: 'Moderação', styleClass: 'border-blue', items: [{ word: 'Autorregulação', styleClass: 'border-blue' }, { word: 'Humildade', styleClass: 'border-blue' }, { word: 'Perdão', styleClass: 'border-blue' }, { word: 'Prudência', styleClass: 'border-blue' }] },
    { folder: 'Coragem', styleClass: 'border-red', items: [{ word: 'Coragem', styleClass: 'border-red' }, { word: 'Integridade', styleClass: 'border-red' }, { word: 'Perseverança', styleClass: 'border-red' }, { word: 'Vitalidade', styleClass: 'border-red' }] },
    { folder: 'Transcendência', styleClass: 'border-pink', items: [{ word: 'Apreciação da Beleza', styleClass: 'border-pink' }, { word: 'Esperança', styleClass: 'border-pink' }, { word: 'Espiritualidade', styleClass: 'border-pink' }, { word: 'Gratidão', styleClass: 'border-pink' }, { word: 'Humor', styleClass: 'border-pink' }] },
    {
        folder: 'Fomes', styleClass: 'border-pink', items: [
            { word: 'Vínculo', styleClass: 'border-pink', img: 'img/fomes/vinculo.png' },
            { word: 'Diversão', styleClass: 'border-pink', img: 'img/fomes/diversao.png' },
            { word: 'Competência', styleClass: 'border-pink', img: 'img/fomes/competencia.png' },
            { word: 'Autonomia', styleClass: 'border-pink', img: 'img/fomes/autonomia.png' },
            { word: 'Segurança', styleClass: 'border-pink', img: 'img/fomes/seguranca.png' }
        ]
    }
];

const localForcesImages = {
    'amor ao aprendizado': 'img/forcas/amor-ao-aprendizado.png',
    'amor': 'img/forcas/amor.png',
    'apreciação da beleza': 'img/forcas/apreciacao-da-beleza.png',
    'autorregulação': 'img/forcas/autorregulacao.png',
    'coragem': 'img/forcas/coragem.png',
    'criatividade': 'img/forcas/criatividade.png',
    'critério': 'img/forcas/criterio.png',
    'curiosidade': 'img/forcas/curiosidade.png',
    'esperança': 'img/forcas/esperanca.png',
    'espiritualidade': 'img/forcas/espiritualidade.png',
    'generosidade': 'img/forcas/generosidade.png',
    'gratidão': 'img/forcas/gratidao.png',
    'humildade': 'img/forcas/humildade.png',
    'humor': 'img/forcas/humor.png',
    'integridade': 'img/forcas/integridade.png',
    'inteligência social': 'img/forcas/inteligencia-social.png',
    'justiça': 'img/forcas/justica.png',
    'liderança': 'img/forcas/lideranca.png',
    'perdão': 'img/forcas/perdao.png',
    'perseverança': 'img/forcas/perseveranca.png',
    'perspectiva': 'img/forcas/perspectiva.png',
    'prudência': 'img/forcas/prudencia.png',
    'trabalho em equipe': 'img/forcas/trabalho-em-equipe.png',
    'vitalidade': 'img/forcas/vitalidade.png',
    'autonomia': 'img/forcas/autonomia.png',
    'competência': 'img/forcas/competencia.png',
    'vínculo': 'img/forcas/vinculo.png',
    'diversão': 'img/fomes/diversao.png',
    'segurança': 'img/fomes/seguranca.png',
    'fomes-vínculo': 'img/fomes/vinculo.png',
    'fomes-diversão': 'img/fomes/diversao.png',
    'fomes-competência': 'img/fomes/competencia.png',
    'fomes-autonomia': 'img/fomes/autonomia.png',
    'fomes-segurança': 'img/fomes/seguranca.png',
    // Imagens das categorias (pastas) de Fomes e Forças
    'sabedoria': 'img/forcas/amor-ao-aprendizado.png',
    'humanidade': 'img/forcas/amor.png',
    'moderação': 'img/forcas/autorregulacao.png',
    'transcendência': 'img/forcas/apreciacao-da-beleza.png'
};
// CONFIGURAÇÃO SUPABASE
// Override opt-in só-localhost (?sb=staging) para apontar pro projeto de staging
// durante o desenvolvimento do modelo multi-tenant (empresa/médico/paciente),
// sem tocar nos valores de produção usados por qualquer outro acesso.
const useStagingSupabase = isLocalAppHost() && new URLSearchParams(window.location.search).get('sb') === 'staging';
const supabaseUrl = useStagingSupabase
    ? 'https://iqiiilddodttvrxodwbd.supabase.co'
    : 'https://rrubmvykindvilptjhma.supabase.co';
const supabaseKey = useStagingSupabase
    ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaWlpbGRkb2R0dHZyeG9kd2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNjg4NjEsImV4cCI6MjEwMTk0NDg2MX0.Po7_bLntUw-RFt92Lw2WIsrJoasrrg1VBWl7zm1vDSM'
    : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWJtdnlraW5kdmlscHRqaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODE2OTksImV4cCI6MjA5ODA1NzY5OX0.4eKcRhUReuaKaaq4ftIOWe6vvB9qxL4Sjiii-3QX5eM';
// O cache de TTS em áudio (ver getTtsAudio) cresce sem limite no localStorage — uma entrada
// por frase falada, nunca removida. Com o tempo isso estoura a quota do navegador, e daí um
// setItem comum do SDK do Supabase falha ao tentar persistir o token de sessão, deixando a
// sessão sem ser salva e causando um loop de login (usuário loga, o app não confirma sessão
// salva, manda de volta pra tela de login). Libera esse cache (facilmente reconstruído) quando
// necessário.
function evictTtsLocalStorageCache() {
    try {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.startsWith('comunica_tts_v1:') || key.startsWith('comunica_tts_v2:'))) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
    } catch (e) { /* localStorage indisponível: nada a fazer */ }
}
function createResilientAuthStorage() {
    return {
        getItem: (key) => { try { return localStorage.getItem(key); } catch (e) { return null; } },
        setItem: (key, value) => {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                evictTtsLocalStorageCache();
                try { localStorage.setItem(key, value); } catch (e2) { /* segue sem persistir sessão */ }
            }
        },
        removeItem: (key) => { try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }
    };
}
const supabaseClient = window.supabase
    ? window.supabase.createClient(supabaseUrl, supabaseKey, { auth: { storage: createResilientAuthStorage() } })
    : null;

// Reduz fotos grandes antes do upload (celular manda imagem de vários MB, que depois
// demora a aparecer nos jogos). Redimensiona para no máx. 1200px e reexporta comprimido;
// se o arquivo já é pequeno, não é imagem, ou a compressão não ajudar, sobe o original.
async function compressImageForUpload(file) {
    const isImage = file && file.type && file.type.startsWith('image/') && file.type !== 'image/gif';
    if (!isImage || file.size < 300 * 1024) return file;
    try {
        const bitmap = await createImageBitmap(file);
        const scale = Math.min(1, 1200 / Math.max(bitmap.width, bitmap.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(bitmap.width * scale));
        canvas.height = Math.max(1, Math.round(bitmap.height * scale));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

        let blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/webp', 0.82));
        if (!blob || blob.type !== 'image/webp') {
            // Navegador sem export WebP (Safari): JPEG, com fundo branco onde havia transparência.
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.82));
        }
        if (!blob || blob.size >= file.size) return file;
        const ext = blob.type === 'image/webp' ? 'webp' : 'jpg';
        const baseName = (file.name || 'imagem').replace(/\.\w+$/, '');
        return new File([blob], `${baseName}.${ext}`, { type: blob.type });
    } catch (e) {
        return file;
    }
}

async function uploadToSupabaseStorage(bucket, path, file) {
    if (!supabaseClient || !file) return null;
    const upload = await compressImageForUpload(file);
    const fileExt = (upload.name || file.name).split('.').pop();
    const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;
    try {
        const { error } = await supabaseClient.storage.from(bucket).upload(filePath, upload);
        if (error) throw error;
    } catch (e) {
        // "Failed to fetch" costuma ser uma falha transitória de rede (não algo
        // que vá se repetir); uma segunda tentativa depois de uma pausa curta
        // evita que ela derrube o save inteiro.
        console.warn('Upload falhou, tentando de novo:', e);
        await new Promise(resolve => setTimeout(resolve, 1500));
        const { error: retryError } = await supabaseClient.storage.from(bucket).upload(filePath, upload);
        if (retryError) throw retryError;
    }
    const { data: publicUrlData } = supabaseClient.storage.from(bucket).getPublicUrl(filePath);
    return publicUrlData?.publicUrl || null;
}

// Editor de "Palavra Escrita" do Exercício de Sílabas e do Exercício com
// Áudio Real (negrito/cor por trecho, ver createSyllablesItemBlockHtml e
// createAudioItemBlockHtml) — o campo é um contenteditable, então o que sai
// dele é HTML de verdade, não texto puro. sanitizeWordHtml reconstrói esse
// HTML do zero permitindo só <strong> e <span style="color:..."> aninhados
// em texto, descartando qualquer outra tag/atributo — nunca confia que o
// HTML já salvo (banco, ou o que o execCommand produziu) está limpo, porque
// isso volta a ser injetado via innerHTML no player (renderCurrentPlaylistItem).
function sanitizeWordHtml(html) {
    if (!html) return '';
    const safeColor = /^(#[0-9a-fA-F]{3,8}|rgba?\([\d.,\s%]+\)|[a-zA-Z]+)$/;
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const walk = (source, target) => {
        source.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                target.appendChild(document.createTextNode(child.textContent));
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                const tag = child.tagName.toLowerCase();
                if (tag === 'b' || tag === 'strong') {
                    const strong = document.createElement('strong');
                    walk(child, strong);
                    target.appendChild(strong);
                } else if (tag === 'br') {
                    target.appendChild(document.createElement('br'));
                } else {
                    const color = tag === 'font' ? child.getAttribute('color') : child.style?.color;
                    if (color && safeColor.test(color.trim())) {
                        const span = document.createElement('span');
                        span.style.color = color;
                        walk(child, span);
                        target.appendChild(span);
                    } else {
                        // Tag não permitida (div, script, etc.): mantém só o conteúdo de dentro.
                        walk(child, target);
                    }
                }
            }
        });
    };
    const result = document.createElement('div');
    walk(temp, result);
    return result.innerHTML;
}

// Texto puro da palavra (sem negrito/cor) — usado onde HTML não faz sentido:
// TTS, log de uso, etc. Continua funcionando normal pra palavras sem
// formatação nenhuma (Exercício com Slides), já que aí é texto puro mesmo.
function stripWordHtml(html) {
    if (!html) return '';
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.textContent || '';
}

// Um bloco de palavra pode ter mais de um editor rico (Palavra Escrita e
// Sílabas, cada um com seu próprio toolbar) — liga cada um pelo seu
// .form-group, senão wireWordEditorToolbar acharia sempre o primeiro campo
// do bloco pros dois toolbars.
function wireAllWordEditors(blockEl) {
    blockEl.querySelectorAll('.word-editor-field').forEach(field => {
        const group = field.closest('.form-group');
        if (group) wireWordEditorToolbar(group);
    });
}

// Liga os botões de Negrito/Cor/Limpar de UM editor (escopado ao seu
// .form-group) — Exercício de Sílabas e Áudio Real chamam essa mesma função
// pra cada campo rico que têm, via wireAllWordEditors; é só fiação de evento
// sobre elementos que o caller já montou, sem estado compartilhado entre os
// fluxos. mousedown+preventDefault nos botões de negrito/limpar evita que
// eles tirem o foco do campo antes do clique (o que colapsaria a seleção de
// texto); o input de cor não dá pra bloquear assim (perderia o seletor
// nativo), então guarda a seleção sozinho e restaura na hora de aplicar.
function wireWordEditorToolbar(container) {
    const field = container.querySelector('.word-editor-field');
    const boldBtn = container.querySelector('.word-editor-bold');
    const colorInput = container.querySelector('.word-editor-color');
    const clearBtn = container.querySelector('.word-editor-clear');
    if (!field) return;

    let savedRange = null;
    const saveSelection = () => {
        const sel = window.getSelection();
        if (sel.rangeCount > 0 && field.contains(sel.anchorNode)) {
            savedRange = sel.getRangeAt(0).cloneRange();
        }
    };
    field.addEventListener('keyup', saveSelection);
    field.addEventListener('mouseup', saveSelection);
    colorInput?.addEventListener('mousedown', saveSelection);

    const restoreSelection = () => {
        if (!savedRange) return false;
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(savedRange);
        return true;
    };

    boldBtn?.addEventListener('mousedown', (e) => e.preventDefault());
    boldBtn?.addEventListener('click', () => {
        field.focus();
        document.execCommand('bold');
    });

    colorInput?.addEventListener('input', () => {
        field.focus();
        restoreSelection();
        document.execCommand('foreColor', false, colorInput.value);
    });

    clearBtn?.addEventListener('mousedown', (e) => e.preventDefault());
    clearBtn?.addEventListener('click', () => {
        field.focus();
        document.execCommand('selectAll');
        document.execCommand('removeFormat');
        // removeFormat tira negrito/cor mas não desfaz o <span>/<font> em
        // si em todo navegador — normaliza reconstruindo a partir do texto puro.
        field.textContent = field.textContent;
    });
}

let currentMessage = [];
let currentTypingWord = "";
let db;
const messageDisplay = document.getElementById('message-display');

// CACHE DE IMAGENS ARASAAC
const arasaacCache = {};
async function fetchArasaacImage(word) {
    const cleanWord = word.split(' ')[0].toLowerCase().trim();
    if (arasaacCache[cleanWord]) return arasaacCache[cleanWord];
    try {
        const response = await fetch(`https://api.arasaac.org/api/pictograms/pt/search/${encodeURIComponent(cleanWord)}`);
        const data = await response.json();
        if (data && data.length > 0) {
            const id = data[0]._id;
            const imageUrl = `https://static.arasaac.org/pictograms/${id}/${id}_500.png`;
            arasaacCache[cleanWord] = imageUrl;
            return imageUrl;
        }
    } catch (e) { }
    return null;
}

// ====================================================
// TELEMETRIA LOCAL DO APP
// ====================================================
const USAGE_STORAGE_KEY = 'comunicafacil_usage_local_v1';
const USAGE_HEARTBEAT_MS = 10000;
const USAGE_VIEW_LABELS = {
    'view-core': 'Essenciais',
    'view-topics': 'Tópicos',
    'view-virtues': 'Fomes e Forças',
    'view-keyboard': 'Teclado',
    'view-media': 'Mídias',
    'view-audio': 'Áudios',
    'view-exercises': 'Exercícios',
    'view-games': 'Jogos',
    'view-ia': 'IA',
    'view-admin': 'Admin',
    'view-doctor-patients': 'Meus Pacientes'
};
const usageCatalog = { views: new Map(), activities: new Map() };
let usageState = null;
let usageCurrentUser = null;
let usageCurrentSessionId = null;
let usageCurrentActivity = null;
let usageCurrentActivityStartedAt = 0;
let usageHeartbeatTimer = null;
let usageLastHeartbeatAt = 0;
// Um dashboard de uso pode aparecer em mais de um lugar agora (admin vê
// todo mundo, médico vê só os próprios pacientes) — cada instância guarda
// o próprio filtro de usuário selecionado, chaveado pelo idPrefix do DOM.
let usageSelectedUserIdByPrefix = { usage: null };
let usageCurrentSection = 'view-core';
let usageSectionLastActiveAt = Date.now();

function createEmptyUsageState() {
    return { users: {}, sessions: [], events: [] };
}

function loadUsageState() {
    if (usageState) {
        normalizeUsageStateActivities(usageState);
        return usageState;
    }
    try {
        const raw = localStorage.getItem(USAGE_STORAGE_KEY);
        usageState = raw ? JSON.parse(raw) : createEmptyUsageState();
    } catch (e) {
        usageState = createEmptyUsageState();
    }
    if (!usageState.users) usageState.users = {};
    if (!Array.isArray(usageState.sessions)) usageState.sessions = [];
    if (!Array.isArray(usageState.events)) usageState.events = [];
    normalizeUsageStateActivities(usageState);
    return usageState;
}

function saveUsageState() {
    try {
        localStorage.setItem(USAGE_STORAGE_KEY, JSON.stringify(loadUsageState()));
    } catch (e) {
        console.warn('Não foi possível salvar os dados de uso local.', e);
    }
}

function makeUsageId(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === 'function') {
        return `${prefix}-${window.crypto.randomUUID()}`;
    }
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function ensureUserUsageRecord(user) {
    const state = loadUsageState();
    const now = new Date().toISOString();
    const record = state.users[user.id] || {
        userId: user.id,
        email: user.email || 'sem e-mail',
        role: user.role || 'viewer',
        totalActiveSeconds: 0,
        totalSessions: 0,
        lastSeenAt: null,
        lastActiveAt: null,
        views: {},
        activities: {}
    };
    record.email = user.email || record.email || 'sem e-mail';
    record.role = user.role || record.role || 'viewer';
    if (!record.createdAt) record.createdAt = now;
    state.users[user.id] = record;
    return record;
}

function createEmptyActivityStats() {
    return {
        count: 0,
        totalSeconds: 0,
        lastAccessAt: null
    };
}

function normalizeActivityStats(value) {
    if (typeof value === 'number') {
        return {
            count: value,
            totalSeconds: 0,
            lastAccessAt: null
        };
    }

    if (!value || typeof value !== 'object') {
        return createEmptyActivityStats();
    }

    return {
        count: Number(value.count || value.totalCount || value.total || 0),
        totalSeconds: Number(value.totalSeconds || value.total_seconds || value.seconds || 0),
        lastAccessAt: value.lastAccessAt || value.last_access_at || value.lastSeenAt || value.last_seen_at || null
    };
}

function normalizeUsageActivityLabel(label) {
    return String(label || '')
        .trim()
        .replace(/:duration\s*$/i, '')
        .trim();
}

function isUsageDurationLabel(label) {
    return /:duration\s*$/i.test(String(label || '').trim());
}

function formatUsageActivityDisplayLabel(label) {
    const cleanLabel = normalizeUsageActivityLabel(label);
    if (!cleanLabel) return 'Atividade';

    const prefixes = ['Jogo:', 'Exercício:', 'Nomeação:', 'Compositor:', 'Palavra:', 'Tela:'];
    for (const prefix of prefixes) {
        if (cleanLabel.toLowerCase().startsWith(prefix.toLowerCase())) {
            const raw = cleanLabel.slice(prefix.length).trim();
            if (!raw) return cleanLabel;
            return raw.charAt(0).toUpperCase() + raw.slice(1);
        }
    }

    return cleanLabel;
}

function normalizeUsageActivityStore(store) {
    const normalized = {};
    Object.entries(store || {}).forEach(([label, rawStats]) => {
        const normalizedLabel = normalizeUsageActivityLabel(label);
        if (!normalizedLabel) return;
        if (normalizedLabel.toLowerCase().startsWith('tela:')) return;

        const stats = normalizeActivityStats(rawStats);
        const incoming = isUsageDurationLabel(label)
            ? {
                count: 0,
                totalSeconds: stats.totalSeconds || stats.count || 0,
                lastAccessAt: stats.lastAccessAt
            }
            : stats;
        mergeActivityAggregate(normalized, normalizedLabel, incoming);
    });
    return normalized;
}

function normalizeUsageStateActivities(state) {
    if (!state || typeof state !== 'object') return;
    Object.values(state.users || {}).forEach(user => {
        if (user?.activities) user.activities = normalizeUsageActivityStore(user.activities);
    });
    (state.sessions || []).forEach(session => {
        if (session?.activities) session.activities = normalizeUsageActivityStore(session.activities);
    });
}

function ensureAggregateUser(users, uid, fallback = {}) {
    if (!uid) return null;
    if (!users[uid]) {
        users[uid] = {
            userId: uid,
            email: fallback.email || 'sem e-mail',
            role: fallback.role || 'viewer',
            totalActiveSeconds: 0,
            totalSessions: 0,
            totalEvents: 0,
            lastSeenAt: null,
            lastActiveAt: null,
            views: {},
            activities: {}
        };
    }
    const user = users[uid];
    if (fallback.email) user.email = fallback.email;
    if (fallback.role) user.role = fallback.role;
    return user;
}

function ensureActivityStatsRecord(container, label) {
    const current = normalizeActivityStats(container[label]);
    container[label] = current;
    return current;
}

function addActivityAccess(container, label, timestamp) {
    const stats = ensureActivityStatsRecord(container, label);
    stats.count += 1;
    stats.lastAccessAt = timestamp;
    return stats;
}

function addActivityDuration(container, label, seconds) {
    const stats = ensureActivityStatsRecord(container, label);
    stats.totalSeconds += seconds;
    return stats;
}

function mergeActivityAggregate(target, label, incoming) {
    const stats = normalizeActivityStats(incoming);
    const current = ensureActivityStatsRecord(target, label);
    current.count += stats.count;
    current.totalSeconds += stats.totalSeconds;
    if (stats.lastAccessAt && (!current.lastAccessAt || new Date(stats.lastAccessAt) > new Date(current.lastAccessAt))) {
        current.lastAccessAt = stats.lastAccessAt;
    }
    return current;
}

function resolveActivityTitle(activityId) {
    const activity = exerciseActivities.find(item => item.id === activityId) || gamesList.find(item => item.id === activityId);
    return activity ? activity.title : activityId;
}

function getActivityTrackingMeta(activityId) {
    const exercise = exerciseActivities.find(item => item.id === activityId);
    if (exercise) {
        return {
            label: exercise.title,
            meta: {
                key: `exercise:${activityId}`,
                group: 'Exercícios',
                view: 'view-exercises',
                detail: 'Atividade aberta'
            }
        };
    }

    const game = gamesList.find(item => item.id === activityId);
    if (game) {
        return {
            label: game.title,
            meta: {
                key: `game:${activityId}`,
                group: 'Jogos',
                view: 'view-games',
                detail: 'Jogo aberto'
            }
        };
    }

    return null;
}

function dbSaveSession(session) {
    if (!supabaseClient) return;
    supabaseClient.from('usage_sessions').upsert([{
        id: session.id,
        user_id: session.userId,
        email: session.email,
        role: session.role,
        start_at: session.startAt,
        end_at: session.endAt,
        status: session.status,
        active_seconds: session.activeSeconds,
        views: session.views,
        activities: session.activities,
        events_count: session.eventsCount,
        last_activity_at: session.lastActivityAt,
        last_seen_at: session.lastSeenAt
    }]).then(({ error }) => {
        if (error) console.warn('Erro ao salvar sessão no Supabase:', error);
    });
}

function dbSaveEvent(event) {
    if (!supabaseClient) return;
    supabaseClient.from('usage_events').insert([{
        id: event.id,
        timestamp: event.timestamp,
        user_id: event.userId,
        email: event.email,
        role: event.role,
        type: event.type,
        label: event.label,
        group_name: event.group,
        view_name: event.view,
        detail: event.detail,
        value: event.value
    }]).then(({ error }) => {
        if (error) console.warn('Erro ao salvar evento no Supabase:', error);
    });
}

function ensureSessionRecord(user) {
    const state = loadUsageState();
    const activeSession = state.sessions.find(session => session.userId === user.id && session.status === 'active');
    if (activeSession) return activeSession;

    const session = {
        id: makeUsageId('session'),
        userId: user.id,
        email: user.email || 'sem e-mail',
        role: user.role || 'viewer',
        startAt: new Date().toISOString(),
        endAt: null,
        status: 'active',
        activeSeconds: 0,
        views: {},
        activities: {},
        eventsCount: 0,
        lastActivityAt: null,
        lastSeenAt: new Date().toISOString()
    };
    state.sessions.unshift(session);
    // Sem esse corte, esse array cresce pra sempre (uma entrada por sessão de uso, nunca
    // removida) e é regravado inteiro no localStorage a cada heartbeat de 10s — o mesmo
    // padrão que estourou a quota de storage com o cache de TTS (ver evictTtsLocalStorageCache).
    if (state.sessions.length > 50) state.sessions.length = 50;
    const record = ensureUserUsageRecord(user);
    record.totalSessions = (record.totalSessions || 0) + 1;
    saveUsageState();
    dbSaveSession(session);
    return session;
}

function startUsageSession(user) {
    if (!user?.id) return;
    const normalizedUser = {
        id: user.id,
        email: user.email || 'sem e-mail',
        role: user.role || 'viewer'
    };
    if (usageCurrentUser && usageCurrentUser.id !== normalizedUser.id) {
        closeUsageSession('user-switch');
    }

    usageCurrentUser = normalizedUser;
    const session = ensureSessionRecord(normalizedUser);
    usageCurrentSessionId = session.id;
    usageLastHeartbeatAt = Date.now();
    ensureUserUsageRecord(normalizedUser);
    saveUsageState();
    startUsageHeartbeat();
    trackUsageEvent('system', 'Sessão iniciada', { detail: 'Sessão local iniciada' });
    const activeView = document.querySelector('.view-section.active');
    if (activeView?.id) {
        trackUsageView(activeView.id);
    }
}

function closeUsageSession(reason = 'encerrada') {
    stopUsageActivity(reason);
    flushUsageActiveTime(true);
    const session = getCurrentUsageSession();
    if (session) {
        session.status = 'closed';
        session.endAt = new Date().toISOString();
        session.endReason = reason;
        dbSaveSession(session);
    }
    saveUsageState();
    usageCurrentSessionId = null;
    usageCurrentUser = null;
}

function getCurrentUsageSession() {
    if (!usageCurrentUser || !usageCurrentSessionId) return null;
    const state = loadUsageState();
    return state.sessions.find(session => session.id === usageCurrentSessionId) || null;
}

function startUsageHeartbeat() {
    if (usageHeartbeatTimer) return;
    usageLastHeartbeatAt = Date.now();
    usageHeartbeatTimer = window.setInterval(() => {
        if (!usageCurrentUser || document.hidden) return;
        const session = getCurrentUsageSession();
        const userRecord = usageCurrentUser ? loadUsageState().users[usageCurrentUser.id] : null;
        if (!session || !userRecord) return;

        const now = Date.now();
        const elapsedSeconds = Math.max(0, Math.floor((now - usageLastHeartbeatAt) / 1000));
        if (elapsedSeconds <= 0) return;

        session.activeSeconds = (session.activeSeconds || 0) + elapsedSeconds;
        session.lastSeenAt = new Date(now).toISOString();
        userRecord.totalActiveSeconds = (userRecord.totalActiveSeconds || 0) + elapsedSeconds;
        userRecord.lastSeenAt = session.lastSeenAt;
        
        flushUsageSectionTime();
        
        usageLastHeartbeatAt = now;
        saveUsageState();
        dbSaveSession(session);
        if (document.getElementById('view-admin')?.classList.contains('active')) {
            renderUsageDashboard();
        }
    }, USAGE_HEARTBEAT_MS);
}

function flushUsageActiveTime(force = false) {
    if (!usageCurrentUser) return;
    const session = getCurrentUsageSession();
    const userRecord = usageCurrentUser ? loadUsageState().users[usageCurrentUser.id] : null;
    if (!session || !userRecord || (document.hidden && !force)) return;

    const now = Date.now();
    const elapsedSeconds = Math.max(0, Math.floor((now - usageLastHeartbeatAt) / 1000));
    if (elapsedSeconds > 0) {
        session.activeSeconds = (session.activeSeconds || 0) + elapsedSeconds;
        session.lastSeenAt = new Date(now).toISOString();
        userRecord.totalActiveSeconds = (userRecord.totalActiveSeconds || 0) + elapsedSeconds;
        userRecord.lastSeenAt = session.lastSeenAt;
    }
    
    flushUsageSectionTime();
    
    usageLastHeartbeatAt = now;
    saveUsageState();
    dbSaveSession(session);
}

function getSectionLabel(sectionId) {
    const labels = {
        'view-core': 'Tela: Essenciais',
        'view-carometro': 'Tela: Carômetro',
        'view-topics': 'Tela: Tópicos',
        'view-virtues': 'Tela: Fomes e Forças',
        'view-keyboard': 'Tela: Teclado',
        'view-media': 'Tela: Mídias',
        'view-audio': 'Tela: Áudios',
        'view-exercises': 'Tela: Exercícios',
        'view-games': 'Tela: Jogos',
        'view-ia': 'Tela: Assistente IA',
        'view-admin': 'Tela: Admin',
        'view-doctor-patients': 'Tela: Meus Pacientes',
        'game:memory': 'Jogo: Jogo da Memória',
        'game:memory-alphabet': 'Jogo: Memória do Alfabeto',
        'game:jogo2': 'Jogo: Trilha de Aprendizado de Forças',
        'game:complete-sentence': 'Jogo: Complete a Frase',
        'game:naming': 'Jogo: Reconhecimento de Palavras',
        'game:afasia': 'Jogo: Reconhecimento de Imagem'
    };
    return labels[sectionId] || sectionId;
}

function changeUsageSection(newSectionId) {
    if (!usageCurrentUser) return;
    flushUsageActivityTime();
    usageCurrentSection = newSectionId;
    usageSectionLastActiveAt = Date.now();
}

function flushUsageSectionTime() {
    flushUsageActivityTime();
    usageSectionLastActiveAt = Date.now();
}

function flushUsageActivityTime() {
    if (!usageCurrentUser || !usageCurrentActivity || !usageCurrentActivityStartedAt) return;
    const session = getCurrentUsageSession();
    const userRecord = loadUsageState().users[usageCurrentUser.id];
    if (!userRecord) return;

    const now = Date.now();
    const elapsedSeconds = Math.max(0, Math.floor((now - usageCurrentActivityStartedAt) / 1000));
    if (elapsedSeconds <= 0) {
        usageCurrentActivityStartedAt = now;
        return;
    }

    const startedAtIso = new Date(usageCurrentActivityStartedAt).toISOString();
    const currentStats = addActivityDuration(userRecord.activities, usageCurrentActivity.label, elapsedSeconds);
    if (!currentStats.lastAccessAt) currentStats.lastAccessAt = startedAtIso;

    if (session) {
        const sessionStats = addActivityDuration(session.activities, usageCurrentActivity.label, elapsedSeconds);
        if (!sessionStats.lastAccessAt) sessionStats.lastAccessAt = startedAtIso;
    }

    usageCurrentActivityStartedAt = now;
    saveUsageState();
    if (session) dbSaveSession(session);
}

function registerUsageCatalog(kind, label, meta = {}) {
    if (!label) return;
    const collection = kind === 'view' ? usageCatalog.views : usageCatalog.activities;
    const key = meta.key || label;
    if (!collection.has(key)) {
        collection.set(key, { key, label, group: meta.group || '', kind, order: meta.order || 0 });
    } else {
        const current = collection.get(key);
        current.label = label;
        current.group = meta.group || current.group || '';
    }
}

function incrementCounter(target, key, amount = 1) {
    if (!target[key]) target[key] = 0;
    target[key] += amount;
}

function trackUsageEvent(type, label, meta = {}) {
    if (!usageCurrentUser) return;
    const state = loadUsageState();
    const userRecord = ensureUserUsageRecord(usageCurrentUser);
    const session = getCurrentUsageSession();
    const eventLabel = type === 'activity'
        ? (usageCurrentActivity?.label || label || meta.view || meta.group || type)
        : (label || meta.view || meta.group || type);
    const timestamp = new Date().toISOString();

    if (type === 'view') {
        incrementCounter(userRecord.views, eventLabel);
        if (session) incrementCounter(session.views, eventLabel);
        registerUsageCatalog('view', eventLabel, { key: meta.view || eventLabel, group: meta.group || 'Tela' });
    } else if (type === 'activity') {
        addActivityAccess(userRecord.activities, eventLabel, timestamp);
        if (session) addActivityAccess(session.activities, eventLabel, timestamp);
        registerUsageCatalog('activity', eventLabel, { key: meta.key || eventLabel, group: meta.group || 'Atividade' });
    }

    const event = {
        id: makeUsageId('event'),
        timestamp,
        userId: usageCurrentUser.id,
        email: usageCurrentUser.email,
        role: usageCurrentUser.role,
        type,
        label: eventLabel,
        group: meta.group || '',
        view: meta.view || '',
        detail: meta.detail || '',
        value: meta.value || 1
    };
    state.events.unshift(event);
    if (state.events.length > 180) state.events.length = 180;
    if (session) {
        session.eventsCount = (session.eventsCount || 0) + 1;
        session.lastActivityAt = event.timestamp;
        session.lastSeenAt = event.timestamp;
    }
    userRecord.lastActivityAt = event.timestamp;
    userRecord.lastSeenAt = event.timestamp;
    saveUsageState();
    dbSaveEvent(event);
    if (session) {
        dbSaveSession(session);
    }

    if (document.getElementById('view-admin')?.classList.contains('active')) {
        renderUsageDashboard();
    }
}

function trackUsageView(viewId, meta = {}) {
    const label = USAGE_VIEW_LABELS[viewId] || viewId;
    trackUsageEvent('view', label, { view: viewId, group: meta.group || 'Tela' });
    changeUsageSection(viewId);
}

function trackUsageActivity(label, meta = {}) {
    trackUsageEvent('activity', label, meta);
}

function startUsageActivity(label, meta = {}) {
    if (!usageCurrentUser || !label) return;
    const key = meta.key || label;
    if (usageCurrentActivity && usageCurrentActivity.key === key) return;

    stopUsageActivity('troca-atividade');
    trackUsageActivity(label, meta);
    usageCurrentActivity = { label, key };
    usageCurrentActivityStartedAt = Date.now();
}

function stopUsageActivity(reason = 'encerrada') {
    if (!usageCurrentUser || !usageCurrentActivity) return;
    flushUsageActivityTime();
    usageCurrentActivity = null;
    usageCurrentActivityStartedAt = 0;
    if (reason === 'troca-atividade') return;
}

function setupUsageVisibilityHandling() {
    if (setupUsageVisibilityHandling.isBound) return;
    setupUsageVisibilityHandling.isBound = true;

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            flushUsageActiveTime(true);
            flushUsageActivityTime();
            return;
        }

        usageLastHeartbeatAt = Date.now();
        if (usageCurrentActivity) {
            usageCurrentActivityStartedAt = Date.now();
        }
    });

    window.addEventListener('pagehide', () => {
        flushUsageActiveTime(true);
        flushUsageActivityTime();
        closeUsageSession('pagehide');
    });
}

function formatUsageSeconds(totalSeconds) {
    const seconds = Math.max(0, Math.round(totalSeconds || 0));
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${remainingSeconds}s`;
    return `${remainingSeconds}s`;
}

function formatUsageDateTime(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
}

async function getUsageAggregate(allowedUserIds = null) {
    // allowedUserIds restringe a agregação a uma lista específica de
    // usuários — usado pelo médico, que só pode ver o uso dos próprios
    // pacientes (RLS também garante isso do lado do banco, isso aqui só
    // evita puxar dado de sessões/eventos que nem vão ser exibidos).
    if (supabaseClient && (canManageUsers || (isDoctor && allowedUserIds))) {
        try {
            let sessionsQuery = supabaseClient
                .from('usage_sessions')
                .select('*')
                .order('start_at', { ascending: false })
                .limit(100);
            let eventsQuery = supabaseClient
                .from('usage_events')
                .select('*')
                .order('timestamp', { ascending: false })
                .limit(150);
            if (allowedUserIds) {
                if (allowedUserIds.length === 0) {
                    return { users: [], sessions: [], events: [], viewTotals: {}, activityTotals: {}, activityStatsTotals: {}, knownViews: [], knownActivities: [], topActivity: null };
                }
                sessionsQuery = sessionsQuery.in('user_id', allowedUserIds);
                eventsQuery = eventsQuery.in('user_id', allowedUserIds);
            }
            const { data: dbSessions, error: errSessions } = await sessionsQuery;
            const { data: dbEvents, error: errEvents } = await eventsQuery;

            if (!errSessions && !errEvents && dbSessions && dbEvents) {
                const users = {};
                const viewTotals = {};
                const activityTotals = {};
                const activityStatsTotals = {};

                dbSessions.forEach(session => {
                    const uid = session.user_id;
                    const u = ensureAggregateUser(users, uid, {
                        email: session.email || 'sem e-mail',
                        role: session.role || 'viewer'
                    });
                    if (!u) return;
                    u.totalActiveSeconds += session.active_seconds || 0;
                    u.totalSessions += 1;

                    if (!u.lastSeenAt || new Date(session.last_seen_at) > new Date(u.lastSeenAt)) {
                        u.lastSeenAt = session.last_seen_at;
                    }
                    if (session.last_activity_at && (!u.lastActiveAt || new Date(session.last_activity_at) > new Date(u.lastActiveAt))) {
                        u.lastActiveAt = session.last_activity_at;
                    }

                    Object.entries(session.views || {}).forEach(([label, count]) => {
                        incrementCounter(u.views, label, count);
                        incrementCounter(viewTotals, label, count);
                    });
                    Object.entries(session.activities || {}).forEach(([label, rawStats]) => {
                        const normalizedLabel = normalizeUsageActivityLabel(label);
                        if (!normalizedLabel || normalizedLabel.toLowerCase().startsWith('tela:')) return;

                        const stats = normalizeActivityStats(rawStats);
                        const incoming = isUsageDurationLabel(label)
                            ? {
                                count: 0,
                                totalSeconds: stats.totalSeconds || stats.count || 0,
                                lastAccessAt: stats.lastAccessAt
                            }
                            : stats;
                        mergeActivityAggregate(u.activities, normalizedLabel, incoming);
                        incrementCounter(activityTotals, normalizedLabel, incoming.count || 0);
                        mergeActivityAggregate(activityStatsTotals, normalizedLabel, incoming);
                    });
                });

                dbEvents.forEach(event => {
                    const uid = event.user_id;
                    const u = ensureAggregateUser(users, uid, {
                        email: event.email || 'sem e-mail',
                        role: event.role || 'viewer'
                    });
                    if (!u) return;
                    u.totalEvents = (u.totalEvents || 0) + 1;
                    if (event.timestamp && (!u.lastSeenAt || new Date(event.timestamp) > new Date(u.lastSeenAt))) {
                        u.lastSeenAt = event.timestamp;
                    }
                });

                const knownViews = Array.from(usageCatalog.views.values());
                const knownActivities = Array.from(usageCatalog.activities.values());
                const topActivity = Object.entries(activityStatsTotals)
                    .sort((a, b) => (b[1].totalSeconds || 0) - (a[1].totalSeconds || 0))[0] || null;

                const sessions = dbSessions.map(s => ({
                    id: s.id,
                    userId: s.user_id,
                    email: s.email,
                    role: s.role,
                    startAt: s.start_at,
                    endAt: s.end_at,
                    status: s.status,
                    activeSeconds: s.active_seconds,
                    views: s.views,
                    activities: s.activities,
                    eventsCount: s.events_count,
                    lastActivityAt: s.last_activity_at,
                    lastSeenAt: s.last_seen_at
                }));

                const events = dbEvents.map(e => ({
                    id: e.id,
                    timestamp: e.timestamp,
                    userId: e.user_id,
                    email: e.email,
                    role: e.role,
                    type: e.type,
                    label: e.label,
                    group: e.group_name,
                    view: e.view_name,
                    detail: e.detail,
                    value: e.value
                }));

                return { users: Object.values(users), sessions, events, viewTotals, activityTotals, activityStatsTotals, knownViews, knownActivities, topActivity };
            }
        } catch (e) {
            console.error("Falha ao agregar dados do Supabase:", e);
        }
    }

    const state = loadUsageState();
    const users = Object.values(state.users);
    const sessions = state.sessions.slice();
    const events = state.events.slice();
    const viewTotals = {};
    const activityTotals = {};
    const activityStatsTotals = {};

    users.forEach(user => {
        Object.entries(user.views || {}).forEach(([label, count]) => incrementCounter(viewTotals, label, count));
        Object.entries(user.activities || {}).forEach(([label, rawStats]) => {
            const normalizedLabel = normalizeUsageActivityLabel(label);
            if (!normalizedLabel || normalizedLabel.toLowerCase().startsWith('tela:')) return;

            const stats = normalizeActivityStats(rawStats);
            const incoming = isUsageDurationLabel(label)
                ? {
                    count: 0,
                    totalSeconds: stats.totalSeconds || stats.count || 0,
                    lastAccessAt: stats.lastAccessAt
                }
                : stats;
            incrementCounter(activityTotals, normalizedLabel, incoming.count || 0);
            mergeActivityAggregate(activityStatsTotals, normalizedLabel, incoming);
        });
    });

    events.forEach(event => {
        const u = ensureAggregateUser(state.users || {}, event.userId, {
            email: event.email || 'sem e-mail',
            role: event.role || 'viewer'
        });
        if (!u) return;
        u.totalEvents = (u.totalEvents || 0) + 1;
        if (event.timestamp && (!u.lastSeenAt || new Date(event.timestamp) > new Date(u.lastSeenAt))) {
            u.lastSeenAt = event.timestamp;
        }
    });

    const knownViews = Array.from(usageCatalog.views.values());
    const knownActivities = Array.from(usageCatalog.activities.values());
    const topActivity = Object.entries(activityStatsTotals)
        .sort((a, b) => (b[1].totalSeconds || 0) - (a[1].totalSeconds || 0))[0] || null;

    return { users, sessions, events, viewTotals, activityTotals, activityStatsTotals, knownViews, knownActivities, topActivity };
}

function usageListItem(label, valueText, shareText, percent = 0) {
    const row = document.createElement('div');
    row.className = 'usage-item';

    const left = document.createElement('div');
    const strong = document.createElement('strong');
    strong.textContent = label;
    const sub = document.createElement('span');
    sub.textContent = shareText;
    left.appendChild(strong);
    left.appendChild(sub);

    const bar = document.createElement('div');
    bar.className = 'usage-bar';
    const fill = document.createElement('i');
    fill.style.width = `${Math.max(4, Math.min(100, percent))}%`;
    bar.appendChild(fill);
    left.appendChild(bar);

    const right = document.createElement('div');
    right.className = 'usage-meta';
    right.textContent = valueText;

    row.appendChild(left);
    row.appendChild(right);
    return row;
}

function renderUsageList(containerId, items, emptyText, selectedUserId = null, onSelectUser = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    if (!items || items.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'usage-item';
        empty.innerHTML = `<div><strong>${emptyText}</strong><span>Abra e use o app para alimentar esse painel.</span></div><div class="usage-meta">—</div>`;
        container.appendChild(empty);
        return;
    }

    const maxValue = Math.max(...items.map(item => item.value || 0), 1);
    items.forEach(item => {
        const percent = ((item.value || 0) / maxValue) * 100;
        const row = usageListItem(item.label, item.valueText, item.shareText, percent);
        if (item.userId && onSelectUser) {
            row.style.cursor = 'pointer';
            if (item.userId === selectedUserId) {
                row.style.background = 'rgba(59, 130, 246, 0.12)';
                row.style.borderColor = 'rgba(59, 130, 246, 0.4)';
            }
            row.onclick = () => onSelectUser(item.userId);
        }
        container.appendChild(row);
    });
}

function renderUsageActivityTable(containerId, items, emptyText) {
    const tbody = document.getElementById(containerId);
    if (!tbody) return;
    tbody.innerHTML = '';

    if (!items || items.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.textContent = emptyText;
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
    }

    items.forEach(item => {
        const row = document.createElement('tr');

        const activityCell = document.createElement('td');
        activityCell.textContent = item.label;
        activityCell.title = item.label;
        activityCell.className = 'usage-activity-cell usage-activity-cell-name';

        const timeCell = document.createElement('td');
        timeCell.textContent = formatUsageSeconds(item.totalSeconds || 0);
        timeCell.className = 'usage-activity-cell usage-activity-cell-time';

        const averageCell = document.createElement('td');
        const count = Number(item.count || 0);
        const totalSeconds = Number(item.totalSeconds || 0);
        averageCell.textContent = count > 0 ? formatUsageSeconds(Math.round(totalSeconds / count)) : '—';
        averageCell.className = 'usage-activity-cell usage-activity-cell-average';

        const countCell = document.createElement('td');
        countCell.textContent = String(count);
        countCell.className = 'usage-activity-cell usage-activity-cell-count';

        const lastAccessCell = document.createElement('td');
        lastAccessCell.textContent = formatUsageDateTime(item.lastAccessAt);
        lastAccessCell.className = 'usage-activity-cell usage-activity-cell-last';

        row.appendChild(activityCell);
        row.appendChild(timeCell);
        row.appendChild(averageCell);
        row.appendChild(countCell);
        row.appendChild(lastAccessCell);
        tbody.appendChild(row);
    });
}

async function renderUsageDashboard(idPrefix = 'usage', allowedUserIds = null) {
    const id = (suffix) => `${idPrefix}-${suffix}`;
    if (usageSelectedUserIdByPrefix[idPrefix] === undefined) usageSelectedUserIdByPrefix[idPrefix] = null;
    const setSelectedUserId = (val) => { usageSelectedUserIdByPrefix[idPrefix] = val; };
    const selectedUserId = () => usageSelectedUserIdByPrefix[idPrefix];

    const aggregate = await getUsageAggregate(allowedUserIds);

    // Atualizar o seletor dropdown com a lista de usuários únicos
    const selectFilter = document.getElementById(id('user-filter'));
    if (selectFilter) {
        const currentVal = selectedUserId() || 'all';
        selectFilter.innerHTML = '<option value="all">Filtrar: Todos os usuários</option>';
        const sortedUsersForFilter = [...aggregate.users].sort((a, b) => (a.email || '').localeCompare(b.email || ''));
        sortedUsersForFilter.forEach(u => {
            if (u.userId) {
                const opt = document.createElement('option');
                opt.value = u.userId;
                opt.textContent = u.email || 'Sem e-mail';
                if (u.userId === currentVal) opt.selected = true;
                selectFilter.appendChild(opt);
            }
        });
        if (!selectFilter.dataset.listenerSet) {
            selectFilter.addEventListener('change', (e) => {
                const val = e.target.value;
                setSelectedUserId(val === 'all' ? null : val);
                renderUsageDashboard(idPrefix, allowedUserIds);
            });
            selectFilter.dataset.listenerSet = 'true';
        }
    }

    const rankedUsers = aggregate.users
        .filter(user => (user.totalActiveSeconds || 0) > 0 || (user.totalSessions || 0) > 0)
        .sort((a, b) => (b.totalActiveSeconds || 0) - (a.totalActiveSeconds || 0));

    // Determina se vamos trabalhar com dados filtrados para um usuário específico
    const selectedUserRecord = selectedUserId() ? aggregate.users.find(u => u.userId === selectedUserId()) : null;

    const filteredActivityStats = (selectedUserId() && selectedUserRecord) ? (selectedUserRecord.activities || {}) : aggregate.activityStatsTotals;
    const activityEntries = Object.entries(filteredActivityStats)
        .map(([label, rawStats]) => {
            const stats = normalizeActivityStats(rawStats);
            return {
                label,
                displayLabel: formatUsageActivityDisplayLabel(label),
                count: stats.count,
                totalSeconds: stats.totalSeconds,
                lastAccessAt: stats.lastAccessAt
            };
        })
        .sort((a, b) => {
            if ((b.totalSeconds || 0) !== (a.totalSeconds || 0)) {
                return (b.totalSeconds || 0) - (a.totalSeconds || 0);
            }
            return (b.count || 0) - (a.count || 0);
        });

    const topActivities = activityEntries.slice(0, 5).map(item => ({
        label: item.displayLabel,
        value: item.totalSeconds,
        valueText: formatUsageSeconds(item.totalSeconds),
        shareText: `${item.count} acessos • último acesso ${formatUsageDateTime(item.lastAccessAt)}`
    }));

    const catalogActivityMap = new Map();
    aggregate.knownActivities.forEach(meta => {
        catalogActivityMap.set(meta.label, meta);
    });
    Object.keys(aggregate.activityStatsTotals || {}).forEach(label => {
        if (!catalogActivityMap.has(label)) {
            catalogActivityMap.set(label, {
                label,
                key: label,
                group: 'Atividade',
                kind: 'activity',
                order: 9999
            });
        }
    });
    const catalogActivityEntries = Array.from(catalogActivityMap.values()).map(meta => ({
        label: formatUsageActivityDisplayLabel(meta.label),
        value: normalizeActivityStats((selectedUserId() && selectedUserRecord) ? (selectedUserRecord.activities[meta.label] || 0) : (aggregate.activityStatsTotals[meta.label] || 0))
    }));
    const activityTableEntries = [...catalogActivityEntries]
        .sort((a, b) => {
            if ((b.value.totalSeconds || 0) !== (a.value.totalSeconds || 0)) {
                return (b.value.totalSeconds || 0) - (a.value.totalSeconds || 0);
            }
            return (b.value.count || 0) - (a.value.count || 0);
        })
        .map(item => ({
            label: item.label,
            totalSeconds: item.value.totalSeconds || 0,
            count: item.value.count || 0,
            lastAccessAt: item.value.lastAccessAt
        }));
    const lowActivities = [...catalogActivityEntries]
        .sort((a, b) => {
            if ((a.value.totalSeconds || 0) !== (b.value.totalSeconds || 0)) {
                return (a.value.totalSeconds || 0) - (b.value.totalSeconds || 0);
            }
            return (a.value.count || 0) - (b.value.count || 0);
        })
        .slice(0, 5)
        .map(item => ({
            label: item.label,
            value: item.value.totalSeconds,
            valueText: formatUsageSeconds(item.value.totalSeconds),
            shareText: item.value.count === 0
                ? 'Ainda sem acesso'
                : `${item.value.count} acessos • último acesso ${formatUsageDateTime(item.value.lastAccessAt)}`
        }));

    const filteredSessions = selectedUserId() ? aggregate.sessions.filter(s => s.userId === selectedUserId()) : aggregate.sessions;

    const activeSessions = filteredSessions.filter(session => session.status === 'active')
        .sort((a, b) => new Date(b.startAt) - new Date(a.startAt))
        .slice(0, 5)
        .map(session => ({
            label: session.email,
            value: session.activeSeconds || 0,
            valueText: formatUsageSeconds(session.activeSeconds || 0),
            shareText: `${session.role || 'viewer'} • desde ${formatUsageDateTime(session.startAt)}`
        }));

    const filteredEvents = selectedUserId() ? aggregate.events.filter(e => e.userId === selectedUserId()) : aggregate.events;
    const eventItems = filteredEvents.slice(0, 18).map(event => ({
        timestamp: event.timestamp,
        label: event.type === 'view'
            ? `Tela aberta: ${event.label}`
            : formatUsageActivityDisplayLabel(event.label),
        detail: event.detail || `${event.email} • ${event.role}`,
        kind: event.type
    }));

    const totalActiveSeconds = selectedUserId()
        ? (selectedUserRecord ? (selectedUserRecord.totalActiveSeconds || 0) : 0)
        : rankedUsers.reduce((sum, user) => sum + (user.totalActiveSeconds || 0), 0);

    const totalActions = activityEntries.reduce((sum, item) => sum + (item.count || 0), 0);
    const topActivity = activityEntries[0] ? activityEntries[0] : null;
    const totalSessions = filteredSessions.length;
    const activeSessionsCount = filteredSessions.filter(session => session.status === 'active').length;
    const avgSessionSeconds = totalSessions > 0 ? Math.round(totalActiveSeconds / totalSessions) : 0;
    const topShare = totalActions > 0 && topActivity ? Math.round((topActivity.count / totalActions) * 100) : 0;

    const usersBox = document.getElementById(id('total-users'));
    if (usersBox) {
        if (selectedUserId()) {
            usersBox.textContent = "1";
        } else {
            usersBox.textContent = rankedUsers.length.toString();
        }
    }
    const sessionsBox = document.getElementById(id('total-sessions'));
    if (sessionsBox) sessionsBox.textContent = `${totalSessions} sessões registradas`;
    const totalTimeBox = document.getElementById(id('total-time'));
    if (totalTimeBox) totalTimeBox.textContent = formatUsageSeconds(totalActiveSeconds);
    const activeNowBox = document.getElementById(id('active-now'));
    if (activeNowBox) activeNowBox.textContent = `${activeSessionsCount} sessões ativas agora`;

    const avgSessionBox = document.getElementById(id('avg-session-time'));
    if (avgSessionBox) avgSessionBox.textContent = formatUsageSeconds(avgSessionSeconds);
    const avgSessionNoteBox = document.getElementById(id('avg-session-note'));
    if (avgSessionNoteBox) {
        avgSessionNoteBox.textContent = totalSessions > 0
            ? `${totalSessions} sessões consideradas`
            : 'Baseado nas sessões registradas';
    }

    const totalActivitiesBox = document.getElementById(id('total-activities'));
    if (totalActivitiesBox) {
        const activeCount = selectedUserId()
            ? Object.keys(filteredActivityStats).length
            : aggregate.knownActivities.length;
        totalActivitiesBox.textContent = activeCount.toString();
    }
    const totalEventsBox = document.getElementById(id('total-events'));
    if (totalEventsBox) totalEventsBox.textContent = `${filteredEvents.length} eventos registrados`;

    const topItemBox = document.getElementById(id('top-item'));
    const topShareBox = document.getElementById(id('top-share'));
    if (topActivity && topItemBox && topShareBox) {
        topItemBox.textContent = formatUsageActivityDisplayLabel(topActivity.label);
        topShareBox.textContent = `${formatUsageSeconds(topActivity.totalSeconds)} • último acesso ${formatUsageDateTime(topActivity.lastAccessAt)} • ${topActivity.count} acessos`;
    } else if (topItemBox && topShareBox) {
        topItemBox.textContent = '—';
        topShareBox.textContent = 'Sem dados suficientes ainda';
    }

    const onSelectUser = (userId) => {
        setSelectedUserId(selectedUserId() === userId ? null : userId);
        if (selectFilter) selectFilter.value = selectedUserId() || 'all';
        renderUsageDashboard(idPrefix, allowedUserIds);
    };

    renderUsageList(
        id('user-ranking'),
        rankedUsers.slice(0, 5).map(user => ({
            label: user.email || 'Usuário',
            value: user.totalActiveSeconds || 0,
            valueText: formatUsageSeconds(user.totalActiveSeconds || 0),
            shareText: `${user.totalSessions || 0} sessões • último acesso ${formatUsageDateTime(user.lastSeenAt)}`,
            userId: user.userId
        })),
        'Nenhum usuário com uso registrado',
        selectedUserId(),
        onSelectUser
    );

    renderUsageList(id('top-activities'), topActivities, 'Nenhuma atividade acessada ainda');
    renderUsageList(id('activities-durations'), lowActivities, 'Ainda não há dados de tempo registrados');
    renderUsageList(id('live-sessions'), activeSessions, 'Nenhuma sessão ativa agora');
    renderUsageActivityTable(id('activity-table-body'), activityTableEntries, 'Nenhuma atividade registrada ainda');

    const timeline = document.getElementById(id('event-log'));
    if (timeline) {
        timeline.innerHTML = '';
        if (eventItems.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'usage-event';
            empty.innerHTML = '<p>Nenhum evento registrado para este filtro.</p>';
            timeline.appendChild(empty);
        } else {
            eventItems.forEach(event => {
                const item = document.createElement('div');
                item.className = 'usage-event';
                const time = document.createElement('time');
                time.textContent = formatUsageDateTime(event.timestamp);
                const copy = document.createElement('div');
                const pill = document.createElement('span');
                pill.className = `usage-pill ${event.kind === 'view' ? 'active' : 'usage-pill-muted'}`;
                pill.textContent = event.kind === 'view' ? 'Tela' : 'Ação';
                const text = document.createElement('p');
                text.textContent = `${event.label} • ${event.detail}`;
                copy.appendChild(pill);
                copy.appendChild(text);
                item.appendChild(time);
                item.appendChild(copy);
                timeline.appendChild(item);
            });
        }
    }

    let insight = 'Cole mais alguns dias de uso para que o painel passe a mostrar padrões confiáveis.';
    if (selectedUserId() && selectedUserRecord) {
        if (topShare >= 35 && topActivity) {
            insight = `O usuário foca muito em "${formatUsageActivityDisplayLabel(topActivity.label)}", que representa ${topShare}% do tempo nas atividades. Último acesso em ${formatUsageDateTime(topActivity.lastAccessAt)}.`;
        } else if (avgSessionSeconds > 0 && avgSessionSeconds < 120) {
            insight = `Este usuário realiza sessões muito curtas (média de ${formatUsageSeconds(avgSessionSeconds)}). Pode indicar dificuldades para manter a interação ou navegação confusa.`;
        } else {
            insight = `Uso equilibrado observado para este paciente. A atividade principal é "${topActivity ? formatUsageActivityDisplayLabel(topActivity.label) : 'Nenhuma'}" com ${formatUsageSeconds(topActivity ? topActivity.totalSeconds : 0)} registrados.`;
        }
    } else {
        if (topShare >= 35 && topActivity) {
            insight = `A atividade dominante já concentra ${topShare}% do tempo registrado. Isso costuma indicar um atalho útil, mas também pode sugerir que o restante da navegação está escondido ou menos intuitivo.`;
        } else if (avgSessionSeconds > 0 && avgSessionSeconds < 120 && totalActions < 20) {
            insight = 'As sessões estão curtas e com poucas ações. Isso pode significar que o usuário entrou, encontrou pouco valor imediato ou precisou sair rápido.';
        } else if (activeSessionsCount > 0) {
            insight = 'Há gente usando o app agora. Se o tempo subir, mas a contagem de ações não acompanhar, vale investigar se a tela fica aberta sem interação real.';
        } else if (rankedUsers.length > 0) {
            insight = 'O uso já aparece distribuído, mas ainda vale observar quais telas viram hábito e quais parecem ter pouca descoberta. Uma reorganização de destaque pode aumentar adesão.';
        }
    }
    const insightBox = document.getElementById(id('insight'));
    if (insightBox) insightBox.textContent = insight;
}

function clearLocalUsageData() {
    if (!confirm('Isso vai apagar apenas os dados de uso gravados neste navegador. Deseja continuar?')) return;
    usageState = createEmptyUsageState();
    usageCurrentSessionId = null;
    usageCurrentUser = null;
    usageLastHeartbeatAt = 0;
    try {
        localStorage.removeItem(USAGE_STORAGE_KEY);
    } catch (e) {
        console.warn('Não foi possível limpar os dados locais de uso.', e);
    }
    renderUsageDashboard();
}

// user_id dos pacientes do médico logado — usado pra restringir o dashboard
// de uso dele só ao que é seu (RLS também garante isso, essa lista é só
// pra montar a query já filtrada, sem depender de trazer tudo e filtrar
// depois).
async function getMyPatientUserIds() {
    if (!supabaseClient || !currentUserId) return [];
    // Inclui pacientes dos colegas da mesma empresa (mesmo raciocínio de
    // doctorBankOrFilter) — sem isso, um médico via só o próprio uso na aba
    // Uso e Insights mesmo já enxergando o paciente inteiro em Meus Pacientes.
    let query = supabaseClient.from('patients').select('user_id');
    query = currentUserCompanyId
        ? query.or(`doctor_user_id.eq.${currentUserId},company_id.eq.${currentUserCompanyId}`)
        : query.eq('doctor_user_id', currentUserId);
    const { data, error } = await query;
    if (error) { console.warn('Erro ao buscar pacientes do médico:', error.message); return []; }
    return (data || []).map(p => p.user_id).filter(Boolean);
}

function setDoctorTab(tabName) {
    const tabs = ['patients', 'usage'];

    tabs.forEach(tab => {
        const btn = document.getElementById(`btn-doctor-tab-${tab}`);
        const panel = document.getElementById(`doctor-${tab}-panel`);

        if (btn) {
            btn.classList.toggle('active', tab === tabName);
            btn.setAttribute('aria-selected', String(tab === tabName));
        }
        if (panel) {
            panel.classList.toggle('active', tab === tabName);
        }
    });

    if (tabName === 'patients') {
        loadDoctorPatients();
    } else if (tabName === 'usage') {
        getMyPatientUserIds().then(ids => renderUsageDashboard('doctor-usage', ids));
    }
}

function setAdminTab(tabName) {
    const tabs = ['users', 'companies', 'usage', 'modules'];
    
    tabs.forEach(tab => {
        const btn = document.getElementById(`btn-admin-tab-${tab}`);
        const panel = document.getElementById(`admin-${tab}-panel`);
        
        if (btn) {
            btn.classList.toggle('active', tab === tabName);
            btn.setAttribute('aria-selected', String(tab === tabName));
        }
        if (panel) {
            panel.classList.toggle('active', tab === tabName);
        }
    });

    if (tabName === 'users') {
        loadAdminUsers();
    } else if (tabName === 'companies') {
        loadCompanies();
    } else if (tabName === 'usage') {
        renderUsageDashboard();
    } else if (tabName === 'modules') {
        applyModuleVisibility(); // Refreshes UI and re-renders the panel
    }
}

function initApp() {
    // Rede de segurança do anti-piscar da sidebar (ver .modules-pending em
    // style.css): applyModuleVisibility() é quem normalmente revela os
    // ícones, mas só roda dentro do fluxo de sessão do Supabase — sem essa
    // rede, um cenário sem supabaseClient configurado deixaria a sidebar
    // escondida pra sempre em vez de só piscar.
    setTimeout(() => document.querySelector('.sidebar')?.classList.remove('modules-pending'), 4000);

    setupNavigation();
    setupUsageVisibilityHandling();
    initIndexedDB();
    setupModals();
    setupCardEditor();
    setupAudioModuleControls();
    renderGamesList();
    if (isCompleteSentenceLocalDemo()) {
        setTimeout(() => {
            document.querySelector('.nav-btn[data-view="view-games"]')?.click();
            openGame('complete-sentence');
        }, 250);
    }
}

// Pré-carrega o áudio de todos os .word-btn-text visíveis em uma view,
// para que o primeiro clique em qualquer card seja instantâneo.
// Só percorre grids que estejam visíveis (display != none) para não
// misturar conteúdo de abas ocultas.
function prefetchViewAudio(viewId) {
    const view = document.getElementById(viewId);
    if (!view) return;
    const containers = view.querySelectorAll('.grid-container, .grid-wrapper');
    containers.forEach(container => {
        // Pula containers ocultos (sub-grids que ainda não foram abertos)
        if (container.style.display === 'none') return;
        container.querySelectorAll('.word-btn-text').forEach(el => {
            const word = el.textContent?.trim();
            if (word) prefetchTts(word);
        });
    });
}

function setupNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view-section');
    const messageBar = document.querySelector('.message-bar');

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            views.forEach(v => v.classList.remove('active'));
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
            
            const targetView = btn.dataset.view;
            const viewElement = document.getElementById(targetView);
            if (viewElement) {
                viewElement.classList.add('active');
            }
            stopUsageActivity('troca-de-tela');
            trackUsageView(targetView);

            if (targetView !== 'view-games') {
                document.getElementById('complete-sentence-frame')?.contentWindow?.postMessage(
                    { type: 'complete-sentence:pause-audio' },
                    window.location.origin
                );
            }

            // Pré-carrega áudios de todos os cards da aba que acabou de abrir
            prefetchViewAudio(targetView);
            
            // Oculta a barra de mensagens nas telas que não usam composição de frases.
            if (messageBar) {
                if (targetView === 'view-topics' || targetView === 'view-virtues' || targetView === 'view-media' || targetView === 'view-audio' || targetView === 'view-ia' || targetView === 'view-exercises' || targetView === 'view-games' || targetView === 'view-admin' || targetView === 'view-books' || targetView === 'view-doctor-patients') {
                    messageBar.style.display = 'none';
                } else {
                    messageBar.style.display = 'flex';
                }
            }

            if (targetView === 'view-admin') {
                renderUsageDashboard();
            }

            if (targetView === 'view-doctor-patients') {
                loadDoctorPatients();
            }

            if (targetView === 'view-books') {
                refreshBooksFrameSrc();
            }

            if (targetView === 'view-audio') {
                loadAudioClips();
            }
        });
    });
}

async function renderGrid(containerId, wordsArray) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    for (const item of wordsArray) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${item.styleClass}`;

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;
        registerUsageCatalog('activity', `Palavra: ${item.word}`, {
            key: `word:${item.word}`,
            group: 'Palavras'
        });

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        // Pré-carrega o áudio ao montar o card, assim o primeiro clique é imediato
        prefetchTts(item.word);

        btn.addEventListener('click', () => {
            if (currentTypingWord.length > 0) commitTypingWord();
            trackUsageActivity(`Palavra: ${item.word}`, {
                key: `word:${item.word}`,
                group: 'Palavras',
                detail: 'Palavra tocada'
            });
            addToMessage(item.word);
            speak(item.word);
        });
        container.appendChild(btn);

        const wordKey = item.word.toLowerCase().trim();
        const localImgUrl = item.img || localForcesImages[wordKey];
        if (localImgUrl) {
            imgEl.src = localImgUrl;
        } else {
            const imageUrl = await fetchArasaacImage(item.word);
            if (imageUrl) imgEl.src = imageUrl;
            else imgContainer.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
        }
    }
}


function addToMessage(word) { currentMessage.push(word); renderMessage(); }
function commitTypingWord() { if (currentTypingWord.trim() !== "") { currentMessage.push(currentTypingWord); currentTypingWord = ""; } }

function renderMessage() {
    messageDisplay.innerHTML = '';
    currentMessage.forEach(word => {
        const span = document.createElement('span'); span.className = 'message-word'; span.textContent = word;
        messageDisplay.appendChild(span);
    });
    if (currentTypingWord.length > 0) {
        const span = document.createElement('span'); span.className = 'message-word';
        span.style.background = '#e0e0e0'; span.textContent = currentTypingWord + "_";
        messageDisplay.appendChild(span);
    }
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
}

let availableVoices = [];
function loadVoices() {
    availableVoices = window.speechSynthesis.getVoices();
}
if ('speechSynthesis' in window) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
}

// Voz nativa do navegador (Speech Synthesis API) — usada APENAS como fallback
// quando o backend edge-tts não responde (offline ou erro de rede).
function _speakNative(text) {
    if ('speechSynthesis' in window && text) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);

        let ptVoices = availableVoices.filter(v => v.lang.startsWith('pt'));
        if (ptVoices.length > 0) {
            let bestVoice = ptVoices.find(v =>
                v.name.includes('Premium') ||
                v.name.includes('Enhanced') ||
                v.name.includes('Google') ||
                v.name.includes('Luciana')
            );
            utterance.voice = bestVoice || ptVoices[0];
        } else {
            utterance.lang = 'pt-BR';
        }

        utterance.rate = 0.7;
        window.speechSynthesis.speak(utterance);
    }
}

// Voz neural (pt-BR-FranciscaNeural) via backend edge-tts, com fallback para a
// voz nativa do navegador quando nenhum backend responde.
//
// Para o clique responder na hora, o áudio é pré-carregado quando o slide aparece
// (prefetchTts) e guardado em dois níveis: memória (promessas, deduplica requisições
// em andamento) e localStorage (sobrevive a reload e funciona offline).
const azureTtsCache = new Map(); // texto -> Promise<string base64>
const TTS_STORAGE_PREFIX = 'comunica_tts_v2:';

// A function 'chat' agora exige sessão válida (fecha proxy aberto pro
// serviço pago da Azure) — anexa o token do usuário logado em toda chamada
// pra ela. Sem sessão, deixa sem header mesmo: o endpoint local de dev
// (127.0.0.1:5001) não usa isso, e contra o Supabase a function recusa com
// 401 (esperado, usuário não deveria estar usando o app deslogado).
async function getIaEndpointHeaders() {
    const headers = { 'Content-Type': 'application/json' };
    if (supabaseClient) {
        try {
            const { data } = await supabaseClient.auth.getSession();
            const token = data?.session?.access_token;
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
                headers['apikey'] = supabaseKey;
            }
        } catch (e) { /* segue sem header */ }
    }
    return headers;
}

async function fetchTtsAudio(endpoint, text) {
    const response = await fetch(endpoint, {
        method: 'POST',
        headers: await getIaEndpointHeaders(),
        body: JSON.stringify({ ttsText: text })
    });
    const data = await response.json();
    if (!response.ok || !data.audio) throw new Error(data.error || `Erro HTTP ${response.status}`);
    return data.audio;
}

function getTtsAudio(text) {
    if (azureTtsCache.has(text)) return azureTtsCache.get(text);
    const promise = (async () => {
        try {
            const stored = localStorage.getItem(TTS_STORAGE_PREFIX + text);
            if (stored) return stored;
        } catch (e) { /* localStorage indisponível: segue para o backend */ }
        let audioBase64;
        try {
            audioBase64 = await fetchTtsAudio(AZURE_AI_ENDPOINT, text);
        } catch (primaryError) {
            if (AZURE_AI_ENDPOINT === SUPABASE_CHAT_ENDPOINT) throw primaryError;
            audioBase64 = await fetchTtsAudio(SUPABASE_CHAT_ENDPOINT, text);
        }
        try {
            localStorage.setItem(TTS_STORAGE_PREFIX + text, audioBase64);
        } catch (e) {
            evictTtsLocalStorageCache();
            try { localStorage.setItem(TTS_STORAGE_PREFIX + text, audioBase64); } catch (e2) { /* quota cheia: só memória */ }
        }
        return audioBase64;
    })();
    promise.catch(() => azureTtsCache.delete(text)); // falha não fica em cache; próximo clique tenta de novo
    azureTtsCache.set(text, promise);
    return promise;
}

function prefetchTts(text) {
    if (text) getTtsAudio(text).catch(() => { /* erro tratado no clique */ });
}

// Função principal de áudio — usada em todo o app (cards, jogos, compositor).
// Usa a voz neural FranciscaNeural via edge-tts com fallback para o navegador.
//
// ttsRequestId evita que dois cliques em sequência rápida toquem áudio ao mesmo
// tempo: se a resposta de uma chamada mais antiga chega depois de uma mais nova
// já ter assumido, ela é descartada em vez de tocar por cima da atual.
let ttsRequestId = 0;
async function speakWithAzure(text) {
    if (!text) return;
    const myRequestId = ++ttsRequestId;
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (currentAudio) { currentAudio.pause(); currentAudio = null; }
    try {
        const audioBase64 = await getTtsAudio(text);
        if (myRequestId !== ttsRequestId) return;
        currentAudio = new Audio('data:audio/mp3;base64,' + audioBase64);
        await currentAudio.play();
    } catch (e) {
        if (myRequestId !== ttsRequestId) return;
        console.warn('TTS via backend indisponível, usando a voz do navegador:', e.message);
        _speakNative(text);
    }
}

// speak() agora é um alias para speakWithAzure() — garante voz uniforme
// (FranciscaNeural) em todos os cards, jogos e compositor do app.
function speak(text) {
    speakWithAzure(text);
}

function getPreposicaoDoDa(name) {
    if (!name) return 'do';
    const lower = name.toLowerCase().trim();
    // Nomes e termos femininos conhecidos
    const femaleTerms = ['hebe', 'menina', 'maria', 'ana', 'carla', 'julia', 'camila', 'fernanda', 'patricia', 'beatriz', 'aline', 'elefanta', 'ela'];
    if (femaleTerms.some(term => lower.includes(term))) {
        return 'da';
    }
    // Se o primeiro nome termina em 'a' e não é um nome masculino comum terminado em a
    const firstName = lower.split(/\s+/)[0];
    if (firstName.endsWith('a') && !['luca', 'nicolas', 'jean'].includes(firstName)) {
        return 'da';
    }
    return 'do';
}

function getPlayerIconHTML(player, index, size = '26px') {
    if (player.avatar && (player.avatar.startsWith('data:') || player.avatar.includes('/opponents/'))) {
        const borderCol = index === 0 ? '#3b82f6' : '#a855f7';
        return `<img src="${player.avatar}" alt="${player.name}" style="width:${size};height:${size};border-radius:50%;object-fit:cover;border:2px solid ${borderCol};vertical-align:middle;display:inline-block;" />`;
    }
    if (index === 0) {
        return '🐘';
    }
    return '<span style="position:relative;display:inline-block;">🐘<span style="position:absolute; top:-6px; right:-6px; font-size:0.6rem;">🎀</span></span>';
}


document.getElementById('btn-speak').addEventListener('click', () => {
    trackUsageActivity('Compositor: falar', {
        key: 'composer:speak',
        group: 'Compositor',
        detail: 'Botão falar acionado'
    });
    const keyboardView = document.getElementById('view-keyboard');
    if (keyboardView && keyboardView.classList.contains('active')) {
        const nativeInput = document.getElementById('native-keyboard-input');
        if (nativeInput && nativeInput.value.trim()) {
            speak(nativeInput.value.trim());
            return;
        }
    }
    commitTypingWord(); renderMessage();
    if (currentMessage.length > 0) speak(currentMessage.join(' '));
});
document.getElementById('btn-clear').addEventListener('click', () => { 
    trackUsageActivity('Compositor: limpar', {
        key: 'composer:clear',
        group: 'Compositor',
        detail: 'Botão limpar acionado'
    });
    const keyboardView = document.getElementById('view-keyboard');
    if (keyboardView && keyboardView.classList.contains('active')) {
        const nativeInput = document.getElementById('native-keyboard-input');
        if (nativeInput) {
            nativeInput.value = '';
        }
    }
    currentMessage = []; currentTypingWord = ""; renderMessage(); 
});
document.getElementById('btn-backspace').addEventListener('click', () => {
    const keyboardView = document.getElementById('view-keyboard');
    if (keyboardView && keyboardView.classList.contains('active')) {
        const nativeInput = document.getElementById('native-keyboard-input');
        if (nativeInput && nativeInput.value.length > 0) {
            nativeInput.value = nativeInput.value.slice(0, -1);
            return;
        }
    }
    if (currentTypingWord.length > 0) currentTypingWord = currentTypingWord.slice(0, -1);
    else if (currentMessage.length > 0) currentMessage.pop();
    renderMessage();
});

let pendingAccent = null;
const accentMap = {
    '´': { 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú' },
    '~': { 'a': 'ã', 'o': 'õ', 'n': 'ñ' },
    '^': { 'a': 'â', 'e': 'ê', 'o': 'ô' },
    '`': { 'a': 'à' }
};


// Sincroniza limpezas e botões do virtual keyboard com o hiddenInput
document.getElementById('btn-clear').addEventListener('click', () => {
    currentMessage = [];
    currentTypingWord = "";
    hiddenInput.value = "";
    renderMessage();
});
document.getElementById('btn-backspace').addEventListener('click', () => {
    if (currentTypingWord.length > 0) {
        currentTypingWord = currentTypingWord.slice(0, -1);
        hiddenInput.value = currentTypingWord;
    } else if (currentMessage.length > 0) {
        currentMessage.pop();
    }
    renderMessage();
});

// ----------------------------------------------------
// INDEXEDDB PARA MÍDIAS OFFLINE E EXERCÍCIOS
// ----------------------------------------------------

function initIndexedDB() {
    const request = indexedDB.open('ComunicaDB', 11);
    request.onupgradeneeded = (event) => {
        db = event.target.result;
        if (!db.objectStoreNames.contains('medias')) db.createObjectStore('medias', { keyPath: 'id', autoIncrement: true });
        if (!db.objectStoreNames.contains('audios')) db.createObjectStore('audios', { keyPath: 'id', autoIncrement: true });
        if (db.objectStoreNames.contains('exercises')) db.deleteObjectStore('exercises');
        db.createObjectStore('exercises', { keyPath: 'id', autoIncrement: true });
        if (!db.objectStoreNames.contains('virtues')) db.createObjectStore('virtues', { keyPath: 'id', autoIncrement: true });
        if (!db.objectStoreNames.contains('topics')) db.createObjectStore('topics', { keyPath: 'id', autoIncrement: true });
        // v8: unifica core_cards + quick_cards em um único store
        if (db.objectStoreNames.contains('core_cards')) db.deleteObjectStore('core_cards');
        if (db.objectStoreNames.contains('quick_cards')) db.deleteObjectStore('quick_cards');
        db.createObjectStore('core_cards', { keyPath: 'id', autoIncrement: true });
    };
    request.onsuccess = (event) => {
        db = event.target.result;
        migrateLocalMediaAndExercises().then(async () => {
            loadMediaCards();
            await seedLocalPracticeExercises();
            loadExerciseCards();
        });
        initCoreCardsDB();
        // Antes chamava initVirtuesDB()/initTopicsDB(), que liam direto do
        // IndexedDB local (cache compartilhado por navegador, não por login)
        // sem nunca passar pelo Supabase/RLS — sessão de outro usuário no
        // mesmo navegador vazava direto. load*AndRender já cobre o mesmo
        // bootstrap (semeia só se vazio globalmente E for admin/editor) e
        // sempre confere o Supabase primeiro.
        loadVirtuesAndRender();
        loadTopicsAndRender();
    };
}

async function migrateLocalMediaAndExercises() {
    if (!supabaseClient) return;

    // Migrar Mídias
    await new Promise((resolve) => {
        db.transaction(['medias'], 'readwrite').objectStore('medias').getAll().onsuccess = async (e) => {
            const locais = e.target.result;
            for (const media of locais) {
                await saveMediaToDB(media.title, media.blob, media.isVideo ? 'video/mp4' : 'audio/mp3', media.colorClass);
                // saveMediaToDB already inserts to Supabase, we can then delete local
                db.transaction(['medias'], 'readwrite').objectStore('medias').delete(media.id);
            }
            resolve();
        };
    });

    // Migrar Exercícios
    await new Promise((resolve) => {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises').getAll().onsuccess = async (e) => {
            const locais = e.target.result;
            for (const ex of locais) {
                if (ex.seedKey) continue; // conteúdo de prática semeado localmente: não promover à nuvem automaticamente
                // Exercício de um tipo dedicado (Sílabas, Áudio Real, etc. — ex.gameKind
                // preenchido) caiu aqui só porque o save real falhou (RLS, constraint...)
                // e ficou salvo apenas localmente. saveExercisePlaylistToDB só sabe migrar
                // o formato genérico de Slides (sem game_kind/audio_url/estilo do deck) —
                // usá-la aqui perderia esses campos, e o insert sem doctor_user_id/user_id
                // também é barrado pela RLS pra contas de médico. Deixa como está: some da
                // lista assim que a pessoa reabrir o editor certo (de Sílabas/Áudio Real)
                // e salvar de novo por lá, dessa vez pelo caminho que sabe migrar direito.
                if (ex.gameKind) continue;
                currentEditingExerciseId = null; // force insert as new
                currentEditingExerciseForkSource = null;
                await saveExercisePlaylistToDB(ex.title, ex.items || []);
                db.transaction(['exercises'], 'readwrite').objectStore('exercises').delete(ex.id);
            }
            resolve();
        };
    });
}

// EXERCÍCIOS DE PRÁTICA (NOMEAÇÃO E FRASES FUNCIONAIS)
// Semeados apenas no IndexedDB local (nunca no Supabase) para uso enquanto o conteúdo
// está em validação. Cada item usa textColor/textSize/isUppercase/isBold porque é isso
// que renderCurrentPlaylistItem lê ao exibir o slide.
const practiceExerciseSeeds = [
    {
        seedKey: 'seed-naming-v1',
        title: 'Nomeação: Objetos do dia a dia|blue',
        items: [
            'Copo', 'Chave', 'Prato', 'Colher', 'Garfo', 'Sabonete',
            'Escova de dente', 'Óculos', 'Sapato', 'Toalha', 'Guarda-chuva', 'Celular'
        ].map(word => ({
            word, textColor: '#1e3a8a', textSize: 100, isUppercase: false, isBold: true,
            videoLink: '', imageBlob: null, image_url: null
        }))
    },
    {
        seedKey: 'seed-phrases-v1',
        title: 'Frases Funcionais|green',
        items: [
            { word: 'Eu quero água', imgQuery: 'água' },
            { word: 'Estou com fome', imgQuery: 'fome' },
            { word: 'Estou com dor', imgQuery: 'dor' },
            { word: 'Preciso de ajuda', imgQuery: 'ajuda' },
            { word: 'Quero ir ao banheiro', imgQuery: 'banheiro' },
            { word: 'Quero descansar', imgQuery: 'descansar' },
            { word: 'Não entendi', imgQuery: 'confuso' },
            { word: 'Pode repetir, por favor?', imgQuery: 'ouvido' },
            { word: 'Estou bem', imgQuery: 'feliz' },
            { word: 'Quero conversar', imgQuery: 'conversa' }
        ].map(({ word, imgQuery }) => ({
            word, imgQuery, textColor: '#166534', textSize: 100, isUppercase: false, isBold: true,
            videoLink: '', imageBlob: null, image_url: null
        }))
    }
];

async function seedLocalPracticeExercises() {
    // Com Supabase configurado, esses 2 decks agora vivem lá como exercícios
    // globais de verdade (liberáveis por paciente, como qualquer outro
    // conteúdo do admin) — semeados uma vez via script de banco, não mais
    // pelo cliente. Sem isso, cairiam sempre no IndexedDB local de quem
    // abrisse o app, aparecendo pra todo mundo sem passar pela liberação do
    // médico. O fallback local abaixo só roda mesmo sem backend (offline/demo).
    if (supabaseClient) return;

    const existing = await new Promise((resolve) => {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => resolve(e.target.result || []);
    });
    const existingKeys = new Set(existing.map(ex => ex.seedKey).filter(Boolean));
    const missing = practiceExerciseSeeds.filter(seed => !existingKeys.has(seed.seedKey));
    if (missing.length === 0) return;

    await new Promise((resolve) => {
        const tx = db.transaction(['exercises'], 'readwrite');
        const store = tx.objectStore('exercises');
        missing.forEach(seed => store.add({ title: seed.title, items: seed.items, seedKey: seed.seedKey }));
        tx.oncomplete = resolve;
    });
}

async function saveMediaToDB(title, fileBlob, mimeType, colorClass, mediaUrl, patientId = null) {
    const isLink = !!mediaUrl;
    const isVideo = isLink ? true : mimeType.startsWith('video');
    // Mídia de médico já nasce visível pro paciente dele (sem o fluxo de
    // publicar/despublicar do admin, que é só pra conteúdo global). A policy
    // de escrita de "medias" (pré-existente, fora do nosso controle) exige
    // user_id = auth.uid() pra quem não é editor/admin — sem isso o insert
    // do médico é rejeitado pela RLS (403).
    let extraFields = { visible: false };
    if (patientId) {
        const { data: sessionData } = await supabaseClient.auth.getSession();
        extraFields = { visible: true, patient_id: patientId, user_id: sessionData?.session?.user?.id };
    } else if (isDoctor) {
        // Fase 19: médico sem paciente selecionado ainda vai pro banco
        // próprio — visível só pra ele até liberar por paciente (Meus
        // Pacientes → Mídias), mesma semântica de doctor_user_id em
        // exercises (saveExercisePlaylistToDB).
        const { data: sessionData } = await supabaseClient.auth.getSession();
        extraFields = { visible: true, doctor_user_id: currentUserId, company_id: currentUserCompanyId, user_id: sessionData?.session?.user?.id };
    }
    if (supabaseClient) {
        try {
            if (isLink) {
                await supabaseClient.from('medias').insert([{ title, is_video: isVideo, color_class: colorClass, media_url: mediaUrl, ...extraFields }]);
            } else {
                const url = await uploadToSupabaseStorage('media_uploads', 'medias', fileBlob);
                await supabaseClient.from('medias').insert([{ title, is_video: isVideo, color_class: colorClass, media_url: url, ...extraFields }]);
            }
            loadMediaCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar media no Supabase, caindo para local:', e);
        }
    }
    db.transaction(['medias'], 'readwrite').objectStore('medias')
        .add({ title, blob: fileBlob, isVideo, colorClass, media_url: mediaUrl, visible: false })
        .onsuccess = () => loadMediaCards();
}

async function updateMediaInDB(media, title, fileBlob, mimeType, colorClass, mediaUrl) {
    const updateFields = { title, color_class: colorClass };
    if (fileBlob) {
        const url = await uploadToSupabaseStorage('media_uploads', 'medias', fileBlob);
        updateFields.media_url = url;
        updateFields.is_video = mimeType.startsWith('video');
    } else if (mediaUrl) {
        updateFields.media_url = mediaUrl;
        updateFields.is_video = true;
    }
    // Sem arquivo novo nem link novo (aba "Arquivo" sem trocar o arquivo):
    // mantém media_url/is_video como estavam, só título/cor mudam.

    if (media.fromSupabase && supabaseClient) {
        await supabaseClient.from('medias').update(updateFields).eq('id', media.id);
        loadMediaCards();
        return;
    }
    db.transaction(['medias'], 'readonly').objectStore('medias').get(media.id).onsuccess = (e) => {
        const rec = e.target.result;
        if (!rec) return;
        const updatedRec = {
            ...rec, title, colorClass,
            media_url: updateFields.media_url !== undefined ? updateFields.media_url : rec.media_url,
            isVideo: updateFields.is_video !== undefined ? updateFields.is_video : rec.isVideo
        };
        db.transaction(['medias'], 'readwrite').objectStore('medias').put(updatedRec).onsuccess = () => loadMediaCards();
    };
}

async function toggleMediaVisibility(media) {
    const newVisible = !(media.visible !== false);
    if (media.fromSupabase && supabaseClient) {
        await supabaseClient.from('medias').update({ visible: newVisible }).eq('id', media.id);
    } else {
        db.transaction(['medias'], 'readonly').objectStore('medias').get(media.id).onsuccess = (e) => {
            const rec = e.target.result;
            if (!rec) return;
            db.transaction(['medias'], 'readwrite').objectStore('medias').put({ ...rec, visible: newVisible }).onsuccess = () => loadMediaCards();
        };
        return;
    }
    loadMediaCards();
}

let currentMedias = [];
let lastMergedMedias = [];
let mediaFilterQuery = '';
let currentEditingMediaId = null;
let currentEditingMediaFromSupabase = false;
let patientMediaReleaseMap = new Map();
async function loadMediaCards() {
    // Mesmo mapa que loadExerciseCards monta pra patient_exercise_flags: sem
    // isso, renderMediaCards não tinha como saber quais itens do banco (sem
    // patientId direto) foram liberados pra esse paciente via toggle em
    // "Meus Pacientes" — o selo de liberado e o aviso por e-mail ficavam sem
    // efeito pra esse caso, só funcionando pra mídia escopada direto.
    if (supabaseClient && isDoctor && activePatientContext) {
        const { data: flags } = await supabaseClient
            .from('patient_media_flags').select('media_id, visible').eq('patient_id', activePatientContext.id);
        patientMediaReleaseMap = new Map((flags || []).map(f => [String(f.media_id), f.visible]));
    } else {
        patientMediaReleaseMap = new Map();
    }

    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('medias').select('*');
            if (!error) {
                currentMedias = data.map(m => ({
                    id: m.id, title: m.title, isVideo: m.is_video, colorClass: m.color_class, media_url: m.media_url,
                    visible: m.visible !== false, fromSupabase: true, patientId: m.patient_id || null,
                    doctorUserId: m.doctor_user_id || null
                }));
            }
        } catch(e) {}
    }

    db.transaction(['medias'], 'readonly').objectStore('medias').getAll().onsuccess = (e) => {
        const localMedias = e.target.result.map(m => ({ ...m, visible: m.visible !== false, fromSupabase: false }));
        const allMedias = [...currentMedias, ...localMedias];
        renderMediaCards(allMedias);
    };
}

function renderMediaCards(mediasArray) {
    lastMergedMedias = mediasArray;
    const container = document.getElementById('grid-media');
    if (!container) return;
    container.innerHTML = '';

    // Médico "dentro" de um paciente (Fase 6b): vê só as mídias daquele
    // paciente, mais as globais como referência — mesmo cuidado de
    // renderExerciseCards, pra não misturar mídias de vários pacientes.
    const inDoctorPatientContext = isDoctor && activePatientContext;
    const canEditHere = isAdmin || inDoctorPatientContext;
    const baseMedias = inDoctorPatientContext
        ? mediasArray.filter(m => !m.patientId || m.patientId === activePatientContext.id)
        : mediasArray;
    let cardsToRender = canEditHere ? baseMedias : baseMedias.filter(m => m.visible !== false);

    const filterBar = document.getElementById('media-filter-bar');
    if (filterBar) filterBar.style.display = 'flex';
    if (mediaFilterQuery.trim()) {
        cardsToRender = cardsToRender.filter(m => titleMatchesQuery(m.title, mediaFilterQuery));
    }

    cardsToRender.forEach(media => {
        const btn = document.createElement('button');
        btn.className = `word-btn border-${media.colorClass}` + (isAdmin && media.visible === false ? ' card-hidden' : '');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        
        let thumbUrl = null;
        const link = media.media_url || media.link;
        if (link) {
            try {
                if (link.includes('youtube.com/watch')) {
                    const v = new URL(link).searchParams.get('v');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v.split('&')[0]}/hqdefault.jpg`;
                } else if (link.includes('youtu.be/')) {
                    const v = link.split('youtu.be/')[1].split('?')[0].replace(/\/$/, '');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
                } else if (link.includes('youtube.com/shorts/')) {
                    const v = link.split('youtube.com/shorts/')[1].split('?')[0].replace(/\/$/, '');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
                } else if (link.includes('youtube.com/embed/')) {
                    const v = link.split('youtube.com/embed/')[1].split('?')[0].replace(/\/$/, '');
                    if (v) thumbUrl = `https://img.youtube.com/vi/${v}/hqdefault.jpg`;
                } else if (link.includes('vimeo.com/')) {
                    thumbUrl = 'VIMEO_OEMBED';
                }
            } catch(e) {}
        }

        if (thumbUrl) {
            imgContainer.style.position = 'relative';
            const img = document.createElement('img');
            
            if (thumbUrl === 'VIMEO_OEMBED') {
                img.src = 'https://placehold.co/300x200/e2e8f0/a0aec0?text=Carregando...';
                const cleanLink = link.startsWith('http') ? link : 'https://' + link;
                fetch(`https://vimeo.com/api/oembed.json?url=${encodeURIComponent(cleanLink)}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.thumbnail_url) {
                            img.src = data.thumbnail_url;
                        } else {
                            img.src = 'https://placehold.co/300x200/e2e8f0/a0aec0?text=Vimeo';
                        }
                    })
                    .catch(() => {
                        img.src = 'https://placehold.co/300x200/e2e8f0/a0aec0?text=Indisponível';
                    });
            } else {
                img.src = thumbUrl;
            }
            img.alt = '';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderTopLeftRadius = '12px';
            img.style.borderTopRightRadius = '12px';
            imgContainer.appendChild(img);

            const overlayIcon = document.createElement('i');
            overlayIcon.className = 'fas fa-play-circle word-btn-icon';
            overlayIcon.style.position = 'absolute';
            overlayIcon.style.top = '50%';
            overlayIcon.style.left = '50%';
            overlayIcon.style.transform = 'translate(-50%, -50%)';
            overlayIcon.style.color = 'rgba(255,255,255,0.9)';
            overlayIcon.style.textShadow = '0 2px 8px rgba(0,0,0,0.6)';
            overlayIcon.style.fontSize = '3rem';
            imgContainer.appendChild(overlayIcon);
        } else {
            imgContainer.innerHTML = `<i class="fas ${media.isVideo || link ? 'fa-play-circle' : 'fa-music'} word-btn-icon" aria-hidden="true"></i>`;
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = media.title;
        btn.title = media.title; // título completo no hover (o rodapé corta em 2 linhas)

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        if (inDoctorPatientContext) {
            // Mídia escopada direto a esse paciente (media.patientId) já nasce
            // liberada pra ele — as demais (banco geral/global) só ficam
            // liberadas depois de marcadas em patient_media_flags (toggle em
            // "Meus Pacientes"). Mesmo raciocínio do selo/aviso em
            // renderExerciseCards.
            const isReleased = media.patientId === activePatientContext.id
                || patientMediaReleaseMap.get(String(media.id)) === true;
            const releaseBadge = document.createElement('div');
            releaseBadge.className = 'release-status-badge ' + (isReleased ? 'is-released' : 'is-not-released');
            releaseBadge.textContent = isReleased ? 'Liberado' : 'Não liberado';
            btn.appendChild(releaseBadge);

            if (isReleased) {
                btn.appendChild(createNotifyUsersButton(media.title, 'Mídia', {
                    id: activePatientContext.id,
                    name: activePatientContext.name,
                    email: activePatientContext.email
                }));
            }
        }

        if (isAdmin) {
            const isVisible = media.visible !== false;
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
            toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar do usuário' : 'Publicar para o usuário');
            toggleBtn.setAttribute('role', 'switch');
            toggleBtn.setAttribute('aria-checked', String(isVisible));
            toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleMediaVisibility(media); };
            btn.appendChild(toggleBtn);

            if (isVisible) {
                btn.appendChild(createNotifyUsersButton(media.title, 'Mídia'));
            }

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (confirm('Apagar?')) {
                    if (media.fromSupabase && supabaseClient) {
                        await supabaseClient.from('medias').delete().eq('id', media.id);
                        loadMediaCards();
                    } else {
                        db.transaction(['medias'], 'readwrite').objectStore('medias').delete(media.id).onsuccess = () => loadMediaCards();
                    }
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>'; editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openMediaEditor(media);
            };
            btn.appendChild(editBtn);
        } else if (isDoctor && ((media.doctorUserId && media.doctorUserId === currentUserId)
            || (inDoctorPatientContext && media.patientId === activePatientContext.id))) {
            // Médico só edita/apaga as próprias mídias — do banco dele
            // (doctorUserId) ou escopadas direto ao paciente ativo. As
            // globais do admin aparecem como referência, sem esses botões.

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (confirm('Apagar?')) {
                    await supabaseClient.from('medias').delete().eq('id', media.id);
                    loadMediaCards();
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>'; editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openMediaEditor(media);
            };
            btn.appendChild(editBtn);
        }
        btn.addEventListener('click', () => playMedia(media));
        container.appendChild(btn);
    });
}

// Exercícios (Slides com Edição)
let currentEditingExerciseId = null;
let currentEditingExerciseFromSupabase = false;
let currentEditingExerciseForkSource = null; // id do exercício global do admin sendo "forkado" (cópia própria do médico ao editar)
let currentEditingBlobs = {};
let currentEditingImageUrls = {};
let exerciseBlockCounter = 0;

// Médico editando um exercício global do admin (Fase 23 — fork on edit):
// acha (ou cria) a cópia própria dele, marcada via forked_from, em vez de
// tentar escrever na linha do admin (a RLS rejeitaria). Edições seguintes
// no mesmo exercício reaproveitam essa cópia — não duplica a cada save.
async function getOrCreateExerciseFork(sourceId, title, doctorUserId) {
    const { data: existing } = await supabaseClient.from('exercises').select('id')
        .eq('doctor_user_id', doctorUserId).eq('forked_from', sourceId).maybeSingle();
    if (existing) return existing.id;
    const { data: created, error } = await supabaseClient.from('exercises')
        .insert([{ title, visible: true, doctor_user_id: doctorUserId, company_id: currentUserCompanyId, forked_from: sourceId }])
        .select().single();
    if (error) throw error;
    return created.id;
}

async function saveExercisePlaylistToDB(title, itemsArray, doctorUserId = null) {
    // Exercícios só-locais (ex.: os semeados por seedLocalPracticeExercises) têm um id
    // de IndexedDB, não um id do Supabase. Se tentássemos o caminho do Supabase pra eles,
    // o update/delete usaria esse id local contra a tabela real e não bateria com nada —
    // a edição pareceria salvar, mas seria descartada em silêncio.
    const shouldTrySupabase = supabaseClient && (!currentEditingExerciseId || currentEditingExerciseFromSupabase);
    if (shouldTrySupabase) {
        try {
            // Upload sequencial (não Promise.all): vários uploads simultâneos pesam
            // bastante em conexões mais lentas/instáveis, e um deles falhando
            // ("Failed to fetch") derrubava o Promise.all inteiro mesmo que os
            // outros tivessem dado certo.
            const uploadedItems = [];
            for (const item of itemsArray) {
                let image_url = item.image_url || null;
                if (item.imageBlob instanceof Blob) {
                    image_url = await uploadToSupabaseStorage('media_uploads', 'images', item.imageBlob);
                }
                uploadedItems.push({ ...item, image_url });
            }

            let targetExerciseId = currentEditingExerciseId;
            if (!targetExerciseId && currentEditingExerciseForkSource) {
                targetExerciseId = await getOrCreateExerciseFork(currentEditingExerciseForkSource, title, doctorUserId);
            }

            if (targetExerciseId) {
                const { error: updateErr } = await supabaseClient.from('exercises').update({ title }).eq('id', targetExerciseId);
                if (updateErr) throw updateErr;
                const { error: deleteErr } = await supabaseClient.from('exercise_items').delete().eq('exercise_id', targetExerciseId);
                if (deleteErr) throw deleteErr;
                const dbItems = uploadedItems.map(item => ({
                    exercise_id: targetExerciseId,
                    word: item.word, syllables: item.syllables || null, color: item.color, size: item.size, uppercase: item.uppercase,
                    bold: item.bold, link: item.videoLink || item.link || '', image_url: item.image_url
                }));
                const { error: itemsErr } = await supabaseClient.from('exercise_items').insert(dbItems);
                if (itemsErr) throw itemsErr;
            } else {
                // Exercício de médico entra direto no banco dele (ninguém mais vê até
                // ele liberar por paciente em "Meus Pacientes" — patient_exercise_flags).
                const newExercisePayload = doctorUserId
                    ? { title, visible: true, doctor_user_id: doctorUserId, company_id: currentUserCompanyId }
                    : { title, visible: false };
                const { data: exData, error: insertErr } = await supabaseClient.from('exercises').insert([newExercisePayload]).select().single();
                if (insertErr) throw insertErr;
                const dbItems = uploadedItems.map(item => ({
                    exercise_id: exData.id,
                    word: item.word, syllables: item.syllables || null, color: item.color, size: item.size, uppercase: item.uppercase,
                    bold: item.bold, link: item.videoLink || item.link || '', image_url: item.image_url
                }));
                const { error: itemsErr } = await supabaseClient.from('exercise_items').insert(dbItems);
                if (itemsErr) throw itemsErr;
            }
            currentEditingExerciseForkSource = null;
            loadExerciseCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar exercise no Supabase, caindo para local:', e);
            alert('Não foi possível salvar o exercício no servidor (ficou salvo só neste dispositivo). Detalhe: ' + (e?.message || e));
        }
    }

    if (currentEditingExerciseId) {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').get(currentEditingExerciseId).onsuccess = (e) => {
            const existing = e.target.result || {};
            db.transaction(['exercises'], 'readwrite').objectStore('exercises')
                .put({ ...existing, id: currentEditingExerciseId, title, items: itemsArray })
                .onsuccess = () => loadExerciseCards();
        };
    } else {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises')
            .add({ title, items: itemsArray, visible: false })
            .onsuccess = () => loadExerciseCards();
    }
}

// Exercício de Sílabas: salvar é bem mais simples que o de Slides (sem
// upload de imagem, sem fork) — função própria, com seu próprio estado de
// edição (currentEditingSyllablesExerciseId etc.), pra não compartilhar
// estado com o editor de Slides.
let currentEditingSyllablesExerciseId = null;
let currentEditingSyllablesExerciseFromSupabase = false;

async function saveSyllablesExerciseToDB(title, size, color, font, itemsArray, doctorUserId = null) {
    const shouldTrySupabase = supabaseClient && (!currentEditingSyllablesExerciseId || currentEditingSyllablesExerciseFromSupabase);
    if (shouldTrySupabase) {
        try {
            const deckFields = { title, syllables_size: size || null, syllables_color: color || null, syllables_font: font || null };
            let targetExerciseId = currentEditingSyllablesExerciseId;

            if (targetExerciseId) {
                const { error: updateErr } = await supabaseClient.from('exercises').update(deckFields).eq('id', targetExerciseId);
                if (updateErr) throw updateErr;
                const { error: deleteErr } = await supabaseClient.from('exercise_items').delete().eq('exercise_id', targetExerciseId);
                if (deleteErr) throw deleteErr;
            } else {
                const newExercisePayload = doctorUserId
                    ? { ...deckFields, visible: true, game_kind: 'syllables', doctor_user_id: doctorUserId, company_id: currentUserCompanyId }
                    : { ...deckFields, visible: false, game_kind: 'syllables' };
                const { data: exData, error: insertErr } = await supabaseClient.from('exercises').insert([newExercisePayload]).select().single();
                if (insertErr) throw insertErr;
                targetExerciseId = exData.id;
            }

            const dbItems = itemsArray.map(item => ({ exercise_id: targetExerciseId, word: item.word, syllables: item.syllables, link: '' }));
            const { error: itemsErr } = await supabaseClient.from('exercise_items').insert(dbItems);
            if (itemsErr) throw itemsErr;

            loadExerciseCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar exercício de sílabas no Supabase, caindo para local:', e);
            alert('Não foi possível salvar o exercício no servidor (ficou salvo só neste dispositivo). Detalhe: ' + (e?.message || e));
        }
    }

    const localPayload = { title, items: itemsArray, visible: false, gameKind: 'syllables', syllablesSize: size || null, syllablesColor: color || null, syllablesFont: font || null };
    if (currentEditingSyllablesExerciseId) {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').get(currentEditingSyllablesExerciseId).onsuccess = (e) => {
            const existing = e.target.result || {};
            db.transaction(['exercises'], 'readwrite').objectStore('exercises')
                .put({ ...existing, ...localPayload, id: currentEditingSyllablesExerciseId })
                .onsuccess = () => loadExerciseCards();
        };
    } else {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises')
            .add(localPayload)
            .onsuccess = () => loadExerciseCards();
    }
}

// Exercício com Áudio Real: mesmo formato do de Sílabas (game_kind próprio,
// dbItems próprios), mas cada item carrega um audio_url (upload em
// media_uploads/audios) que renderCurrentPlaylistItem/btn-speak-presentation
// tocam no lugar da voz sintética da Azure quando presente.
let currentEditingAudioExerciseId = null;
let currentEditingAudioExerciseFromSupabase = false;

async function saveAudioExerciseToDB(title, size, color, font, itemsArray, doctorUserId = null) {
    // Sobe (ou reaproveita, se o item não trocou o arquivo na edição) o áudio
    // e a imagem opcional de cada palavra antes de gravar os itens — mesmo
    // padrão de uploadToSupabaseStorage já usado pra imagem/áudio em outras
    // telas. A imagem é opcional e nunca vem de busca automática (ARASAAC) —
    // só do upload manual daqui, ver renderCurrentPlaylistItem.
    const resolvedItems = await Promise.all(itemsArray.map(async (item) => {
        let audioUrl = item.audioUrl || null;
        if (item.audioFile) {
            audioUrl = await uploadToSupabaseStorage('media_uploads', 'audios', item.audioFile);
        }
        let imageUrl = item.imageUrl || null;
        if (item.imageFile) {
            imageUrl = await uploadToSupabaseStorage('media_uploads', 'images', item.imageFile);
        }
        return { word: item.word, syllables: item.syllables, audioUrl, audioFile: item.audioFile || null, imageUrl, imageFile: item.imageFile || null };
    }));

    const shouldTrySupabase = supabaseClient && (!currentEditingAudioExerciseId || currentEditingAudioExerciseFromSupabase);
    if (shouldTrySupabase) {
        try {
            const deckFields = { title, syllables_size: size || null, syllables_color: color || null, syllables_font: font || null };
            let targetExerciseId = currentEditingAudioExerciseId;

            if (targetExerciseId) {
                const { error: updateErr } = await supabaseClient.from('exercises').update(deckFields).eq('id', targetExerciseId);
                if (updateErr) throw updateErr;
                const { error: deleteErr } = await supabaseClient.from('exercise_items').delete().eq('exercise_id', targetExerciseId);
                if (deleteErr) throw deleteErr;
            } else {
                const newExercisePayload = doctorUserId
                    ? { ...deckFields, visible: true, game_kind: 'audio-real', doctor_user_id: doctorUserId, company_id: currentUserCompanyId }
                    : { ...deckFields, visible: false, game_kind: 'audio-real' };
                const { data: exData, error: insertErr } = await supabaseClient.from('exercises').insert([newExercisePayload]).select().single();
                if (insertErr) throw insertErr;
                targetExerciseId = exData.id;
            }

            const dbItems = resolvedItems.map(item => ({ exercise_id: targetExerciseId, word: item.word, syllables: item.syllables, audio_url: item.audioUrl, image_url: item.imageUrl, link: '' }));
            const { error: itemsErr } = await supabaseClient.from('exercise_items').insert(dbItems);
            if (itemsErr) throw itemsErr;

            loadExerciseCards();
            return;
        } catch (e) {
            console.warn('Erro ao salvar exercício de áudio real no Supabase, caindo para local:', e);
            alert('Não foi possível salvar o exercício no servidor (ficou salvo só neste dispositivo). Detalhe: ' + (e?.message || e));
        }
    }

    const localItems = resolvedItems.map(item => ({ word: item.word, syllables: item.syllables, audio_url: item.audioUrl, audioBlob: item.audioFile || undefined, image_url: item.imageUrl, imageBlob: item.imageFile || undefined }));
    const localPayload = { title, items: localItems, visible: false, gameKind: 'audio-real', syllablesSize: size || null, syllablesColor: color || null, syllablesFont: font || null };
    if (currentEditingAudioExerciseId) {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').get(currentEditingAudioExerciseId).onsuccess = (e) => {
            const existing = e.target.result || {};
            db.transaction(['exercises'], 'readwrite').objectStore('exercises')
                .put({ ...existing, ...localPayload, id: currentEditingAudioExerciseId })
                .onsuccess = () => loadExerciseCards();
        };
    } else {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises')
            .add(localPayload)
            .onsuccess = () => loadExerciseCards();
    }
}

// Adiciona um exercício do "Banco de Prontos" (global do admin, ou um dos 2
// decks semeados só localmente via practiceExerciseSeeds) como um exercício
// de verdade no banco do médico — mesmo formato de item de "Novo
// Exercício", remapeando defensivamente os nomes de campo do seed local
// (textColor/textSize/isUppercase/isBold) pros que saveExercisePlaylistToDB
// espera (mesmo remapeamento de openEditExercise, app.js:2503-2506); pra um
// exercício já vindo do Supabase os campos já batem, o remapeamento é
// inofensivo. O imgQuery do seed de "Frases Funcionais" não existe em
// exercise_items e se perde — a busca de pictograma cai pro fallback por
// item.word, que já existe.
async function addReadyBankExerciseToDoctorBank(ex) {
    if (!isDoctor || !currentUserId) return;

    const previousEditingId = currentEditingExerciseId;
    const previousEditingFromSupabase = currentEditingExerciseFromSupabase;
    const previousForkSource = currentEditingExerciseForkSource;
    const previousBlobs = currentEditingBlobs;
    const previousImageUrls = currentEditingImageUrls;

    currentEditingExerciseId = null; // força inserção como exercício novo
    currentEditingExerciseFromSupabase = false;
    currentEditingExerciseForkSource = null;
    currentEditingBlobs = {};
    currentEditingImageUrls = {};

    const mappedItems = (ex.items || []).map(item => ({
        word: item.word || '',
        videoLink: item.videoLink || item.link || '',
        color: item.color || item.textColor || '#333333',
        size: item.size || item.textSize || '100',
        uppercase: item.uppercase !== undefined ? !!item.uppercase : !!item.isUppercase,
        bold: item.bold !== undefined ? !!item.bold : (item.isBold !== undefined ? !!item.isBold : true),
        imageBlob: item.imageBlob || null,
        image_url: item.image_url || null
    }));

    try {
        await saveExercisePlaylistToDB(ex.title, mappedItems, currentUserId);
    } finally {
        currentEditingExerciseId = previousEditingId;
        currentEditingExerciseFromSupabase = previousEditingFromSupabase;
        currentEditingExerciseForkSource = previousForkSource;
        currentEditingBlobs = previousBlobs;
        currentEditingImageUrls = previousImageUrls;
    }
}

// "Banco de Prontos" (modal aberto a partir de "Novo Exercício"): lista os
// exercícios em formato slide-deck que não pertencem a nenhum médico —
// globais criados pelo admin, ou os 2 decks de exemplo semeados localmente
// (practiceExerciseSeeds). Exclui os containers de jogo (memória, alfabeto,
// naming/afasia/jogo2/complete-frase): o conteúdo deles não é um deck de
// slides, "adicionar" por aqui produziria um exercício quebrado.
function getReadyBankCandidates() {
    return lastMergedExercises.filter(ex =>
        !ex.doctorUserId &&
        !ex.gameKind &&
        ex.seedKey !== JOGO2_CARDS_SEED_KEY &&
        !isGameContainerSeedKey(ex.seedKey, MEMORY_CARDS_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, ALPHABET_MEMORY_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, NAMING_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, AFASIA_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, COMPLETE_FRASE_SEED_KEY)
    );
}

function renderReadyBankList() {
    const list = document.getElementById('ready-bank-list');
    if (!list) return;
    list.innerHTML = '';
    const candidates = getReadyBankCandidates();
    if (!candidates.length) {
        const empty = document.createElement('p');
        empty.className = 'media-hint';
        empty.textContent = 'Nenhum exercício pronto disponível ainda.';
        list.appendChild(empty);
        return;
    }
    candidates.forEach(ex => {
        const displayTitle = (ex.title || '').split('|')[0];
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';
        const label = document.createElement('span');
        label.textContent = displayTitle;
        const addBtn = document.createElement('button');
        addBtn.type = 'button';
        addBtn.className = 'btn-secondary';
        addBtn.textContent = 'Adicionar ao meu banco';
        addBtn.onclick = async () => {
            addBtn.disabled = true;
            await addReadyBankExerciseToDoctorBank(ex);
            const modal = document.getElementById('ready-bank-modal');
            if (modal) modal.style.display = 'none';
        };
        row.append(label, addBtn);
        list.appendChild(row);
    });
}

function openReadyBankModal() {
    renderReadyBankList();
    const modal = document.getElementById('ready-bank-modal');
    if (modal) modal.style.display = 'flex';
}

async function toggleExerciseVisibility(ex) {
    const newVisible = !(ex.visible !== false);
    ex.visible = newVisible;
    if (ex.fromSupabase && supabaseClient) {
        try {
            await supabaseClient.from('exercises').update({ visible: newVisible }).eq('id', ex.id);
        } catch (e) {
            console.warn('Erro ao atualizar visibilidade no Supabase:', e);
        }
    } else {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').get(ex.id).onsuccess = (e) => {
            const rec = e.target.result;
            if (!rec) return;
            db.transaction(['exercises'], 'readwrite').objectStore('exercises').put({ ...rec, visible: newVisible }).onsuccess = () => loadExerciseCards();
        };
        return;
    }
    loadExerciseCards();
}

async function sendActivityNotification(title, category = 'Atividade', patient = null) {
    if (!supabaseClient) {
        alert('O envio de avisos requer conexão com o servidor.');
        return;
    }

    const patientLabel = patient ? (patient.name || patient.email || 'este paciente') : null;
    const confirmed = patient
        ? confirm(`Enviar um e-mail para ${patientLabel} avisando que "${title}" está disponível?`)
        : confirm(`Enviar um e-mail para todos os usuários avisando que "${title}" está disponível?`);
    if (!confirmed) return;

    const { data, error } = await supabaseClient.functions.invoke('notify-users', {
        body: { title, category, patientId: patient ? patient.id : undefined }
    });

    if (error) {
        console.error('Erro ao enviar aviso:', error);
        alert('Não foi possível enviar o aviso. Verifique a configuração do Gmail e tente novamente.');
        return;
    }

    alert(patient
        ? (data?.recipientCount ? `Aviso enviado para ${patientLabel}.` : 'Não foi possível encontrar o e-mail deste paciente.')
        : `Aviso enviado para ${data?.recipientCount ?? 0} usuário(s).`);
}

function createNotifyUsersButton(title, category = 'Atividade', patient = null) {
    const notifyBtn = document.createElement('button');
    notifyBtn.type = 'button';
    notifyBtn.className = 'notify-users-btn';
    notifyBtn.innerHTML = '<i class="fas fa-envelope" aria-hidden="true"></i>';
    notifyBtn.setAttribute('aria-label', patient ? `Avisar ${patient.name || patient.email} sobre ${title}` : `Avisar usuários sobre ${title}`);
    notifyBtn.title = patient ? `Avisar ${patient.name || patient.email} por e-mail` : 'Avisar usuários por e-mail';
    notifyBtn.onclick = async (ev) => {
        ev.stopPropagation();
        notifyBtn.disabled = true;
        try {
            await sendActivityNotification(title, category, patient);
        } finally {
            notifyBtn.disabled = false;
        }
    };
    return notifyBtn;
}

let currentExercises = [];
let lastMergedExercises = [];
let exerciseFilterQuery = '';
let exerciseFilterStatus = 'all';
const normalizeSearchText = s => (s || '').toString().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
// "Cont\u00e9m em qualquer posi\u00e7\u00e3o" deixava buscas de 1 letra (ex: "s") baterem em
// quase tudo \u2014 a maioria dos t\u00edtulos tem "s" em algum lugar (S\u00edlaba, Sons,
// Frase...). Casar por in\u00edcio de cada palavra do t\u00edtulo resolve isso e ainda
// cobre o caso de digitar s\u00f3 a letra do exerc\u00edcio (ex: "g" acha "Letra G - J").
// Usado tanto por Exerc\u00edcios quanto por M\u00eddias.
function titleMatchesQuery(title, rawQuery) {
    const queryTokens = normalizeSearchText(rawQuery).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
    if (queryTokens.length === 0) return true;
    const titleTokens = normalizeSearchText(title).split(/[^\p{L}\p{N}]+/u).filter(Boolean);
    return queryTokens.every(qt => titleTokens.some(tt => tt.startsWith(qt)));
}
// O Supabase (PostgREST) corta resultado em 1000 linhas por padrão — um
// `.select('*')` sem `.range()` em exercise_items ficava truncado depois que
// a tabela passou de 1000 linhas (confirmado em produção: content-range
// "0-999/1081"). Como o corte pega as linhas mais ANTIGAS primeiro (ordenado
// por id), os itens mais recentes — os exercícios criados hoje — ficavam de
// fora inteiros: card salvava certinho, mas abria sem nenhum item (parecia
// não abrir a apresentação/edição). Buscar em páginas de 1000 resolve pra
// qualquer tamanho de tabela, sem depender de mudar configuração no projeto.
async function fetchAllExerciseItems() {
    const pageSize = 1000;
    let allItems = [];
    let from = 0;
    while (true) {
        const { data, error } = await supabaseClient
            .from('exercise_items')
            .select('*')
            .order('id', { ascending: true })
            .range(from, from + pageSize - 1);
        if (error || !data) break;
        allItems = allItems.concat(data);
        if (data.length < pageSize) break;
        from += pageSize;
    }
    return allItems;
}
async function loadExerciseCards() {
    // Tela "olho" de Exercícios (enterPatientContext) mostra o banco inteiro do
    // médico, não só o que está liberado pro paciente — sem isso, um card novo
    // parece "já disponível pro paciente" quando na verdade ainda não foi
    // liberado. O mapa abaixo alimenta o selo "Liberado"/"Não liberado" por
    // card em renderExerciseCards.
    if (supabaseClient && isDoctor && activePatientContext) {
        const { data: flags } = await supabaseClient
            .from('patient_exercise_flags').select('exercise_id, visible').eq('patient_id', activePatientContext.id);
        patientExerciseReleaseMap = new Map((flags || []).map(f => [String(f.exercise_id), f.visible]));
    } else {
        patientExerciseReleaseMap = new Map();
    }

    if (supabaseClient) {
        try {
            const { data: exData, error: exErr } = await supabaseClient.from('exercises').select('*');
            if (!exErr) {
                const itemData = await fetchAllExerciseItems();
                currentExercises = exData.map(ex => {
                    const inferredSeedKey = ex.seed_key || inferExerciseSeedKeyFromTitle(ex.title);
                    const inferredVisible = ex.visible !== undefined
                        ? ex.visible !== false
                        : inferredSeedKey ? false : true;
                    const items = (itemData || []).filter(item => item.exercise_id === ex.id).map(item => ({
                        word: item.word, syllables: item.syllables, color: item.color, size: item.size, uppercase: item.uppercase,
                        bold: item.bold, videoLink: item.link, image_url: item.image_url,
                        pairId: item.pair_id, role: item.role, audio_url: item.audio_url
                    }));
                    return {
                        id: ex.id,
                        title: ex.title,
                        items,
                        visible: inferredVisible,
                        seedKey: inferredSeedKey,
                        fromSupabase: true,
                        patientId: ex.patient_id || null,
                        doctorUserId: ex.doctor_user_id || null,
                        forkedFrom: ex.forked_from || null,
                        gameKind: ex.game_kind || null,
                        syllablesSize: ex.syllables_size || null,
                        syllablesColor: ex.syllables_color || null,
                        syllablesFont: ex.syllables_font || null
                    };
                });
            }
        } catch(e) {}
    }

    // Espera o IndexedDB de verdade (não só a parte do Supabase): sem isso, quem chama
    // `await loadExerciseCards()` seguia em frente antes de lastMergedExercises estar
    // atualizado, e telas que renderizam logo depois de salvar (como os jogos) mostravam
    // dado velho até a próxima navegação.
    // Chaves dos decks de prática promovidos pro Supabase (ver
    // seedLocalPracticeExercises) — filtra cópias locais antigas que
    // sobraram de sessões anteriores neste navegador, senão elas continuam
    // aparecendo pra qualquer paciente sem passar pela liberação do médico.
    const promotedSeedKeys = supabaseClient ? new Set(practiceExerciseSeeds.map(s => s.seedKey)) : null;

    await new Promise((resolve) => {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => {
            const localExercises = e.target.result
                .filter(ex => !promotedSeedKeys || !promotedSeedKeys.has(ex.seedKey))
                .map(ex => ({ ...ex, visible: ex.visible !== false, fromSupabase: false }));
            const allExercises = [...currentExercises, ...localExercises];
            renderExerciseCards(allExercises);
            resolve();
        };
    });
}

function renderExerciseCards(exercisesArray) {
    lastMergedExercises = exercisesArray;
    const container = document.getElementById('grid-exercises');
    if (!container) return;
    container.innerHTML = '';

    // O container "Cartas do Jogo da Memória" (seedKey MEMORY_CARDS_SEED_KEY) é armazenamento
    // interno do Jogo da Memória — nunca deve aparecer como um card de exercício, nem para o admin.
    // Naming/afasia também escondem as variantes por médico (":doctor:<uuid>",
    // ver doctorScopedSeedKey) — sem isso, o container do médico vazaria como
    // card solto na grade normal de Exercícios.
    const realExercises = exercisesArray.filter(ex =>
        !isGameContainerSeedKey(ex.seedKey, MEMORY_CARDS_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, ALPHABET_MEMORY_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, NAMING_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, AFASIA_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, COMPLETE_FRASE_SEED_KEY) &&
        !isGameContainerSeedKey(ex.seedKey, JOGO2_CARDS_SEED_KEY)
    );

    // Médico vê o próprio "banco" de exercícios (Fase 7) — os que ele criou,
    // ainda que não liberados pra nenhum paciente — mais os globais, como
    // referência. A liberação por paciente acontece na tela "Meus Pacientes"
    // (openPatientExercisesModal), não aqui.
    // Exercício escopado direto a um paciente (patientId, sem doctorUserId)
    // já chegou até aqui filtrado pelo baseExercises acima (só sobra se for
    // do paciente ativo) — então, se tem patientId nesse ponto, é do
    // paciente que o médico está vendo agora: edita/apaga igual ao próprio
    // banco, não é fork de conteúdo global do admin.
    const isOwnBankExercise = ex => (ex.doctorUserId && ex.doctorUserId === currentUserId) || !!ex.patientId;
    const canEditHere = isAdmin || isDoctor;

    // Médico "fora" de um paciente (grade geral de Exercícios) não deve ver
    // exercícios escopados a um paciente específico — isso é conteúdo
    // pessoal daquele paciente, não do banco geral do médico. "Dentro" de um
    // paciente (activePatientContext), mostra só os daquele paciente. Mesmo
    // cuidado que renderMediaCards já toma pra mídias.
    const inDoctorPatientContext = isDoctor && activePatientContext;
    const baseExercises = isDoctor
        ? realExercises.filter(ex => !ex.patientId || (inDoctorPatientContext && ex.patientId === activePatientContext.id))
        : realExercises;

    // Reconhecimento de Palavras (e, no futuro, de Imagem) agora pode ter
    // vários decks — cada `exercises` row com gameKind é um deck próprio,
    // não mais um container singleton. Abrir pra editar ou pra jogar
    // precisa direcionar pro fluxo certo em vez do de slide-deck comum.
    const openExerciseEditor = (ex) => {
        if (ex.gameKind === 'naming') openNamingDeckManage(ex);
        else if (ex.gameKind === 'afasia') openAfasiaDeckManage(ex);
        else if (ex.gameKind === 'syllables') openEditSyllablesExercise(ex);
        else if (ex.gameKind === 'audio-real') openEditAudioExercise(ex);
        else openEditExercise(ex);
    };
    const openExerciseCard = (ex) => {
        if (ex.gameKind === 'naming') playNamingDeck(ex);
        else if (ex.gameKind === 'afasia') playAfasiaDeck(ex);
        else openPresentationPlaylist(ex);
    };

    let cardsToRender = canEditHere ? baseExercises : baseExercises.filter(ex => ex.visible !== false);

    // Busca/filtro (Fase 25): busca por nome pra todo mundo (médico, admin e
    // paciente) — o filtro por "letra" não ganhou campo próprio porque os
    // títulos já trazem a letra no texto ("Letra G - J", "Sons do C"), então
    // a busca por nome já cobre. Já o dropdown de status (Liberado/Não
    // liberado) só faz sentido dentro do "modo paciente" do médico (tela
    // "olho" via enterPatientContext, ver updatePatientContextBanners) —
    // é onde existe esse conceito por paciente; fora daí fica escondido.
    const filterBar = document.getElementById('exercise-filter-bar');
    const filterStatusSelect = document.getElementById('exercise-filter-status');
    if (filterBar) filterBar.style.display = 'flex';
    if (filterStatusSelect) filterStatusSelect.style.display = inDoctorPatientContext ? '' : 'none';

    if (exerciseFilterQuery.trim()) {
        cardsToRender = cardsToRender.filter(ex => titleMatchesQuery((ex.title || '').split('|')[0], exerciseFilterQuery));
    }
    if (inDoctorPatientContext && exerciseFilterStatus !== 'all') {
        cardsToRender = cardsToRender.filter(ex => {
            const isReleased = ex.patientId === activePatientContext.id
                || patientExerciseReleaseMap.get(String(ex.id)) === true;
            return exerciseFilterStatus === 'released' ? isReleased : !isReleased;
        });
    }

    // Ordem alfabética pelo nome exibido (não pelo id/ordem de criação) —
    // localeCompare com 'pt-BR' + numeric pra "Sílaba 2" vir antes de
    // "Sílaba 10", em vez de ordem lexicográfica pura.
    cardsToRender = cardsToRender.slice().sort((a, b) =>
        (a.title || '').split('|')[0].localeCompare((b.title || '').split('|')[0], 'pt-BR', { numeric: true, sensitivity: 'base' })
    );

    cardsToRender.forEach(ex => {
        const parts = (ex.title || '').split('|');
        const displayTitle = parts[0];
        const colorClass = parts[1] || 'pink';

        const btn = document.createElement('button');
        btn.className = `word-btn border-${colorClass}` + (isAdmin && ex.visible === false ? ' card-hidden' : '');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';

        const firstItem = ex.items && ex.items.length > 0 ? ex.items[0] : null;

        // Sem imagem nenhuma (nem upload, nem URL) a capa caía sempre no ícone
        // de pasta genérico — tanto no Exercício de Sílabas dedicado (que nunca
        // tem imagem, ver renderCurrentPlaylistItem) quanto no Exercício com
        // Slides quando o item foi criado sem foto (usa só sílabas/palavra
        // como legenda). Nesses casos mostra a palavra do 1º item (não as
        // sílabas hifenizadas — isso é formatação de ensino pra apresentação,
        // não pra um rótulo identificador de card; "a.bra.ço" no card confundia
        // mais do que ajudava, "Abraço" é o que identifica o exercício).
        if (firstItem && firstItem.imageBlob instanceof Blob) {
            imgContainer.innerHTML = `<img src="${URL.createObjectURL(firstItem.imageBlob)}" class="word-btn-img" alt="" />`;
        } else if (firstItem && firstItem.image_url) {
            imgContainer.innerHTML = `<img src="${firstItem.image_url}" class="word-btn-img" alt="" />`;
        } else if (firstItem && (firstItem.word || firstItem.syllables)) {
            const displaySyllables = firstItem.word
                ? stripWordHtml(firstItem.word)
                : (firstItem.syllables || '').replace(/[-.]/g, '.​');
            const previewEl = document.createElement('span');
            previewEl.className = 'word-btn-syllables-preview';
            previewEl.innerHTML = sanitizeWordHtml(displaySyllables);
            previewEl.style.fontFamily = ex.syllablesFont || "'Outfit', sans-serif";
            previewEl.style.color = ex.syllablesColor || '#1f1f1f';
            // Mesmo contraste do player: negrito manual só num trecho vira peso
            // normal no resto, senão fica indistinguível do 800 padrão do card.
            if (/<(strong|span)/i.test(displaySyllables)) previewEl.style.fontWeight = '400';
            imgContainer.appendChild(previewEl);
        } else {
            imgContainer.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
        }

        // Selo de vídeo: exercício de slides pode ter link de vídeo em
        // qualquer um dos itens, não só no primeiro — sem esse selo não dava
        // pra saber, olhando a grade, quais decks tinham vídeo escondido.
        const hasVideo = (ex.items || []).some(item => !!(item.videoLink || item.link));
        if (hasVideo) {
            const videoBadge = document.createElement('span');
            videoBadge.className = 'video-badge';
            videoBadge.setAttribute('aria-label', 'Contém vídeo');
            videoBadge.innerHTML = '<i class="fas fa-video" aria-hidden="true"></i>';
            imgContainer.appendChild(videoBadge);
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = displayTitle;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        if (inDoctorPatientContext) {
            // Exercício escopado direto a esse paciente (ex.patientId) fica
            // visível pra ele sem depender de patient_exercise_flags (RLS
            // libera direto por dono) — os demais (banco geral/global) só
            // aparecem pro paciente depois de liberados aqui na lista.
            const isReleased = ex.patientId === activePatientContext.id
                || patientExerciseReleaseMap.get(String(ex.id)) === true;
            const releaseBadge = document.createElement('div');
            releaseBadge.className = 'release-status-badge ' + (isReleased ? 'is-released' : 'is-not-released');
            releaseBadge.textContent = isReleased ? 'Liberado' : 'Não liberado';
            btn.appendChild(releaseBadge);

            // Aqui "dentro" de um paciente o alvo é óbvio (o próprio
            // activePatientContext), mesmo pra exercício do banco geral ou
            // global liberado pra ele — diferente do banco geral do médico
            // (fora de paciente), onde um exercício pode estar liberado pra
            // vários pacientes ao mesmo tempo e não haveria um alvo único.
            if (isReleased) {
                btn.appendChild(createNotifyUsersButton(displayTitle, 'Exercício', {
                    id: activePatientContext.id,
                    name: activePatientContext.name,
                    email: activePatientContext.email
                }));
            }
        }

        if (isAdmin) {
            const isVisible = ex.visible !== false;
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
            toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar do usuário' : 'Publicar para o usuário');
            toggleBtn.setAttribute('role', 'switch');
            toggleBtn.setAttribute('aria-checked', String(isVisible));
            toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleExerciseVisibility(ex); };
            btn.appendChild(toggleBtn);

            if (isVisible) {
                btn.appendChild(createNotifyUsersButton(displayTitle, 'Exercício'));
            }

            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar exercício "${displayTitle}"?`)) {
                    if (ex.fromSupabase && supabaseClient) {
                        await supabaseClient.from('exercises').delete().eq('id', ex.id);
                        loadExerciseCards();
                    } else {
                        db.transaction(['exercises'], 'readwrite').objectStore('exercises').delete(ex.id).onsuccess = () => loadExerciseCards();
                    }
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>'; editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openExerciseEditor(ex);
            };
            btn.appendChild(editBtn);
        } else if (isDoctor && isOwnBankExercise(ex)) {
            // Médico só edita/apaga os exercícios do próprio banco — os
            // globais aparecem como referência, mas ficam sem esses botões
            // (a RLS rejeitaria a escrita mesmo se o botão aparecesse).
            // Liberar/tirar de um paciente específico é na tela "Meus
            // Pacientes" (openPatientExercisesModal), não aqui.
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn'; delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>'; delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar exercício "${displayTitle}"?`)) {
                    await supabaseClient.from('exercises').delete().eq('id', ex.id);
                    loadExerciseCards();
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>'; editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openExerciseEditor(ex);
            };
            btn.appendChild(editBtn);

            // Avisar por e-mail só faz sentido quando dá pra saber pra quem —
            // exercício escopado direto a um paciente (ex.patientId) tem um
            // dono óbvio; um item solto no banco do médico, sem paciente
            // definido ainda, não tem alvo claro pra notificar.
            if (ex.patientId) {
                const patientInfo = doctorPatientsCache.find(p => p.id === ex.patientId);
                btn.appendChild(createNotifyUsersButton(displayTitle, 'Exercício', { id: ex.patientId, name: patientInfo?.name, email: patientInfo?.email }));
            }
        } else if (isDoctor && !ex.doctorUserId && !ex.gameKind) {
            // Exercício global do admin: médico pode editar (a primeira edição
            // cria uma cópia própria — ver openEditExercise/getOrCreateExerciseFork —
            // o original do admin não é alterado). Sem botão de apagar aqui: o
            // médico não é dono da linha global, só da eventual cópia dele.
            // Decks de jogo (gameKind) ficam de fora por enquanto — fork ainda
            // não sabe copiar itens no formato correct/distractor deles.
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn'; editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>'; editBtn.setAttribute('aria-label', 'Editar (cria cópia própria)');
            editBtn.title = 'Editar cria uma cópia própria, sem afetar o original do admin';
            editBtn.onclick = (ev) => {
                ev.stopPropagation();
                openEditExercise(ex);
            };
            btn.appendChild(editBtn);
        }
        // Sem botão de clonar aqui na grade — o caminho pra médico adicionar
        // um exercício pronto (global do admin, ou os 2 decks semeados
        // localmente) é o modal "Banco de Prontos" (ver openReadyBankModal),
        // aberto a partir de "Novo Exercício".

        btn.addEventListener('click', () => openExerciseCard(ex));
        container.appendChild(btn);
    });

    renderExerciseActivities();
}

function openMediaEditor(media) {
    currentEditingMediaId = media.id;
    currentEditingMediaFromSupabase = media.fromSupabase;
    document.getElementById('upload-modal-title').textContent = 'Editar Mídia';
    document.querySelector('#upload-form button[type="submit"]').textContent = 'Salvar Alterações';
    document.getElementById('media-title').value = media.title || '';
    document.getElementById('media-color').value = 'color-' + (media.colorClass || 'orange');
    document.querySelector('input[name="media-source"][value="link"]').checked = true;
    document.getElementById('media-file-group').style.display = 'none';
    document.getElementById('media-link-group').style.display = 'block';
    document.getElementById('media-link').value = media.media_url || media.link || '';
    document.getElementById('media-file').value = '';
    document.getElementById('upload-modal').style.display = 'flex';
}

function getEmbedUrl(url) {
    if (!url) return '';
    let urlToParse = url.trim();
    if (!urlToParse.startsWith('http://') && !urlToParse.startsWith('https://')) {
        urlToParse = 'https://' + urlToParse;
    }

    if (urlToParse.includes('vimeo.com')) {
        try {
            const parsedUrl = new URL(urlToParse);
            const pathSegments = parsedUrl.pathname.split('/').filter(p => p);
            if (pathSegments.length > 0) {
                const videoId = pathSegments[0];
                let embedStr = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
                if (pathSegments.length > 1) {
                    embedStr += `&h=${pathSegments[1]}`;
                }
                return embedStr;
            }
        } catch (e) { }
        return urlToParse;
    }
    if (urlToParse.includes('drive.google.com/file/d/')) {
        return urlToParse.replace(/\/view.*$/, '/preview');
    }
    if (urlToParse.includes('youtube.com/watch')) {
        try {
            const videoId = new URL(urlToParse).searchParams.get('v');
            return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        } catch (e) { }
    }
    if (urlToParse.includes('youtu.be/')) {
        const videoId = urlToParse.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (urlToParse.includes('youtube.com/shorts/')) {
        const videoId = urlToParse.split('youtube.com/shorts/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (urlToParse.includes('youtube.com/embed/')) {
        return urlToParse; // Já é formato embed
    }
    return urlToParse;
}

// ----------------------------------------------------
// MÓDULO DE ÁUDIOS: banco de clipes + player com forma de onda clicável
// ----------------------------------------------------

let currentAudioClips = [];
let audioClipOrder = []; // permutação dos índices de currentAudioClips (embaralhada quando shuffle está ligado)
let currentAudioClipIndex = -1;
let audioShuffleOn = false;
let audioRepeatOn = false;
const audioPeaksCache = new Map(); // clip.id -> array de picos de amplitude já decodificados
const audioPlayerEl = new Audio();

// Gravação da própria voz (prática: ouvir o clipe de referência, depois se
// gravar tentando repetir) — vira um card próprio na grade, salvo só local
// (IndexedDB, nunca Supabase), pra comparar com o áudio de referência.
let audioMediaRecorder = null;
let audioRecorderChunks = [];
let isAudioRecording = false;
let audioRecordStartedAt = 0;
let audioRecordTimerInterval = null;

async function loadAudioClips() {
    let supabaseClips = [];
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('audio_clips').select('*');
            if (!error && data) {
                supabaseClips = data.map(c => ({
                    id: `sb:${c.id}`, rawId: c.id, fromSupabase: true,
                    title: c.title, url: c.audio_url, visible: c.visible !== false,
                    doctorUserId: c.doctor_user_id || null, companyId: c.company_id || null,
                    colorClass: c.color_class || null
                }));
            }
        } catch (e) {}
    }

    if (!db) { currentAudioClips = supabaseClips.filter(c => c.visible); renderAudioClipsGrid(); return; }
    // Precisa do await/Promise aqui — sem isso, esta função (async) resolvia
    // antes do getAll() terminar de verdade, e quem chamava loadAudioClips()
    // esperando o resultado (ex.: saveRecordingLocally selecionando o card
    // recém-criado) via .then()/await pegava currentAudioClips desatualizado.
    await new Promise((resolve) => {
        db.transaction(['audios'], 'readonly').objectStore('audios').getAll().onsuccess = (e) => {
            const localClips = (e.target.result || []).map(c => ({
                id: `local:${c.id}`, rawId: c.id, fromSupabase: false,
                title: c.title, url: URL.createObjectURL(c.blob), visible: c.visible !== false,
                doctorUserId: null, companyId: null, colorClass: c.colorClass || null,
                isRecording: !!c.isRecording
            }));
            currentAudioClips = [...supabaseClips, ...localClips].filter(c => c.visible);
            audioClipOrder = currentAudioClips.map((_, i) => i);
            renderAudioClipsGrid();
            resolve();
        };
    });
}

async function saveAudioClip(title, file, colorClass) {
    if (supabaseClient) {
        try {
            const url = await uploadToSupabaseStorage('media_uploads', 'audio-clips', file);
            const { error } = await supabaseClient.from('audio_clips').insert([{
                title, audio_url: url, visible: true, color_class: colorClass || null,
                doctor_user_id: currentUserId, company_id: currentUserCompanyId
            }]);
            if (error) throw error;
            await loadAudioClips();
            return;
        } catch (e) {
            console.warn('Erro ao salvar áudio no Supabase, caindo para local:', e);
        }
    }
    await new Promise((resolve) => {
        db.transaction(['audios'], 'readwrite').objectStore('audios')
            .add({ title, blob: file, visible: true, colorClass: colorClass || null })
            .onsuccess = () => loadAudioClips().then(resolve);
    });
}

async function updateAudioClip(clip, title, file, colorClass) {
    if (clip.fromSupabase && supabaseClient) {
        const update = { title, color_class: colorClass || null };
        if (file) update.audio_url = await uploadToSupabaseStorage('media_uploads', 'audio-clips', file);
        const { error } = await supabaseClient.from('audio_clips').update(update).eq('id', clip.rawId);
        if (error) throw error;
        await loadAudioClips();
        return;
    }
    await new Promise((resolve, reject) => {
        const store = db.transaction(['audios'], 'readwrite').objectStore('audios');
        const getReq = store.get(clip.rawId);
        getReq.onsuccess = () => {
            const rec = getReq.result;
            if (!rec) { resolve(); return; }
            rec.title = title;
            rec.colorClass = colorClass || null;
            if (file) rec.blob = file;
            store.put(rec).onsuccess = () => loadAudioClips().then(resolve);
        };
        getReq.onerror = () => reject(getReq.error);
    });
}

async function deleteAudioClip(clip) {
    if (!confirm('Apagar este áudio?')) return;
    if (clip.fromSupabase && supabaseClient) {
        await supabaseClient.from('audio_clips').delete().eq('id', clip.rawId);
    } else {
        await new Promise((resolve) => {
            db.transaction(['audios'], 'readwrite').objectStore('audios').delete(clip.rawId).onsuccess = resolve;
        });
    }
    if (currentAudioClips[currentAudioClipIndex]?.id === clip.id) {
        currentAudioClipIndex = -1;
        audioPlayerEl.pause();
        audioPlayerEl.removeAttribute('src');
        drawWaveform([], 0);
        updateAudioProgressUI(0);
    }
    await loadAudioClips();
}

function renderAudioClipsGrid() {
    const container = document.getElementById('grid-audio-clips');
    if (!container) return;
    container.innerHTML = '';
    currentAudioClips.forEach((clip, index) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'audio-clip-card'
            + (clip.isRecording ? ' audio-recording-card' : (clip.colorClass ? ` audio-color-${clip.colorClass}` : ''))
            + (index === currentAudioClipIndex ? ' active' : '');
        card.textContent = clip.title;
        card.addEventListener('click', () => selectAudioClip(index, true));

        if (clip.isRecording) {
            const badge = document.createElement('span');
            badge.className = 'audio-recording-badge';
            badge.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i>';
            card.appendChild(badge);
        }

        // Admin edita/apaga qualquer clipe; médico só o próprio banco (dele
        // ou da empresa); clipe local (sem Supabase) que não é gravação é
        // sempre editável, já que só existe no navegador de quem subiu. Uma
        // gravação própria (qualquer papel, inclusive paciente) sempre pode
        // ser apagada — é prática pessoal, sem edição de título/cor (não faz
        // sentido "categorizar" a própria tentativa).
        const canManage = isAdmin || (isDoctor && (!clip.fromSupabase || clip.companyId === currentUserCompanyId));
        if (clip.isRecording) {
            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = (ev) => { ev.stopPropagation(); deleteAudioClip(clip); };
            card.appendChild(delBtn);
        } else if (canManage) {
            const editBtn = document.createElement('button');
            editBtn.type = 'button';
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => { ev.stopPropagation(); openAudioClipEditor(clip); };
            card.appendChild(editBtn);

            const delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = (ev) => { ev.stopPropagation(); deleteAudioClip(clip); };
            card.appendChild(delBtn);
        }
        container.appendChild(card);
    });
}

let currentEditingAudioClip = null;
function openAudioClipEditor(clip) {
    currentEditingAudioClip = clip;
    document.getElementById('audio-upload-modal-title').textContent = 'Editar Áudio';
    document.querySelector('#audio-upload-form button[type="submit"]').textContent = 'Salvar Alterações';
    document.getElementById('audio-clip-title').value = clip.title;
    document.getElementById('audio-clip-color').value = clip.colorClass ? `color-${clip.colorClass}` : '';
    document.getElementById('audio-clip-file').removeAttribute('required');
    document.getElementById('audio-upload-modal').style.display = 'flex';
}

let currentPlayingClipId = null; // id no audioPeaksCache do que está carregado agora (clipe da grade OU gravação)

function selectAudioClip(index, autoplay) {
    const clip = currentAudioClips[index];
    if (!clip) return;
    currentAudioClipIndex = index;
    currentPlayingClipId = clip.id;
    renderAudioClipsGrid();
    audioPlayerEl.src = clip.url;
    drawWaveform([], 0);
    updateAudioProgressUI(0);
    document.getElementById('audio-time-duration').textContent = '0:00';

    // A decodificação da onda faz um fetch() completo do MESMO arquivo que
    // o <audio> está tentando bufferizar pra tocar — em arquivos grandes,
    // as duas requisições competem pela mesma banda/conexão e atrasam o som
    // de verdade começar. Adiar até o 'playing' (áudio já tocando de
    // verdade) prioriza ouvir logo; a onda só aparece um instante depois.
    const startWaveformDecode = () => {
        decodeAudioPeaks(clip).then(peaks => {
            if (currentPlayingClipId === clip.id) {
                drawWaveform(peaks, audioPlayerEl.duration ? audioPlayerEl.currentTime / audioPlayerEl.duration : 0);
            }
        });
    };
    if (autoplay) {
        audioPlayerEl.addEventListener('playing', startWaveformDecode, { once: true });
        // Autoplay pode falhar (bloqueio do navegador) — se falhar, decodifica
        // mesmo assim, senão a onda nunca apareceria.
        audioPlayerEl.play().catch(() => {
            audioPlayerEl.removeEventListener('playing', startWaveformDecode);
            startWaveformDecode();
        });
    } else {
        startWaveformDecode();
    }
}

function formatAudioTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

// Atualiza onda, barra de progresso e tempo decorrido a partir de uma única
// fração (0-1) — usado tanto pelo playback normal (timeupdate) quanto pelo
// clique/arraste na onda ou na barra, pra tudo ficar sempre em sincronia.
function updateAudioProgressUI(fraction) {
    const peaks = currentPlayingClipId ? audioPeaksCache.get(currentPlayingClipId) : null;
    if (peaks) drawWaveform(peaks, fraction);
    const fill = document.getElementById('audio-progress-fill');
    const thumb = document.getElementById('audio-progress-thumb');
    if (fill) fill.style.width = (fraction * 100) + '%';
    if (thumb) thumb.style.left = (fraction * 100) + '%';
    const currentLabel = document.getElementById('audio-time-current');
    if (currentLabel) currentLabel.textContent = formatAudioTime(audioPlayerEl.duration ? fraction * audioPlayerEl.duration : 0);
}

function seekAudioToFraction(fraction) {
    if (!audioPlayerEl.duration) return;
    fraction = Math.min(1, Math.max(0, fraction));
    audioPlayerEl.currentTime = fraction * audioPlayerEl.duration;
    updateAudioProgressUI(fraction);
}

// Decodifica o áudio real (Web Audio API) e reduz a onda a ~220 picos de
// amplitude máxima por bloco — é a forma de onda de verdade do arquivo, não
// uma decoração aleatória, porque o pedido era poder "analisar" o áudio.
async function decodeAudioPeaks(clip) {
    if (audioPeaksCache.has(clip.id)) return audioPeaksCache.get(clip.id);
    try {
        const response = await fetch(clip.url);
        const arrayBuffer = await response.arrayBuffer();
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
        const channelData = audioBuffer.getChannelData(0);
        const peakCount = 220;
        const blockSize = Math.max(1, Math.floor(channelData.length / peakCount));
        const peaks = [];
        for (let i = 0; i < peakCount; i++) {
            const start = i * blockSize;
            let max = 0;
            for (let j = 0; j < blockSize && (start + j) < channelData.length; j++) {
                const abs = Math.abs(channelData[start + j]);
                if (abs > max) max = abs;
            }
            peaks.push(max);
        }
        ctx.close();
        // Normaliza pelo pico mais alto da própria gravação — sem isso, um
        // áudio gravado num volume mais baixo (a maioria não chega a 1.0 de
        // amplitude) desenha barras pequenas no meio do canvas, com espaço
        // em branco sobrando em cima/embaixo em vez de usar a altura toda.
        const maxPeak = Math.max(...peaks, 0.0001);
        const normalizedPeaks = peaks.map(p => p / maxPeak);
        audioPeaksCache.set(clip.id, normalizedPeaks);
        return normalizedPeaks;
    } catch (e) {
        console.warn('Não foi possível decodificar a forma de onda:', e);
        return [];
    }
}

function drawWaveform(peaks, progressFraction) {
    const canvas = document.getElementById('audio-waveform-canvas');
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth || 1;
    const height = canvas.clientHeight || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    if (!peaks.length) return;

    const barWidth = width / peaks.length;
    const midY = height / 2;
    const progressX = width * progressFraction;
    const styles = getComputedStyle(document.documentElement);
    const playedColor = styles.getPropertyValue('--audio-waveform-played').trim() || '#2fb8af';
    const baseColor = styles.getPropertyValue('--audio-waveform-base').trim() || '#c7d3d6';

    peaks.forEach((peak, i) => {
        const barHeight = Math.max(2, peak * height);
        const x = i * barWidth;
        ctx.fillStyle = x < progressX ? playedColor : baseColor;
        ctx.fillRect(x, midY - barHeight / 2, Math.max(1, barWidth - 1), barHeight);
    });
}

function seekFromElementEvent(el, evt) {
    if (!el || !audioPlayerEl.duration) return;
    const rect = el.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const fraction = (clientX - rect.left) / rect.width;
    seekAudioToFraction(fraction);
}

function goToAdjacentAudioClip(direction, autoplay) {
    if (!currentAudioClips.length) return;
    const currentPos = audioClipOrder.indexOf(currentAudioClipIndex);
    let nextPos = currentPos + direction;
    if (nextPos < 0) nextPos = audioClipOrder.length - 1;
    if (nextPos >= audioClipOrder.length) {
        if (!audioRepeatOn) return;
        nextPos = 0;
    }
    selectAudioClip(audioClipOrder[nextPos], autoplay);
}

function shuffleAudioOrder() {
    audioClipOrder = currentAudioClips.map((_, i) => i);
    for (let i = audioClipOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [audioClipOrder[i], audioClipOrder[j]] = [audioClipOrder[j], audioClipOrder[i]];
    }
}

function setAudioPlayButtonIcon(isPlaying) {
    const btn = document.getElementById('btn-audio-play');
    if (!btn) return;
    btn.innerHTML = isPlaying
        ? '<i class="fas fa-pause" aria-hidden="true"></i>'
        : '<i class="fas fa-play" aria-hidden="true"></i>';
}

async function toggleAudioRecording() {
    if (isAudioRecording) {
        audioMediaRecorder.stop();
        return;
    }
    if (!navigator.mediaDevices || !window.MediaRecorder) {
        alert('Seu navegador não suporta gravação de áudio.');
        return;
    }
    let stream;
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
        });
    } catch (e) {
        alert('Não foi possível acessar o microfone. Verifique a permissão do navegador.');
        return;
    }
    audioPlayerEl.pause(); // não grava por cima do que está tocando
    audioRecorderChunks = [];
    audioMediaRecorder = new MediaRecorder(stream);
    audioMediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) audioRecorderChunks.push(e.data); };
    audioMediaRecorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        isAudioRecording = false;
        setAudioRecordButtonState(false);
        clearInterval(audioRecordTimerInterval);
        document.getElementById('audio-record-timer').textContent = '';
        const blob = new Blob(audioRecorderChunks, { type: audioMediaRecorder.mimeType || 'audio/webm' });
        saveRecordingLocally(blob);
    };
    audioMediaRecorder.start();
    isAudioRecording = true;
    setAudioRecordButtonState(true);
    audioRecordStartedAt = Date.now();
    audioRecordTimerInterval = setInterval(() => {
        document.getElementById('audio-record-timer').textContent = formatAudioTime((Date.now() - audioRecordStartedAt) / 1000);
    }, 200);
}

function setAudioRecordButtonState(recording) {
    const btn = document.getElementById('btn-audio-record');
    if (!btn) return;
    btn.classList.toggle('recording', recording);
    btn.innerHTML = recording
        ? '<i class="fas fa-stop" aria-hidden="true"></i><span>Parar gravação</span>'
        : '<i class="fas fa-microphone" aria-hidden="true"></i><span>Gravar minha voz</span>';
    btn.setAttribute('aria-label', recording ? 'Parar gravação' : 'Gravar minha voz');
}

// Grava a tentativa da pessoa como um card PRÓPRIO, só local (IndexedDB —
// nunca vai pro Supabase/banco do médico, é prática pessoal), pra ficar na
// tela e dar pra comparar com o áudio de referência quantas vezes quiser,
// não só na hora. Sempre cai no armazenamento local, mesmo com Supabase
// configurado — grava a mesma coisa mesmo que a pessoa esteja offline.
async function saveRecordingLocally(blob) {
    await new Promise((resolve) => {
        db.transaction(['audios'], 'readwrite').objectStore('audios')
            .add({ title: 'Minha gravação', blob, visible: true, isRecording: true })
            .onsuccess = (e) => {
                const newRawId = e.target.result;
                loadAudioClips().then(() => {
                    const idx = currentAudioClips.findIndex(c => c.rawId === newRawId && !c.fromSupabase);
                    if (idx !== -1) selectAudioClip(idx, true);
                    resolve();
                });
            };
    });
}

function setupAudioModuleControls() {
    const canvas = document.getElementById('audio-waveform-canvas');
    const progressTrack = document.getElementById('audio-progress-track');
    let draggingEl = null;
    const startDrag = (el, e) => { draggingEl = el; el.classList.add('dragging'); seekFromElementEvent(el, e); };
    const dragMove = (e) => { if (draggingEl) seekFromElementEvent(draggingEl, e); };
    const endDrag = () => { if (draggingEl) draggingEl.classList.remove('dragging'); draggingEl = null; };

    [canvas, progressTrack].forEach((el) => {
        el.addEventListener('mousedown', (e) => startDrag(el, e));
        el.addEventListener('touchstart', (e) => startDrag(el, e));
    });
    window.addEventListener('mousemove', dragMove);
    window.addEventListener('touchmove', dragMove);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('touchend', endDrag);

    document.getElementById('btn-audio-play').addEventListener('click', () => {
        if (currentAudioClipIndex === -1) {
            if (currentAudioClips.length) selectAudioClip(audioClipOrder[0], true);
            return;
        }
        if (audioPlayerEl.paused) audioPlayerEl.play(); else audioPlayerEl.pause();
    });
    document.getElementById('btn-audio-prev').addEventListener('click', () => goToAdjacentAudioClip(-1, true));
    document.getElementById('btn-audio-next').addEventListener('click', () => goToAdjacentAudioClip(1, true));
    document.getElementById('btn-audio-shuffle').addEventListener('click', (e) => {
        audioShuffleOn = !audioShuffleOn;
        e.currentTarget.classList.toggle('active', audioShuffleOn);
        e.currentTarget.setAttribute('aria-pressed', String(audioShuffleOn));
        audioClipOrder = currentAudioClips.map((_, i) => i);
        if (audioShuffleOn) shuffleAudioOrder();
    });
    document.getElementById('btn-audio-repeat').addEventListener('click', (e) => {
        audioRepeatOn = !audioRepeatOn;
        e.currentTarget.classList.toggle('active', audioRepeatOn);
        e.currentTarget.setAttribute('aria-pressed', String(audioRepeatOn));
    });

    document.getElementById('btn-audio-record').addEventListener('click', toggleAudioRecording);

    audioPlayerEl.addEventListener('timeupdate', () => {
        if (!audioPlayerEl.duration || draggingEl) return;
        updateAudioProgressUI(audioPlayerEl.currentTime / audioPlayerEl.duration);
    });
    audioPlayerEl.addEventListener('loadedmetadata', () => {
        const durationLabel = document.getElementById('audio-time-duration');
        if (durationLabel) durationLabel.textContent = formatAudioTime(audioPlayerEl.duration);
    });
    audioPlayerEl.addEventListener('play', () => setAudioPlayButtonIcon(true));
    audioPlayerEl.addEventListener('pause', () => setAudioPlayButtonIcon(false));
    audioPlayerEl.addEventListener('ended', () => {
        if (audioRepeatOn && audioClipOrder.length === 1) {
            audioPlayerEl.currentTime = 0;
            audioPlayerEl.play();
        } else {
            goToAdjacentAudioClip(1, true);
        }
    });

    window.addEventListener('resize', () => {
        updateAudioProgressUI(audioPlayerEl.duration ? audioPlayerEl.currentTime / audioPlayerEl.duration : 0);
    });
}

// ----------------------------------------------------
// MODAIS, PLAYLISTS E EDIÇÃO
// ----------------------------------------------------

let currentAudio = null;
let currentPlaylistItems = [];
let currentPlaylistIndex = 0;
let currentPlaylistDeckStyle = null;

function createExerciseBlockHtml(blockId, isEdit = false, hasOldImage = false) {
    return `
        <div class="exercise-item-block" data-block-id="${blockId}">
            <div class="block-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin:0;" class="block-title">Slide</h4>
                ${isEdit ? '<button type="button" class="btn-remove-block" style="background:#ff4d4f;color:white;border:none;padding:5px 10px;border-radius:8px;cursor:pointer;"><i class="fas fa-trash" aria-hidden="true"></i> Remover</button>' : ''}
            </div>
            <div class="form-group">
                <label>Palavra Escrita</label>
                <input type="text" class="item-word" placeholder="Ex: PÓ" required>
            </div>
            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                    <label>Cor do Texto (Palavra Escrita)</label>
                    <input type="color" class="item-color" value="#333333" style="width: 100%; height: 40px; cursor: pointer; border: 1px solid #ddd; border-radius: 8px;">
                </div>
                <div class="form-group" style="flex: 1; margin-bottom: 0;">
                    <label>Tamanho (px)</label>
                    <input type="number" class="item-size" value="100" min="20" max="300" style="width: 100%; height: 40px; box-sizing: border-box; padding: 0 10px; border: 1px solid #ddd; border-radius: 8px;">
                </div>
            </div>
            <div style="display: flex; gap: 20px; margin-bottom: 15px; align-items: center; justify-content: flex-start; padding-left: 5px;">
                <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: bold; cursor: pointer; color: #333;">
                    <input type="checkbox" class="item-uppercase" style="width: 18px; height: 18px; cursor: pointer;"> Caixa Alta
                </label>
                <label style="display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: bold; cursor: pointer; color: #333;">
                    <input type="checkbox" class="item-bold" style="width: 18px; height: 18px; cursor: pointer;" checked> Negrito (Palavra Escrita)
                </label>
            </div>
            <div class="form-group">
                <label>Sílabas (opcional) — ex: ca-sa. Aparece como legenda sobre a imagem.</label>
                <div class="word-editor-toolbar">
                    <button type="button" class="word-editor-btn word-editor-bold" title="Negrito na seleção"><i class="fas fa-bold" aria-hidden="true"></i></button>
                    <input type="color" class="word-editor-color" title="Cor na seleção" value="#e63946">
                    <button type="button" class="word-editor-btn word-editor-clear" title="Limpar formatação">Limpar</button>
                </div>
                <div class="item-syllables word-editor-field" contenteditable="true" data-placeholder="Ex: ca-sa" role="textbox" aria-label="Sílabas"></div>
            </div>
            <div class="form-group">
                <label>Imagem (Objeto) — opcional, usa pictograma automático se vazio</label>
                <input type="file" class="item-image" accept="image/*">
                ${hasOldImage ? '<span class="image-hint">Imagem atual salva. Selecione outra apenas para substituir.</span>' : ''}
            </div>
            <div class="form-group">
                <label>Link do Vídeo (Vimeo, Drive, YouTube, Figma) — opcional</label>
                <input type="url" class="item-link" placeholder="Cole o link aqui...">
            </div>
        </div>
    `;
}

function addExerciseBlock(isEdit = false, hasOldImage = false) {
    const container = document.getElementById('exercise-items-container');
    const blockId = exerciseBlockCounter++;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createExerciseBlockHtml(blockId, isEdit, hasOldImage);
    // Guarda o elemento real numa variável própria: depois do appendChild ele passa a
    // viver dentro de container, e "wrapper" fica vazio — reler wrapper.firstElementChild
    // dentro do clique (avaliado só depois, ao clicar) voltava null e quebrava a remoção.
    const blockEl = wrapper.firstElementChild;

    const removeBtn = blockEl.querySelector('.btn-remove-block');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            container.removeChild(blockEl);
            updateBlockTitles();
        });
    }

    container.appendChild(blockEl);
    updateBlockTitles();
    wireAllWordEditors(blockEl);
}

function updateBlockTitles() {
    const blocks = document.querySelectorAll('.exercise-item-block');
    blocks.forEach((b, index) => {
        b.querySelector('.block-title').textContent = `Slide ${index + 1}`;
    });
}

// Exercício de Sílabas: bloco por palavra bem mais simples que o de Slides
// (só palavra + sílabas) — funções separadas de propósito, pra não arriscar
// mexer no fluxo de Slides que já funciona.
let syllablesBlockCounter = 0;

function createSyllablesItemBlockHtml(blockId, isEdit = false) {
    return `
        <div class="syllables-item-block" data-block-id="${blockId}">
            <div class="block-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin:0;" class="block-title">Palavra</h4>
                ${isEdit ? '<button type="button" class="btn-remove-block" style="background:#ff4d4f;color:white;border:none;padding:5px 10px;border-radius:8px;cursor:pointer;"><i class="fas fa-trash" aria-hidden="true"></i> Remover</button>' : ''}
            </div>
            <div class="form-group">
                <label>Palavra Escrita</label>
                <div class="word-editor-toolbar">
                    <button type="button" class="word-editor-btn word-editor-bold" title="Negrito na seleção"><i class="fas fa-bold" aria-hidden="true"></i></button>
                    <input type="color" class="word-editor-color" title="Cor na seleção" value="#e63946">
                    <button type="button" class="word-editor-btn word-editor-clear" title="Limpar formatação">Limpar</button>
                </div>
                <div class="syll-item-word word-editor-field" contenteditable="true" data-placeholder="Ex: casa" role="textbox" aria-label="Palavra escrita"></div>
            </div>
            <div class="form-group">
                <label>Sílabas</label>
                <div class="word-editor-toolbar">
                    <button type="button" class="word-editor-btn word-editor-bold" title="Negrito na seleção"><i class="fas fa-bold" aria-hidden="true"></i></button>
                    <input type="color" class="word-editor-color" title="Cor na seleção" value="#e63946">
                    <button type="button" class="word-editor-btn word-editor-clear" title="Limpar formatação">Limpar</button>
                </div>
                <div class="syll-item-syllables word-editor-field" contenteditable="true" data-placeholder="Ex: ca-sa" role="textbox" aria-label="Sílabas"></div>
            </div>
        </div>
    `;
}

function addSyllablesItemBlock(isEdit = false) {
    const container = document.getElementById('syllables-items-container');
    const blockId = syllablesBlockCounter++;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createSyllablesItemBlockHtml(blockId, isEdit);
    const blockEl = wrapper.firstElementChild;

    const removeBtn = blockEl.querySelector('.btn-remove-block');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            container.removeChild(blockEl);
            updateSyllablesBlockTitles();
        });
    }
    wireAllWordEditors(blockEl);

    container.appendChild(blockEl);
    updateSyllablesBlockTitles();
}

function updateSyllablesBlockTitles() {
    const blocks = document.querySelectorAll('.syllables-item-block');
    blocks.forEach((b, index) => {
        b.querySelector('.block-title').textContent = `Palavra ${index + 1}`;
    });
}

// Exercício com Áudio Real: mesmo bloco por palavra do de Sílabas, mais um
// upload de áudio. `audio-current-hint` só aparece na edição, quando o item
// já tem um audio_url salvo — some assim que um novo arquivo é escolhido.
let audioBlockCounter = 0;

function createAudioItemBlockHtml(blockId, isEdit = false, hasExistingAudio = false, hasExistingImage = false) {
    return `
        <div class="audio-item-block" data-block-id="${blockId}">
            <div class="block-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <h4 style="margin:0;" class="block-title">Palavra</h4>
                ${isEdit ? '<button type="button" class="btn-remove-block" style="background:#ff4d4f;color:white;border:none;padding:5px 10px;border-radius:8px;cursor:pointer;"><i class="fas fa-trash" aria-hidden="true"></i> Remover</button>' : ''}
            </div>
            <div class="form-group">
                <label>Palavra Escrita</label>
                <div class="word-editor-toolbar">
                    <button type="button" class="word-editor-btn word-editor-bold" title="Negrito na seleção"><i class="fas fa-bold" aria-hidden="true"></i></button>
                    <input type="color" class="word-editor-color" title="Cor na seleção" value="#e63946">
                    <button type="button" class="word-editor-btn word-editor-clear" title="Limpar formatação">Limpar</button>
                </div>
                <div class="audio-item-word word-editor-field" contenteditable="true" data-placeholder="Ex: casa" role="textbox" aria-label="Palavra escrita"></div>
            </div>
            <div class="form-group">
                <label>Sílabas</label>
                <div class="word-editor-toolbar">
                    <button type="button" class="word-editor-btn word-editor-bold" title="Negrito na seleção"><i class="fas fa-bold" aria-hidden="true"></i></button>
                    <input type="color" class="word-editor-color" title="Cor na seleção" value="#e63946">
                    <button type="button" class="word-editor-btn word-editor-clear" title="Limpar formatação">Limpar</button>
                </div>
                <div class="audio-item-syllables word-editor-field" contenteditable="true" data-placeholder="Ex: ca-sa" role="textbox" aria-label="Sílabas"></div>
            </div>
            <div class="form-group">
                <label>Áudio gravado (.mp3 ou .wav)</label>
                <input type="file" class="audio-item-file" accept="audio/*,.mp3,.wav" ${hasExistingAudio ? '' : 'required'}>
                <span class="audio-current-hint" style="display:${hasExistingAudio ? 'inline-block' : 'none'};font-size:13px;color:#666;margin-top:4px;">
                    <i class="fas fa-check-circle" aria-hidden="true" style="color:#0d9488;"></i> Áudio já salvo — escolha um novo arquivo só se quiser substituir.
                </span>
            </div>
            <div class="form-group">
                <label>Imagem (opcional)</label>
                <input type="file" class="audio-item-image" accept="image/*">
                <span class="image-current-hint" style="display:${hasExistingImage ? 'inline-block' : 'none'};font-size:13px;color:#666;margin-top:4px;">
                    <i class="fas fa-check-circle" aria-hidden="true" style="color:#0d9488;"></i> Imagem já salva — escolha um novo arquivo só se quiser substituir.
                </span>
                <span style="display:block;font-size:12px;color:#999;margin-top:4px;">Sem imagem, mostra só a palavra em sílabas (sem busca automática de pictograma).</span>
            </div>
        </div>
    `;
}

function addAudioItemBlock(isEdit = false, hasExistingAudio = false, hasExistingImage = false) {
    const container = document.getElementById('audio-items-container');
    const blockId = audioBlockCounter++;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = createAudioItemBlockHtml(blockId, isEdit, hasExistingAudio, hasExistingImage);
    const blockEl = wrapper.firstElementChild;

    const removeBtn = blockEl.querySelector('.btn-remove-block');
    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            container.removeChild(blockEl);
            updateAudioBlockTitles();
        });
    }
    wireAllWordEditors(blockEl);
    // Trocar o arquivo esconde o aviso de "já salvo" — a nova escolha é o
    // que vai valer no submit (ver handler do formulário).
    blockEl.querySelector('.audio-item-file').addEventListener('change', (e) => {
        const hint = blockEl.querySelector('.audio-current-hint');
        if (hint && e.target.files[0]) hint.style.display = 'none';
    });
    blockEl.querySelector('.audio-item-image').addEventListener('change', (e) => {
        const hint = blockEl.querySelector('.image-current-hint');
        if (hint && e.target.files[0]) hint.style.display = 'none';
    });

    container.appendChild(blockEl);
    updateAudioBlockTitles();
}

function updateAudioBlockTitles() {
    const blocks = document.querySelectorAll('.audio-item-block');
    blocks.forEach((b, index) => {
        b.querySelector('.block-title').textContent = `Palavra ${index + 1}`;
    });
}

let currentEditingAudioUrls = {};
let currentEditingAudioImageUrls = {};

function openEditAudioExercise(ex) {
    currentEditingAudioExerciseId = ex.id;
    currentEditingAudioExerciseFromSupabase = !!ex.fromSupabase;
    audioBlockCounter = 0;
    currentEditingAudioUrls = {};
    currentEditingAudioImageUrls = {};

    document.getElementById('audio-exercise-modal').style.display = 'flex';
    document.getElementById('audio-exercise-modal').querySelector('h2').textContent = "Editar Exercício (Áudio Real)";

    const parts = (ex.title || '').split('|');
    const displayTitle = parts[0];
    const colorClass = parts[1] || 'pink';

    document.getElementById('audio-exercise-title').value = displayTitle;
    document.getElementById('audio-exercise-color').value = colorClass;
    document.getElementById('audio-text-size').value = ex.syllablesSize || '100';
    document.getElementById('audio-text-color').value = ex.syllablesColor || '#1f1f1f';
    document.getElementById('audio-font').value = ex.syllablesFont || "'Outfit', sans-serif";

    const container = document.getElementById('audio-items-container');
    container.innerHTML = '';

    ex.items.forEach((item, index) => {
        const hasExistingAudio = !!item.audio_url || item.audioBlob instanceof Blob;
        const hasExistingImage = !!item.image_url || item.imageBlob instanceof Blob;
        addAudioItemBlock(true, hasExistingAudio, hasExistingImage);
        const blockEl = container.querySelector(`[data-block-id="${index}"]`);
        blockEl.querySelector('.audio-item-word').innerHTML = sanitizeWordHtml(item.word || '');
        blockEl.querySelector('.audio-item-syllables').innerHTML = sanitizeWordHtml(item.syllables || '');
        if (item.audio_url) currentEditingAudioUrls[index] = item.audio_url;
        if (item.image_url) currentEditingAudioImageUrls[index] = item.image_url;
    });
}

function openEditExercise(ex) {
    // Médico editando um exercício global do admin (Fase 23): se ele já tem
    // uma cópia própria (fork) desse exercício, edita a cópia — não o
    // original de novo (senão perderia as edições já feitas na cópia).
    // Exercício escopado a um paciente (patientId) NÃO entra aqui — já é
    // dele/do médico responsável, edita direto, não forka.
    if (isDoctor && !ex.doctorUserId && !ex.patientId) {
        const existingFork = lastMergedExercises.find(e => e.doctorUserId === currentUserId && e.forkedFrom === ex.id);
        if (existingFork) return openEditExercise(existingFork);
        currentEditingExerciseId = null;
        currentEditingExerciseFromSupabase = true;
        currentEditingExerciseForkSource = ex.id;
    } else {
        currentEditingExerciseId = ex.id;
        currentEditingExerciseFromSupabase = !!ex.fromSupabase;
        currentEditingExerciseForkSource = null;
    }
    currentEditingBlobs = {};
    currentEditingImageUrls = {};
    exerciseBlockCounter = 0;

    document.getElementById('upload-exercise-modal').style.display = 'flex';
    document.getElementById('upload-exercise-modal').querySelector('h2').textContent = "Editar Exercício (Slides)";
    
    const parts = (ex.title || '').split('|');
    const displayTitle = parts[0];
    const colorClass = parts[1] || 'pink';
    
    document.getElementById('exercise-title').value = displayTitle;
    document.getElementById('exercise-color').value = colorClass;

    const container = document.getElementById('exercise-items-container');
    container.innerHTML = '';

    ex.items.forEach((item, index) => {
        const hasOldImage = !!item.image_url || !!item.imageBlob;
        addExerciseBlock(true, hasOldImage);

        const blockEl = container.querySelector(`[data-block-id="${index}"]`);
        blockEl.querySelector('.item-word').value = item.word || '';
        blockEl.querySelector('.item-syllables').innerHTML = sanitizeWordHtml(item.syllables || '');
        blockEl.querySelector('.item-link').value = item.videoLink || item.link || '';
        blockEl.querySelector('.item-color').value = item.color || item.textColor || '#333333';
        blockEl.querySelector('.item-size').value = item.size || item.textSize || '100';
        blockEl.querySelector('.item-uppercase').checked = item.uppercase !== undefined ? !!item.uppercase : !!item.isUppercase;
        blockEl.querySelector('.item-bold').checked = item.bold !== undefined ? !!item.bold : (item.isBold !== undefined ? !!item.isBold : true);

        if (item.image_url) {
            currentEditingImageUrls[index] = item.image_url;
        }
        if (item.imageBlob) {
            currentEditingBlobs[index] = item.imageBlob;
        }
    });
}

function openEditSyllablesExercise(ex) {
    currentEditingSyllablesExerciseId = ex.id;
    currentEditingSyllablesExerciseFromSupabase = !!ex.fromSupabase;
    syllablesBlockCounter = 0;

    document.getElementById('syllables-exercise-modal').style.display = 'flex';
    document.getElementById('syllables-exercise-modal').querySelector('h2').textContent = "Editar Exercício (Sílabas)";

    const parts = (ex.title || '').split('|');
    const displayTitle = parts[0];
    const colorClass = parts[1] || 'pink';

    document.getElementById('syllables-exercise-title').value = displayTitle;
    document.getElementById('syllables-exercise-color').value = colorClass;
    document.getElementById('syllables-text-size').value = ex.syllablesSize || '100';
    document.getElementById('syllables-text-color').value = ex.syllablesColor || '#1f1f1f';
    document.getElementById('syllables-font').value = ex.syllablesFont || "'Outfit', sans-serif";

    const container = document.getElementById('syllables-items-container');
    container.innerHTML = '';

    ex.items.forEach((item, index) => {
        addSyllablesItemBlock(true);
        const blockEl = container.querySelector(`[data-block-id="${index}"]`);
        blockEl.querySelector('.syll-item-word').innerHTML = sanitizeWordHtml(item.word || '');
        blockEl.querySelector('.syll-item-syllables').innerHTML = sanitizeWordHtml(item.syllables || '');
    });
}

function setupModals() {
    document.getElementById('btn-games-back').addEventListener('click', () => showExitConfirm());
    document.getElementById('btn-exercises-back').addEventListener('click', () => showExitConfirm());

    // Modal de confirmação de saída
    const exitModal = document.getElementById('modal-exit-confirm');
    document.getElementById('btn-exit-cancel').addEventListener('click', () => {
        exitModal.style.display = 'none';
    });
    document.getElementById('btn-exit-confirm').addEventListener('click', () => {
        exitModal.style.display = 'none';
        closeGame();
    });
    exitModal.addEventListener('click', (e) => {
        if (e.target === exitModal) exitModal.style.display = 'none';
    });

    document.getElementById('btn-strengths-new-game')?.addEventListener('click', showStrengthsBoardSetup);
    document.getElementById('btn-strengths-start')?.addEventListener('click', () => startStrengthsBoardGame(selectedStrengthsPlayerCount));
    document.querySelectorAll('.strengths-player-count-btn').forEach(button => {
        button.addEventListener('click', () => {
            selectedStrengthsPlayerCount = Number(button.dataset.playerCount) || 2;
            updateStrengthsSetupSelection();
        });
    });
    document.getElementById('btn-strengths-roll')?.addEventListener('click', rollStrengthsBoardDie);
    document.getElementById('btn-strengths-complete')?.addEventListener('click', completeStrengthsBoardCard);
    document.getElementById('btn-notify-complete-sentence')?.addEventListener('click', async () => {
        const btn = document.getElementById('btn-notify-complete-sentence');
        if (btn) btn.disabled = true;
        await sendActivityNotification('Complete a Frase', 'Jogo');
        if (btn) btn.disabled = false;
    });

    document.getElementById('btn-manage-complete-sentence')?.addEventListener('click', () => {
        const frame = document.getElementById('complete-sentence-frame');
        const openManagerMessage = () => frame.contentWindow?.postMessage({ type: 'complete-sentence:open-manager' }, window.location.origin);
        if (!frame.src) {
            frame.addEventListener('load', openManagerMessage, { once: true });
            refreshCompleteSentenceFrameSrc();
        } else {
            openManagerMessage();
        }
    });

    document.getElementById('btn-memory-new-game').addEventListener('click', async () => {
        if (editModes.memory) {
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', true);
            await flushMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', false);
            editModes.memory = false;
            updateEditBtn('memory', 'btn-edit-memory', 'Salvar');
        }
        startMemoryGame();
    });

    document.getElementById('btn-edit-memory').addEventListener('click', async () => {
        if (editModes.memory) {
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', true);
            await flushMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-memory', 'btn-memory-new-game', false);
            editModes.memory = false;
            updateEditBtn('memory', 'btn-edit-memory', 'Salvar');
            startMemoryGame();
        } else {
            editModes.memory = true;
            updateEditBtn('memory', 'btn-edit-memory', 'Salvar');
            renderMemoryManageGrid();
        }
    });

    document.getElementById('btn-close-memory-card').addEventListener('click', closeMemoryCardModal);
    document.getElementById('btn-cancel-memory-card').addEventListener('click', closeMemoryCardModal);
    document.getElementById('memory-card-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('memory-card-word').value.trim();
        const imageFileA = document.getElementById('memory-card-image-a').files[0] || null;
        const imageFileB = document.getElementById('memory-card-image-b').files[0] || null;
        if (!word) return;

        if (editingMemoryPairId !== null) {
            await updateMemoryCardPair(editingMemoryPairId, word, imageFileA, imageFileB);
        } else {
            if (!imageFileA || !imageFileB) { alert('Envie as duas imagens do par.'); return; }
            memoryDraftPairs.push({ tempId: makePairId(), word, imageFileA, imageFileB });
            renderMemoryManageGrid();
        }
        closeMemoryCardModal();
    });

    document.getElementById('btn-alphabet-memory-new-game').addEventListener('click', async () => {
        if (editModes.alphabetMemory) {
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', true);
            await flushAlphabetMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', false);
            editModes.alphabetMemory = false;
            updateEditBtn('alphabetMemory', 'btn-edit-alphabet-memory', 'Salvar');
        }
        startAlphabetMemoryGame();
    });

    document.getElementById('btn-edit-alphabet-memory').addEventListener('click', async () => {
        if (editModes.alphabetMemory) {
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', true);
            await flushAlphabetMemoryDraftPairs();
            setGameButtonsProcessing('btn-edit-alphabet-memory', 'btn-alphabet-memory-new-game', false);
            editModes.alphabetMemory = false;
            updateEditBtn('alphabetMemory', 'btn-edit-alphabet-memory', 'Salvar');
            startAlphabetMemoryGame();
        } else {
            editModes.alphabetMemory = true;
            updateEditBtn('alphabetMemory', 'btn-edit-alphabet-memory', 'Salvar');
            renderAlphabetMemoryManageGrid();
        }
    });

    document.getElementById('btn-close-alphabet-memory-card').addEventListener('click', closeAlphabetMemoryCardModal);
    document.getElementById('btn-cancel-alphabet-memory-card').addEventListener('click', closeAlphabetMemoryCardModal);
    document.getElementById('alphabet-memory-card-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('alphabet-memory-card-word').value.trim();
        const imageFileA = document.getElementById('alphabet-memory-card-image-a').files[0] || null;
        const imageFileB = document.getElementById('alphabet-memory-card-image-b').files[0] || null;
        if (!word) return;

        if (editingAlphabetMemoryPairId !== null) {
            await updateAlphabetMemoryCardPair(editingAlphabetMemoryPairId, word, imageFileA, imageFileB);
        } else {
            if (!imageFileA || !imageFileB) { alert('Envie as duas imagens do par.'); return; }
            alphabetMemoryDraftPairs.push({ tempId: makePairId(), word, imageFileA, imageFileB });
            renderAlphabetMemoryManageGrid();
        }
        closeAlphabetMemoryCardModal();
    });

    document.getElementById('btn-naming-new-game').addEventListener('click', async () => {
        if (editModes.naming) {
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', true);
            await flushNamingDraftSets();
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', false);
            editModes.naming = false;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
        }
        startNamingGame();
    });

    document.getElementById('btn-edit-naming').addEventListener('click', async () => {
        if (editModes.naming) {
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', true);
            await flushNamingDraftSets();
            setGameButtonsProcessing('btn-edit-naming', 'btn-naming-new-game', false);
            editModes.naming = false;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
            startNamingGame();
        } else {
            editModes.naming = true;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
            document.getElementById('naming-play-area').style.display = 'none';
            document.getElementById('grid-naming').style.display = 'grid';
            renderNamingManageGrid();
        }
    });

    document.getElementById('btn-naming-help').addEventListener('click', namingHelp);
    document.getElementById('btn-naming-skip').addEventListener('click', namingSkip);
    document.getElementById('btn-speak-naming').addEventListener('click', () => {
        const text = document.getElementById('naming-word-display').textContent;
        trackUsageActivity(`Jogo Nomeação: Ouvir palavra`, {
            key: `game:naming:speak:${text}`,
            group: 'Jogos',
            detail: `Ouviu palavra no Jogo de Nomeação: ${text}`
        });
        speakWithAzure(text);
    });
    document.getElementById('btn-naming-stop').addEventListener('click', () => closeGame());

    document.getElementById('btn-speech-naming-record')?.addEventListener('click', toggleSpeechNamingRecording);
    document.getElementById('btn-speech-naming-help')?.addEventListener('click', speechNamingHelp);
    document.getElementById('btn-speech-naming-skip')?.addEventListener('click', speechNamingSkip);
    document.getElementById('btn-speech-naming-stop')?.addEventListener('click', () => closeGame());

    document.getElementById('btn-speech-naming-new-game')?.addEventListener('click', () => {
        if (editModes.speechNaming) {
            editModes.speechNaming = false;
            updateEditBtn('speechNaming', 'btn-edit-speech-naming', 'Salvar');
        }
        startSpeechNamingGame();
    });

    document.getElementById('btn-edit-speech-naming')?.addEventListener('click', () => {
        if (editModes.speechNaming) {
            editModes.speechNaming = false;
            updateEditBtn('speechNaming', 'btn-edit-speech-naming', 'Salvar');
            startSpeechNamingGame();
        } else {
            editModes.speechNaming = true;
            updateEditBtn('speechNaming', 'btn-edit-speech-naming', 'Salvar');
            document.getElementById('speech-naming-play-area').style.display = 'none';
            document.getElementById('grid-speech-naming').style.display = 'grid';
            renderSpeechNamingManageGrid();
        }
    });

    document.getElementById('btn-close-speech-naming-set')?.addEventListener('click', closeSpeechNamingSetModal);
    document.getElementById('btn-cancel-speech-naming-set')?.addEventListener('click', closeSpeechNamingSetModal);
    document.getElementById('speech-naming-set-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('speech-naming-set-word').value.trim();
        const imageFile = document.getElementById('speech-naming-set-image').files[0] || null;
        if (!word) return;
        if (!editingSpeechNamingItem && !imageFile) { alert('Envie a imagem da palavra.'); return; }

        const saveBtn = document.getElementById('btn-save-speech-naming-set');
        const originalText = saveBtn.textContent;
        saveBtn.disabled = true;
        saveBtn.textContent = 'Enviando imagem...';
        try {
            if (editingSpeechNamingItem) {
                await updateSpeechNamingItem(editingSpeechNamingItem, word, imageFile);
            } else {
                await addSpeechNamingItem(word, imageFile);
            }
            closeSpeechNamingSetModal();
        } catch (err) {
            console.error('Erro ao salvar palavra:', err);
            alert('Não foi possível salvar a palavra: ' + (err?.message || err));
        } finally {
            saveBtn.disabled = false;
            saveBtn.textContent = originalText;
        }
    });

    document.getElementById('btn-close-naming-set').addEventListener('click', closeNamingSetModal);
    document.getElementById('btn-cancel-naming-set').addEventListener('click', closeNamingSetModal);
    document.getElementById('naming-set-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const isQuickCreate = namingQuickCreate;
        const word = document.getElementById('naming-set-word').value.trim();
        const correctFile = document.getElementById('naming-set-image-correct').files[0] || null;
        const d1File = document.getElementById('naming-set-image-d1').files[0] || null;
        const d2File = document.getElementById('naming-set-image-d2').files[0] || null;
        if (!word) return;

        // Upload de 3 imagens pode levar bastante tempo numa conexão mais lenta;
        // sem essa indicação a tela parecia travada e o médico fechava o modal
        // antes de terminar (o save continuava em segundo plano de qualquer jeito).
        const saveBtn = document.getElementById('btn-save-naming-set');
        const saveBtnOriginalText = saveBtn.textContent;
        saveBtn.disabled = true;
        saveBtn.textContent = 'Enviando imagens...';

        try {
            if (editingNamingSetId !== null) {
                await updateNamingSet(editingNamingSetId, word, correctFile, d1File, d2File);
            } else if (isQuickCreate) {
                if (!correctFile || !d1File || !d2File) { alert('Envie as três imagens (correta + 2 distrações).'); return; }
                await addNamingSet(word, correctFile, d1File, d2File);
            } else {
                if (!correctFile || !d1File || !d2File) { alert('Envie as três imagens (correta + 2 distrações).'); return; }
                namingDraftSets.push({ tempId: makeNamingSetId(), word, correctFile, d1File, d2File });
                renderNamingManageGrid();
            }
            closeNamingSetModal();
        } catch (err) {
            console.error('Erro ao salvar palavra:', err);
            alert('Não foi possível salvar a palavra: ' + (err?.message || err));
        } finally {
            saveBtn.disabled = false;
            saveBtn.textContent = saveBtnOriginalText;
        }
    });

    document.getElementById('btn-afasia-new-game').addEventListener('click', async () => {
        if (editModes.afasia) {
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', true);
            await flushAfasiaDraftSets();
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', false);
            editModes.afasia = false;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
        }
        startAfasiaGame();
    });

    document.getElementById('btn-edit-afasia').addEventListener('click', async () => {
        if (editModes.afasia) {
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', true);
            await flushAfasiaDraftSets();
            setGameButtonsProcessing('btn-edit-afasia', 'btn-afasia-new-game', false);
            editModes.afasia = false;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
            startAfasiaGame();
        } else {
            editModes.afasia = true;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
            document.getElementById('afasia-play-area').style.display = 'none';
            document.getElementById('grid-afasia').style.display = 'grid';
            renderAfasiaManageGrid();
        }
    });

    document.getElementById('btn-afasia-help').addEventListener('click', afasiaHelp);
    document.getElementById('btn-afasia-skip').addEventListener('click', afasiaSkip);
    document.getElementById('btn-afasia-stop').addEventListener('click', () => closeGame());

    document.getElementById('btn-close-afasia-set').addEventListener('click', closeAfasiaSetModal);
    document.getElementById('btn-cancel-afasia-set').addEventListener('click', closeAfasiaSetModal);
    document.getElementById('afasia-set-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const isQuickCreate = afasiaQuickCreate;
        const question = document.getElementById('afasia-set-question').value.trim();
        const correctWord = document.getElementById('afasia-set-word-correct').value.trim();
        const d1Word = document.getElementById('afasia-set-word-d1').value.trim();
        const d2Word = document.getElementById('afasia-set-word-d2').value.trim();
        const imageFile = document.getElementById('afasia-set-image').files[0] || null;
        if (!question || !correctWord || !d1Word || !d2Word) return;

        if (editingAfasiaSetId !== null) {
            await updateAfasiaSet(editingAfasiaSetId, question, correctWord, d1Word, d2Word, imageFile);
        } else if (isQuickCreate) {
            if (!imageFile) { alert('Envie a imagem da atividade.'); return; }
            await addAfasiaSet(question, correctWord, d1Word, d2Word, imageFile);
        } else {
            if (!imageFile) { alert('Envie a imagem da atividade.'); return; }
            afasiaDraftSets.push({ tempId: makeAfasiaSetId(), question, correctWord, d1Word, d2Word, imageFile });
            renderAfasiaManageGrid();
        }
        closeAfasiaSetModal();
    });

    document.getElementById('btn-open-upload').addEventListener('click', () => {
        // Fase 19: sem paciente selecionado, a mídia do médico vai pro
        // banco próprio dele — não precisa mais de activePatientContext
        // pra abrir o modal (só o submit é que decide o destino).
        if (!isAdmin && !isDoctor) return;
        currentEditingMediaId = null;
        currentEditingMediaFromSupabase = false;
        document.getElementById('upload-modal-title').textContent = 'Nova Mídia';
        document.querySelector('#upload-form button[type="submit"]').textContent = 'Salvar Mídia';
        document.getElementById('upload-modal').style.display = 'flex';
    });
    const closeUpload = () => {
        document.getElementById('upload-modal').style.display = 'none';
        document.getElementById('upload-form').reset();
        document.getElementById('upload-modal-title').textContent = 'Nova Mídia';
        document.querySelector('#upload-form button[type="submit"]').textContent = 'Salvar Mídia';
        document.getElementById('media-file-group').style.display = 'block';
        document.getElementById('media-link-group').style.display = 'none';
        currentEditingMediaId = null;
        currentEditingMediaFromSupabase = false;
    };
    document.getElementById('btn-close-upload').addEventListener('click', closeUpload);
    document.getElementById('btn-cancel-upload').addEventListener('click', closeUpload);

    document.getElementById('btn-open-audio-upload').addEventListener('click', () => {
        if (!isAdmin && !isDoctor) return;
        currentEditingAudioClip = null;
        document.getElementById('audio-upload-form').reset();
        document.getElementById('audio-upload-modal-title').textContent = 'Novo Áudio';
        document.querySelector('#audio-upload-form button[type="submit"]').textContent = 'Salvar Áudio';
        document.getElementById('audio-clip-file').setAttribute('required', 'required');
        document.getElementById('audio-upload-modal').style.display = 'flex';
    });
    const closeAudioUpload = () => {
        document.getElementById('audio-upload-modal').style.display = 'none';
        document.getElementById('audio-upload-form').reset();
        document.getElementById('audio-upload-modal-title').textContent = 'Novo Áudio';
        document.querySelector('#audio-upload-form button[type="submit"]').textContent = 'Salvar Áudio';
        document.getElementById('audio-clip-file').setAttribute('required', 'required');
        currentEditingAudioClip = null;
    };
    document.getElementById('btn-close-audio-upload').addEventListener('click', closeAudioUpload);
    document.getElementById('btn-cancel-audio-upload').addEventListener('click', closeAudioUpload);
    document.getElementById('audio-upload-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        if (!isAdmin && !isDoctor) {
            alert('Apenas administradores ou médicos podem adicionar áudios.');
            return;
        }
        const title = document.getElementById('audio-clip-title').value.trim();
        const file = document.getElementById('audio-clip-file').files[0] || null;
        const colorValue = document.getElementById('audio-clip-color').value;
        const colorClass = colorValue ? colorValue.split('-')[1] : null;
        if (!title) { alert('Por favor informe um título para o áudio.'); return; }
        if (!currentEditingAudioClip && !file) { alert('Selecione um arquivo de áudio.'); return; }
        const submitBtn = e.target.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        try {
            if (currentEditingAudioClip) {
                await updateAudioClip(currentEditingAudioClip, title, file, colorClass);
            } else {
                await saveAudioClip(title, file, colorClass);
            }
            closeAudioUpload();
        } finally {
            submitBtn.disabled = false;
        }
    });

    const mediaSourceRadios = document.querySelectorAll('input[name="media-source"]');
    const mediaFileGroup = document.getElementById('media-file-group');
    const mediaLinkGroup = document.getElementById('media-link-group');

    mediaSourceRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            const source = document.querySelector('input[name="media-source"]:checked').value;
            if (source === 'link') {
                mediaFileGroup.style.display = 'none';
                mediaLinkGroup.style.display = 'block';
            } else {
                mediaFileGroup.style.display = 'block';
                mediaLinkGroup.style.display = 'none';
            }
        });
    });

    document.getElementById('upload-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!isAdmin && !isDoctor) {
            alert('Apenas administradores ou médicos podem adicionar mídia.');
            return;
        }

        const title = document.getElementById('media-title').value.trim();
        const color = document.getElementById('media-color').value.split('-')[1];
        const source = document.querySelector('input[name="media-source"]:checked').value;

        if (!title) {
            alert('Por favor informe um título para a mídia.');
            return;
        }

        if (currentEditingMediaId !== null) {
            const media = lastMergedMedias.find(m => m.id === currentEditingMediaId && m.fromSupabase === currentEditingMediaFromSupabase);
            if (!media) { closeUpload(); return; }
            if (source === 'link') {
                const link = document.getElementById('media-link').value.trim();
                if (!link) {
                    alert('Informe o link do YouTube, Vimeo ou Google Drive.');
                    return;
                }
                updateMediaInDB(media, title, null, '', color, link);
            } else {
                // Aba "Arquivo" sem trocar o arquivo = mantém o arquivo/link atual.
                const file = document.getElementById('media-file').files[0] || null;
                updateMediaInDB(media, title, file, file ? file.type : '', color, null);
            }
            closeUpload();
            return;
        }

        const targetPatientId = (isDoctor && activePatientContext) ? activePatientContext.id : null;

        if (source === 'link') {
            const link = document.getElementById('media-link').value.trim();
            if (!link) {
                alert('Informe o link do YouTube, Vimeo ou Google Drive.');
                return;
            }
            saveMediaToDB(title, null, '', color, link, targetPatientId);
        } else {
            const file = document.getElementById('media-file').files[0];
            if (!file) {
                alert('Selecione um arquivo de áudio ou vídeo.');
                return;
            }
            saveMediaToDB(title, file, file.type, color, null, targetPatientId);
        }

        closeUpload();
    });

    const closeExerciseType = () => {
        document.getElementById('exercise-type-modal').style.display = 'none';
    };

    const openSlidesExerciseCreator = () => {
        closeExerciseType();
        currentEditingExerciseId = null;
        currentEditingExerciseFromSupabase = false;
        currentEditingExerciseForkSource = null;
        currentEditingBlobs = {};
        currentEditingImageUrls = {};
        exerciseBlockCounter = 0;

        document.getElementById('upload-exercise-modal').style.display = 'flex';
        document.getElementById('upload-exercise-modal').querySelector('h2').textContent = "Novo Exercício (Slides)";
        document.getElementById('upload-exercise-form').reset();

        const container = document.getElementById('exercise-items-container');
        container.innerHTML = '';
        addExerciseBlock();
    };

    document.getElementById('btn-open-exercise-upload').addEventListener('click', () => {
        // Desde as Fases 10-13, naming/afasia/complete-sentence também têm
        // banco por médico (mesma RLS de doctor_user_id do Exercício com
        // Slides) — médico vê o mesmo seletor de tipo que o admin, em vez
        // de pular direto pro criador de slides como antes.
        if (!isAdmin && !isDoctor) return;
        // "Banco de Prontos" só faz sentido pro médico adicionar ao próprio
        // banco — admin já é dono do conteúdo global, não precisa "adicionar".
        const readyBankTile = document.getElementById('btn-open-ready-bank');
        if (readyBankTile) readyBankTile.style.display = isDoctor ? 'flex' : 'none';
        document.getElementById('exercise-type-modal').style.display = 'flex';
    });

    document.getElementById('exercise-filter-search')?.addEventListener('input', (e) => {
        exerciseFilterQuery = e.target.value;
        renderExerciseCards(lastMergedExercises);
    });
    document.getElementById('exercise-filter-status')?.addEventListener('change', (e) => {
        exerciseFilterStatus = e.target.value;
        renderExerciseCards(lastMergedExercises);
    });
    document.getElementById('media-filter-search')?.addEventListener('input', (e) => {
        mediaFilterQuery = e.target.value;
        renderMediaCards(lastMergedMedias);
    });
    document.getElementById('topics-filter-search')?.addEventListener('input', (e) => {
        topicsFilterQuery = e.target.value;
        renderTopicsFolders();
    });
    document.getElementById('virtues-filter-search')?.addEventListener('input', (e) => {
        virtuesFilterQuery = e.target.value;
        renderVirtueFolders();
    });
    document.getElementById('games-filter-search')?.addEventListener('input', (e) => {
        gamesFilterQuery = e.target.value;
        renderGamesList();
    });

    document.getElementById('btn-close-exercise-type').addEventListener('click', closeExerciseType);
    document.getElementById('btn-cancel-exercise-type').addEventListener('click', closeExerciseType);
    document.getElementById('btn-create-slides-exercise').addEventListener('click', openSlidesExerciseCreator);
    document.getElementById('btn-open-ready-bank')?.addEventListener('click', () => {
        closeExerciseType();
        openReadyBankModal();
    });
    document.getElementById('btn-close-ready-bank')?.addEventListener('click', () => {
        document.getElementById('ready-bank-modal').style.display = 'none';
    });

    document.getElementById('btn-create-recognition-exercise').addEventListener('click', async () => {
        if (!isAdmin && !isDoctor) return;
        // Fase 24: cada "Reconhecimento de Palavras" agora é um deck próprio
        // (pede nome), não mais o container único de sempre — cria a linha
        // primeiro, só depois entra no gerenciador já apontando pra ela.
        const deckTitle = prompt('Nome deste deck de Reconhecimento de Palavras (ex: "Animais", "Cores"):');
        if (!deckTitle || !deckTitle.trim()) return;
        closeExerciseType();
        try {
            const payload = { title: `${deckTitle.trim()}|red`, visible: true, game_kind: 'naming' };
            if (isDoctor) { payload.doctor_user_id = currentUserId; payload.company_id = currentUserCompanyId; }
            const { data: created, error } = await supabaseClient.from('exercises').insert([payload]).select().single();
            if (error) throw error;
            await loadExerciseCards();
            activeNamingDeckId = created.id;
            openGame('naming');
            editModes.naming = true;
            updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
            document.getElementById('naming-play-area').style.display = 'none';
            document.getElementById('grid-naming').style.display = 'grid';
            renderNamingManageGrid();
            namingQuickCreate = true;
            openNamingSetModal(null);
        } catch (err) {
            alert('Erro ao criar deck: ' + err.message);
        }
    });

    document.getElementById('btn-create-afasia-exercise').addEventListener('click', async () => {
        if (!isAdmin && !isDoctor) return;
        const deckTitle = prompt('Nome deste deck de Reconhecimento de Imagem (ex: "Emoções", "Objetos"):');
        if (!deckTitle || !deckTitle.trim()) return;
        closeExerciseType();
        try {
            const payload = { title: `${deckTitle.trim()}|yellow`, visible: true, game_kind: 'afasia' };
            if (isDoctor) { payload.doctor_user_id = currentUserId; payload.company_id = currentUserCompanyId; }
            const { data: created, error } = await supabaseClient.from('exercises').insert([payload]).select().single();
            if (error) throw error;
            await loadExerciseCards();
            activeAfasiaDeckId = created.id;
            openGame('afasia');
            editModes.afasia = true;
            updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
            document.getElementById('afasia-play-area').style.display = 'none';
            document.getElementById('grid-afasia').style.display = 'grid';
            renderAfasiaManageGrid();
            afasiaQuickCreate = true;
            openAfasiaSetModal(null);
        } catch (err) {
            alert('Erro ao criar deck: ' + err.message);
        }
    });

    document.getElementById('btn-create-complete-sentence-exercise')?.addEventListener('click', () => {
        closeExerciseType();
        const frame = document.getElementById('complete-sentence-frame');
        const openManagerMessage = () => frame.contentWindow?.postMessage({ type: 'complete-sentence:open-manager' }, window.location.origin);
        
        if (document.getElementById('game-complete-sentence-container').style.display === 'none') {
            openGame('complete-sentence');
            setTimeout(openManagerMessage, 500);
        } else {
            openManagerMessage();
        }
    });

    const closeExerciseUpload = () => { document.getElementById('upload-exercise-modal').style.display = 'none'; document.getElementById('upload-exercise-form').reset(); };
    document.getElementById('btn-close-exercise-upload').addEventListener('click', closeExerciseUpload);
    document.getElementById('btn-cancel-exercise-upload').addEventListener('click', closeExerciseUpload);

    document.getElementById('btn-add-exercise-item').addEventListener('click', () => {
        addExerciseBlock(true);
    });

    document.getElementById('upload-exercise-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!isAdmin && !isDoctor) {
            alert('Apenas administradores ou médicos podem salvar exercícios.');
            return;
        }
        const titleVal = document.getElementById('exercise-title').value.trim();
        const colorVal = document.getElementById('exercise-color').value;
        const finalTitle = `${titleVal}|${colorVal}`;
        
        const blocks = document.querySelectorAll('.exercise-item-block');

        if (blocks.length === 0) return alert("Adicione pelo menos um slide.");

        const itemsArray = [];
        blocks.forEach(block => {
            const blockId = block.dataset.blockId;
            const fileInput = block.querySelector('.item-image');

            let finalBlob = fileInput.files[0];
            if (!finalBlob && currentEditingBlobs[blockId]) {
                finalBlob = currentEditingBlobs[blockId];
            }

            // Preservar a URL da imagem atual se não subiu um novo arquivo
            let existingImageUrl = null;
            if (currentEditingImageUrls && currentEditingImageUrls[blockId]) {
                existingImageUrl = currentEditingImageUrls[blockId];
            }

            itemsArray.push({
                word: block.querySelector('.item-word').value,
                syllables: sanitizeWordHtml(block.querySelector('.item-syllables').innerHTML),
                color: block.querySelector('.item-color').value,
                size: block.querySelector('.item-size').value,
                uppercase: block.querySelector('.item-uppercase').checked,
                bold: block.querySelector('.item-bold').checked,
                videoLink: block.querySelector('.item-link').value,
                imageBlob: finalBlob,
                image_url: existingImageUrl
            });
        });

        const targetDoctorUserId = isDoctor ? currentUserId : null;
        saveExercisePlaylistToDB(finalTitle, itemsArray, targetDoctorUserId);
        closeExerciseUpload();
    });

    const openSyllablesExerciseCreator = () => {
        closeExerciseType();
        currentEditingSyllablesExerciseId = null;
        currentEditingSyllablesExerciseFromSupabase = false;
        syllablesBlockCounter = 0;

        document.getElementById('syllables-exercise-modal').style.display = 'flex';
        document.getElementById('syllables-exercise-modal').querySelector('h2').textContent = "Novo Exercício (Sílabas)";
        document.getElementById('syllables-exercise-form').reset();

        const container = document.getElementById('syllables-items-container');
        container.innerHTML = '';
        addSyllablesItemBlock();
    };
    document.getElementById('btn-create-syllables-exercise').addEventListener('click', openSyllablesExerciseCreator);

    const closeSyllablesExerciseUpload = () => { document.getElementById('syllables-exercise-modal').style.display = 'none'; document.getElementById('syllables-exercise-form').reset(); };
    document.getElementById('btn-close-syllables-exercise').addEventListener('click', closeSyllablesExerciseUpload);
    document.getElementById('btn-cancel-syllables-exercise').addEventListener('click', closeSyllablesExerciseUpload);

    document.getElementById('btn-add-syllables-item').addEventListener('click', () => {
        addSyllablesItemBlock(true);
    });

    document.getElementById('syllables-exercise-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!isAdmin && !isDoctor) {
            alert('Apenas administradores ou médicos podem salvar exercícios.');
            return;
        }
        const titleVal = document.getElementById('syllables-exercise-title').value.trim();
        const colorVal = document.getElementById('syllables-exercise-color').value;
        const finalTitle = `${titleVal}|${colorVal}`;
        const sizeVal = document.getElementById('syllables-text-size').value;
        const colorTextVal = document.getElementById('syllables-text-color').value;
        const fontVal = document.getElementById('syllables-font').value;

        const blocks = document.querySelectorAll('.syllables-item-block');
        if (blocks.length === 0) return alert("Adicione pelo menos uma palavra.");

        const itemsArray = [];
        let missingWord = false;
        let missingSyllables = false;
        blocks.forEach(block => {
            const wordHtml = sanitizeWordHtml(block.querySelector('.syll-item-word').innerHTML);
            if (!stripWordHtml(wordHtml).trim()) missingWord = true;
            const syllablesHtml = sanitizeWordHtml(block.querySelector('.syll-item-syllables').innerHTML);
            if (!stripWordHtml(syllablesHtml).trim()) missingSyllables = true;
            itemsArray.push({
                word: wordHtml,
                syllables: syllablesHtml
            });
        });
        if (missingWord) return alert("Toda palavra deste exercício precisa do campo \"Palavra Escrita\" preenchido.");
        if (missingSyllables) return alert("Toda palavra deste exercício precisa do campo \"Sílabas\" preenchido.");

        const targetDoctorUserId = isDoctor ? currentUserId : null;
        saveSyllablesExerciseToDB(finalTitle, sizeVal, colorTextVal, fontVal, itemsArray, targetDoctorUserId);
        closeSyllablesExerciseUpload();
    });

    const openAudioExerciseCreator = () => {
        closeExerciseType();
        currentEditingAudioExerciseId = null;
        currentEditingAudioExerciseFromSupabase = false;
        audioBlockCounter = 0;
        currentEditingAudioUrls = {};
        currentEditingAudioImageUrls = {};

        document.getElementById('audio-exercise-modal').style.display = 'flex';
        document.getElementById('audio-exercise-modal').querySelector('h2').textContent = "Novo Exercício (Áudio Real)";
        document.getElementById('audio-exercise-form').reset();

        const container = document.getElementById('audio-items-container');
        container.innerHTML = '';
        addAudioItemBlock();
    };
    document.getElementById('btn-create-audio-exercise').addEventListener('click', openAudioExerciseCreator);

    const closeAudioExerciseUpload = () => { document.getElementById('audio-exercise-modal').style.display = 'none'; document.getElementById('audio-exercise-form').reset(); };
    document.getElementById('btn-close-audio-exercise').addEventListener('click', closeAudioExerciseUpload);
    document.getElementById('btn-cancel-audio-exercise').addEventListener('click', closeAudioExerciseUpload);

    document.getElementById('btn-add-audio-item').addEventListener('click', () => {
        addAudioItemBlock(true);
    });

    document.getElementById('audio-exercise-form').addEventListener('submit', (e) => {
        e.preventDefault();
        if (!isAdmin && !isDoctor) {
            alert('Apenas administradores ou médicos podem salvar exercícios.');
            return;
        }
        const titleVal = document.getElementById('audio-exercise-title').value.trim();
        const colorVal = document.getElementById('audio-exercise-color').value;
        const finalTitle = `${titleVal}|${colorVal}`;
        const sizeVal = document.getElementById('audio-text-size').value;
        const colorTextVal = document.getElementById('audio-text-color').value;
        const fontVal = document.getElementById('audio-font').value;

        const blocks = document.querySelectorAll('.audio-item-block');
        if (blocks.length === 0) return alert("Adicione pelo menos uma palavra.");

        const itemsArray = [];
        let missingAudio = false;
        let missingWord = false;
        let missingSyllables = false;
        blocks.forEach(block => {
            const blockId = block.dataset.blockId;
            const audioFile = block.querySelector('.audio-item-file').files[0] || null;
            const audioUrl = !audioFile ? (currentEditingAudioUrls[blockId] || null) : null;
            if (!audioFile && !audioUrl) missingAudio = true;
            const imageFile = block.querySelector('.audio-item-image').files[0] || null;
            const imageUrl = !imageFile ? (currentEditingAudioImageUrls[blockId] || null) : null;
            const wordHtml = sanitizeWordHtml(block.querySelector('.audio-item-word').innerHTML);
            if (!stripWordHtml(wordHtml).trim()) missingWord = true;
            const syllablesHtml = sanitizeWordHtml(block.querySelector('.audio-item-syllables').innerHTML);
            if (!stripWordHtml(syllablesHtml).trim()) missingSyllables = true;
            itemsArray.push({
                word: wordHtml,
                syllables: syllablesHtml,
                audioFile,
                audioUrl,
                imageFile,
                imageUrl
            });
        });
        if (missingWord) return alert("Toda palavra deste exercício precisa do campo \"Palavra Escrita\" preenchido.");
        if (missingSyllables) return alert("Toda palavra deste exercício precisa do campo \"Sílabas\" preenchido.");
        if (missingAudio) return alert("Toda palavra deste exercício precisa de um áudio gravado (.mp3 ou .wav).");

        const targetDoctorUserId = isDoctor ? currentUserId : null;
        saveAudioExerciseToDB(finalTitle, sizeVal, colorTextVal, fontVal, itemsArray, targetDoctorUserId);
        closeAudioExerciseUpload();
    });

    document.getElementById('btn-close-video').addEventListener('click', () => {
        document.getElementById('video-modal').style.display = 'none';
        document.getElementById('video-player').pause();
    });

    document.getElementById('btn-close-presentation').addEventListener('click', () => {
        stopUsageActivity('fechar-apresentacao');
        document.getElementById('presentation-modal').style.display = 'none';
        document.getElementById('presentation-iframe').src = '';
        // Corta o áudio (real ou TTS) que estava tocando — sem isso, um áudio
        // real gravado (mais longo que a fala curta da Azure) continuava
        // audível mesmo com a apresentação já fechada.
        if (currentAudio) { currentAudio.pause(); currentAudio = null; }
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    });

    document.getElementById('btn-prev-presentation').addEventListener('click', () => navigatePlaylist(-1));
    document.getElementById('btn-next-presentation').addEventListener('click', () => navigatePlaylist(1));
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('presentation-modal').style.display !== 'flex') return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentPlaylistIndex > 0) navigatePlaylist(-1);
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentPlaylistIndex < currentPlaylistItems.length - 1) navigatePlaylist(1);
        }
    });
    document.getElementById('btn-speak-presentation').addEventListener('click', () => {
        const item = currentPlaylistItems[currentPlaylistIndex];
        if (item) {
            trackUsageActivity(usageCurrentActivity?.label || 'Exercício', {
                key: `exercise:speak:${usageCurrentActivity?.label || 'Exercício'}`,
                group: 'Exercícios',
                detail: `Ouviu palavra: ${stripWordHtml(item.word)}`
            });
            // Exercício com Áudio Real: toca a gravação de verdade em vez da
            // voz sintética, quando o item tem uma (mesmo padrão já usado
            // pelos cards de Tópicos/Core — audioBlob local ou audio_url do
            // Supabase, com TTS só como fallback).
            if (item.audioBlob instanceof Blob) {
                if (currentAudio) currentAudio.pause();
                currentAudio = new Audio(URL.createObjectURL(item.audioBlob));
                currentAudio.play();
            } else if (item.audio_url) {
                if (currentAudio) currentAudio.pause();
                currentAudio = new Audio(item.audio_url);
                currentAudio.play();
            } else {
                speakWithAzure(stripWordHtml(item.word));
            }
        }
    });
}

function playMedia(media) {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (currentAudio) currentAudio.pause();

    if (media.media_url && !media.blob) {
        window.open(media.media_url, '_blank');
        return;
    }

    const fileUrl = URL.createObjectURL(media.blob);
    if (media.isVideo) {
        document.getElementById('video-modal-title').textContent = media.title;
        document.getElementById('video-modal').style.display = 'flex';
        document.getElementById('video-player').src = fileUrl;
        document.getElementById('video-player').play();
    } else {
        currentAudio = new Audio(fileUrl);
        currentAudio.play();
    }
}

function navigatePlaylist(direction) {
    const newIndex = currentPlaylistIndex + direction;
    if (newIndex >= 0 && newIndex < currentPlaylistItems.length) {
        // Corta o áudio do slide anterior antes de trocar — mesmo cuidado do
        // botão Fechar, senão um áudio real (mais longo que a fala da Azure)
        // continua tocando por cima do slide novo.
        if (currentAudio) { currentAudio.pause(); currentAudio = null; }
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        currentPlaylistIndex = newIndex;
        renderCurrentPlaylistItem();
    } else {
        alert("Não é possível avançar. Total de slides salvos neste exercício: " + currentPlaylistItems.length);
    }
}

function openPresentationPlaylist(ex) {
    if (!ex.items || ex.items.length === 0) return;

    currentPlaylistItems = ex.items;
    currentPlaylistIndex = 0;
    currentPlaylistDeckStyle = (ex.gameKind === 'syllables' || ex.gameKind === 'audio-real')
        ? { size: ex.syllablesSize, color: ex.syllablesColor, font: ex.syllablesFont }
        : null;

    document.getElementById('presentation-modal').style.display = 'flex';
    const activityLabel = (ex.title || '').split('|')[0] || ex.title || 'Exercício';
    startUsageActivity(activityLabel, {
        key: `exercise:${ex.id || activityLabel}`,
        group: 'Exercícios',
        view: 'view-exercises',
        detail: 'Exercício aberto'
    });
    renderCurrentPlaylistItem();
}

// Encolhe a fonte de `el` até caber numa linha só dentro de `container`
// (sem quebrar linha, sem scroll) — usado tanto pelas sílabas do Exercício
// de Sílabas dedicado quanto pela legenda de sílabas sobre a foto no
// Exercício com Slides.
// `reservedPx`: pixels fixos a descontar da largura do container antes de
// medir — as setas de navegação (.nav-arrow, 80px + 20px de margem) ficam
// posicionadas absolute por cima do canto direito de .presentation-right,
// bem perto da borda dela; sem esse desconto, palavras longas em sílabas
// (ex: "Hu.ma.ni.da.de") cabiam nos 92% do container mas mesmo assim
// ficavam cortadas visualmente atrás da seta.
function fitTextToWidth(el, container, minSize = 16, reservedPx = 0) {
    let attempts = 0;
    const maxWidth = Math.max(0, container.clientWidth - reservedPx) * 0.92;
    while (attempts < 40 && el.scrollWidth > maxWidth) {
        const currentSize = parseFloat(getComputedStyle(el).fontSize);
        const nextSize = currentSize - 2;
        if (nextSize < minSize) break;
        el.style.fontSize = nextSize + 'px';
        attempts++;
    }
}

function renderCurrentPlaylistItem() {
    try {
        const item = currentPlaylistItems[currentPlaylistIndex];

        document.getElementById('presentation-progress').textContent = `${currentPlaylistIndex + 1} / ${currentPlaylistItems.length}`;
        const wordEl = document.getElementById('presentation-word-text');
        // sanitizeWordHtml reconstrói só <strong>/<span style="color:..."> permitidos
        // (Exercício de Sílabas e Áudio Real, negrito/cor por trecho); pra palavra
        // sem nenhuma formatação (Exercício com Slides) isso equivale a texto puro.
        wordEl.innerHTML = sanitizeWordHtml(item.word || '');
        // item.textColor/textSize/isUppercase/isBold é a convenção dos seeds locais;
        // exercícios salvos no Supabase vêm com as colunas color/size/uppercase/bold
        // (exercise_items) — sem o fallback, a cor/tamanho/caixa-alta escolhidos no
        // formulário nunca refletiam na apresentação de um deck salvo no servidor.
        wordEl.style.color = item.textColor || item.color || '#333333';
        wordEl.style.fontSize = (item.textSize || item.size || '100') + 'px';
        wordEl.style.textTransform = (item.isUppercase !== undefined ? item.isUppercase : item.uppercase) ? 'uppercase' : 'none';
        const wordIsBold = item.isBold !== undefined ? item.isBold : (item.bold !== undefined ? item.bold : true);
        wordEl.style.fontWeight = wordIsBold ? '800' : '400';

        const imgEl = document.getElementById('presentation-image');
        const syllablesEl = document.getElementById('presentation-syllables');
        const captionEl = document.getElementById('presentation-image-caption');
        // Espaço de largura zero depois do ponto: sem ele, o navegador não tem
        // onde quebrar linha (não há espaço nenhum na string) e parte no meio
        // de uma sílaba de qualquer jeito — com ele, só quebra entre sílabas
        // (mesmo com white-space:nowrap, esse texto pode entrar num elemento
        // sem esse cuidado no futuro, então normaliza sempre).
        const displaySyllables = (item.syllables || '').replace(/[-.]/g, '.​');
        // Exercício com Áudio Real aceita uma imagem própria opcional por
        // palavra (upload manual) — quando presente, mostra ela com legenda
        // de sílabas por cima (igual Exercício com Slides), em vez de
        // substituir por sílabas grandes. Nunca busca pictograma do ARASAAC
        // pra esse deck (ver ramo final do else abaixo).
        const hasOwnImage = (item.imageBlob instanceof Blob) || !!item.image_url;

        if (currentPlaylistDeckStyle && !hasOwnImage) {
            // Exercício de Sílabas dedicado (e Exercício com Áudio Real sem
            // imagem própria): sílabas substituem a imagem por completo.
            imgEl.style.display = 'none';
            imgEl.src = '';
            captionEl.style.display = 'none';
            syllablesEl.style.display = 'inline-block';
            syllablesEl.innerHTML = sanitizeWordHtml(displaySyllables);
            const { size, color, font } = currentPlaylistDeckStyle;
            [wordEl, syllablesEl].forEach(el => {
                el.style.fontFamily = font || "'Outfit', sans-serif";
                el.style.color = color || '#1f1f1f';
                el.style.fontSize = (size || 100) + 'px';
            });
            // Palavra/sílabas com negrito manual só num trecho: o resto vira peso
            // normal pra esse trecho se destacar de verdade (sem formatação
            // nenhuma, mantém o negrito padrão do deck, no CSS de .presentation-syllables).
            // Reset explícito nos dois casos — os elementos são reaproveitados
            // entre slides, então sem isso um peso '400' de um item formatado
            // ficava grudado no próximo item sem formatação nenhuma.
            if (/<(strong|span)/i.test(item.word || '')) wordEl.style.fontWeight = '400';
            syllablesEl.style.fontWeight = /<(strong|span)/i.test(item.syllables || '') ? '400' : '';
            fitTextToWidth(syllablesEl, syllablesEl.parentElement, 16, 110);
        } else {
            syllablesEl.style.display = 'none';
            imgEl.style.display = '';
            if (item.imageBlob && item.imageBlob instanceof Blob) {
                imgEl.src = URL.createObjectURL(item.imageBlob);
            } else if (item.image_url) {
                imgEl.src = item.image_url;
            } else if (currentPlaylistDeckStyle) {
                // Inalcançável na prática (deckStyle+sem imagem já cai no ramo de
                // cima), mas por segurança: Áudio Real/Sílabas nunca busca
                // pictograma automático — só sílabas grandes ou upload manual.
                imgEl.style.display = 'none';
                imgEl.src = '';
            } else {
                // Sem imagem própria nem ainda o pictograma do ARASAAC: esconde o
                // <img> em vez de deixar src="" — um <img> com src vazio mostra o
                // ícone de imagem quebrada do navegador (parece bug pro usuário),
                // mesmo sendo o comportamento esperado quando não tem foto nem o
                // ARASAAC acha nada pra essa palavra.
                imgEl.style.display = 'none';
                imgEl.src = '';
                fetchArasaacImage(item.imgQuery || item.word).then(url => {
                    if (currentPlaylistItems[currentPlaylistIndex] !== item) return;
                    if (url) {
                        imgEl.src = url;
                        imgEl.style.display = '';
                    }
                });
            }

            // Exercício com Slides: sílabas (se preenchidas) viram legenda
            // sobre a foto, sem substituir a imagem.
            if (item.syllables) {
                captionEl.style.display = 'inline-block';
                // Mesmo tamanho da palavra escrita à esquerda — só encolhe
                // (fitTextToWidth) se não couber na largura disponível.
                captionEl.style.fontSize = ((item.textSize || item.size || 100) * 0.7) + 'px';
                captionEl.innerHTML = sanitizeWordHtml(displaySyllables);
                // Reset explícito (ver comentário equivalente no ramo de cima):
                // captionEl é reaproveitado entre slides.
                captionEl.style.fontWeight = /<(strong|span)/i.test(item.syllables || '') ? '400' : '';
                // Mede contra .presentation-right (largura estável), não o wrap da
                // imagem — o wrap só ganha tamanho real depois que a imagem carrega
                // (ou o pictograma do ARASAAC chega, que é assíncrono), e medir
                // contra ele antes disso encolheria a legenda à toa.
                fitTextToWidth(captionEl, captionEl.closest('.presentation-right'), 12, 110);
            } else {
                captionEl.style.display = 'none';
            }
        }

        const embedUrl = getEmbedUrl(item.videoLink);
        const iframeEl = document.getElementById('presentation-iframe');
        iframeEl.src = embedUrl;
        iframeEl.style.display = embedUrl ? '' : 'none';

        // Slides sem vídeo (ex: Nomeação de Objetos, Frases Funcionais) ganham o botão
        // de som para ouvir a escrita; com vídeo o áudio já vem do próprio vídeo.
        document.getElementById('btn-speak-presentation').style.display = embedUrl ? 'none' : '';

        // Pré-carrega o áudio do slide atual e do próximo para o clique no botão
        // de som (e a navegação com as setas) responder na hora. Slides com
        // áudio real próprio (Exercício com Áudio Real) não precisam de TTS —
        // pré-carregar a voz da Azure ali seria uma chamada de API à toa.
        const hasOwnAudio = (it) => it.audioBlob instanceof Blob || !!it.audio_url;
        if (!embedUrl && !hasOwnAudio(item)) prefetchTts(stripWordHtml(item.word));
        const nextItem = currentPlaylistItems[currentPlaylistIndex + 1];
        if (nextItem && !getEmbedUrl(nextItem.videoLink) && !hasOwnAudio(nextItem)) prefetchTts(stripWordHtml(nextItem.word));

        // Pré-carrega a imagem dos slides vizinhos: sem isso, cada avanço só
        // começa a buscar a imagem depois do clique, e em decks grandes
        // (ex: abecedário com dezenas de slides) a troca fica visivelmente
        // lenta. O navegador cacheia a imagem assim que o Image() carrega.
        const prevItem = currentPlaylistItems[currentPlaylistIndex - 1];
        [nextItem, prevItem].forEach(neighbor => {
            // Só pula a imagem quando o deck SUBSTITUI ela de vez (Sílabas, ou
            // Áudio Real sem imagem própria) — com imagem própria (Áudio Real) ou
            // no Exercício com Slides, a foto continua precisando carregar.
            const neighborHasOwnImage = neighbor && ((neighbor.imageBlob instanceof Blob) || !!neighbor.image_url);
            if (!neighbor || (currentPlaylistDeckStyle && !neighborHasOwnImage)) return;
            if (neighbor.image_url) {
                const preloader = new Image();
                preloader.src = neighbor.image_url;
            } else if (!(neighbor.imageBlob instanceof Blob)) {
                // Sem imagem própria: o slide busca um pictograma automático no
                // ARASAAC (serviço externo) na hora de exibir — chamando aqui
                // adiantado, a busca já cai no arasaacCache, e ainda
                // pré-carrega a imagem do pictograma em si (senão só a busca
                // ficaria rápida, o download da imagem continuaria acontecendo
                // só no clique).
                fetchArasaacImage(neighbor.imgQuery || neighbor.word).then(url => {
                    if (url) {
                        const preloader = new Image();
                        preloader.src = url;
                    }
                });
            }
        });

        document.getElementById('btn-prev-presentation').disabled = (currentPlaylistIndex === 0);
        document.getElementById('btn-next-presentation').disabled = (currentPlaylistIndex === currentPlaylistItems.length - 1);
    } catch (e) {
        console.error("Erro ao renderizar slide:", e);
        alert("Erro na tela do slide: " + e.message);
    }
}

// =============================================
// JOGOS (HUB)
// =============================================
const gamesList = [
    { id: 'memory', title: 'Jogo da Memória', icon: 'fa-clone', styleClass: 'border-blue' },
    { id: 'memory-alphabet', title: 'Memória do Alfabeto', icon: 'fa-font', styleClass: 'border-green' },
    { id: 'jogo2', title: 'Trilha de Aprendizado de Forças', icon: 'fa-route', styleClass: 'border-orange' },
    { id: 'speech-naming', title: 'Nomeação por Fala (protótipo)', icon: 'fa-microphone-alt', styleClass: 'border-pink' }
];

const exerciseActivities = [
    { id: 'complete-sentence', title: 'Complete a Frase', icon: 'fa-puzzle-piece', styleClass: 'border-orange' },
    { id: 'naming', title: 'Reconhecimento de Palavras', icon: 'fa-images', styleClass: 'border-red' },
    { id: 'afasia', title: 'Reconhecimento de Imagem', icon: 'fa-comment-medical', styleClass: 'border-yellow' }
];

function seedUsageCatalogActivities() {
    gamesList.forEach((item, index) => {
        registerUsageCatalog('activity', `Jogo: ${item.title}`, {
            key: `game:${item.id}`,
            group: 'Jogos',
            order: index
        });
    });

    exerciseActivities.forEach((item, index) => {
        registerUsageCatalog('activity', `Exercício: ${item.title}`, {
            key: `exercise:${item.id}`,
            group: 'Exercícios',
            order: index
        });
    });
}

seedUsageCatalogActivities();

// As listas consultam a visibilidade de cada card de forma assíncrona. Estes
// contadores invalidam uma renderização antiga quando uma atualização mais nova
// começa, evitando que duas chamadas anexem a mesma atividade ao grid.
let gamesRenderVersion = 0;
let exerciseActivitiesRenderVersion = 0;

// Visibilidade de cada jogo: Supabase (tabela game_flags) com fallback em localStorage
// quando não há conexão/Supabase configurado.
const GAME_FLAGS_LOCAL_KEY = 'comunica_game_flags';

function getLocalGameFlags() {
    try { return JSON.parse(localStorage.getItem(GAME_FLAGS_LOCAL_KEY) || '{}'); }
    catch (e) { return {}; }
}

function setLocalGameFlag(gameId, visible) {
    const flags = getLocalGameFlags();
    flags[gameId] = visible;
    localStorage.setItem(GAME_FLAGS_LOCAL_KEY, JSON.stringify(flags));
}

async function getGameVisibility(gameId) {
    if (gameId === 'complete-sentence' && isCompleteSentenceLocalDemo()) return true;
    const localFlags = getLocalGameFlags();
    if (localFlags[gameId] !== undefined) {
        return localFlags[gameId] !== false;
    }
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('game_flags').select('visible').eq('game_id', gameId).single();
            if (!error && data && data.visible !== undefined) {
                setLocalGameFlag(gameId, data.visible !== false);
                return data.visible !== false;
            }
        } catch (e) {}
    }
    return true;
}

async function toggleGameVisibility(gameId, currentVisible) {
    const newVisible = !currentVisible;
    setLocalGameFlag(gameId, newVisible);
    if (supabaseClient) {
        try {
            await supabaseClient.from('game_flags').upsert({ game_id: gameId, visible: newVisible });
        } catch (e) {
            console.warn('Fallback local para game_flags:', e);
        }
    }
    renderActivityLists();
}

// --- MODULE FLAGS (Sidebar visibility) ---
const MODULE_FLAGS_LOCAL_KEY = 'comunica_module_flags';

// Fonte única dos módulos ligáveis/desligáveis — usada tanto pelo painel
// global do admin (renderAdminModulesPanel) quanto pelo modal do médico de
// liberação por paciente (openPatientModulesModal). Cadastrar um módulo novo
// aqui é o que basta pra ele aparecer nos dois lugares.
const ALL_MODULES = [
    { id: 'view-carometro', name: 'Carômetro', icon: 'fa-id-card' },
    { id: 'view-topics', name: 'Tópicos', icon: 'fa-folder-open' },
    { id: 'view-virtues', name: 'Fomes e Forças', icon: 'fa-star' },
    { id: 'view-keyboard', name: 'Teclado', icon: 'fa-keyboard' },
    { id: 'view-media', name: 'Mídias', icon: 'fa-play-circle' },
    { id: 'view-audio', name: 'Áudios', icon: 'fa-headphones' },
    { id: 'view-books', name: 'Livros', icon: 'fa-book' },
    { id: 'view-exercises', name: 'Exercícios', icon: 'fa-dumbbell' },
    { id: 'view-games', name: 'Jogos', icon: 'fa-gamepad' },
    { id: 'view-ia', name: 'Assistente IA', icon: 'fa-robot' }
];

function getLocalModuleFlags() {
    try { return JSON.parse(localStorage.getItem(MODULE_FLAGS_LOCAL_KEY) || '{}'); }
    catch (e) { return {}; }
}

function setLocalModuleFlag(moduleId, visible) {
    const flags = getLocalModuleFlags();
    flags[moduleId] = visible;
    localStorage.setItem(MODULE_FLAGS_LOCAL_KEY, JSON.stringify(flags));
}

async function loadModuleFlags() {
    let dbFlags = {};
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient.from('module_flags').select('*');
            if (!error && data) {
                data.forEach(row => { dbFlags[row.module_id] = row.visible; });
            }
        } catch (e) {}
    }
    const localFlags = getLocalModuleFlags();
    return { ...localFlags, ...dbFlags };
}

async function toggleModuleVisibility(moduleId, currentVisible) {
    const newVisible = !currentVisible;
    if (supabaseClient) {
        try {
            const { data, error: selectError } = await supabaseClient.from('module_flags').select('module_id').eq('module_id', moduleId).maybeSingle();
            
            let error;
            if (data) {
                const res = await supabaseClient.from('module_flags').update({ visible: newVisible }).eq('module_id', moduleId);
                error = res.error;
            } else {
                const res = await supabaseClient.from('module_flags').insert([{ module_id: moduleId, visible: newVisible }]);
                error = res.error;
            }

            if (error) throw error;
            await applyModuleVisibility();
            return;
        } catch (e) {
            console.warn('Fallback local para module_flags:', e);
        }
    }
    setLocalModuleFlag(moduleId, newVisible);
    await applyModuleVisibility();
}

async function applyModuleVisibility() {
    const flags = await loadModuleFlags();

    // Paciente começa zerado: um módulo só aparece se o médico liberou
    // explicitamente pra ele (patient_module_flags) — sem registro, fica
    // oculto (não cai mais na flag global). Desligar no admin continua
    // sendo master switch por cima disso: nem liberação do médico reativa
    // um módulo que o admin desligou globalmente.
    if (currentPatientId && supabaseClient) {
        try {
            const { data: patientFlags } = await supabaseClient
                .from('patient_module_flags').select('module_id, visible').eq('patient_id', currentPatientId);
            const releaseMap = new Map((patientFlags || []).map(r => [r.module_id, r.visible]));
            ALL_MODULES.forEach(mod => {
                const globallyDisabled = flags[mod.id] === false;
                flags[mod.id] = !globallyDisabled && releaseMap.get(mod.id) === true;
            });
        } catch (e) {
            console.warn('Erro ao carregar módulos do paciente:', e);
        }
    }

    const navButtons = document.querySelectorAll('.sidebar .nav-btn[data-view]');
    
    navButtons.forEach(btn => {
        const viewId = btn.dataset.view;
        if (viewId === 'view-admin' || viewId === 'view-core' || viewId === 'view-doctor-patients') return;
        
        if (flags[viewId] === false) {
            if (isAdmin) {
                btn.style.display = 'flex';
                btn.classList.add('card-hidden');
                btn.title = 'Oculto para usuários comuns';
            } else {
                btn.style.display = 'none';
            }
        } else {
            btn.style.display = 'flex';
            btn.classList.remove('card-hidden');
            btn.removeAttribute('title');
        }
    });
    renderAdminModulesPanel(flags);
    // Só agora (display já resolvido pra cada botão) revela a sidebar —
    // evita o pisca-pisca de ícone bloqueado aparecendo antes de sumir.
    document.querySelector('.sidebar')?.classList.remove('modules-pending');
}

function renderAdminModulesPanel(flags) {
    const container = document.getElementById('modules-toggles-container');
    if (!container) return;
    
    container.innerHTML = '';
    ALL_MODULES.forEach(mod => {
        const isVisible = flags[mod.id] !== false; // true by default
        
        const btn = document.createElement('div');
        btn.className = `word-btn` + (!isVisible ? ' card-hidden' : '');
        btn.style.position = 'relative'; // Ensure toggle switch positions correctly

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.innerHTML = `<i class="fas ${mod.icon} word-btn-icon" aria-hidden="true" style="color:var(--color-blue);"></i>`;

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = mod.name;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar módulo' : 'Exibir módulo');
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleModuleVisibility(mod.id, isVisible); };
        btn.appendChild(toggleBtn);
        
        if (isVisible) {
            btn.appendChild(createNotifyUsersButton(mod.name, 'Módulo'));
        }
        
        container.appendChild(btn);
    });
}
// Base seed_key de cada jogo com cartas em banco por médico (ver
// getOrCreateGameContainer/resolveGameContainer) — usado só pra checar se
// já existe conteúdo liberado antes de mostrar o atalho pro paciente.
// complete-sentence fica de fora: sempre tem as frases prontas embutidas no
// iframe (levels fixos em complete-frase.js), nunca fica vazio de verdade.
function baseSeedKeyForGameTile(gameId) {
    switch (gameId) {
        case 'memory': return MEMORY_CARDS_SEED_KEY;
        case 'memory-alphabet': return ALPHABET_MEMORY_SEED_KEY;
        case 'jogo2': return JOGO2_CARDS_SEED_KEY;
        case 'naming': return NAMING_SEED_KEY;
        case 'afasia': return AFASIA_SEED_KEY;
        default: return null;
    }
}

function hasReleasedGameContent(baseSeedKey) {
    const scopedKey = currentPatientDoctorUserId ? doctorScopedSeedKey(baseSeedKey, currentPatientDoctorUserId) : null;
    return lastMergedExercises.some(ex =>
        (ex.seedKey === baseSeedKey || (scopedKey && ex.seedKey === scopedKey)) &&
        ex.items && ex.items.length > 0
    );
}

async function renderActivityCards(container, activities, isCurrent = () => true) {
    if (!container) return;

    for (const game of activities) {
        const isVisible = await getGameVisibility(game.id);
        if (!isCurrent()) return;
        if (!isAdmin && !isVisible) continue;

        // Paciente só vê o atalho depois que o médico liberou algum conteúdo
        // daquele jogo especificamente pra ele — antes disso não tem nada
        // pra jogar (mesmo raciocínio de patient_exercise_flags nos outros
        // módulos, aplicado ao botão de entrada em vez de só ao conteúdo).
        if (!isAdmin && !isDoctor && currentPatientId) {
            const baseSeedKey = baseSeedKeyForGameTile(game.id);
            if (baseSeedKey && !hasReleasedGameContent(baseSeedKey)) continue;
        }

        const btn = document.createElement('button');
        btn.className = `word-btn ${game.styleClass}` + (isAdmin && !isVisible ? ' card-hidden' : '');

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.innerHTML = `<i class="fas ${game.icon} word-btn-icon" aria-hidden="true"></i>`;

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = game.title;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        if (isAdmin) {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
            toggleBtn.setAttribute('aria-label', isVisible ? 'Ocultar do usuário' : 'Publicar para o usuário');
            toggleBtn.setAttribute('role', 'switch');
            toggleBtn.setAttribute('aria-checked', String(isVisible));
            toggleBtn.onclick = (ev) => { ev.stopPropagation(); toggleGameVisibility(game.id, isVisible); };
            btn.appendChild(toggleBtn);

            const shouldNotifyUsers = container.id === 'grid-games-list'
                || exerciseActivities.some(activity => activity.id === game.id)
                || game.id === 'complete-sentence';
            if (isVisible && shouldNotifyUsers) {
                const category = container.id === 'grid-games-list' ? 'Jogo' : (game.id === 'complete-sentence' ? 'Jogo' : 'Atividade');
                btn.appendChild(createNotifyUsersButton(game.title, category));
            }
        }

        btn.addEventListener('click', () => openGame(game.id));
        container.appendChild(btn);
    }
}

let gamesFilterQuery = '';
async function renderGamesList() {
    const container = document.getElementById('grid-games-list');
    if (!container) return;
    const renderVersion = ++gamesRenderVersion;
    container.innerHTML = '';

    const filterBar = document.getElementById('games-filter-bar');
    if (filterBar) filterBar.style.display = 'flex';
    const gamesToRender = gamesFilterQuery.trim()
        ? gamesList.filter(game => titleMatchesQuery(game.title, gamesFilterQuery))
        : gamesList;

    await renderActivityCards(container, gamesToRender, () => renderVersion === gamesRenderVersion);
}

async function renderExerciseActivities() {
    const container = document.getElementById('grid-exercises');
    const renderVersion = ++exerciseActivitiesRenderVersion;
    // "naming"/"afasia" (Reconhecimento de Palavras/Imagem) saíram daqui —
    // Fase 24: viraram vários decks reais, um card por deck, já desenhados
    // por renderExerciseCards (na mesma grade). exerciseActivities continua
    // com as entradas intactas (openGame/resolveActivityTitle dependem
    // delas), só não desenha mais os atalhos fixos antigos.
    let staticActivities = exerciseActivities.filter(a => a.id !== 'naming' && a.id !== 'afasia');

    // Mesma busca por nome da grade de exercícios (renderExerciseCards) — sem
    // isso, cards estáticos como "Complete a Frase" ignoravam o filtro e
    // ficavam sempre visíveis, já que essa função roda de novo no fim de
    // renderExerciseCards pra desenhá-los junto na mesma grade.
    if (exerciseFilterQuery.trim()) {
        staticActivities = staticActivities.filter(a => titleMatchesQuery(a.title, exerciseFilterQuery));
    }

    await renderActivityCards(
        container,
        staticActivities,
        () => renderVersion === exerciseActivitiesRenderVersion
    );
}

function renderActivityLists() {
    renderGamesList();
    renderExerciseActivities();
    renderExerciseCards(lastMergedExercises);
}

function placeGamesBackButton(gameId) {
    const backButton = document.getElementById('btn-games-back');
    const editBar = document.getElementById('games-edit-bar');
    const gameContainers = {
        memory: 'game-memory-container',
        'memory-alphabet': 'game-alphabet-memory-container',
        jogo2: 'game-jogo2-container',
        'speech-naming': 'game-speech-naming-container'
    };
    const gameContainer = document.getElementById(gameContainers[gameId]);
    const gameHeader = gameContainer?.querySelector('.memory-header');

    if (backButton && gameHeader) gameHeader.appendChild(backButton);
    if (editBar) editBar.style.display = 'none';
}

function restoreGamesBackButton() {
    const backButton = document.getElementById('btn-games-back');
    const editBar = document.getElementById('games-edit-bar');

    if (backButton && editBar) editBar.appendChild(backButton);
    if (editBar) editBar.style.display = 'flex';
}

function openGame(gameId) {
    changeUsageSection('game:' + gameId);
    const isExerciseActivity = exerciseActivities.some(activity => activity.id === gameId);
    if (isExerciseActivity) {
        document.getElementById('grid-exercises').style.display = 'none';
        document.getElementById('exercises-header').style.display = 'none';
        document.getElementById('btn-exercises-back').style.display = 'flex';
    } else {
        document.getElementById('grid-games-list').style.display = 'none';
        const gamesFilterBar = document.getElementById('games-filter-bar');
        if (gamesFilterBar) gamesFilterBar.style.display = 'none';
        placeGamesBackButton(gameId);
        document.getElementById('btn-games-back').style.display = 'flex';
    }

    if (gameId === 'memory') {
        document.getElementById('game-memory-container').style.display = 'flex';
        startMemoryGame();
    } else if (gameId === 'naming') {
        document.getElementById('game-naming-container').style.display = 'flex';
        startNamingGame();
    } else if (gameId === 'memory-alphabet') {
        document.getElementById('game-alphabet-memory-container').style.display = 'flex';
        startAlphabetMemoryGame();
    } else if (gameId === 'jogo2') {
        const container = document.getElementById('game-jogo2-container');
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.width = '100%';
        container.style.height = '100%';
        showJogo2Setup();
    } else if (gameId === 'afasia') {
        document.getElementById('game-afasia-container').style.display = 'flex';
        startAfasiaGame();
    } else if (gameId === 'complete-sentence') {
        const container = document.getElementById('game-complete-sentence-container');
        const frame = document.getElementById('complete-sentence-frame');
        container.style.display = 'flex';
        if (!frame.src) refreshCompleteSentenceFrameSrc();
    } else if (gameId === 'speech-naming') {
        document.getElementById('game-speech-naming-container').style.display = 'flex';
        startSpeechNamingGame();
    }

    const activityInfo = getActivityTrackingMeta(gameId);
    if (activityInfo) {
        startUsageActivity(activityInfo.label, activityInfo.meta);
    }
}

function showExitConfirm() {
    const modal = document.getElementById('modal-exit-confirm');
    if (modal) modal.style.display = 'flex';
}

function clearAllJogo2Timeouts() {
    try { window.speechSynthesis.cancel(); } catch(e) {}
    resetJogo2PowerMeter();

    if (jogo2TurnTimeout) { clearTimeout(jogo2TurnTimeout); jogo2TurnTimeout = null; }
    if (jogo2CountdownInterval) { clearInterval(jogo2CountdownInterval); jogo2CountdownInterval = null; }
    if (jogo2RobotTurnTimeout) { clearTimeout(jogo2RobotTurnTimeout); jogo2RobotTurnTimeout = null; }
    if (jogo2RobotAnswerTimeout) { clearTimeout(jogo2RobotAnswerTimeout); jogo2RobotAnswerTimeout = null; }
    if (jogo2RobotChoiceTimeout) { clearTimeout(jogo2RobotChoiceTimeout); jogo2RobotChoiceTimeout = null; }
    if (jogo2RobotStartTimeout) { clearTimeout(jogo2RobotStartTimeout); jogo2RobotStartTimeout = null; }
    if (jogo2WalkStepTimeout) { clearTimeout(jogo2WalkStepTimeout); jogo2WalkStepTimeout = null; }
    if (jogo2WheelSpinTimeout) { clearTimeout(jogo2WheelSpinTimeout); jogo2WheelSpinTimeout = null; }
    if (jogo2CompleteCardTimeout) { clearTimeout(jogo2CompleteCardTimeout); jogo2CompleteCardTimeout = null; }
    if (jogo2SpeechTimeout) { clearTimeout(jogo2SpeechTimeout); jogo2SpeechTimeout = null; }

    if (typeof currentAudio !== 'undefined' && currentAudio) {
        try { currentAudio.pause(); } catch(e) {}
    }

    jogo2Started = false;
    strengthsBoardStarted = false;
    jogo2Animating = false;
    jogo2Rolling = false;
}

function closeGame() {
    stopUsageActivity('fechar-jogo');
    clearAllJogo2Timeouts();

    const activeView = document.querySelector('.nav-btn.active')?.dataset.view || 'view-games';
    changeUsageSection(activeView);

    const elGamesList = document.getElementById('grid-games-list');
    if (elGamesList) elGamesList.style.display = 'grid';

    const elGamesFilterBar = document.getElementById('games-filter-bar');
    if (elGamesFilterBar) elGamesFilterBar.style.display = 'flex';

    const elExercises = document.getElementById('grid-exercises');
    if (elExercises) elExercises.style.display = 'grid';

    const elGamesBack = document.getElementById('btn-games-back');
    if (elGamesBack) elGamesBack.style.display = 'none';

    const elExercisesBack = document.getElementById('btn-exercises-back');
    if (elExercisesBack) elExercisesBack.style.display = 'none';

    const elExercisesHeader = document.getElementById('exercises-header');
    if (elExercisesHeader) elExercisesHeader.style.display = (isAdmin || isDoctor) ? 'flex' : 'none';

    const elMemory = document.getElementById('game-memory-container');
    if (elMemory) elMemory.style.display = 'none';

    const elNaming = document.getElementById('game-naming-container');
    if (elNaming) elNaming.style.display = 'none';

    const elAlphabet = document.getElementById('game-alphabet-memory-container');
    if (elAlphabet) elAlphabet.style.display = 'none';

    const elAfasia = document.getElementById('game-afasia-container');
    if (elAfasia) elAfasia.style.display = 'none';

    const elSpeechNaming = document.getElementById('game-speech-naming-container');
    if (elSpeechNaming) elSpeechNaming.style.display = 'none';
    if (speechNamingRecording) {
        speechNamingRecording = false;
        stopWavRecording().catch(() => {}); // descarta a gravação em andamento, só solta o mic
    }

    const elCompleteSentence = document.getElementById('game-complete-sentence-container');
    if (elCompleteSentence) elCompleteSentence.style.display = 'none';

    const elStrengths = document.getElementById('game-strengths-board-container');
    if (elStrengths) elStrengths.style.display = 'none';

    const elJogo2 = document.getElementById('game-jogo2-container');
    if (elJogo2) elJogo2.style.display = 'none';

    document.getElementById('complete-sentence-frame')?.contentWindow?.postMessage({ type: 'complete-sentence:pause-audio' }, window.location.origin);
    
    // Resetar jogos ao fechar
    if (typeof showJogo2Setup === 'function') {
        showJogo2Setup();
    }
    
    restoreGamesBackButton();
}

// =============================================
// JORNADA DAS FORÇAS (tabuleiro)
// =============================================
const strengthsBoardSpaces = buildStrengthsBoardSpaces();

function buildStrengthsBoardSpaces() {
    const missionSpaces = [
        { virtue: 'sabedoria', label: 'Criatividade', icon: 'fa-lightbulb', question: 'O que você pode inventar para ajudar alguém hoje?' },
        { virtue: 'sabedoria', label: 'Curiosidade', icon: 'fa-magnifying-glass', question: 'Que pergunta você gostaria de fazer agora?' },
        { virtue: 'sabedoria', label: 'Perspectiva', icon: 'fa-eye', question: 'Que conselho você daria para um amigo?' },
        { virtue: 'coragem', label: 'Coragem', icon: 'fa-shield-heart', question: 'Conte uma vez em que você tentou mesmo com medo.' },
        { virtue: 'coragem', label: 'Perseverança', icon: 'fa-mountain', question: 'O que você faz quando algo parece difícil?' },
        { virtue: 'coragem', label: 'Honestidade', icon: 'fa-handshake', question: 'Como podemos falar a verdade com respeito?' },
        { virtue: 'humanidade', label: 'Bondade', icon: 'fa-heart', question: 'Escolha uma forma de ajudar alguém hoje.' },
        { virtue: 'humanidade', label: 'Amor', icon: 'fa-hand-holding-heart', question: 'Quem é uma pessoa importante para você?' },
        { virtue: 'humanidade', label: 'Inteligência social', icon: 'fa-people-arrows', question: 'Como você percebe que alguém está feliz ou triste?' },
        { virtue: 'justica', label: 'Justiça', icon: 'fa-scale-balanced', question: 'O que é ser justo em uma brincadeira?' },
        { virtue: 'justica', label: 'Trabalho em equipe', icon: 'fa-people-group', question: 'Como você pode colaborar com o grupo?' },
        { virtue: 'justica', label: 'Liderança', icon: 'fa-star', question: 'Como um líder pode cuidar bem das pessoas?' },
        { virtue: 'temperanca', label: 'Autocontrole', icon: 'fa-spa', question: 'Mostre uma estratégia para se acalmar.' },
        { virtue: 'temperanca', label: 'Prudência', icon: 'fa-traffic-light', question: 'Quando é bom parar e pensar antes de agir?' },
        { virtue: 'temperanca', label: 'Perdão', icon: 'fa-dove', question: 'O que ajuda depois de uma briga?' },
        { virtue: 'transcendencia', label: 'Gratidão', icon: 'fa-hands-holding-heart', question: 'Diga uma coisa pela qual você agradece.' },
        { virtue: 'transcendencia', label: 'Esperança', icon: 'fa-sun', question: 'O que você espera que aconteça de bom?' },
        { virtue: 'transcendencia', label: 'Humor', icon: 'fa-face-laugh-beam', question: 'Compartilhe algo que faz você rir.' }
    ];
    const challenges = {
        8: { type: 'challenge', label: 'Volte 1', icon: 'fa-rotate-left', virtue: 'desafio', challenge: { type: 'back', amount: 1 }, question: 'Desafio: volte uma casa no tabuleiro.' },
        17: { type: 'challenge', label: 'Volte 3', icon: 'fa-backward', virtue: 'desafio', challenge: { type: 'back', amount: 3 }, question: 'Desafio: volte três casas no tabuleiro.' },
        27: { type: 'challenge', label: 'Volte ao início', icon: 'fa-house', virtue: 'desafio', challenge: { type: 'start' }, question: 'Desafio: volte para a partida.' },
        36: { type: 'challenge', label: 'Volte 1', icon: 'fa-rotate-left', virtue: 'desafio', challenge: { type: 'back', amount: 1 }, question: 'Desafio: volte uma casa no tabuleiro.' },
        44: { type: 'challenge', label: 'Volte 3', icon: 'fa-backward', virtue: 'desafio', challenge: { type: 'back', amount: 3 }, question: 'Desafio: volte três casas no tabuleiro.' }
    };

    const spaces = [{ type: 'start', label: 'Partida', icon: 'fa-flag', virtue: 'partida' }];
    let missionIndex = 0;
    for (let boardNumber = 2; boardNumber <= 49; boardNumber++) {
        if (challenges[boardNumber]) {
            spaces.push(challenges[boardNumber]);
        } else {
            spaces.push(missionSpaces[missionIndex % missionSpaces.length]);
            missionIndex++;
        }
    }
    spaces.push({ type: 'finish', label: 'Chegada', icon: 'fa-trophy', virtue: 'chegada' });
    return spaces;
}

let strengthsBoardPosition = 0;
let strengthsBoardStarted = false;
let pendingStrengthsChallenge = null;
let strengthsBoardRolling = false;
let strengthsBoardWaitingCard = false;
let activeStrengthsPlayerIndex = 0;
let selectedStrengthsPlayerCount = 2;
const strengthsBoardPlayers = [
    { name: 'Jogador 1', position: 0 },
    { name: 'Jogador 2', position: 0 },
    { name: 'Jogador 3', position: 0 },
    { name: 'Jogador 4', position: 0 }
];
const strengthsBoardTrackPositions = buildStrengthsBoardTrackPositions();
const strengthsBoardTurnSpaces = new Set([6, 13, 21, 26, 34, 39, 47]);

function buildStrengthsBoardTrackPositions() {
    const segments = [
        [[1, 1], [1, 6]],
        [[2, 6], [2, 12]],
        [[3, 12], [3, 5]],
        [[4, 5], [4, 1]],
        [[5, 1], [5, 8]],
        [[6, 8], [6, 12]],
        [[7, 12], [7, 5]],
        [[8, 5], [8, 3]]
    ];

    return segments.flatMap(([start, end]) => {
        const [startRow, startColumn] = start;
        const [endRow, endColumn] = end;
        const rowStep = Math.sign(endRow - startRow);
        const columnStep = Math.sign(endColumn - startColumn);
        const steps = Math.max(Math.abs(endRow - startRow), Math.abs(endColumn - startColumn));

        return Array.from({ length: steps + 1 }, (_, step) => [
            startRow + (rowStep * step),
            startColumn + (columnStep * step)
        ]);
    });
}

function announceStrengthsBoard(message) {
    const live = document.getElementById('strengths-status-live');
    if (live) live.textContent = message;
}

function getActiveStrengthsPlayer() {
    return strengthsBoardPlayers[activeStrengthsPlayerIndex];
}

function getStrengthsActivePlayers() {
    return strengthsBoardPlayers.slice(0, selectedStrengthsPlayerCount);
}

function syncStrengthsBoardPosition() {
    if (activeStrengthsPlayerIndex >= selectedStrengthsPlayerCount) {
        activeStrengthsPlayerIndex = 0;
    }
    strengthsBoardPosition = getActiveStrengthsPlayer().position;
}

function updateStrengthsSetupSelection() {
    document.querySelectorAll('.strengths-player-count-btn').forEach(button => {
        button.classList.toggle('active', Number(button.dataset.playerCount) === selectedStrengthsPlayerCount);
    });
}

function showStrengthsBoardSetup() {
    const container = document.getElementById('game-strengths-board-container');
    if (container) container.classList.add('is-setup');
    strengthsBoardStarted = false;
    strengthsBoardRolling = false;
    strengthsBoardWaitingCard = false;
    pendingStrengthsChallenge = null;
    activeStrengthsPlayerIndex = 0;
    strengthsBoardPlayers.forEach(player => {
        player.position = 0;
    });
    strengthsBoardPosition = 0;
    updateStrengthsDieDisplay(null);
    updateStrengthsSetupSelection();
    renderStrengthsPlayerLegend();
    updateStrengthsCard(strengthsBoardSpaces[0]);
    const status = document.getElementById('strengths-position-status');
    if (status) status.textContent = 'Escolha os jogadores';
}

function renderStrengthsPlayerLegend() {
    const legend = document.getElementById('strengths-player-legend');
    if (!legend) return;

    legend.innerHTML = getStrengthsActivePlayers().map((player, index) => `
        <span class="strengths-player-chip ${index === activeStrengthsPlayerIndex ? 'active' : ''}">
            <span class="strengths-player-pin player-${index + 1}" aria-hidden="true">${index + 1}</span>
            ${player.name}
        </span>
    `).join('');
}

function advanceStrengthsPlayerTurn() {
    if (!strengthsBoardStarted) return;
    activeStrengthsPlayerIndex = (activeStrengthsPlayerIndex + 1) % selectedStrengthsPlayerCount;
    syncStrengthsBoardPosition();
    renderStrengthsBoard();
    updateStrengthsCard(strengthsBoardSpaces[strengthsBoardPosition]);
    announceStrengthsBoard(`Agora é a vez ${getPreposicaoDoDa(getActiveStrengthsPlayer().name)} ${getActiveStrengthsPlayer().name}.`);
}

function renderStrengthsBoard() {
    const path = document.getElementById('strengths-board-path');
    if (!path) return;

    syncStrengthsBoardPosition();
    path.innerHTML = '';
    strengthsBoardSpaces.forEach((space, index) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = `strengths-space virtue-${space.virtue}`;
        const [row, column] = strengthsBoardTrackPositions[index] || [1, index + 1];
        tile.style.gridRow = row;
        tile.style.gridColumn = column;
        if (index === strengthsBoardPosition) tile.classList.add('active');
        if (space.type === 'start') tile.classList.add('start');
        if (space.type === 'finish') tile.classList.add('finish');
        tile.setAttribute('aria-label', `${index + 1}. ${space.label}`);
        const playerPins = getStrengthsActivePlayers()
            .map((player, playerIndex) => player.position === index ? `
                <span class="strengths-player-pin player-${playerIndex + 1} ${playerIndex === activeStrengthsPlayerIndex ? 'active' : ''}" title="${player.name}" aria-label="${player.name}">
                    ${playerIndex + 1}
                </span>
            ` : '')
            .join('');
        tile.innerHTML = `
            <span class="strengths-space-number">${index + 1}</span>
            ${index === strengthsBoardPosition ? `<strong class="strengths-space-current-label">${space.label}</strong>` : ''}
            ${strengthsBoardTurnSpaces.has(index + 1) ? '<span class="strengths-turn-arrow" aria-hidden="true">↳</span>' : ''}
            ${playerPins ? `<span class="strengths-player-pins">${playerPins}</span>` : ''}
        `;
        path.appendChild(tile);
    });

    const status = document.getElementById('strengths-position-status');
    const currentSpace = strengthsBoardSpaces[strengthsBoardPosition];
    if (status) status.textContent = `${getActiveStrengthsPlayer().name}: ${currentSpace.label} (${strengthsBoardPosition + 1}/${strengthsBoardSpaces.length})`;
    renderStrengthsPlayerLegend();
}

function flipStrengthsCard(card) {
    card.classList.remove('is-flipping');
    void card.offsetWidth;
    card.classList.add('is-flipping');
}

function updateStrengthsCard(space, roll = null, shouldFlip = false) {
    const card = document.getElementById('strengths-current-card');
    const completeBtn = document.getElementById('btn-strengths-complete');
    if (!card) return;
    pendingStrengthsChallenge = null;

    if (space.type === 'start') {
        card.className = 'strengths-card strengths-card-back';
        card.innerHTML = `
            <span class="strengths-card-question" aria-hidden="true">?</span>
            <span class="strengths-card-kicker">Partida</span>
            <h3>Jogue o dado para revelar a carta</h3>
            <p>Avance pela trilha das forças e descubra sua atividade.</p>
        `;
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
        }
        if (shouldFlip) flipStrengthsCard(card);
        return;
    }

    if (space.type === 'finish') {
        card.className = 'strengths-card virtue-chegada';
        card.innerHTML = `
            <span class="strengths-card-kicker">Chegada</span>
            <i class="fas fa-trophy strengths-card-icon" aria-hidden="true"></i>
            <h3>Você completou a jornada</h3>
            <div class="strengths-card-activity">
                <strong>Atividade final</strong>
                <p>Escolha uma força que você usou durante o jogo e compartilhe com o grupo.</p>
            </div>
        `;
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
        }
        if (shouldFlip) flipStrengthsCard(card);
        return;
    }

    if (space.type === 'challenge') {
        pendingStrengthsChallenge = space.challenge;
        card.className = 'strengths-card virtue-desafio';
        card.innerHTML = `
            <span class="strengths-card-kicker">Casa ${strengthsBoardPosition + 1}${roll ? ` | Dado: ${roll}` : ''}</span>
            <i class="fas ${space.icon} strengths-card-icon" aria-hidden="true"></i>
            <h3>${space.label}</h3>
            <div class="strengths-card-activity">
                <strong>Desafio</strong>
                <p>${space.question}</p>
            </div>
        `;
        if (completeBtn) {
            completeBtn.disabled = false;
            completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Aplicar desafio';
        }
        if (shouldFlip) flipStrengthsCard(card);
        return;
    }

    card.className = `strengths-card virtue-${space.virtue}`;
    card.innerHTML = `
        <span class="strengths-card-kicker">Casa ${strengthsBoardPosition + 1}${roll ? ` | Dado: ${roll}` : ''}</span>
        <i class="fas ${space.icon} strengths-card-icon" aria-hidden="true"></i>
        <h3>${space.label}</h3>
        <div class="strengths-card-activity">
            <strong>Atividade</strong>
            <p>${space.question}</p>
        </div>
    `;
    if (completeBtn) {
        completeBtn.disabled = false;
        completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
    }
    if (shouldFlip) flipStrengthsCard(card);
}

function startStrengthsBoardGame(playerCount = selectedStrengthsPlayerCount) {
    selectedStrengthsPlayerCount = Math.min(4, Math.max(1, Number(playerCount) || 2));
    const container = document.getElementById('game-strengths-board-container');
    if (container) container.classList.remove('is-setup');
    strengthsBoardPosition = 0;
    strengthsBoardStarted = true;
    pendingStrengthsChallenge = null;
    strengthsBoardRolling = false;
    strengthsBoardWaitingCard = false;
    activeStrengthsPlayerIndex = 0;
    strengthsBoardPlayers.forEach(player => {
        player.position = 0;
    });
    updateStrengthsDieDisplay(null);
    renderStrengthsBoard();
    updateStrengthsCard(strengthsBoardSpaces[0]);
    registerUsageCatalog('activity', 'Jogo: Jornada das Forças', {
        key: 'game:strengths-board',
        group: 'Jogos'
    });
    trackUsageActivity('Jogo: Jornada das Forças', {
        key: 'game:strengths-board',
        group: 'Jogos',
        detail: 'Jogo aberto'
    });
}

function updateStrengthsDieDisplay(value, isRolling = false) {
    const die = document.getElementById('strengths-die-display');
    const number = document.getElementById('strengths-die-number');
    if (!die || !number) return;

    die.classList.toggle('rolling', isRolling);
    number.textContent = value || '-';
}

function rollStrengthsBoardDie() {
    if (!strengthsBoardStarted) {
        announceStrengthsBoard('Escolha quantos jogadores vão jogar e inicie a partida.');
        speak('Escolha quantos jogadores vão jogar e inicie a partida.');
        return;
    }
    if (strengthsBoardPosition >= strengthsBoardSpaces.length - 1) return;
    if (strengthsBoardRolling) return;
    if (strengthsBoardWaitingCard) {
        announceStrengthsBoard('Conclua a carta antes de jogar novamente.');
        speak('Conclua a carta antes de jogar novamente.');
        return;
    }

    strengthsBoardRolling = true;
    const roll = Math.floor(Math.random() * 6) + 1;
    const rollButton = document.getElementById('btn-strengths-roll');
    if (rollButton) rollButton.disabled = true;

    let ticks = 0;
    const interval = setInterval(() => {
        if (!strengthsBoardStarted) {
            clearInterval(interval);
            return;
        }
        ticks++;
        updateStrengthsDieDisplay(Math.floor(Math.random() * 6) + 1, true);

        if (ticks >= 8) {
            clearInterval(interval);
            if (!strengthsBoardStarted) return;
            updateStrengthsDieDisplay(roll, false);

            const activePlayer = getActiveStrengthsPlayer();
            const previousPosition = strengthsBoardPosition;
            activePlayer.position = Math.min(activePlayer.position + roll, strengthsBoardSpaces.length - 1);
            syncStrengthsBoardPosition();
            const movedSpaces = strengthsBoardPosition - previousPosition;
            const currentSpace = strengthsBoardSpaces[strengthsBoardPosition];
            strengthsBoardWaitingCard = currentSpace.type !== 'finish';

            renderStrengthsBoard();
            updateStrengthsCard(currentSpace, roll, true);
            announceStrengthsBoard(`${activePlayer.name}, você tirou o número ${roll}. Você andou ${movedSpaces} casa${movedSpaces === 1 ? '' : 's'} e caiu em ${currentSpace.label}.`);
            speak(`${activePlayer.name}, você tirou o número ${roll}.`);

            strengthsBoardRolling = false;
            if (rollButton) rollButton.disabled = false;
        }
    }, 70);
}

function completeStrengthsBoardCard() {
    const completeBtn = document.getElementById('btn-strengths-complete');
    if (pendingStrengthsChallenge) {
        const challenge = pendingStrengthsChallenge;
        const activePlayer = getActiveStrengthsPlayer();
        const previousPosition = strengthsBoardPosition;

        if (challenge.type === 'back') {
            activePlayer.position = Math.max(0, activePlayer.position - challenge.amount);
        } else if (challenge.type === 'start') {
            activePlayer.position = 0;
        }

        syncStrengthsBoardPosition();
        pendingStrengthsChallenge = null;
        strengthsBoardWaitingCard = false;
        renderStrengthsBoard();
        updateStrengthsCard(strengthsBoardSpaces[strengthsBoardPosition], null, true);

        const moved = previousPosition - strengthsBoardPosition;
        const message = challenge.type === 'start'
            ? `${activePlayer.name}, desafio aplicado. Você voltou para a partida.`
            : `${activePlayer.name}, desafio aplicado. Você voltou ${moved} casa${moved === 1 ? '' : 's'}.`;
        announceStrengthsBoard(message);
        speak(message);
        setTimeout(advanceStrengthsPlayerTurn, 900);
        return;
    }

    if (completeBtn) completeBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i> Concluir carta';
    strengthsBoardWaitingCard = false;
    announceStrengthsBoard(`${getActiveStrengthsPlayer().name} concluiu a carta.`);
    speak('Muito bem!');
    advanceStrengthsPlayerTurn();
}

// =============================================
// JOGO 2: TRILHA DOS INSETOS (jogo2)
// =============================================
const jogo2Spaces = buildJogo2Spaces();

function buildJogo2Spaces() {
    const strengthNames = {
        sabedoria: ['Criatividade', 'Curiosidade', 'Pensamento Crítico', 'Amor ao Aprendizado', 'Perspectiva'],
        coragem: ['Bravura', 'Perseverança', 'Honestidade', 'Entusiasmo'],
        humanidade: ['Amor', 'Bondade', 'Inteligência Social'],
        justica: ['Trabalho em Equipe', 'Equidade', 'Liderança'],
        temperanca: ['Perdão', 'Humildade', 'Prudência', 'Autocontrole'],
        transcendencia: ['Apreciação da Beleza', 'Gratidão', 'Esperança', 'Humor', 'Espiritualidade']
    };

    const spaces = [{ type: 'start', label: 'Início', name: 'Início', icon: 'fa-flag', virtue: 'start' }];
    
    const virtuesOrder = ['sabedoria', 'coragem', 'humanidade', 'justica', 'temperanca', 'transcendencia'];
    const counters = { sabedoria: 0, coragem: 0, humanidade: 0, justica: 0, temperanca: 0, transcendencia: 0 };
    
    const exagerouChallenge = { 
        type: 'challenge', 
        label: 'Exagerou na Força! 💥', 
        name: 'Exagerou na Força 💥', 
        icon: 'fa-hand-rock', 
        virtue: 'exagerou_forca', 
        challenge: { type: 'back_to_start' }, 
        question: 'Você exagerou na força! Responda corretamente para se autorregular, ou volte ao Início!' 
    };

    const penaltySpace = { type: 'normal', label: 'Armadilha 🚫', name: 'Armadilha 🚫', icon: 'fa-ban', virtue: 'penalidade' };

    const specialChallenges = {
        8:  exagerouChallenge,
        13: penaltySpace,
        15: { type: 'challenge', label: 'Teia de Aranha 🕷️', name: 'Desafio 🕷️', icon: 'fa-spider', virtue: 'desafio', challenge: { type: 'back', amount: 2 }, question: 'Você se enroscou na teia! Responda corretamente para se soltar, ou volte 2 casas.' },
        20: exagerouChallenge,
        23: penaltySpace,
        25: { type: 'challenge', label: 'Voo da Borboleta 🦋', name: 'Desafio 🦋', icon: 'fa-wind', virtue: 'desafio', challenge: { type: 'forward', amount: 3 }, question: 'A borboleta te levou no vento! Responda corretamente e avance 3 casas!' },
        28: exagerouChallenge,
        35: { type: 'challenge', label: 'Abelha Apressada 🐝', name: 'Desafio 🐝', icon: 'fa-bolt', virtue: 'desafio', challenge: { type: 'forward', amount: 1 }, question: 'A abelhinha te deu uma carona! Responda corretamente e avance 1 casa!' },
        36: penaltySpace,
        45: { type: 'challenge', label: 'Caminho da Formiga 🐜', name: 'Desafio 🐜', icon: 'fa-route', virtue: 'desafio', challenge: { type: 'back', amount: 3 }, question: 'A folha estava muito pesada no caminho! Responda corretamente ou volte 3 casas.' }
    };

    for (let i = 1; i <= 48; i++) {
        if (specialChallenges[i]) {
            spaces.push(specialChallenges[i]);
        } else {
            const v = virtuesOrder[i % virtuesOrder.length];
            const list = strengthNames[v] || ['Força'];
            const name = list[counters[v] % list.length];
            counters[v]++;

            spaces.push({
                type: 'normal',
                label: name,
                name: name,
                icon: 'fa-star',
                virtue: v
            });
        }
    }
    
    spaces.push({ type: 'finish', label: 'Chegada', name: 'Chegada', icon: 'fa-trophy', virtue: 'finish' });
    return spaces;
}

// Perguntas padrão de múltipla escolha baseadas nas Forças de Caráter da VIA
// Perguntas padrão de múltipla escolha baseadas nas Forças de Caráter da VIA
const jogo2DefaultQuestions = {
    sabedoria: [
        { q: 'O que significa ter curiosidade no nosso dia a dia?', opt: ['Querer aprender coisas novas e interessantes', 'Ficar com preguiça de fazer qualquer coisa', 'Dormir o dia todo na cama'], ans: 0 },
        { q: 'Usar a criatividade significa o que?', opt: ['Copiar exatamente o desenho do colega de mesa', 'Inventar ideias novas e brincadeiras divertidas', 'Ficar olhando para a parede sem fazer nada'], ans: 1 },
        { q: 'Uma pessoa que tem amor ao aprendizado geralmente gosta de...', opt: ['Ler livros, estudar e fazer perguntas curiosas', 'Jogar lixo no chão do jardim', 'Esconder os materiais de estudo'], ans: 0 }
    ],
    coragem: [
        { q: 'O que significa ter persistência (perseverança) nas tarefas?', opt: ['Desistir no primeiro erro ou dificuldade', 'Continuar tentando com calma até conseguir vencer', 'Ficar muito bravo e rasgar o papel'], ans: 1 },
        { q: 'Demonstrar coragem (bravura) significa...', opt: ['Enfrentar os medos mesmo com friozinho na barriga', 'Bater nos outros para mostrar força', 'Fugir correndo de qualquer brincadeira nova'], ans: 0 },
        { q: 'Falar sempre a verdade, mesmo quando é difícil, é um ato de...', opt: ['Medo e vergonha', 'Sorte ou acaso', 'Integridade e honestidade com as pessoas'], ans: 2 }
    ],
    humanidade: [
        { q: 'Qual dessas atitudes fofas demonstra generosidade com o outro?', opt: ['Guardar todos os seus brinquedos só para você', 'Compartilhar o lanche com um amigo que está com fome', 'Ignorar um colega que está chorando no canto'], ans: 1 },
        { q: 'Nós demonstramos inteligência social quando conseguimos...', opt: ['Perceber como as outras pessoas estão se sentindo e ajudar', 'Gritar bem alto para chamar a atenção de todos', 'Não ouvir o que ninguém tem a nos dizer'], ans: 0 },
        { q: 'O amor verdadeiro entre família e amigos é demonstrado com...', opt: ['Abraços sinceros, palavras de carinho e respeito', 'Brigas físicas e empurrões na hora da fila', 'Falta de atenção e não dar importância a eles'], ans: 0 }
    ],
    justica: [
        { q: 'O que significa fazer um bom trabalho em equipe?', opt: ['Querer fazer tudo sozinho sem ajuda de ninguém', 'Ajudar os companheiros para alcançar um objetivo comum', 'Atrapalhar o trabalho dos outros do grupo'], ans: 1 },
        { q: 'Uma atitude justa e igualitária seria...', opt: ['Dividir os brinquedos e doces igualmente entre todos', 'Pegar a maior parte para si e deixar os outros sem', 'Não deixar ninguém brincar com as coisas da sala'], ans: 0 },
        { q: 'Um bom líder na hora do jogo ou brincadeira faz o que?', opt: ['Manda em todo mundo com grosseria e exige obediência', 'Escuta e incentiva todos do grupo a participar', 'Joga a bola sozinho e não passa para ninguém'], ans: 1 }
    ],
    temperanca: [
        { q: 'Quando um amigo nos pede desculpas sinceras, o ideal é...', opt: ['Ficar de mal e bravo com ele para sempre', 'Oferecer o nosso perdão e fazer as pazes alegremente', 'Gritar apontando os erros dele bem alto'], ans: 1 },
        { q: 'O que é ter autorregulação (autocontrole)?', opt: ['Respirar fundo para se acalmar quando estiver irritado', 'Chutar a parede ou jogar as coisas no chão', 'Chorar e gritar sem parar até conseguir o que quer'], ans: 0 },
        { q: 'Uma pessoa humilde age de qual maneira?', opt: ['Acha que é melhor e mais esperta que todo mundo', 'Reconhece suas qualidades sem precisar se gabar aos outros', 'Nunca aceita ajuda de ninguém porque acha que sabe tudo'], ans: 1 }
    ],
    transcendencia: [
        { q: 'O que significa demonstrar gratidão pelas coisas?', opt: ['Agradecer pelas coisas boas que temos e pelas ajudas', 'Reclamar de tudo o tempo todo com cara feia', 'Esquecer quem foi bondoso e nos ajudou antes'], ans: 0 },
        { q: 'Ter esperança em relação ao amanhã significa...', opt: ['Acreditar que coisas muito boas vão acontecer no futuro', 'Achar que tudo vai dar errado e dar as costas', 'Desistir de todos os seus sonhos e planos'], ans: 0 },
        { q: 'Como podemos espalhar alegria usando o nosso bom humor?', opt: ['Contando piadas ou fazendo brincadeiras fofas para alegrar', 'Rindo do tombo de um colega que se machucou no pátio', 'Fazendo cara de bravo e falando alto com as pessoas'], ans: 0 }
    ],
    desafio: [
        { q: 'Qual dessas opções é uma fruta vermelha e docinha?', opt: ['Banana amarela', 'Morango vermelho', 'Limão verde'], ans: 1 },
        { q: 'O que usamos para limpar e escovar os dentes após comer?', opt: ['Escova de dentes', 'Pente de cabelo', 'Sabonete de banho'], ans: 0 },
        { q: 'Qual objeto usamos para beber água fresca ou suco de frutas?', opt: ['Copo', 'Prato', 'Garfo'], ans: 0 }
    ]
};

let jogo2Position = 0;
let jogo2Started = false;
let pendingJogo2Challenge = null;
let jogo2Rolling = false;
let jogo2WaitingCard = false;
let activeJogo2PlayerIndex = 0;
let selectedJogo2PlayerCount = 2;
let jogo2SoloMode = false;
let jogo2TurnTimeout = null;
let jogo2CountdownInterval = null;
let jogo2RobotTurnTimeout = null;
let jogo2RobotAnswerTimeout = null;
let jogo2RobotChoiceTimeout = null;
let jogo2RobotStartTimeout = null;
let jogo2WalkStepTimeout = null;
let jogo2WheelSpinTimeout = null;
let jogo2CompleteCardTimeout = null;
let jogo2Animating = false; // Flag para bloquear ações durante animação de peão
let jogo2WheelRotation = 0;
let jogo2PowerHintSpoken = false;
let jogo2CustomCards = []; // Perguntas customizadas cadastradas pelo usuário
let jogo2EditingCardId = null; // Rastreia se estamos editando uma carta existente
const JOGO2_CARDS_SEED_KEY = 'jogo2-cards-container';
const JOGO2_CARDS_TITLE = 'Cartas da Trilha de Aprendizado de Forças|orange';
const JOGO2_CARD_ROLE = 'jogo2-card';
const JOGO2_VIRTUE_META = {
    sabedoria: { label: 'Sabedoria', icon: '🧠', color: '#d8eba5', textColor: '#334155' },
    coragem: { label: 'Coragem', icon: '💪', color: '#ff5757', textColor: '#7f1d1d' },
    humanidade: { label: 'Humanidade', icon: '❤️', color: '#ffad18', textColor: '#7c2d12' },
    justica: { label: 'Justiça', icon: '⚖️', color: '#ffd400', textColor: '#713f12' },
    temperanca: { label: 'Temperança', icon: '🛡️', color: '#8bd3e1', textColor: '#075985' },
    moderacao: { label: 'Moderação', icon: '🛡️', color: '#8bd3e1', textColor: '#075985' },
    transcendencia: { label: 'Transcendência', icon: '✨', color: '#b568e8', textColor: '#581c87' },
    desafio: { label: 'Desafio', icon: '❓', color: '#8b5cf6', textColor: '#4c1d95' }
};

function inferExerciseSeedKeyFromTitle(title) {
    const normalized = (title || '').split('|')[0].trim();
    const seedMap = {
        'Cartas do Jogo da Memória': MEMORY_CARDS_SEED_KEY,
        'Cartas do Jogo da Memória do Alfabeto': ALPHABET_MEMORY_SEED_KEY,
        'Jogo de Reconhecimento': NAMING_SEED_KEY,
        'Reconhecimento de Imagem': AFASIA_SEED_KEY,
        'Cartas da Trilha de Aprendizado de Forças': JOGO2_CARDS_SEED_KEY
    };
    return seedMap[normalized] || null;
}

// ============================================================
// NOVOS RECURSOS LÚDICOS DO JOGO 2 (Sons, Falas e Efeitos)
// ============================================================

function playTickSound() {
    try {
        if (!("AudioContext" in window || "webkitAudioContext" in window)) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(900, ctx.currentTime);
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.03);
        osc.start();
        osc.stop(ctx.currentTime + 0.04);
    } catch (e) {}
}

function playPawnJumpSound() {
    try {
        if (!("AudioContext" in window || "webkitAudioContext" in window)) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.12);
        osc.frequency.exponentialRampToValueAtTime(280, ctx.currentTime + 0.22);
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);
        osc.start();
        osc.stop(ctx.currentTime + 0.26);
    } catch (e) {}
}

function playExplosionSound() {
    try {
        if (!("AudioContext" in window || "webkitAudioContext" in window)) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const bufferSize = ctx.sampleRate * 0.45;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(350, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.38);
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.42);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
    } catch (e) {}
}

function playWheelTicks(duration) {
    let delay = 50;
    let elapsed = 0;
    function tick() {
        if (elapsed >= duration - 150) return;
        playTickSound();
        const arrow = document.getElementById('jogo2-wheel-arrow');
        if (arrow) {
            arrow.classList.remove('arrow-click-vibe');
            void arrow.offsetWidth;
            arrow.classList.add('arrow-click-vibe');
        }
        delay += (elapsed / duration) * 48 + 4;
        elapsed += delay;
        setTimeout(tick, delay);
    }
    tick();
}

const JOGO2_OPPONENT_QUOTES = {
    0: { // Silvio Santos
        turnStart: [
            "Vou girar a roleta, ritmo de festa!",
            "Roda, roda, roda! Quem quer jogar?",
            "Lá vou eu, com muita alegria!",
            "Caaaalma, agora é a minha vez!"
        ],
        correctAnswer: [
            "Ceeeeeerta resposta! Ha-ha! Bem bolado!",
            "Olha aí! Você acertou! Muito bem!",
            "10 segundos de palmas, você merece!",
            "Esta foi fácil, mas eu sabia!"
        ],
        wrongAnswer: [
            "Errou! Que pena, voltou casas!",
            "Ih, você errou! Quem não sabe, não ganha!",
            "Não foi dessa vez, tente de novo!",
            "Ah, errou! Mas não desanime, roda de novo!"
        ],
        fellInTrap: [
            "Ih! Caí na armadilha! Que azar!",
            "Ah, não! Teia de aranha? Que coisa chata!",
            "Vou precisar tirar 4 para sair daqui..."
        ],
        wonGame: [
            "Ganhei! Ha-ha! Eu sou o campeão!",
            "Ritmo de festa! Eu ganhei o jogo!"
        ],
        lostGame: [
            "Parabéns! Você ganhou e merece o aviãozinho de dinheiro! Ha-ha!",
            "Você é o grande campeão! Muito bem!"
        ]
    },
    1: { // Hebe Camargo
        turnStart: [
            "Minha vez, que gracinha!",
            "Deixa eu rodar essa roleta maravilhosa!",
            "Vamos ver o que o destino reserva, querido!",
            "Ai que emoção, é a minha vez!"
        ],
        correctAnswer: [
            "Gente, que coisa mais linda! Acertou!",
            "Uma gracinha de resposta! Parabéns!",
            "Você é maravilhoso, acertou tudo!",
            "Nota dez! Uma resposta divina!"
        ],
        wrongAnswer: [
            "Ah, que pena! Mas faz parte, meu amor!",
            "Errou, querido. Mas você é tão gracioso!",
            "Que pena que errou, mas não fica triste, viu?",
            "Ah, voltou casas! Mas logo você recupera!"
        ],
        fellInTrap: [
            "Ai, meu Deus! Fiquei presa na teia!",
            "Que armadilha chata! Hebe presa? Jamais!",
            "Preciso de sorte para sair dessa!"
        ],
        wonGame: [
            "Eu ganhei! Que noite inesquecível, que gracinha!",
            "Vitória maravilhosa! Vocês são lindos!"
        ],
        lostGame: [
            "Você venceu! Que noite fantástica, você é uma gracinha!",
            "Parabéns, meu amor! Sua vitória foi linda de viver!"
        ]
    },
    2: { // Albert Einstein
        turnStart: [
            "Vez do pensamento científico!",
            "Girar a roleta é pura física estatística!",
            "Minha vez de formular a jogada!",
            "Vamos testar as variáveis desta vez."
        ],
        correctAnswer: [
            "Excelente! A lógica te levou do ponto A ao B!",
            "Genial! Resposta cientificamente precisa!",
            "Muito bem! Sua capacidade cognitiva é notável!",
            "Formulou perfeitamente o raciocínio!"
        ],
        wrongAnswer: [
            "A resposta contraria os fatos observados.",
            "Um pequeno desvio na hipótese. Voltou casas.",
            "Quem nunca errou nunca experimentou algo novo.",
            "Incorreto. Mas o erro faz parte do aprendizado!"
        ],
        fellInTrap: [
            "Um obstáculo gravitacional! Caí na armadilha.",
            "Preso na teia da incerteza. Preciso de um 4.",
            "A entropia me prendeu nesta casa."
        ],
        wonGame: [
            "Vitória! A imaginação superou os limites do tabuleiro!",
            "Fim do experimento. Eu venci!"
        ],
        lostGame: [
            "Sua inteligência superou minhas equações! Excelente vitória!",
            "Parabéns! Seus cálculos e respostas foram impecáveis."
        ]
    }
};

let jogo2SpeechTimeout = null;

function showOpponentSpeech(text) {
    if (!jogo2SoloMode) return;
    const opps = JOGO2_OPPONENTS_FIXED;
    const selIdx = getSelectedOpponentIndex();
    const opponent = opps[selIdx];
    if (!opponent) return;

    const bubble = document.getElementById('jogo2-opponent-bubble');
    const avatarImg = document.getElementById('jogo2-bubble-avatar-img');
    const nameEl = document.getElementById('jogo2-bubble-name');
    const textEl = document.getElementById('jogo2-bubble-text');

    if (!bubble || !avatarImg || !nameEl || !textEl) return;

    avatarImg.src = opponent.photo;
    nameEl.textContent = opponent.name;
    textEl.textContent = text;

    bubble.style.display = 'flex';
    bubble.style.animation = '';
    void bubble.offsetWidth;
    bubble.style.animation = 'bubble-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards';

    if (jogo2SpeechTimeout) clearTimeout(jogo2SpeechTimeout);
    jogo2SpeechTimeout = setTimeout(() => {
        bubble.style.animation = 'bubble-pop-out 0.25s ease-in forwards';
        setTimeout(() => {
            bubble.style.display = 'none';
            bubble.style.animation = '';
        }, 250);
    }, 4500);
}

function triggerOpponentQuote(type) {
    const activePlayer = getActiveJogo2Player();

    // 1. Mostrar o balão visual APENAS quando for o turno do jogador humano (reagindo às jogadas de quem está jogando)
    if (jogo2SoloMode && activeJogo2PlayerIndex === 0) {
        const selIdx = getSelectedOpponentIndex();
        const quotes = JOGO2_OPPONENT_QUOTES[selIdx];
        if (quotes && quotes[type]) {
            const list = quotes[type];
            const text = list[Math.floor(Math.random() * list.length)];
            showOpponentSpeech(text);
        }
    }

    // 2. Falar a narração neutra e objetiva padrão em áudio via TTS do sistema (evitando misturar vozes)
    playSystemFallbackTTS(type, activePlayer);
}

function playSystemFallbackTTS(type, activePlayer) {
    if (type === 'correctAnswer') {
        speak('Acertou! Parabéns!');
    } else if (type === 'wrongAnswer') {
        const currentSpace = jogo2Spaces[jogo2Position];
        const specialChallenge = (currentSpace && currentSpace.type === 'challenge') ? currentSpace.challenge : null;
        if (specialChallenge && specialChallenge.type === 'back_to_start') {
            speak('Resposta incorreta! Você volta para o início do jogo.');
        } else if ([13, 23, 36].includes(jogo2Position)) {
            speak('Resposta incorreta! Mas como já foi penalizado, você não volta casas.');
        } else {
            let penaltyAmount = 2;
            if (specialChallenge && specialChallenge.type === 'back') {
                penaltyAmount = specialChallenge.amount;
            }
            speak(`Resposta incorreta! Você volta ${penaltyAmount} ${penaltyAmount === 1 ? 'casa' : 'casas'}.`);
        }
    } else if (type === 'wonGame') {
        speak(`Parabéns, ${activePlayer.name}! Você completou a trilha!`);
    } else if (type === 'lostGame') {
        speak(`Fim de jogo! ${activePlayer.name} venceu a partida.`);
    } else if (type === 'turnStart') {
        speak(`Vez ${getPreposicaoDoDa(activePlayer.name)} ${activePlayer.name}.`);
    }
}


function triggerExplosionEffect(spaceIndex) {
    playExplosionSound();
    const overlay = document.getElementById('jogo2-effects-overlay');
    const spaceEl = document.querySelector(`.jogo2-space[data-space-index="${spaceIndex}"]`);
    const boardPanel = document.getElementById('jogo2-board-panel');
    if (!overlay || !spaceEl || !boardPanel) return;

    const parentRect = boardPanel.getBoundingClientRect();
    const rect = spaceEl.getBoundingClientRect();

    const effect = document.createElement('div');
    effect.className = 'special-effect-explosion';
    effect.style.position = 'absolute';
    effect.style.top = `${rect.top - parentRect.top + rect.height / 2}px`;
    effect.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
    effect.style.transform = 'translate(-50%, -50%)';
    effect.style.fontSize = '2.5rem';
    effect.textContent = '💥';
    
    overlay.appendChild(effect);

    effect.animate([
        { transform: 'translate(-50%, -50%) scale(0.5)', opacity: 1 },
        { transform: 'translate(-50%, -50%) scale(2.2)', opacity: 0 }
    ], {
        duration: 550,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
    });

    setTimeout(() => effect.remove(), 550);
}

function triggerSpiderWebEffect(spaceIndex) {
    const overlay = document.getElementById('jogo2-effects-overlay');
    const spaceEl = document.querySelector(`.jogo2-space[data-space-index="${spaceIndex}"]`);
    const boardPanel = document.getElementById('jogo2-board-panel');
    if (!overlay || !spaceEl || !boardPanel) return;

    const parentRect = boardPanel.getBoundingClientRect();
    const rect = spaceEl.getBoundingClientRect();

    const web = document.createElement('div');
    web.style.position = 'absolute';
    web.style.top = `${rect.top - parentRect.top + rect.height / 2}px`;
    web.style.left = `${rect.left - parentRect.left + rect.width / 2}px`;
    web.style.transform = 'translate(-50%, -50%)';
    web.style.fontSize = '3.5rem';
    web.style.zIndex = '10';
    web.textContent = '🕸️';
    web.style.pointerEvents = 'none';

    overlay.appendChild(web);

    web.animate([
        { transform: 'translate(-50%, -50%) scale(0.4) rotate(0deg)', opacity: 0 },
        { transform: 'translate(-50%, -50%) scale(1.25) rotate(15deg)', opacity: 1, offset: 0.25 },
        { transform: 'translate(-50%, -50%) scale(1.0) rotate(-15deg)', offset: 0.5 },
        { transform: 'translate(-50%, -50%) scale(1.05) rotate(8deg)', offset: 0.75 },
        { transform: 'translate(-50%, -50%) scale(1.0) rotate(0deg)', opacity: 1, offset: 0.9 },
        { transform: 'translate(-50%, -50%) scale(1.3) rotate(0deg)', opacity: 0 }
    ], {
        duration: 2600,
        easing: 'ease-in-out'
    });

    try {
        if ("AudioContext" in window || "webkitAudioContext" in window) {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.linearRampToValueAtTime(110, ctx.currentTime + 0.45);
            gain.gain.setValueAtTime(0.09, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
            osc.start();
            osc.stop(ctx.currentTime + 0.52);
        }
    } catch (e) {}

    setTimeout(() => web.remove(), 2600);
}

function triggerBeeOrButterflyEffect(fromPos, toPos, isButterfly) {
    const overlay = document.getElementById('jogo2-effects-overlay');
    const startEl = document.querySelector(`.jogo2-space[data-space-index="${fromPos}"]`);
    const endEl = document.querySelector(`.jogo2-space[data-space-index="${toPos}"]`);
    const boardPanel = document.getElementById('jogo2-board-panel');
    if (!overlay || !startEl || !endEl || !boardPanel) return;

    const parentRect = boardPanel.getBoundingClientRect();
    const startRect = startEl.getBoundingClientRect();
    const endRect = endEl.getBoundingClientRect();

    const startX = startRect.left - parentRect.left + startRect.width / 2;
    const startY = startRect.top - parentRect.top + startRect.height / 2;
    const endX = endRect.left - parentRect.left + endRect.width / 2;
    const endY = endRect.top - parentRect.top + endRect.height / 2;

    const flyer = document.createElement('div');
    flyer.className = 'flyer-effect';
    flyer.style.position = 'absolute';
    flyer.style.top = `${startY}px`;
    flyer.style.left = `${startX}px`;
    flyer.style.transform = 'translate(-50%, -50%)';
    flyer.style.fontSize = '2.8rem';
    flyer.style.zIndex = '60';
    flyer.textContent = isButterfly ? '🦋' : '🐝';

    overlay.appendChild(flyer);

    const trailInterval = setInterval(() => {
        const rect = flyer.getBoundingClientRect();
        const star = document.createElement('span');
        star.textContent = '✨';
        star.style.position = 'absolute';
        star.style.left = `${rect.left - parentRect.left + rect.width / 2 + (Math.random() * 12 - 6)}px`;
        star.style.top = `${rect.top - parentRect.top + rect.height / 2 + (Math.random() * 12 - 6)}px`;
        star.style.fontSize = '1.1rem';
        star.style.pointerEvents = 'none';
        star.style.zIndex = '55';
        overlay.appendChild(star);
        star.animate([
            { transform: 'scale(1) rotate(0deg)', opacity: 1 },
            { transform: 'scale(0.2) rotate(180deg)', opacity: 0 }
        ], { duration: 600 });
        setTimeout(() => star.remove(), 600);
    }, 45);

    flyer.animate([
        { left: `${startX}px`, top: `${startY}px`, transform: 'translate(-50%, -50%) scale(1)' },
        { left: `${(startX + endX) / 2}px`, top: `${Math.min(startY, endY) - 90}px`, transform: 'translate(-50%, -50%) scale(1.5)' },
        { left: `${endX}px`, top: `${endY}px`, transform: 'translate(-50%, -50%) scale(1)' }
    ], {
        duration: 1200,
        easing: 'ease-in-out'
    });

    try {
        if ("AudioContext" in window || "webkitAudioContext" in window) {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            if (isButterfly) {
                osc.frequency.setValueAtTime(320, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(640, ctx.currentTime + 1.0);
            } else {
                osc.frequency.setValueAtTime(160, ctx.currentTime);
                osc.frequency.linearRampToValueAtTime(190, ctx.currentTime + 0.3);
                osc.frequency.linearRampToValueAtTime(160, ctx.currentTime + 0.6);
                osc.frequency.linearRampToValueAtTime(190, ctx.currentTime + 0.9);
            }
            gain.gain.setValueAtTime(0.06, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.15);
            osc.start();
            osc.stop(ctx.currentTime + 1.25);
        }
    } catch (e) {}

    setTimeout(() => {
        clearInterval(trailInterval);
        flyer.remove();
    }, 1200);
}

// ============================================================
// TRILHA EM GRID CONTÍGUO – Estilo "Jogo da Geniação Contínua"
// Grade 11 colunas × 12 linhas.
// A trilha reproduz o formato espiral exato, com as quebras
// e espaços corretos entre os corredores.
// ============================================================

const JOGO2_GRID_COLS = 11;
const JOGO2_GRID_ROWS = 12;

const JOGO2_GRID_PATH = [
    // 1. Início: desce a borda esquerda
    [0,0], [0,1], [0,2], [0,3], 
    // 2. Curva para a direita e sobe formando o U inicial
    [1,3], [2,3], [3,3], [3,2], [3,1], [3,0],
    // 3. Topo indo para a direita
    [4,0], [5,0], [6,0], [7,0], [8,0], [9,0], [10,0],
    // 4. Desce toda a borda direita
    [10,1], [10,2], [10,3], [10,4], [10,5], [10,6], [10,7], [10,8], [10,9],
    // 5. Curva para a esquerda e desce um pequeno degrau
    [9,9], [8,9], [7,9], [7,10], [7,11],
    // 6. Vai até a borda esquerda pelo fundo
    [6,11], [5,11], [4,11], [3,11], [2,11], [1,11], [0,11],
    // 7. Sobe a borda esquerda (deixando gap com o início)
    [0,10], [0,9], [0,8], [0,7], [0,6], [0,5],
    // 8. Entra para a direita
    [1,5], [2,5],
    // 9. Desce formando o corredor final
    [2,6], [2,7], [2,8], [2,9]
];

const jogo2Players = [
    { name: 'Jogador 1', position: 0, avatar: 'azul', trapAttempts: 0 },
    { name: 'Jogador 2', position: 0, avatar: 'vermelho', trapAttempts: 0 }
];

// Cores vibrantes para cada virtude
function getSpaceVirtueColor(virtue, type) {
    if (type === 'start') return '#dc2626';
    if (type === 'finish') return '#f59e0b';
    const colors = {
        sabedoria:      '#d8eba5',
        coragem:        '#ff5757',
        humanidade:     '#ffad18',
        justica:        '#ffd400',
        temperanca:     '#8bd3e1',
        moderacao:      '#8bd3e1',
        transcendencia: '#b568e8',
        desafio:        '#8b5cf6',
        penalidade:     '#082b1d'
    };
    return colors[virtue] || getJogo2VirtueMeta(virtue).color || '#64748b';
}

function updateJogo2SVGRoute() {
    const svg = document.getElementById('jogo2-board-route-svg');
    if (svg) svg.style.display = 'none';
}


function announceJogo2(message) {
    const live = document.getElementById('jogo2-position-status');
    if (live) live.textContent = message;
}

function getActiveJogo2Player() {
    return jogo2Players[activeJogo2PlayerIndex];
}

function getJogo2ActivePlayers() {
    return jogo2Players.slice(0, selectedJogo2PlayerCount);
}

function isJogo2RobotTurn() {
    return jogo2SoloMode && activeJogo2PlayerIndex === 1;
}

function syncJogo2Position() {
    if (activeJogo2PlayerIndex >= selectedJogo2PlayerCount) {
        activeJogo2PlayerIndex = 0;
    }
    jogo2Position = getActiveJogo2Player().position;
}

function normalizeJogo2Virtue(value) {
    const normalized = (value || 'desafio')
        .toString()
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    const aliases = {
        justica: 'justica',
        moderacao: 'moderacao',
        temperanca: 'temperanca',
        trancendencia: 'transcendencia'
    };

    const virtue = aliases[normalized] || normalized;
    return JOGO2_VIRTUE_META[virtue] ? virtue : 'desafio';
}

function getJogo2VirtueMeta(virtue) {
    return JOGO2_VIRTUE_META[normalizeJogo2Virtue(virtue)] || JOGO2_VIRTUE_META.desafio;
}

function getJogo2MatchingVirtues(virtue) {
    const normalized = normalizeJogo2Virtue(virtue);
    if (normalized === 'temperanca' || normalized === 'moderacao') {
        return ['temperanca', 'moderacao'];
    }
    return [normalized];
}

function parseJogo2CardItem(item, fallbackIndex = 0) {
    let meta = {};
    try {
        meta = item.link ? JSON.parse(item.link) : {};
    } catch (e) {
        meta = {};
    }

    return {
        id: item.pair_id || item.pairId || item.id?.toString() || `jogo2-${fallbackIndex}`,
        question: item.word || meta.question || '',
        options: Array.isArray(meta.options) && meta.options.length >= 3 ? meta.options.slice(0, 3) : ['', '', ''],
        answerIndex: Number.isInteger(Number(meta.answerIndex)) ? Number(meta.answerIndex) : 0,
        virtue: normalizeJogo2Virtue(meta.virtue),
        icon: meta.icon || getJogo2VirtueMeta(meta.virtue).icon,
        spaceNumber: Number(meta.spaceNumber) || 0
    };
}

function serializeJogo2CardItem(card, exerciseId) {
    return {
        exercise_id: exerciseId,
        word: card.question,
        pair_id: card.id,
        role: JOGO2_CARD_ROLE,
        link: JSON.stringify({
            options: card.options,
            answerIndex: card.answerIndex,
            virtue: card.virtue,
            icon: card.icon,
            spaceNumber: card.spaceNumber || 0
        })
    };
}

async function getOrCreateJogo2CardsContainer(doctorUserId = null) {
    if (supabaseClient) {
        const container = doctorUserId
            ? await getOrCreateGameContainer(doctorScopedSeedKey(JOGO2_CARDS_SEED_KEY, doctorUserId), JOGO2_CARDS_TITLE, doctorUserId)
            : await getOrCreateGameContainer(JOGO2_CARDS_SEED_KEY, JOGO2_CARDS_TITLE);
        if (container && container.fromSupabase) {
            const { data, error } = await supabaseClient
                .from('exercise_items')
                .select('*')
                .eq('exercise_id', container.id)
                .eq('role', JOGO2_CARD_ROLE)
                .order('id', { ascending: true });

            if (error) throw error;
            return {
                ...container,
                items: (data || []).map(parseJogo2CardItem)
            };
        }
    }

    return new Promise((resolve, reject) => {
        const tx = db.transaction(['exercises'], 'readonly');
        tx.onerror = () => reject(tx.error);
        tx.objectStore('exercises').getAll().onsuccess = (e) => {
            const found = (e.target.result || []).find(ex => ex.seedKey === JOGO2_CARDS_SEED_KEY);
            if (found) {
                resolve(found);
                return;
            }

            const writeTx = db.transaction(['exercises'], 'readwrite');
            writeTx.onerror = () => reject(writeTx.error);
            const request = writeTx.objectStore('exercises').add({ title: JOGO2_CARDS_TITLE, items: [], seedKey: JOGO2_CARDS_SEED_KEY, visible: false });
            request.onsuccess = (ev) => {
                resolve({ id: ev.target.result, title: JOGO2_CARDS_TITLE, items: [], seedKey: JOGO2_CARDS_SEED_KEY, visible: false });
            };
        };
    });
}

// Leitura pro paciente jogar — nunca cria/semeia nada (semeadura de fábrica é
// preocupação só de quem autora, ver loadJogo2CustomCards). Tenta primeiro o
// container do médico do paciente logado; se não existir ou estiver vazio,
// cai pro container global de sempre, sem mudança nenhuma nesse caminho.
async function getJogo2ContainerForPlay() {
    if (supabaseClient && currentPatientId && currentPatientDoctorUserId) {
        try {
            const scopedSeedKey = doctorScopedSeedKey(JOGO2_CARDS_SEED_KEY, currentPatientDoctorUserId);
            const { data: container } = await supabaseClient.from('exercises').select('*').eq('seed_key', scopedSeedKey).maybeSingle();
            if (container) {
                const { data: items } = await supabaseClient
                    .from('exercise_items').select('*').eq('exercise_id', container.id).eq('role', JOGO2_CARD_ROLE).order('id', { ascending: true });
                const mapped = (items || []).map(parseJogo2CardItem);
                if (mapped.length > 0) return { ...container, fromSupabase: true, items: mapped };
            }
        } catch (e) {}
    }
    return getOrCreateJogo2CardsContainer();
}

// Container usado por quem autora (salvar/editar/excluir/importar/resetar
// cartas) — médico usa o próprio, admin usa o global. Mesmo padrão de
// getNamingContainer/getAfasiaContainer.
function getJogo2ManageContainer() {
    return getOrCreateJogo2CardsContainer(isDoctor ? currentUserId : null);
}

async function saveJogo2CardsContainer(container) {
    container.items = jogo2CustomCards;

    if (container.fromSupabase && supabaseClient) {
        const { error: deleteError } = await supabaseClient
            .from('exercise_items')
            .delete()
            .eq('exercise_id', container.id)
            .eq('role', JOGO2_CARD_ROLE);
        if (deleteError) throw deleteError;

        const dbItems = jogo2CustomCards.map(card => serializeJogo2CardItem(card, container.id));
        if (dbItems.length > 0) {
            const { error: insertError } = await supabaseClient.from('exercise_items').insert(dbItems);
            if (insertError) throw insertError;
        }
        localStorage.setItem('jogo2_factory_initialized_v2', 'true');
        return;
    }

    await putLocalGameContainer(container);
    localStorage.setItem('jogo2_factory_initialized_v2', 'true');
}

function updateJogo2SetupSelection() {
    document.querySelectorAll('.jogo2-player-count-btn').forEach(button => {
        button.classList.toggle('active', Number(button.dataset.playerCount) === selectedJogo2PlayerCount);
    });
}

// Carregar cartas customizadas da base local ou do Supabase
async function loadJogo2CustomCards() {
    // Médico/admin autoram (container próprio ou global, get-or-create de
    // verdade); paciente só lê, nunca cria nada (getJogo2ContainerForPlay).
    const isAuthoring = isDoctor || isAdmin;
    try {
        const container = isAuthoring
            ? await getOrCreateJogo2CardsContainer(isDoctor ? currentUserId : null)
            : await getJogo2ContainerForPlay();
        if (container && container.items) {
            jogo2CustomCards = Array.isArray(container.items) ? container.items : [];
        } else {
            jogo2CustomCards = [];
        }
    } catch (e) {
        console.error('Erro ao carregar cartas do jogo2:', e);
        jogo2CustomCards = [];
    }

    // Importação inicial automática de fábrica caso a base esteja vazia e nunca
    // inicializada com a versão v2 (sem emojis nas opções) — só pra quem
    // autora; paciente nunca deve disparar essa semeadura.
    if (isAuthoring && !localStorage.getItem('jogo2_factory_initialized_v2') && jogo2CustomCards.length === 0) {
        jogo2CustomCards = [];
        let defaultIdCounter = 1;
        for (let virtue in jogo2DefaultQuestions) {
            const list = jogo2DefaultQuestions[virtue];
            const icon = getJogo2VirtueMeta(virtue).icon;
            list.forEach(item => {
                jogo2CustomCards.push({
                    id: `factory-${defaultIdCounter++}`,
                    question: item.q,
                    options: [...item.opt],
                    answerIndex: item.ans,
                    virtue: virtue,
                    icon: icon,
                    spaceNumber: 0
                });
            });
        }
        try {
            const container = await getOrCreateJogo2CardsContainer(isDoctor ? currentUserId : null);
            await saveJogo2CardsContainer(container);
            localStorage.setItem('jogo2_factory_initialized_v2', 'true');
        } catch (err) {
            console.error('Erro ao salvar importação inicial de fábrica:', err);
        }
    }

    // Atualizar o contador no gerenciador
    const countSpan = document.getElementById('jogo2-custom-count');
    if (countSpan) countSpan.textContent = jogo2CustomCards.length;
}

function getFirstPlayerDefaultName(session) {
    let rawName = '';
    
    // Tenta pegar o name do user_metadata
    if (session?.user?.user_metadata?.name) {
        rawName = session.user.user_metadata.name;
    } 
    // Tenta pegar o full_name do user_metadata
    else if (session?.user?.user_metadata?.full_name) {
        rawName = session.user.user_metadata.full_name;
    }
    // Tenta extrair do e-mail
    else if (session?.user?.email) {
        const parts = session.user.email.split('@')[0].split('.');
        rawName = parts[0];
    }
    
    // Fallback absoluto se vazio
    if (!rawName) return 'Elefante';
    
    // Limpa espaços extras e pega apenas o primeiro nome
    const firstName = rawName.trim().split(/\s+/)[0];
    
    // Capitaliza apenas a primeira letra (ex: sidney -> Sidney)
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
}

// ============================================================
// SISTEMA DE ADVERSÁRIOS (dados fixos — fotos em img/opponents/)
// ============================================================

// Para trocar uma foto, basta substituir o arquivo correspondente em img/opponents/
// e manter o mesmo nome de arquivo.
const JOGO2_OPPONENTS_FIXED = [
    { id: 0, name: 'Silvio Santos',   photo: 'img/opponents/silvio.png'   },
    { id: 1, name: 'Hebe Camargo',    photo: 'img/opponents/hebe.png'     },
    { id: 2, name: 'Albert Einstein', photo: 'img/opponents/einstein.png' }
];

const JOGO2_SELECTED_OPPONENT_KEY = 'jogo2_selected_opponent';

function getSelectedOpponentIndex() {
    const v = localStorage.getItem(JOGO2_SELECTED_OPPONENT_KEY);
    return v !== null ? parseInt(v) : 0;
}

function setSelectedOpponentIndex(idx) {
    localStorage.setItem(JOGO2_SELECTED_OPPONENT_KEY, String(idx));
}

function renderJogo2OpponentCards() {
    const container = document.getElementById('jogo2-opponent-cards');
    if (!container) return;

    const selectedIdx = getSelectedOpponentIndex();
    container.innerHTML = '';

    JOGO2_OPPONENTS_FIXED.forEach((opp, idx) => {
        const isSelected = idx === selectedIdx;

        const card = document.createElement('div');
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        card.style.cssText = `
            display: flex; flex-direction: column; align-items: center; gap: 8px;
            padding: 12px 10px 8px; border-radius: 16px; cursor: pointer;
            border: 3px solid ${isSelected ? '#a855f7' : '#e2e8f0'};
            background: ${isSelected ? '#faf5ff' : '#f8fafc'};
            box-shadow: ${isSelected ? '0 6px 20px rgba(168,85,247,0.25)' : '0 2px 6px rgba(0,0,0,0.06)'};
            transition: all 0.2s; min-width: 96px; position: relative;
            transform: ${isSelected ? 'scale(1.06)' : 'scale(1)'};
        `;

        // Área da foto
        const photoWrap = document.createElement('div');
        photoWrap.style.cssText = `
            width: 66px; height: 66px; border-radius: 50%; overflow: hidden;
            border: 3px solid ${isSelected ? '#a855f7' : '#cbd5e1'};
            background: #f1f5f9; position: relative;
            box-shadow: ${isSelected ? '0 0 0 4px rgba(168,85,247,0.15)' : 'none'};
        `;
        photoWrap.innerHTML = `
            <img src="${opp.photo}" alt="${opp.name}"
                 style="width:100%;height:100%;object-fit:cover;"
                 onerror="this.style.display='none';this.parentElement.innerHTML='<span style=\\'font-size:2.4rem;display:flex;align-items:center;justify-content:center;height:100%\\'>👤</span>';" />
        `;

        // Badge de selecionado
        if (isSelected) {
            const badge = document.createElement('div');
            badge.style.cssText = `
                position: absolute; bottom: -2px; right: -2px;
                background: #a855f7; color: white; border-radius: 50%;
                width: 24px; height: 24px; display: flex; align-items: center;
                justify-content: center; font-size: 0.8rem;
                box-shadow: 0 2px 8px rgba(168,85,247,0.5);
                border: 2px solid white;
            `;
            badge.textContent = '✓';
            photoWrap.appendChild(badge);
        }

        // Nome (somente leitura)
        const nameLabel = document.createElement('span');
        nameLabel.textContent = opp.name;
        nameLabel.style.cssText = `
            font-family: 'Outfit'; font-size: 0.72rem; font-weight: 700;
            color: ${isSelected ? '#7e22ce' : '#475569'}; text-align: center;
            max-width: 88px; line-height: 1.1;
        `;

        // Clicar no card seleciona o adversário
        const selectOpponent = () => {
            setSelectedOpponentIndex(idx);
            jogo2Players[1].name = opp.name;
            jogo2Players[1].avatar = opp.photo;
            const nameEl = document.getElementById('jogo2-player-name-1');
            if (nameEl) nameEl.value = opp.name;
            renderJogo2OpponentCards();
            renderJogo2PlayerLegend();
        };
        card.addEventListener('click', selectOpponent);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') selectOpponent(); });

        card.appendChild(photoWrap);
        card.appendChild(nameLabel);
        container.appendChild(card);
    });
}


function showJogo2Setup() {

    const container = document.getElementById('game-jogo2-container');
    if (container) container.classList.add('is-setup');
    if (container && !container.dataset.submitGuardAttached) {
        container.addEventListener('submit', (e) => {
            e.preventDefault();
        }, true);
        container.dataset.submitGuardAttached = '1';
    }
    
    // Configurar botão de gerenciar cartas (exibe pra admin ou médico — cada
    // um edita o próprio container, ver getOrCreateJogo2CardsContainer)
    const manageBtn = document.getElementById('btn-jogo2-manage');
    if (manageBtn) {
        manageBtn.style.display = (isAdmin || isDoctor) ? 'inline-block' : 'none';
        manageBtn.onclick = () => showJogo2Manager();
    }

    // Configurar os listeners de clique para botões de quantidade de jogadores
    if (container) {
        container.querySelectorAll('.jogo2-player-count-btn').forEach(btn => {
            btn.onclick = (e) => {
                selectedJogo2PlayerCount = Number(e.currentTarget.dataset.playerCount);
                updateJogo2SetupSelection();
                updateJogo2SetupPlayersList();
            };
        });
    }

    // Listener do botao iniciar
    const startBtn = document.getElementById('btn-jogo2-start');
    if (startBtn) {
        startBtn.onclick = () => startJogo2Game();
    }

    // Listener do botao novo jogo do header
    const headerNewGameBtn = document.getElementById('btn-jogo2-new-game');
    if (headerNewGameBtn) {
        headerNewGameBtn.onclick = () => {
            clearAllJogo2Timeouts();
            showJogo2Setup();
        };
    }

    // Listener do botao rolar dado
    const rollBtn = document.getElementById('btn-jogo2-roll');
    if (rollBtn) {
        rollBtn.onclick = () => rollJogo2Die();
    }

    // Listener do botao concluir carta (passar vez)
    const completeBtn = document.getElementById('btn-jogo2-complete');
    if (completeBtn) {
        completeBtn.onclick = () => completeJogo2Card();
    }

    // Configurar listeners de fechar modal de gerenciamento
    const closeManagerBtn = document.getElementById('btn-jogo2-manager-close');
    if (closeManagerBtn) {
        closeManagerBtn.onclick = () => hideJogo2Manager();
    }
    
    // Listener de submissão do formulário de novas cartas
    const form = document.getElementById('jogo2-card-form');
    if (form) {
        form.onsubmit = async (e) => {
            e.preventDefault();
            await saveJogo2CustomCard();
        };
    }

    jogo2Started = false;
    jogo2Rolling = false;
    jogo2WaitingCard = false;
    pendingJogo2Challenge = null;
    activeJogo2PlayerIndex = 0;

    // Ativar o Modo Solo vs Computador por padrão para 1 jogador
    const soloCheckbox = document.getElementById('jogo2-solo-mode-checkbox');
    if (soloCheckbox) {
        soloCheckbox.checked = true;
        toggleJogo2SoloMode(soloCheckbox);
    } else {
        jogo2SoloMode = true;
        const selOpp = JOGO2_OPPONENTS_FIXED[getSelectedOpponentIndex()];
        jogo2Players[1].name = selOpp ? selOpp.name : 'Computador';
        jogo2Players[1].avatar = selOpp ? selOpp.photo : null;
    }

    jogo2Players.forEach((player, i) => {
        player.position = 0;
    });
    jogo2Position = 0;

    // Carrega avatar e nome do Jogador 1
    jogo2Players[0].avatar = localStorage.getItem('jogo2_player1_avatar') || null;
    
    // Resetar roleta
    jogo2WheelRotation = 30; // 30 graus inicial aponta para a fatia 1 no topo
    const arrow = document.getElementById('jogo2-wheel-arrow');
    if (arrow) arrow.style.transform = 'translate(-50%, -50%) rotate(30deg)';
    
    selectedJogo2PlayerCount = 2; // Sempre 2 jogadores
    
    if (supabaseClient) {
        supabaseClient.auth.getSession().then(({ data }) => {
            const savedP1Name = localStorage.getItem('jogo2_player1_name');
            const defaultName = savedP1Name || getFirstPlayerDefaultName(data?.session);
            jogo2Players[0].name = defaultName;
            updateJogo2SetupPlayersList();
            renderJogo2PlayerLegend();
        }).catch(err => {
            console.error("Erro ao obter sessão para o primeiro jogador:", err);
            const savedP1Name = localStorage.getItem('jogo2_player1_name');
            jogo2Players[0].name = savedP1Name || 'Jogador 1';
            updateJogo2SetupPlayersList();
            renderJogo2PlayerLegend();
        });
    } else {
        const savedP1Name = localStorage.getItem('jogo2_player1_name');
        jogo2Players[0].name = savedP1Name || 'Jogador 1';
        updateJogo2SetupPlayersList();
        renderJogo2PlayerLegend();
    }
    
    loadJogo2CustomCards().then(() => {
        updateJogo2Card(jogo2Spaces[0]);
    });
    
    announceJogo2('Configure os jogadores');

    // Renderiza os cards de adversários e aplica o selecionado ao jogador 2
    renderJogo2OpponentCards();
    const opps = loadJogo2Opponents();
    const selIdx = getSelectedOpponentIndex();
    if (opps[selIdx]) {
        jogo2Players[1].name = opps[selIdx].name || `Adversário ${selIdx + 1}`;
        jogo2Players[1].avatar = opps[selIdx].photo || null;
    }
}

function toggleJogo2SoloMode(checkbox) {
    jogo2SoloMode = !!checkbox.checked;
    
    const player2 = jogo2Players[1];
    const input2 = document.getElementById('jogo2-player-name-1');
    const oppPicker = document.getElementById('jogo2-opponent-picker');
    
    if (jogo2SoloMode) {
        if (oppPicker) oppPicker.style.display = 'block';
        const selOpp = JOGO2_OPPONENTS_FIXED[getSelectedOpponentIndex()];
        player2.name = selOpp ? selOpp.name : 'Computador';
        player2.avatar = selOpp ? selOpp.photo : null;
        if (input2) {
            input2.value = player2.name;
            input2.disabled = true;
            input2.style.background = '#f1f5f9';
            input2.style.color = '#94a3b8';
        }
    } else {
        if (oppPicker) oppPicker.style.display = 'none';
        player2.name = 'Jogador 2';
        player2.avatar = null;
        if (input2) {
            input2.value = player2.name;
            input2.disabled = false;
            input2.style.background = '#ffffff';
            input2.style.color = '#475569';
        }
    }
    // Re-renderizar lista e legenda de jogadores para refletir o avatar correto
    updateJogo2SetupPlayersList();
    renderJogo2PlayerLegend();
}

function updateJogo2SetupPlayersList() {
    const listContainer = document.getElementById('jogo2-players-setup-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';
    
    for (let i = 0; i < 2; i++) {
        const player = jogo2Players[i];
        
        const row = document.createElement('div');
        row.className = 'jogo2-player-setup-row';
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.gap = '15px';
        row.style.marginBottom = '15px';
        
        const borderCol = i === 0 ? '#3b82f6' : '#ec4899';
        const bgCol = i === 0 ? '#dbeafe' : '#fce7f3';
        const iconHTML = getPlayerIconHTML(player, i, '100%');
        const pawnHTML = `<span class="jogo2-player-pawn player-pawn-${i + 1}" style="position:relative; width:40px; height:40px; border-radius:50%; border:3px solid ${borderCol}; background:${bgCol}; overflow:hidden; display:grid; place-items:center; font-size:1.35rem; box-shadow:0 3px 6px rgba(0,0,0,0.1); padding:0;">${iconHTML}</span>`;

        const labelText = i === 0 ? 'Jogador 1:' : (jogo2SoloMode ? 'Adversário:' : 'Jogador 2:');
        const placeholderText = i === 0 ? 'Nome do Jogador 1' : (jogo2SoloMode ? 'Nome do Adversário' : 'Nome do Jogador 2');
        const fallbackText = i === 0 ? 'Jogador 1' : (jogo2SoloMode ? 'Adversário' : 'Jogador 2');

        row.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px; width: 170px; flex-shrink: 0;">
                ${pawnHTML}
                <strong style="font-size:0.95rem; color:#475569; width:120px;">${labelText}</strong>
            </div>
            <div style="display:flex; align-items:center; gap:8px; flex:1;">
                <input type="text" id="jogo2-player-name-${i}" value="${player.name}" placeholder="${placeholderText}" style="flex:1; padding:10px 14px; border:2px solid #cbd5e1; border-radius:12px; font-family:'Outfit'; font-size:0.95rem; font-weight:700;" />
                
                <!-- Botão de Upload de Foto (Apenas para humanos — Jogador 1 sempre, Jogador 2 se não for solo) -->
                ${!(i === 1 && jogo2SoloMode) ? `
                    <label style="display: flex; align-items: center; justify-content: center; gap: 4px; padding: 10px 12px; border-radius: 12px; border: 2px solid #e2e8f0; background: #f8fafc; color: #64748b; font-size: 0.8rem; font-weight: 700; cursor: pointer; font-family: 'Outfit'; height: 42px; flex-shrink: 0;">
                        <i class="fas fa-camera"></i> Foto
                        <input type="file" accept="image/*" class="jogo2-photo-upload" style="display:none;" />
                    </label>
                ` : ''}
            </div>
        `;
        listContainer.appendChild(row);
        
        const input = row.querySelector('input');
        input.addEventListener('input', (e) => {
            player.name = e.target.value.trim() || fallbackText;
            localStorage.setItem(`jogo2_player${i + 1}_name`, player.name);
            renderJogo2PlayerLegend();
        });

        const fileInput = row.querySelector('.jogo2-photo-upload');
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = ev => {
                    // Redimensiona/comprime antes de guardar (mesmo padrão do Carômetro):
                    // uma foto de celular sem compressão pode ter vários MB em base64 e
                    // sozinha estourar a quota do localStorage — que é a mesma usada pelo
                    // token de sessão do Supabase.
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const max = 400;
                        let width = img.width, height = img.height;
                        if (width > height) {
                            if (width > max) { height = Math.round(height * max / width); width = max; }
                        } else {
                            if (height > max) { width = Math.round(width * max / height); height = max; }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                        const compressed = canvas.toDataURL('image/jpeg', 0.8);
                        player.avatar = compressed;
                        try {
                            localStorage.setItem(`jogo2_player${i + 1}_avatar`, compressed);
                        } catch (err) {
                            evictTtsLocalStorageCache();
                            try { localStorage.setItem(`jogo2_player${i + 1}_avatar`, compressed); } catch (err2) { /* segue só em memória */ }
                        }
                        updateJogo2SetupPlayersList();
                        renderJogo2PlayerLegend();
                    };
                    img.src = ev.target.result;
                };
                reader.readAsDataURL(file);
            });
        }
    }
}

function renderJogo2PlayerLegend() {
    const legend = document.getElementById('jogo2-player-legend');
    if (!legend) return;

    legend.innerHTML = jogo2Players.map((player, index) => {
        const iconHTML = getPlayerIconHTML(player, index, '26px');
        return `
            <span class="jogo2-player-chip ${index === activeJogo2PlayerIndex ? 'active' : ''}">
                <span class="jogo2-player-pawn player-pawn-${index + 1}" aria-hidden="true" style="${player.avatar ? 'overflow:hidden;padding:0;display:inline-grid;place-items:center;' : ''}">${iconHTML}</span>
                ${player.name}
            </span>
        `;
    }).join('');
}

function showJogo2WaitingForRollCard() {
    const card = document.getElementById('jogo2-current-card');
    const optionsContainer = document.getElementById('jogo2-card-options');
    const feedbackArea = document.getElementById('jogo2-card-feedback');
    const kicker = document.getElementById('jogo2-card-kicker');
    const iconArea = document.getElementById('jogo2-card-icon-area');
    const qTitle = document.getElementById('jogo2-card-question');
    const qText = document.getElementById('jogo2-card-text');
    const completeBtn = document.getElementById('btn-jogo2-complete');

    if (!card) return;

    // A troca de turno precisa limpar qualquer auto-avanço pendente do jogador anterior,
    // senão o card pode ficar com contagem regressiva "vazada" no estado de espera.
    if (jogo2TurnTimeout) { clearTimeout(jogo2TurnTimeout); jogo2TurnTimeout = null; }
    if (jogo2CountdownInterval) { clearInterval(jogo2CountdownInterval); jogo2CountdownInterval = null; }
    if (jogo2CompleteCardTimeout) { clearTimeout(jogo2CompleteCardTimeout); jogo2CompleteCardTimeout = null; }
    
    if (optionsContainer) optionsContainer.style.display = 'none';
    if (feedbackArea) feedbackArea.style.display = 'none';
    if (qText) qText.style.display = 'none';
    if (completeBtn) {
        completeBtn.disabled = true;
        completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
    }
    
    const activePlayer = getActiveJogo2Player();
    if (kicker) kicker.textContent = `Vez de ${activePlayer ? activePlayer.name : 'Jogador'}`;
    if (iconArea) iconArea.textContent = '❓';
    if (qTitle) qTitle.textContent = 'Gire a roleta para jogar!';
    
    card.className = 'jogo2-card';
}

function advanceJogo2PlayerTurn() {
    if (!jogo2Started) return;
    activeJogo2PlayerIndex = (activeJogo2PlayerIndex + 1) % selectedJogo2PlayerCount;
    syncJogo2Position();
    
    const activePlayer = getActiveJogo2Player();
    
    if (activePlayer.skipNextTurn) {
        activePlayer.skipNextTurn = false;
        renderJogo2Board();
        
        const card = document.getElementById('jogo2-current-card');
        const optionsContainer = document.getElementById('jogo2-card-options');
        const feedbackArea = document.getElementById('jogo2-card-feedback');
        const kicker = document.getElementById('jogo2-card-kicker');
        const iconArea = document.getElementById('jogo2-card-icon-area');
        const qTitle = document.getElementById('jogo2-card-question');
        const qText = document.getElementById('jogo2-card-text');
        
        if (optionsContainer) optionsContainer.style.display = 'none';
        if (feedbackArea) feedbackArea.style.display = 'none';
        if (kicker) kicker.textContent = `Vez de ${activePlayer.name}`;
        if (iconArea) iconArea.textContent = '🚫';
        if (qTitle) qTitle.textContent = 'Passou a vez!';
        if (qText) {
            qText.style.display = 'block';
            qText.innerHTML = 'Você está cumprindo uma penalidade e não joga nesta rodada.';
        }
        if (card) card.className = 'jogo2-card virtue-penalidade';
        
        announceJogo2(`${activePlayer.name} perdeu a vez devido à penalidade!`);
        speak(`${activePlayer.name} perdeu a vez.`);
        
        const rollBtn = document.getElementById('btn-jogo2-roll');
        if (rollBtn) rollBtn.disabled = true;
        
        jogo2TurnTimeout = setTimeout(() => {
            advanceJogo2PlayerTurn();
        }, 3500);
        return;
    }

    renderJogo2Board();
    showJogo2WaitingForRollCard();
    
    announceJogo2(`Agora é a vez ${getPreposicaoDoDa(activePlayer.name)} ${activePlayer.name}.`);

    setupJogo2RollButtonListeners();
    resetJogo2PowerMeter();

    const rollBtn = document.getElementById('btn-jogo2-roll');
    const labelEl = document.getElementById('btn-jogo2-roll-label');

    if (isJogo2RobotTurn()) {
        if (rollBtn) rollBtn.disabled = true;
        if (labelEl) labelEl.innerHTML = `<i class="fas fa-robot"></i> ${activePlayer.name} Pensando...`;
        
        triggerOpponentQuote('turnStart');
        const waitForAnimation = () => {
            if (jogo2Animating) {
                jogo2WalkStepTimeout = setTimeout(waitForAnimation, 300);
                return;
            }
            jogo2RobotTurnTimeout = setTimeout(() => {
                if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Girando...';
                rollJogo2Die();
            }, 3000);
        };
        waitForAnimation();
    } else {
        if (rollBtn) rollBtn.disabled = false;
        if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
        speak(`Vez ${getPreposicaoDoDa(activePlayer.name)} ${activePlayer.name}.`);
    }
}

function renderJogo2Board() {
    const container = document.getElementById('jogo2-board-path');
    if (!container) return;

    updateJogo2SVGRoute();
    syncJogo2Position();

    // Remover apenas as casas do jogo, preservando o banner central
    container.querySelectorAll('.jogo2-space').forEach(el => el.remove());

    jogo2Spaces.forEach((space, index) => {
        if (index >= JOGO2_GRID_PATH.length) return;

        const [col, row] = JOGO2_GRID_PATH[index];
        const tile = document.createElement('div');
        tile.className = `jogo2-space virtue-${space.virtue}`;
        if (space.type === 'challenge') tile.classList.add('challenge-space');
        if (index === jogo2Position) tile.classList.add('active');
        if (space.type === 'start') tile.classList.add('start');
        if (space.type === 'finish') tile.classList.add('finish');

        // Posicionar no grid
        tile.style.gridColumn = `${col + 1}`;
        tile.style.gridRow = `${row + 1}`;

        const color = getSpaceVirtueColor(space.virtue, space.type);
        tile.style.backgroundColor = color;

        tile.setAttribute('aria-label', `${index}. ${space.name || space.label}`);
        tile.dataset.spaceIndex = index;

        // Peões dos jogadores nesta casa
        const playerPawns = jogo2Players
            .map((player, playerIndex) => {
                if (player.position !== index) return '';
                const iconHTML = getPlayerIconHTML(player, playerIndex, '100%');
                return `
                    <span class="jogo2-player-pawn player-pawn-${playerIndex + 1} ${playerIndex === activeJogo2PlayerIndex ? 'active' : ''}" title="${player.name}" aria-label="${player.name}" style="${player.avatar ? 'overflow:hidden;padding:0;' : ''}">
                        ${iconHTML}
                    </span>
                `;
            })
            .join('');

        // Nome da força ou label
        const displayName = space.name || space.label;
        const badgeHTML = space.type !== 'start' && space.type !== 'finish' ? `<span class="jogo2-space-badge" style="color: ${color};">${index}</span>` : '';

        tile.innerHTML = `
            <span class="jogo2-space-name">${displayName}</span>
            ${badgeHTML}
            ${playerPawns ? `<span class="jogo2-player-pawns">${playerPawns}</span>` : ''}
        `;
        container.appendChild(tile);
    });

    renderJogo2PlayerLegend();
}

function flipJogo2Card(card) {
    card.style.transform = 'rotateY(10deg) scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'rotateY(0deg) scale(1)';
    }, 150);
}

// Abrir e fechar overlay do gerenciador
function showJogo2Manager() {
    const overlay = document.getElementById('jogo2-manager-overlay');
    if (overlay) {
        overlay.style.display = 'flex';
        setTimeout(() => overlay.classList.add('open'), 10);
    }
    renderJogo2CustomQuestionsList();
}

function hideJogo2Manager() {
    const overlay = document.getElementById('jogo2-manager-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        setTimeout(() => overlay.style.display = 'none', 250);
    }
}

// Salvar pergunta customizada (cria ou atualiza existente)
async function saveJogo2CustomCard() {
    const qInput = document.getElementById('jogo2-form-question');
    const opt0Input = document.getElementById('jogo2-form-opt0');
    const opt1Input = document.getElementById('jogo2-form-opt1');
    const opt2Input = document.getElementById('jogo2-form-opt2');
    const iconInput = document.getElementById('jogo2-form-icon');
    const virtueSelect = document.getElementById('jogo2-form-virtue');
    const spaceInput = document.getElementById('jogo2-form-space-number');
    const correctRadios = document.getElementsByName('jogo2-correct-ans');

    if (!qInput || !opt0Input || !opt1Input || !opt2Input) return;

    const question = qInput.value.trim();
    const opt0 = opt0Input.value.trim();
    const opt1 = opt1Input.value.trim();
    const opt2 = opt2Input.value.trim();
    const icon = iconInput ? iconInput.value.trim() : '❓';
    const virtue = normalizeJogo2Virtue(virtueSelect ? virtueSelect.value : 'desafio');
    const spaceNumber = spaceInput && spaceInput.value ? Number(spaceInput.value) : 0;
    
    let answerIndex = 0;
    for (let r of correctRadios) {
        if (r.checked) {
            answerIndex = Number(r.value);
            break;
        }
    }

    if (!question || !opt0 || !opt1 || !opt2) {
        alert('Por favor, preencha a pergunta e todas as três opções.');
        return;
    }

    if (jogo2EditingCardId !== null) {
        // Modo Edição: Atualizar carta existente
        const card = jogo2CustomCards.find(c => c.id === jogo2EditingCardId);
        if (card) {
            card.question = question;
            card.options = [opt0, opt1, opt2];
            card.answerIndex = answerIndex;
            card.virtue = virtue;
            card.icon = icon;
            card.spaceNumber = spaceNumber;
        }
    } else {
        // Modo Cadastro: Criar nova carta
        const newCard = {
            id: Date.now().toString(),
            question: question,
            options: [opt0, opt1, opt2],
            answerIndex: answerIndex,
            virtue: virtue,
            icon: icon,
            spaceNumber: spaceNumber
        };
        jogo2CustomCards.push(newCard);
    }

    // Salvar na base (Supabase ou Local)
    try {
        const container = await getJogo2ManageContainer();
        await saveJogo2CardsContainer(container);
        
        const wasEditing = (jogo2EditingCardId !== null);
        
        // Resetar formulário e estados de edição
        cancelJogo2CardEdit();

        renderJogo2CustomQuestionsList();
        const countSpan = document.getElementById('jogo2-custom-count');
        if (countSpan) countSpan.textContent = jogo2CustomCards.length;

        speak(wasEditing ? 'Pergunta atualizada com sucesso!' : 'Pergunta adicionada com sucesso!');
    } catch (e) {
        console.error('Erro ao salvar carta customizada:', e);
        alert('Ocorreu um erro ao salvar a carta.');
    }
}

// Iniciar edição de uma pergunta
function editJogo2CustomCard(cardId) {
    const card = jogo2CustomCards.find(c => c.id === cardId);
    if (!card) return;

    const qInput = document.getElementById('jogo2-form-question');
    const opt0Input = document.getElementById('jogo2-form-opt0');
    const opt1Input = document.getElementById('jogo2-form-opt1');
    const opt2Input = document.getElementById('jogo2-form-opt2');
    const iconInput = document.getElementById('jogo2-form-icon');
    const virtueSelect = document.getElementById('jogo2-form-virtue');
    const spaceInput = document.getElementById('jogo2-form-space-number');
    const correctRadios = document.getElementsByName('jogo2-correct-ans');

    if (qInput) qInput.value = card.question;
    if (opt0Input) opt0Input.value = card.options[0];
    if (opt1Input) opt1Input.value = card.options[1];
    if (opt2Input) opt2Input.value = card.options[2];
    if (iconInput) iconInput.value = card.icon || '❓';
    if (virtueSelect) virtueSelect.value = card.virtue || 'desafio';
    if (spaceInput) spaceInput.value = card.spaceNumber && card.spaceNumber > 0 ? card.spaceNumber : '';
    
    if (correctRadios && correctRadios[card.answerIndex]) {
        correctRadios[card.answerIndex].checked = true;
    }

    jogo2EditingCardId = cardId;

    // Atualizar UI do botão de envio e mostrar botão cancelar
    const submitBtn = document.getElementById('jogo2-btn-submit');
    const cancelBtn = document.getElementById('jogo2-btn-cancel-edit');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Salvar Alterações';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    }
    if (cancelBtn) {
        cancelBtn.style.display = 'flex';
    }

    // Rolar suavemente até o topo do formulário para facilitar a visualização
    const formSection = document.querySelector('.manager-form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Cancelar edição e resetar o formulário
function cancelJogo2CardEdit() {
    const qInput = document.getElementById('jogo2-form-question');
    const opt0Input = document.getElementById('jogo2-form-opt0');
    const opt1Input = document.getElementById('jogo2-form-opt1');
    const opt2Input = document.getElementById('jogo2-form-opt2');
    const iconInput = document.getElementById('jogo2-form-icon');
    const virtueSelect = document.getElementById('jogo2-form-virtue');
    const spaceInput = document.getElementById('jogo2-form-space-number');
    const correctRadios = document.getElementsByName('jogo2-correct-ans');

    if (qInput) qInput.value = '';
    if (opt0Input) opt0Input.value = '';
    if (opt1Input) opt1Input.value = '';
    if (opt2Input) opt2Input.value = '';
    if (iconInput) iconInput.value = '❓';
    if (virtueSelect) virtueSelect.value = 'sabedoria';
    if (spaceInput) spaceInput.value = '';
    if (correctRadios && correctRadios[0]) correctRadios[0].checked = true;

    jogo2EditingCardId = null;

    // Atualizar UI dos botões
    const submitBtn = document.getElementById('jogo2-btn-submit');
    const cancelBtn = document.getElementById('jogo2-btn-cancel-edit');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-floppy-disk"></i> Adicionar à Trilha';
        submitBtn.style.background = 'linear-gradient(135deg, #a855f7, #c084fc)';
    }
    if (cancelBtn) {
        cancelBtn.style.display = 'none';
    }
}

// Excluir pergunta customizada
async function deleteJogo2CustomCard(cardId) {
    if (!confirm('Tem certeza que deseja excluir esta pergunta?')) return;
    
    // Se estivermos editando a carta que está sendo excluída, cancela a edição
    if (jogo2EditingCardId === cardId) {
        cancelJogo2CardEdit();
    }

    jogo2CustomCards = jogo2CustomCards.filter(c => c.id !== cardId);
    
    try {
        const container = await getJogo2ManageContainer();
        await saveJogo2CardsContainer(container);
        
        renderJogo2CustomQuestionsList();
        const countSpan = document.getElementById('jogo2-custom-count');
        if (countSpan) countSpan.textContent = jogo2CustomCards.length;
        
        speak('Pergunta excluída.');
    } catch (e) {
        console.error('Erro ao excluir carta:', e);
    }
}

// Listar perguntas customizadas cadastradas no overlay
function renderJogo2CustomQuestionsList() {
    const list = document.getElementById('jogo2-custom-questions-list');
    if (!list) return;

    if (jogo2CustomCards.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; color: #64748b; padding: 20px; font-size: 0.9rem;">
                <i class="fas fa-circle-info" style="font-size: 1.5rem; color: #cbd5e1; margin-bottom: 6px; display: block;"></i>
                Nenhuma carta customizada criada ainda.
            </div>
        `;
        return;
    }

    list.innerHTML = jogo2CustomCards.map(c => `
        <div class="jogo2-custom-question-item" style="border-left: 5px solid ${
            getJogo2VirtueMeta(c.virtue).color
        };">
            <div class="jogo2-custom-question-content">
                <strong>${c.icon} ${c.question}</strong>
                <span>Certa: ${c.options[c.answerIndex]}</span>
                <span style="font-size: 0.72rem; color: #94a3b8; display: flex; gap: 8px;">
                    <span>Categoria: ${getJogo2VirtueMeta(c.virtue).label}</span>
                    <strong>•</strong>
                    <span style="color: #a855f7; font-weight: 850;">${c.spaceNumber && Number(c.spaceNumber) > 0 ? `Casa ${c.spaceNumber}` : 'Qualquer casa'}</span>
                </span>
            </div>
            <div style="display: flex; gap: 4px;">
                <button class="jogo2-custom-question-edit" onclick="editJogo2CustomCard('${c.id}')" title="Editar pergunta" style="background: #f0fdf4; color: #16a34a; border: none; border-radius: 8px; width: 32px; height: 32px; display: grid; place-items: center; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-pen-to-square"></i>
                </button>
                <button class="jogo2-custom-question-delete" onclick="deleteJogo2CustomCard('${c.id}')" title="Excluir pergunta" style="background: #fef2f2; color: #ef4444; border: none; border-radius: 8px; width: 32px; height: 32px; display: grid; place-items: center; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Restaurar perguntas padrao de fabrica no banco customizado
async function resetJogo2CardsToFactory() {
    if (!confirm('Deseja apagar todas as cartas customizadas atuais e restaurar as 21 perguntas padrões de fábrica?')) return;
    
    jogo2CustomCards = [];
    localStorage.removeItem('jogo2_factory_initialized_v2');
    cancelJogo2CardEdit();

    // Re-importa as perguntas de fábrica para a base
    let defaultIdCounter = 1;
    for (let virtue in jogo2DefaultQuestions) {
        const list = jogo2DefaultQuestions[virtue];
        const icon = getJogo2VirtueMeta(virtue).icon;
        list.forEach(item => {
            jogo2CustomCards.push({
                id: `factory-${defaultIdCounter++}`,
                question: item.q,
                options: [...item.opt],
                answerIndex: item.ans,
                virtue: virtue,
                icon: icon,
                spaceNumber: 0
            });
        });
    }

    try {
        const container = await getJogo2ManageContainer();
        await saveJogo2CardsContainer(container);
        localStorage.setItem('jogo2_factory_initialized_v2', 'true');
        
        renderJogo2CustomQuestionsList();
        const countSpan = document.getElementById('jogo2-custom-count');
        if (countSpan) countSpan.textContent = jogo2CustomCards.length;
        
        speak('Perguntas padrões restauradas com sucesso!');
        alert('As 21 perguntas padrões foram restauradas na sua lista!');
    } catch (e) {
        console.error('Erro ao restaurar perguntas de fábrica:', e);
        alert('Ocorreu um erro ao restaurar as perguntas.');
    }
}

// Disparar input de arquivo para CSV
function triggerJogo2CSVUpload() {
    const input = document.getElementById('jogo2-csv-file-input');
    if (input) input.click();
}

// Baixar modelo de CSV com cabeçalho de exemplo para o Excel
function downloadJogo2CSVTemplate() {
    const csvContent = "\ufeff" + // BOM UTF-8 para o Excel ler acentos perfeitamente em portugues
        "Pergunta;Opcao_A;Opcao_B;Opcao_C;Resposta_Correta_A_B_ou_C;Virtude;Casa\n" +
        "Qual inseto faz mel?;Abelha;Joaninha;Borboleta;A;sabedoria;12\n" +
        "O que significa ter coragem?;Enfrentar os medos;Fugir correndo;Bater nos outros;A;coragem;\n" +
        "O que é generosidade?;Compartilhar o lanche;Guardar tudo só para você;Gritar;A;humanidade;30\n" +
        "Trabalhar em equipe é...;Ajudar os colegas;Fazer tudo sozinho;Atrapalhar;A;justica;\n" +
        "O que é autocontrole?;Acalmar-se respirando fundo;Chutar a parede;Gritar muito;A;moderacao;\n" +
        "O que é gratidão?;Agradecer as coisas boas;Reclamar de tudo;Esquecer as ajudas;A;transcendencia;";
        
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "modelo_perguntas_trilha.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function escapeJogo2CSVValue(value) {
    const text = value === null || value === undefined ? '' : String(value);
    if (/[;"\n\r]/.test(text)) {
        return `"${text.replace(/"/g, '""')}"`;
    }
    return text;
}

async function downloadJogo2RegisteredCardsCSV() {
    try {
        await loadJogo2CustomCards();
    } catch (e) {
        console.error('Erro ao carregar cartas para exportação:', e);
    }

    if (!jogo2CustomCards.length) {
        alert('Nenhuma carta cadastrada para baixar.');
        return;
    }

    const header = ['#', 'Pergunta', 'Opcao_A', 'Opcao_B', 'Opcao_C', 'Resposta_Correta_A_B_ou_C', 'Virtude', 'Casa'];
    const rows = jogo2CustomCards.map((card, index) => {
        const answerLetter = ['A', 'B', 'C'][Number(card.answerIndex)] || 'A';
        return [
            index + 1,
            card.question || '',
            card.options?.[0] || '',
            card.options?.[1] || '',
            card.options?.[2] || '',
            answerLetter,
            normalizeJogo2Virtue(card.virtue || 'desafio'),
            card.spaceNumber && Number(card.spaceNumber) > 0 ? Number(card.spaceNumber) : ''
        ];
    });

    const csvContent = "\ufeff" + [header, ...rows]
        .map(row => row.map(escapeJogo2CSVValue).join(';'))
        .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const today = new Date().toISOString().slice(0, 10);
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = `cartas_trilha_${today}.csv`;
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Tratar upload e parsing de arquivo CSV importado
function handleJogo2CSVImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        const text = e.target.result;
        const lines = text.split(/\r?\n/);
        const shouldReplaceCards = confirm('Deseja substituir todas as cartas atuais da trilha por este arquivo? Clique em Cancelar para apenas adicionar as cartas ao banco atual.');
        if (shouldReplaceCards) {
            jogo2CustomCards = [];
            cancelJogo2CardEdit();
        }
        const delimiter = (lines[0] || '').includes(';') ? ';' : ',';
        const headers = (lines[0] || '').split(delimiter).map(header =>
            header.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        );
        const hasNamedHeaders = headers.some(header => ['pergunta', 'descricao', 'opcao_a', 'resposta 1'].includes(header));
        const getCSVValue = (parts, names, fallbackIndex) => {
            if (hasNamedHeaders) {
                for (let name of names) {
                    const normalizedName = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    const idx = headers.indexOf(normalizedName);
                    if (idx >= 0) return (parts[idx] || '').trim();
                }
            }
            return (parts[fallbackIndex] || '').trim();
        };
        
        let importCounter = 0;
        let errors = [];
        let indexCounter = Date.now();
        
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            let parts = line.split(delimiter);
            if (!parts.some(part => part.trim())) continue;

            if (parts.length < 5) {
                errors.push(`Linha ${i + 1}: formato inválido (mínimo de 5 colunas).`);
                continue;
            }

            const question = getCSVValue(parts, ['Pergunta', 'Descrição'], 0);
            const opt0 = getCSVValue(parts, ['Opcao_A', 'Opção_A', 'Resposta 1'], 1);
            const opt1 = getCSVValue(parts, ['Opcao_B', 'Opção_B', 'Resposta 2'], 2);
            const opt2 = getCSVValue(parts, ['Opcao_C', 'Opção_C', 'Resposta 3'], 3);
            let ansStr = getCSVValue(parts, ['Resposta_Correta_A_B_ou_C', 'Resposta Correta'], 4).toUpperCase();
            
            let virtue = normalizeJogo2Virtue(getCSVValue(parts, ['Virtude', 'Tipo'], 5) || 'desafio');
            
            const spaceValue = getCSVValue(parts, ['Casa'], 6);
            const spaceNum = spaceValue ? Number(spaceValue) : 0;

            if (!question || !opt0 || !opt1 || !opt2 || !ansStr) {
                errors.push(`Linha ${i + 1}: dados incompletos.`);
                continue;
            }

            let answerIndex = 0;
            if (ansStr === 'A') answerIndex = 0;
            else if (ansStr === 'B') answerIndex = 1;
            else if (ansStr === 'C') answerIndex = 2;
            else if (ansStr.startsWith('1')) answerIndex = 0;
            else if (ansStr.startsWith('2')) answerIndex = 1;
            else if (ansStr.startsWith('3')) answerIndex = 2;
            else {
                errors.push(`Linha ${i + 1}: Resposta correta inválida ("${ansStr}"). Use A, B ou C.`);
                continue;
            }

            const icon = getJogo2VirtueMeta(virtue).icon;

            jogo2CustomCards.push({
                id: `csv-${indexCounter}-${importCounter}-${i}`,
                question: question,
                options: [opt0, opt1, opt2],
                answerIndex: answerIndex,
                virtue: virtue,
                icon: icon,
                spaceNumber: spaceNum || 0
            });
            importCounter++;
        }

        if (importCounter > 0) {
            try {
                const container = await getJogo2ManageContainer();
                await saveJogo2CardsContainer(container);
                
                renderJogo2CustomQuestionsList();
                const countSpan = document.getElementById('jogo2-custom-count');
                if (countSpan) countSpan.textContent = jogo2CustomCards.length;
                
                speak(`${importCounter} perguntas importadas com sucesso!`);
                alert(`${importCounter} perguntas importadas com sucesso!`);
            } catch (err) {
                console.error('Erro ao salvar importação de CSV:', err);
                alert('Erro ao gravar perguntas importadas no banco.');
            }
        }

        if (errors.length > 0) {
            alert("Algumas linhas não puderam ser importadas:\n" + errors.join("\n"));
        }

        event.target.value = '';
    };
    
    reader.readAsText(file, 'utf-8');
}

// Sorteia ou pega uma pergunta para a casa (customizada se houver, senão padrão)
function getQuestionForSpace(space, spaceIndex) {
    const v = normalizeJogo2Virtue(space.virtue || 'desafio');
    const matchingVirtues = getJogo2MatchingVirtues(v);
    
    // 1. Tentar primeiro correspondência exata para o número desta casa (ex: Casa 12)
    const exactMatch = jogo2CustomCards.find(c => Number(c.spaceNumber) === spaceIndex);
    if (exactMatch) {
        return exactMatch;
    }
    
    // 2. Se não houver exata, procurar nas customizadas da categoria que servem para qualquer casa (spaceNumber nulo ou 0)
    const customMatching = jogo2CustomCards.filter(c => matchingVirtues.includes(normalizeJogo2Virtue(c.virtue)) && (!c.spaceNumber || Number(c.spaceNumber) === 0));
    if (customMatching.length > 0) {
        const rIndex = (spaceIndex) % customMatching.length;
        return customMatching[rIndex];
    }
    
    // 3. Se não há customizada correspondente, pega do banco padrão de backup
    const defaultVirtue = jogo2DefaultQuestions[v] ? v : (matchingVirtues.find(virtue => jogo2DefaultQuestions[virtue]) || 'desafio');
    const defaults = jogo2DefaultQuestions[defaultVirtue] || jogo2DefaultQuestions['desafio'];
    const rIndex = (spaceIndex) % defaults.length;
    const item = defaults[rIndex];
    
    return {
        id: `default-${defaultVirtue}-${rIndex}`,
        question: item.q,
        options: item.opt,
        answerIndex: item.ans,
        virtue: defaultVirtue,
        icon: getJogo2VirtueMeta(defaultVirtue).icon
    };
}

function updateJogo2Card(space, roll = null, shouldFlip = false) {
    const card = document.getElementById('jogo2-current-card');
    const completeBtn = document.getElementById('btn-jogo2-complete');
    const optionsContainer = document.getElementById('jogo2-card-options');
    const feedbackArea = document.getElementById('jogo2-card-feedback');
    const kicker = document.getElementById('jogo2-card-kicker');
    const iconArea = document.getElementById('jogo2-card-icon-area');
    const qTitle = document.getElementById('jogo2-card-question');
    const qText = document.getElementById('jogo2-card-text');

    if (!card) return;
    pendingJogo2Challenge = null;
    
    if (optionsContainer) optionsContainer.style.display = 'none';
    if (feedbackArea) feedbackArea.style.display = 'none';
    if (qText) qText.style.display = 'block';

    if (space.type === 'start') {
        if (kicker) kicker.textContent = 'Partida';
        if (iconArea) iconArea.textContent = '🏁';
        if (qTitle) qTitle.textContent = 'Gire a roleta para começar!';
        if (qText) qText.textContent = 'Avance pela Trilha das Forças e divirta-se respondendo aos desafios de caráter!';
        
        card.className = 'jogo2-card';
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
        }
        if (shouldFlip) flipJogo2Card(card);
        return;
    }

    if (space.type === 'finish') {
        if (kicker) kicker.textContent = 'Chegada';
        if (iconArea) iconArea.textContent = '🏆';
        if (qTitle) qTitle.textContent = 'Parabéns, você conseguiu!';
        if (qText) qText.textContent = 'Você completou toda a Trilha das Forças com sabedoria!';
        
        card.className = 'jogo2-card virtue-chegada';
        if (completeBtn) {
            completeBtn.disabled = true;
            completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
        }
        if (shouldFlip) flipJogo2Card(card);
        return;
    }

    const activePlayer = getActiveJogo2Player();
    const isSpecial = space.type === 'challenge';
    const isPenaltyHouse = [13, 23, 36].includes(jogo2Position) && !!activePlayer.isTrapped;
    
    let qData;
    if (isPenaltyHouse) {
        qData = {
            question: "Você pisou em uma armadilha! Você só pode sair se tirar o número 4 na roleta.",
            options: [],
            answerIndex: 0,
            virtue: "penalidade",
            icon: "🚫"
        };
        // Não marca skipNextTurn aqui – o jogador continua jogando mas preso na casa

    } else {
        qData = getQuestionForSpace(space, jogo2Position);
    }
    
    if (kicker) kicker.textContent = isPenaltyHouse ? `Casa ${jogo2Position} | Penalidade` : (isSpecial ? `Casa ${jogo2Position} | Especial` : `Casa ${jogo2Position}`);
    if (iconArea) iconArea.textContent = qData.icon;
    if (qTitle) qTitle.textContent = isPenaltyHouse ? 'Armadilha!' : space.label;
    if (qText) qText.style.display = 'none';

    if (isPenaltyHouse) {
        card.className = 'jogo2-card virtue-penalidade';
        if (optionsContainer) optionsContainer.style.display = 'none';
    } else {
        card.className = isSpecial ? 'jogo2-card virtue-desafio' : `jogo2-card virtue-${qData.virtue}`;
    }
    
    const isRobotTurn = isJogo2RobotTurn();
    
    if (optionsContainer && !isPenaltyHouse) {
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column';
        optionsContainer.innerHTML = `
            <div style="font-weight: 700; font-size: 1.05rem; margin-bottom: 8px; color: #1e293b; line-height: 1.35;">
                ${qData.question}
            </div>
            ${qData.options.map((opt, oIdx) => `
                <button type="button" class="jogo2-option-btn" ${isRobotTurn ? 'disabled style="cursor:not-allowed; opacity:0.8;"' : ''} onclick="handleJogo2AnswerChoice(this, ${oIdx}, ${qData.answerIndex})">
                    <span style="display:inline-grid; place-items:center; width:22px; height:22px; border-radius:50%; background:#f1f5f9; color:#475569; font-size:0.75rem; font-weight:900; margin-right:4px;">
                        ${String.fromCharCode(65 + oIdx)}
                    </span>
                    ${opt}
                </button>
            `).join('')}
        `;
    }
    // Auto‑advance for trap (penalidade) cards – no answer needed
    if (isPenaltyHouse) {
        setTimeout(() => {
            completeJogo2Card();
        }, 5000);
    }

    if (completeBtn) {
        completeBtn.disabled = true;
        completeBtn.innerHTML = '<i class="fas fa-arrow-right" aria-hidden="true"></i> Avançar Turno';
    }

    if (shouldFlip) flipJogo2Card(card);
    return qData;
}

function handleJogo2AnswerChoice(clickedBtn, selectedIndex, correctIndex) {
    const card = document.getElementById('jogo2-current-card');
    const optionsContainer = document.getElementById('jogo2-card-options');
    const feedbackArea = document.getElementById('jogo2-card-feedback');
    const completeBtn = document.getElementById('btn-jogo2-complete');

    if (!optionsContainer || !feedbackArea) return;

    const currentSpace = jogo2Spaces[jogo2Position];
    const specialChallenge = (currentSpace && currentSpace.type === 'challenge') ? currentSpace.challenge : null;

    optionsContainer.querySelectorAll('.jogo2-option-btn').forEach((btn, oIdx) => {
        btn.disabled = true;
        if (oIdx === correctIndex) {
            btn.classList.add('correct-choice');
        }
    });

    const isCorrect = selectedIndex === correctIndex;
    const activePlayer = getActiveJogo2Player();
    const previousPosition = activePlayer.position;
    const giveExtraSpeechRoom = !!(specialChallenge && specialChallenge.type === 'back_to_start');
    const isRobot = isJogo2RobotTurn();

    if (isCorrect) {
        clickedBtn.classList.add('correct-choice');
        feedbackArea.className = 'jogo2-card-feedback success';
        
        if (specialChallenge && specialChallenge.type === 'forward') {
            feedbackArea.innerHTML = `<i class="fas fa-circle-check"></i> Correto! Você avança +${specialChallenge.amount} casas de bônus!`;
            triggerOpponentQuote('correctAnswer');
            
            const targetPos = Math.min(previousPosition + specialChallenge.amount, jogo2Spaces.length - 1);
            const isButterfly = specialChallenge.amount === 3;
            triggerBeeOrButterflyEffect(previousPosition, targetPos, isButterfly);
            animateJogo2PawnSteps(previousPosition, targetPos);
        } else {
            feedbackArea.innerHTML = `<i class="fas fa-circle-check"></i> Correto! Muito bem!`;
            triggerOpponentQuote('correctAnswer');
            // Não anda casa extra, apenas consolida o lugar!
        }

    } else {
        clickedBtn.classList.add('wrong-choice');
        feedbackArea.className = 'jogo2-card-feedback danger';
        
        if (specialChallenge && specialChallenge.type === 'back_to_start') {
            feedbackArea.innerHTML = `<i class="fas fa-circle-xmark"></i> Errou! Você exagerou na força, por isso vai voltar ao início do jogo.`;
            triggerOpponentQuote('wrongAnswer');
            triggerExplosionEffect(previousPosition);
            announceJogo2(`${activePlayer.name} exagerou na força e voltou ao Início!`);
            animateJogo2PawnSteps(previousPosition, 0);
        } else if ([13, 23, 36].includes(previousPosition)) {
            feedbackArea.innerHTML = `<i class="fas fa-circle-xmark"></i> Errou! Como você já está em uma casa de penalidade, não voltará casas extras.`;
            triggerOpponentQuote('wrongAnswer');
            // Não anda para trás
        } else {
            let penaltyAmount = 2;
            if (specialChallenge && specialChallenge.type === 'back') {
                penaltyAmount = specialChallenge.amount;
            }

            feedbackArea.innerHTML = `<i class="fas fa-circle-xmark"></i> Errou! Você volta ${penaltyAmount} casas.`;
            triggerOpponentQuote('wrongAnswer');

            const targetPos = Math.max(0, previousPosition - penaltyAmount);
            animateJogo2PawnSteps(previousPosition, targetPos);
        }
    }

    feedbackArea.style.display = 'flex';
    
    // Avanço automático de turno (o usuário não precisa clicar em "Avançar Turno")
    if (completeBtn) {
        completeBtn.disabled = true;
        let count = isRobot ? (isCorrect ? 3 : 5) : 4;
        if (!isCorrect && giveExtraSpeechRoom) count += 1;
        completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
        
        if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
        jogo2CountdownInterval = setInterval(() => {
            count--;
            if (count > 0 && completeBtn) {
                completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
            } else {
                if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
            }
        }, 1000);

        if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
        jogo2TurnTimeout = setTimeout(() => {
            completeJogo2Card();
        }, (isRobot ? (isCorrect ? 3000 : 5000) : 4000) + ((!isCorrect && giveExtraSpeechRoom) ? 1000 : 0));

        // Rede de segurança: se o áudio do robô ou algum timer do card atrasar,
        // ainda assim finalizamos o turno depois de um pequeno buffer extra.
        if (isRobot) {
            if (jogo2RobotChoiceTimeout) clearTimeout(jogo2RobotChoiceTimeout);
            jogo2RobotChoiceTimeout = setTimeout(() => {
                if (jogo2WaitingCard) {
                    completeJogo2Card();
                }
            }, (isCorrect ? 5500 : 7500) + ((!isCorrect && giveExtraSpeechRoom) ? 1000 : 0));
        }
    }
}

function handleJogo2ComputerAnswer(qData, space) {
    if (!qData) return;
    
    const optionsContainer = document.getElementById('jogo2-card-options');
    if (!optionsContainer) return;

    const buttons = optionsContainer.querySelectorAll('.jogo2-option-btn');
    if (buttons.length === 0) return;

    // Sorteia se o computador acerta ou erra (taxa de acerto de 75%)
    const correctIndex = qData.answerIndex;
    const isCorrect = Math.random() < 0.75;
    let selectedIndex = correctIndex;

    if (!isCorrect) {
        const wrongIndices = [0, 1, 2].filter(idx => idx !== correctIndex);
        selectedIndex = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
    }

    const targetButton = buttons[selectedIndex];
    const specialChallenge = space.type === 'challenge' ? space.challenge : null;

    if (targetButton) {
        targetButton.style.border = '3px solid #a855f7';
        targetButton.style.boxShadow = '0 0 12px rgba(168, 85, 247, 0.4)';
        
        setTimeout(() => {
            handleJogo2AnswerChoice(targetButton, selectedIndex, correctIndex);
        }, 1500);

        // Fallback adicional: caso a seleção/feedback do robô fique preso por algum
        // atraso de fala ou atualização visual, encerramos a carta com segurança.
        if (jogo2RobotChoiceTimeout) clearTimeout(jogo2RobotChoiceTimeout);
        jogo2RobotChoiceTimeout = setTimeout(() => {
            if (jogo2WaitingCard) {
                completeJogo2Card();
            }
        }, 9000);
    }
}

function animateJogo2PawnSteps(fromPos, toPos) {
    const activePlayer = getActiveJogo2Player();
    let current = fromPos;
    const isForward = toPos > fromPos;

    if (fromPos === toPos) return;

    jogo2Animating = true; // Bloqueia ações durante animação

    function step() {
        if (!jogo2Started) {
            jogo2Animating = false;
            return;
        }
        if (isForward && current < toPos) {
            current++;
            activePlayer.position = current;
            syncJogo2Position();
            renderJogo2Board();
            playPawnJumpSound();
            setTimeout(step, 300);
        } else if (!isForward && current > toPos) {
            current--;
            activePlayer.position = current;
            syncJogo2Position();
            renderJogo2Board();
            playPawnJumpSound();
            setTimeout(step, 300);
        } else {
            jogo2Animating = false; // Animação concluída
            if (!isForward) {
                activePlayer.isTrapped = false;
            }
            syncJogo2Position();
            renderJogo2Board();
            
            if (activePlayer.position === jogo2Spaces.length - 1) {
                triggerConfettiCelebration();
                announceJogo2(`${activePlayer.name} chegou ao FIM da Trilha!`);
                if (jogo2SoloMode && activeJogo2PlayerIndex === 1) {
                    triggerOpponentQuote('wonGame');
                } else if (jogo2SoloMode && activeJogo2PlayerIndex === 0) {
                    triggerOpponentQuote('lostGame');
                } else {
                    speak('Parabéns! Você completou a trilha!');
                }
                updateJogo2Card(jogo2Spaces[activePlayer.position]);
            }
        }
    }
    setTimeout(step, 350);
}

function startJogo2Game() {
    const container = document.getElementById('game-jogo2-container');
    if (container) container.classList.remove('is-setup');
    
    jogo2Position = 0;
    jogo2Started = true;
    pendingJogo2Challenge = null;
    jogo2Rolling = false;
    jogo2WaitingCard = false;
    activeJogo2PlayerIndex = 0;
    jogo2PowerHintSpoken = false;
    jogo2Players.forEach(player => {
        player.position = 0;
        player.skipNextTurn = false;
        player.isTrapped = false;
        player.trapAttempts = 0;
    });
    
    if (!document.getElementById('jogo2-confetti-styles')) {
        const style = document.createElement('style');
        style.id = 'jogo2-confetti-styles';
        style.innerHTML = `
            @keyframes confetti-fall {
                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                100% { transform: translateY(90vh) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    renderJogo2Board();
    showJogo2WaitingForRollCard();
    
    registerUsageCatalog('activity', 'Jogo: Trilha de Aprendizado de Forças', {
        key: 'game:jogo2',
        group: 'Jogos'
    });
    trackUsageActivity('Jogo: Trilha de Aprendizado de Forças', {
        key: 'game:jogo2',
        group: 'Jogos',
        detail: 'Jogo iniciado'
    });
    
    const soloCheckbox = document.getElementById('jogo2-solo-mode-checkbox');
    if (soloCheckbox) {
        jogo2SoloMode = !!soloCheckbox.checked;
        if (jogo2SoloMode) {
            const selOpp = JOGO2_OPPONENTS_FIXED[getSelectedOpponentIndex()];
            jogo2Players[1].name = selOpp ? selOpp.name : 'Computador';
            jogo2Players[1].avatar = selOpp ? selOpp.photo : null;
        }
    }

    const firstPlayer = getActiveJogo2Player();
    announceJogo2(`Partida iniciada! Vez ${getPreposicaoDoDa(firstPlayer.name)} ${firstPlayer.name}.`);

    setupJogo2RollButtonListeners();
    resetJogo2PowerMeter();

    const rollBtn = document.getElementById('btn-jogo2-roll');
    const labelEl = document.getElementById('btn-jogo2-roll-label');

    if (isJogo2RobotTurn()) {
        if (rollBtn) rollBtn.disabled = true;
        if (labelEl) labelEl.innerHTML = `<i class="fas fa-robot"></i> ${firstPlayer.name} Pensando...`;
        speak(`Vez ${getPreposicaoDoDa(firstPlayer.name)} ${firstPlayer.name}.`);
        jogo2RobotStartTimeout = setTimeout(() => {
            if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Girando...';
            rollJogo2Die();
        }, 4000);
    } else {
        if (rollBtn) rollBtn.disabled = false;
        if (labelEl) labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
        if (!jogo2PowerHintSpoken) {
            jogo2PowerHintSpoken = true;
            speak(`${firstPlayer.name}, segure o botão para dar força na roleta`);
        } else {
            speak(`Vez ${getPreposicaoDoDa(firstPlayer.name)} ${firstPlayer.name}.`);
        }
    }
}

let jogo2PowerMeterInterval = null;
let jogo2HoldPower = 0;
let jogo2IsHoldingPower = false;
let jogo2PressStartTime = 0;

function getJogo2RollButtonControls() {
    const rollButton = document.getElementById('btn-jogo2-roll');
    if (!rollButton) return { rollButton: null, fillEl: null, labelEl: null };

    let fillEl = document.getElementById('btn-jogo2-roll-fill');
    let labelEl = document.getElementById('btn-jogo2-roll-label');

    if (!fillEl || !labelEl) {
        rollButton.innerHTML = `
            <div class="jogo2-roll-fill" id="btn-jogo2-roll-fill"></div>
            <span class="jogo2-roll-label" id="btn-jogo2-roll-label">
                <i class="fas fa-sync-alt" aria-hidden="true"></i> Girar Roleta
            </span>
        `;
        fillEl = document.getElementById('btn-jogo2-roll-fill');
        labelEl = document.getElementById('btn-jogo2-roll-label');
    }

    return { rollButton, fillEl, labelEl };
}

function resetJogo2PowerMeter() {
    if (jogo2PowerMeterInterval) {
        clearInterval(jogo2PowerMeterInterval);
        jogo2PowerMeterInterval = null;
    }
    jogo2HoldPower = 0;
    jogo2IsHoldingPower = false;
    
    const { rollButton, fillEl, labelEl } = getJogo2RollButtonControls();
    
    if (fillEl) fillEl.style.width = '0%';
    if (labelEl && !jogo2Rolling) {
        if (isJogo2RobotTurn()) {
            const activePlayer = getActiveJogo2Player();
            labelEl.innerHTML = `<i class="fas fa-robot"></i> ${activePlayer.name} Jogando...`;
        } else {
            labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
        }
    }
    if (rollButton && !jogo2Rolling) {
        rollButton.disabled = isJogo2RobotTurn();
    }
}

function updatePowerButtonDisplay(val) {
    jogo2HoldPower = Math.max(0, Math.min(100, Math.round(val)));
    const { fillEl, labelEl } = getJogo2RollButtonControls();
    if (fillEl) fillEl.style.width = `${jogo2HoldPower}%`;
    if (labelEl) {
        labelEl.innerHTML = `<i class="fas fa-bolt fa-bounce"></i> Força: ${jogo2HoldPower}%`;
    }
}

function startHoldingPower() {
    if (!jogo2Started || jogo2Rolling || jogo2WaitingCard || isJogo2RobotTurn()) return;
    
    jogo2IsHoldingPower = true;
    jogo2PressStartTime = Date.now();
    jogo2HoldPower = 10;
    updatePowerButtonDisplay(jogo2HoldPower);
    
    if (jogo2PowerMeterInterval) clearInterval(jogo2PowerMeterInterval);
    jogo2PowerMeterInterval = setInterval(() => {
        if (jogo2IsHoldingPower) {
            jogo2HoldPower += 2;
            if (jogo2HoldPower > 100) jogo2HoldPower = 100;
            updatePowerButtonDisplay(jogo2HoldPower);
        }
    }, 45);
}

function releaseHoldingPower() {
    if (!jogo2IsHoldingPower) return;
    
    jogo2IsHoldingPower = false;
    if (jogo2PowerMeterInterval) {
        clearInterval(jogo2PowerMeterInterval);
        jogo2PowerMeterInterval = null;
    }
    
    const pressDuration = Date.now() - jogo2PressStartTime;
    let finalPower = jogo2HoldPower;
    
    if (pressDuration < 150) {
        finalPower = 70;
        updatePowerButtonDisplay(70);
    }
    
    rollJogo2Die(finalPower);
}

function setupJogo2RollButtonListeners() {
    const btn = document.getElementById('btn-jogo2-roll');
    if (!btn) return;
    
    btn.onmousedown = (e) => { e.preventDefault(); startHoldingPower(); };
    btn.onmouseup = (e) => { e.preventDefault(); releaseHoldingPower(); };
    btn.onmouseleave = (e) => { if (jogo2IsHoldingPower) releaseHoldingPower(); };
    
    btn.ontouchstart = (e) => { e.preventDefault(); startHoldingPower(); };
    btn.ontouchend = (e) => { e.preventDefault(); releaseHoldingPower(); };
    btn.ontouchcancel = (e) => { if (jogo2IsHoldingPower) releaseHoldingPower(); };
}

function rollJogo2Die(appliedPower) {
    if (!jogo2Started) {
        showJogo2Setup();
        return;
    }
    const activePlayer = getActiveJogo2Player();
    if (activePlayer.position >= jogo2Spaces.length - 1) return;
    if (jogo2Rolling) return;
    if (jogo2WaitingCard) {
        announceJogo2('Escolha uma das opções para responder à pergunta antes de girar.');
        speak('Responda à pergunta primeiro.');
        return;
    }

    let power = appliedPower;
    if (power === undefined || power === null) {
        power = Math.floor(Math.random() * 46) + 50;
    }
    updatePowerButtonDisplay(power);

    jogo2Rolling = true;
    const roll = Math.floor(Math.random() * 7) + 1;
    const { rollButton, labelEl } = getJogo2RollButtonControls();
    
    if (rollButton) rollButton.disabled = true;
    if (labelEl) {
        labelEl.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Girando...';
    }

    let extraSpins = 6;
    let spinDuration = 3000;
    if (power <= 40) {
        extraSpins = 3;
        spinDuration = 2200;
    } else if (power >= 80) {
        extraSpins = 9;
        spinDuration = 3800;
    }

    const arrow = document.getElementById('jogo2-wheel-arrow');
    if (arrow) {
        const targetSliceAngle = (roll - 1) * (360/7) + (180/7);
        const currentFullSpins = Math.floor(jogo2WheelRotation / 360);
        jogo2WheelRotation = (currentFullSpins + extraSpins) * 360 + targetSliceAngle;
        arrow.style.transition = `transform ${spinDuration}ms cubic-bezier(0.1, 0.8, 0.25, 1)`;
        arrow.style.transform = `translate(-50%, -50%) rotate(${jogo2WheelRotation}deg)`;
    }

    function showJogo2SpinningCard() {
        const card = document.getElementById('jogo2-current-card');
        const optionsContainer = document.getElementById('jogo2-card-options');
        const feedbackArea = document.getElementById('jogo2-card-feedback');
        const kicker = document.getElementById('jogo2-card-kicker');
        const iconArea = document.getElementById('jogo2-card-icon-area');
        const qTitle = document.getElementById('jogo2-card-question');
        const qText = document.getElementById('jogo2-card-text');

        if (!card) return;
        
        if (optionsContainer) optionsContainer.style.display = 'none';
        if (feedbackArea) feedbackArea.style.display = 'none';
        if (qText) qText.style.display = 'none';
        
        if (kicker) kicker.textContent = 'Girando...';
        if (iconArea) iconArea.textContent = '❓';
        if (qTitle) qTitle.textContent = 'Aguarde o sorteio...';
        
        card.className = 'jogo2-card'; // Reseta cor da carta para padrão
    }

    showJogo2SpinningCard();
    speak('Girando a roleta!', 0.2);
    playWheelTicks(spinDuration);

    jogo2WheelSpinTimeout = setTimeout(() => {
        if (!jogo2Started) return;
        const previousPosition = activePlayer.position;
        const isCurrentlyTrapped = !!activePlayer.isTrapped;

        if (isCurrentlyTrapped) {
            if (roll !== 4) {
                activePlayer.trapAttempts = (activePlayer.trapAttempts || 0) + 1;

                const card = document.getElementById('jogo2-current-card');
                const qTitle = document.getElementById('jogo2-card-question');
                const qText = document.getElementById('jogo2-card-text');
                const iconArea = document.getElementById('jogo2-card-icon-area');
                const kicker = document.getElementById('jogo2-card-kicker');
                const optionsContainer = document.getElementById('jogo2-card-options');
                const completeBtn = document.getElementById('btn-jogo2-complete');
                const failedAttempts = activePlayer.trapAttempts;
                const shouldReleaseTrap = failedAttempts >= 3;

                if (shouldReleaseTrap) {
                    const targetPos = Math.max(0, previousPosition - 5);
                    activePlayer.trapAttempts = 0;
                    activePlayer.isTrapped = false;

                    if (kicker) kicker.textContent = 'Armadilha liberada!';
                    if (iconArea) iconArea.textContent = '🔓';
                    if (qTitle) qTitle.textContent = 'Você saiu da armadilha!';
                    if (qText) {
                        qText.style.display = 'block';
                        qText.innerHTML = `Você falhou pela terceira vez. A armadilha foi liberada, mas você perde 5 posições.`;
                    }
                    if (optionsContainer) optionsContainer.style.display = 'none';
                    if (card) card.className = 'jogo2-card virtue-penalidade';

                    jogo2WaitingCard = true;
                    renderJogo2Board();
                    speak('Terceira tentativa sem sucesso. A armadilha foi liberada, mas você perde 5 posições.');
                    announceJogo2(`${activePlayer.name} saiu da armadilha após 3 tentativas e perdeu 5 posições.`);
                    animateJogo2PawnSteps(previousPosition, targetPos);
                } else {
                    if (kicker) kicker.textContent = 'Ainda preso...';
                    if (iconArea) iconArea.textContent = '🔒';
                    if (qTitle) qTitle.textContent = 'Não foi dessa vez!';
                    if (qText) {
                        qText.style.display = 'block';
                        qText.innerHTML = `Você rolou ${roll}, mas precisa de um 4 para escapar da armadilha. Tentativa ${failedAttempts} de 3.`;
                    }
                    if (optionsContainer) optionsContainer.style.display = 'none';
                    if (card) card.className = 'jogo2-card virtue-penalidade';

                    jogo2WaitingCard = true;
                    renderJogo2Board();
                    speak(`Você rolou ${roll}. Ainda está preso na armadilha. Tentativa ${failedAttempts} de 3.`);
                }

                jogo2Rolling = false;

                if (completeBtn) {
                    completeBtn.disabled = true;
                    const trapAdvanceDelay = shouldReleaseTrap ? 12000 : 10000;
                    let count = trapAdvanceDelay / 1000;
                    completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;

                    if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                    jogo2CountdownInterval = setInterval(() => {
                        count--;
                        if (count > 0 && completeBtn) {
                            completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                        } else {
                            if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                        }
                    }, 1000);

                    if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
                    jogo2TurnTimeout = setTimeout(() => {
                        completeJogo2Card();
                    }, trapAdvanceDelay);
                }
                return;
            }

            // Escapou!
            activePlayer.trapAttempts = 0;
            activePlayer.isTrapped = false;
            speak('Parabéns! Você tirou 4 e escapou da armadilha!');
            announceJogo2(`${activePlayer.name} tirou 4 e escapou da armadilha!`);
        }
        
        if (roll === 7) {
            // Caiu na fatia "Passa a Vez" – a rodada ATUAL termina, sem penalidade extra
            
            const card = document.getElementById('jogo2-current-card');
            const qTitle = document.getElementById('jogo2-card-question');
            const qText = document.getElementById('jogo2-card-text');
            const iconArea = document.getElementById('jogo2-card-icon-area');
            const kicker = document.getElementById('jogo2-card-kicker');
            const optionsContainer = document.getElementById('jogo2-card-options');
            const completeBtn = document.getElementById('btn-jogo2-complete');

            if (kicker) kicker.textContent = `Poxa vida...`;
            if (iconArea) iconArea.textContent = '🚫';
            if (qTitle) qTitle.textContent = 'Passou a vez!';
            if (qText) {
                qText.style.display = 'block';
                qText.innerHTML = 'Você rodou a roleta e caiu em "Passa a Vez". Sua jogada termina aqui — na próxima rodada você joga normalmente!';
            }
            if (optionsContainer) optionsContainer.style.display = 'none';
            if (card) card.className = 'jogo2-card virtue-penalidade';
            
            jogo2WaitingCard = true;
            renderJogo2Board();
            
            speak(`Ah não! Você tirou Passa a vez na roleta.`);
            
            jogo2Rolling = false;
            
            if (completeBtn) {
                completeBtn.disabled = true;
                let count = 4;
                completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                
                if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                jogo2CountdownInterval = setInterval(() => {
                    count--;
                    if (count > 0 && completeBtn) {
                        completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                    } else {
                        if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                    }
                }, 1000);

                if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
                jogo2TurnTimeout = setTimeout(() => {
                    completeJogo2Card();
                }, 4000);
            }
            return;
        }

        let escapedTrap = false;
        if (isCurrentlyTrapped && roll === 4) {
            escapedTrap = true;
        }

        const targetPosition = Math.min(previousPosition + roll, jogo2Spaces.length - 1);
        
        let currentStep = previousPosition;
        function walkStep() {
            if (!jogo2Started) return;
            if (currentStep < targetPosition) {
                currentStep++;
                activePlayer.position = currentStep;
                syncJogo2Position();
                renderJogo2Board();
                playPawnJumpSound();
                setTimeout(walkStep, 300);
            } else {
                const currentSpace = jogo2Spaces[targetPosition];
                const isPenaltyHouse = [13, 23, 36].includes(targetPosition);
                
                if (isPenaltyHouse && !escapedTrap) {
                    activePlayer.isTrapped = true;
                    activePlayer.trapAttempts = 0;
                } else {
                    activePlayer.isTrapped = false;
                    activePlayer.trapAttempts = 0;
                }
                
                if (escapedTrap) {
                    jogo2WaitingCard = true;
                    renderJogo2Board();
                    
                    const card = document.getElementById('jogo2-current-card');
                    const qTitle = document.getElementById('jogo2-card-question');
                    const qText = document.getElementById('jogo2-card-text');
                    const iconArea = document.getElementById('jogo2-card-icon-area');
                    const kicker = document.getElementById('jogo2-card-kicker');
                    const optionsContainer = document.getElementById('jogo2-card-options');
                    const feedbackArea = document.getElementById('jogo2-card-feedback');
                    const completeBtn = document.getElementById('btn-jogo2-complete');

                    if (kicker) kicker.textContent = `Escapou!`;
                    if (iconArea) iconArea.textContent = '🔓';
                    if (qTitle) qTitle.textContent = 'Livre da armadilha!';
                    if (qText) {
                        qText.style.display = 'block';
                        qText.innerHTML = `Você escapou da armadilha e avançou para a casa ${targetPosition} (${currentSpace.name}). Sua jogada termina aqui.`;
                    }
                    if (optionsContainer) optionsContainer.style.display = 'none';
                    if (feedbackArea) feedbackArea.style.display = 'none';
                    if (card) card.className = 'jogo2-card virtue-escapou';
                    
                    speak(`Livre da armadilha! Você avançou para a casa ${currentSpace.name}. Passando a vez.`);
                    
                    jogo2Rolling = false;
                    
                    if (completeBtn) {
                        completeBtn.disabled = true;
                        let count = 4;
                        completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                        
                        if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                        jogo2CountdownInterval = setInterval(() => {
                            count--;
                            if (count > 0 && completeBtn) {
                                completeBtn.innerHTML = `<i class="fas fa-arrow-right"></i> Avançando em ${count}s...`;
                            } else {
                                if (jogo2CountdownInterval) clearInterval(jogo2CountdownInterval);
                            }
                        }, 1000);

                        if (jogo2TurnTimeout) clearTimeout(jogo2TurnTimeout);
                        jogo2TurnTimeout = setTimeout(() => {
                            completeJogo2Card();
                        }, 4000);
                    }
                    return;
                }
                
                jogo2WaitingCard = currentSpace.type !== 'finish';
                renderJogo2Board();

                // Disparar efeitos visuais lúdicos nas casas do tabuleiro
                if (currentSpace.virtue === 'exagerou_forca') {
                    triggerExplosionEffect(targetPosition);
                } else if (targetPosition === 15) {
                    triggerSpiderWebEffect(targetPosition);
                }
                
                const qData = updateJogo2Card(currentSpace, roll, true);
                
                if (isPenaltyHouse) {
                    announceJogo2(`${activePlayer.name} tirou ${roll} na roleta e caiu em uma armadilha na casa ${targetPosition}.`);
                    speak(`Você tirou ${roll} e caiu em uma armadilha!`);
                } else if (currentSpace.type === 'finish') {
                    triggerConfettiCelebration();
                    announceJogo2(`${activePlayer.name} chegou ao FIM da Trilha!`);
                    if (jogo2SoloMode && activeJogo2PlayerIndex === 1) {
                        triggerOpponentQuote('wonGame');
                    } else if (jogo2SoloMode && activeJogo2PlayerIndex === 0) {
                        triggerOpponentQuote('lostGame');
                    } else {
                        speak(`Parabéns, ${activePlayer.name}! Você é o grande campeão!`);
                    }
                    showJogo2ChampionModal(activePlayer.name);
                } else {
                    announceJogo2(`${activePlayer.name} tirou ${roll} na roleta e caiu na casa ${targetPosition} (${currentSpace.name}). Responda para consolidar!`);
                    speak(`Você tirou ${roll} e caiu na casa ${currentSpace.name}. Responda à pergunta!`);
                }
                
                jogo2Rolling = false;

                if (isJogo2RobotTurn()) {
                    if (rollButton) {
                        rollButton.disabled = true;
                    }
                    if (labelEl) {
                        labelEl.innerHTML = `<i class="fas fa-robot"></i> ${activePlayer.name} Jogando...`;
                    }
                    if (currentSpace.type !== 'finish') {
                        jogo2RobotAnswerTimeout = setTimeout(() => {
                            handleJogo2ComputerAnswer(qData, currentSpace);
                        }, 7000);
                    }
                } else {
                    if (rollButton) {
                        rollButton.disabled = false;
                    }
                    if (labelEl) {
                        labelEl.innerHTML = '<i class="fas fa-sync-alt"></i> Girar Roleta';
                    }
                }
            }
        }
        const walkDelay = escapedTrap ? 4500 : 300;
        jogo2WalkStepTimeout = setTimeout(walkStep, walkDelay);

    }, 3000); // 3 segundos de rotacao da roleta
}

function completeJogo2Card() {
    // Se o peão ainda está animando, aguarda terminar antes de avançar
    if (jogo2Animating) {
        jogo2CompleteCardTimeout = setTimeout(completeJogo2Card, 400);
        return;
    }

    // Limpar TODOS os timers pendentes para evitar que ações residuais do turno anterior
    // disparem no turno do próximo jogador (bug: "jogo jogou sozinho na minha vez")
    if (jogo2TurnTimeout) { clearTimeout(jogo2TurnTimeout); jogo2TurnTimeout = null; }
    if (jogo2CountdownInterval) { clearInterval(jogo2CountdownInterval); jogo2CountdownInterval = null; }
    if (jogo2RobotTurnTimeout) { clearTimeout(jogo2RobotTurnTimeout); jogo2RobotTurnTimeout = null; }
    if (jogo2RobotAnswerTimeout) { clearTimeout(jogo2RobotAnswerTimeout); jogo2RobotAnswerTimeout = null; }
    if (jogo2RobotChoiceTimeout) { clearTimeout(jogo2RobotChoiceTimeout); jogo2RobotChoiceTimeout = null; }
    if (jogo2RobotStartTimeout) { clearTimeout(jogo2RobotStartTimeout); jogo2RobotStartTimeout = null; }
    if (jogo2WalkStepTimeout) { clearTimeout(jogo2WalkStepTimeout); jogo2WalkStepTimeout = null; }
    if (jogo2WheelSpinTimeout) { clearTimeout(jogo2WheelSpinTimeout); jogo2WheelSpinTimeout = null; }
    if (jogo2CompleteCardTimeout) { clearTimeout(jogo2CompleteCardTimeout); jogo2CompleteCardTimeout = null; }

    // Cancelar qualquer fala TTS pendente para evitar atropelamento de áudios
    try { window.speechSynthesis.cancel(); } catch(e) {}
    if (typeof currentAudio !== 'undefined' && currentAudio) { try { currentAudio.pause(); } catch(e) {} }

    const completeBtn = document.getElementById('btn-jogo2-complete');
    if (completeBtn) {
        completeBtn.disabled = true;
    }
    
    jogo2WaitingCard = false;
    jogo2Rolling = false;
    try {
        announceJogo2(`${getActiveJogo2Player().name} concluiu o seu turno.`);
    } catch (err) {
        console.warn('Falha ao anunciar conclusão do turno do Jogo 2:', err);
    }
    
    try {
        advanceJogo2PlayerTurn();
    } catch (err) {
        console.error('Falha ao avançar o turno do Jogo 2:', err);
        // Última proteção: tenta avançar de novo no próximo ciclo da UI.
        setTimeout(() => {
            try {
                advanceJogo2PlayerTurn();
            } catch (retryErr) {
                console.error('Falha ao reenfileirar o avanço do Jogo 2:', retryErr);
            }
        }, 0);
    }
}

function triggerConfettiCelebration() {
    const container = document.getElementById('game-jogo2-container');
    if (!container) return;
    
    for (let i = 0; i < 75; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = Math.random() * 8 + 6 + 'px';
        confetti.style.height = Math.random() * 8 + 6 + 'px';
        
        const colors = ['#f43f5e', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#facc15'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-20px';
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '999';
        confetti.style.pointerEvents = 'none';
        
        const duration = Math.random() * 2.5 + 2;
        const delay = Math.random() * 1.5;
        confetti.style.animation = `confetti-fall ${duration}s ${delay}s linear forwards`;
        
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), (duration + delay) * 1000);
    }
}

function showJogo2ChampionModal(winnerName) {
    let overlay = document.getElementById('jogo2-champion-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'jogo2-champion-overlay';
        document.body.appendChild(overlay);
    }
    
    const isRobot = winnerName && (winnerName.includes('Robô') || winnerName.includes('Computador'));
    const avatarEmoji = isRobot ? '🐘🤖' : '🐘👑';

    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(15, 23, 42, 0.82);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        animation: fadeInOverlay 0.3s ease-out;
    `;

    overlay.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #ffffff 0%, #fff7ed 60%, #ffedd5 100%);
            border: 4px solid #f59e0b;
            border-radius: 32px;
            padding: 32px 28px;
            max-width: 480px;
            width: 100%;
            text-align: center;
            box-shadow: 0 25px 60px rgba(245, 158, 11, 0.4), 0 0 0 8px rgba(255, 255, 255, 0.25);
            position: relative;
            animation: popUpModal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        ">
            <div style="font-size: 1rem; font-weight: 900; color: #d97706; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;">
                🏆 GRANDE CAMPEÃO 🏆
            </div>
            
            <div style="margin: 14px 0; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.18));">
                <span style="font-size: 5.5rem; display: inline-block; animation: bounce-pawn 1.2s ease-in-out infinite alternate;">
                    ${avatarEmoji}
                </span>
            </div>

            <h2 style="font-family: 'Outfit', sans-serif; font-size: 2.2rem; font-weight: 950; margin: 6px 0 10px 0; line-height: 1.15; color: #ea580c;">
                ${winnerName}
            </h2>

            <p style="font-size: 1rem; color: #475569; font-weight: 700; margin: 8px 0 24px 0; line-height: 1.4;">
                Superou todos os desafios com sabedoria, alegria e coragem! 🌟✨
            </p>

            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <button type="button" onclick="closeJogo2ChampionModal(); showJogo2Setup();" style="
                    background: linear-gradient(135deg, #22c55e, #16a34a);
                    color: white;
                    border: none;
                    border-radius: 16px;
                    padding: 14px 28px;
                    font-size: 1.05rem;
                    font-weight: 900;
                    cursor: pointer;
                    box-shadow: 0 6px 16px rgba(34, 197, 94, 0.35);
                    transition: transform 0.15s, box-shadow 0.15s;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                ">
                    <i class="fas fa-rotate-right" aria-hidden="true"></i> Jogar Novamente
                </button>
                <button type="button" onclick="closeJogo2ChampionModal();" style="
                    background: #ffffff;
                    color: #475569;
                    border: 2px solid #cbd5e1;
                    border-radius: 16px;
                    padding: 14px 20px;
                    font-size: 0.95rem;
                    font-weight: 800;
                    cursor: pointer;
                ">
                    Fechar
                </button>
            </div>
        </div>
    `;

    if (typeof confetti === 'function') {
        try {
            confetti({ particleCount: 150, spread: 90, origin: { y: 0.55 } });
        } catch(e) {}
    }
}

function closeJogo2ChampionModal() {
    const overlay = document.getElementById('jogo2-champion-overlay');
    if (overlay) overlay.remove();
}


// =============================================
// CONTAINER GENÉRICO DE "JOGO" (exercício dedicado, seed_key próprio)
// Usado pelos 3 jogos com cartas manuais (Memória, Memória do Alfabeto,
// Reconhecimento de Palavras). Tenta Supabase primeiro — assim o admin cria as
// cartas num aparelho e quem joga vê no outro — e cai pro IndexedDB local só sem
// supabaseClient (uso offline). Nunca toca em exercícios reais do usuário.
// =============================================
// Deriva uma seed_key única por médico a partir da global (ex.:
// 'naming-game-container' -> 'naming-game-container:doctor:<uuid>') — sem
// isso, lastMergedExercises.find(seedKey === X) fica ambíguo assim que o
// container do médico e o global aparecerem juntos pro mesmo cliente (ex.:
// admin, que enxerga tudo).
function doctorScopedSeedKey(baseSeedKey, doctorUserId) {
    return `${baseSeedKey}:doctor:${doctorUserId}`;
}

async function getOrCreateGameContainer(seedKey, title, doctorUserId = null) {
    if (supabaseClient && doctorUserId) {
        // Container do próprio médico: busca só por (seed_key, doctor_user_id)
        // e, se não achar, insere direto com os dois já setados — pula
        // deliberadamente a cadeia de fallback por título logo abaixo (ela é
        // só pra containers antigos do admin sem seed_key; reusada aqui, um
        // médico sem container ainda receberia o container GLOBAL do admin
        // como se fosse seu, pelo título bater).
        try {
            const { data: existing, error } = await supabaseClient.from('exercises')
                .select('*').eq('seed_key', seedKey).eq('doctor_user_id', doctorUserId).maybeSingle();
            if (!error && existing) {
                return { ...existing, fromSupabase: true, seedKey, visible: existing.visible !== undefined ? existing.visible !== false : false };
            }
        } catch (e) {}

        try {
            const { data: created, error: insertErr } = await supabaseClient.from('exercises')
                .insert([{ title, visible: false, seed_key: seedKey, doctor_user_id: doctorUserId, company_id: currentUserCompanyId }])
                .select().single();
            if (!insertErr && created) return { ...created, fromSupabase: true, seedKey };
        } catch (e) {}

        return null;
    }

    if (supabaseClient) {
        try {
            const { data: existing, error } = await supabaseClient.from('exercises').select('*').eq('seed_key', seedKey).maybeSingle();
            if (!error && existing) {
                return {
                    ...existing,
                    fromSupabase: true,
                    seedKey,
                    visible: existing.visible !== undefined ? existing.visible !== false : false
                };
            }
        } catch (e) {}

        try {
            const { data: byTitle, error: titleErr } = await supabaseClient.from('exercises').select('*').eq('title', title).maybeSingle();
            if (!titleErr && byTitle) {
                return {
                    ...byTitle,
                    fromSupabase: true,
                    seedKey: byTitle.seed_key || seedKey,
                    visible: byTitle.visible !== undefined ? byTitle.visible !== false : false
                };
            }
        } catch (e) {}

        try {
            const { data: created, error: insertErr } = await supabaseClient.from('exercises')
                .insert([{ title, visible: false, seed_key: seedKey }])
                .select().single();
            if (!insertErr && created) return { ...created, fromSupabase: true, seedKey };
        } catch (e) {}

        try {
            const { data: created, error: insertErr } = await supabaseClient.from('exercises')
                .insert([{ title, visible: false }])
                .select().single();
            if (!insertErr && created) return { ...created, fromSupabase: true, seedKey: created.seed_key || seedKey };
        } catch (e) {}

        try {
            const { data: created, error: insertErr } = await supabaseClient.from('exercises')
                .insert([{ title }])
                .select().single();
            if (!insertErr && created) {
                return {
                    ...created,
                    fromSupabase: true,
                    seedKey: created.seed_key || seedKey,
                    visible: created.visible !== undefined ? created.visible !== false : false
                };
            }
        } catch (e) {}
    }

    return new Promise((resolve) => {
        db.transaction(['exercises'], 'readonly').objectStore('exercises').getAll().onsuccess = (e) => {
            const found = (e.target.result || []).find(ex => ex.seedKey === seedKey);
            if (found) { resolve({ ...found, fromSupabase: false }); return; }
            const store = db.transaction(['exercises'], 'readwrite').objectStore('exercises');
            const request = store.add({ title, items: [], seedKey, visible: false });
            request.onsuccess = (ev) => {
                resolve({ id: ev.target.result, title, items: [], seedKey, visible: false, fromSupabase: false });
            };
        };
    });
}

function isGameContainerSeedKey(seedKey, baseSeedKey) {
    return seedKey === baseSeedKey || (typeof seedKey === 'string' && seedKey.startsWith(`${baseSeedKey}:doctor:`));
}

// Resolve qual container de jogo (naming/afasia) usar pra leitura:
// - médico autorando: só o próprio, sem fallback pro global (cair no
//   container do admin por engano faria o próximo save criar uma cópia
//   dessincronizada, nunca vista por ninguém);
// - paciente jogando: tenta primeiro o container do médico dele (só usa se
//   tiver itens), senão cai pro container global do admin — exatamente o
//   comportamento de hoje, preservado pra quem não tem nada configurado;
// - qualquer outro caso (admin, por exemplo): container global, como sempre.
function resolveGameContainer(baseSeedKey) {
    if (isDoctor && currentUserId) {
        return lastMergedExercises.find(ex => ex.seedKey === doctorScopedSeedKey(baseSeedKey, currentUserId)) || null;
    }
    if (currentPatientId && currentPatientDoctorUserId) {
        const own = lastMergedExercises.find(ex => ex.seedKey === doctorScopedSeedKey(baseSeedKey, currentPatientDoctorUserId));
        if (own && own.items && own.items.length > 0) return own;
    }
    return lastMergedExercises.find(ex => ex.seedKey === baseSeedKey) || null;
}

function putLocalGameContainer(container) {
    return new Promise((resolve) => {
        db.transaction(['exercises'], 'readwrite').objectStore('exercises').put(container).onsuccess = resolve;
    });
}

// =============================================
// CARTAS DO JOGO DA MEMÓRIA (CRUD)
// Cada par usa duas imagens amarradas pelo mesmo pair_id — ver getMemoryCardPairs().
// =============================================
const MEMORY_CARDS_SEED_KEY = 'memory-cards-container';
const MEMORY_CARDS_TITLE = 'Cartas do Jogo da Memória|blue';

function makePairId() {
    return 'pair-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

// Mesmo padrão de getNamingContainer/getAfasiaContainer (Fase 10-11):
// médico autorando usa o próprio container; admin usa o global de sempre.
function getMemoryContainer() {
    return isDoctor && currentUserId
        ? getOrCreateGameContainer(doctorScopedSeedKey(MEMORY_CARDS_SEED_KEY, currentUserId), MEMORY_CARDS_TITLE, currentUserId)
        : getOrCreateGameContainer(MEMORY_CARDS_SEED_KEY, MEMORY_CARDS_TITLE);
}

async function addMemoryCardPair(label, imageFileA, imageFileB) {
    const container = await getMemoryContainer();
    const pairId = makePairId();

    if (container.fromSupabase) {
        try {
            const [imageUrlA, imageUrlB] = await Promise.all([
                uploadToSupabaseStorage('media_uploads', 'images', imageFileA),
                uploadToSupabaseStorage('media_uploads', 'images', imageFileB)
            ]);
            const { error: insertErr } = await supabaseClient.from('exercise_items').insert([
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlA, link: '' },
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlB, link: '' }
            ]);
            if (insertErr) console.error('Erro ao salvar carta no Supabase:', insertErr);
        } catch (e) {
            console.error('Erro ao subir imagem/salvar carta no Supabase:', e);
        }
    } else {
        const base = { word: label, textColor: '#333333', textSize: 100, isUppercase: false, isBold: true, videoLink: '', pairId };
        container.items = [
            ...(container.items || []),
            { ...base, imageBlob: imageFileA || null, image_url: null },
            { ...base, imageBlob: imageFileB || null, image_url: null }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderMemoryManageGrid();
}

async function updateMemoryCardPair(pairId, label, imageFileA, imageFileB) {
    const container = await getMemoryContainer();

    if (container.fromSupabase) {
        const { data: pairItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!pairItems || pairItems.length !== 2) return;
        const files = [imageFileA, imageFileB];
        for (let i = 0; i < 2; i++) {
            const update = { word: label };
            if (files[i]) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', files[i]);
            await supabaseClient.from('exercise_items').update(update).eq('id', pairItems[i].id);
        }
    } else {
        const pairItems = (container.items || []).filter(it => it.pairId === pairId);
        if (pairItems.length !== 2) return;
        container.items = container.items.map(it => {
            if (it.pairId !== pairId) return it;
            const isFirst = it === pairItems[0];
            const newFile = isFirst ? imageFileA : imageFileB;
            return newFile ? { ...it, word: label, imageBlob: newFile, image_url: null } : { ...it, word: label };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderMemoryManageGrid();
}

async function deleteMemoryCardPair(pairId) {
    const container = await getMemoryContainer();

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderMemoryManageGrid();
}

// =============================================
// JOGO DA MEMÓRIA (PARES DE IMAGENS MANUAIS)
// =============================================
let memoryCards = [];
let memoryFlipped = [];
let memoryMatchedCount = 0;
let memoryMoveCount = 0;
let memoryBusy = false;
const MEMORY_MAX_PAIRS = 10;

function getMemoryCardPairs() {
    // Restrito ao container desse jogo especificamente: agora que existe mais de um
    // "jogo da memória" (ex.: o do Alfabeto), flatMap em lastMergedExercises inteiro
    // misturaria os pares dos dois jogos num só.
    const container = resolveGameContainer(MEMORY_CARDS_SEED_KEY);
    return groupMemoryItemsByPair((container && container.items) || []);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function announceMemoryStatus(text) {
    const el = document.getElementById('memory-status-live');
    if (el) el.textContent = text;
}

function startMemoryGame() {
    const pairGroups = getMemoryCardPairs(); // pares deliberados (imagem + imagem), criados em Jogos > Editar
    const container = document.getElementById('grid-memory');
    if (!container) return;

    if (pairGroups.length < 3) {
        container.innerHTML = '';
        document.getElementById('memory-pairs-count').textContent = 'Pares: 0/0';
        document.getElementById('memory-moves-count').textContent = 'Jogadas: 0';
        const message = 'Crie cartas (em "Editar") para gerar pares para o jogo.';
        announceMemoryStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'grid-column:1/-1;padding:20px;color:#555;font-weight:600;';
        msg.textContent = message;
        container.appendChild(msg);
        return;
    }

    const numPairs = Math.min(MEMORY_MAX_PAIRS, pairGroups.length);
    const chosenPairGroups = shuffleArray([...pairGroups]).slice(0, numPairs);

    // src resolvido uma vez só por partida: URL estável entre re-renders do tabuleiro
    // e pré-carregável antes da primeira virada.
    const cardsFromPairs = chosenPairGroups.flatMap(({ pairId, itemA, itemB }) => [
        { pairId, word: itemA.word, src: resolveMemoryItemImageSrc(itemA), flipped: false, matched: false },
        { pairId, word: itemB.word, src: resolveMemoryItemImageSrc(itemB), flipped: false, matched: false }
    ]);

    memoryCards = shuffleArray(cardsFromPairs);
    preloadGameImages(memoryCards.map(c => c.src));
    // Pré-carrega o áudio de todas as palavras únicas do deck — assim o som
    // ao acertar o par é instantâneo, sem esperar a rede na hora do match.
    [...new Set(memoryCards.map(c => c.word).filter(Boolean))].forEach(prefetchTts);
    memoryFlipped = [];
    memoryMatchedCount = 0;
    memoryMoveCount = 0;
    memoryBusy = false;

    document.getElementById('memory-pairs-count').textContent = `Pares: 0/${numPairs}`;
    document.getElementById('memory-moves-count').textContent = 'Jogadas: 0';
    announceMemoryStatus('Novo jogo iniciado. Encontre os pares.');
    renderMemoryBoard();
}

// ---- Gerenciamento de cartas (modo "Editar") ----

function groupMemoryItemsByPair(items) {
    const groups = {};
    (items || []).forEach(item => {
        if (!item.pairId) return;
        (groups[item.pairId] = groups[item.pairId] || []).push(item);
    });
    return Object.entries(groups)
        .filter(([, group]) => group.length === 2)
        .map(([pairId, group]) => ({ pairId, itemA: group[0], itemB: group[1] }));
}

function resolveMemoryItemImageSrc(item) {
    if (item.imageBlob instanceof Blob) return URL.createObjectURL(item.imageBlob);
    if (item.image_url) return item.image_url;
    return '';
}

// Pré-carrega as imagens no cache do navegador assim que a partida começa — os
// tabuleiros só criam o <img> quando a carta vira, então sem isso o download
// começava no clique e a carta ficava em branco enquanto a imagem baixava.
function preloadGameImages(srcs) {
    srcs.filter(Boolean).forEach(src => { const img = new Image(); img.src = src; });
}

async function renderMemoryManageGrid() {
    const container = document.getElementById('grid-memory');
    if (!container) return;
    container.classList.remove('memory-board');
    container.innerHTML = '';

    const cardsContainer = resolveGameContainer(MEMORY_CARDS_SEED_KEY);
    const pairs = groupMemoryItemsByPair((cardsContainer && cardsContainer.items) || []);

    pairs.forEach(({ pairId, itemA, itemB }) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-blue';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [itemA, itemB].forEach(item => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = resolveMemoryItemImageSrc(item);
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = itemA.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir par');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir o par "${itemA.word}"?`)) deleteMemoryCardPair(pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar par');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openMemoryCardModal(pairId, itemA, itemB); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Cartas novas ainda não enviadas (ficam só na tela até clicar em "Salvar") —
    // ver flushMemoryDraftPairs(). Mostradas com um selo "Pendente" e só podem ser
    // removidas do rascunho, não editadas (é mais simples excluir e recriar).
    memoryDraftPairs.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-blue';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [draft.imageFileA, draft.imageFileB].forEach(file => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = file ? URL.createObjectURL(file) : '';
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.word} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover carta pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            memoryDraftPairs = memoryDraftPairs.filter(d => d.tempId !== draft.tempId);
            renderMemoryManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Carta</div>';
    addBtn.addEventListener('click', () => openMemoryCardModal(null, null, null));
    container.appendChild(addBtn);
}

// Cartas novas ficam num rascunho local (sem chamada de rede) até o usuário clicar em
// "Salvar" ao sair do modo Editar — evita a demora de subir imagem por imagem uma a uma.
let memoryDraftPairs = [];

async function flushMemoryDraftPairs() {
    const pending = memoryDraftPairs;
    memoryDraftPairs = [];
    for (const draft of pending) {
        await addMemoryCardPair(draft.word, draft.imageFileA, draft.imageFileB);
    }
}

let editingMemoryPairId = null;

function openMemoryCardModal(pairId, itemA, itemB) {
    editingMemoryPairId = pairId;
    const isEdit = !!pairId;
    document.getElementById('memory-card-modal-title').textContent = isEdit ? 'Editar Par' : 'Nova Carta';
    document.getElementById('memory-card-word').value = isEdit ? itemA.word : '';
    document.getElementById('memory-card-image-a').value = '';
    document.getElementById('memory-card-image-b').value = '';
    document.getElementById('memory-card-image-a').required = !isEdit;
    document.getElementById('memory-card-image-b').required = !isEdit;

    const previewA = document.getElementById('memory-card-img-preview-a');
    const previewB = document.getElementById('memory-card-img-preview-b');
    [[itemA, previewA], [itemB, previewB]].forEach(([item, preview]) => {
        if (item && item.imageBlob instanceof Blob) { preview.src = URL.createObjectURL(item.imageBlob); preview.style.display = 'block'; }
        else if (item && item.image_url) { preview.src = item.image_url; preview.style.display = 'block'; }
        else { preview.style.display = 'none'; }
    });

    document.getElementById('memory-card-modal').style.display = 'flex';
}

function closeMemoryCardModal() {
    document.getElementById('memory-card-modal').style.display = 'none';
    editingMemoryPairId = null;
}

const observedMemoryBoards = new WeakSet();
const memoryBoardResizeObserver = typeof ResizeObserver === 'function'
    ? new ResizeObserver(entries => {
        entries.forEach(({ target }) => fitMemoryBoard(target));
    })
    : null;

// Mantém o tabuleiro inteiro visível sempre que houver espaço suficiente.
// A largura final considera tanto o limite horizontal quanto a altura das
// linhas (as cartas destes jogos têm proporção 4:5).
function fitMemoryBoard(container) {
    if (!container || !container.classList.contains('memory-board')) return;

    const cardCount = container.querySelectorAll('.memory-card').length;
    if (!cardCount || !container.clientWidth || !container.clientHeight) return;

    const columns = window.matchMedia('(max-width: 768px)').matches ? 4 : 5;
    const rows = Math.ceil(cardCount / columns);
    const styles = getComputedStyle(container);
    const columnGap = parseFloat(styles.columnGap) || 0;
    const rowGap = parseFloat(styles.rowGap) || 0;
    const horizontalPadding = (parseFloat(styles.paddingLeft) || 0) + (parseFloat(styles.paddingRight) || 0);
    const verticalPadding = (parseFloat(styles.paddingTop) || 0) + (parseFloat(styles.paddingBottom) || 0);
    const widthPerCard = (container.clientWidth - horizontalPadding - columnGap * (columns - 1)) / columns;
    const heightPerCard = (container.clientHeight - verticalPadding - rowGap * (rows - 1)) / rows;
    const widthFromHeight = heightPerCard * (4 / 5);
    const fittedWidth = Math.max(64, Math.floor(Math.min(130, widthPerCard, widthFromHeight)));

    container.style.setProperty('--memory-board-columns', columns);
    container.style.setProperty('--memory-card-width', `${fittedWidth}px`);
}

function keepMemoryBoardFitted(container) {
    if (memoryBoardResizeObserver && !observedMemoryBoards.has(container)) {
        observedMemoryBoards.add(container);
        memoryBoardResizeObserver.observe(container);
    }
    requestAnimationFrame(() => fitMemoryBoard(container));
}

function renderMemoryBoard() {
    const container = document.getElementById('grid-memory');
    if (!container) return;
    // Tabuleiro em jogo: bloco compacto de 5 colunas centralizado (a grade de
    // edição reusa este mesmo elemento, por isso a classe entra e sai por JS).
    container.classList.add('memory-board');
    container.innerHTML = '';

    memoryCards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'memory-card' + (card.matched ? ' matched' : '') + (card.wrong ? ' wrong' : '') + (card.flipped ? ' flipped' : '');
        btn.setAttribute('aria-label', (card.flipped || card.matched) ? `Carta: ${card.word}` : 'Carta virada para baixo');

        const inner = document.createElement('div');
        inner.className = 'memory-card-inner';

        const back = document.createElement('div');
        back.className = 'memory-card-face memory-card-back';
        back.innerHTML = '<i class="fas fa-clone" aria-hidden="true"></i>';

        const front = document.createElement('div');
        front.className = 'memory-card-face memory-card-front';
        if (card.flipped || card.matched) {
            if (card.src) {
                const img = document.createElement('img');
                img.alt = '';
                img.className = 'memory-card-img';
                img.src = card.src;
                front.appendChild(img);
            } else {
                front.innerHTML = '<i class="fas fa-image" aria-hidden="true"></i>';
            }
            // Nome da carta na base, para a pessoa ler a palavra junto com a imagem
            if (card.word) {
                const nameEl = document.createElement('div');
                nameEl.className = 'memory-card-name';
                nameEl.textContent = card.word;
                front.appendChild(nameEl);
            }
        }

        inner.appendChild(back);
        inner.appendChild(front);
        btn.appendChild(inner);
        btn.addEventListener('click', () => handleMemoryCardClick(index));
        container.appendChild(btn);
    });

    keepMemoryBoardFitted(container);
}

function handleMemoryCardClick(index) {
    if (memoryBusy) return;
    const card = memoryCards[index];
    if (card.flipped || card.matched) return;
    if (memoryFlipped.length >= 2) return;

    card.flipped = true;
    memoryFlipped.push(index);
    renderMemoryBoard();

    if (memoryFlipped.length === 2) {
        memoryMoveCount++;
        document.getElementById('memory-moves-count').textContent = `Jogadas: ${memoryMoveCount}`;
        memoryBusy = true;
        checkMemoryMatch();
    }
}

function checkMemoryMatch() {
    const [i1, i2] = memoryFlipped;
    const card1 = memoryCards[i1];
    const card2 = memoryCards[i2];

    if (card1.pairId === card2.pairId) {
        card1.matched = true;
        card2.matched = true;
        memoryMatchedCount++;
        const totalPairs = memoryCards.length / 2;
        document.getElementById('memory-pairs-count').textContent = `Pares: ${memoryMatchedCount}/${totalPairs}`;
        announceMemoryStatus(`Par encontrado: ${card1.word}!`);
        speak(card1.word);
        memoryFlipped = [];
        memoryBusy = false;
        renderMemoryBoard();

        if (memoryMatchedCount === totalPairs) {
            setTimeout(() => {
                announceMemoryStatus(`Parabéns! Você encontrou todos os ${totalPairs} pares em ${memoryMoveCount} jogadas.`);
            }, 400);
        }
    } else {
        announceMemoryStatus('Não foi dessa vez, tente de novo.');
        card1.wrong = true;
        card2.wrong = true;
        renderMemoryBoard();
        setTimeout(() => {
            card1.flipped = false;
            card2.flipped = false;
            card1.wrong = false;
            card2.wrong = false;
            memoryFlipped = [];
            memoryBusy = false;
            renderMemoryBoard();
        }, 900);
    }
}

// =============================================
// CARTAS DO JOGO DA MEMÓRIA DO ALFABETO (CRUD)
// Duplicata do Jogo da Memória acima, como jogo separado: aqui o usuário sobe as
// próprias cartas de letras (A, B, C...) em vez de objetos.
// =============================================
const ALPHABET_MEMORY_SEED_KEY = 'alphabet-memory-cards-container';
const ALPHABET_MEMORY_TITLE = 'Cartas do Jogo da Memória do Alfabeto|green';

// Mesmo padrão de getMemoryContainer (Fase 15).
function getAlphabetMemoryContainer() {
    return isDoctor && currentUserId
        ? getOrCreateGameContainer(doctorScopedSeedKey(ALPHABET_MEMORY_SEED_KEY, currentUserId), ALPHABET_MEMORY_TITLE, currentUserId)
        : getOrCreateGameContainer(ALPHABET_MEMORY_SEED_KEY, ALPHABET_MEMORY_TITLE);
}

async function addAlphabetMemoryCardPair(label, imageFileA, imageFileB) {
    const container = await getAlphabetMemoryContainer();
    const pairId = makePairId();

    if (container.fromSupabase) {
        try {
            const [imageUrlA, imageUrlB] = await Promise.all([
                uploadToSupabaseStorage('media_uploads', 'images', imageFileA),
                uploadToSupabaseStorage('media_uploads', 'images', imageFileB)
            ]);
            const { error: insertErr } = await supabaseClient.from('exercise_items').insert([
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlA, link: '' },
                { exercise_id: container.id, word: label, pair_id: pairId, image_url: imageUrlB, link: '' }
            ]);
            if (insertErr) console.error('Erro ao salvar carta no Supabase:', insertErr);
        } catch (e) {
            console.error('Erro ao subir imagem/salvar carta no Supabase:', e);
        }
    } else {
        const base = { word: label, textColor: '#333333', textSize: 100, isUppercase: false, isBold: true, videoLink: '', pairId };
        container.items = [
            ...(container.items || []),
            { ...base, imageBlob: imageFileA || null, image_url: null },
            { ...base, imageBlob: imageFileB || null, image_url: null }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAlphabetMemoryManageGrid();
}

async function updateAlphabetMemoryCardPair(pairId, label, imageFileA, imageFileB) {
    const container = await getAlphabetMemoryContainer();

    if (container.fromSupabase) {
        const { data: pairItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!pairItems || pairItems.length !== 2) return;
        const files = [imageFileA, imageFileB];
        for (let i = 0; i < 2; i++) {
            const update = { word: label };
            if (files[i]) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', files[i]);
            await supabaseClient.from('exercise_items').update(update).eq('id', pairItems[i].id);
        }
    } else {
        const pairItems = (container.items || []).filter(it => it.pairId === pairId);
        if (pairItems.length !== 2) return;
        container.items = container.items.map(it => {
            if (it.pairId !== pairId) return it;
            const isFirst = it === pairItems[0];
            const newFile = isFirst ? imageFileA : imageFileB;
            return newFile ? { ...it, word: label, imageBlob: newFile, image_url: null } : { ...it, word: label };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAlphabetMemoryManageGrid();
}

async function deleteAlphabetMemoryCardPair(pairId) {
    const container = await getAlphabetMemoryContainer();

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAlphabetMemoryManageGrid();
}

// =============================================
// JOGO DA MEMÓRIA DO ALFABETO (PARES DE IMAGENS MANUAIS)
// =============================================
let alphabetMemoryCards = [];
let alphabetMemoryFlipped = [];
let alphabetMemoryMatchedCount = 0;
let alphabetMemoryMoveCount = 0;
let alphabetMemoryBusy = false;
const ALPHABET_MEMORY_MAX_PAIRS = 10;

function getAlphabetMemoryCardPairs() {
    const container = resolveGameContainer(ALPHABET_MEMORY_SEED_KEY);
    return groupMemoryItemsByPair((container && container.items) || []);
}

function announceAlphabetMemoryStatus(text) {
    const el = document.getElementById('alphabet-memory-status-live');
    if (el) el.textContent = text;
}

function startAlphabetMemoryGame() {
    const pairGroups = getAlphabetMemoryCardPairs();
    const container = document.getElementById('grid-alphabet-memory');
    if (!container) return;

    if (pairGroups.length < 3) {
        container.innerHTML = '';
        document.getElementById('alphabet-memory-pairs-count').textContent = 'Pares: 0/0';
        document.getElementById('alphabet-memory-moves-count').textContent = 'Jogadas: 0';
        const message = 'Crie cartas (em "Editar") para gerar pares para o jogo.';
        announceAlphabetMemoryStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'grid-column:1/-1;padding:20px;color:#555;font-weight:600;';
        msg.textContent = message;
        container.appendChild(msg);
        return;
    }

    const numPairs = Math.min(ALPHABET_MEMORY_MAX_PAIRS, pairGroups.length);
    const chosenPairGroups = shuffleArray([...pairGroups]).slice(0, numPairs);

    // src resolvido uma vez só por partida — ver comentário em startMemoryGame().
    const cardsFromPairs = chosenPairGroups.flatMap(({ pairId, itemA, itemB }) => [
        { pairId, word: itemA.word, src: resolveMemoryItemImageSrc(itemA), flipped: false, matched: false },
        { pairId, word: itemB.word, src: resolveMemoryItemImageSrc(itemB), flipped: false, matched: false }
    ]);

    alphabetMemoryCards = shuffleArray(cardsFromPairs);
    preloadGameImages(alphabetMemoryCards.map(c => c.src));
    // Pré-carrega o áudio de todas as palavras únicas do deck
    [...new Set(alphabetMemoryCards.map(c => c.word).filter(Boolean))].forEach(prefetchTts);
    alphabetMemoryFlipped = [];
    alphabetMemoryMatchedCount = 0;
    alphabetMemoryMoveCount = 0;
    alphabetMemoryBusy = false;

    document.getElementById('alphabet-memory-pairs-count').textContent = `Pares: 0/${numPairs}`;
    document.getElementById('alphabet-memory-moves-count').textContent = 'Jogadas: 0';
    announceAlphabetMemoryStatus('Novo jogo iniciado. Encontre os pares.');
    renderAlphabetMemoryBoard();
}

// ---- Gerenciamento de cartas (modo "Editar") ----

async function renderAlphabetMemoryManageGrid() {
    const container = document.getElementById('grid-alphabet-memory');
    if (!container) return;
    container.classList.remove('memory-board');
    container.innerHTML = '';

    const cardsContainer = resolveGameContainer(ALPHABET_MEMORY_SEED_KEY);
    const pairs = groupMemoryItemsByPair((cardsContainer && cardsContainer.items) || []);

    pairs.forEach(({ pairId, itemA, itemB }) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-green';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [itemA, itemB].forEach(item => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = resolveMemoryItemImageSrc(item);
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = itemA.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir par');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir o par "${itemA.word}"?`)) deleteAlphabetMemoryCardPair(pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar par');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openAlphabetMemoryCardModal(pairId, itemA, itemB); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Cartas novas ainda não enviadas — ver flushAlphabetMemoryDraftPairs().
    alphabetMemoryDraftPairs.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-green';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [draft.imageFileA, draft.imageFileB].forEach(file => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '45%';
            imgEl.alt = '';
            imgEl.src = file ? URL.createObjectURL(file) : '';
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.word} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover carta pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            alphabetMemoryDraftPairs = alphabetMemoryDraftPairs.filter(d => d.tempId !== draft.tempId);
            renderAlphabetMemoryManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Carta</div>';
    addBtn.addEventListener('click', () => openAlphabetMemoryCardModal(null, null, null));
    container.appendChild(addBtn);
}

let alphabetMemoryDraftPairs = [];

async function flushAlphabetMemoryDraftPairs() {
    const pending = alphabetMemoryDraftPairs;
    alphabetMemoryDraftPairs = [];
    for (const draft of pending) {
        await addAlphabetMemoryCardPair(draft.word, draft.imageFileA, draft.imageFileB);
    }
}

let editingAlphabetMemoryPairId = null;

function openAlphabetMemoryCardModal(pairId, itemA, itemB) {
    editingAlphabetMemoryPairId = pairId;
    const isEdit = !!pairId;
    document.getElementById('alphabet-memory-card-modal-title').textContent = isEdit ? 'Editar Par' : 'Nova Carta';
    document.getElementById('alphabet-memory-card-word').value = isEdit ? itemA.word : '';
    document.getElementById('alphabet-memory-card-image-a').value = '';
    document.getElementById('alphabet-memory-card-image-b').value = '';
    document.getElementById('alphabet-memory-card-image-a').required = !isEdit;
    document.getElementById('alphabet-memory-card-image-b').required = !isEdit;

    const previewA = document.getElementById('alphabet-memory-card-img-preview-a');
    const previewB = document.getElementById('alphabet-memory-card-img-preview-b');
    [[itemA, previewA], [itemB, previewB]].forEach(([item, preview]) => {
        if (item && item.imageBlob instanceof Blob) { preview.src = URL.createObjectURL(item.imageBlob); preview.style.display = 'block'; }
        else if (item && item.image_url) { preview.src = item.image_url; preview.style.display = 'block'; }
        else { preview.style.display = 'none'; }
    });

    document.getElementById('alphabet-memory-card-modal').style.display = 'flex';
}

function closeAlphabetMemoryCardModal() {
    document.getElementById('alphabet-memory-card-modal').style.display = 'none';
    editingAlphabetMemoryPairId = null;
}

function renderAlphabetMemoryBoard() {
    const container = document.getElementById('grid-alphabet-memory');
    if (!container) return;
    // Tabuleiro em jogo: bloco compacto de 5 colunas centralizado (a grade de
    // edição reusa este mesmo elemento, por isso a classe entra e sai por JS).
    container.classList.add('memory-board');
    container.innerHTML = '';

    alphabetMemoryCards.forEach((card, index) => {
        const btn = document.createElement('button');
        btn.className = 'memory-card' + (card.matched ? ' matched' : '') + (card.wrong ? ' wrong' : '') + (card.flipped ? ' flipped' : '');
        btn.setAttribute('aria-label', (card.flipped || card.matched) ? `Carta: ${card.word}` : 'Carta virada para baixo');

        const inner = document.createElement('div');
        inner.className = 'memory-card-inner';

        const back = document.createElement('div');
        back.className = 'memory-card-face memory-card-back';
        back.innerHTML = '<i class="fas fa-clone" aria-hidden="true"></i>';

        const front = document.createElement('div');
        front.className = 'memory-card-face memory-card-front';
        if (card.flipped || card.matched) {
            if (card.src) {
                const img = document.createElement('img');
                img.alt = '';
                img.className = 'memory-card-img';
                img.src = card.src;
                front.appendChild(img);
            } else {
                front.innerHTML = '<i class="fas fa-image" aria-hidden="true"></i>';
            }
            // Nome da carta na base, para a pessoa ler a palavra junto com a imagem
            if (card.word) {
                const nameEl = document.createElement('div');
                nameEl.className = 'memory-card-name';
                nameEl.textContent = card.word;
                front.appendChild(nameEl);
            }
        }

        inner.appendChild(back);
        inner.appendChild(front);
        btn.appendChild(inner);
        btn.addEventListener('click', () => handleAlphabetMemoryCardClick(index));
        container.appendChild(btn);
    });

    keepMemoryBoardFitted(container);
}

function handleAlphabetMemoryCardClick(index) {
    if (alphabetMemoryBusy) return;
    const card = alphabetMemoryCards[index];
    if (card.flipped || card.matched) return;
    if (alphabetMemoryFlipped.length >= 2) return;

    card.flipped = true;
    alphabetMemoryFlipped.push(index);
    renderAlphabetMemoryBoard();

    if (alphabetMemoryFlipped.length === 2) {
        alphabetMemoryMoveCount++;
        document.getElementById('alphabet-memory-moves-count').textContent = `Jogadas: ${alphabetMemoryMoveCount}`;
        alphabetMemoryBusy = true;
        checkAlphabetMemoryMatch();
    }
}

function checkAlphabetMemoryMatch() {
    const [i1, i2] = alphabetMemoryFlipped;
    const card1 = alphabetMemoryCards[i1];
    const card2 = alphabetMemoryCards[i2];

    if (card1.pairId === card2.pairId) {
        card1.matched = true;
        card2.matched = true;
        alphabetMemoryMatchedCount++;
        const totalPairs = alphabetMemoryCards.length / 2;
        document.getElementById('alphabet-memory-pairs-count').textContent = `Pares: ${alphabetMemoryMatchedCount}/${totalPairs}`;
        announceAlphabetMemoryStatus(`Par encontrado: ${card1.word}!`);
        speak(card1.word);
        alphabetMemoryFlipped = [];
        alphabetMemoryBusy = false;
        renderAlphabetMemoryBoard();

        if (alphabetMemoryMatchedCount === totalPairs) {
            setTimeout(() => {
                announceAlphabetMemoryStatus(`Parabéns! Você encontrou todos os ${totalPairs} pares em ${alphabetMemoryMoveCount} jogadas.`);
            }, 400);
        }
    } else {
        announceAlphabetMemoryStatus('Não foi dessa vez, tente de novo.');
        card1.wrong = true;
        card2.wrong = true;
        renderAlphabetMemoryBoard();
        setTimeout(() => {
            card1.flipped = false;
            card2.flipped = false;
            card1.wrong = false;
            card2.wrong = false;
            alphabetMemoryFlipped = [];
            alphabetMemoryBusy = false;
            renderAlphabetMemoryBoard();
        }, 900);
    }
}

// =============================================
// JOGO DE RECONHECIMENTO (PALAVRA → IMAGEM)
// Cada palavra é um conjunto de 3 itens (1 imagem correta + 2 distratoras) amarrados
// pelo mesmo pair_id, com "role" marcando qual é qual — ver groupNamingItemsBySet().
// =============================================
const NAMING_SEED_KEY = 'naming-game-container';
const NAMING_TITLE = 'Jogo de Reconhecimento|red';
// Container de Complete a Frase (Fase 13) — gerenciado inteiramente de
// dentro do iframe complete-frase.js, mas o container em si (exercises row)
// aparece em lastMergedExercises igual qualquer outro, então precisa entrar
// nas mesmas exclusões de naming/afasia pra não vazar como card solto.
const COMPLETE_FRASE_SEED_KEY = 'complete-frase-container';
// Mesmo valor de COMPLETE_FRASE_TITLE em complete-frase.js — precisa
// existir aqui também porque openPatientExercisesModal (fora do iframe)
// cria esse container pelo mesmo padrão de getOrCreateGameContainer.
const COMPLETE_FRASE_TITLE = 'Complete a Frase|orange';

function makeNamingSetId() {
    return 'naming-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

// Deck específico de Reconhecimento de Palavras sendo editado/jogado agora
// (Fase 24 — médico pode ter vários decks desse tipo, não mais um só). Nulo
// = nenhum deck aberto ainda; setado por openNamingDeck()/criação de deck
// novo antes de entrar no jogo, e lido por getNamingContainer() no lugar do
// antigo container singleton por seed_key.
let activeNamingDeckId = null;

async function getNamingContainer() {
    if (activeNamingDeckId && supabaseClient) {
        const { data, error } = await supabaseClient.from('exercises').select('*').eq('id', activeNamingDeckId).maybeSingle();
        if (!error && data) return { ...data, fromSupabase: true };
    }
    // Compatibilidade: nenhum deck ativo ainda (ex.: entrou direto sem
    // passar pela grade) — cai no container legado por seed_key, se existir.
    return isDoctor && currentUserId
        ? getOrCreateGameContainer(doctorScopedSeedKey(NAMING_SEED_KEY, currentUserId), NAMING_TITLE, currentUserId)
        : getOrCreateGameContainer(NAMING_SEED_KEY, NAMING_TITLE);
}

// Versão síncrona (lê de lastMergedExercises, já carregado) pra uso nos
// pontos que hoje chamam resolveGameContainer(NAMING_SEED_KEY) direto —
// prioriza o deck ativo específico; sem deck ativo, cai no container
// legado por seed_key (compatibilidade com o que sobrou de antes da Fase 24).
function resolveActiveNamingContainer() {
    if (activeNamingDeckId) {
        return lastMergedExercises.find(ex => ex.id === activeNamingDeckId) || null;
    }
    return resolveGameContainer(NAMING_SEED_KEY);
}

// Card de deck de Reconhecimento de Palavras clicado na grade de Exercícios
// (Fase 24). Editar entra direto no modo gerenciar daquele deck específico;
// jogar abre a partida com as palavras só dele.
function openNamingDeckManage(ex) {
    activeNamingDeckId = ex.id;
    openGame('naming');
    editModes.naming = true;
    updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
    document.getElementById('naming-play-area').style.display = 'none';
    document.getElementById('grid-naming').style.display = 'grid';
    renderNamingManageGrid();
}

function playNamingDeck(ex) {
    activeNamingDeckId = ex.id;
    editModes.naming = false;
    openGame('naming'); // já chama startNamingGame() internamente, usando activeNamingDeckId acima
}

async function addNamingSet(word, correctFile, distractorFile1, distractorFile2) {
    const container = await getNamingContainer();
    const pairId = makeNamingSetId();

    if (container.fromSupabase) {
        // Sequencial em vez de Promise.all: 3 uploads simultâneos pesam bastante
        // em conexões mais lentas/instáveis e um deles falhando ("Failed to
        // fetch") derrubava o Promise.all inteiro.
        const correctUrl = await uploadToSupabaseStorage('media_uploads', 'images', correctFile);
        const d1Url = await uploadToSupabaseStorage('media_uploads', 'images', distractorFile1);
        const d2Url = await uploadToSupabaseStorage('media_uploads', 'images', distractorFile2);
        const { error } = await supabaseClient.from('exercise_items').insert([
            { exercise_id: container.id, word, pair_id: pairId, role: 'correct', image_url: correctUrl, link: '' },
            { exercise_id: container.id, word, pair_id: pairId, role: 'distractor', image_url: d1Url, link: '' },
            { exercise_id: container.id, word, pair_id: pairId, role: 'distractor', image_url: d2Url, link: '' }
        ]);
        if (error) throw error;
    } else {
        container.items = [
            ...(container.items || []),
            { word, pairId, role: 'correct', imageBlob: correctFile, image_url: null },
            { word, pairId, role: 'distractor', imageBlob: distractorFile1, image_url: null },
            { word, pairId, role: 'distractor', imageBlob: distractorFile2, image_url: null }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderNamingManageGrid();
}

async function updateNamingSet(pairId, word, correctFile, distractorFile1, distractorFile2) {
    const container = await getNamingContainer();

    if (container.fromSupabase) {
        const { data: setItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!setItems || setItems.length !== 3) return;
        const correctItem = setItems.find(it => it.role === 'correct');
        const distractorItems = setItems.filter(it => it.role === 'distractor');
        const updates = [[correctItem, correctFile], [distractorItems[0], distractorFile1], [distractorItems[1], distractorFile2]];
        for (const [item, file] of updates) {
            const update = { word };
            if (file) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', file);
            const { error } = await supabaseClient.from('exercise_items').update(update).eq('id', item.id);
            if (error) throw error;
        }
    } else {
        const setItems = (container.items || []).filter(it => it.pairId === pairId);
        const correctItem = setItems.find(it => it.role === 'correct');
        const distractorItems = setItems.filter(it => it.role === 'distractor');
        const fileFor = (item) => item === correctItem ? correctFile : item === distractorItems[0] ? distractorFile1 : item === distractorItems[1] ? distractorFile2 : null;
        container.items = (container.items || []).map(it => {
            if (it.pairId !== pairId) return it;
            const file = fileFor(it);
            return file ? { ...it, word, imageBlob: file, image_url: null } : { ...it, word };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderNamingManageGrid();
}

async function deleteNamingSet(pairId) {
    const container = await getNamingContainer();

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderNamingManageGrid();
}

function resolveNamingImageSrc(img) {
    if (img && img.imageBlob instanceof Blob) return URL.createObjectURL(img.imageBlob);
    if (img && img.image_url) return img.image_url;
    return '';
}

// Agrupa itens flat (word, pairId, role, imagem) em sets de 3: 1 correct + 2 distractor.
function groupNamingItemsBySet(items) {
    const groups = {};
    (items || []).forEach(item => {
        if (!item.pairId) return;
        (groups[item.pairId] = groups[item.pairId] || []).push(item);
    });
    return Object.entries(groups)
        .map(([pairId, group]) => {
            const correct = group.find(it => it.role === 'correct');
            const distractors = group.filter(it => it.role === 'distractor');
            if (!correct || distractors.length !== 2) return null;
            return { pairId, word: correct.word, correct, distractors };
        })
        .filter(Boolean);
}

// ---- Gerenciamento de palavras (modo "Editar") ----

async function renderNamingManageGrid() {
    const container = document.getElementById('grid-naming');
    if (!container) return;
    container.innerHTML = '';

    const namingContainer = resolveActiveNamingContainer();
    const sets = groupNamingItemsBySet((namingContainer && namingContainer.items) || []);

    sets.forEach(set => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-red';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [set.correct, ...set.distractors].forEach(img => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '30%';
            imgEl.alt = '';
            imgEl.src = resolveNamingImageSrc(img);
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = set.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir palavra');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir a palavra "${set.word}"?`)) deleteNamingSet(set.pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar palavra');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openNamingSetModal(set); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Palavras novas ainda não enviadas — ver flushNamingDraftSets().
    namingDraftSets.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-red';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        imgContainer.style.cssText = 'display:flex; gap:4px; justify-content:center;';

        [draft.correctFile, draft.d1File, draft.d2File].forEach(file => {
            const imgEl = document.createElement('img');
            imgEl.className = 'word-btn-img';
            imgEl.style.maxWidth = '30%';
            imgEl.alt = '';
            imgEl.src = file ? URL.createObjectURL(file) : '';
            imgContainer.appendChild(imgEl);
        });

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.word} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover palavra pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            namingDraftSets = namingDraftSets.filter(d => d.tempId !== draft.tempId);
            renderNamingManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Palavra</div>';
    addBtn.addEventListener('click', () => openNamingSetModal(null));
    container.appendChild(addBtn);
}

let namingDraftSets = [];

async function flushNamingDraftSets() {
    const pending = namingDraftSets;
    namingDraftSets = [];
    for (const draft of pending) {
        await addNamingSet(draft.word, draft.correctFile, draft.d1File, draft.d2File);
    }
}

let editingNamingSetId = null;
let namingQuickCreate = false;

function openNamingSetModal(set) {
    editingNamingSetId = set ? set.pairId : null;
    const isEdit = !!set;
    document.getElementById('naming-set-modal-title').textContent = isEdit ? 'Editar Palavra' : 'Nova Palavra';
    document.getElementById('naming-set-word').value = isEdit ? set.word : '';
    document.getElementById('naming-set-image-correct').value = '';
    document.getElementById('naming-set-image-d1').value = '';
    document.getElementById('naming-set-image-d2').value = '';
    document.getElementById('naming-set-image-correct').required = !isEdit;
    document.getElementById('naming-set-image-d1').required = !isEdit;
    document.getElementById('naming-set-image-d2').required = !isEdit;

    const previewPairs = [
        [isEdit ? set.correct : null, document.getElementById('naming-set-img-preview-correct')],
        [isEdit ? set.distractors[0] : null, document.getElementById('naming-set-img-preview-d1')],
        [isEdit ? set.distractors[1] : null, document.getElementById('naming-set-img-preview-d2')]
    ];
    previewPairs.forEach(([img, previewEl]) => {
        const src = img ? resolveNamingImageSrc(img) : '';
        if (src) { previewEl.src = src; previewEl.style.display = 'block'; }
        else { previewEl.style.display = 'none'; }
    });

    document.getElementById('naming-set-modal').style.display = 'flex';
}

function closeNamingSetModal() {
    const shouldExitQuickCreate = namingQuickCreate;
    document.getElementById('naming-set-modal').style.display = 'none';
    editingNamingSetId = null;
    namingQuickCreate = false;
    if (shouldExitQuickCreate) {
        editModes.naming = false;
        updateEditBtn('naming', 'btn-edit-naming', 'Salvar');
        closeGame();
    }
}

// ---- Partida (modo "Jogar") ----

function getNamingSets() {
    const container = resolveActiveNamingContainer();
    return groupNamingItemsBySet((container && container.items) || []);
}

let namingQueue = [];
let namingIndex = 0;
let namingCorrectCount = 0;
let namingTotalCount = 0;
let namingBusy = false;

function announceNamingStatus(text) {
    const el = document.getElementById('naming-status-live');
    if (el) el.textContent = text;
}

function updateNamingScore() {
    document.getElementById('naming-score').textContent = `${namingCorrectCount}/${namingTotalCount} correto`;
}

function startNamingGame() {
    const sets = getNamingSets();
    const playArea = document.getElementById('naming-play-area');
    const manageGrid = document.getElementById('grid-naming');
    manageGrid.style.display = 'none';
    playArea.style.display = 'flex';

    namingCorrectCount = 0;
    namingTotalCount = 0;
    namingBusy = false;
    updateNamingScore();

    if (sets.length < 1) {
        document.getElementById('naming-word-display').textContent = '';
        document.getElementById('naming-choices').innerHTML = '';
        const message = 'Crie palavras (em "Editar") para gerar o jogo.';
        announceNamingStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'padding:20px;color:#555;font-weight:600;text-align:center;';
        msg.textContent = message;
        document.getElementById('naming-choices').appendChild(msg);
        return;
    }

    namingQueue = shuffleArray([...sets]);
    namingIndex = 0;
    preloadGameImages(namingQueue.flatMap(set => [set.correct, ...set.distractors].map(resolveNamingImageSrc)));
    // Pré-carrega o áudio de todas as palavras da fila para o jogo ser instantâneo
    [...new Set(namingQueue.map(s => s.word).filter(Boolean))].forEach(prefetchTts);
    announceNamingStatus('Novo jogo iniciado.');
    renderNamingRound();
}

function renderNamingRound() {
    if (namingIndex >= namingQueue.length) {
        namingQueue = shuffleArray([...namingQueue]);
        namingIndex = 0;
    }

    const set = namingQueue[namingIndex];
    namingBusy = false;
    document.getElementById('naming-word-display').textContent = set.word;
    prefetchTts(set.word); // botão de ouvir a palavra responde na hora

    const options = shuffleArray([
        { ...set.correct, isCorrect: true },
        { ...set.distractors[0], isCorrect: false },
        { ...set.distractors[1], isCorrect: false }
    ]);

    const choicesEl = document.getElementById('naming-choices');
    choicesEl.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'naming-choice-btn';
        const img = document.createElement('img');
        img.alt = '';
        img.src = resolveNamingImageSrc(opt);
        btn.appendChild(img);
        btn.addEventListener('click', () => handleNamingChoice(btn, opt.isCorrect, set.word));
        choicesEl.appendChild(btn);
    });

    announceNamingStatus(`Encontre a imagem de: ${set.word}`);
}

function handleNamingChoice(btn, isCorrect, word) {
    if (namingBusy || btn.disabled) return;

    if (isCorrect) {
        namingBusy = true;
        const allBtns = document.querySelectorAll('#naming-choices .naming-choice-btn');
        allBtns.forEach(b => b.disabled = true);

        namingTotalCount++;
        namingCorrectCount++;
        btn.classList.add('is-correct');
        announceNamingStatus(`Isso mesmo, ${word}!`);
        speakWithAzure(word); // mesma voz do botão de ouvir (já pré-carregada na rodada)
        updateNamingScore();

        setTimeout(() => {
            namingIndex++;
            renderNamingRound();
        }, 1200);
    } else {
        // Errou: mostra o feedback vermelho só por um instante e depois volta ao normal
        // (sem ficar marcado, sem trocar as cartas), pra pessoa poder tentar de novo.
        namingBusy = true;
        btn.classList.add('is-incorrect');
        announceNamingStatus('Tente de novo.');
        setTimeout(() => {
            btn.classList.remove('is-incorrect');
            namingBusy = false;
        }, 600);
    }
}

function namingHelp() {
    if (namingIndex >= namingQueue.length) return;
    speak(namingQueue[namingIndex].word);
}

function namingSkip() {
    if (namingBusy) return;
    namingIndex++;
    renderNamingRound();
}

// =============================================
// NOMEAÇÃO POR FALA (protótipo, ver ideia discutida em 2026-08-24)
// Inverso do Jogo de Reconhecimento de Palavras: em vez de apontar a imagem
// certa pra uma palavra dada, mostra só a imagem e a pessoa PRECISA FALAR o
// nome em voz alta — testa produção de fala, não só reconhecimento. Banco de
// palavras/imagens PRÓPRIO (autônomo, não amarrado ao Reconhecimento de
// Palavras) — mesmo padrão de container de memory/naming/afasia
// (getOrCreateGameContainer/resolveGameContainer), só que cada item é
// {word, image_url}, sem distratores. Transcrição via Azure STT
// (TRANSCRIBE_ENDPOINT, só local por enquanto — ver server.py /transcribe).
// =============================================
const SPEECH_NAMING_SEED_KEY = 'speech-naming-game-container';
const SPEECH_NAMING_TITLE = 'Jogo de Nomeação por Fala|pink';

function makeSpeechNamingItemId() {
    return 'speech-naming-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

async function getSpeechNamingContainer() {
    return isDoctor && currentUserId
        ? getOrCreateGameContainer(doctorScopedSeedKey(SPEECH_NAMING_SEED_KEY, currentUserId), SPEECH_NAMING_TITLE, currentUserId)
        : getOrCreateGameContainer(SPEECH_NAMING_SEED_KEY, SPEECH_NAMING_TITLE);
}

function resolveActiveSpeechNamingContainer() {
    return resolveGameContainer(SPEECH_NAMING_SEED_KEY);
}

function getSpeechNamingItems() {
    const container = resolveActiveSpeechNamingContainer();
    return (container && container.items) || [];
}

async function addSpeechNamingItem(word, imageFile) {
    const container = await getSpeechNamingContainer();
    if (container.fromSupabase) {
        const imageUrl = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
        const { error } = await supabaseClient.from('exercise_items')
            .insert([{ exercise_id: container.id, word, image_url: imageUrl, link: '' }]);
        if (error) throw error;
    } else {
        container.items = [...(container.items || []), { localId: makeSpeechNamingItemId(), word, imageBlob: imageFile, image_url: null }];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderSpeechNamingManageGrid();
}

async function updateSpeechNamingItem(item, word, imageFile) {
    const container = await getSpeechNamingContainer();
    if (container.fromSupabase) {
        const update = { word };
        if (imageFile) update.image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
        const { error } = await supabaseClient.from('exercise_items').update(update).eq('id', item.id);
        if (error) throw error;
    } else {
        container.items = (container.items || []).map(it => it.localId === item.localId
            ? { ...it, word, imageBlob: imageFile || it.imageBlob }
            : it);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderSpeechNamingManageGrid();
}

async function deleteSpeechNamingItem(item) {
    const container = await getSpeechNamingContainer();
    if (container.fromSupabase) {
        const { error } = await supabaseClient.from('exercise_items').delete().eq('id', item.id);
        if (error) throw error;
    } else {
        container.items = (container.items || []).filter(it => it.localId !== item.localId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderSpeechNamingManageGrid();
}

function renderSpeechNamingManageGrid() {
    const container = document.getElementById('grid-speech-naming');
    if (!container) return;
    container.innerHTML = '';

    getSpeechNamingItems().forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-pink';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgEl.src = resolveNamingImageSrc(item);
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir palavra');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir a palavra "${item.word}"?`)) deleteSpeechNamingItem(item);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar palavra');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openSpeechNamingSetModal(item); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Palavra</div>';
    addBtn.addEventListener('click', () => openSpeechNamingSetModal(null));
    container.appendChild(addBtn);
}

let editingSpeechNamingItem = null;

function openSpeechNamingSetModal(item) {
    editingSpeechNamingItem = item || null;
    const isEdit = !!item;
    document.getElementById('speech-naming-set-modal-title').textContent = isEdit ? 'Editar Palavra' : 'Nova Palavra';
    document.getElementById('speech-naming-set-word').value = isEdit ? item.word : '';
    document.getElementById('speech-naming-set-image').value = '';
    document.getElementById('speech-naming-set-image').required = !isEdit;

    const previewEl = document.getElementById('speech-naming-set-img-preview');
    const src = isEdit ? resolveNamingImageSrc(item) : '';
    if (src) { previewEl.src = src; previewEl.style.display = 'block'; }
    else { previewEl.style.display = 'none'; }

    document.getElementById('speech-naming-set-modal').style.display = 'flex';
}

function closeSpeechNamingSetModal() {
    document.getElementById('speech-naming-set-modal').style.display = 'none';
    editingSpeechNamingItem = null;
}

let speechNamingQueue = [];
let speechNamingIndex = 0;
let speechNamingCorrectCount = 0;
let speechNamingTotalCount = 0;
let speechNamingBusy = false;
let speechNamingRecording = false;

function announceSpeechNamingStatus(text) {
    const el = document.getElementById('speech-naming-status-live');
    if (el) el.textContent = text;
}

function updateSpeechNamingScore() {
    const el = document.getElementById('speech-naming-score');
    if (el) el.textContent = `${speechNamingCorrectCount}/${speechNamingTotalCount} correto`;
}

// Compara a transcrição com a palavra-alvo ignorando acento/maiúsculas/
// pontuação, e aceita a palavra tanto isolada quanto dentro de uma frase
// (ex.: alvo "cachorro", transcrição "é um cachorro" também conta).
function normalizeSpeechText(text) {
    // Reaproveita normalizeSearchText (remove acento/maiúscula, já usado nos
    // filtros de busca por nome) e só acrescenta a remoção de pontuação.
    return normalizeSearchText(text).replace(/[^\p{L}\p{N}\s]/gu, '').trim();
}

function speechAnswerMatchesWord(transcription, word) {
    const normTranscription = normalizeSpeechText(transcription);
    const normWord = normalizeSpeechText(word);
    if (!normTranscription || !normWord) return false;
    return normTranscription === normWord || normTranscription.split(/\s+/).includes(normWord);
}

async function startSpeechNamingGame() {
    // loadExerciseCards() popula lastMergedExercises (de onde vem o
    // container próprio deste jogo) — sem isso, abrir "Jogos" direto sem
    // passar por "Exercícios" antes deixava o banco vazio na primeira vez.
    await loadExerciseCards();
    const items = getSpeechNamingItems();
    speechNamingCorrectCount = 0;
    speechNamingTotalCount = 0;
    speechNamingBusy = false;
    speechNamingRecording = false;
    updateSpeechNamingScore();

    document.getElementById('grid-speech-naming').style.display = 'none';
    const playArea = document.getElementById('speech-naming-play-area');
    playArea.style.display = 'flex';

    const feedback = document.getElementById('speech-naming-feedback');
    const image = document.getElementById('speech-naming-image');

    if (items.length < 1) {
        image.src = '';
        feedback.style.color = '#555';
        feedback.textContent = 'Crie palavras (em "Editar") para gerar o jogo.';
        announceSpeechNamingStatus(feedback.textContent);
        return;
    }

    if (!TRANSCRIBE_ENDPOINT) {
        feedback.style.color = '#c0392b';
        feedback.textContent = 'Protótipo disponível só rodando localmente (python3 server.py) por enquanto.';
    }

    speechNamingQueue = shuffleArray([...items]);
    speechNamingIndex = 0;
    preloadGameImages(speechNamingQueue.map(resolveNamingImageSrc));
    announceSpeechNamingStatus('Novo jogo iniciado.');
    renderSpeechNamingRound();
}

function renderSpeechNamingRound() {
    if (speechNamingIndex >= speechNamingQueue.length) {
        speechNamingQueue = shuffleArray([...speechNamingQueue]);
        speechNamingIndex = 0;
    }
    speechNamingBusy = false;

    const item = speechNamingQueue[speechNamingIndex];
    if (!item) return;
    document.getElementById('speech-naming-image').src = resolveNamingImageSrc(item);

    const feedback = document.getElementById('speech-naming-feedback');
    feedback.textContent = '';

    const recordBtn = document.getElementById('btn-speech-naming-record');
    if (recordBtn) {
        recordBtn.disabled = !TRANSCRIBE_ENDPOINT;
        recordBtn.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i> Gravar';
    }

    announceSpeechNamingStatus('Fale o nome da imagem.');
}

function speechNamingHelp() {
    const item = speechNamingQueue[speechNamingIndex];
    if (!item) return;
    speak(item.word);
    announceSpeechNamingStatus(`Dica: ${item.word}`);
}

function speechNamingSkip() {
    if (speechNamingBusy || speechNamingRecording) return;
    speechNamingIndex++;
    renderSpeechNamingRound();
}

async function toggleSpeechNamingRecording() {
    if (speechNamingBusy || !TRANSCRIBE_ENDPOINT) return;
    const recordBtn = document.getElementById('btn-speech-naming-record');
    const feedback = document.getElementById('speech-naming-feedback');

    if (speechNamingRecording) {
        speechNamingRecording = false;
        recordBtn.disabled = true;
        recordBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Processando...';
        try {
            const audioBlob = await stopWavRecording();
            await evaluateSpeechNamingAnswer(audioBlob);
        } catch (error) {
            console.error('Erro ao processar gravação:', error);
            feedback.style.color = '#c0392b';
            feedback.textContent = 'Não foi possível processar o áudio. Tente de novo.';
        } finally {
            recordBtn.disabled = false;
            recordBtn.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i> Gravar';
        }
    } else {
        try {
            await startWavRecording();
            speechNamingRecording = true;
            recordBtn.innerHTML = '<i class="fas fa-stop" aria-hidden="true"></i> Parar';
            feedback.style.color = '#c0392b';
            feedback.textContent = '🔴 Gravando... fale agora!';
        } catch (error) {
            console.error('Erro ao acessar microfone:', error);
            alert('Erro ao acessar microfone. Certifique-se de conceder a permissão no navegador.');
        }
    }
}

async function evaluateSpeechNamingAnswer(audioBlob) {
    const set = speechNamingQueue[speechNamingIndex];
    const feedback = document.getElementById('speech-naming-feedback');
    if (!set) return;

    feedback.style.color = '#555';
    feedback.textContent = 'Ouvindo...';

    try {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'audio.wav');
        const response = await fetch(TRANSCRIBE_ENDPOINT, { method: 'POST', body: formData });
        const data = await response.json();
        if (data.error) throw new Error(data.error);

        const transcription = data.transcription || '';
        const isCorrect = speechAnswerMatchesWord(transcription, set.word);

        if (isCorrect) {
            speechNamingBusy = true;
            speechNamingTotalCount++;
            speechNamingCorrectCount++;
            updateSpeechNamingScore();
            document.getElementById('btn-speech-naming-record').disabled = true;
            feedback.style.color = '#16b84e';
            feedback.textContent = `✓ Muito bem! Ouvi: "${transcription}"`;
            announceSpeechNamingStatus(`Correto, ${set.word}!`);
            setTimeout(() => {
                speechNamingIndex++;
                renderSpeechNamingRound();
            }, 1200);
        } else {
            feedback.style.color = '#c0392b';
            feedback.textContent = transcription
                ? `Ouvi: "${transcription}". Tente de novo, ou toque em Passa.`
                : 'Não consegui entender. Tente de novo, ou toque em Passa.';
            announceSpeechNamingStatus('Tente de novo.');
        }
    } catch (error) {
        console.error('Erro ao transcrever áudio:', error);
        feedback.style.color = '#c0392b';
        feedback.textContent = 'Não foi possível transcrever o áudio. Tente de novo.';
    }
}

// =============================================
// ATIVIDADES PARA AFASIA (IMAGEM → PALAVRA)
// Inverso do Jogo de Reconhecimento: mostra uma imagem com uma pergunta e a pessoa
// escolhe a palavra certa entre 3 opções escritas. Cada atividade são 3 itens amarrados
// pelo mesmo pair_id: o 'correct' guarda a imagem, a palavra certa e a pergunta (no
// campo link, que os jogos não usam para vídeo), e os 2 'distractor' guardam só as
// palavras erradas — ver groupAfasiaItemsBySet().
// =============================================
const AFASIA_SEED_KEY = 'afasia-game-container';
const AFASIA_TITLE = 'Reconhecimento de Imagem|yellow';
const AFASIA_DEFAULT_QUESTION = 'Qual palavra combina com a imagem?';

function makeAfasiaSetId() {
    return 'afasia-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
}

// Deck específico de Reconhecimento de Imagem sendo editado/jogado agora —
// mesmo padrão de activeNamingDeckId (Fase 24).
let activeAfasiaDeckId = null;

async function getAfasiaContainer() {
    if (activeAfasiaDeckId && supabaseClient) {
        const { data, error } = await supabaseClient.from('exercises').select('*').eq('id', activeAfasiaDeckId).maybeSingle();
        if (!error && data) return { ...data, fromSupabase: true };
    }
    return isDoctor && currentUserId
        ? getOrCreateGameContainer(doctorScopedSeedKey(AFASIA_SEED_KEY, currentUserId), AFASIA_TITLE, currentUserId)
        : getOrCreateGameContainer(AFASIA_SEED_KEY, AFASIA_TITLE);
}

function resolveActiveAfasiaContainer() {
    if (activeAfasiaDeckId) {
        return lastMergedExercises.find(ex => ex.id === activeAfasiaDeckId) || null;
    }
    return resolveGameContainer(AFASIA_SEED_KEY);
}

function openAfasiaDeckManage(ex) {
    activeAfasiaDeckId = ex.id;
    openGame('afasia');
    editModes.afasia = true;
    updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
    document.getElementById('afasia-play-area').style.display = 'none';
    document.getElementById('grid-afasia').style.display = 'grid';
    renderAfasiaManageGrid();
}

function playAfasiaDeck(ex) {
    activeAfasiaDeckId = ex.id;
    editModes.afasia = false;
    openGame('afasia'); // já chama startAfasiaGame() internamente, usando activeAfasiaDeckId acima
}

async function addAfasiaSet(question, correctWord, d1Word, d2Word, imageFile) {
    const container = await getAfasiaContainer();
    const pairId = makeAfasiaSetId();

    if (container.fromSupabase) {
        const imageUrl = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
        await supabaseClient.from('exercise_items').insert([
            { exercise_id: container.id, word: correctWord, pair_id: pairId, role: 'correct', image_url: imageUrl, link: question },
            { exercise_id: container.id, word: d1Word, pair_id: pairId, role: 'distractor', image_url: null, link: '' },
            { exercise_id: container.id, word: d2Word, pair_id: pairId, role: 'distractor', image_url: null, link: '' }
        ]);
    } else {
        container.items = [
            ...(container.items || []),
            { word: correctWord, pairId, role: 'correct', imageBlob: imageFile, image_url: null, videoLink: question },
            { word: d1Word, pairId, role: 'distractor', imageBlob: null, image_url: null, videoLink: '' },
            { word: d2Word, pairId, role: 'distractor', imageBlob: null, image_url: null, videoLink: '' }
        ];
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAfasiaManageGrid();
}

async function updateAfasiaSet(pairId, question, correctWord, d1Word, d2Word, imageFile) {
    const container = await getAfasiaContainer();

    if (container.fromSupabase) {
        const { data: setItems } = await supabaseClient.from('exercise_items').select('*').eq('pair_id', pairId).order('id', { ascending: true });
        if (!setItems || setItems.length !== 3) return;
        const correctItem = setItems.find(it => it.role === 'correct');
        const distractorItems = setItems.filter(it => it.role === 'distractor');
        const correctUpdate = { word: correctWord, link: question };
        if (imageFile) correctUpdate.image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
        await supabaseClient.from('exercise_items').update(correctUpdate).eq('id', correctItem.id);
        await supabaseClient.from('exercise_items').update({ word: d1Word }).eq('id', distractorItems[0].id);
        await supabaseClient.from('exercise_items').update({ word: d2Word }).eq('id', distractorItems[1].id);
    } else {
        const distractors = (container.items || []).filter(it => it.pairId === pairId && it.role === 'distractor');
        container.items = (container.items || []).map(it => {
            if (it.pairId !== pairId) return it;
            if (it.role === 'correct') {
                const updated = { ...it, word: correctWord, videoLink: question };
                if (imageFile) { updated.imageBlob = imageFile; updated.image_url = null; }
                return updated;
            }
            return { ...it, word: it === distractors[0] ? d1Word : d2Word };
        });
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAfasiaManageGrid();
}

async function deleteAfasiaSet(pairId) {
    const container = await getAfasiaContainer();

    if (container.fromSupabase) {
        await supabaseClient.from('exercise_items').delete().eq('pair_id', pairId);
    } else {
        container.items = (container.items || []).filter(it => it.pairId !== pairId);
        await putLocalGameContainer(container);
    }
    await loadExerciseCards();
    renderAfasiaManageGrid();
}

// Agrupa itens flat (word, pairId, role, imagem, pergunta) em atividades de 3 itens.
function groupAfasiaItemsBySet(items) {
    const groups = {};
    (items || []).forEach(item => {
        if (!item.pairId) return;
        (groups[item.pairId] = groups[item.pairId] || []).push(item);
    });
    return Object.entries(groups)
        .map(([pairId, group]) => {
            const correct = group.find(it => it.role === 'correct');
            const distractors = group.filter(it => it.role === 'distractor');
            if (!correct || distractors.length !== 2) return null;
            return {
                pairId,
                question: correct.videoLink || AFASIA_DEFAULT_QUESTION,
                correct,
                distractorWords: distractors.map(it => it.word)
            };
        })
        .filter(Boolean);
}

// ---- Gerenciamento de atividades (modo "Editar") ----

async function renderAfasiaManageGrid() {
    const container = document.getElementById('grid-afasia');
    if (!container) return;
    container.innerHTML = '';

    const afasiaContainer = resolveActiveAfasiaContainer();
    const sets = groupAfasiaItemsBySet((afasiaContainer && afasiaContainer.items) || []);

    sets.forEach(set => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-yellow';
        btn.type = 'button';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgEl.src = resolveNamingImageSrc(set.correct);
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = set.correct.word;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Excluir atividade');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            if (confirm(`Excluir a atividade "${set.correct.word}"?`)) deleteAfasiaSet(set.pairId);
        };
        btn.appendChild(delBtn);

        const editBtn = document.createElement('button');
        editBtn.className = 'edit-media-btn';
        editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
        editBtn.setAttribute('aria-label', 'Editar atividade');
        editBtn.onclick = (ev) => { ev.stopPropagation(); openAfasiaSetModal(set); };
        btn.appendChild(editBtn);

        container.appendChild(btn);
    });

    // Atividades novas ainda não enviadas — ver flushAfasiaDraftSets().
    afasiaDraftSets.forEach((draft) => {
        const btn = document.createElement('button');
        btn.className = 'word-btn border-yellow';
        btn.type = 'button';
        btn.style.opacity = '0.7';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgEl.src = draft.imageFile ? URL.createObjectURL(draft.imageFile) : '';
        imgContainer.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = `${draft.correctWord} (pendente)`;

        btn.appendChild(imgContainer);
        btn.appendChild(textEl);

        const delBtn = document.createElement('button');
        delBtn.className = 'delete-media-btn';
        delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
        delBtn.setAttribute('aria-label', 'Remover atividade pendente');
        delBtn.onclick = (ev) => {
            ev.stopPropagation();
            afasiaDraftSets = afasiaDraftSets.filter(d => d.tempId !== draft.tempId);
            renderAfasiaManageGrid();
        };
        btn.appendChild(delBtn);

        container.appendChild(btn);
    });

    const addBtn = document.createElement('button');
    addBtn.className = 'word-btn border-gray';
    addBtn.type = 'button';
    addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Imagem</div>';
    addBtn.addEventListener('click', () => openAfasiaSetModal(null));
    container.appendChild(addBtn);
}

let afasiaDraftSets = [];

async function flushAfasiaDraftSets() {
    const pending = afasiaDraftSets;
    afasiaDraftSets = [];
    for (const draft of pending) {
        await addAfasiaSet(draft.question, draft.correctWord, draft.d1Word, draft.d2Word, draft.imageFile);
    }
}

let editingAfasiaSetId = null;
let afasiaQuickCreate = false;

function openAfasiaSetModal(set) {
    editingAfasiaSetId = set ? set.pairId : null;
    const isEdit = !!set;
    document.getElementById('afasia-set-modal-title').textContent = isEdit ? 'Editar Reconhecimento de Imagem' : 'Novo Reconhecimento de Imagem';
    document.getElementById('afasia-set-question').value = isEdit ? set.question : '';
    document.getElementById('afasia-set-word-correct').value = isEdit ? set.correct.word : '';
    document.getElementById('afasia-set-word-d1').value = isEdit ? set.distractorWords[0] : '';
    document.getElementById('afasia-set-word-d2').value = isEdit ? set.distractorWords[1] : '';
    document.getElementById('afasia-set-image').value = '';
    document.getElementById('afasia-set-image').required = !isEdit;

    const preview = document.getElementById('afasia-set-img-preview');
    const src = isEdit ? resolveNamingImageSrc(set.correct) : '';
    if (src) { preview.src = src; preview.style.display = 'block'; }
    else { preview.style.display = 'none'; }

    document.getElementById('afasia-set-modal').style.display = 'flex';
}

function closeAfasiaSetModal() {
    const shouldExitQuickCreate = afasiaQuickCreate;
    document.getElementById('afasia-set-modal').style.display = 'none';
    editingAfasiaSetId = null;
    afasiaQuickCreate = false;
    if (shouldExitQuickCreate) {
        editModes.afasia = false;
        updateEditBtn('afasia', 'btn-edit-afasia', 'Salvar');
        closeGame();
    }
}

// ---- Partida (modo "Jogar") ----

function getAfasiaSets() {
    const container = resolveActiveAfasiaContainer();
    return groupAfasiaItemsBySet((container && container.items) || []);
}

let afasiaQueue = [];
let afasiaIndex = 0;
let afasiaCorrectCount = 0;
let afasiaTotalCount = 0;
let afasiaBusy = false;

function announceAfasiaStatus(text) {
    const el = document.getElementById('afasia-status-live');
    if (el) el.textContent = text;
}

function updateAfasiaScore() {
    document.getElementById('afasia-score').textContent = `${afasiaCorrectCount}/${afasiaTotalCount} correto`;
}

function startAfasiaGame() {
    const sets = getAfasiaSets();
    const playArea = document.getElementById('afasia-play-area');
    const manageGrid = document.getElementById('grid-afasia');
    manageGrid.style.display = 'none';
    playArea.style.display = 'flex';

    afasiaCorrectCount = 0;
    afasiaTotalCount = 0;
    afasiaBusy = false;
    updateAfasiaScore();

    if (sets.length < 1) {
        document.getElementById('afasia-image-frame').style.display = 'none';
        document.getElementById('afasia-question').textContent = '';
        document.getElementById('afasia-choices').innerHTML = '';
        const message = 'Crie atividades (em "Editar") para gerar o jogo.';
        announceAfasiaStatus(message);
        const msg = document.createElement('p');
        msg.style.cssText = 'padding:20px;color:#555;font-weight:600;text-align:center;';
        msg.textContent = message;
        document.getElementById('afasia-choices').appendChild(msg);
        return;
    }

    afasiaQueue = shuffleArray([...sets]);
    afasiaIndex = 0;
    preloadGameImages(afasiaQueue.map(set => resolveNamingImageSrc(set.correct)));
    // Pré-carrega o áudio de todas as perguntas e palavras da fila
    [...new Set(afasiaQueue.flatMap(s => [s.word, s.question]).filter(Boolean))].forEach(prefetchTts);
    announceAfasiaStatus('Novo jogo iniciado.');
    renderAfasiaRound();
}

function renderAfasiaRound() {
    if (afasiaIndex >= afasiaQueue.length) {
        afasiaQueue = shuffleArray([...afasiaQueue]);
        afasiaIndex = 0;
    }

    const set = afasiaQueue[afasiaIndex];
    afasiaBusy = false;

    document.getElementById('afasia-image-frame').style.display = 'flex';
    document.getElementById('afasia-image').src = resolveNamingImageSrc(set.correct);
    document.getElementById('afasia-question').textContent = set.question;

    const options = shuffleArray([
        { word: set.correct.word, isCorrect: true },
        { word: set.distractorWords[0], isCorrect: false },
        { word: set.distractorWords[1], isCorrect: false }
    ]);

    const choicesEl = document.getElementById('afasia-choices');
    choicesEl.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'afasia-choice-btn';
        btn.textContent = opt.word;
        btn.addEventListener('click', () => handleAfasiaChoice(btn, opt.isCorrect, set.correct.word));
        choicesEl.appendChild(btn);
    });

    announceAfasiaStatus(set.question);
}

function handleAfasiaChoice(btn, isCorrect, word) {
    if (afasiaBusy || btn.disabled) return;

    if (isCorrect) {
        afasiaBusy = true;
        const allBtns = document.querySelectorAll('#afasia-choices .afasia-choice-btn');
        allBtns.forEach(b => b.disabled = true);

        afasiaTotalCount++;
        afasiaCorrectCount++;
        btn.classList.add('is-correct');
        announceAfasiaStatus(`Isso mesmo, ${word}!`);
        speak(word);
        updateAfasiaScore();

        setTimeout(() => {
            afasiaIndex++;
            renderAfasiaRound();
        }, 1200);
    } else {
        // Errou: mostra o feedback vermelho só por um instante e depois volta ao normal
        // (sem ficar marcado, sem trocar as opções), pra pessoa poder tentar de novo.
        afasiaBusy = true;
        btn.classList.add('is-incorrect');
        announceAfasiaStatus('Tente de novo.');
        setTimeout(() => {
            btn.classList.remove('is-incorrect');
            afasiaBusy = false;
        }, 600);
    }
}

function afasiaHelp() {
    if (afasiaIndex >= afasiaQueue.length) return;
    speak(afasiaQueue[afasiaIndex].question);
}

function afasiaSkip() {
    if (afasiaBusy) return;
    afasiaIndex++;
    renderAfasiaRound();
}

// =============================================
// SISTEMA DE PERSONALIZAÇÃO DE CARDS
// =============================================
// 🔐 ADMIN: Controle de acesso
// isAdmin aqui significa "pode editar conteúdo" (papéis editor ou admin),
// mantendo compatibilidade com todo o restante do arquivo que já usa essa
// variável para mostrar barras de edição. canManageUsers é o papel
// exclusivamente admin (gerenciar usuários), usado só pela aba Admin.
let isAdmin = false; // Bloqueado por padrão (Apenas fala)
let canManageUsers = false;
let isDoctor = false; // Papel "doctor": gerencia só os próprios pacientes, não conteúdo geral
let currentPatientId = null; // Preenchido quando o papel logado é "patient"
let currentPatientDoctorUserId = null; // doctor_user_id do próprio médico do paciente logado (resolveGameContainer)
let currentUserId = null; // uuid do usuário logado, pra saber "isso é meu?" (banco de exercícios do médico)
let currentUserCompanyId = null; // company_id do médico logado (company_members) — grava em tudo que ele cria, pra outros médicos da mesma empresa também verem (RLS já suporta isso via can_view_*, só faltava o app preencher)

// Filtro do "banco do médico" (exercises/topics/virtues/medias) usado nas
// telas de liberar conteúdo pro paciente: próprio banco (por autor) + banco
// da empresa (colegas) + conteúdo global do admin. Sem o ramo de empresa,
// mesmo com company_id preenchido e a RLS já permitindo o SELECT, essa
// lista client-side escondia o que os colegas criaram.
function doctorBankOrFilter() {
    const companyClause = currentUserCompanyId ? `,company_id.eq.${currentUserCompanyId}` : '';
    return `doctor_user_id.eq.${currentUserId}${companyClause},and(doctor_user_id.is.null,company_id.is.null,patient_id.is.null)`;
}
let activePatientContext = null; // { id, name } — médico "entrou" no paciente pra editar Carômetro/Livros/Mídias dele
let patientExerciseReleaseMap = new Map(); // exercise_id (string) -> visible, só preenchido quando activePatientContext (tela "olho" de Exercícios)

function isCompleteSentenceLocalDemo() {
    const localHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
    return localHost && new URLSearchParams(window.location.search).get('demo') === 'complete-sentence';
}

function isLocalAppHost() {
    return ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
}

if (isLocalAppHost()) {
    startUsageSession({
        id: 'local-demo-user',
        email: 'local@localhost',
        role: 'admin'
    });
}

// Verificar sessão no carregamento
if (supabaseClient) {
    supabaseClient.auth.getSession().then(async ({ data }) => {
        if (!data?.session) {
            if (isLocalAppHost()) {
                isAdmin = true;
                canManageUsers = true;
                startUsageSession({
                    id: 'local-demo-user',
                    email: 'local@localhost',
                    role: 'admin'
                });
                showEditBars();
                applyModuleVisibility();
                renderGamesList();
                const adminNavBtn = document.getElementById('btn-nav-admin');
                if (adminNavBtn) adminNavBtn.style.display = 'flex';
                return;
            }
            // Ninguém pode acessar sem login! Redireciona para a landing page (index.html).
            window.location.href = 'index.html';
            return;
        }

        // Se chegou aqui, a pessoa fez login.
        const userId = data.session.user.id;
        currentUserId = userId;

        try {
            const { data: roleData, error } = await supabaseClient
                .from('user_roles')
                .select('role')
                .eq('user_id', userId)
                .maybeSingle();

            // maybeSingle() não gera erro quando o usuário ainda não tem linha em
            // user_roles (conta recém-criada) — só quando a query de fato falhou (rede,
            // RLS, etc.). Nos dois casos o app segue tratando como "viewer", mas loga pra
            // não confundir "realmente é viewer" com "falha ao carregar o papel real".
            if (error) console.warn('Erro ao carregar papel do usuário (tratando como viewer):', error);
            const role = roleData?.role || 'viewer';
            isAdmin = isCompleteSentenceLocalDemo() || role === 'editor' || role === 'admin';
            canManageUsers = role === 'admin';
            isDoctor = role === 'doctor'; // Não entra em isAdmin: médico não deve editar conteúdo geral

            if (isDoctor) {
                const { data: memberRow } = await supabaseClient
                    .from('company_members').select('company_id').eq('user_id', userId).maybeSingle();
                currentUserCompanyId = memberRow?.company_id || null;
            }

            if (role === 'patient') {
                const { data: patientRow } = await supabaseClient
                    .from('patients').select('id, doctor_user_id').eq('user_id', userId).maybeSingle();
                currentPatientId = patientRow?.id || null;
                currentPatientDoctorUserId = patientRow?.doctor_user_id || null;
            }
            startUsageSession({
                id: userId,
                email: data.session.user.email || 'sem e-mail',
                role
            });

            const logoutLabel = canManageUsers ? 'Sair (Admin)' : (isAdmin ? 'Sair (Editor)' : 'Sair');
            document.getElementById('text-login-logout').textContent = logoutLabel;
            if (document.getElementById('btn-login-logout')) {
                const icon = document.getElementById('btn-login-logout').querySelector('i');
                if (icon) icon.className = isAdmin ? 'fas fa-unlock' : 'fas fa-user';
            }

            const adminNavBtn = document.getElementById('btn-nav-admin');
            if (adminNavBtn) adminNavBtn.style.display = canManageUsers ? 'flex' : 'none';

            const doctorNavBtn = document.getElementById('btn-nav-doctor-patients');
            if (doctorNavBtn) doctorNavBtn.style.display = isDoctor ? 'flex' : 'none';

            if (isAdmin) {
                // Re-render grids to show edit buttons se editor/admin
                loadCoreAndRender();
            }
            // Recarrega tudo direto do Supabase agora que o papel (isAdmin/
            // isDoctor/currentPatientId) é conhecido. A primeira chamada (lá no
            // boot do app, antes da sessão terminar de resolver) pode ter
            // rodado sem sessão de verdade — pra paciente isso importa tanto
            // quanto pra médico (RLS de patient_topic_flags/patient_exercise_
            // flags/etc. depende de currentPatientId estar setado), então não
            // é mais restrito a isAdmin||isDoctor.
            if (typeof loadVirtuesAndRender === 'function') loadVirtuesAndRender();
            if (typeof loadTopicsAndRender === 'function') loadTopicsAndRender();
            loadMediaCards();
            loadExerciseCards();
            // Pré-carrega doctorPatientsCache pro botão de avisar já ter o
            // nome do paciente pronto, mesmo sem o médico ter aberto "Meus
            // Pacientes" ainda nesta sessão (só popula o cache, não muda
            // nada visível já que a tela nem está ativa).
            if (isDoctor) loadDoctorPatients();
            
            // Mostra/oculta o botão Editar do Carômetro conforme papel do usuário
            // (médico só quando "dentro" de um paciente — Fase 5c)
            const btnEditCarometro = document.getElementById('btn-edit-carometro');
            if (btnEditCarometro) {
                btnEditCarometro.style.display = (isAdmin || (isDoctor && activePatientContext)) ? '' : 'none';
            }

            applyModuleVisibility(); // Aplica visibilidade de módulos (para ambos admin e usuário)
        } catch (e) {
            console.error("Erro ao checar permissões:", e);
        }

        showEditBars();
    });

    // A checagem acima roda uma única vez, no carregamento — sem isto, se a sessão cair
    // depois (token expirado sem conseguir renovar, acesso revogado, corrida de refresh
    // entre as várias instâncias do cliente Supabase nos iframes), o app fica "meio-logado":
    // a UI continua mostrando tudo como se a pessoa estivesse logada, e cada chamada ao
    // Supabase passa a falhar em silêncio. Reage ao SIGNED_OUT mandando de volta pra landing.
    supabaseClient.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_OUT' && !isLocalAppHost()) {
            window.location.href = 'index.html';
        }
    });
}

document.getElementById('btn-login-logout')?.addEventListener('click', async () => {
    if (confirm("Deseja sair do aplicativo?")) {
        closeUsageSession('logout');
        if (supabaseClient) await supabaseClient.auth.signOut();
        window.location.href = 'index.html';
    }
});

// =============================================
// PAINEL ADMIN (gestão de usuários e papéis)
// =============================================
const ADMIN_FN_URL = `${supabaseUrl}/functions/v1/admin-users`;

async function callAdminUsersFn(action, payload) {
    const { data } = await supabaseClient.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) throw new Error('Sessão expirada. Faça login novamente.');

    const res = await fetch(ADMIN_FN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ action, payload })
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || `Erro ${res.status}`);
    return body;
}

function showAdminFeedback(message, isError = false) {
    const box = document.getElementById('admin-users-feedback');
    if (!box) return;
    box.textContent = message;
    box.classList.toggle('error', isError);
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 5000);
}

function formatAdminDate(iso) {
    if (!iso) return '—';
    return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// Lembra a empresa selecionada no filtro entre recarregamentos da lista
// (ex.: depois de trocar o papel de alguém) — sem isso o filtro voltava
// pra "Todas" a cada ação.
let adminUsersCompanyFilter = '';

function populateAdminUsersCompanyFilter() {
    const filterSelect = document.getElementById('admin-users-company-filter');
    if (!filterSelect) return;
    const current = adminUsersCompanyFilter;
    filterSelect.innerHTML = '<option value="">Todas as empresas</option>'
        + companiesCache.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    if (current && companiesCache.some(c => c.id === current)) filterSelect.value = current;
    else adminUsersCompanyFilter = '';
}

async function loadAdminUsers() {
    const tbody = document.getElementById('admin-users-tbody');
    if (!tbody || !canManageUsers) return;
    tbody.innerHTML = '<tr><td colspan="7">Carregando...</td></tr>';

    try {
        const { data: sessionData } = await supabaseClient.auth.getSession();
        const currentUserId = sessionData?.session?.user?.id;
        if (!currentUserId && isLocalAppHost()) {
            tbody.innerHTML = '<tr><td colspan="7">Para ver e editar usuários, faça login com uma conta admin do Supabase.</td></tr>';
            showAdminFeedback('A aba Usuários depende da sessão do Supabase para carregar a lista.', true);
            return;
        }
        // companiesCache pode ainda não ter sido carregado se o admin nunca
        // abriu a aba "Empresas" nesta sessão — precisamos dele pra mostrar
        // o nome da empresa de cada médico e popular o filtro.
        if (!companiesCache.length) {
            try {
                const { companies } = await callAdminUsersFn('listCompanies');
                companiesCache = companies || [];
            } catch (e) {}
        }
        populateAdminUsersCompanyFilter();

        // Empresa de paciente não vem de company_members (isso é só pra
        // quem não é paciente) — vem do médico dele, via patients.company_id.
        // Mostramos só leitura pra paciente, sem dropdown editável, pra não
        // sugerir que dá pra mudar a empresa dele por aqui sem trocar de médico.
        const { data: patientRows } = await supabaseClient.from('patients').select('user_id, company_id');
        const patientCompanyByUserId = new Map((patientRows || []).map(p => [p.user_id, p.company_id]));

        const { users: allUsers } = await callAdminUsersFn('list');
        const effectiveCompanyId = (u) => u.role === 'patient' ? (patientCompanyByUserId.get(u.id) || null) : u.companyId;
        const users = adminUsersCompanyFilter
            ? allUsers.filter(u => effectiveCompanyId(u) === adminUsersCompanyFilter)
            : allUsers;

        users.sort((a, b) => a.email.localeCompare(b.email));
        tbody.innerHTML = '';

        if (!users.length) {
            tbody.innerHTML = '<tr><td colspan="7">Nenhum usuário encontrado pra essa empresa.</td></tr>';
            renderUsageDashboard();
            return;
        }

        users.forEach(u => {
            const tr = document.createElement('tr');
            const isSelf = u.id === currentUserId;

            const nameCell = document.createElement('td');
            nameCell.className = 'admin-name-cell';
            nameCell.style.display = 'flex';
            nameCell.style.alignItems = 'center';
            nameCell.style.gap = '8px';

            const nameSpan = document.createElement('span');
            nameSpan.textContent = u.name || '-';
            
            const nameEditBtn = document.createElement('button');
            nameEditBtn.innerHTML = '<i class="fas fa-pen" aria-hidden="true"></i>';
            nameEditBtn.style.background = 'none';
            nameEditBtn.style.border = 'none';
            nameEditBtn.style.color = '#718096';
            nameEditBtn.style.cursor = 'pointer';
            nameEditBtn.title = 'Editar Nome';

            nameCell.appendChild(nameSpan);
            nameCell.appendChild(nameEditBtn);

            nameEditBtn.addEventListener('click', () => {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = u.name || '';
                input.style.padding = '4px 8px';
                input.style.border = '1px solid #ccc';
                input.style.borderRadius = '4px';

                const saveBtn = document.createElement('button');
                saveBtn.innerHTML = '<i class="fas fa-check" aria-hidden="true"></i>';
                saveBtn.style.background = 'none';
                saveBtn.style.border = 'none';
                saveBtn.style.color = '#38a169';
                saveBtn.style.cursor = 'pointer';

                const cancelBtn = document.createElement('button');
                cancelBtn.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
                cancelBtn.style.background = 'none';
                cancelBtn.style.border = 'none';
                cancelBtn.style.color = '#e53e3e';
                cancelBtn.style.cursor = 'pointer';

                nameCell.innerHTML = '';
                nameCell.appendChild(input);
                nameCell.appendChild(saveBtn);
                nameCell.appendChild(cancelBtn);

                input.focus();

                const finishEdit = () => {
                    nameCell.innerHTML = '';
                    nameCell.appendChild(nameSpan);
                    nameCell.appendChild(nameEditBtn);
                };

                cancelBtn.addEventListener('click', finishEdit);
                saveBtn.addEventListener('click', async () => {
                    const newName = input.value;
                    input.disabled = true;
                    saveBtn.disabled = true;
                    try {
                        await callAdminUsersFn('setName', { userId: u.id, name: newName });
                        u.name = newName;
                        nameSpan.textContent = newName || '-';
                        showAdminFeedback('Nome atualizado.');
                    } catch (err) {
                        console.error('Erro no setName:', err);
                        showAdminFeedback(err.message || 'Erro ao atualizar nome.', true);
                    } finally {
                        finishEdit();
                    }
                });
            });

            tr.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.className = 'admin-email-cell';
            emailCell.textContent = u.email + (isSelf ? ' (você)' : '');
            tr.appendChild(emailCell);

            const companyCell = document.createElement('td');
            if (u.role === 'patient') {
                const companyName = patientCompanyByUserId.get(u.id)
                    ? (companiesCache.find(c => c.id === patientCompanyByUserId.get(u.id))?.name || '—')
                    : '—';
                companyCell.textContent = companyName;
                companyCell.title = 'Empresa do paciente vem do médico dele — troque o médico pra mudar.';
            } else {
                const companySelect = document.createElement('select');
                companySelect.className = 'admin-role-select';
                const noneOpt = document.createElement('option');
                noneOpt.value = '';
                noneOpt.textContent = 'Sem empresa';
                companySelect.appendChild(noneOpt);
                companiesCache.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c.id;
                    opt.textContent = c.name;
                    if (c.id === u.companyId) opt.selected = true;
                    companySelect.appendChild(opt);
                });
                companySelect.addEventListener('change', async () => {
                    const newCompanyId = companySelect.value || null;
                    companySelect.disabled = true;
                    try {
                        await callAdminUsersFn('setCompany', { userId: u.id, companyId: newCompanyId });
                        u.companyId = newCompanyId;
                        showAdminFeedback(`Empresa de ${u.email} atualizada.`);
                    } catch (err) {
                        showAdminFeedback(err.message || 'Erro ao atualizar empresa.', true);
                        companySelect.value = u.companyId || '';
                    } finally {
                        companySelect.disabled = false;
                    }
                });
                companyCell.appendChild(companySelect);
            }
            tr.appendChild(companyCell);

            const roleCell = document.createElement('td');
            const EDITABLE_ROLES = ['viewer', 'editor', 'admin', 'doctor'];
            if (isSelf || !EDITABLE_ROLES.includes(u.role)) {
                // Papéis fora de EDITABLE_ROLES (ex: patient) não são alteráveis por
                // aqui — setRole do backend só aceita viewer/editor/admin/doctor.
                const badge = document.createElement('span');
                badge.className = `admin-role-badge ${u.role}`;
                badge.textContent = u.role;
                roleCell.appendChild(badge);
            } else {
                const select = document.createElement('select');
                select.className = 'admin-role-select';
                EDITABLE_ROLES.forEach(r => {
                    const opt = document.createElement('option');
                    opt.value = r;
                    opt.textContent = r;
                    if (r === u.role) opt.selected = true;
                    select.appendChild(opt);
                });
                select.addEventListener('change', async () => {
                    const newRole = select.value;
                    select.disabled = true;
                    try {
                        await callAdminUsersFn('setRole', { userId: u.id, role: newRole });
                        showAdminFeedback(`Papel de ${u.email} atualizado para ${newRole}.`);
                    } catch (err) {
                        showAdminFeedback(err.message || 'Erro ao atualizar papel.', true);
                        select.value = u.role;
                    } finally {
                        select.disabled = false;
                    }
                });
                roleCell.appendChild(select);
            }
            tr.appendChild(roleCell);

            const createdCell = document.createElement('td');
            createdCell.textContent = formatAdminDate(u.created_at);
            tr.appendChild(createdCell);

            const lastSignInCell = document.createElement('td');
            lastSignInCell.textContent = formatAdminDate(u.last_sign_in_at);
            tr.appendChild(lastSignInCell);

            const actionsCell = document.createElement('td');
            actionsCell.className = 'admin-actions-cell';

            const passBtn = document.createElement('button');
            passBtn.className = 'admin-edit-password-btn';
            passBtn.innerHTML = '<i class="fas fa-key" aria-hidden="true"></i>';
            passBtn.title = 'Alterar senha';
            passBtn.addEventListener('click', () => openChangePasswordModal(u.id, u.email));
            actionsCell.appendChild(passBtn);

            if (!isSelf) {
                // Remoção de conta = desativar (ban), nunca apagar de
                // verdade (regra fixa do projeto) — excluir de verdade
                // também quebrava com erro de chave estrangeira sempre que
                // o usuário tinha paciente/exercício/tópico/mídia vinculado.
                const btnToggleActive = document.createElement('button');
                btnToggleActive.innerHTML = u.active
                    ? '<i class="fas fa-user-slash" aria-hidden="true"></i>'
                    : '<i class="fas fa-user-check" aria-hidden="true"></i>';
                btnToggleActive.title = u.active ? 'Desativar usuário' : 'Reativar usuário';
                btnToggleActive.className = u.active ? 'admin-delete-user-btn' : 'admin-edit-password-btn';
                btnToggleActive.addEventListener('click', async () => {
                    const confirmMsg = u.active
                        ? `Desativar ${u.email}? Não vai conseguir mais entrar, mas os dados continuam salvos.`
                        : `Reativar ${u.email}?`;
                    if (!confirm(confirmMsg)) return;
                    btnToggleActive.disabled = true;
                    try {
                        await callAdminUsersFn('setActive', { userId: u.id, active: !u.active });
                        showAdminFeedback(u.active ? `Usuário ${u.email} desativado.` : `Usuário ${u.email} reativado.`);
                        loadAdminUsers();
                    } catch (err) {
                        showAdminFeedback(err.message || 'Erro ao atualizar usuário.', true);
                        btnToggleActive.disabled = false;
                    }
                });
                actionsCell.appendChild(btnToggleActive);
            }
            tr.appendChild(actionsCell);

            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="5">Erro ao carregar usuários: ${err.message}</td></tr>`;
        showAdminFeedback(err.message || 'Erro ao carregar usuários.', true);
    }
    renderUsageDashboard();
}

document.getElementById('btn-nav-admin')?.addEventListener('click', async () => {
    setAdminTab('users');
    await loadAdminUsers();
});
document.getElementById('admin-users-company-filter')?.addEventListener('change', (e) => {
    adminUsersCompanyFilter = e.target.value;
    loadAdminUsers();
});
document.getElementById('btn-admin-tab-users')?.addEventListener('click', () => setAdminTab('users'));
document.getElementById('btn-admin-tab-companies')?.addEventListener('click', () => setAdminTab('companies'));
document.getElementById('btn-admin-tab-usage')?.addEventListener('click', () => setAdminTab('usage'));
document.getElementById('btn-admin-tab-modules')?.addEventListener('click', () => setAdminTab('modules'));

document.getElementById('btn-doctor-tab-patients')?.addEventListener('click', () => setDoctorTab('patients'));
document.getElementById('btn-doctor-tab-usage')?.addEventListener('click', () => setDoctorTab('usage'));
document.getElementById('btn-refresh-doctor-usage')?.addEventListener('click', () => {
    getMyPatientUserIds().then(ids => renderUsageDashboard('doctor-usage', ids));
});

// =============================================
// PAINEL ADMIN — Empresas (Fase 1 do modelo médico→paciente)
// =============================================
let companiesCache = [];

async function loadCompanies() {
    const tbody = document.getElementById('companies-tbody');
    if (!tbody || !canManageUsers) return;
    tbody.innerHTML = '<tr><td colspan="5">Carregando...</td></tr>';

    try {
        const [{ companies }, { users }, { data: patients }] = await Promise.all([
            callAdminUsersFn('listCompanies'),
            callAdminUsersFn('list'),
            supabaseClient.from('patients').select('id, company_id'),
        ]);
        companiesCache = companies || [];

        // Empresa agora pode ter qualquer papel vinculado (não só médico) —
        // conta os três grupos separadamente pra refletir isso na tabela.
        const doctorCountByCompany = new Map();
        const otherCountByCompany = new Map();
        (users || []).forEach(u => {
            if (!u.companyId) return;
            const map = u.role === 'doctor' ? doctorCountByCompany : otherCountByCompany;
            map.set(u.companyId, (map.get(u.companyId) || 0) + 1);
        });
        const patientCountByCompany = new Map();
        (patients || []).forEach(p => {
            if (!p.company_id) return;
            patientCountByCompany.set(p.company_id, (patientCountByCompany.get(p.company_id) || 0) + 1);
        });

        tbody.innerHTML = '';
        if (!companiesCache.length) {
            tbody.innerHTML = '<tr><td colspan="5">Nenhuma empresa cadastrada ainda.</td></tr>';
        }
        companiesCache.forEach(c => {
            const tr = document.createElement('tr');
            const tdName = document.createElement('td');
            tdName.textContent = c.name;
            const tdDoctors = document.createElement('td');
            tdDoctors.textContent = String(doctorCountByCompany.get(c.id) || 0);
            const tdPatients = document.createElement('td');
            tdPatients.textContent = String(patientCountByCompany.get(c.id) || 0);
            const tdOthers = document.createElement('td');
            tdOthers.textContent = String(otherCountByCompany.get(c.id) || 0);
            const tdCreated = document.createElement('td');
            tdCreated.textContent = formatAdminDate(c.created_at);
            tr.append(tdName, tdDoctors, tdPatients, tdOthers, tdCreated);
            tbody.appendChild(tr);
        });

        populateCompanySelect();
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="5">Erro ao carregar empresas: ${err.message}</td></tr>`;
    }
}

function populateCompanySelect() {
    const select = document.getElementById('new-user-company');
    if (!select) return;
    const current = select.value;
    select.innerHTML = companiesCache.map(c => `<option value="${c.id}">${c.name}</option>`).join('')
        || '<option value="">Nenhuma empresa cadastrada</option>';
    if (current && companiesCache.some(c => c.id === current)) select.value = current;
}

const newCompanyModal = document.getElementById('new-company-modal');
const newCompanyForm = document.getElementById('new-company-form');
const newCompanyError = document.getElementById('new-company-error');

document.getElementById('btn-open-new-company')?.addEventListener('click', () => {
    newCompanyForm?.reset();
    if (newCompanyError) newCompanyError.style.display = 'none';
    if (newCompanyModal) newCompanyModal.style.display = 'flex';
});

function closeNewCompanyModal() {
    if (newCompanyModal) newCompanyModal.style.display = 'none';
}
document.getElementById('btn-close-new-company')?.addEventListener('click', closeNewCompanyModal);
document.getElementById('btn-cancel-new-company')?.addEventListener('click', closeNewCompanyModal);

newCompanyForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('new-company-name').value.trim();
    const doctorEmail = document.getElementById('new-company-doctor-email')?.value.trim();
    const doctorName = document.getElementById('new-company-doctor-name')?.value.trim();
    const doctorPassword = document.getElementById('new-company-doctor-password')?.value;
    const submitBtn = document.getElementById('btn-submit-new-company');
    const feedback = document.getElementById('companies-feedback');

    if (newCompanyError) newCompanyError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Criando...';
    try {
        const result = await callAdminUsersFn('createCompany', { name, doctorEmail, doctorName, doctorPassword });
        closeNewCompanyModal();
        if (feedback) {
            feedback.textContent = result?.doctor
                ? `Empresa "${name}" criada com o médico ${result.doctor.email}.`
                : result?.error || `Empresa "${name}" criada.`;
            feedback.classList.toggle('error', !result?.doctor && !!result?.error);
            feedback.style.display = 'block';
            setTimeout(() => { feedback.style.display = 'none'; }, 5000);
        }
        await loadCompanies();
    } catch (err) {
        if (newCompanyError) {
            newCompanyError.textContent = err.message || 'Erro ao criar empresa.';
            newCompanyError.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Criar empresa';
    }
});
document.getElementById('btn-refresh-usage')?.addEventListener('click', renderUsageDashboard);
document.getElementById('btn-clear-usage')?.addEventListener('click', clearLocalUsageData);

// =============================================
// TELA "MEUS PACIENTES" (papel doctor) — Fase 2 do modelo médico→paciente
// =============================================
const DOCTOR_PATIENTS_FN_URL = `${supabaseUrl}/functions/v1/doctor-patients`;

async function callDoctorPatientsFn(action, payload) {
    const { data } = await supabaseClient.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) throw new Error('Sessão expirada. Faça login novamente.');

    const res = await fetch(DOCTOR_PATIENTS_FN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ action, payload })
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(body.error || `Erro ${res.status}`);
    return body;
}

function showDoctorPatientsFeedback(message, isError = false) {
    const box = document.getElementById('doctor-patients-feedback');
    if (!box) return;
    box.textContent = message;
    box.classList.toggle('error', isError);
    box.style.display = 'block';
    setTimeout(() => { box.style.display = 'none'; }, 5000);
}

// Cache leve pra rotular o botão de avisar por e-mail nos cards de
// exercícios escopados a paciente (evita uma consulta extra só pro nome).
let doctorPatientsCache = [];

async function loadDoctorPatients() {
    const tbody = document.getElementById('doctor-patients-tbody');
    if (!tbody || !isDoctor) return;
    tbody.innerHTML = '<tr><td colspan="6">Carregando...</td></tr>';

    try {
        const { patients } = await callDoctorPatientsFn('list');
        doctorPatientsCache = patients || [];
        tbody.innerHTML = '';
        if (!patients || !patients.length) {
            tbody.innerHTML = '<tr><td colspan="6">Nenhum paciente cadastrado ainda.</td></tr>';
            return;
        }

        patients.forEach(p => {
            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            tdName.textContent = p.name || '-';

            const tdEmail = document.createElement('td');
            tdEmail.textContent = p.email || '-';

            const tdStatus = document.createElement('td');
            tdStatus.textContent = p.active ? 'Ativo' : 'Desativado';

            const tdCreated = document.createElement('td');
            tdCreated.textContent = formatAdminDate(p.createdAt);

            const tdLastSignIn = document.createElement('td');
            tdLastSignIn.textContent = p.lastSignInAt ? formatAdminDate(p.lastSignInAt) : 'Nunca';

            const tdActions = document.createElement('td');
            tdActions.className = 'admin-actions-cell';

            const btnPassword = document.createElement('button');
            btnPassword.innerHTML = '<i class="fas fa-key" aria-hidden="true"></i>';
            btnPassword.title = 'Redefinir senha';
            btnPassword.className = 'admin-edit-password-btn';
            btnPassword.addEventListener('click', async () => {
                const newPassword = prompt(`Nova senha para ${p.email}:`);
                if (!newPassword) return;
                try {
                    await callDoctorPatientsFn('setPassword', { patientId: p.id, userId: p.userId, password: newPassword });
                    showDoctorPatientsFeedback('Senha atualizada.');
                } catch (err) {
                    showDoctorPatientsFeedback(err.message, true);
                }
            });

            const btnToggleActive = document.createElement('button');
            btnToggleActive.innerHTML = p.active
                ? '<i class="fas fa-user-slash" aria-hidden="true"></i>'
                : '<i class="fas fa-user-check" aria-hidden="true"></i>';
            btnToggleActive.title = p.active ? 'Desativar paciente' : 'Reativar paciente';
            btnToggleActive.className = p.active ? 'admin-delete-user-btn' : 'admin-edit-password-btn';
            btnToggleActive.addEventListener('click', async () => {
                const confirmMsg = p.active
                    ? `Desativar ${p.name || p.email}? Ele não poderá mais entrar, mas os dados continuam salvos.`
                    : `Reativar ${p.name || p.email}?`;
                if (!confirm(confirmMsg)) return;
                try {
                    await callDoctorPatientsFn('setActive', { patientId: p.id, userId: p.userId, active: !p.active });
                    showDoctorPatientsFeedback(p.active ? 'Paciente desativado.' : 'Paciente reativado.');
                    loadDoctorPatients();
                } catch (err) {
                    showDoctorPatientsFeedback(err.message, true);
                }
            });

            const btnModules = document.createElement('button');
            btnModules.innerHTML = '<i class="fas fa-sliders" aria-hidden="true"></i>';
            btnModules.title = 'Módulos liberados para este paciente';
            btnModules.className = 'admin-edit-password-btn';
            btnModules.addEventListener('click', () => openPatientModulesModal(p));

            const btnExercises = document.createElement('button');
            btnExercises.innerHTML = '<i class="fas fa-dumbbell" aria-hidden="true"></i>';
            btnExercises.title = 'Exercícios liberados para este paciente';
            btnExercises.className = 'admin-edit-password-btn';
            btnExercises.addEventListener('click', () => openPatientExercisesModal(p));

            const btnViewExercises = document.createElement('button');
            btnViewExercises.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i>';
            btnViewExercises.title = 'Ver exercícios deste paciente';
            btnViewExercises.className = 'admin-edit-password-btn';
            btnViewExercises.addEventListener('click', () => enterPatientContext(p, 'view-exercises'));

            const btnTopics = document.createElement('button');
            btnTopics.innerHTML = '<i class="fas fa-list" aria-hidden="true"></i>';
            btnTopics.title = 'Tópicos liberados para este paciente';
            btnTopics.className = 'admin-edit-password-btn';
            btnTopics.addEventListener('click', () => openPatientTopicsModal(p));

            const btnVirtues = document.createElement('button');
            btnVirtues.innerHTML = '<i class="fas fa-star" aria-hidden="true"></i>';
            btnVirtues.title = 'Fomes e Forças liberadas para este paciente';
            btnVirtues.className = 'admin-edit-password-btn';
            btnVirtues.addEventListener('click', () => openPatientVirtuesModal(p));

            const btnCarometro = document.createElement('button');
            btnCarometro.innerHTML = '<i class="fas fa-id-card" aria-hidden="true"></i>';
            btnCarometro.title = 'Carômetro deste paciente';
            btnCarometro.className = 'admin-edit-password-btn';
            btnCarometro.addEventListener('click', () => enterPatientContext(p, 'view-carometro'));

            const btnCarometroGlobal = document.createElement('button');
            btnCarometroGlobal.innerHTML = '<i class="fas fa-users-rectangle" aria-hidden="true"></i>';
            btnCarometroGlobal.title = 'Setores globais de Carômetro liberados para este paciente';
            btnCarometroGlobal.className = 'admin-edit-password-btn';
            btnCarometroGlobal.addEventListener('click', () => openPatientCarometroModal(p));

            const btnBooks = document.createElement('button');
            btnBooks.innerHTML = '<i class="fas fa-book" aria-hidden="true"></i>';
            btnBooks.title = 'Livros deste paciente';
            btnBooks.className = 'admin-edit-password-btn';
            btnBooks.addEventListener('click', () => enterPatientContext(p, 'view-books'));

            const btnReleaseBooks = document.createElement('button');
            btnReleaseBooks.innerHTML = '<i class="fas fa-book-open" aria-hidden="true"></i>';
            btnReleaseBooks.title = 'Liberar livros para este paciente';
            btnReleaseBooks.className = 'admin-edit-password-btn';
            btnReleaseBooks.addEventListener('click', () => openPatientBooksModal(p));

            // Fase 19: mesmo padrão de Exercícios/Tópicos/Virtudes — mostra a
            // lista do banco do médico pra liberar por paciente, em vez de
            // "entrar" no paciente pra fazer upload direto (fluxo antigo da
            // Fase 6, agora substituído por "banco + liberar depois").
            const btnMedias = document.createElement('button');
            btnMedias.innerHTML = '<i class="fas fa-play-circle" aria-hidden="true"></i>';
            btnMedias.title = 'Mídias liberadas para este paciente';
            btnMedias.className = 'admin-edit-password-btn';
            btnMedias.addEventListener('click', () => openPatientMediasModal(p));

            const btnViewMedias = document.createElement('button');
            btnViewMedias.innerHTML = '<i class="fas fa-eye" aria-hidden="true"></i>';
            btnViewMedias.title = 'Ver mídias deste paciente';
            btnViewMedias.className = 'admin-edit-password-btn';
            btnViewMedias.addEventListener('click', () => enterPatientContext(p, 'view-media'));

            tdActions.append(btnPassword, btnModules, btnExercises, btnViewExercises, btnTopics, btnVirtues, btnCarometro, btnCarometroGlobal, btnBooks, btnReleaseBooks, btnMedias, btnViewMedias, btnToggleActive);
            tr.append(tdName, tdEmail, tdStatus, tdCreated, tdLastSignIn, tdActions);
            tbody.appendChild(tr);
        });
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="6">Erro ao carregar pacientes: ${err.message}</td></tr>`;
    }
}

const newPatientModal = document.getElementById('new-patient-modal');
const newPatientForm = document.getElementById('new-patient-form');
const newPatientError = document.getElementById('new-patient-error');

const patientModulesModal = document.getElementById('patient-modules-modal');

async function openPatientModulesModal(patient) {
    document.getElementById('patient-modules-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-modules-list');
    list.innerHTML = 'Carregando...';
    if (patientModulesModal) patientModulesModal.style.display = 'flex';

    const globalFlags = await loadModuleFlags();
    const { data: overrides } = await supabaseClient
        .from('patient_module_flags').select('module_id, visible').eq('patient_id', patient.id);
    const overrideMap = new Map((overrides || []).map(r => [r.module_id, r.visible]));

    list.innerHTML = '';
    ALL_MODULES.forEach(mod => {
        // Módulo desligado pelo admin é master switch: o médico não pode
        // reativar por paciente. Paciente começa zerado: sem liberação
        // explícita aqui, o módulo fica oculto pra ele (default mudou de
        // "visível" pra "oculto" — ver applyModuleVisibility).
        const globallyDisabled = globalFlags[mod.id] === false;
        const isVisible = globallyDisabled ? false : overrideMap.get(mod.id) === true;

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;' + (globallyDisabled ? ' opacity:0.5;' : '');

        const label = document.createElement('span');
        label.textContent = mod.name + (globallyDisabled ? ' (desativado pelo admin)' : '');

        const toggleWrap = document.createElement('div');
        toggleWrap.style.cssText = 'position:relative; width:32px; height:18px;';

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.style.cssText = 'position:absolute; top:0; left:0;';
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.setAttribute('aria-label', `Liberar ${mod.name} para ${patient.name || patient.email}`);
        toggleBtn.disabled = globallyDisabled;
        if (globallyDisabled) toggleBtn.title = 'Desativado pelo admin para todos os pacientes';
        toggleBtn.addEventListener('click', async () => {
            if (globallyDisabled) return;
            const newVisible = !isVisible;
            try {
                await supabaseClient.from('patient_module_flags')
                    .upsert({ patient_id: patient.id, module_id: mod.id, visible: newVisible, updated_at: new Date().toISOString() });
                openPatientModulesModal(patient); // recarrega a lista com o novo estado
            } catch (err) {
                showDoctorPatientsFeedback('Erro ao salvar módulo: ' + err.message, true);
            }
        });

        toggleWrap.appendChild(toggleBtn);
        row.append(label, toggleWrap);
        list.appendChild(row);
    });
}

document.getElementById('btn-close-patient-modules')?.addEventListener('click', () => {
    if (patientModulesModal) patientModulesModal.style.display = 'none';
});

// Exercícios liberados por paciente (Fase 7) — mesmo padrão de
// openPatientModulesModal, mas a lista vem do banco de exercícios do
// próprio médico (exercises.doctor_user_id), não de uma lista fixa.
const patientExercisesModal = document.getElementById('patient-exercises-modal');

async function openPatientExercisesModal(patient) {
    document.getElementById('patient-exercises-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-exercises-list');
    list.innerHTML = 'Carregando...';
    if (patientExercisesModal) patientExercisesModal.style.display = 'flex';

    // Inclui o próprio banco do médico E o conteúdo global do admin (Fase
    // 21: conteúdo global deixou de ser automático pro paciente — o médico
    // precisa liberar também, mesma lista/mecanismo do banco próprio).
    const { data: myExercises } = await supabaseClient
        .from('exercises').select('id, title, seed_key, doctor_user_id')
        .or(doctorBankOrFilter())
        .order('title');
    const { data: overrides } = await supabaseClient
        .from('patient_exercise_flags').select('exercise_id, visible').eq('patient_id', patient.id);
    const overrideMap = new Map((overrides || []).map(r => [r.exercise_id, r.visible]));

    // Complete a Frase só vira linha de verdade em `exercises` quando o
    // médico cadastra a primeira pergunta nele — sem isso não tinha nada
    // pra liberar e a atividade nem aparecia aqui. Preenche com uma entrada
    // "virtual" (sem id ainda), criando o container vazio só quando o
    // médico liberar. Reconhecimento de Palavras/Imagem saíram daqui (Fase
    // 24): agora são vários decks reais, criados explicitamente, já
    // aparecem em myExercises normalmente.
    const activityPlaceholders = [
        { baseSeedKey: COMPLETE_FRASE_SEED_KEY, title: COMPLETE_FRASE_TITLE },
    ];
    // Container já pode existir como global (admin cadastrou direto) OU como
    // banco do próprio médico — nos dois casos já tem uma linha de verdade
    // na lista, não precisa do placeholder virtual (evita duplicar a mesma
    // atividade duas vezes no modal).
    const existingSeedKeys = new Set((myExercises || []).map(ex => ex.seedKey || ex.seed_key));
    const virtualEntries = activityPlaceholders
        .filter(p => !existingSeedKeys.has(p.baseSeedKey) && !existingSeedKeys.has(doctorScopedSeedKey(p.baseSeedKey, currentUserId)))
        .map(p => ({ id: null, title: p.title, doctor_user_id: currentUserId, baseSeedKey: p.baseSeedKey }));

    const allEntries = [...(myExercises || []), ...virtualEntries];

    list.innerHTML = '';
    if (!allEntries.length) {
        list.innerHTML = '<p class="media-hint">Nenhum exercício disponível pra liberar ainda. Crie em "Exercícios" na barra lateral, ou peça pro admin publicar algo global.</p>';
        return;
    }

    allEntries.forEach(ex => {
        const isGlobal = !ex.doctor_user_id;
        const displayTitle = (ex.title || '').split('|')[0] + (isGlobal ? ' (do admin)' : '');
        const isVisible = ex.id !== null && overrideMap.has(ex.id) ? overrideMap.get(ex.id) : false; // opt-in: começa desligado

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';

        const label = document.createElement('span');
        label.textContent = displayTitle;

        const toggleWrap = document.createElement('div');
        toggleWrap.style.cssText = 'position:relative; width:32px; height:18px;';

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.style.cssText = 'position:absolute; top:0; left:0;';
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.setAttribute('aria-label', `Liberar ${displayTitle} para ${patient.name || patient.email}`);
        toggleBtn.addEventListener('click', async () => {
            const newVisible = !isVisible;
            try {
                let exerciseId = ex.id;
                if (exerciseId === null) {
                    // Primeira liberação desta atividade: cria o container
                    // vazio do médico agora (mesmo get-or-create que
                    // startNamingGame/startAfasiaGame/complete-frase usam).
                    const container = await getOrCreateGameContainer(
                        doctorScopedSeedKey(ex.baseSeedKey, currentUserId), ex.title, currentUserId
                    );
                    if (!container) throw new Error('Não consegui criar o container do exercício.');
                    exerciseId = container.id;
                }
                await supabaseClient.from('patient_exercise_flags')
                    .upsert({ patient_id: patient.id, exercise_id: exerciseId, visible: newVisible, updated_at: new Date().toISOString() });
                openPatientExercisesModal(patient); // recarrega com o novo estado
            } catch (err) {
                showDoctorPatientsFeedback('Erro ao liberar exercício: ' + err.message, true);
            }
        });

        toggleWrap.appendChild(toggleBtn);
        row.append(label, toggleWrap);
        list.appendChild(row);
    });
}

// Tópicos liberados por paciente (Fase 17) — cópia quase literal de
// openPatientExercisesModal, trocando exercises/patient_exercise_flags por
// topics/patient_topic_flags.
const patientTopicsModal = document.getElementById('patient-topics-modal');

async function openPatientTopicsModal(patient) {
    document.getElementById('patient-topics-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-topics-list');
    list.innerHTML = 'Carregando...';
    if (patientTopicsModal) patientTopicsModal.style.display = 'flex';

    // Inclui o banco do médico E o conteúdo global do admin (Fase 22, mesmo
    // conceito da Fase 21 aplicado a Tópicos).
    const { data: myTopics } = await supabaseClient
        .from('topics').select('id, folder, doctor_user_id')
        .or(doctorBankOrFilter())
        .order('folder');
    const { data: overrides } = await supabaseClient
        .from('patient_topic_flags').select('topic_id, visible').eq('patient_id', patient.id);
    const overrideMap = new Map((overrides || []).map(r => [r.topic_id, r.visible]));

    list.innerHTML = '';
    if (!myTopics || !myTopics.length) {
        list.innerHTML = '<p class="media-hint">Nenhuma pasta de Tópicos disponível pra liberar ainda. Crie em "Tópicos" na barra lateral, ou peça pro admin publicar algo global.</p>';
        return;
    }

    myTopics.forEach(topic => {
        const isVisible = overrideMap.has(topic.id) ? overrideMap.get(topic.id) : false; // opt-in: começa desligado
        const topicLabel = topic.folder + (topic.doctor_user_id ? '' : ' (do admin)');

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';

        const label = document.createElement('span');
        label.textContent = topicLabel;

        const toggleWrap = document.createElement('div');
        toggleWrap.style.cssText = 'position:relative; width:32px; height:18px;';

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.style.cssText = 'position:absolute; top:0; left:0;';
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.setAttribute('aria-label', `Liberar ${topicLabel} para ${patient.name || patient.email}`);
        toggleBtn.addEventListener('click', async () => {
            const newVisible = !isVisible;
            try {
                await supabaseClient.from('patient_topic_flags')
                    .upsert({ patient_id: patient.id, topic_id: topic.id, visible: newVisible, updated_at: new Date().toISOString() });
                openPatientTopicsModal(patient); // recarrega com o novo estado
            } catch (err) {
                showDoctorPatientsFeedback('Erro ao liberar tópico: ' + err.message, true);
            }
        });

        toggleWrap.appendChild(toggleBtn);
        row.append(label, toggleWrap);
        list.appendChild(row);
    });
}

document.getElementById('btn-close-patient-topics')?.addEventListener('click', () => {
    if (patientTopicsModal) patientTopicsModal.style.display = 'none';
});

// Virtudes/Fomes e Forças liberadas por paciente (Fase 18) — mesma cópia.
const patientVirtuesModal = document.getElementById('patient-virtues-modal');

async function openPatientVirtuesModal(patient) {
    document.getElementById('patient-virtues-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-virtues-list');
    list.innerHTML = 'Carregando...';
    if (patientVirtuesModal) patientVirtuesModal.style.display = 'flex';

    // Inclui o banco do médico E o conteúdo global do admin (Fase 22, mesmo
    // conceito da Fase 21 aplicado a Virtudes).
    const { data: myVirtues } = await supabaseClient
        .from('virtues').select('id, folder, doctor_user_id')
        .or(doctorBankOrFilter())
        .order('folder');
    const { data: overrides } = await supabaseClient
        .from('patient_virtue_flags').select('virtue_id, visible').eq('patient_id', patient.id);
    const overrideMap = new Map((overrides || []).map(r => [r.virtue_id, r.visible]));

    list.innerHTML = '';
    if (!myVirtues || !myVirtues.length) {
        list.innerHTML = '<p class="media-hint">Nenhuma categoria de Fomes e Forças disponível pra liberar ainda. Crie em "Virtudes" na barra lateral, ou peça pro admin publicar algo global.</p>';
        return;
    }

    myVirtues.forEach(virtue => {
        const isVisible = overrideMap.has(virtue.id) ? overrideMap.get(virtue.id) : false;
        const virtueLabel = virtue.folder + (virtue.doctor_user_id ? '' : ' (do admin)');

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';

        const label = document.createElement('span');
        label.textContent = virtueLabel;

        const toggleWrap = document.createElement('div');
        toggleWrap.style.cssText = 'position:relative; width:32px; height:18px;';

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.style.cssText = 'position:absolute; top:0; left:0;';
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.setAttribute('aria-label', `Liberar ${virtueLabel} para ${patient.name || patient.email}`);
        toggleBtn.addEventListener('click', async () => {
            const newVisible = !isVisible;
            try {
                await supabaseClient.from('patient_virtue_flags')
                    .upsert({ patient_id: patient.id, virtue_id: virtue.id, visible: newVisible, updated_at: new Date().toISOString() });
                openPatientVirtuesModal(patient);
            } catch (err) {
                showDoctorPatientsFeedback('Erro ao liberar categoria: ' + err.message, true);
            }
        });

        toggleWrap.appendChild(toggleBtn);
        row.append(label, toggleWrap);
        list.appendChild(row);
    });
}

document.getElementById('btn-close-patient-virtues')?.addEventListener('click', () => {
    if (patientVirtuesModal) patientVirtuesModal.style.display = 'none';
});

// Mídias liberadas por paciente (Fase 19) — mesma cópia; usa
// patient_media_flags em vez de reusar medias.patient_id direto (uma
// mídia do banco pode ir pra mais de um paciente ao longo do tempo, mesmo
// motivo de patient_exercise_flags existir na Fase 7).
const patientMediasModal = document.getElementById('patient-medias-modal');

async function openPatientMediasModal(patient) {
    document.getElementById('patient-medias-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-medias-list');
    list.innerHTML = 'Carregando...';
    if (patientMediasModal) patientMediasModal.style.display = 'flex';

    // Inclui o banco do médico E o conteúdo global do admin (Fase 21).
    const { data: myMedias } = await supabaseClient
        .from('medias').select('id, title, doctor_user_id')
        .or(doctorBankOrFilter())
        .order('title');
    const { data: overrides } = await supabaseClient
        .from('patient_media_flags').select('media_id, visible').eq('patient_id', patient.id);
    const overrideMap = new Map((overrides || []).map(r => [r.media_id, r.visible]));

    list.innerHTML = '';
    if (!myMedias || !myMedias.length) {
        list.innerHTML = '<p class="media-hint">Nenhuma mídia disponível pra liberar ainda. Adicione em "Mídias" na barra lateral, ou peça pro admin publicar algo global.</p>';
        return;
    }

    myMedias.forEach(media => {
        const isGlobal = !media.doctor_user_id;
        media = { ...media, title: media.title + (isGlobal ? ' (do admin)' : '') };
        const isVisible = overrideMap.has(media.id) ? overrideMap.get(media.id) : false;

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';

        const label = document.createElement('span');
        label.textContent = media.title;

        const toggleWrap = document.createElement('div');
        toggleWrap.style.cssText = 'position:relative; width:32px; height:18px;';

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.style.cssText = 'position:absolute; top:0; left:0;';
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.setAttribute('aria-label', `Liberar ${media.title} para ${patient.name || patient.email}`);
        toggleBtn.addEventListener('click', async () => {
            const newVisible = !isVisible;
            try {
                await supabaseClient.from('patient_media_flags')
                    .upsert({ patient_id: patient.id, media_id: media.id, visible: newVisible, updated_at: new Date().toISOString() });
                openPatientMediasModal(patient);
            } catch (err) {
                showDoctorPatientsFeedback('Erro ao liberar mídia: ' + err.message, true);
            }
        });

        toggleWrap.appendChild(toggleBtn);
        row.append(label, toggleWrap);
        list.appendChild(row);
    });
}

document.getElementById('btn-close-patient-medias')?.addEventListener('click', () => {
    if (patientMediasModal) patientMediasModal.style.display = 'none';
});

// Livros liberados por paciente — diferente dos outros 3 (mídias/tópicos/
// virtudes, que mostram o banco inteiro com toggle ligado/desligado): aqui
// a lista principal só mostra o que JÁ está liberado (com botão de
// remover), e tem um seletor separado pra adicionar um novo — pedido
// explícito pra Livros, achado confuso ver tudo com toggle desligado
// misturado. Usa patient_book_flags (books.id é uuid, diferente do bigint
// de medias).
const patientBooksModal = document.getElementById('patient-books-modal');
let patientBooksModalPatient = null;

async function openPatientBooksModal(patient) {
    patientBooksModalPatient = patient;
    document.getElementById('patient-books-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-books-list');
    const addSelect = document.getElementById('patient-books-add-select');
    list.innerHTML = 'Carregando...';
    addSelect.innerHTML = '';
    if (patientBooksModal) patientBooksModal.style.display = 'flex';

    // Inclui o banco do médico E o conteúdo global do admin.
    const { data: myBooks } = await supabaseClient
        .from('books').select('id, title, doctor_user_id')
        .or(doctorBankOrFilter())
        .order('title');
    const { data: overrides } = await supabaseClient
        .from('patient_book_flags').select('book_id, visible').eq('patient_id', patient.id);
    const releasedIds = new Set((overrides || []).filter(r => r.visible).map(r => r.book_id));

    const allBooks = myBooks || [];
    const releasedBooks = allBooks.filter(b => releasedIds.has(b.id));
    const availableBooks = allBooks.filter(b => !releasedIds.has(b.id));

    list.innerHTML = '';
    if (!releasedBooks.length) {
        list.innerHTML = '<p class="media-hint">Nenhum livro liberado pra esse paciente ainda.</p>';
    } else {
        releasedBooks.forEach(book => {
            const isGlobal = !book.doctor_user_id;
            const title = book.title + (isGlobal ? ' (do admin)' : '');

            const row = document.createElement('div');
            row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';

            const label = document.createElement('span');
            label.textContent = title;

            const removeBtn = document.createElement('button');
            removeBtn.type = 'button';
            removeBtn.className = 'btn-secondary';
            removeBtn.style.cssText = 'padding:4px 10px;';
            removeBtn.textContent = 'Remover';
            removeBtn.setAttribute('aria-label', `Remover ${title} de ${patient.name || patient.email}`);
            removeBtn.addEventListener('click', async () => {
                try {
                    await supabaseClient.from('patient_book_flags')
                        .upsert({ patient_id: patient.id, book_id: book.id, visible: false, updated_at: new Date().toISOString() });
                    openPatientBooksModal(patient);
                } catch (err) {
                    showDoctorPatientsFeedback('Erro ao remover livro: ' + err.message, true);
                }
            });

            row.append(label, removeBtn);
            list.appendChild(row);
        });
    }

    if (!availableBooks.length) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = 'Nenhum livro disponível pra adicionar';
        addSelect.appendChild(opt);
        addSelect.disabled = true;
    } else {
        addSelect.disabled = false;
        const placeholder = document.createElement('option');
        placeholder.value = '';
        placeholder.textContent = 'Selecione um livro...';
        addSelect.appendChild(placeholder);
        availableBooks.forEach(book => {
            const isGlobal = !book.doctor_user_id;
            const opt = document.createElement('option');
            opt.value = book.id;
            opt.textContent = book.title + (isGlobal ? ' (do admin)' : '');
            addSelect.appendChild(opt);
        });
    }
}

document.getElementById('patient-books-add-btn')?.addEventListener('click', async () => {
    const addSelect = document.getElementById('patient-books-add-select');
    const bookId = addSelect?.value;
    if (!bookId || !patientBooksModalPatient) return;
    try {
        await supabaseClient.from('patient_book_flags')
            .upsert({ patient_id: patientBooksModalPatient.id, book_id: bookId, visible: true, updated_at: new Date().toISOString() });
        openPatientBooksModal(patientBooksModalPatient);
    } catch (err) {
        showDoctorPatientsFeedback('Erro ao liberar livro: ' + err.message, true);
    }
});

document.getElementById('btn-close-patient-books')?.addEventListener('click', () => {
    if (patientBooksModal) patientBooksModal.style.display = 'none';
});

// Setores globais de Carômetro liberados por paciente — diferente de
// exercises/topics/virtues/medias, Carômetro não tem "banco do médico"
// (cada setor já nasce direto pra um paciente, via enterPatientContext);
// só os setores GLOBAIS do admin (patient_id nulo) precisam desse toggle.
const patientCarometroModal = document.getElementById('patient-carometro-modal');

async function openPatientCarometroModal(patient) {
    document.getElementById('patient-carometro-subtitle').textContent = patient.name || patient.email;
    const list = document.getElementById('patient-carometro-list');
    list.innerHTML = 'Carregando...';
    if (patientCarometroModal) patientCarometroModal.style.display = 'flex';

    const { data: globalSectors } = await supabaseClient
        .from('carometro_sectors').select('id, title_html').is('patient_id', null).order('title_html');
    const { data: overrides } = await supabaseClient
        .from('patient_carometro_flags').select('sector_id, visible').eq('patient_id', patient.id);
    const overrideMap = new Map((overrides || []).map(r => [r.sector_id, r.visible]));

    list.innerHTML = '';
    if (!globalSectors || !globalSectors.length) {
        list.innerHTML = '<p class="media-hint">Nenhum setor global de Carômetro disponível pra liberar ainda.</p>';
        return;
    }

    globalSectors.forEach(sector => {
        const isVisible = overrideMap.has(sector.id) ? overrideMap.get(sector.id) : false;
        const label = document.createElement('span');
        label.innerHTML = sector.title_html;

        const row = document.createElement('div');
        row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 14px; background:#f5f5f5; border-radius:8px;';

        const toggleWrap = document.createElement('div');
        toggleWrap.style.cssText = 'position:relative; width:32px; height:18px;';

        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'visibility-toggle-btn ' + (isVisible ? 'is-visible' : 'is-hidden');
        toggleBtn.style.cssText = 'position:absolute; top:0; left:0;';
        toggleBtn.setAttribute('role', 'switch');
        toggleBtn.setAttribute('aria-checked', String(isVisible));
        toggleBtn.setAttribute('aria-label', `Liberar setor de Carômetro para ${patient.name || patient.email}`);
        toggleBtn.addEventListener('click', async () => {
            const newVisible = !isVisible;
            try {
                await supabaseClient.from('patient_carometro_flags')
                    .upsert({ patient_id: patient.id, sector_id: sector.id, visible: newVisible, updated_at: new Date().toISOString() });
                openPatientCarometroModal(patient);
            } catch (err) {
                showDoctorPatientsFeedback('Erro ao liberar setor: ' + err.message, true);
            }
        });

        toggleWrap.appendChild(toggleBtn);
        row.append(label, toggleWrap);
        list.appendChild(row);
    });
}

document.getElementById('btn-close-patient-carometro')?.addEventListener('click', () => {
    if (patientCarometroModal) patientCarometroModal.style.display = 'none';
});

document.getElementById('btn-close-patient-exercises')?.addEventListener('click', () => {
    if (patientExercisesModal) patientExercisesModal.style.display = 'none';
});

// Monta a URL do iframe de Livros: propaga ?sb=staging (senão o iframe
// sempre falaria com produção, mesmo testando o resto do app no staging) e,
// quando o médico está "dentro" de um paciente, ?patientId/&patientName
// (book-reader.js usa isso pra filtrar a biblioteca e escopar os uploads).
function buildBooksFrameUrl() {
    const params = new URLSearchParams({ embedded: '1' });
    if (typeof useStagingSupabase !== 'undefined' && useStagingSupabase) params.set('sb', 'staging');
    if (isDoctor && activePatientContext) {
        params.set('patientId', activePatientContext.id);
        params.set('patientName', activePatientContext.name);
    }
    return 'book-reader.html?' + params.toString();
}

// Mesmo motivo do buildBooksFrameUrl: sem propagar ?sb=staging, o iframe de
// Complete a Frase sempre falaria com produção, mesmo testando o resto do
// app em staging — o que quebraria o guard de sessão da Fase 8 (a checagem
// de auth.getSession() do iframe bateria no projeto errado).
function buildCompleteSentenceFrameUrl() {
    const params = new URLSearchParams({ embedded: '1' });
    if (typeof useStagingSupabase !== 'undefined' && useStagingSupabase) params.set('sb', 'staging');
    return 'complete-frase.html?' + params.toString();
}

function refreshCompleteSentenceFrameSrc() {
    const frame = document.getElementById('complete-sentence-frame');
    if (!frame) return;
    const desiredSrc = new URL(buildCompleteSentenceFrameUrl(), window.location.href).href;
    if (frame.src !== desiredSrc) frame.src = desiredSrc;
}

function refreshBooksFrameSrc() {
    const booksFrame = document.getElementById('books-frame');
    if (!booksFrame) return;
    const desiredSrc = new URL(buildBooksFrameUrl(), window.location.href).href;
    // Só recarrega se o alvo realmente mudou (entrar/sair de contexto de
    // paciente) — evita perder o estado da biblioteca a cada troca de aba.
    if (booksFrame.src !== desiredSrc) booksFrame.src = desiredSrc;
}

// "Entra" no paciente pra editar Carômetro/Livros/Mídias dele (Fases 5c/6b/6c).
// Exercícios NÃO usa mais esse mecanismo (Fase 7): o médico cria no próprio
// banco e libera por paciente via openPatientExercisesModal, sem precisar
// "entrar" em ninguém primeiro.
// targetView: 'view-carometro', 'view-books' ou 'view-media'.
function enterPatientContext(patient, targetView) {
    activePatientContext = { id: patient.id, name: patient.name || patient.email };
    updatePatientContextBanners();
    updateCarometroEditButtonVisibility();
    showEditBars();
    if (targetView === 'view-carometro' && typeof reloadCarometroState === 'function') reloadCarometroState();
    if (targetView === 'view-media') loadMediaCards();
    if (targetView === 'view-exercises') loadExerciseCards();
    document.querySelector(`.nav-btn[data-view="${targetView}"]`)?.click();
    if (targetView === 'view-books') refreshBooksFrameSrc();
}

function exitPatientContext() {
    activePatientContext = null;
    updatePatientContextBanners();
    updateCarometroEditButtonVisibility();
    showEditBars();
    loadMediaCards();
    loadExerciseCards();
    if (typeof reloadCarometroState === 'function') reloadCarometroState();
    if (document.querySelector('.nav-btn[data-view="view-books"]')?.classList.contains('active')) refreshBooksFrameSrc();
}

function updateCarometroEditButtonVisibility() {
    const btnEditCarometro = document.getElementById('btn-edit-carometro');
    if (btnEditCarometro) {
        btnEditCarometro.style.display = (isAdmin || (isDoctor && activePatientContext)) ? '' : 'none';
    }
}

function updatePatientContextBanners() {
    const label = activePatientContext ? `Editando conteúdo de: ${activePatientContext.name}` : '';
    const show = Boolean(isDoctor && activePatientContext);

    const caBanner = document.getElementById('patient-context-banner-carometro');
    const caText = document.getElementById('patient-context-banner-carometro-text');
    if (caBanner && caText) {
        caText.textContent = label;
        caBanner.style.display = show ? 'flex' : 'none';
    }

    const meBanner = document.getElementById('patient-context-banner-media');
    const meText = document.getElementById('patient-context-banner-media-text');
    if (meBanner && meText) {
        meText.textContent = `Editando mídias de: ${activePatientContext?.name || ''}`;
        meBanner.style.display = show ? 'flex' : 'none';
    }

    const exBanner = document.getElementById('patient-context-banner-exercises');
    const exText = document.getElementById('patient-context-banner-exercises-text');
    if (exBanner && exText) {
        exText.textContent = `Vendo exercícios de: ${activePatientContext?.name || ''}`;
        exBanner.style.display = show ? 'flex' : 'none';
    }

    const boBanner = document.getElementById('patient-context-banner-books');
    const boText = document.getElementById('patient-context-banner-books-text');
    if (boBanner && boText) {
        boText.textContent = `Vendo livros de: ${activePatientContext?.name || ''}`;
        boBanner.style.display = show ? 'flex' : 'none';
    }
}

document.getElementById('btn-clear-patient-context-carometro')?.addEventListener('click', exitPatientContext);
document.getElementById('btn-clear-patient-context-media')?.addEventListener('click', exitPatientContext);
document.getElementById('btn-clear-patient-context-exercises')?.addEventListener('click', exitPatientContext);
document.getElementById('btn-clear-patient-context-books')?.addEventListener('click', exitPatientContext);

document.getElementById('btn-open-new-patient')?.addEventListener('click', () => {
    newPatientForm?.reset();
    if (newPatientError) newPatientError.style.display = 'none';
    if (newPatientModal) newPatientModal.style.display = 'flex';
});

function closeNewPatientModal() {
    if (newPatientModal) newPatientModal.style.display = 'none';
}
document.getElementById('btn-close-new-patient')?.addEventListener('click', closeNewPatientModal);
document.getElementById('btn-cancel-new-patient')?.addEventListener('click', closeNewPatientModal);

newPatientForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('new-patient-email').value.trim();
    const name = document.getElementById('new-patient-name').value.trim();
    const password = document.getElementById('new-patient-password').value;
    const submitBtn = document.getElementById('btn-submit-new-patient');

    if (newPatientError) newPatientError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Criando...';

    try {
        await callDoctorPatientsFn('create', { email, password, name });
        closeNewPatientModal();
        showDoctorPatientsFeedback(`Paciente ${email} criado.`);
        loadDoctorPatients();
    } catch (err) {
        if (newPatientError) {
            newPatientError.textContent = err.message || 'Erro ao criar paciente.';
            newPatientError.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Criar paciente';
    }
});

const newUserModal = document.getElementById('new-user-modal');
const newUserForm = document.getElementById('new-user-form');
const newUserError = document.getElementById('new-user-error');

document.getElementById('btn-open-new-user')?.addEventListener('click', () => {
    newUserForm?.reset();
    if (newUserError) newUserError.style.display = 'none';
    if (newUserModal) newUserModal.style.display = 'flex';
    if (!companiesCache.length) loadCompanies(); else populateCompanySelect();
});

function closeNewUserModal() {
    if (newUserModal) newUserModal.style.display = 'none';
}
document.getElementById('btn-close-new-user')?.addEventListener('click', closeNewUserModal);
document.getElementById('btn-cancel-new-user')?.addEventListener('click', closeNewUserModal);

newUserForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('new-user-email').value.trim();
    const name = document.getElementById('new-user-name')?.value.trim();
    const password = document.getElementById('new-user-password').value;
    const role = document.getElementById('new-user-role').value;
    // Empresa não é mais exclusiva de médico — qualquer papel pode ser
    // vinculado a uma empresa (ex.: alguém que ainda vai virar paciente).
    const companyId = document.getElementById('new-user-company')?.value || undefined;
    const submitBtn = document.getElementById('btn-submit-new-user');

    if (newUserError) newUserError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Criando...';

    try {
        await callAdminUsersFn('create', { email, password, role, name, companyId });
        closeNewUserModal();
        showAdminFeedback(`Usuário ${email} criado com papel ${role}.`);
        loadAdminUsers();
    } catch (err) {
        if (newUserError) {
            newUserError.textContent = err.message || 'Erro ao criar usuário.';
            newUserError.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Criar usuário';
    }
});

const changePasswordModal = document.getElementById('change-password-modal');
const changePasswordForm = document.getElementById('change-password-form');
const changePasswordError = document.getElementById('change-password-error');
let changePasswordTargetId = null;

function openChangePasswordModal(userId, email) {
    changePasswordTargetId = userId;
    changePasswordForm?.reset();
    if (changePasswordError) changePasswordError.style.display = 'none';
    const emailLabel = document.getElementById('change-password-email');
    if (emailLabel) emailLabel.textContent = email;
    if (changePasswordModal) changePasswordModal.style.display = 'flex';
}

function closeChangePasswordModal() {
    if (changePasswordModal) changePasswordModal.style.display = 'none';
    changePasswordTargetId = null;
}
document.getElementById('btn-close-change-password')?.addEventListener('click', closeChangePasswordModal);
document.getElementById('btn-cancel-change-password')?.addEventListener('click', closeChangePasswordModal);

changePasswordForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const password = document.getElementById('change-password-input').value;
    const submitBtn = document.getElementById('btn-submit-change-password');

    if (changePasswordError) changePasswordError.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.textContent = 'Salvando...';

    try {
        await callAdminUsersFn('setPassword', { userId: changePasswordTargetId, password });
        closeChangePasswordModal();
        showAdminFeedback('Senha atualizada com sucesso.');
    } catch (err) {
        if (changePasswordError) {
            changePasswordError.textContent = err.message || 'Erro ao alterar senha.';
            changePasswordError.style.display = 'block';
        }
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Salvar senha';
    }
});

// Estado global
const editModes = { core: false, virtue: false, topic: false, memory: false, naming: false, alphabetMemory: false, afasia: false, speechNaming: false };
let cardEditorState = { section: null, cardId: null, folderRecord: null };
let currentVirtueFolders = [];
let currentOpenFolderRecord = null;
let currentTopicsFolders = [];
let currentOpenTopicFolderRecord = null;

// ---- Helpers de visibilidade de edição ----
function showEditBars() {
    ['btn-edit-core'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = isAdmin ? 'inline-block' : 'none';
    });
    // Naming/afasia/memória/alfabeto/tópicos/virtudes: médico também
    // gerencia o próprio banco (Fases 10-11, 15-18).
    ['btn-edit-naming', 'btn-edit-afasia', 'btn-edit-memory', 'btn-edit-alphabet-memory', 'btn-edit-topics', 'btn-edit-virtues', 'btn-edit-speech-naming'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) btn.style.display = (isAdmin || isDoctor) ? 'inline-block' : 'none';
    });
    document.querySelectorAll('.media-header').forEach(header => {
        // #exercises-header/#media-upload-header têm sua própria regra logo
        // abaixo (também visíveis pro médico dentro do contexto de um
        // paciente, Fases 5b/6b) — sem essa exceção, este laço reesconderia
        // os botões de "Novo Exercício"/"Adicionar Mídia" deles.
        if (header.id === 'exercises-header' || header.id === 'media-upload-header' || header.id === 'audio-upload-header') return;
        header.style.display = isAdmin ? 'flex' : 'none';
    });
    // exercises-header/media-upload-header/audio-upload-header ficam
    // liberados pro médico sempre (não só depois de entrar via "Meus
    // Pacientes") — Fase 19: sem paciente selecionado, o conteúdo vai pro
    // banco próprio do médico.
    const exercisesHeader = document.getElementById('exercises-header');
    if (exercisesHeader) exercisesHeader.style.display = (isAdmin || isDoctor) ? 'flex' : 'none';
    const mediaHeader = document.getElementById('media-upload-header');
    if (mediaHeader) mediaHeader.style.display = (isAdmin || isDoctor) ? 'flex' : 'none';
    const audioHeader = document.getElementById('audio-upload-header');
    if (audioHeader) audioHeader.style.display = (isAdmin || isDoctor) ? 'flex' : 'none';
    // Médico também gerencia o próprio container de perguntas (Fase 13);
    // notificar por e-mail é um broadcast pra TODOS os usuários do sistema,
    // continua exclusivo do admin.
    const completeSentenceManager = document.getElementById('btn-manage-complete-sentence');
    if (completeSentenceManager) completeSentenceManager.style.display = (isAdmin || isDoctor) ? 'flex' : 'none';
    const completeSentenceNotify = document.getElementById('btn-notify-complete-sentence');
    if (completeSentenceNotify) completeSentenceNotify.style.display = isAdmin ? 'inline-flex' : 'none';
}

// Mostra "Salvando..." e desabilita os botões de ação enquanto as cartas pendentes
// (ver flushMemoryDraftPairs/flushAlphabetMemoryDraftPairs/flushNamingDraftSets) sobem
// pro Supabase — sem isso o clique em "Salvar" parecia travado durante o envio.
function setGameButtonsProcessing(editBtnId, newGameBtnId, isProcessing) {
    const editBtn = document.getElementById(editBtnId);
    const newGameBtn = document.getElementById(newGameBtnId);
    if (isProcessing) {
        if (editBtn) { editBtn.disabled = true; editBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...'; }
        if (newGameBtn) newGameBtn.disabled = true;
    } else {
        if (editBtn) editBtn.disabled = false;
        if (newGameBtn) newGameBtn.disabled = false;
    }
}

function updateEditBtn(section, btnId, doneLabel = 'Concluir') {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (editModes[section]) {
        btn.classList.add('active');
        btn.innerHTML = `<i class="fas fa-check"></i> ${doneLabel}`;
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fas fa-pen"></i> Editar';
    }
}

// ---- ESSENCIAIS (Core Cards — inclui Rápidas) ----
function initCoreCardsDB() {
    db.transaction(['core_cards'], 'readonly').objectStore('core_cards').getAll().onsuccess = (e) => {
        if (e.target.result.length === 0) {
            const tx = db.transaction(['core_cards'], 'readwrite');
            const store = tx.objectStore('core_cards');
            // Semeia coreWords seguido de quickFires, mantendo estilo de cada um
            [...coreWords, ...quickFires].forEach((w, i) =>
                store.add({ ...w, imageBlob: null, audioBlob: null, order: i })
            );
            tx.oncomplete = loadCoreAndRender;
        } else {
            loadCoreAndRender();
        }
    };
}

async function loadCoreAndRender() {
    if (supabaseClient) {
        try {
            const { data, error } = await supabaseClient
                .from('core_cards')
                .select('*')
                .order('order', { ascending: true });
            if (error) throw error;
            if (data && data.length > 0) {
                const tx = db.transaction(['core_cards'], 'readwrite');
                const store = tx.objectStore('core_cards');
                store.clear().onsuccess = () => {
                    data.forEach(card => {
                        store.put({
                            id: card.id,
                            word: card.word,
                            styleClass: card.style_class,
                            img: card.img,
                            image_url: card.image_url,
                            audio_url: card.audio_url,
                            order: card.order
                        });
                    });
                };
                renderFlatGrid(data.map(d => ({ ...d, styleClass: d.style_class })), 'grid-core', 'core');
                return;
            } else if (data && data.length === 0) {
                console.log('Semeando Supabase com cards essenciais...');
                const seedData = [...coreWords, ...quickFires].map((w, i) => ({
                    word: w.word,
                    style_class: w.styleClass,
                    order: i
                }));
                const { error: seedErr } = await supabaseClient.from('core_cards').insert(seedData);
                if (!seedErr) {
                    loadCoreAndRender();
                    return;
                }
            }
        } catch (e) {
            console.warn('Erro ao conectar no Supabase (core):', e);
        }
    }

    db.transaction(['core_cards'], 'readonly').objectStore('core_cards').getAll().onsuccess = (e) => {
        renderFlatGrid(e.target.result.sort((a, b) => a.order - b.order), 'grid-core', 'core');
    };
}

// ---- GRID FLAT (Essenciais) ----
async function renderFlatGrid(cards, containerId, section) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    for (const card of cards) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${card.styleClass}`;

        if (card.audioBlob instanceof Blob || (typeof card.audio_url === 'string' && card.audio_url.trim() !== '')) {
            const ind = document.createElement('div');
            ind.className = 'audio-indicator';
            ind.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.appendChild(ind);
        }

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = card.word;

        // Pré-carrega o áudio neural apenas quando não há áudio customizado no card
        if (!(card.audioBlob instanceof Blob) && !(typeof card.audio_url === 'string' && card.audio_url.trim() !== '')) {
            prefetchTts(card.word);
        }

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        if (isAdmin && editModes[section]) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar "${card.word}"?`)) {
                    if (supabaseClient) {
                        supabaseClient.from('core_cards').delete().eq('id', card.id).then(({ error }) => {
                            if (error) alert('Erro ao deletar no Supabase: ' + error.message);
                            loadCoreAndRender();
                        });
                        return;
                    }
                    db.transaction(['core_cards'], 'readwrite').objectStore('core_cards').delete(card.id).onsuccess = () => {
                        loadCoreAndRender();
                    };
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor(section, card.id, card, null); };
            btn.appendChild(editBtn);
        }

        btn.addEventListener('click', () => {
            if (editModes[section]) return;
            if (currentTypingWord.length > 0) commitTypingWord();
            addToMessage(card.word);
            if (card.audioBlob instanceof Blob) new Audio(URL.createObjectURL(card.audioBlob)).play();
            else if (typeof card.audio_url === 'string' && card.audio_url.trim() !== '') new Audio(card.audio_url).play();
            else speak(card.word);
        });

        container.appendChild(btn);

        // Imagem
        if (card.imageBlob instanceof Blob) {
            imgEl.src = URL.createObjectURL(card.imageBlob);
        } else if (typeof card.image_url === 'string' && card.image_url.trim() !== '') {
            imgEl.src = card.image_url;
        } else {
            const wordKey = (card.word || '').toLowerCase().trim();
            const local = card.img || localForcesImages[wordKey];
            if (local) { imgEl.src = local; }
            else {
                fetchArasaacImage(card.word).then(url => {
                    if (url) imgEl.src = url;
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
                });
            }
        }
    }

    // Botão + Novo Card (admin)
    if (isAdmin && editModes[section]) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Novo Card</div>';
        addBtn.addEventListener('click', () => openCardEditor(section, null, null, null));
        container.appendChild(addBtn);
    }

    updateEditBtn(section, 'btn-edit-core');
}

// ---- TÓPICOS (Fringe) ----
let topicsSeedAttempted = false;
async function loadTopicsAndRender() {
    if (supabaseClient) {
        try {
            const { data: catData, error: catErr } = await supabaseClient.from('topics').select('*');
            if (catErr) throw catErr;

            // Catálogo genuinamente vazio no sistema todo (não "vazio porque a
            // RLS filtrou pra esse paciente sem nada liberado" — isso também
            // dá 0 linhas, sem erro, e tem que renderizar vazio, não semear).
            // Só admin/editor tem permissão de escrita em topics globais, então
            // só faz sentido tentar o bootstrap nesse caso.
            // topicsSeedAttempted trava numa tentativa só por sessão: sem isso,
            // um "admin" sem sessão real autenticada no Supabase (bypass do
            // localhost, ver isLocalAppHost) tem o insert sempre rejeitado pela
            // RLS (exige authenticated) — cada seedCatErr silencioso levava a
            // outra chamada recursiva, num loop infinito de 401 (visto em
            // produção: console tomado por "Semeando Supabase com tópicos...").
            if (catData && catData.length === 0 && isAdmin && !topicsSeedAttempted) {
                topicsSeedAttempted = true;
                console.log('Semeando Supabase com tópicos...');
                for (const t of topics) {
                    const { data: newCat, error: seedCatErr } = await supabaseClient.from('topics')
                        .insert([{ folder: t.folder, style_class: t.styleClass }]).select().single();
                    if (newCat && !seedCatErr) {
                        const itemsData = t.items.map(item => ({
                            topic_id: newCat.id, word: item.word, style_class: item.styleClass, img: item.img || null
                        }));
                        await supabaseClient.from('topic_items').insert(itemsData);
                    }
                }
                return loadTopicsAndRender();
            }

            // Resultado válido do Supabase (mesmo vazio) — renderiza direto.
            // NUNCA cai no fallback de IndexedDB abaixo nesse caso: esse cache
            // é compartilhado no mesmo navegador entre logins diferentes, e um
            // médico/admin que viu tudo antes deixaria as pastas dele vazando
            // pro próximo paciente que logar ali (esse era o bug: paciente sem
            // nada liberado via patient_topic_flags via mesmo assim via cache
            // de outra sessão).
            const itemData = catData.length > 0
                ? (await supabaseClient.from('topic_items').select('*')).data
                : [];
            const merged = catData.map(cat => {
                const items = (itemData || []).filter(item => item.topic_id === cat.id).map(item => ({
                    word: item.word, styleClass: item.style_class, img: item.img, image_url: item.image_url, audio_url: item.audio_url
                }));
                return { id: cat.id, folder: cat.folder, styleClass: cat.style_class, items, doctorUserId: cat.doctor_user_id || null, forkedFrom: cat.forked_from || null };
            });

            currentTopicsFolders = merged;
            const tx = db.transaction(['topics'], 'readwrite');
            const store = tx.objectStore('topics');
            store.clear().onsuccess = () => merged.forEach(t => store.put(t));

            const wordGrid = document.getElementById('grid-topic-words');
            if (currentOpenTopicFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
                const updated = currentTopicsFolders.find(r => r.id === currentOpenTopicFolderRecord.id);
                if (updated) { currentOpenTopicFolderRecord = updated; renderTopicsWords(updated); }
                else { currentOpenTopicFolderRecord = null; renderTopicsFolders(); }
            } else {
                renderTopicsFolders();
            }
            return;
        } catch (e) {
            console.warn('Erro ao carregar topics do Supabase:', e);
        }
    }
    // Fallback de cache local: só quando o Supabase realmente falhou/está
    // indisponível (erro de rede, sem client) — nunca quando ele respondeu
    // com sucesso, mesmo vazio (ver comentário acima).
    db.transaction(['topics'], 'readonly').objectStore('topics').getAll().onsuccess = (e) => {
        currentTopicsFolders = e.target.result;
        const wordGrid = document.getElementById('grid-topic-words');
        if (currentOpenTopicFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
            const updated = currentTopicsFolders.find(r => r.id === currentOpenTopicFolderRecord.id);
            if (updated) { currentOpenTopicFolderRecord = updated; renderTopicsWords(updated); }
        } else {
            renderTopicsFolders();
        }
    };
}

function saveTopicFolderToDB(record, callback) {
    const req = db.transaction(['topics'], 'readwrite').objectStore('topics')[record.id ? 'put' : 'add'](record);
    req.onsuccess = () => { if (callback) callback(); };
}

function deleteTopicFolderFromDB(id, callback) {
    db.transaction(['topics'], 'readwrite').objectStore('topics').delete(id).onsuccess = () => { if (callback) callback(); };
}

// Médico editando uma pasta global do admin (Fase 23 — fork on edit): acha
// (ou cria) a cópia própria dela, com os itens copiados, em vez de tentar
// escrever na linha do admin (a RLS rejeitaria). Toda escrita subsequente
// na mesma pasta reaproveita essa cópia — não duplica a cada ação.
async function getOrCreateTopicFolderFork(sourceRecord) {
    const existing = currentTopicsFolders.find(r => r.doctorUserId === currentUserId && r.forkedFrom === sourceRecord.id);
    if (existing) return existing;

    const { data: created, error } = await supabaseClient.from('topics')
        .insert([{ folder: sourceRecord.folder, style_class: sourceRecord.styleClass, doctor_user_id: currentUserId, company_id: currentUserCompanyId, forked_from: sourceRecord.id }])
        .select().single();
    if (error) throw error;

    if (sourceRecord.items && sourceRecord.items.length > 0) {
        const dbItems = sourceRecord.items.map(item => ({
            topic_id: created.id, word: item.word, style_class: item.styleClass,
            img: item.img || null, image_url: item.image_url || null, audio_url: item.audio_url || null
        }));
        await supabaseClient.from('topic_items').insert(dbItems);
    }
    return { id: created.id, folder: created.folder, styleClass: created.style_class, items: sourceRecord.items || [], doctorUserId: currentUserId, forkedFrom: sourceRecord.id };
}

let topicsFilterQuery = '';
async function renderTopicsFolders() {
    const container = document.getElementById('grid-topics-folders');
    const wordGrid = document.getElementById('grid-topic-words');
    const backBtn = document.getElementById('btn-topic-back');
    if (!container) return;
    container.innerHTML = '';
    container.style.display = 'grid';
    if (wordGrid) wordGrid.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    const filterBar = document.getElementById('topics-filter-bar');
    if (filterBar) filterBar.style.display = 'flex';
    const foldersToRender = topicsFilterQuery.trim()
        ? currentTopicsFolders.filter(record => titleMatchesQuery(record.folder, topicsFilterQuery))
        : currentTopicsFolders;

    for (const record of foldersToRender) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${record.styleClass}`;

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = record.folder;

        // Pré-carrega o áudio da pasta para o clique ser instantâneo
        prefetchTts(record.folder);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        const folderKey = record.folder.toLowerCase().trim();
        const localImgUrl = localForcesImages[folderKey];
        if (localImgUrl) {
            imgEl.src = localImgUrl;
        } else {
            fetchArasaacImage(record.folder).then(url => {
                if (url) imgEl.src = url;
                else imgCont.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
            });
        }

        // Médico só edita/apaga as próprias pastas (doctor_user_id dele) — as
        // globais aparecem como referência, sem esses botões (a RLS
        // rejeitaria a escrita mesmo se o botão aparecesse).
        const canEditTopic = isAdmin || (isDoctor && record.doctorUserId === currentUserId);
        if (canEditTopic && editModes.topic) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Tem certeza que deseja excluir a pasta "${record.folder}"?`)) {
                    if (supabaseClient && record.id) {
                        supabaseClient.from('topics').delete().eq('id', record.id)
                            .then(({ error }) => {
                                if (error) console.error(error);
                                else { deleteTopicFolderFromDB(record.id, loadTopicsAndRender); }
                            });
                    } else if (record.id) {
                        deleteTopicFolderFromDB(record.id, loadTopicsAndRender);
                    }
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Renomear');
            editBtn.onclick = (ev) => { ev.stopPropagation(); renameTopicFolder(record); };
            btn.appendChild(editBtn);

            if (isAdmin) {
                // Avisar usuários por e-mail sobre a pasta de tópicos — broadcast
                // pra todo mundo, continua exclusivo do admin.
                btn.appendChild(createNotifyUsersButton(record.folder, 'Tópico'));
            }
        } else if (isDoctor && !record.doctorUserId && editModes.topic) {
            // Pasta global do admin: médico pode renomear (cria cópia própria —
            // ver getOrCreateTopicFolderFork — o original não é alterado). Sem
            // apagar aqui: o médico não é dono da linha global.
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Renomear (cria cópia própria)');
            editBtn.title = 'Renomear cria uma cópia própria, sem afetar o original do admin';
            editBtn.onclick = (ev) => { ev.stopPropagation(); renameTopicFolder(record); };
            btn.appendChild(editBtn);
        }

        btn.onclick = () => {
            if (!editModes.topic) speak(record.folder);
            currentOpenTopicFolderRecord = record;
            renderTopicsWords(record);
        };
        container.appendChild(btn);
    }

    if ((isAdmin || isDoctor) && editModes.topic) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn add-btn';
        addBtn.innerHTML = '<i class="fas fa-plus" aria-hidden="true"></i><div class="word-btn-text">Nova Pasta</div>';
        addBtn.addEventListener('click', () => openCardEditor('topic', null, null, null));
        container.appendChild(addBtn);
    }
    updateEditBtn('topic', 'btn-edit-topics');
}

async function renameTopicFolder(record) {
    const novoNome = prompt('Novo nome da pasta:', record.folder);
    if (!novoNome || !novoNome.trim() || novoNome.trim() === record.folder) return;
    try {
        const target = (isDoctor && !record.doctorUserId) ? await getOrCreateTopicFolderFork(record) : record;
        const { error } = await supabaseClient.from('topics').update({ folder: novoNome.trim() }).eq('id', target.id);
        if (error) throw error;
        currentOpenTopicFolderRecord = null;
        await loadTopicsAndRender();
    } catch (err) {
        alert('Erro ao renomear pasta: ' + err.message);
    }
}

async function renderTopicsWords(record) {
    const folderGrid = document.getElementById('grid-topics-folders');
    const wordGrid = document.getElementById('grid-topic-words');
    const backBtn = document.getElementById('btn-topic-back');
    const topicsFilterBar = document.getElementById('topics-filter-bar');
    if (topicsFilterBar) topicsFilterBar.style.display = 'none';
    if (folderGrid) folderGrid.style.display = 'none';
    if (wordGrid) { wordGrid.style.display = 'grid'; wordGrid.innerHTML = ''; }
    if (backBtn) backBtn.style.display = 'flex';

    for (const [idx, item] of record.items.entries()) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${item.styleClass}`;

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        let blobUrl = null;
        if (item.imageBlob instanceof Blob) {
            blobUrl = URL.createObjectURL(item.imageBlob);
            imgEl.src = blobUrl;
        } else if (typeof item.image_url === 'string' && item.image_url.trim() !== '') {
            imgEl.src = item.image_url;
        } else {
            const local = item.img || localForcesImages[(item.word || '').toLowerCase().trim()];
            if (local) { imgEl.src = local; }
            else {
                fetchArasaacImage(item.word).then(url => {
                    if (url) imgEl.src = url;
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
                });
            }
        }

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        // Pré-carrega o áudio ao renderizar o item, assim o clique é instantâneo
        prefetchTts(item.word);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        const canWriteTopicWord = isAdmin || (isDoctor && (record.doctorUserId === currentUserId || !record.doctorUserId));
        if (canWriteTopicWord && editModes.topic) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (!confirm(`Excluir o item "${item.word}"?`)) return;
                try {
                    // Pasta global do admin: apagar um item aqui também cria a
                    // cópia própria primeiro (com todos os itens), depois remove
                    // o item só da cópia — o original do admin fica intacto.
                    const target = (isDoctor && !record.doctorUserId) ? await getOrCreateTopicFolderFork(record) : record;
                    if (supabaseClient && target.id) {
                        const { error } = await supabaseClient.from('topic_items').delete().eq('topic_id', target.id).eq('word', item.word);
                        if (error) throw error;
                        currentOpenTopicFolderRecord = target;
                        loadTopicsAndRender();
                    } else {
                        record.items.splice(idx, 1);
                        saveTopicFolderToDB(record, loadTopicsAndRender);
                    }
                } catch (err) {
                    alert('Erro ao excluir item: ' + err.message);
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor('topic', idx, item, record); };
            btn.appendChild(editBtn);
        }

        btn.onclick = () => {
            if (!editModes.topic) {
                if (currentTypingWord.length > 0) commitTypingWord();
                addToMessage(item.word);
                if (item.audioBlob) {
                    const audio = new Audio(URL.createObjectURL(item.audioBlob));
                    audio.play();
                } else if (item.audio_url) {
                    const audio = new Audio(item.audio_url);
                    audio.play();
                } else {
                    speak(item.word);
                }
            }
        };
        wordGrid.appendChild(btn);
    }

    if ((isAdmin || isDoctor) && editModes.topic) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn add-btn';
        addBtn.innerHTML = '<i class="fas fa-plus" aria-hidden="true"></i><div class="word-btn-text">Novo Item</div>';
        addBtn.addEventListener('click', () => openCardEditor('topic', null, null, record));
        wordGrid.appendChild(addBtn);
    }
}

// ---- FOMES E FORÇAS (Virtues) ----
let virtuesSeedAttempted = false;
async function loadVirtuesAndRender() {
    if (supabaseClient) {
        try {
            const { data: catData, error: catErr } = await supabaseClient
                .from('virtues')
                .select('*');
            if (catErr) throw catErr;

            // Mesmo raciocínio de loadTopicsAndRender: 0 linhas pode ser
            // catálogo genuinamente vazio (bootstrap, só faz sentido pra
            // admin/editor escrever) ou a RLS filtrando pra um paciente sem
            // nada liberado — nesse segundo caso é pra renderizar vazio, não
            // semear nem cair no cache local de outra sessão.
            // virtuesSeedAttempted trava numa tentativa só por sessão — mesmo
            // guard e mesmo motivo de topicsSeedAttempted em
            // loadTopicsAndRender (sem sessão autenticada de verdade, o insert
            // é sempre rejeitado pela RLS e virava loop infinito de 401).
            if (catData && catData.length === 0 && isAdmin && !virtuesSeedAttempted) {
                virtuesSeedAttempted = true;
                console.log('Semeando Supabase com categorias de fomes e forças...');
                for (const v of virtues) {
                    const { data: newCat, error: seedCatErr } = await supabaseClient
                        .from('virtues')
                        .insert([{ folder: v.folder, style_class: v.styleClass }])
                        .select()
                        .single();

                    if (newCat && !seedCatErr) {
                        const itemsData = v.items.map(item => ({
                            virtue_id: newCat.id,
                            word: item.word,
                            style_class: item.styleClass,
                            img: item.img || null
                        }));
                        await supabaseClient.from('virtue_items').insert(itemsData);
                    }
                }
                return loadVirtuesAndRender();
            }

            const itemData = catData.length > 0
                ? (await supabaseClient.from('virtue_items').select('*')).data
                : [];
            const merged = catData.map(cat => {
                const items = (itemData || [])
                    .filter(item => item.virtue_id === cat.id)
                    .map(item => ({
                        word: item.word,
                        styleClass: item.style_class,
                        img: item.img,
                        image_url: item.image_url,
                        audio_url: item.audio_url
                    }));
                return {
                    id: cat.id,
                    folder: cat.folder,
                    styleClass: cat.style_class,
                    items,
                    doctorUserId: cat.doctor_user_id || null,
                    forkedFrom: cat.forked_from || null
                };
            });

            currentVirtueFolders = merged;
            const tx = db.transaction(['virtues'], 'readwrite');
            const store = tx.objectStore('virtues');
            store.clear().onsuccess = () => {
                merged.forEach(v => store.put(v));
            };

            const wordGrid = document.getElementById('grid-virtue-words');
            if (currentOpenFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
                const updated = currentVirtueFolders.find(r => r.id === currentOpenFolderRecord.id);
                if (updated) { currentOpenFolderRecord = updated; renderVirtueWords(updated); }
                else { currentOpenFolderRecord = null; renderVirtueFolders(); }
            } else {
                renderVirtueFolders();
            }
            return;
        } catch (e) {
            console.warn('Erro ao carregar virtues do Supabase:', e);
        }
    }

    db.transaction(['virtues'], 'readonly').objectStore('virtues').getAll().onsuccess = (e) => {
        currentVirtueFolders = e.target.result;
        const wordGrid = document.getElementById('grid-virtue-words');
        if (currentOpenFolderRecord && wordGrid && wordGrid.style.display !== 'none') {
            const updated = currentVirtueFolders.find(r => r.id === currentOpenFolderRecord.id);
            if (updated) { currentOpenFolderRecord = updated; renderVirtueWords(updated); }
        } else {
            renderVirtueFolders();
        }
    };
}

function saveVirtueFolderToDB(record, callback) {
    const req = db.transaction(['virtues'], 'readwrite').objectStore('virtues')[record.id ? 'put' : 'add'](record);
    req.onsuccess = () => { if (callback) callback(); };
}

function deleteVirtueFolderFromDB(id, callback) {
    db.transaction(['virtues'], 'readwrite').objectStore('virtues').delete(id).onsuccess = () => { if (callback) callback(); };
}

// Médico editando uma categoria global do admin (Fase 23 — fork on edit):
// mesma ideia de getOrCreateTopicFolderFork, pra virtues.
async function getOrCreateVirtueFolderFork(sourceRecord) {
    const existing = currentVirtueFolders.find(r => r.doctorUserId === currentUserId && r.forkedFrom === sourceRecord.id);
    if (existing) return existing;

    const { data: created, error } = await supabaseClient.from('virtues')
        .insert([{ folder: sourceRecord.folder, style_class: sourceRecord.styleClass, doctor_user_id: currentUserId, company_id: currentUserCompanyId, forked_from: sourceRecord.id }])
        .select().single();
    if (error) throw error;

    if (sourceRecord.items && sourceRecord.items.length > 0) {
        const dbItems = sourceRecord.items.map(item => ({
            virtue_id: created.id, word: item.word, style_class: item.styleClass,
            img: item.img || null, image_url: item.image_url || null, audio_url: item.audio_url || null
        }));
        await supabaseClient.from('virtue_items').insert(dbItems);
    }
    return { id: created.id, folder: created.folder, styleClass: created.style_class, items: sourceRecord.items || [], doctorUserId: currentUserId, forkedFrom: sourceRecord.id };
}

async function renameVirtueFolder(record) {
    const novoNome = prompt('Novo nome da categoria:', record.folder);
    if (!novoNome || !novoNome.trim() || novoNome.trim() === record.folder) return;
    try {
        const target = (isDoctor && !record.doctorUserId) ? await getOrCreateVirtueFolderFork(record) : record;
        const { error } = await supabaseClient.from('virtues').update({ folder: novoNome.trim() }).eq('id', target.id);
        if (error) throw error;
        currentOpenFolderRecord = null;
        await loadVirtuesAndRender();
    } catch (err) {
        alert('Erro ao renomear categoria: ' + err.message);
    }
}

let virtuesFilterQuery = '';
async function renderVirtueFolders() {
    const container = document.getElementById('grid-virtues-folders');
    const wordGrid = document.getElementById('grid-virtue-words');
    const backBtn = document.getElementById('btn-virtue-back');
    if (!container) return;
    container.innerHTML = '';
    container.style.display = 'grid';
    if (wordGrid) wordGrid.style.display = 'none';
    if (backBtn) backBtn.style.display = 'none';

    const filterBar = document.getElementById('virtues-filter-bar');
    if (filterBar) filterBar.style.display = 'flex';
    const foldersToRender = virtuesFilterQuery.trim()
        ? currentVirtueFolders.filter(record => titleMatchesQuery(record.folder, virtuesFilterQuery))
        : currentVirtueFolders;

    for (const record of foldersToRender) {
        const btn = document.createElement('button');
        btn.className = `word-btn ${record.styleClass}`;

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = record.folder;

        // Pré-carrega o áudio da pasta para o clique ser instantâneo
        prefetchTts(record.folder);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        // Médico só edita/apaga as próprias categorias (doctor_user_id dele)
        // — as globais aparecem como referência, sem esses botões.
        const canEditVirtue = isAdmin || (isDoctor && record.doctorUserId === currentUserId);
        if (canEditVirtue && editModes.virtue) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = (ev) => {
                ev.stopPropagation();
                if (confirm(`Apagar categoria "${record.folder}"?`)) {
                    if (supabaseClient) {
                        supabaseClient.from('virtues').delete().eq('id', record.id).then(({ error }) => {
                            if (error) alert('Erro ao deletar no Supabase: ' + error.message);
                            loadVirtuesAndRender();
                        });
                        return;
                    }
                    deleteVirtueFolderFromDB(record.id, loadVirtuesAndRender);
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Renomear');
            editBtn.onclick = (ev) => { ev.stopPropagation(); renameVirtueFolder(record); };
            btn.appendChild(editBtn);

            if (isAdmin) {
                // Avisar usuários por e-mail sobre a pasta de Fomes e Forças
                // — broadcast pra todo mundo, continua exclusivo do admin.
                btn.appendChild(createNotifyUsersButton(record.folder, 'Categoria'));
            }
        } else if (isDoctor && !record.doctorUserId && editModes.virtue) {
            // Categoria global do admin: médico pode renomear (cria cópia
            // própria — o original não é alterado). Sem apagar aqui.
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Renomear (cria cópia própria)');
            editBtn.title = 'Renomear cria uma cópia própria, sem afetar o original do admin';
            editBtn.onclick = (ev) => { ev.stopPropagation(); renameVirtueFolder(record); };
            btn.appendChild(editBtn);
        }

        btn.addEventListener('click', () => {
            currentOpenFolderRecord = record;
            container.style.display = 'none';
            if (filterBar) filterBar.style.display = 'none';
            if (wordGrid) wordGrid.style.display = 'grid';
            if (backBtn) backBtn.style.display = '';
            renderVirtueWords(record);
            if (!editModes.virtue) speak(record.folder);
        });
        container.appendChild(btn);

        const folderKey = record.folder.toLowerCase().trim();
        const local = localForcesImages[folderKey];
        if (local) { imgEl.src = local; }
        else {
            fetchArasaacImage(record.folder).then(url => {
                if (url) imgEl.src = url;
                else imgCont.innerHTML = '<i class="fas fa-folder word-btn-icon" aria-hidden="true"></i>';
            });
        }
    }

    if ((isAdmin || isDoctor) && editModes.virtue) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Nova Categoria</div>';
        addBtn.addEventListener('click', () => {
            const name = prompt('Nome da nova categoria:');
            if (!name || !name.trim()) return;
            const colors = ['border-green', 'border-orange', 'border-blue', 'border-red', 'border-yellow', 'border-pink'];
            const styleClass = colors[Math.floor(Math.random() * colors.length)];
            if (supabaseClient) {
                const newVirtuePayload = { folder: name.trim(), style_class: styleClass };
                if (isDoctor) { newVirtuePayload.doctor_user_id = currentUserId; newVirtuePayload.company_id = currentUserCompanyId; }
                supabaseClient.from('virtues').insert([newVirtuePayload]).then(({ error }) => {
                    if (error) alert('Erro ao criar no Supabase: ' + error.message);
                    loadVirtuesAndRender();
                });
                return;
            }
            saveVirtueFolderToDB({ folder: name.trim(), styleClass, items: [] }, loadVirtuesAndRender);
        });
        container.appendChild(addBtn);
    }

    updateEditBtn('virtue', 'btn-edit-virtues');
}

async function renderVirtueWords(record) {
    const container = document.getElementById('grid-virtue-words');
    if (!container) return;
    container.innerHTML = '';
    const items = record.items || [];

    for (let idx = 0; idx < items.length; idx++) {
        const item = items[idx];
        const btn = document.createElement('button');
        btn.className = `word-btn ${item.styleClass}`;

        if (item.audioBlob instanceof Blob || (typeof item.audio_url === 'string' && item.audio_url.trim() !== '')) {
            const ind = document.createElement('div');
            ind.className = 'audio-indicator';
            ind.innerHTML = '<i class="fas fa-volume-up"></i>';
            btn.appendChild(ind);
        }

        const imgCont = document.createElement('div');
        imgCont.className = 'word-btn-img-container';
        const imgEl = document.createElement('img');
        imgEl.className = 'word-btn-img';
        imgEl.alt = '';
        imgCont.appendChild(imgEl);

        const textEl = document.createElement('div');
        textEl.className = 'word-btn-text';
        textEl.textContent = item.word;

        // Pré-carrega o áudio ao renderizar, para o clique ser instantâneo
        prefetchTts(item.word);

        btn.appendChild(imgCont);
        btn.appendChild(textEl);

        const canWriteVirtueWord = isAdmin || (isDoctor && (record.doctorUserId === currentUserId || !record.doctorUserId));
        if (canWriteVirtueWord && editModes.virtue) {
            const delBtn = document.createElement('button');
            delBtn.className = 'delete-media-btn';
            delBtn.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
            delBtn.setAttribute('aria-label', 'Excluir');
            delBtn.onclick = async (ev) => {
                ev.stopPropagation();
                if (!confirm(`Apagar "${item.word}"?`)) return;
                try {
                    // Categoria global do admin: apagar um item aqui cria a
                    // cópia própria primeiro, depois remove só da cópia.
                    const target = (isDoctor && !record.doctorUserId) ? await getOrCreateVirtueFolderFork(record) : record;
                    if (supabaseClient) {
                        const { error } = await supabaseClient.from('virtue_items').delete().eq('virtue_id', target.id).eq('word', item.word);
                        if (error) throw error;
                        currentOpenFolderRecord = target;
                        loadVirtuesAndRender();
                        return;
                    }
                    const updated = { ...target, items: target.items.filter((_, i) => i !== idx) };
                    currentOpenFolderRecord = updated;
                    saveVirtueFolderToDB(updated, loadVirtuesAndRender);
                } catch (err) {
                    alert('Erro ao excluir item: ' + err.message);
                }
            };
            btn.appendChild(delBtn);

            const editBtn = document.createElement('button');
            editBtn.className = 'edit-media-btn';
            editBtn.innerHTML = '<i class="fas fa-pencil-alt" aria-hidden="true"></i>';
            editBtn.setAttribute('aria-label', 'Editar');
            editBtn.onclick = (ev) => { ev.stopPropagation(); openCardEditor('virtue', idx, item, record); };
            btn.appendChild(editBtn);
        }

        btn.addEventListener('click', () => {
            if (editModes.virtue) return;
            if (currentTypingWord.length > 0) commitTypingWord();
            addToMessage(item.word);
            if (item.audioBlob instanceof Blob) new Audio(URL.createObjectURL(item.audioBlob)).play();
            else if (typeof item.audio_url === 'string' && item.audio_url.trim() !== '') new Audio(item.audio_url).play();
            else speak(item.word);
        });

        container.appendChild(btn);

        // Imagem
        if (item.imageBlob instanceof Blob) {
            imgEl.src = URL.createObjectURL(item.imageBlob);
        } else if (typeof item.image_url === 'string' && item.image_url.trim() !== '') {
            imgEl.src = item.image_url;
        } else {
            const local = item.img || localForcesImages[(item.word || '').toLowerCase().trim()];
            if (local) { imgEl.src = local; }
            else {
                fetchArasaacImage(item.word).then(url => {
                    if (url) imgEl.src = url;
                    else imgCont.innerHTML = '<i class="fas fa-comment-dots word-btn-icon" aria-hidden="true"></i>';
                });
            }
        }
    }

    if ((isAdmin || (isDoctor && (record.doctorUserId === currentUserId || !record.doctorUserId))) && editModes.virtue) {
        const addBtn = document.createElement('button');
        addBtn.className = 'word-btn border-gray';
        addBtn.innerHTML = '<div class="word-btn-img-container"><i class="fas fa-plus word-btn-icon" style="color:#888" aria-hidden="true"></i></div><div class="word-btn-text">Novo Card</div>';
        addBtn.addEventListener('click', () => openCardEditor('virtue', null, null, record));
        container.appendChild(addBtn);
    }

    updateEditBtn('virtue', 'btn-edit-virtues');
}

// ---- MODAL COMPARTILHADO DE EDIÇÃO ----
function openCardEditor(section, cardId, card, folderRecord) {
    cardEditorState = { section, cardId, folderRecord };
    document.getElementById('card-editor-modal').style.display = 'flex';

    const titles = { core: 'Card Essencial', virtue: 'Card de Fomes e Forças', topic: 'Tópico' };
    document.getElementById('card-editor-title').textContent = card ? `Editar ${titles[section]}` : `Novo ${titles[section]}`;
    document.getElementById('card-editor-word').value = card ? card.word : '';

    const defaultColor = section === 'core' ? 'solid-orange' : (folderRecord ? folderRecord.styleClass : 'border-pink');
    document.getElementById('card-editor-color').value = card ? card.styleClass : defaultColor;
    document.getElementById('card-editor-image').value = '';
    document.getElementById('card-editor-audio').value = '';

    const imgPreview = document.getElementById('card-editor-img-preview');
    if (card && card.imageBlob instanceof Blob) { imgPreview.src = URL.createObjectURL(card.imageBlob); imgPreview.style.display = 'block'; }
    else if (card && card.image_url) { imgPreview.src = card.image_url; imgPreview.style.display = 'block'; }
    else if (card && card.img) { imgPreview.src = card.img; imgPreview.style.display = 'block'; }
    else { imgPreview.style.display = 'none'; }

    const hasAudio = card && (card.audioBlob instanceof Blob || card.audio_url);
    document.getElementById('card-editor-audio-indicator').style.display = hasAudio ? 'flex' : 'none';
}

function closeCardEditor() {
    document.getElementById('card-editor-modal').style.display = 'none';
    cardEditorState = { section: null, cardId: null, folderRecord: null };
}

// ---- SETUP GERAL ----
function setupCardEditor() {
    // Ocultar botões de edição se não for admin
    showEditBars();

    // Toggle de modo edição — Essenciais
    document.getElementById('btn-edit-core').addEventListener('click', () => {
        editModes.core = !editModes.core;
        loadCoreAndRender();
    });

    // Toggle de modo edição — Fomes e Forças
    document.getElementById('btn-edit-virtues').addEventListener('click', () => {
        editModes.virtue = !editModes.virtue;
        if (currentOpenFolderRecord) renderVirtueWords(currentOpenFolderRecord);
        else renderVirtueFolders();
    });

    // Botão Voltar — Fomes e Forças
    document.getElementById('btn-virtue-back').addEventListener('click', () => {
        const wordGrid = document.getElementById('grid-virtue-words');
        const folderGrid = document.getElementById('grid-virtues-folders');
        const backBtn = document.getElementById('btn-virtue-back');
        if (wordGrid) wordGrid.style.display = 'none';
        if (folderGrid) folderGrid.style.display = 'grid';
        if (backBtn) backBtn.style.display = 'none';
        currentOpenFolderRecord = null;
        renderVirtueFolders();
    });

    // Toggle de modo edição — Tópicos
    document.getElementById('btn-edit-topics').addEventListener('click', () => {
        editModes.topic = !editModes.topic;
        if (currentOpenTopicFolderRecord) renderTopicsWords(currentOpenTopicFolderRecord);
        else renderTopicsFolders();
    });
    // Botão Voltar — Tópicos
    document.getElementById('btn-topic-back').addEventListener('click', () => {
        const wordGrid = document.getElementById('grid-topic-words');
        const folderGrid = document.getElementById('grid-topics-folders');
        const backBtn = document.getElementById('btn-topic-back');
        if (wordGrid) wordGrid.style.display = 'none';
        if (folderGrid) folderGrid.style.display = 'grid';
        if (backBtn) backBtn.style.display = 'none';
        currentOpenTopicFolderRecord = null;
        renderTopicsFolders();
    });

    // Modal compartilhado — fechar
    document.getElementById('btn-close-card-editor').addEventListener('click', closeCardEditor);
    document.getElementById('btn-cancel-card-editor').addEventListener('click', closeCardEditor);

    // Modal compartilhado — salvar
    document.getElementById('card-editor-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const word = document.getElementById('card-editor-word').value.trim();
        const styleClass = document.getElementById('card-editor-color').value;
        const imageFile = document.getElementById('card-editor-image').files[0] || null;
        const audioFile = document.getElementById('card-editor-audio').files[0] || null;
        const { section, cardId, folderRecord } = cardEditorState;

        if (section === 'core') {
            const storeKey = 'core_cards';
            const reload = loadCoreAndRender;

            if (supabaseClient) {
                try {
                    let image_url = null;
                    let audio_url = null;
                    if (cardId !== null) {
                        const { data: ex } = await supabaseClient
                            .from('core_cards')
                            .select('image_url, audio_url')
                            .eq('id', cardId)
                            .single();
                        if (ex) {
                            image_url = ex.image_url;
                            audio_url = ex.audio_url;
                        }
                    }
                    if (imageFile) {
                        image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
                    }
                    if (audioFile) {
                        audio_url = await uploadToSupabaseStorage('media_uploads', 'audios', audioFile);
                    }
                    const recordData = {
                        word,
                        style_class: styleClass,
                        image_url,
                        audio_url,
                        order: cardId !== null ? undefined : Date.now()
                    };
                    if (cardId !== null) {
                        await supabaseClient.from('core_cards').update(recordData).eq('id', cardId);
                    } else {
                        await supabaseClient.from('core_cards').insert([recordData]);
                    }
                    reload();
                    closeCardEditor();
                    return;
                } catch (err) {
                    alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                }
            }

            if (cardId !== null) {
                // Editar existente — preservar blobs não alterados
                db.transaction([storeKey], 'readonly').objectStore(storeKey).get(cardId).onsuccess = (ev) => {
                    const ex = ev.target.result || {};
                    db.transaction([storeKey], 'readwrite').objectStore(storeKey).put({
                        id: cardId, word, styleClass,
                        img: ex.img || null,
                        imageBlob: imageFile || ex.imageBlob || null,
                        audioBlob: audioFile || ex.audioBlob || null,
                        order: ex.order || 0
                    }).onsuccess = () => {
                        reload();
                        closeCardEditor();
                    };
                };
            } else {
                // Novo card
                db.transaction([storeKey], 'readwrite').objectStore(storeKey).add({
                    word, styleClass, img: null,
                    imageBlob: imageFile || null,
                    audioBlob: audioFile || null,
                    order: Date.now()
                }).onsuccess = () => {
                    reload();
                    closeCardEditor();
                };
            }
        } else if (section === 'virtue') {
            const record = folderRecord;
            const items = [...(record.items || [])];
            const ex = cardId !== null ? { ...items[cardId] } : {};

            if (supabaseClient) {
                try {
                    // Categoria global do admin: primeira escrita do médico cria
                    // a cópia própria (com os itens de hoje), e passa a escrever
                    // nela — o original do admin não é alterado.
                    const target = (isDoctor && !record.doctorUserId) ? await getOrCreateVirtueFolderFork(record) : record;

                    let image_url = ex.image_url || null;
                    let audio_url = ex.audio_url || null;
                    if (imageFile) {
                        image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
                    }
                    if (audioFile) {
                        audio_url = await uploadToSupabaseStorage('media_uploads', 'audios', audioFile);
                    }

                    if (cardId !== null) {
                        // Editar item existente
                        const { data: itemRec } = await supabaseClient
                            .from('virtue_items')
                            .select('id')
                            .eq('virtue_id', target.id)
                            .eq('word', ex.word)
                            .single();
                        if (itemRec) {
                            await supabaseClient.from('virtue_items').update({
                                word,
                                style_class: styleClass,
                                image_url,
                                audio_url
                            }).eq('id', itemRec.id);
                        }
                    } else {
                        // Adicionar novo item
                        await supabaseClient.from('virtue_items').insert([{
                            virtue_id: target.id,
                            word,
                            style_class: styleClass,
                            image_url,
                            audio_url
                        }]);
                    }
                    currentOpenFolderRecord = target;
                    loadVirtuesAndRender();
                    closeCardEditor();
                    return;
                } catch (err) {
                    alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                }
            }

            const newItem = {
                word, styleClass,
                img: ex.img || null,
                imageBlob: imageFile || ex.imageBlob || null,
                audioBlob: audioFile || ex.audioBlob || null,
            };
            if (cardId !== null) items[cardId] = newItem; else items.push(newItem);
            record.items = items;
            saveVirtueFolderToDB(record, () => {
                loadVirtuesAndRender();
                closeCardEditor();
            });
        } else if (section === 'topic') {
            if (folderRecord === null) {
                if (supabaseClient) {
                    try {
                        const newTopicPayload = { folder: word, style_class: styleClass };
                        if (isDoctor) { newTopicPayload.doctor_user_id = currentUserId; newTopicPayload.company_id = currentUserCompanyId; }
                        await supabaseClient.from('topics').insert([newTopicPayload]);
                        loadTopicsAndRender();
                        closeCardEditor();
                        return;
                    } catch (err) {
                        alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                    }
                }
                saveTopicFolderToDB({ folder: word, styleClass, items: [] }, () => {
                    loadTopicsAndRender();
                    closeCardEditor();
                });
                return;
            }

            const record = folderRecord;
            const items = [...(record.items || [])];
            const ex = cardId !== null ? { ...items[cardId] } : {};

            if (supabaseClient) {
                try {
                    // Pasta global do admin: primeira escrita do médico cria a
                    // cópia própria (com os itens de hoje), e passa a escrever
                    // nela — o original do admin não é alterado.
                    const target = (isDoctor && !record.doctorUserId) ? await getOrCreateTopicFolderFork(record) : record;

                    let image_url = ex.image_url || null;
                    let audio_url = ex.audio_url || null;
                    if (imageFile) {
                        image_url = await uploadToSupabaseStorage('media_uploads', 'images', imageFile);
                    }
                    if (audioFile) {
                        audio_url = await uploadToSupabaseStorage('media_uploads', 'audios', audioFile);
                    }

                    if (cardId !== null) {
                        // Editar item existente
                        const { data: itemRec } = await supabaseClient
                            .from('topic_items')
                            .select('id')
                            .eq('topic_id', target.id)
                            .eq('word', ex.word)
                            .single();
                        if (itemRec) {
                            await supabaseClient.from('topic_items').update({
                                word,
                                style_class: styleClass,
                                image_url,
                                audio_url
                            }).eq('id', itemRec.id);
                        }
                    } else {
                        // Adicionar novo item
                        await supabaseClient.from('topic_items').insert([{
                            topic_id: target.id,
                            word,
                            style_class: styleClass,
                            image_url,
                            audio_url
                        }]);
                    }
                    currentOpenTopicFolderRecord = target;
                    loadTopicsAndRender();
                    closeCardEditor();
                    return;
                } catch (err) {
                    alert('Erro ao salvar no Supabase, tentando localmente: ' + err.message);
                }
            }

            const newItem = {
                word, styleClass,
                img: ex.img || null,
                imageBlob: imageFile || ex.imageBlob || null,
                audioBlob: audioFile || ex.audioBlob || null,
            };
            if (cardId !== null) items[cardId] = newItem; else items.push(newItem);
            record.items = items;
            saveTopicFolderToDB(record, () => {
                loadTopicsAndRender();
                closeCardEditor();
            });
        }
    });
}

// Leitor de livros (iframe #books-frame) pede modo imersivo via postMessage quando abre um
// livro no celular — necessário porque o iOS Safari não suporta Fullscreen API para
// elementos genéricos, então o iframe não consegue se maximizar sozinho.
window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    if (event.data?.type !== 'book-reader:immersive') return;
    document.querySelector('.app-layout')?.classList.toggle('reader-immersive', !!event.data.value);
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ---- CHAT IA AZURE (Via Supabase Edge Function ou Servidor Local) ----
const isLocalhost = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' || 
                    window.location.protocol === 'file:';

const SUPABASE_CHAT_ENDPOINT = "https://rrubmvykindvilptjhma.supabase.co/functions/v1/chat";

const AZURE_AI_ENDPOINT = isLocalhost
    ? "http://127.0.0.1:5001/chat"
    : SUPABASE_CHAT_ENDPOINT;
const IA_ENDPOINT_FALLBACKS = isLocalhost
    ? [AZURE_AI_ENDPOINT, SUPABASE_CHAT_ENDPOINT]
    : [SUPABASE_CHAT_ENDPOINT];

// Protótipo do jogo "Nomeação por Fala" (ver ideia discutida em 2026-08-24):
// só transcrição, sem passar pelo agente de IA. Só existe rota local por
// enquanto (server.py /transcribe) — sem Edge Function equivalente ainda,
// então em produção o jogo fica desabilitado até essa decisão ser tomada.
const TRANSCRIBE_ENDPOINT = isLocalhost ? "http://127.0.0.1:5001/transcribe" : null;


const iaChatInput = document.getElementById('ia-chat-input');
const btnIaSend = document.getElementById('btn-ia-send');
const btnIaRecord = document.getElementById('btn-ia-record');
const iaChatMessages = document.getElementById('ia-chat-messages');
const btnIaRestart = document.getElementById('btn-ia-restart');

// O agente Azure (falafacil) já tem suas próprias instruções completas configuradas
// no Azure AI Foundry — não injetamos nenhuma instrução daqui. chatHistory guarda só
// as mensagens reais da conversa, pra não competir/conflitar com a configuração de lá.
let chatHistory = [];
// Acompanha o chatHistory: o servidor não guarda mais isso globalmente (um global
// compartilhado por todas as abas/usuários fazia uma conversa "vazar" contexto pra
// outra). Reseta junto com chatHistory sempre que a página recarrega.
let lastResponseId = null;
// Último áudio de resposta da IA em reprodução — guardado para poder ser
// interrompido ao reiniciar a conversa.
let iaChatAudio = null;

function restartIaChat() {
    if (!confirm('Começar uma nova conversa? O histórico atual será apagado.')) return;
    chatHistory = [];
    lastResponseId = null; // sem isso a Azure continuaria "lembrando" da conversa antiga
    if (iaChatAudio) { iaChatAudio.pause(); iaChatAudio = null; }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (iaChatMessages) iaChatMessages.innerHTML = '';
    addMessageToChat('Olá! Sou o Comunica Fácil IA. Como posso ajudar você hoje?', 'ia');
    if (iaChatInput) { iaChatInput.value = ''; iaChatInput.focus(); }
}
btnIaRestart?.addEventListener('click', restartIaChat);

async function postIaPayload(payload, useFormData = false) {
    let lastError = null;
    const authedHeaders = await getIaEndpointHeaders();
    if (useFormData) delete authedHeaders['Content-Type']; // deixa o browser definir o boundary do multipart
    for (const endpoint of IA_ENDPOINT_FALLBACKS) {
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: authedHeaders,
                body: useFormData ? payload : JSON.stringify(payload)
            });
            if (!response.ok) {
                lastError = new Error(`Erro na API (${response.status})`);
                continue;
            }
            return await response.json();
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError || new Error('Falha ao chamar a IA.');
}

async function sendIaMessage() {
    const text = iaChatInput.value.trim();
    if (!text) return;
    
    addMessageToChat(text, 'user');
    iaChatInput.value = '';
    
    chatHistory.push({ role: "user", content: text });
    const typingIndicator = addMessageToChat('Digitando...', 'ia', true);
    
    try {
        const data = await postIaPayload({
            messages: chatHistory,
            generateAudio: true, // Solicita síntese de voz na resposta
            previous_response_id: lastResponseId
        });

        if (data.error) {
            throw new Error(data.error.message || data.error);
        }

        const reply = data.reply;
        lastResponseId = data.response_id || lastResponseId;

        chatHistory.push({ role: "assistant", content: reply });
        
        typingIndicator.remove();
        addMessageToChat(reply, 'ia', false, data.audio);
        
        // Toca automaticamente se houver áudio (rastreado para o "Nova conversa" poder parar)
        if (data.audio) {
            iaChatAudio = new Audio(`data:audio/mp3;base64,${data.audio}`);
            iaChatAudio.play();
        }
        
    } catch (error) {
        console.error('Erro ao chamar Azure AI via Supabase:', error);
        typingIndicator.remove();
        addMessageToChat('Desculpe, ocorreu um erro de conexão com a IA.', 'ia');
    }
}

function addMessageToChat(text, sender, isTyping = false, audioBase64 = null) {
    const msgDiv = document.createElement('div');
    msgDiv.style.padding = '12px 16px';
    msgDiv.style.maxWidth = '85%';
    msgDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    msgDiv.style.color = 'var(--text-main)';
    msgDiv.style.lineHeight = '1.4';
    msgDiv.style.display = 'flex';
    msgDiv.style.alignItems = 'center';
    msgDiv.style.justifyContent = 'space-between';
    msgDiv.style.gap = '15px';
    
    const textSpan = document.createElement('span');
    textSpan.textContent = text;
    msgDiv.appendChild(textSpan);
    
    if (sender === 'user') {
        msgDiv.style.alignSelf = 'flex-end';
        msgDiv.style.background = 'var(--color-blue)'; // Azul do tema
        msgDiv.style.color = 'black';                  // Texto preto
        msgDiv.style.borderRadius = '16px 16px 0 16px';
    } else {
        msgDiv.style.alignSelf = 'flex-start';
        msgDiv.style.background = 'white';
        msgDiv.style.borderRadius = '0 16px 16px 16px';
        
        if (isTyping) {
            msgDiv.style.fontStyle = 'italic';
        } else if (audioBase64) {
            // Cria o botão de ouvir novamente
            const playBtn = document.createElement('button');
            playBtn.style.background = 'transparent';
            playBtn.style.border = 'none';
            playBtn.style.color = 'var(--color-blue)';
            playBtn.style.cursor = 'pointer';
            playBtn.style.fontSize = '18px';
            playBtn.style.display = 'flex';
            playBtn.style.alignItems = 'center';
            playBtn.style.justifyContent = 'center';
            playBtn.innerHTML = '<i class="fas fa-volume-up" aria-hidden="true"></i>';
            playBtn.title = "Ouvir resposta";
            playBtn.setAttribute('aria-label', 'Ouvir resposta');
            
            let currentAudio = null;
            playBtn.addEventListener('click', () => {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio = null;
                    playBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                } else {
                    playBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                    currentAudio = new Audio(`data:audio/mp3;base64,${audioBase64}`);
                    iaChatAudio = currentAudio; // "Nova conversa" consegue parar este áudio também
                    currentAudio.onended = () => {
                        playBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                        currentAudio = null;
                    };
                    currentAudio.onerror = () => {
                        playBtn.innerHTML = '<i class="fas fa-exclamation-circle" style="color:red;"></i>';
                        currentAudio = null;
                    };
                    currentAudio.play();
                }
            });
            msgDiv.appendChild(playBtn);
        }
    }
    
    if (iaChatMessages) {
        iaChatMessages.appendChild(msgDiv);
        iaChatMessages.scrollTop = iaChatMessages.scrollHeight;
    }
    return msgDiv;
}

// ---- GRAVADOR WAV (16kHz mono) PURE JS ----
let audioContext;
let audioInput;
let recorderNode;
let recordingBuffer = [];
let isRecording = false;
let recordingSourceSampleRate = 16000;

async function startWavRecording() {
    recordingBuffer = [];
    // Pede explicitamente cancelamento de eco, redução de ruído e ganho automático —
    // importante para microfones de webcam, que costumam captar mais baixo/com mais
    // ruído de ambiente do que um microfone de headset.
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
        }
    });

    // Usa a taxa nativa do dispositivo em vez de forçar 16kHz no AudioContext: alguns
    // microfones (comuns em webcams USB) não lidam bem com a reamostragem interna do
    // navegador quando o AudioContext é forçado para uma taxa diferente da nativa,
    // e isso pode corromper o áudio captado. A reamostragem para 16kHz (exigida pela
    // Azure) é feita manualmente em resampleTo16k(), com controle total do processo.
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    recordingSourceSampleRate = audioContext.sampleRate;
    audioInput = audioContext.createMediaStreamSource(stream);

    // ScriptProcessor para compatibilidade total Chrome/Safari/Firefox
    recorderNode = audioContext.createScriptProcessor(4096, 1, 1);
    recorderNode.onaudioprocess = (e) => {
        if (!isRecording) return;
        const inputData = e.inputBuffer.getChannelData(0);
        recordingBuffer.push(new Float32Array(inputData));
    };

    audioInput.connect(recorderNode);
    recorderNode.connect(audioContext.destination);
    isRecording = true;
}

// Reamostragem para 16kHz via OfflineAudioContext: o próprio navegador aplica o
// filtro anti-aliasing necessário antes de reduzir a taxa de amostragem. Uma
// interpolação linear manual (like antes) não filtra as frequências acima do novo
// limite de Nyquist, e isso introduz ruído/distorção que atrapalha o reconhecimento
// de voz — mais perceptível em mics que gravam nativamente a 44.1kHz/48kHz.
async function resampleTo16k(float32Array, sourceSampleRate) {
    const targetSampleRate = 16000;
    if (Math.round(sourceSampleRate) === targetSampleRate) return float32Array;

    const targetLength = Math.ceil(float32Array.length * targetSampleRate / sourceSampleRate);
    const offlineCtx = new OfflineAudioContext(1, targetLength, targetSampleRate);
    const sourceBuffer = offlineCtx.createBuffer(1, float32Array.length, sourceSampleRate);
    sourceBuffer.copyToChannel(float32Array, 0);

    const source = offlineCtx.createBufferSource();
    source.buffer = sourceBuffer;
    source.connect(offlineCtx.destination);
    source.start();

    const renderedBuffer = await offlineCtx.startRendering();
    return renderedBuffer.getChannelData(0);
}

async function stopWavRecording() {
    isRecording = false;
    
    if (recorderNode) recorderNode.disconnect();
    if (audioInput) audioInput.disconnect();
    if (audioContext && audioContext.state !== 'closed') audioContext.close();
    
    const totalLength = recordingBuffer.reduce((acc, buf) => acc + buf.length, 0);
    const rawResult = new Float32Array(totalLength);
    let offset = 0;
    for (const buf of recordingBuffer) {
        rawResult.set(buf, offset);
        offset += buf.length;
    }

    const result = await resampleTo16k(rawResult, recordingSourceSampleRate);

    // Amplifica o áudio se estiver baixo (comum em mic de webcam, mais longe da boca).
    // Normaliza o pico pra perto de 0 dBFS sem estourar (clipping).
    let peak = 0;
    for (let i = 0; i < result.length; i++) {
        const abs = Math.abs(result[i]);
        if (abs > peak) peak = abs;
    }
    if (peak > 0 && peak < 0.9) {
        // Sem limite de ganho: mic embutido de notebook (o mais comum entre os usuários)
        // captou em teste real um pico de ~0.009 antes de normalizar — um limite de 6x
        // deixava o áudio ainda muito baixo pra Azure reconhecer bem.
        const gain = 0.95 / peak;
        for (let i = 0; i < result.length; i++) {
            result[i] *= gain;
        }
    }

    // Converte float32 para PCM de 16 bits
    const buffer = new ArrayBuffer(44 + result.length * 2);
    const view = new DataView(buffer);
    
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + result.length * 2, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, 16000, true);
    view.setUint32(28, 16000 * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(view, 36, 'data');
    view.setUint32(40, result.length * 2, true);
    
    let index = 44;
    for (let i = 0; i < result.length; i++) {
        let s = Math.max(-1, Math.min(1, result[i]));
        view.setInt16(index, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        index += 2;
    }
    
    return new Blob([view], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}

async function toggleIaAudioRecording() {
    if (isRecording) {
        btnIaRecord.classList.remove('recording-pulse');
        btnIaRecord.style.background = 'var(--color-blue)';
        btnIaRecord.style.color = 'black';
        btnIaRecord.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        btnIaRecord.disabled = true;
        
        // Restaura estado do input de texto
        if (iaChatInput) {
            iaChatInput.placeholder = "Digite sua mensagem...";
            iaChatInput.disabled = false;
        }
        
        try {
            const audioBlob = await stopWavRecording();
            await sendIaAudioMessage(audioBlob);
        } catch (error) {
            console.error('Erro ao parar gravação de áudio:', error);
            alert('Não foi possível processar a sua gravação de áudio.');
        } finally {
            btnIaRecord.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i>';
            btnIaRecord.setAttribute('aria-label', 'Gravar mensagem de voz');
            btnIaRecord.disabled = false;
        }
    } else {
        btnIaRecord.style.background = '#f44336'; // Botão vermelho indicando gravação
        btnIaRecord.style.color = 'white';
        btnIaRecord.innerHTML = '<i class="fas fa-stop" aria-hidden="true"></i>';
        btnIaRecord.setAttribute('aria-label', 'Parar gravação');
        btnIaRecord.classList.add('recording-pulse');
        
        // Altera o estado do input de texto para indicar gravação
        if (iaChatInput) {
            iaChatInput.placeholder = "🔴 Gravando áudio... fale agora!";
            iaChatInput.disabled = true;
        }
        
        try {
            await startWavRecording();
        } catch (error) {
            console.error('Erro ao acessar microfone:', error);
            alert('Erro ao acessar microfone. Certifique-se de conceder a permissão no navegador.');
            btnIaRecord.classList.remove('recording-pulse');
            btnIaRecord.style.background = 'var(--color-blue)';
            btnIaRecord.style.color = 'black';
            btnIaRecord.innerHTML = '<i class="fas fa-microphone" aria-hidden="true"></i>';
            btnIaRecord.setAttribute('aria-label', 'Gravar mensagem de voz');
            if (iaChatInput) {
                iaChatInput.placeholder = "Digite sua mensagem...";
                iaChatInput.disabled = false;
            }
        }
    }
}

async function sendIaAudioMessage(audioBlob) {
    const typingIndicator = addMessageToChat('Processando áudio...', 'ia', true);
    
    const formData = new FormData();
    formData.append('audio', audioBlob, 'audio.wav');
    formData.append('messages', JSON.stringify(chatHistory));
    if (lastResponseId) formData.append('previous_response_id', lastResponseId);

    try {
        const data = await postIaPayload(formData, true);

        if (data.error) {
            throw new Error(data.error.message || data.error);
        }

        typingIndicator.remove();
        lastResponseId = data.response_id || lastResponseId;

        // Exibe a pergunta transcrita no chat
        addMessageToChat(data.user_transcription, 'user');
        chatHistory.push({ role: "user", content: data.user_transcription });

        // Exibe a resposta com o player
        addMessageToChat(data.reply, 'ia', false, data.audio);
        chatHistory.push({ role: "assistant", content: data.reply });
        
        // Reproduz o som automaticamente
        if (data.audio) {
            const audio = new Audio(`data:audio/mp3;base64,${data.audio}`);
            audio.play();
        }
        
    } catch (error) {
        console.error('Erro ao enviar áudio para a IA:', error);
        typingIndicator.remove();
        addMessageToChat('Desculpe, ocorreu um erro ao transcrever ou processar seu áudio.', 'ia');
    }
}

// Configuração dos Event Listeners
if (btnIaSend && iaChatInput) {
    btnIaSend.addEventListener('click', sendIaMessage);
    iaChatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendIaMessage();
    });
}

if (btnIaRecord) {
    btnIaRecord.addEventListener('click', toggleIaAudioRecording);
}

// --- Lógica do Carômetro Dinâmico ---
document.addEventListener('DOMContentLoaded', () => {
    const btnEditCarometro = document.getElementById('btn-edit-carometro');
    const viewCarometro = document.getElementById('view-carometro');
    const fileInput = document.getElementById('carometro-file-input');
    const textToolbar = document.getElementById('carometro-text-toolbar');
    const dynamicContainer = document.getElementById('carometro-dynamic-container');
    const globalActions = document.getElementById('carometro-global-actions');
    const btnAddSector = document.getElementById('btn-add-carometro-sector');
    const tabsBar = document.getElementById('carometro-tabs-bar');
    
    let activeCarometroTabId = null;
    let currentPhotoTarget = null;
    let isEditingCarometro = false;
    let draggedCarometroCard = null;
    let dragHandleActiveCard = null;
    let selectedCarometroSwapCard = null;
    const STORAGE_KEY = 'comunicafacil_carometro_state';

    // Gerador de IDs simples
    const generateId = () => 'id_' + Math.random().toString(36).substr(2, 9);

    // Sanitiza o HTML dos campos editáveis do Carômetro (nome/idade/título):
    // mantém só a formatação simples que o toolbar flutuante logo abaixo
    // produz (negrito, itálico, sublinhado, cor, fonte), e descarta qualquer
    // tag/atributo capaz de rodar script (<img onerror>, <script>, style com
    // url()/expression() etc.). Sem isso, quem edita esses campos (médico)
    // conseguia gravar HTML malicioso que rodava na sessão de quem visse o
    // card depois — paciente, outro médico ou admin. Aplicada tanto ao ler
    // (dados antigos já salvos) quanto ao salvar (dados novos).
    const CAROMETRO_ALLOWED_TAGS = new Set(['B', 'STRONG', 'I', 'EM', 'U', 'SPAN', 'FONT', 'BR']);
    const CAROMETRO_ALLOWED_STYLE_PROPS = new Set(['color', 'font-size', 'font-weight', 'font-style', 'text-decoration', 'font-family']);

    function sanitizeCarometroStyle(styleValue) {
        if (!styleValue) return '';
        const out = [];
        styleValue.split(';').forEach(decl => {
            const idx = decl.indexOf(':');
            if (idx === -1) return;
            const prop = decl.slice(0, idx).trim().toLowerCase();
            const value = decl.slice(idx + 1).trim();
            if (!CAROMETRO_ALLOWED_STYLE_PROPS.has(prop)) return;
            if (/url\s*\(|expression\s*\(|javascript:/i.test(value)) return;
            out.push(`${prop}: ${value}`);
        });
        return out.join('; ');
    }

    function sanitizeCarometroNode(node, out) {
        if (node.nodeType === Node.TEXT_NODE) {
            out.appendChild(document.createTextNode(node.textContent));
            return;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return;

        const tag = node.tagName;
        if (!CAROMETRO_ALLOWED_TAGS.has(tag)) {
            node.childNodes.forEach(child => sanitizeCarometroNode(child, out));
            return;
        }

        const clean = document.createElement(tag === 'FONT' ? 'span' : tag.toLowerCase());
        if (tag === 'FONT') {
            // O toolbar produz <font size="1..6"> pro seletor de tamanho (não
            // CSS) — sem mapear esse atributo aqui, o tamanho escolhido se
            // perdia silenciosamente ao salvar/recarregar o card.
            const FONT_SIZE_KEYWORDS = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
            const styleParts = [];
            const color = node.getAttribute('color');
            const face = node.getAttribute('face');
            const size = node.getAttribute('size');
            if (color && /^#?[0-9a-f]{3,8}$|^[a-z]+$/i.test(color)) styleParts.push(`color: ${color}`);
            if (face) styleParts.push(`font-family: ${face.replace(/[^a-z0-9 ,'-]/gi, '')}`);
            if (size && FONT_SIZE_KEYWORDS[Number(size) - 1]) styleParts.push(`font-size: ${FONT_SIZE_KEYWORDS[Number(size) - 1]}`);
            if (styleParts.length) clean.setAttribute('style', styleParts.join('; '));
        } else {
            const style = sanitizeCarometroStyle(node.getAttribute('style'));
            if (style) clean.setAttribute('style', style);
        }
        node.childNodes.forEach(child => sanitizeCarometroNode(child, clean));
        out.appendChild(clean);
    }

    function sanitizeCarometroHTML(html) {
        if (!html) return '';
        const doc = new DOMParser().parseFromString(String(html), 'text/html');
        const wrapper = document.createElement('div');
        doc.body.childNodes.forEach(child => sanitizeCarometroNode(child, wrapper));
        return wrapper.innerHTML;
    }

    // Estrutura Padrão caso não haja dados
    const defaultData = [
        {
            id: generateId(),
            titleHTML: 'Administrativo',
            people: [
                { id: generateId(), nameHTML: 'Eduardo', ageHTML: '45 anos', photoSrc: 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Eduardo' },
                { id: generateId(), nameHTML: 'Aline', ageHTML: '36 anos', photoSrc: 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Aline' }
            ]
        }
    ];

    // Carregar Estado
    async function loadState() {
        if (supabaseClient) {
            try {
                // Médico "dentro" de um paciente (Fase 5c): carrega só o Carômetro
                // daquele paciente — nunca a mistura de vários pacientes que a RLS
                // deixaria ele ler (o mesmo cuidado que renderExerciseCards toma).
                let sectorsQuery = supabaseClient.from('carometro_sectors').select('*').order('order_index', { ascending: true });
                if (isDoctor && activePatientContext) {
                    sectorsQuery = sectorsQuery.eq('patient_id', activePatientContext.id);
                }
                const { data: dbSectors, error: secErr } = await sectorsQuery;
                if (secErr) throw secErr;
                // Visibilidade da aba agora é só pelo módulo (patient_module_flags,
                // igual aos outros) — não depende mais de "tem conteúdo ou não".

                const { data: dbPeople, error: peoErr } = await supabaseClient.from('carometro_people').select('*').order('order_index', { ascending: true });
                if (peoErr) throw peoErr;

                if (dbSectors && dbSectors.length > 0) {
                    const data = dbSectors.map(sec => {
                        const peopleForSector = (dbPeople || []).filter(p => p.sector_id === sec.id).map(p => ({
                            id: p.id,
                            nameHTML: sanitizeCarometroHTML(p.name_html),
                            ageHTML: sanitizeCarometroHTML(p.age_html),
                            photoSrc: p.photo_url || 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Foto'
                        }));
                        return {
                            id: sec.id,
                            titleHTML: sanitizeCarometroHTML(sec.title_html),
                            people: peopleForSector
                        };
                    });
                    return data;
                }
            } catch (e) {
                console.warn('Erro ao carregar carômetro do Supabase, caindo para localStorage:', e);
            }
        }

        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try { return JSON.parse(saved); } catch (e) { return defaultData; }
        }
        return defaultData;
    }

    // Salvar Estado varrendo o DOM
    async function saveState() {
        if (!dynamicContainer) return;
        const sections = dynamicContainer.querySelectorAll('.carometro-section-wrapper');
        const data = [];
        const dbSectors = [];
        const dbPeople = [];
        let sectorOrder = 0;
        let peopleOrder = 0;
        
        sections.forEach(sec => {
            const titleEl = sec.querySelector('.carometro-title');
            if (!titleEl) return;
            
            const sectorId = sec.dataset.id || generateId();
            const cleanTitleHTML = sanitizeCarometroHTML(titleEl.innerHTML);
            const sectorData = {
                id: sectorId,
                titleHTML: cleanTitleHTML,
                people: []
            };

            dbSectors.push({
                id: sectorId,
                title_html: cleanTitleHTML,
                order_index: sectorOrder++,
                // Setor criado/editado por um médico "dentro" de um paciente (Fase
                // 5c) já nasce escopado pra ele — sem isso, a RLS de escrita do
                // médico (que exige patient_id preenchido) rejeitaria o insert.
                ...(isDoctor && activePatientContext ? { patient_id: activePatientContext.id } : {})
            });
            
            const cards = sec.querySelectorAll('.carometro-card');
            cards.forEach(card => {
                const nameEl = card.querySelector('.carometro-name');
                const ageEl = card.querySelector('.carometro-age');
                const imgEl = card.querySelector('.carometro-photo');
                
                if (nameEl && ageEl && imgEl) {
                    const personId = card.dataset.id || generateId();
                    const cleanNameHTML = sanitizeCarometroHTML(nameEl.innerHTML);
                    const cleanAgeHTML = sanitizeCarometroHTML(ageEl.innerHTML);
                    sectorData.people.push({
                        id: personId,
                        nameHTML: cleanNameHTML,
                        ageHTML: cleanAgeHTML,
                        photoSrc: imgEl.src
                    });

                    dbPeople.push({
                        id: personId,
                        sector_id: sectorId,
                        name_html: cleanNameHTML,
                        age_html: cleanAgeHTML,
                        photo_url: imgEl.src,
                        order_index: peopleOrder++
                    });
                }
            });
            
            data.push(sectorData);
        });

        if (supabaseClient) {
            try {
                // ⚠️ Risco crítico (Fase 5c): sem filtrar por paciente aqui, um médico
                // editando o Carômetro de UM paciente apagaria o Carômetro global e o
                // de outros pacientes — a RLS deixa ele LER tudo isso (pra dar
                // contexto), mas o DOM só mostra o paciente ativo, então a diff
                // "sumiu do DOM" apagaria tudo que não é daquele paciente.
                const inDoctorPatientContext = isDoctor && activePatientContext;

                // Sync Sectors
                let existingSectorsQuery = supabaseClient.from('carometro_sectors').select('id');
                if (inDoctorPatientContext) existingSectorsQuery = existingSectorsQuery.eq('patient_id', activePatientContext.id);
                const { data: existingSectors } = await existingSectorsQuery;
                const existingSectorIds = (existingSectors || []).map(s => s.id);
                const newSectorIds = dbSectors.map(s => s.id);
                const sectorsToDelete = existingSectorIds.filter(id => !newSectorIds.includes(id));

                if (sectorsToDelete.length > 0) {
                    await supabaseClient.from('carometro_sectors').delete().in('id', sectorsToDelete);
                }
                if (dbSectors.length > 0) {
                    await supabaseClient.from('carometro_sectors').upsert(dbSectors);
                }

                // Sync People — mesmo cuidado: filtra pelos setores do paciente ativo.
                let existingPeopleQuery = supabaseClient.from('carometro_people').select('id');
                if (inDoctorPatientContext) existingPeopleQuery = existingPeopleQuery.in('sector_id', newSectorIds);
                const { data: existingPeople } = await existingPeopleQuery;
                const existingPeopleIds = (existingPeople || []).map(p => p.id);
                const newPeopleIds = dbPeople.map(p => p.id);
                const peopleToDelete = existingPeopleIds.filter(id => !newPeopleIds.includes(id));

                if (peopleToDelete.length > 0) {
                    await supabaseClient.from('carometro_people').delete().in('id', peopleToDelete);
                }
                if (dbPeople.length > 0) {
                    await supabaseClient.from('carometro_people').upsert(dbPeople);
                }
            } catch (err) {
                console.warn('Erro ao salvar no Supabase:', err);
            }
        }
        
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            // Estado inteiro (com fotos em base64 de todos os setores/pessoas) cresce a
            // cada pessoa nova e nunca é podado — mesma quota do token de sessão do
            // Supabase. Libera o cache de TTS (fácil de reconstruir) e tenta de novo.
            evictTtsLocalStorageCache();
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            } catch (e2) {
                console.warn('Erro ao salvar no localStorage (possível limite de quota):', e2);
            }
        }
    }

    // Renderizar Card de Pessoa
    function createPersonCardHTML(person, isEditing) {
        return `
            <div class="carometro-card" data-id="${person.id}" ${isEditing ? 'draggable="true"' : ''}>
                ${isEditing ? `
                    <div class="carometro-card-actions">
                        <button class="btn-move-card" type="button" data-direction="prev" title="Mover para a esquerda" aria-label="Mover para a esquerda">
                            <i class="fas fa-arrow-left" aria-hidden="true"></i>
                        </button>
                        <button class="btn-swap-card" type="button" title="Trocar este card com outro" aria-label="Trocar este card com outro">
                            <i class="fas fa-retweet" aria-hidden="true"></i>
                            <span>Trocar</span>
                        </button>
                        <button class="btn-move-card" type="button" data-direction="next" title="Mover para a direita" aria-label="Mover para a direita">
                            <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                    </div>
                ` : ''}
                ${isEditing ? `<button class="btn-delete btn-delete-person" title="Excluir pessoa"><i class="fas fa-trash"></i></button>` : ''}
                <div class="carometro-info">
                    <span class="carometro-name" ${isEditing ? 'contenteditable="true"' : ''}>${person.nameHTML}</span>
                    <span class="carometro-age" ${isEditing ? 'contenteditable="true"' : ''}>${person.ageHTML}</span>
                </div>
                <div class="photo-wrapper">
                    <img src="${person.photoSrc}" alt="Foto" class="carometro-photo">
                </div>
            </div>
        `;
    }

    // Renderizar Setor Completo
    function createSectorHTML(sector, isEditing) {
        let peopleHTML = sector.people.map(p => createPersonCardHTML(p, isEditing)).join('');
        
        // Adicionar botão "+ Pessoa" se estiver editando
        if (isEditing) {
            peopleHTML += `
                <div class="btn-add-person-card" title="Adicionar pessoa a este setor">
                    <i class="fas fa-user-plus"></i>
                    <span>Adicionar</span>
                </div>
            `;
        }

        return `
            <div class="carometro-section-wrapper" data-id="${sector.id}">
                ${isEditing ? `<button class="btn-delete-sector" title="Excluir setor inteiro"><i class="fas fa-trash"></i> Excluir Setor</button>` : ''}
                <h2 class="carometro-title" style="${dynamicContainer.children.length > 0 || isEditing ? 'margin-top: 60px;' : ''}" ${isEditing ? 'contenteditable="true"' : ''}>${sector.titleHTML}</h2>
                <div class="carometro-grid">
                    ${peopleHTML}
                </div>
            </div>
        `;
    }

    // Atualizar a Interface Inteira
    async function renderCarometro(isEditing = false) {
        if (!dynamicContainer) return;
        const data = await loadState();
        dynamicContainer.innerHTML = '';
        if (tabsBar) tabsBar.innerHTML = '';
        
        if (data.length > 0 && !activeCarometroTabId) {
            activeCarometroTabId = data[0].id;
        }

        data.forEach(sector => {
            // Criar Aba
            if (tabsBar) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = sector.titleHTML;
                const plainTitle = tempDiv.textContent.trim() || 'Sem Título';
                
                const tabBtn = document.createElement('button');
                tabBtn.className = `carometro-tab-btn ${sector.id === activeCarometroTabId ? 'active' : ''}`;
                tabBtn.textContent = plainTitle;
                tabBtn.dataset.targetId = sector.id;
                
                tabBtn.addEventListener('click', () => {
                    activeCarometroTabId = sector.id;
                    // Atualizar visual das abas
                    tabsBar.querySelectorAll('.carometro-tab-btn').forEach(btn => btn.classList.remove('active'));
                    tabBtn.classList.add('active');
                    // Atualizar visual dos containers
                    dynamicContainer.querySelectorAll('.carometro-section-wrapper').forEach(sec => {
                        if (sec.dataset.id === sector.id) {
                            sec.classList.remove('hidden');
                        } else {
                            sec.classList.add('hidden');
                        }
                    });
                });
                tabsBar.appendChild(tabBtn);
            }

            // Criar Conteúdo (Setor)
            const sectorHTML = createSectorHTML(sector, isEditing);
            dynamicContainer.insertAdjacentHTML('beforeend', sectorHTML);
            
            const newlyAddedSector = dynamicContainer.lastElementChild;
            if (sector.id !== activeCarometroTabId) {
                newlyAddedSector.classList.add('hidden');
            }

            // Sincronizar título editado com a aba
            if (isEditing) {
                const titleEl = newlyAddedSector.querySelector('.carometro-title');
                if (titleEl) {
                    titleEl.addEventListener('input', () => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = titleEl.innerHTML;
                        const newTitle = tempDiv.textContent.trim() || 'Sem Título';
                        const tabBtn = tabsBar.querySelector(`.carometro-tab-btn[data-target-id="${sector.id}"]`);
                        if (tabBtn) tabBtn.textContent = newTitle;
                    });
                }
            }
        });
        
        // Adicionar eventos de clique (áudio) nos cartões
        dynamicContainer.querySelectorAll('.carometro-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Não tocar áudio se estiver clicando em controles de edição ou editando texto
                if (
                    e.target.closest('.btn-delete') ||
                    e.target.closest('.carometro-drag-handle') ||
                    e.target.closest('.btn-swap-card') ||
                    e.target.closest('.btn-move-card') ||
                    e.target.closest('[contenteditable="true"]')
                ) return;
                
                const nameEl = card.querySelector('.carometro-name');
                if (nameEl && nameEl.textContent.trim()) {
                    speak(nameEl.textContent.trim());
                }
            });
        });

        if (isEditing) {
            dynamicContainer.querySelectorAll('.carometro-card').forEach(card => {
                const dragHandle = card.querySelector('.carometro-drag-handle');
                if (dragHandle) {
                    const armDrag = (event) => {
                        event.stopPropagation();
                        dragHandleActiveCard = card;
                    };

                    dragHandle.addEventListener('mousedown', armDrag);
                    dragHandle.addEventListener('touchstart', armDrag, { passive: true });
                }

                card.addEventListener('dragstart', (event) => {
                    if (dragHandleActiveCard !== card) {
                        event.preventDefault();
                        return;
                    }

                    draggedCarometroCard = card;
                    card.classList.add('is-dragging');
                    if (event.dataTransfer) {
                        event.dataTransfer.effectAllowed = 'move';
                        event.dataTransfer.setData('text/plain', card.dataset.id || '');
                    }
                });

                card.addEventListener('dragend', () => {
                    card.classList.remove('is-dragging');
                    draggedCarometroCard = null;
                    dragHandleActiveCard = null;
                    dynamicContainer.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));
                });
            });

            dynamicContainer.querySelectorAll('.carometro-grid').forEach(grid => {
                grid.addEventListener('dragover', (event) => {
                    if (!draggedCarometroCard) return;
                    event.preventDefault();

                    const relatedCard = event.target.closest('.carometro-card');
                    grid.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));

                    if (!relatedCard || relatedCard === draggedCarometroCard) return;
                    relatedCard.classList.add('drag-target-swap');
                });

                grid.addEventListener('drop', (event) => {
                    if (!draggedCarometroCard) return;
                    event.preventDefault();

                    const relatedCard = event.target.closest('.carometro-card');

                    grid.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));

                    if (!relatedCard || relatedCard === draggedCarometroCard) {
                        return;
                    }

                    const draggedNextSibling = draggedCarometroCard.nextElementSibling;
                    const relatedNextSibling = relatedCard.nextElementSibling;

                    if (draggedNextSibling === relatedCard) {
                        grid.insertBefore(relatedCard, draggedCarometroCard);
                    } else if (relatedNextSibling === draggedCarometroCard) {
                        grid.insertBefore(draggedCarometroCard, relatedCard);
                    } else {
                        const draggedReference = draggedNextSibling;
                        const relatedReference = relatedNextSibling;
                        grid.insertBefore(draggedCarometroCard, relatedReference);
                        grid.insertBefore(relatedCard, draggedReference);
                    }
                });

                grid.addEventListener('dragleave', (event) => {
                    if (!grid.contains(event.relatedTarget)) {
                        grid.querySelectorAll('.carometro-card').forEach(item => item.classList.remove('drag-target-swap'));
                    }
                });
            });
        }
    }

    // Compressão de Imagem via Canvas
    function compressImage(file, callback) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                const max = 400; // Tamanho máximo (largura ou altura)
                
                if (width > height) {
                    if (width > max) { height = Math.round((height *= max / width)); width = max; }
                } else {
                    if (height > max) { width = Math.round((width *= max / height)); height = max; }
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                // Comprime em JPEG com 80% de qualidade
                callback(canvas.toDataURL('image/jpeg', 0.8));
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    // --- Eventos Principais ---
    if (btnEditCarometro && viewCarometro && fileInput && dynamicContainer) {
        // O botão Editar está oculto no HTML por padrão (display:none).
        // A função de autenticação (getSession) mostrará se for admin/editor.

        // Inicializar a renderização da primeira vez
        renderCarometro(false);

        // Exposto pro escopo global: enterPatientContext/exitPatientContext (Fase
        // 5c) precisam re-renderizar o Carômetro já filtrado/desfiltrado pelo
        // paciente ativo, mas loadState/renderCarometro são locais a esta IIFE.
        window.reloadCarometroState = () => renderCarometro(isEditingCarometro);

        // Toggle do Modo de Edição
        btnEditCarometro.addEventListener('click', async () => {
            isEditingCarometro = !isEditingCarometro;
            
            if (isEditingCarometro) {
                // Entrando no modo de edição (Lê o estado e renderiza editável)
                viewCarometro.classList.add('editing');
                btnEditCarometro.innerHTML = '<i class="fas fa-save" aria-hidden="true"></i> Salvar';
                globalActions.style.display = 'block';
                await renderCarometro(true);
            } else {
                // Saindo e salvando
                const originalHtml = btnEditCarometro.innerHTML;
                btnEditCarometro.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...';
                await saveState();
                viewCarometro.classList.remove('editing');
                btnEditCarometro.innerHTML = '<i class="fas fa-pen" aria-hidden="true"></i> Editar';
                globalActions.style.display = 'none';
                if (textToolbar) textToolbar.style.display = 'none';
                await renderCarometro(false);
            }
        });

        // Eventos Dinâmicos usando Delegação (Cliques no Container)
        dynamicContainer.addEventListener('click', (e) => {
            if (!isEditingCarometro) return;

            // 1. Clicar em Foto para Alterar
            if (e.target.classList.contains('carometro-photo')) {
                currentPhotoTarget = e.target;
                fileInput.click();
            }
            
            // 2. Excluir Setor
            const btnDelSector = e.target.closest('.btn-delete-sector');
            if (btnDelSector) {
                if (confirm('Tem certeza que deseja excluir ESTE SETOR INTEIRO e todas as pessoas nele?')) {
                    const section = btnDelSector.closest('.carometro-section-wrapper');
                    if (section) section.remove();
                    
                    // Fire-and-forget sync since we're in a sync event handler, or handle it async 
                    (async () => {
                        await saveState();
                        const currentState = await loadState();
                        if (!currentState.some(s => s.id === activeCarometroTabId)) {
                            activeCarometroTabId = currentState.length > 0 ? currentState[0].id : null;
                        }
                        await renderCarometro(isEditingCarometro);
                    })();
                }
            }

            // 3. Excluir Pessoa
            const btnDelPerson = e.target.closest('.btn-delete-person');
            if (btnDelPerson) {
                if (confirm('Deseja excluir esta pessoa?')) {
                    const card = btnDelPerson.closest('.carometro-card');
                    if (card) card.remove();
                }
            }

            // 4. Mover pessoa para a esquerda/direita
            const btnMoveCard = e.target.closest('.btn-move-card');
            if (btnMoveCard) {
                const card = btnMoveCard.closest('.carometro-card');
                const grid = card?.closest('.carometro-grid');
                if (!card || !grid) return;

                const direction = btnMoveCard.dataset.direction;
                const previousCard = card.previousElementSibling;
                const nextCard = card.nextElementSibling;

                if (direction === 'prev' && previousCard?.classList.contains('carometro-card')) {
                    grid.insertBefore(card, previousCard);
                }

                if (direction === 'next' && nextCard?.classList.contains('carometro-card')) {
                    grid.insertBefore(nextCard, card);
                }

                selectedCarometroSwapCard?.classList.remove('swap-selected');
                selectedCarometroSwapCard = null;
                return;
            }

            // 5. Trocar posição de duas pessoas
            const btnSwapCard = e.target.closest('.btn-swap-card');
            if (btnSwapCard) {
                const card = btnSwapCard.closest('.carometro-card');
                const grid = card?.closest('.carometro-grid');
                if (!card || !grid) return;

                if (!selectedCarometroSwapCard || !grid.contains(selectedCarometroSwapCard)) {
                    selectedCarometroSwapCard = card;
                    card.classList.add('swap-selected');
                    return;
                }

                if (selectedCarometroSwapCard === card) {
                    selectedCarometroSwapCard.classList.remove('swap-selected');
                    selectedCarometroSwapCard = null;
                    return;
                }

                const firstCard = selectedCarometroSwapCard;
                const secondCard = card;
                const firstNext = firstCard.nextElementSibling;
                const secondNext = secondCard.nextElementSibling;

                firstCard.classList.remove('swap-selected');

                if (firstNext === secondCard) {
                    grid.insertBefore(secondCard, firstCard);
                } else if (secondNext === firstCard) {
                    grid.insertBefore(firstCard, secondCard);
                } else {
                    grid.insertBefore(firstCard, secondNext);
                    grid.insertBefore(secondCard, firstNext);
                }

                selectedCarometroSwapCard = null;
                return;
            }

            // 6. Adicionar Pessoa
            const btnAddPerson = e.target.closest('.btn-add-person-card');
            if (btnAddPerson) {
                const grid = btnAddPerson.closest('.carometro-grid');
                if (grid) {
                    const newPerson = { id: generateId(), nameHTML: 'Novo Nome', ageHTML: '00 anos', photoSrc: 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Foto' };
                    // Insere o card da pessoa logo ANTES do botão de adicionar pessoa
                    btnAddPerson.insertAdjacentHTML('beforebegin', createPersonCardHTML(newPerson, true));
                }
            }
        });

        document.addEventListener('mouseup', () => {
            dragHandleActiveCard = null;
        });

        document.addEventListener('touchend', () => {
            dragHandleActiveCard = null;
        });

        // Adicionar Novo Setor (Botão Global) — re-referenciado pois o DOM muda a cada renderCarometro
        const currentBtnAddSector = document.getElementById('btn-add-carometro-sector');
        if (currentBtnAddSector) {
            // Clona para remover eventos anteriores (evita empilhar chamadas duplicadas)
            const freshBtn = currentBtnAddSector.cloneNode(true);
            currentBtnAddSector.parentNode.replaceChild(freshBtn, currentBtnAddSector);
            
            freshBtn.addEventListener('click', async () => {
                const newId = generateId();
                const newSector = {
                    id: newId,
                    titleHTML: 'Novo Setor',
                    people: []
                };

                activeCarometroTabId = newId;

                dynamicContainer.querySelectorAll('.carometro-section-wrapper').forEach(sec => {
                    sec.classList.add('hidden');
                });

                if (tabsBar) {
                    tabsBar.querySelectorAll('.carometro-tab-btn').forEach(btn => btn.classList.remove('active'));

                    const tabBtn = document.createElement('button');
                    tabBtn.className = 'carometro-tab-btn active';
                    tabBtn.textContent = 'Novo Setor';
                    tabBtn.dataset.targetId = newId;
                    tabBtn.addEventListener('click', () => {
                        activeCarometroTabId = newId;
                        tabsBar.querySelectorAll('.carometro-tab-btn').forEach(btn => btn.classList.remove('active'));
                        tabBtn.classList.add('active');
                        dynamicContainer.querySelectorAll('.carometro-section-wrapper').forEach(sec => {
                            sec.classList.toggle('hidden', sec.dataset.id !== newId);
                        });
                    });
                    tabsBar.appendChild(tabBtn);
                }

                dynamicContainer.insertAdjacentHTML('beforeend', createSectorHTML(newSector, true));
                const newSection = dynamicContainer.lastElementChild;
                const titleEl = newSection?.querySelector('.carometro-title');
                if (titleEl) {
                    titleEl.focus();
                    titleEl.addEventListener('input', () => {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = titleEl.innerHTML;
                        const newTitle = tempDiv.textContent.trim() || 'Sem Título';
                        const tabBtn = tabsBar?.querySelector(`.carometro-tab-btn[data-target-id="${newId}"]`);
                        if (tabBtn) tabBtn.textContent = newTitle;
                    });
                }
            });
        }

        // Seleção de Nova Imagem (com upload opcional)
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file && currentPhotoTarget) {
                const originalSrc = currentPhotoTarget.src;
                
                if (supabaseClient) {
                    try {
                        currentPhotoTarget.src = 'https://placehold.co/300x400/e2e8f0/a0aec0?text=Enviando...';
                        
                        // uploadToSupabaseStorage já comprime internamente
                        const url = await uploadToSupabaseStorage('media_uploads', 'carometro', file);
                        if (url) {
                            currentPhotoTarget.src = url;
                        } else {
                            currentPhotoTarget.src = originalSrc;
                            alert('Falha ao enviar imagem pro servidor.');
                        }
                    } catch(err) {
                        currentPhotoTarget.src = originalSrc;
                        console.error('Erro no upload da foto do carômetro:', err);
                    }
                } else {
                    compressImage(file, (compressedBase64) => {
                        currentPhotoTarget.src = compressedBase64;
                    });
                }
            }
            fileInput.value = ''; // Reset
        });

        // Lógica do Toolbar Flutuante de Texto (reaproveitada e adaptada)
        viewCarometro.addEventListener('focusin', (e) => {
            if (isEditingCarometro && textToolbar && e.target.contentEditable === "true") {
                const rect = e.target.getBoundingClientRect();
                const containerRect = viewCarometro.getBoundingClientRect();
                textToolbar.style.display = 'flex';
                textToolbar.style.top = `${rect.top - containerRect.top + viewCarometro.scrollTop - 45}px`;
                textToolbar.style.left = `${rect.left - containerRect.left + (rect.width/2) - (textToolbar.offsetWidth/2)}px`;
            }
        });

        document.addEventListener('click', (e) => {
            if (isEditingCarometro && textToolbar) {
                const isEditable = e.target.contentEditable === "true";
                const isToolbar = textToolbar.contains(e.target);
                const isEditBtn = btnEditCarometro.contains(e.target);
                
                if (!isEditable && !isToolbar && !isEditBtn) {
                    textToolbar.style.display = 'none';
                }
            }
        });

        if (textToolbar) {
            textToolbar.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.execCommand(btn.dataset.command, false, null);
                });
            });

            const colorPicker = document.getElementById('toolbar-color-picker');
            if (colorPicker) {
                colorPicker.addEventListener('input', (e) => {
                    document.execCommand('foreColor', false, e.target.value);
                });
            }

            const fontSizeSelect = document.getElementById('toolbar-font-size');
            if (fontSizeSelect) {
                fontSizeSelect.addEventListener('change', (e) => {
                    document.execCommand('fontSize', false, e.target.value);
                });
            }

            const fontNameSelect = document.getElementById('toolbar-font-name');
            if (fontNameSelect) {
                fontNameSelect.addEventListener('change', (e) => {
                    document.execCommand('fontName', false, e.target.value);
                });
            }

            textToolbar.addEventListener('mousedown', (e) => {
                if (e.target.tagName !== 'SELECT' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'OPTION') {
                    e.preventDefault();
                }
            });
        }
    }
});
