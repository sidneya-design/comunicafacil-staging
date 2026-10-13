-- ========================================================
-- Exercício Espelho como tipo de exercício (game_kind = 'mirror')
-- ========================================================
-- O Espelho segue o molde do Exercício de Sílabas: cada exercício é uma linha
-- de `exercises` (game_kind 'mirror', nome|cor do card, tamanho/cor/fonte do
-- texto em syllables_*), as frases ficam em exercise_items.word, e a
-- liberação por paciente é a mesma dos outros exercícios
-- (patient_exercise_flags). Sem isso, exercises_game_kind_check barrava o
-- insert (mesmo caso de 'audio-real' e 'reading-text').
--
-- A lista inclui 'monte-frase' (já usado no staging) pra esta migration não
-- derrubar esse tipo em nenhum dos ambientes.
alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables', 'audio', 'audio-real', 'reading-text', 'monte-frase', 'mirror'));

-- Limpeza do primeiro formato do Espelho (banco de frases próprio), que só
-- chegou a existir no staging. Na produção estes comandos não fazem nada.
drop table if exists public.patient_mirror_flags;
drop table if exists public.mirror_phrases;
drop function if exists public.can_view_mirror_phrase(uuid, uuid);
drop function if exists public.can_view_mirror_phrase(uuid, uuid, uuid);
drop function if exists public.can_view_mirror_phrase(bigint, uuid, uuid, uuid);
