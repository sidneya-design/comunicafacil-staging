// supabase.js
// Initialize Supabase client for the Comunicafacil project
// Replace the placeholder values with your actual Supabase project URL and anon public key.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Override opt-in só-localhost (?sb=staging) pra testar contra o projeto de
// staging do modelo multi-tenant — mesmo padrão de app.js/login.html. Sem o
// parâmetro (uso normal), continua 100% em produção como sempre foi.
const isLocalAppHost = ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
const useStagingSupabase = isLocalAppHost && new URLSearchParams(window.location.search).get('sb') === 'staging';

const SUPABASE_URL = useStagingSupabase
    ? 'https://iqiiilddodttvrxodwbd.supabase.co'
    : 'https://rrubmvykindvilptjhma.supabase.co';
const SUPABASE_ANON_KEY = useStagingSupabase
    ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaWlpbGRkb2R0dHZyeG9kd2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNjg4NjEsImV4cCI6MjEwMTk0NDg2MX0.Po7_bLntUw-RFt92Lw2WIsrJoasrrg1VBWl7zm1vDSM'
    : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWJtdnlraW5kdmlscHRqaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODE2OTksImV4cCI6MjA5ODA1NzY5OX0.4eKcRhUReuaKaaq4ftIOWe6vvB9qxL4Sjiii-3QX5eM';

// O cache de TTS em áudio (ver TTS_STORAGE_PREFIX em complete-frase.js/app.js) cresce sem
// limite no localStorage. Com o tempo isso estoura a quota do navegador, e daí um setItem
// comum do SDK falha ao persistir o token de sessão, deixando a sessão sem ser salva e
// causando um loop de login. Libera esse cache (facilmente reconstruído) quando necessário.
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
const resilientAuthStorage = {
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

// Este módulo é carregado tanto dentro de iframes embutidos em app.html (Livros, Complete a
// Frase) quanto, potencialmente, de forma isolada. Quando embutido, app.js (janela pai) já
// mantém sua própria instância do cliente Supabase renovando a sessão sozinha — se esta
// instância também tentasse renovar o mesmo token compartilhado no localStorage, as duas
// competiriam pela rotação do refresh token (o Supabase invalida o token anterior a cada
// renovação), podendo derrubar a sessão do usuário do nada. Só a instância "dona" da aba
// (não embutida) deve renovar; a embutida só lê a sessão que o pai já mantém em dia.
const isEmbeddedContext = window.self !== window.top || new URLSearchParams(window.location.search).get('embedded') === '1';

// "Sair de verdade" ao fechar a aba/navegador — sem isso, o token de sessão
// persistia no localStorage indefinidamente e reabrir o app entrava direto
// como o último usuário logado (problema num Chromebook compartilhado entre
// pacientes na clínica, e uma sessão velha/corrompida podia ficar presa por
// muito tempo sem ninguém perceber). sessionStorage some quando a aba/janela
// fecha de verdade, mas sobrevive a um F5 normal — é o sinal que usamos pra
// distinguir "acabei de reabrir o app" de "só recarreguei a página".
const TAB_ALIVE_KEY = 'comunica_tab_alive_v1';
const isFreshBrowserLaunch = !isEmbeddedContext && !sessionStorage.getItem(TAB_ALIVE_KEY);
if (!isEmbeddedContext) {
    sessionStorage.setItem(TAB_ALIVE_KEY, '1');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { storage: resilientAuthStorage, autoRefreshToken: !isEmbeddedContext }
});

if (isFreshBrowserLaunch) {
    // scope: 'local' só limpa a sessão salva neste navegador, sem depender
    // de uma chamada de rede pro Supabase revogar o token no servidor — não
    // pode travar esperando resposta numa clínica com internet ruim.
    supabase.auth.signOut({ scope: 'local' }).catch(() => { /* sem sessão pra limpar, tudo bem */ });
}

// Optionally expose for debugging
window.supabase = supabase;
