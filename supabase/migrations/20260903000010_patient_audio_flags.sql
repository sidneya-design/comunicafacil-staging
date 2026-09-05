-- ========================================================
-- Multi-tenant: liberação de áudios do banco por paciente
-- ========================================================
-- Mesmo padrão de exercises/medias (patient_exercise_flags/patient_media_flags):
-- audio_clips_module.sql (20260903000008) deixou isso pra "fase futura" —
-- sem isso, um clipe do banco do médico (company_id/doctor_user_id, sem
-- patient_id) nunca aparece pro paciente: can_view_scoped_content só libera
-- conteúdo de empresa pra quem tem user_company_id() (função só resolve pra
-- médico via company_members — paciente nunca bate nessa condição). Liberar
-- só a aba (patient_module_flags) não resolve isso; precisa desta tabela +
-- função dedicada, como exercises/medias já têm.

create table if not exists public.patient_audio_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    audio_id bigint not null references public.audio_clips(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, audio_id)
);
alter table public.patient_audio_flags enable row level security;

create policy "Leitura de patient_audio_flags" on public.patient_audio_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_audio_flags de seus pacientes"
    on public.patient_audio_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

create or replace function public.can_view_audio_clip(
    target_audio_id bigint,
    target_company_id uuid,
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        (target_company_id is null and target_patient_id is null and target_doctor_user_id is null)
        or public.is_admin()
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        -- médico sempre vê o próprio banco, liberado ou não pra qualquer paciente
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        -- paciente vê clipe do banco (do próprio médico) só se ele liberou esse clipe específico
        or (target_doctor_user_id is not null and exists (
                select 1 from public.patient_audio_flags paf
                join public.patients p on p.id = paf.patient_id
                where paf.audio_id = target_audio_id
                  and p.user_id = auth.uid()
                  and paf.visible = true
            ))
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id);
$$;
grant execute on function public.can_view_audio_clip(bigint, uuid, uuid, uuid) to authenticated;

drop policy if exists "Leitura pública de audio_clips" on public.audio_clips;
create policy "Leitura pública de audio_clips" on public.audio_clips
    for select using (public.can_view_audio_clip(id, company_id, patient_id, doctor_user_id));
