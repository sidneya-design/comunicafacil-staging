-- ========================================================
-- Espelho: editor também escreve no banco global de frases
-- ========================================================
-- A policy de escrita de 20261013000000 usava só is_admin(), mas o app trata
-- 'editor' como admin de conteúdo (isAdmin = editor || admin) e as demais
-- tabelas de conteúdo (exercises, topics, medias, books) já liberam escrita
-- pra is_editor_or_admin(). Com isso, um editor via o botão de editar a frase
-- e o update era recusado em silêncio pela RLS.
drop policy if exists "Escrita de admin e médicos em mirror_phrases do próprio banco" on public.mirror_phrases;
create policy "Escrita de admin e médicos em mirror_phrases do próprio banco" on public.mirror_phrases
    for all to authenticated
    using (public.is_editor_or_admin() or (doctor_user_id is not null and doctor_user_id = auth.uid()))
    with check (public.is_editor_or_admin() or (doctor_user_id is not null and doctor_user_id = auth.uid()));
