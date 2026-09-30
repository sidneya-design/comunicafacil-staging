-- ========================================================
-- Log de ações administrativas dos médicos (auditoria pro admin)
-- ========================================================
-- Diferente de usage_events (insights de engajamento do paciente), esta
-- tabela é sobre prestação de contas do médico: o que ele criou, editou,
-- excluiu ou liberou/bloqueou pra um paciente. Só o admin (dono do sistema)
-- lê; cada médico só escreve as próprias linhas (actor_user_id = auth.uid()).

create table if not exists public.admin_action_log (
    id uuid primary key default gen_random_uuid(),
    actor_user_id uuid references auth.users(id) not null,
    actor_email text not null,
    company_id uuid references public.companies(id),
    action text not null check (action in ('create', 'update', 'delete', 'release', 'unrelease')),
    entity_type text not null,
    entity_label text,
    detail text,
    created_at timestamptz not null default now()
);

create index if not exists admin_action_log_company_idx on public.admin_action_log (company_id, created_at desc);
create index if not exists admin_action_log_actor_idx on public.admin_action_log (actor_user_id, created_at desc);

alter table public.admin_action_log enable row level security;

create policy "Admin lê admin_action_log" on public.admin_action_log
    for select to authenticated
    using (public.is_admin());

-- Sem policy de update/delete: o log é append-only, nem o próprio médico
-- nem o admin conseguem alterar/apagar uma linha já gravada pelo app (só
-- via SQL direto, se precisar de uma correção manual).
create policy "Médico grava a própria ação em admin_action_log" on public.admin_action_log
    for insert to authenticated
    with check (actor_user_id = auth.uid() and public.is_doctor());
