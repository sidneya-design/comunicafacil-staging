-- ========================================================
-- Espelho: liberação de frases por paciente (mesmo molde de Exercícios/Mídias)
-- ========================================================
-- Até aqui o paciente via automaticamente as frases globais e todo o banco do
-- próprio terapeuta/empresa (20261013000000). Passa a seguir o modelo de
-- exercises/medias (20260823000000_global_content_requires_release.sql):
--   * paciente só vê frase do banco do terapeuta OU global do admin se o
--     terapeuta liberou essa frase pra ele (patient_mirror_flags);
--   * frase criada "dentro" do paciente (patient_id) já nasce liberada pra ele;
--   * terapeuta vê o próprio banco, o da empresa e o global (pra escolher o
--     que liberar); admin/editor veem tudo (gerenciam o banco global).

create table if not exists public.patient_mirror_flags (
    patient_id uuid not null references public.patients(id) on delete cascade,
    phrase_id bigint not null references public.mirror_phrases(id) on delete cascade,
    visible boolean not null default true,
    updated_at timestamptz not null default now(),
    primary key (patient_id, phrase_id)
);
alter table public.patient_mirror_flags enable row level security;

create policy "Leitura de patient_mirror_flags" on public.patient_mirror_flags
    for select to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id)
           or patient_id = public.current_patient_id());

create policy "Escrita de médicos em patient_mirror_flags de seus pacientes"
    on public.patient_mirror_flags for all to authenticated
    using (public.is_admin() or public.is_doctor_of_patient(patient_id))
    with check (public.is_admin() or public.is_doctor_of_patient(patient_id));

-- A função antiga não recebia o id da frase (não havia flag por item).
drop policy if exists "Leitura de mirror_phrases" on public.mirror_phrases;
drop function if exists public.can_view_mirror_phrase(uuid, uuid, uuid);

create or replace function public.can_view_mirror_phrase(
    target_phrase_id bigint,
    target_company_id uuid,
    target_patient_id uuid,
    target_doctor_user_id uuid
)
returns boolean language sql stable security definer set search_path = public
as $$
    select
        public.is_editor_or_admin()
        -- terapeuta vê o banco global do admin, pra navegar/liberar
        or (target_company_id is null and target_patient_id is null and target_doctor_user_id is null and public.is_doctor())
        or (target_patient_id is not null and public.current_patient_id() = target_patient_id)
        or (target_patient_id is not null and public.is_doctor_of_patient(target_patient_id))
        or (target_doctor_user_id is not null and target_doctor_user_id = auth.uid())
        or (target_company_id is not null and target_patient_id is null
            and public.user_company_id() = target_company_id)
        -- paciente vê frase (do terapeuta OU global) só se foi liberada pra ele
        or exists (
            select 1 from public.patient_mirror_flags pmf
            join public.patients p on p.id = pmf.patient_id
            where pmf.phrase_id = target_phrase_id
              and p.user_id = auth.uid()
              and pmf.visible = true
        );
$$;
grant execute on function public.can_view_mirror_phrase(bigint, uuid, uuid, uuid) to authenticated;

create policy "Leitura de mirror_phrases" on public.mirror_phrases
    for select using (public.can_view_mirror_phrase(id, company_id, patient_id, doctor_user_id));
