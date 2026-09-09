-- ========================================================
-- Libera game_kind = 'reading-text' em exercises
-- ========================================================
-- Mesmo problema já visto com 'audio-real' (ver
-- 20260903000004_exercises_game_kind_allow_audio_real.sql):
-- exercises_game_kind_check não conhecia o novo tipo de exercício "Leitura
-- de Texto" (saveReadingTextExerciseToDB em app.js, game_kind =
-- 'reading-text'), e o insert/update era barrado na hora de salvar — caindo
-- silenciosamente pro fallback local (IndexedDB) sem persistir no servidor.
alter table public.exercises drop constraint if exists exercises_game_kind_check;
alter table public.exercises add constraint exercises_game_kind_check
    check (game_kind is null or game_kind in ('naming', 'afasia', 'syllables', 'audio', 'audio-real', 'reading-text'));
