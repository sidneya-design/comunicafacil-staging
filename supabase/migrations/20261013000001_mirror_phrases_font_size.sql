-- ========================================================
-- Espelho: tamanho do texto por frase
-- ========================================================
-- Em px, igual ao syllables_size dos exercícios — mas por frase, não pelo
-- deck todo, já que frase curta e frase longa pedem tamanhos bem diferentes.
-- Nulo = automático (tamanho que se ajusta à largura da tela).
alter table public.mirror_phrases
    add column if not exists font_size integer
        check (font_size is null or font_size between 16 and 200);
