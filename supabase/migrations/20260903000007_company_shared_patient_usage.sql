-- ========================================================
-- Estende leitura de uso dos pacientes pra médicos da mesma empresa
-- ========================================================
-- As policies de usage_sessions/usage_events (20260830000000) checavam
-- "p.doctor_user_id = auth.uid()" direto, duplicando a lógica de
-- is_doctor_of_patient() em vez de chamar a função — por isso a extensão
-- pra empresa feita em is_doctor_of_patient() (20260903000006) não valeu
-- aqui, e a aba "Uso e Insights" continuava vazia pra um médico
-- colega mesmo já enxergando o paciente inteiro em Meus Pacientes.

drop policy if exists "Médicos leem uso dos próprios pacientes em usage_sessions" on public.usage_sessions;
create policy "Médicos leem uso dos próprios pacientes em usage_sessions" on public.usage_sessions
    for select to authenticated
    using (exists (
        select 1 from public.patients p
        where p.user_id = usage_sessions.user_id
          and (p.doctor_user_id = auth.uid() or (p.company_id is not null and p.company_id = public.user_company_id()))
    ));

drop policy if exists "Médicos leem uso dos próprios pacientes em usage_events" on public.usage_events;
create policy "Médicos leem uso dos próprios pacientes em usage_events" on public.usage_events
    for select to authenticated
    using (exists (
        select 1 from public.patients p
        where p.user_id = usage_events.user_id
          and (p.doctor_user_id = auth.uid() or (p.company_id is not null and p.company_id = public.user_company_id()))
    ));
