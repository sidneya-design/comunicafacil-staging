import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { edgeTtsSynthesize } from "./edge_tts.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Configurações do Azure
const AZURE_SPEECH_REGION = "eastus2";
const AZURE_AI_AGENT_URL = "https://geniantis-org.services.ai.azure.com/api/projects/proj-geniantis-agente/openai/v1/responses";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;

Deno.serve(async (req) => {
  // Trata requisições OPTIONS (CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Sem isso, essa function era um proxy aberto pro serviço pago da Azure
    // (chat/STT/TTS) — qualquer um que descobrisse a URL conseguia gerar
    // custo à vontade, sem estar logado no app.
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) {
      return new Response(JSON.stringify({ error: "Não autenticado." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }
    const callerClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: callerData, error: callerError } = await callerClient.auth.getUser();
    if (callerError || !callerData?.user) {
      return new Response(JSON.stringify({ error: "Sessão inválida." }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 401,
      });
    }

    // A chave só é exigida nos fluxos que falam com a Azure (chat com IA e STT).
    // O TTS das atividades (ttsText) funciona sem chave, via edge-tts gratuito.
    const apiKey = Deno.env.get("azure_ai_key");

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      if (!apiKey) {
        throw new Error("Variavel de ambiente azure_ai_key nao configurada no Supabase.");
      }
      // ----------------------------------------------------
      // FLUXO DE ÁUDIO (Speech-to-Text -> Agente -> Text-to-Speech)
      // ----------------------------------------------------
      const formData = await req.formData();
      const audioFile = formData.get("audio") as File;
      const messagesJson = formData.get("messages") as string;
      const messages = JSON.parse(messagesJson || "[]");

      if (!audioFile) {
        return new Response(
          JSON.stringify({ error: "Nenhum arquivo de audio recebido" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      // Transcreve a fala usando Azure STT
      const audioBytes = new Uint8Array(await audioFile.arrayBuffer());
      const transcription = await transcribeAudioWithAzure(audioBytes, apiKey);

      // Adiciona o texto transcrito ao historico como mensagem do usuario
      messages.push({ role: "user", content: transcription });

      // Chama o Agente Azure AI Foundry
      const reply = await getAgentResponse(messages, apiKey);

      // Gera o audio falado da resposta usando Azure TTS
      const audioBase64 = await synthesizeTextWithAzure(reply, apiKey);

      return new Response(
        JSON.stringify({ reply, audio: audioBase64, user_transcription: transcription }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );

    } else {
      // ----------------------------------------------------
      // FLUXO DE TEXTO CLÁSSICO
      // ----------------------------------------------------
      const { messages, generateAudio, ttsText, ttsRate } = await req.json();

      // TTS puro (botão de som dos exercícios): só sintetiza o texto recebido,
      // sem passar pelo agente de IA. Usa o edge-tts gratuito; se o serviço
      // não-oficial falhar e houver chave, cai no Azure TTS.
      // ttsRate (opcional): ajuste de velocidade via SSML <prosody rate>, usado
      // pelo seletor de velocidade do exercício "Leitura de Texto" — sintetizado
      // já na velocidade certa (evita o efeito robótico de esticar o áudio no
      // navegador via playbackRate). Sem ttsRate, mantém o -15% padrão de sempre.
      if (ttsText) {
        let audioBase64: string;
        try {
          audioBase64 = encodeBase64(await edgeTtsSynthesize(cleanTextForSpeech(ttsText), undefined, ttsRate));
        } catch (edgeError) {
          console.error("edge-tts falhou, tentando Azure:", (edgeError as Error).message);
          if (!apiKey) throw edgeError;
          audioBase64 = await synthesizeTextWithAzure(ttsText, apiKey);
        }
        return new Response(
          JSON.stringify({ audio: audioBase64 }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
        );
      }

      if (!apiKey) {
        throw new Error("Variavel de ambiente azure_ai_key nao configurada no Supabase.");
      }

      if (!messages) {
        return new Response(
          JSON.stringify({ error: "Nenhuma mensagem enviada" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      const reply = await getAgentResponse(messages, apiKey);

      let audioBase64 = null;
      if (generateAudio) {
        audioBase64 = await synthesizeTextWithAzure(reply, apiKey);
      }

      return new Response(
        JSON.stringify({ reply, audio: audioBase64 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

  } catch (error) {
    console.error("Erro na Edge Function:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});

// Helper: Fala com o Agente de IA na Azure
async function getAgentResponse(messages: any[], apiKey: string): Promise<string> {
  const payload = {
    input: messages,
    agent_reference: {
      name: "falafacil",
      version: "11",
      type: "agent_reference"
    }
  };

  const response = await fetch(AZURE_AI_AGENT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure AI Agent respondeu com erro ${response.status}: ${errText}`);
  }

  const resData = await response.json();
  return resData.output[0].content[0].text;
}

// Helper: Azure Speech-to-Text (Transcrição de Voz)
async function transcribeAudioWithAzure(audioBytes: Uint8Array, apiKey: string): Promise<string> {
  const azureSttUrl = `https://${AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR`;
  
  const response = await fetch(azureSttUrl, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
      "Accept": "application/json",
      "User-Agent": "ComunicaFacilSTT"
    },
    body: audioBytes
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure STT falhou com erro ${response.status}: ${errText}`);
  }

  const data = await response.json();
  if (data.RecognitionStatus !== "Success") {
    throw new Error(`Azure STT falhou em reconhecer a fala: ${data.RecognitionStatus}`);
  }
  
  return data.DisplayText;
}

// A voz não deve ler emojis nem marcação markdown (asteriscos, cerquilhas etc.)
// que a IA às vezes inclui — eles continuam na tela, só saem do texto falado.
export function cleanTextForSpeech(text: string): string {
  return text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links markdown -> só o rótulo
    .replace(/[*_#`~]+/g, "") // negrito/itálico/títulos/código
    .replace(/[\p{Extended_Pictographic}\u{FE0F}\u{200D}\u{20E3}\u{1F1E6}-\u{1F1FF}]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function escapeXmlText(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Helper: Azure Text-to-Speech (Síntese de Voz)
async function synthesizeTextWithAzure(text: string, apiKey: string): Promise<string> {
  const azureTtsUrl = `https://${AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;

  // Formatando o SSML com a voz feminina FranciscaNeural
  // (texto limpo de emojis/markdown e escapado: um '&' na resposta quebrava o SSML)
  const ssml = `<speak version='1.0' xml:lang='pt-BR'>
    <voice xml:lang='pt-BR' xml:gender='Female' name='pt-BR-FranciscaNeural'>
      <prosody rate='-15%'>
        ${escapeXmlText(cleanTextForSpeech(text))}
      </prosody>
    </voice>
  </speak>`;

  const response = await fetch(azureTtsUrl, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
      "User-Agent": "ComunicaFacilTTS"
    },
    body: ssml
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure TTS falhou com erro ${response.status}: ${errText}`);
  }

  const audioArrayBuffer = await response.arrayBuffer();
  return encodeBase64(audioArrayBuffer);
}
