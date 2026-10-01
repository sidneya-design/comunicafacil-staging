-- ========================================================
-- Monte a Frase: vários conjuntos, cada um com nome próprio
-- ========================================================
-- Até aqui o Monte a Frase era um banco único: o global do admin
-- (seed_key "monte-frase-container") e um por clínica
-- (":company:<uuid>", ou ":doctor:<uuid>" para médico sem empresa).
-- Pedido: funcionar como os Reconhecimentos — cada "criar" pede um nome e
-- vira um card próprio na grade de Exercícios, liberado por paciente. O
-- médico cria para a clínica inteira (company_id); o admin cria conjuntos
-- globais.
--
-- Cada conjunto é uma linha de `exercises` com game_kind = 'monte-frase' e
-- as frases em exercise_items (role "monte-frase-card"), como antes. Um
-- conjunto mostra só as frases dele.
--
-- Os bancos únicos de antes ficam como estão, sem conversão (decisão do
-- usuário: os conjuntos começam do zero). O app não os mostra mais.
--
-- activity_results ganha exercise_id: a aba Evolução separa por conjunto.
-- Resultados anteriores ficam sem conjunto (aparecem em "Todos").

begin;

alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables', 'audio', 'audio-real', 'reading-text', 'monte-frase'));

alter table public.activity_results
    add column if not exists exercise_id bigint references public.exercises(id) on delete set null;
create index if not exists activity_results_exercise_idx on public.activity_results (exercise_id);

commit;
