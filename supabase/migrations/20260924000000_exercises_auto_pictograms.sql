-- ========================================================
-- Adiciona auto_pictograms em exercises
-- ========================================================
-- Opção por exercício (Exercício com Slides): quando false, o player não
-- busca pictograma automático do ARASAAC pros slides sem imagem própria —
-- o slide fica só com a palavra (e a legenda de sílabas, se houver). Ver
-- app.js, renderCurrentPlaylistItem. Default true mantém o comportamento
-- de sempre pros exercícios já existentes.
alter table public.exercises
    add column if not exists auto_pictograms boolean not null default true;
