-- ========================================================
-- Configurações gerais do app (começa pela voz do TTS)
-- ========================================================
-- Tabela chave → valor para ajustes que valem pro app inteiro. O primeiro é
-- 'tts_voice': a voz do Google Cloud TTS (Chirp 3 HD) escolhida pelo admin
-- na aba "Voz do app". O app lê a voz ao entrar e manda junto em cada pedido
-- de áudio; a função "chat" só aceita vozes de uma lista fixa.
--   * leitura: qualquer usuário logado (todo mundo precisa saber a voz);
--   * escrita: só admin.

create table if not exists public.app_settings (
    key text primary key,
    value text,
    updated_at timestamptz not null default now(),
    updated_by uuid references auth.users(id)
);
alter table public.app_settings enable row level security;

create policy "Leitura de app_settings" on public.app_settings
    for select to authenticated using (true);

create policy "Escrita de app_settings pelo admin" on public.app_settings
    for all to authenticated
    using (public.is_admin())
    with check (public.is_admin());
