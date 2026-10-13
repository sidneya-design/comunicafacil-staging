-- ========================================================
-- Cache de áudio do TTS no servidor (bucket tts-cache)
-- ========================================================
-- A função "chat" guarda aqui cada áudio que gera, identificado por serviço +
-- voz + hash(velocidade + texto). Na próxima vez que QUALQUER usuário pedir o
-- mesmo texto na mesma voz, a função devolve o arquivo pronto em vez de pagar
-- o Google de novo (e responde mais rápido).
--
-- Bucket privado e sem nenhuma policy de propósito: só a função lê e grava,
-- com a chave de serviço (que ignora RLS). Navegador nenhum acessa direto.
insert into storage.buckets (id, name, public)
values ('tts-cache', 'tts-cache', false)
on conflict (id) do nothing;
