-- ========================================================
-- Adiciona audio_url em exercise_items
-- ========================================================
-- Novo campo opcional pro item de exercício: URL (Storage) de um áudio
-- gravado de verdade, usado pelo Exercício com Áudio Real em vez da voz
-- sintética da Azure (ver app.js, saveAudioExerciseToDB e o botão de ouvir
-- em renderCurrentPlaylistItem). Sem esse campo preenchido, o player cai
-- pro TTS de sempre.
alter table public.exercise_items
    add column if not exists audio_url text;
