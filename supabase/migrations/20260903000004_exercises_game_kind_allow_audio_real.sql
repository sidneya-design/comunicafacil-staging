-- ========================================================
-- Libera game_kind = 'audio-real' em exercises
-- ========================================================
-- exercises_game_kind_check só permitia 'naming'/'afasia'/'syllables'/
-- 'audio' (esse último de uma constraint já ajustada direto no banco de
-- staging antes desta migration, fora do controle de versão — mantido aqui
-- pra não quebrar linhas existentes com esse valor). O Exercício com Áudio
-- Real (saveAudioExerciseToDB em app.js) usa game_kind = 'audio-real' e
-- estava sendo barrado nessa constraint na hora de salvar, com o insert
-- caindo silenciosamente pro fallback local (IndexedDB) sem persistir no
-- servidor.
alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables', 'audio', 'audio-real'));
