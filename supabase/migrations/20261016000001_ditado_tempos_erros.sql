-- ========================================================
-- Ditado: tempos de escrita, erros de letra e correções
-- ========================================================
-- Mais detalhe por resposta do Ditado em activity_results (o Monte a Frase
-- deixa vazio):
--   first_key_ms   da frase aparecer até a primeira tecla;
--   typing_ms      da primeira tecla até Conferir;
--   letter_errors  letras faltando, sobrando ou trocadas em relação à frase
--                  (sem maiúscula nem pontuação; acento e espaço contam);
--   corrections    quantas vezes a pessoa apagou enquanto escrevia.
-- Respostas anteriores ficam com essas colunas vazias.

alter table public.activity_results
    add column if not exists first_key_ms integer check (first_key_ms is null or first_key_ms >= 0),
    add column if not exists typing_ms integer check (typing_ms is null or typing_ms >= 0),
    add column if not exists letter_errors integer check (letter_errors is null or letter_errors >= 0),
    add column if not exists corrections integer check (corrections is null or corrections >= 0);
