-- ========================================================
-- Ditado: refazer a frase (número da tentativa)
-- ========================================================
-- Quando a resposta não sai 100% certa, a pessoa pode tentar de novo. Cada
-- tentativa é uma linha própria em activity_results; attempt diz qual é
-- (1 = primeira). Respostas de antes desta coluna ficam vazias e contam como
-- primeira tentativa. O Monte a Frase deixa vazio.

alter table public.activity_results
    add column if not exists attempt smallint check (attempt is null or attempt >= 1);
