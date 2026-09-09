-- ========================================================
-- Médicos da empresa editam (em cima do original) o exercício que o
-- admin enviou direto pra empresa deles
-- ========================================================
-- Até aqui, exercício global do admin (doctor_user_id null) só podia ser
-- "forkado" por um médico (cópia própria, o original nunca muda) — mesmo
-- quando o admin já tinha mandado aquele conteúdo especificamente pra uma
-- empresa (company_id setado, sem paciente). Times que gerenciam esse
-- conteúdo junto com o admin precisam editar a mesma linha, não duplicar.
--
-- Só UPDATE (não INSERT/DELETE): times editam o que já existe, mas criar
-- ou apagar linha da empresa continua exclusivo do admin.
create policy "Edição de médicos no exercício que o admin mandou pra empresa"
    on public.exercises for update to authenticated
    using (doctor_user_id is null and patient_id is null and company_id is not null and company_id = public.user_company_id())
    with check (doctor_user_id is null and patient_id is null and company_id is not null and company_id = public.user_company_id());

-- exercise_items não tem company_id próprio — sobe/desce junto com o
-- exercise_id do pai, então a condição olha pra tabela exercises (mesmo
-- padrão de "Escrita de médicos em exercise_items do próprio banco").
-- Aqui precisa de "for all" mesmo (não só update): salvar edição apaga os
-- itens antigos e insere os novos do zero (ver saveExercisePlaylistToDB).
create policy "Edição de médicos em exercise_items do exercício da empresa"
    on public.exercise_items for all to authenticated
    using (exists (
        select 1 from public.exercises e where e.id = exercise_items.exercise_id
        and e.doctor_user_id is null and e.patient_id is null
        and e.company_id is not null and e.company_id = public.user_company_id()
    ))
    with check (exists (
        select 1 from public.exercises e where e.id = exercise_items.exercise_id
        and e.doctor_user_id is null and e.patient_id is null
        and e.company_id is not null and e.company_id = public.user_company_id()
    ));
