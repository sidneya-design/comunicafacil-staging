-- ========================================================
-- Bancos de atividades por clínica (empresa)
-- ========================================================
-- Até aqui, Jogo da Memória, Memória do Alfabeto, Trilha de Forças, Complete
-- a Frase e Monte a Frase guardavam o conteúdo do médico num container só
-- dele (seed_key "<base>:doctor:<uuid>"). Pedido: tudo que um médico passa
-- tem que continuar visível pro médico que o substituir ou for adicionado à
-- mesma empresa. O app passa a usar um container por clínica
-- ("<base>:company:<uuid>", com company_id, que a RLS "banco da empresa" já
-- libera pra leitura e escrita dos colegas) — mesma ideia dos exercícios de
-- slides/sílabas do médico, que já são da empresa.
--
-- Esta migração só MOVE o que já existe, sem apagar nada:
--   1. cria o container da clínica de cada empresa que ainda não tem;
--   2. move pra ele os itens dos containers antigos dos médicos da empresa
--      (itens idênticos que já estejam lá — por exemplo, as cartas de fábrica
--      da Trilha semeadas por dois médicos — ficam onde estão, pra não
--      duplicar);
--   3. copia as liberações por paciente (patient_exercise_flags) do container
--      antigo pro da clínica, pra nenhum paciente perder acesso.
-- Os containers antigos ficam no banco, vazios (o app para de mostrá-los na
-- liberação). Médico sem empresa não muda nada. Pode rodar de novo sem efeito
-- colateral: na segunda vez não há o que mover.
--
-- Rodar ANTES (ou junto) de publicar o front que usa o banco da clínica: sem
-- ela, o médico com conteúdo antigo passa a cadastrar num banco novo e vazio.

do $$
declare
    base text;
    legacy record;
    clinic_id bigint;
begin
    foreach base in array array[
        'memory-cards-container',
        'alphabet-memory-cards-container',
        'jogo2-cards-container',
        'complete-frase-container',
        'monte-frase-container'
    ] loop
        for legacy in
            select e.id, e.title, e.doctor_user_id, cm.company_id
            from public.exercises e
            join public.company_members cm on cm.user_id = e.doctor_user_id
            where e.seed_key = base || ':doctor:' || e.doctor_user_id::text
            order by e.id
        loop
            select id into clinic_id
            from public.exercises
            where seed_key = base || ':company:' || legacy.company_id::text;

            if clinic_id is null then
                insert into public.exercises (title, visible, seed_key, doctor_user_id, company_id)
                values (legacy.title, false, base || ':company:' || legacy.company_id::text,
                        legacy.doctor_user_id, legacy.company_id)
                returning id into clinic_id;
            end if;

            update public.exercise_items as item
            set exercise_id = clinic_id
            where item.exercise_id = legacy.id
              and not exists (
                  select 1 from public.exercise_items same
                  where same.exercise_id = clinic_id
                    and same.role is not distinct from item.role
                    and same.word = item.word
                    and same.link = item.link
                    and same.image_url is not distinct from item.image_url
              );

            insert into public.patient_exercise_flags as pef (patient_id, exercise_id, visible, updated_at)
            select flag.patient_id, clinic_id, flag.visible, now()
            from public.patient_exercise_flags flag
            where flag.exercise_id = legacy.id
            on conflict (patient_id, exercise_id)
            do update set visible = pef.visible or excluded.visible,
                          updated_at = now();
        end loop;
    end loop;
end $$;

-- Conferência: um container por clínica e por atividade, com quantos itens e
-- quantas liberações de paciente cada um tem.
select
    split_part(e.seed_key, ':', 1) as atividade,
    c.name as clinica,
    (select count(*) from public.exercise_items i where i.exercise_id = e.id) as itens,
    (select count(*) from public.patient_exercise_flags f where f.exercise_id = e.id and f.visible) as pacientes_liberados
from public.exercises e
left join public.companies c on c.id = e.company_id
where e.seed_key like '%:company:%'
order by atividade, clinica;
