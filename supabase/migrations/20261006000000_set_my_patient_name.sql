-- ========================================================
-- Paciente muda o próprio nome em "Meu perfil"
-- ========================================================
-- O nome do paciente que o médico vê em "Meus Pacientes" fica em
-- patients.name. Liberar UPDATE na tabela para o paciente deixaria ele
-- trocar também o médico, a clínica e o "ativo" da própria ficha — então,
-- em vez de uma regra de update, esta função muda SÓ o nome, e só da ficha
-- de quem está logado. (Médico e admin mudam o nome da conta direto pelo
-- Auth, em user_metadata.full_name; o app faz isso para todos.)

create or replace function public.set_my_patient_name(new_name text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
    clean_name text := nullif(btrim(regexp_replace(coalesce(new_name, ''), '\s+', ' ', 'g')), '');
begin
    if clean_name is null then
        raise exception 'O nome não pode ficar vazio.';
    end if;
    if char_length(clean_name) > 120 then
        raise exception 'O nome pode ter no máximo 120 caracteres.';
    end if;
    update public.patients set name = clean_name where user_id = auth.uid();
end;
$$;

revoke all on function public.set_my_patient_name(text) from public;
grant execute on function public.set_my_patient_name(text) to authenticated;
