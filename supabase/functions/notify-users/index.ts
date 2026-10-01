import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import nodemailer from "npm:nodemailer@9.0.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
const GMAIL_SMTP_USER = Deno.env.get("GMAIL_SMTP_USER") ?? "";
const GMAIL_APP_PASSWORD = (Deno.env.get("GMAIL_APP_PASSWORD") ?? "").replace(/\s/g, "");
const APP_PUBLIC_URL = Deno.env.get("APP_PUBLIC_URL") ?? "";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// O Supabase bloqueia SMTP nas portas 25 e 587. O Gmail usa TLS direto na 465.
function gmailTransporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GMAIL_SMTP_USER, pass: GMAIL_APP_PASSWORD },
  });
}

// Lembrete do médico ("hora de praticar") para um ou vários pacientes, com
// recado opcional. Cada paciente lembrado ganha uma linha em
// patient_reminders (o app mostra ao paciente até ele clicar em "Entendi") e
// quem tem e-mail recebe a mensagem — num envio só, em cópia oculta.
// Pode enviar: o médico do paciente, um colega da mesma empresa (mesma regra
// de is_doctor_of_patient) ou admin/editor.
async function sendReminders(
  // deno-lint-ignore no-explicit-any
  admin: any,
  caller: { id: string; user_metadata?: Record<string, unknown> },
  callerRole: string,
  body: Record<string, unknown>,
) {
  const patientIds = [...new Set((Array.isArray(body.patientIds) ? body.patientIds : []).map(String))];
  if (!patientIds.length) return json({ error: "Escolha pelo menos um paciente." }, 400);
  if (patientIds.length > 300) return json({ error: "Envie para no máximo 300 pacientes por vez." }, 400);
  const message = String(body.message ?? "").trim().slice(0, 500) || null;

  const { data: patients, error: patientsError } = await admin
    .from("patients")
    .select("id, user_id, doctor_user_id, company_id, active")
    .in("id", patientIds);
  if (patientsError) throw patientsError;
  if ((patients ?? []).length !== patientIds.length) return json({ error: "Paciente não encontrado." }, 404);

  const isPrivileged = ["editor", "admin"].includes(callerRole);
  if (!isPrivileged) {
    const { data: member } = await admin.from("company_members").select("company_id").eq("user_id", caller.id).maybeSingle();
    const callerCompany = member?.company_id ?? null;
    const notMine = patients.some((p: { doctor_user_id: string; company_id: string | null }) =>
      p.doctor_user_id !== caller.id && !(callerCompany && p.company_id === callerCompany));
    if (callerRole !== "doctor" || notMine) {
      return json({ error: "Você só pode enviar lembretes para os seus pacientes." }, 403);
    }
  }

  const activePatients = patients.filter((p: { active: boolean }) => p.active);
  if (!activePatients.length) return json({ recipientCount: 0, emailCount: 0 });

  const senderName = String(caller.user_metadata?.full_name ?? "").trim() || null;
  const { error: insertError } = await admin.from("patient_reminders").insert(
    activePatients.map((p: { id: string }) => ({ patient_id: p.id, sender_user_id: caller.id, sender_name: senderName, message })),
  );
  if (insertError) throw insertError;

  // Sem Gmail configurado (ex.: staging), o lembrete fica só no app.
  const emails: string[] = [];
  if (GMAIL_SMTP_USER && GMAIL_APP_PASSWORD) for (const p of activePatients) {
    const { data: user } = await admin.auth.admin.getUserById(p.user_id);
    if (user?.user?.email && !user.user.banned_until) emails.push(user.user.email);
  }

  if (emails.length) {
    const who = senderName ? escapeHtml(senderName) : "Seu médico";
    const messageHtml = message
      ? `<div style="margin:18px 0 0;padding:14px 16px;background:#f3f4f6;border-radius:10px;font-size:17px;line-height:1.6;color:#1f2937"><strong>Recado:</strong><br>${escapeHtml(message).replaceAll("\n", "<br>")}</div>`
      : "";
    const linkHtml = APP_PUBLIC_URL
      ? `<p style="margin:20px 0 0"><a href="${escapeHtml(APP_PUBLIC_URL)}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:14px 22px;border-radius:10px;font-weight:700;font-size:16px;line-height:1">Abrir Comunica Fácil</a></p>`
      : "";
    await gmailTransporter().sendMail({
      from: `Comunica Fácil <${GMAIL_SMTP_USER}>`,
      to: GMAIL_SMTP_USER,
      bcc: emails,
      subject: "Lembrete: hora de praticar no Comunica Fácil",
      text: `Olá! ${senderName ?? "Seu médico"} lembrou você de praticar seus exercícios no Comunica Fácil.${message ? `\n\nRecado: ${message}` : ""}${APP_PUBLIC_URL ? `\n\nAbra o Comunica Fácil: ${APP_PUBLIC_URL}` : ""}`,
      html: `<div style="margin:0;background:#ffffff;font-family:Arial,sans-serif;color:#1f2937"><div style="max-width:560px;padding:28px 24px 32px"><h1 style="margin:0 0 18px;font-size:28px;line-height:1.15;color:#2563eb;font-weight:800">Hora de praticar!</h1><p style="margin:0 0 14px;font-size:18px;line-height:1.5;color:#111827">Olá!</p><p style="margin:0;font-size:18px;line-height:1.6;color:#1f2937"><strong>${who}</strong> lembrou você de praticar seus exercícios no Comunica Fácil.</p>${messageHtml}${linkHtml}<p style="margin:18px 0 0;font-size:14px;line-height:1.5;color:#6b7280">Este é um lembrete enviado pelo Comunica Fácil.</p></div></div>`,
    });
  }

  return json({ recipientCount: activePatients.length, emailCount: emails.length });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Não autenticado." }, 401);

    const callerClient = createClient(SUPABASE_URL, ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: callerData, error: callerError } = await callerClient.auth.getUser();
    if (callerError || !callerData?.user) return json({ error: "Sessão inválida." }, 401);

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);
    const { data: callerRole, error: roleError } = await admin
      .from("user_roles")
      .select("role")
      .eq("user_id", callerData.user.id)
      .maybeSingle();
    if (roleError) throw roleError;

    const body = await req.json();
    if (body?.kind === "reminder") {
      return await sendReminders(admin, callerData.user, callerRole?.role ?? "", body);
    }
    // O aviso de atividade é só e-mail; o lembrete (acima) funciona no app
    // mesmo sem o Gmail configurado.
    if (!GMAIL_SMTP_USER || !GMAIL_APP_PASSWORD) {
      return json({ error: "O Gmail ainda não foi configurado no servidor." }, 503);
    }
    const title = String(body?.title ?? "").trim().slice(0, 160);
    const category = String(body?.category ?? "Atividade").trim().slice(0, 40);
    const patientId = body?.patientId ? String(body.patientId) : null;
    if (!title) return json({ error: "O título da atividade é obrigatório." }, 400);

    let recipients: string[];

    if (patientId) {
      // Aviso pontual pro paciente dono deste conteúdo — médico responsável
      // por ele pode disparar (sem precisar ser editor/admin), mas só pra
      // esse paciente específico, nunca broadcast.
      const { data: patient, error: patientError } = await admin
        .from("patients")
        .select("id, user_id, doctor_user_id")
        .eq("id", patientId)
        .maybeSingle();
      if (patientError) throw patientError;
      if (!patient) return json({ error: "Paciente não encontrado." }, 404);

      const isOwnerDoctor = patient.doctor_user_id === callerData.user.id;
      const isPrivileged = ["editor", "admin"].includes(callerRole?.role ?? "");
      if (!isOwnerDoctor && !isPrivileged) {
        return json({ error: "Você só pode avisar os próprios pacientes." }, 403);
      }

      const { data: patientUser, error: patientUserError } = await admin.auth.admin.getUserById(patient.user_id);
      if (patientUserError) throw patientUserError;
      recipients = patientUser?.user?.email && !patientUser.user.banned_until ? [patientUser.user.email] : [];
    } else {
      if (!["editor", "admin"].includes(callerRole?.role ?? "")) {
        return json({ error: "Apenas editores e administradores podem enviar avisos pra todo mundo." }, 403);
      }

      const { data: usersPage, error: usersError } = await admin.auth.admin.listUsers({ perPage: 1000 });
      if (usersError) throw usersError;

      const { data: roles, error: rolesError } = await admin
        .from("user_roles")
        .select("user_id, role")
        .eq("role", "viewer");
      if (rolesError) throw rolesError;

      const viewerIds = new Set((roles ?? []).map((role: { user_id: string }) => role.user_id));
      recipients = usersPage.users
        .filter((user) => viewerIds.has(user.id) && user.email && !user.banned_until)
        .map((user) => user.email!);
    }

    if (recipients.length === 0) {
      return json({ recipientCount: 0, message: "Nenhum destinatário com e-mail foi encontrado." });
    }

    const safeTitle = escapeHtml(title);
    const categoryKey = category.toLowerCase();
    const feminineCategories = ["categoria", "atividade", "mídia"];
    const genderAdjective = feminineCategories.includes(categoryKey) ? "Nova" : "Novo";
    const introArticle = feminineCategories.includes(categoryKey) ? "A" : "O";
    const introCategory = categoryKey === "jogo" ? "jogo" : categoryKey;
    // category chega em texto livre do chamador (a UI só usa um enum fixo,
    // mas a function em si não valida isso) — escapa igual title, senão dá
    // pra injetar HTML no corpo do e-mail enviado a usuários reais.
    const introText = `${introArticle} ${escapeHtml(introCategory)} <strong>${safeTitle}</strong> já está disponível para você.`;
    const linkHtml = APP_PUBLIC_URL
      ? `<p style="margin:20px 0 0"><a href="${escapeHtml(APP_PUBLIC_URL)}" style="display:inline-block;background:#2563eb;color:#fff;text-decoration:none;padding:14px 22px;border-radius:10px;font-weight:700;font-size:16px;line-height:1">Abrir Comunica Fácil</a></p>`
      : "";

    await gmailTransporter().sendMail({
      from: `Comunica Fácil <${GMAIL_SMTP_USER}>`,
      to: GMAIL_SMTP_USER,
      bcc: recipients,
      subject: `${genderAdjective} ${categoryKey} disponível: ${title}`,
      text: `Olá! ${introArticle} ${introCategory} "${title}" já está disponível para você. ${APP_PUBLIC_URL ? `Abra o Comunica Fácil: ${APP_PUBLIC_URL}` : ""}`.trim(),
      html: `<div style="margin:0;background:#ffffff;font-family:Arial,sans-serif;color:#1f2937"><div style="max-width:560px;padding:28px 24px 32px"><h1 style="margin:0 0 18px;font-size:28px;line-height:1.15;color:#2563eb;font-weight:800">Novidade no Comunica Fácil</h1><p style="margin:0 0 14px;font-size:18px;line-height:1.5;color:#111827">Olá!</p><p style="margin:0;font-size:18px;line-height:1.6;color:#1f2937">${introText}</p>${linkHtml}<p style="margin:18px 0 0;font-size:14px;line-height:1.5;color:#6b7280">Este é um aviso automático do Comunica Fácil.</p></div></div>`,
    });

    return json({ recipientCount: recipients.length });
  } catch (error) {
    console.error("Erro ao enviar aviso de atividade:", error);
    return json({ error: error instanceof Error ? error.message : String(error) }, 500);
  }
});
