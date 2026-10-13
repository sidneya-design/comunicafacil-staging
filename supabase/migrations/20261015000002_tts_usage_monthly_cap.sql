-- ========================================================
-- Trava mensal de uso do Google TTS (cota grátis)
-- ========================================================
-- O Google cobra as vozes Chirp 3 HD acima de 1 milhão de caracteres por mês,
-- e a API só tem limite por minuto. A função "chat" soma aqui os caracteres
-- que gerou no Google em cada mês e, ao chegar em 900 mil, para de gerar
-- áudio novo no Google até o mês virar (usa a voz da Microsoft). Áudios já
-- guardados no cache continuam tocando normalmente.
--   * month: 'AAAA-MM' (UTC);
--   * escrita: só a função, com a chave de serviço (via add_tts_usage);
--   * leitura: admin (a aba "Voz do app" mostra o consumo do mês).

create table if not exists public.tts_usage (
    month text primary key,
    google_chars bigint not null default 0,
    updated_at timestamptz not null default now()
);
alter table public.tts_usage enable row level security;

create policy "Leitura de tts_usage pelo admin" on public.tts_usage
    for select to authenticated using (public.is_admin());

-- Soma atômica (dois pedidos ao mesmo tempo não perdem contagem).
create or replace function public.add_tts_usage(p_month text, p_chars bigint)
returns bigint language sql security definer set search_path = public
as $$
    insert into public.tts_usage (month, google_chars, updated_at)
    values (p_month, p_chars, now())
    on conflict (month) do update
        set google_chars = public.tts_usage.google_chars + excluded.google_chars,
            updated_at = now()
    returning google_chars;
$$;
revoke all on function public.add_tts_usage(text, bigint) from public, anon, authenticated;
