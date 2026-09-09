-- ========================================================
-- Fecha lacuna do "banco compartilhado por empresa": exercise_items
-- ========================================================
-- A migration company_shared_doctor_bank (20260903000005) já libera escrita
-- de médicos da mesma empresa na linha de public.exercises (doctor_user_id
-- de um colega, company_id batendo) — mas nunca cobriu exercise_items, a
-- tabela onde o conteúdo de fato mora (palavras/slides). Resultado: o médico
-- dono edita normal, mas um colega da empresa trava com "new row violates
-- row-level security policy for table exercise_items" ao salvar (delete +
-- insert dos itens, ver saveExercisePlaylistToDB/saveSyllablesExerciseToDB/
-- saveAudioExerciseToDB).
create policy "Escrita de médicos no banco da empresa em exercise_items"
    on public.exercise_items for all to authenticated
    using (exists (
        select 1 from public.exercises e where e.id = exercise_items.exercise_id
        and e.doctor_user_id is not null and e.patient_id is null
        and e.company_id is not null and e.company_id = public.user_company_id()
    ))
    with check (exists (
        select 1 from public.exercises e where e.id = exercise_items.exercise_id
        and e.doctor_user_id is not null and e.patient_id is null
        and e.company_id is not null and e.company_id = public.user_company_id()
    ));
