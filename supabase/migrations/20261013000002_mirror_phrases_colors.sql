-- ========================================================
-- Espelho: cor do texto e cor do destaque (sílabas em *negrito*) por frase
-- ========================================================
-- Hex (#RRGGBB). Nulo = cor padrão da tela (texto #1f1f1f, destaque #0078ff).
alter table public.mirror_phrases
    add column if not exists text_color text
        check (text_color is null or text_color ~ '^#[0-9A-Fa-f]{6}$'),
    add column if not exists highlight_color text
        check (highlight_color is null or highlight_color ~ '^#[0-9A-Fa-f]{6}$');
