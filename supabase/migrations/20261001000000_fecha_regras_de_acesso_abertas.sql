-- ========================================================
-- Fecha regras de acesso que estavam abertas demais
-- ========================================================
-- Achado em 2026-09-30, ao exportar a estrutura da produção para montar o
-- staging. Regras antigas (anteriores ao modelo empresa → médico → paciente)
-- continuavam valendo junto com as novas, e como regras do Postgres se somam
-- com OU, as abertas anulavam as restritas:
--
--   1. Essenciais, Tópicos e Fomes e Forças: "Permitir modificação para
--      admins em ..." usava `true` — qualquer usuário logado, até paciente,
--      alterava ou apagava qualquer card.
--   2. Tópicos e Fomes e Forças: "Permitir leitura pública de ..." usava
--      `true` — qualquer pessoa, até sem login, lia TODAS as pastas, inclusive
--      as de um médico ou de um paciente específico, passando por cima da
--      liberação por paciente (can_view_topic / can_view_virtue).
--   3. Arquivos de livros (bucket privado "books"): visitante sem login
--      podia ler, enviar e apagar arquivos.
--   4. Arquivos de mídia (bucket "media_uploads"): qualquer pessoa, sem
--      login, podia enviar, alterar e apagar arquivos.
--
-- O que continua funcionando igual:
--   - admin/editor seguem editando tudo (is_editor_or_admin());
--   - médico segue editando o próprio banco, o da empresa (colegas) e o que
--     é de paciente dele — as regras que já existiam para isso ficam, e
--     entram as que faltavam para os itens (topic_items/virtue_items) da
--     empresa e de paciente, que antes só funcionavam por causa da regra
--     aberta;
--   - Essenciais continuam com leitura pública (vocabulário comum do app);
--   - livros: leitura por qualquer usuário logado (o paciente abre o livro
--     liberado por URL assinada); envio e exclusão por admin/editor/médico.
--     O envio grande (função "books") usa a chave de serviço e não depende
--     destas regras;
--   - mídias: o bucket segue público para LEITURA (URLs públicas das
--     imagens); enviar/alterar/apagar passa a exigir admin/editor/médico.
--
-- Desfazer: scripts/6-desfazer-seguranca.sql recria exatamente as regras
-- antigas.

begin;

-- 1 e 2. Essenciais, Tópicos e Fomes e Forças --------------------------

drop policy if exists "Permitir modificação para admins em core_cards" on public.core_cards;
create policy "Escrita restrita a editores/admins em core_cards" on public.core_cards
    for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin());

drop policy if exists "Permitir modificação para admins em topics" on public.topics;
drop policy if exists "Permitir leitura pública de topics" on public.topics;
create policy "Escrita restrita a editores/admins em topics" on public.topics
    for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin());
create policy "Escrita de médicos em topics de seus pacientes" on public.topics
    for all to authenticated
    using ((patient_id is not null) and public.is_doctor_of_patient(patient_id))
    with check ((patient_id is not null) and public.is_doctor_of_patient(patient_id));

drop policy if exists "Permitir modificação para admins em topic_items" on public.topic_items;
drop policy if exists "Permitir leitura pública de topic_items" on public.topic_items;
create policy "Escrita restrita a editores/admins em topic_items" on public.topic_items
    for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin());
create policy "Escrita de médicos no banco da empresa em topic_items" on public.topic_items
    for all to authenticated
    using (exists (select 1 from public.topics t where t.id = topic_items.topic_id
        and t.doctor_user_id is not null and t.patient_id is null
        and t.company_id is not null and t.company_id = public.user_company_id()))
    with check (exists (select 1 from public.topics t where t.id = topic_items.topic_id
        and t.doctor_user_id is not null and t.patient_id is null
        and t.company_id is not null and t.company_id = public.user_company_id()));
create policy "Escrita de médicos em topic_items de seus pacientes" on public.topic_items
    for all to authenticated
    using (exists (select 1 from public.topics t where t.id = topic_items.topic_id
        and t.patient_id is not null and public.is_doctor_of_patient(t.patient_id)))
    with check (exists (select 1 from public.topics t where t.id = topic_items.topic_id
        and t.patient_id is not null and public.is_doctor_of_patient(t.patient_id)));

drop policy if exists "Permitir modificação para admins em virtues" on public.virtues;
drop policy if exists "Permitir leitura pública de virtues" on public.virtues;
create policy "Escrita restrita a editores/admins em virtues" on public.virtues
    for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin());
create policy "Escrita de médicos em virtues de seus pacientes" on public.virtues
    for all to authenticated
    using ((patient_id is not null) and public.is_doctor_of_patient(patient_id))
    with check ((patient_id is not null) and public.is_doctor_of_patient(patient_id));

drop policy if exists "Permitir modificação para admins em virtue_items" on public.virtue_items;
drop policy if exists "Permitir leitura pública de virtue_items" on public.virtue_items;
create policy "Escrita restrita a editores/admins em virtue_items" on public.virtue_items
    for all to authenticated using (public.is_editor_or_admin()) with check (public.is_editor_or_admin());
create policy "Escrita de médicos no banco da empresa em virtue_items" on public.virtue_items
    for all to authenticated
    using (exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
        and v.doctor_user_id is not null and v.patient_id is null
        and v.company_id is not null and v.company_id = public.user_company_id()))
    with check (exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
        and v.doctor_user_id is not null and v.patient_id is null
        and v.company_id is not null and v.company_id = public.user_company_id()));
create policy "Escrita de médicos em virtue_items de seus pacientes" on public.virtue_items
    for all to authenticated
    using (exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
        and v.patient_id is not null and public.is_doctor_of_patient(v.patient_id)))
    with check (exists (select 1 from public.virtues v where v.id = virtue_items.virtue_id
        and v.patient_id is not null and public.is_doctor_of_patient(v.patient_id)));

-- 3. Arquivos de livros ----------------------------------------------------

drop policy if exists "Anon pode deletar do bucket books" on storage.objects;
drop policy if exists "Anon pode ler bucket books" on storage.objects;
drop policy if exists "Anon pode upload no bucket books" on storage.objects;
create policy "Livros: leitura por usuários logados" on storage.objects
    for select to authenticated using (bucket_id = 'books');
create policy "Livros: envio por admin, editor ou médico" on storage.objects
    for insert to authenticated
    with check (bucket_id = 'books' and (public.is_editor_or_admin() or public.is_doctor()));
create policy "Livros: exclusão por admin, editor ou médico" on storage.objects
    for delete to authenticated
    using (bucket_id = 'books' and (public.is_editor_or_admin() or public.is_doctor()));

-- 4. Arquivos de mídia -----------------------------------------------------

drop policy if exists "Permitir tudo 187cpx3_1" on storage.objects;
drop policy if exists "Permitir tudo 187cpx3_2" on storage.objects;
drop policy if exists "Permitir tudo 187cpx3_3" on storage.objects;
create policy "Mídias: envio por admin, editor ou médico" on storage.objects
    for insert to authenticated
    with check (bucket_id = 'media_uploads' and (public.is_editor_or_admin() or public.is_doctor()));
create policy "Mídias: alteração por admin, editor ou médico" on storage.objects
    for update to authenticated
    using (bucket_id = 'media_uploads' and (public.is_editor_or_admin() or public.is_doctor()));
create policy "Mídias: exclusão por admin, editor ou médico" on storage.objects
    for delete to authenticated
    using (bucket_id = 'media_uploads' and (public.is_editor_or_admin() or public.is_doctor()));

commit;
