import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Injetadas automaticamente pelo runtime de Edge Functions do Supabase.
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Mesmo padrão de admin-users: identifica quem chamou pelo token da
    // sessão, nunca confia em nada vindo do payload pra isso.
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Não autenticado." }, 401);

    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: callerData, error: callerErr } = await callerClient.auth.getUser();
    if (callerErr || !callerData?.user) return json({ error: "Sessão inválida." }, 401);
    const caller = callerData.user;

    // Cliente com service_role: só usado depois de confirmar que quem
    // chamou é médico ou admin.
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

    const { data: callerRole } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", caller.id)
      .maybeSingle();

    const callerIsAdmin = callerRole?.role === "admin";
    const callerIsDoctor = callerRole?.role === "doctor";
    if (!callerIsAdmin && !callerIsDoctor) {
      return json({ error: "Apenas médicos ou administradores podem gerenciar pacientes." }, 403);
    }

    // Empresa do médico que chamou — paciente pode ter mais de um médico
    // responsável na prática, então "é meu paciente?" (abaixo, canManagePatient)
    // passa a valer tanto pro dono exato quanto pra colega da mesma empresa.
    let callerCompanyId: string | null = null;
    if (callerIsDoctor) {
      const { data: membership } = await admin
        .from("company_members")
        .select("company_id")
        .eq("user_id", caller.id)
        .maybeSingle();
      callerCompanyId = membership?.company_id ?? null;
    }

    async function canManagePatient(patientId: string): Promise<boolean> {
      if (!callerIsDoctor) return true; // admin já filtrado antes de chegar aqui
      const { data: patient } = await admin
        .from("patients")
        .select("doctor_user_id, company_id")
        .eq("id", patientId)
        .maybeSingle();
      if (!patient) return false;
      return patient.doctor_user_id === caller.id
        || (!!callerCompanyId && patient.company_id === callerCompanyId);
    }

    const { action, payload } = await req.json();

    switch (action) {
      case "list": {
        // Admin pode listar os pacientes de um médico específico (payload.doctorUserId)
        // ou de todos; médico vê os próprios + os dos colegas da mesma empresa
        // (paciente pode ter mais de um médico responsável na prática).
        let query = admin
          .from("patients")
          .select("id, user_id, doctor_user_id, company_id, name, active, created_at")
          .order("name");

        if (callerIsDoctor) {
          query = callerCompanyId
            ? query.or(`doctor_user_id.eq.${caller.id},company_id.eq.${callerCompanyId}`)
            : query.eq("doctor_user_id", caller.id);
        } else if (payload?.doctorUserId) {
          query = query.eq("doctor_user_id", payload.doctorUserId);
        }

        const { data: patients, error } = await query;
        if (error) throw error;

        // Junta e-mail/último acesso (só disponíveis via Auth Admin, não na tabela).
        const { data: usersPage, error: usersErr } = await admin.auth.admin.listUsers({ perPage: 200 });
        if (usersErr) throw usersErr;
        const userMap = new Map(usersPage.users.map((u) => [u.id, u]));

        const result = (patients ?? []).map((p) => {
          const u = userMap.get(p.user_id);
          return {
            id: p.id,
            userId: p.user_id,
            doctorUserId: p.doctor_user_id,
            companyId: p.company_id,
            name: p.name,
            active: p.active,
            createdAt: p.created_at,
            email: u?.email ?? null,
            lastSignInAt: u?.last_sign_in_at ?? null,
          };
        });

        return json({ patients: result });
      }

      case "create": {
        const { email, password, name } = payload ?? {};
        if (!email || !password) return json({ error: "E-mail e senha são obrigatórios." }, 400);
        if (String(password).length < 6) return json({ error: "A senha precisa ter ao menos 6 caracteres." }, 400);

        let doctorUserId = caller.id;
        let companyId = payload?.companyId;

        if (callerIsDoctor) {
          const { data: membership } = await admin
            .from("company_members")
            .select("company_id")
            .eq("user_id", caller.id)
            .maybeSingle();
          if (!membership) return json({ error: "Seu usuário não está vinculado a nenhuma empresa." }, 400);
          companyId = membership.company_id;
        } else {
          // Admin criando em nome de um médico específico.
          if (!payload?.doctorUserId || !companyId) {
            return json({ error: "Informe doctorUserId e companyId." }, 400);
          }
          doctorUserId = payload.doctorUserId;
        }

        const { data: created, error } = await admin.auth.admin.createUser({
          email,
          password,
          email_confirm: true,
          user_metadata: name ? { full_name: name } : undefined,
        });
        if (error) throw error;

        const { error: roleErr } = await admin
          .from("user_roles")
          .upsert({ user_id: created.user!.id, role: "patient" });
        if (roleErr) throw roleErr;

        const { error: patientErr } = await admin
          .from("patients")
          .insert({ user_id: created.user!.id, doctor_user_id: doctorUserId, company_id: companyId, name });
        if (patientErr) throw patientErr;

        return json({ patient: { userId: created.user!.id, email: created.user!.email, name } });
      }

      case "setName": {
        const { patientId, userId, name } = payload ?? {};
        if (!patientId || !userId) return json({ error: "patientId e userId são obrigatórios." }, 400);

        if (!(await canManagePatient(patientId))) {
          return json({ error: "Paciente não encontrado." }, 404);
        }

        const { error: authErr } = await admin.auth.admin.updateUserById(userId, { user_metadata: { full_name: name } });
        if (authErr) throw authErr;
        const { error: nameErr } = await admin.from("patients").update({ name }).eq("id", patientId);
        if (nameErr) throw nameErr;

        return json({ ok: true });
      }

      case "setPassword": {
        const { patientId, userId, password } = payload ?? {};
        if (!patientId || !userId) return json({ error: "patientId e userId são obrigatórios." }, 400);
        if (!password || String(password).length < 6) {
          return json({ error: "A senha precisa ter ao menos 6 caracteres." }, 400);
        }

        if (!(await canManagePatient(patientId))) {
          return json({ error: "Paciente não encontrado." }, 404);
        }

        const { error } = await admin.auth.admin.updateUserById(userId, { password });
        if (error) throw error;

        return json({ ok: true });
      }

      // Desativa/reativa sem apagar — mesmo mecanismo (ban) de admin-users.
      case "setActive": {
        const { patientId, userId, active } = payload ?? {};
        if (!patientId || !userId) return json({ error: "patientId e userId são obrigatórios." }, 400);

        if (!(await canManagePatient(patientId))) {
          return json({ error: "Paciente não encontrado." }, 404);
        }

        const { error: authErr } = await admin.auth.admin.updateUserById(userId, {
          ban_duration: active ? "none" : "876000h",
        });
        if (authErr) throw authErr;
        const { error: activeErr } = await admin.from("patients").update({ active }).eq("id", patientId);
        if (activeErr) throw activeErr;

        return json({ ok: true });
      }

      default:
        return json({ error: `Ação desconhecida: ${action}` }, 400);
    }
  } catch (error) {
    console.error("Erro na Edge Function doctor-patients:", error);
    return json({ error: error instanceof Error ? error.message : String(error) }, 500);
  }
});
