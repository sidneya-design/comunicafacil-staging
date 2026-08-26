-- ========================================================
-- Compartilha o banco de conteúdo por empresa entre médicos
-- ========================================================
-- Até aqui, cada médico só via/editava o próprio banco (doctor_user_id =
-- auth.uid()) — um médico novo numa empresa que já tinha outros médicos
-- entrava sem ver nada do que os colegas já criaram. A leitura via
-- can_view_exercise/topic/virtue/media/book já suportava company_id
-- (visível pra qualquer médico da mesma empresa), mas faltavam duas coisas:
-- (1) o app nunca preenchia company_id ao criar conteúdo — backfill abaixo
-- cobre o que já existe; app.js/book-reader.js passaram a preencher daqui
-- pra frente — e (2) não havia policy de ESCRITA permitindo editar o que
-- um colega da empresa criou, só ler.
--
-- patient_id is null nas policies novas: conteúdo escopado a um paciente
-- específico (de um médico específico) continua privado a esse médico —
-- só o "banco geral" (sem paciente) passa a ser compartilhado pela empresa.

-- Backfill: empresa do médico que criou cada linha (via company_members).
update public.exercises e set company_id = cm.company_id
    from public.company_members cm
    where e.doctor_user_id = cm.user_id and e.company_id is null;

update public.topics t set company_id = cm.company_id
    from public.company_members cm
    where t.doctor_user_id = cm.user_id and t.company_id is null;

update public.virtues v set company_id = cm.company_id
    from public.company_members cm
    where v.doctor_user_id = cm.user_id and v.company_id is null;

update public.medias m set company_id = cm.company_id
    from public.company_members cm
    where m.doctor_user_id = cm.user_id and m.company_id is null;

update public.books b set company_id = cm.company_id
    from public.company_members cm
    where b.doctor_user_id = cm.user_id and b.company_id is null;

-- Escrita compartilhada por empresa (aditiva — não mexe nas policies
-- existentes, só soma mais uma condição permissiva a cada tabela).
create policy "Escrita de médicos no banco da empresa em exercises" on public.exercises
    for all
    using (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id())
    with check (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id());

create policy "Escrita de médicos no banco da empresa em topics" on public.topics
    for all
    using (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id())
    with check (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id());

create policy "Escrita de médicos no banco da empresa em virtues" on public.virtues
    for all
    using (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id())
    with check (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id());

create policy "Escrita de médicos no banco da empresa em medias" on public.medias
    for all
    using (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id())
    with check (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id());

create policy "Escrita de médicos no banco da empresa em books" on public.books
    for all
    using (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id())
    with check (doctor_user_id is not null and patient_id is null and company_id is not null and company_id = public.user_company_id());
