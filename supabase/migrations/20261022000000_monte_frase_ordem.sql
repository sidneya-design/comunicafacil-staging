-- ========================================================
-- Adiciona shuffle_items em exercises
-- ========================================================
-- Opção por conjunto do Monte a Frase: quando true, a ordem das frases é
-- sorteada a cada início (ver monte-frase.js, shuffleSentences). O padrão
-- passa a ser a ordem do cadastro — inclusive pros conjuntos já existentes,
-- que antes sempre sorteavam. As palavras de cada frase continuam
-- embaralhadas — é o exercício.
alter table public.exercises
    add column if not exists shuffle_items boolean not null default false;
