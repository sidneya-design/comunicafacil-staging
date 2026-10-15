-- ========================================================
-- Exercício Ditado (game_kind = 'dictation') — atividade de avaliação
-- ========================================================
-- A pessoa vê e ouve a frase e tem que escrevê-la. Mesmo molde do Espelho:
-- cada exercício é uma linha de `exercises` (nome|cor do card, tamanho/cor/
-- fonte do texto em syllables_*), as frases ficam em exercise_items.word e a
-- liberação por paciente é a mesma dos outros exercícios
-- (patient_exercise_flags).
--
-- dictation_mode diz se a frase continua na tela enquanto a pessoa escreve
-- ('copy', cópia) ou some quando ela começa a escrever ('dictation', só de
-- ouvido e de memória).
--
-- Cada resposta vira uma linha em activity_results (activity = 'dictation'),
-- com o que a pessoa escreveu, o acerto em % (por palavra) e quantas vezes
-- ouviu a frase. As colunas novas ficam vazias para o Monte a Frase.

begin;

alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables', 'audio', 'audio-real', 'reading-text', 'monte-frase', 'mirror', 'dictation'));

alter table public.exercises
    add column if not exists dictation_mode text
    check (dictation_mode is null or dictation_mode in ('copy', 'dictation'));

alter table public.activity_results
    add column if not exists answer_text text,
    add column if not exists accuracy smallint check (accuracy is null or accuracy between 0 and 100),
    add column if not exists listens smallint check (listens is null or listens >= 0);

commit;
