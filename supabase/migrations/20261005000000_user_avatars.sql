-- ========================================================
-- Foto de perfil ("Olá, nome" com a foto no topo da tela Essenciais)
-- ========================================================
-- Cada pessoa logada (paciente, médico, admin) pode pôr a própria foto
-- clicando nela no topo. O médico também põe a foto dos seus pacientes em
-- "Meus Pacientes" (útil quando o paciente não consegue sozinho).
--
-- A foto fica no bucket PRIVADO "avatars", em "<user_id>/<arquivo>.jpg"
-- (o app reduz para 256x256 antes de enviar), e é aberta por URL assinada —
-- foto de paciente é dado pessoal, não pode ficar num link público.
-- user_avatars guarda qual arquivo é a foto atual de cada pessoa.
--
-- Quem pode ver/trocar a foto de alguém (can_manage_avatar): a própria
-- pessoa, o médico do paciente (ou colega da mesma empresa —
-- is_doctor_of_patient) e o admin.

create or replace function public.can_manage_avatar(target_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
    select target_user_id = auth.uid()
        or public.is_admin()
        or exists (
            select 1 from public.patients p
            where p.user_id = target_user_id and public.is_doctor_of_patient(p.id)
        );
$$;

grant execute on function public.can_manage_avatar(uuid) to authenticated;

create table if not exists public.user_avatars (
    user_id uuid primary key references auth.users(id) on delete cascade,
    photo_path text not null,
    updated_at timestamptz not null default now()
);

alter table public.user_avatars enable row level security;

drop policy if exists "Foto: ver quem pode gerenciar" on public.user_avatars;
create policy "Foto: ver quem pode gerenciar" on public.user_avatars
    for select to authenticated using (public.can_manage_avatar(user_id));

drop policy if exists "Foto: gravar quem pode gerenciar" on public.user_avatars;
create policy "Foto: gravar quem pode gerenciar" on public.user_avatars
    for all to authenticated
    using (public.can_manage_avatar(user_id))
    with check (public.can_manage_avatar(user_id));

grant select, insert, update, delete on public.user_avatars to authenticated;

-- Bucket privado, só imagens, até 2 MB.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', false, 2097152, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
    set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

-- A primeira pasta do caminho é o user_id dono da foto.
drop policy if exists "Fotos de perfil: ler" on storage.objects;
create policy "Fotos de perfil: ler" on storage.objects
    for select to authenticated
    using (bucket_id = 'avatars' and public.can_manage_avatar(((storage.foldername(name))[1])::uuid));

drop policy if exists "Fotos de perfil: enviar" on storage.objects;
create policy "Fotos de perfil: enviar" on storage.objects
    for insert to authenticated
    with check (bucket_id = 'avatars' and public.can_manage_avatar(((storage.foldername(name))[1])::uuid));

drop policy if exists "Fotos de perfil: apagar" on storage.objects;
create policy "Fotos de perfil: apagar" on storage.objects
    for delete to authenticated
    using (bucket_id = 'avatars' and public.can_manage_avatar(((storage.foldername(name))[1])::uuid));
