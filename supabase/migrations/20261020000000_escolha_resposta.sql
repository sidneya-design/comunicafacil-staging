-- ========================================================
-- Exercício Escolha a Resposta (game_kind = 'choice')
-- ========================================================
-- Uma pergunta e de 2 a 4 alternativas; a pessoa toca na certa (ou nas
-- certas, quando a pergunta pede mais de uma). Mesmo molde do Ditado: cada
-- exercício é uma linha de `exercises` (nome|cor do card, tamanho/cor/fonte
-- do texto em syllables_*), a pergunta fica em exercise_items.word e a
-- liberação por paciente é a mesma dos outros exercícios
-- (patient_exercise_flags).
--
-- exercise_items.choices guarda as alternativas da pergunta, na ordem:
-- [{"text": "de manhã", "correct": true}, {"text": "à tarde", "correct": false}]
-- Fica vazia nos outros tipos de exercício.
--
-- Cada resposta vira uma linha em activity_results (activity = 'choice'),
-- com as colunas do Ditado: answer_text (o que escolheu), accuracy (%),
-- listens (vezes que ouviu a pergunta), first_key_ms (até o primeiro toque),
-- moves (alternativas erradas escolhidas) e attempt.

begin;

alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables', 'audio', 'audio-real', 'reading-text', 'monte-frase', 'mirror', 'dictation', 'choice'));

alter table public.exercise_items
    add column if not exists choices jsonb
    check (choices is null or jsonb_typeof(choices) = 'array');

commit;
