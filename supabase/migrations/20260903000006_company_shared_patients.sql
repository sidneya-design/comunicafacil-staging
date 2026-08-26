-- ========================================================
-- Compartilha pacientes e conteúdo por paciente entre médicos da empresa
-- ========================================================
-- A migration anterior (20260903000005) compartilhou o BANCO GERAL de
-- conteúdo por empresa, mas deixou de fora de propósito o que é escopado a
-- um paciente específico — na hora, pareceu a leitura mais segura. Só que
-- o cenário real ("esse paciente tem mais de um médico") precisa desse
-- compartilhamento também: antes só o doctor_user_id do paciente conseguia
-- vê-lo e gerenciar o conteúdo dele; um colega da mesma empresa ficava
-- cego pro paciente inteiro, mesmo já enxergando o banco geral.
--
-- is_doctor_of_patient() é o helper central usado nas policies de escrita
-- "...de seus pacientes" em exercises/topics/virtues/medias/books, e nas
-- can_view_* pro ramo de paciente — estendendo só essa função, o
-- compartilhamento se propaga pra tudo que já depende dela, sem duplicar
-- lógica em cada tabela.
create or replace function public.is_doctor_of_patient(target_patient_id uuid)
returns boolean
language sql
stable security definer
set search_path to 'public'
as $$
    select exists (
        select 1 from public.patients
        where id = target_patient_id
          and (
            doctor_user_id = auth.uid()
            or (company_id is not null and company_id = public.user_company_id())
          )
    );
$$;

-- patients em si nunca teve leitura por empresa (só existia doctor_user_id
-- = auth.uid() ou user_id = auth.uid()) — sem isso, mesmo com o resto
-- liberado, a lista "Meus Pacientes" continuava vazia pra um médico novo.
create policy "Leitura de patients pela empresa" on public.patients
    for select
    using (company_id is not null and company_id = public.user_company_id());
