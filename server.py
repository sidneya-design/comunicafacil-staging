from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
import os
import json
import base64
import asyncio
import re
from xml.sax.saxutils import escape as xml_escape
import edge_tts

app = Flask(__name__, static_folder='.', static_url_path='')  # serve static files from project root
CORS(app)  # Permite que o app.js local faça requisições para este servidor

# Configurações do Azure
AZURE_URL = "https://geniantis-org.services.ai.azure.com/api/projects/proj-geniantis-agente/openai/v1/responses"
AZURE_SPEECH_REGION = "eastus2"

# Carrega variáveis do arquivo .env local se ele existir
if os.path.exists('.env'):
    with open('.env') as f:
        for line in f:
            if line.strip() and not line.startswith('#'):
                try:
                    key, val = line.strip().split('=', 1)
                    os.environ[key.strip()] = val.strip()
                except ValueError:
                    pass

API_KEY = os.environ.get("AZURE_AI_KEY")

if not API_KEY:
    print("\n⚠️ AVISO: A variavel de ambiente AZURE_AI_KEY nao foi encontrada.")
    print("Por favor, crie um arquivo '.env' neste diretorio ou defina a variavel no seu terminal.")
    print("Exemplo de arquivo .env:")
    print("AZURE_AI_KEY=sua_chave_aqui\n")

my_agent = "falafacil"
my_version = "11"

# O agente Azure AI Foundry mantém o histórico da conversa do lado dele (Responses API
# com estado). Por isso, em vez de reenviar `messages` inteiro a cada chamada, mandamos
# só a mensagem nova + o id da última resposta — evita payload crescendo sem limite e
# reprocessamento de contexto repetido a cada mensagem. O id vem e volta do cliente
# (que já guarda o chatHistory) em vez de ficar numa variável global do servidor: um
# global era compartilhado por todas as abas/usuários e sobrevivia a reload de página,
# então uma conversa "vazava" id de resposta pra outra e a IA respondia fora de contexto.
def get_agent_response(messages, previous_response_id=None):
    headers = {
        "Content-Type": "application/json",
        "api-key": API_KEY
    }
    if not messages:
        input_messages = [{"role": "user", "content": ""}]
    elif previous_response_id:
        # Conversa já em andamento: a Azure lembra tudo via previous_response_id,
        # só a mensagem nova precisa ser mandada.
        input_messages = [messages[-1]]
    else:
        # Primeira chamada da conversa: manda tudo, incluindo a instrução de
        # personalidade (sempre o primeiro item de messages) — sem isso a Azure
        # nunca recebia a instrução e respondia com o comportamento padrão do modelo.
        input_messages = messages

    payload = {
        "input": input_messages,
        "agent_reference": {
            "name": my_agent,
            "version": my_version,
            "type": "agent_reference"
        }
    }
    if previous_response_id:
        payload["previous_response_id"] = previous_response_id

    response = requests.post(AZURE_URL, headers=headers, json=payload)
    if response.status_code != 200:
        raise Exception(f"Erro na Azure ({response.status_code}): {response.text}")
    res_data = response.json()
    reply_text = res_data['output'][0]['content'][0]['text']
    return reply_text, res_data.get('id')

def transcribe_audio(audio_bytes):
    # A Azure espera o formato "WAV" da tabela oficial (container + cabeçalho RIFF,
    # codec PCM por dentro) — o Content-Type abaixo só descreve o codec/taxa desse WAV,
    # não indica PCM headerless. audio_bytes já vem como um .wav completo do navegador.
    url = f"https://{AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR"
    headers = {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
        "Accept": "application/json",
        "User-Agent": "ComunicaFacilSTT"
    }
    response = requests.post(url, headers=headers, data=audio_bytes)
    if response.status_code != 200:
        raise Exception(f"Erro no Azure STT ({response.status_code}): {response.text}")
    data = response.json()
    if data.get("RecognitionStatus") != "Success":
        raise Exception(f"Azure STT falhou: {data.get('RecognitionStatus')}")
    return data.get("DisplayText", "")

# A voz não deve ler emojis nem marcação markdown (asteriscos, cerquilhas etc.)
# que a IA às vezes inclui nas respostas — eles continuam aparecendo na tela,
# só saem do texto falado.
EMOJI_TTS_RE = re.compile(
    "["
    "\U0001F000-\U0001FAFF"  # emojis e pictogramas (inclui os rostos como o "sorridente")
    "☀-➿"          # simbolos diversos e dingbats (sol, check, coracao)
    "\U0001F1E6-\U0001F1FF"  # bandeiras
    "⬀-⯿"          # setas e estrelas
    "️‍⃣"     # seletores de variacao e juntadores de emoji
    "]+",
    flags=re.UNICODE,
)

def clean_text_for_tts(text):
    text = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', text)  # links markdown -> só o rótulo
    text = re.sub(r'[*_#`~]+', '', text)                   # negrito/itálico/títulos/código
    text = EMOJI_TTS_RE.sub('', text)
    return re.sub(r'\s{2,}', ' ', text).strip()

# TTS gratuito (edge-tts) usado SOMENTE pelo botão de som das atividades/exercícios.
# O fluxo do chat com IA continua usando o Azure TTS oficial (synthesize_text) abaixo.
EDGE_TTS_VOICE = "pt-BR-FranciscaNeural"

def synthesize_text_edge(text, rate=None):
    text = clean_text_for_tts(text)
    async def _run():
        communicate = edge_tts.Communicate(text, EDGE_TTS_VOICE, rate=rate) if rate else edge_tts.Communicate(text, EDGE_TTS_VOICE)
        chunks = []
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                chunks.append(chunk["data"])
        return b"".join(chunks)
    audio_bytes = asyncio.run(_run())
    if not audio_bytes:
        raise Exception("edge-tts nao retornou audio")
    return base64.b64encode(audio_bytes).decode('utf-8')

# Narração de livros (aba Livros): função própria, separada de synthesize_text_edge,
# porque o leitor deixa a pessoa escolher a voz do narrador — synthesize_text_edge
# continua fixo em EDGE_TTS_VOICE e é usado por todo o resto do app (Carômetro,
# Jogos, Essenciais). Nunca dar a synthesize_text_edge um parâmetro de voz de novo:
# foi exatamente isso que vazou a voz do livro pro app inteiro da última vez.
def synthesize_text_edge_voiced(text, voice="pt-BR-AntonioNeural", rate="-12%", pitch="-2Hz"):
    text = clean_text_for_tts(text)
    if not text:
        return None
    async def _run():
        communicate = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch)
        chunks = []
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                chunks.append(chunk["data"])
        return b"".join(chunks)
    audio_bytes = asyncio.run(_run())
    if not audio_bytes:
        raise Exception("edge-tts nao retornou audio")
    return base64.b64encode(audio_bytes).decode('utf-8')

def synthesize_text(text):
    text = xml_escape(clean_text_for_tts(text))  # escape: um '&' na resposta quebrava o SSML
    url = f"https://{AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1"
    headers = {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
        "User-Agent": "ComunicaFacilTTS"
    }
    ssml = f"""<speak version='1.0' xml:lang='pt-BR'>
        <voice xml:lang='pt-BR' xml:gender='Female' name='pt-BR-FranciscaNeural'>
            {text}
        </voice>
    </speak>"""
    response = requests.post(url, headers=headers, data=ssml.encode('utf-8'))
    if response.status_code != 200:
        raise Exception(f"Erro no Azure TTS ({response.status_code}): {response.text}")
    return base64.b64encode(response.content).decode('utf-8')

@app.route('/tts', methods=['POST'])
def tts_route():
    # Usado somente pela aba Livros (book-reader.js) para narração com voz
    # selecionável. Não confundir com o TTS de ttsText da rota /chat abaixo,
    # que serve o resto do app e é sempre FranciscaNeural.
    try:
        data = request.json or {}
        text = (data.get('text') or '').strip()
        voice = data.get('voice') or 'pt-BR-AntonioNeural'
        rate = data.get('rate') or '-12%'
        pitch = data.get('pitch') or '-2Hz'
        if not text:
            return jsonify({"error": "Texto para leitura não fornecido"}), 400
        audio_b64 = synthesize_text_edge_voiced(text, voice, rate, pitch)
        return jsonify({"audio": audio_b64})
    except Exception as e:
        print(f"Erro na rota /tts: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/transcribe', methods=['POST'])
def transcribe_route():
    # Protótipo do jogo "Nomeação por Fala": só transcreve o áudio (sem
    # passar pelo agente de IA nem gerar resposta em voz), pra comparar a
    # transcrição com a palavra-alvo do jogo.
    try:
        if 'audio' not in request.files:
            return jsonify({"error": "Nenhum áudio recebido"}), 400
        audio_bytes = request.files['audio'].read()
        transcription = transcribe_audio(audio_bytes)
        return jsonify({"transcription": transcription})
    except Exception as e:
        print(f"Erro na rota /transcribe: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/chat', methods=['POST'])
def chat():
    try:
        # Verifica se é multipart/form-data (envio de áudio)
        if 'audio' in request.files:
            audio_file = request.files['audio']
            messages_json = request.form.get('messages', '[]')
            messages = json.loads(messages_json)
            previous_response_id = request.form.get('previous_response_id') or None

            # Transcreve áudio
            audio_bytes = audio_file.read()
            transcription = transcribe_audio(audio_bytes)

            # Adiciona mensagem do usuário
            messages.append({"role": "user", "content": transcription})

            # Obtém resposta do agente
            reply, response_id = get_agent_response(messages, previous_response_id)

            # Sintetiza resposta para áudio
            audio_base64 = synthesize_text(reply)

            return jsonify({
                "reply": reply,
                "audio": audio_base64,
                "user_transcription": transcription,
                "response_id": response_id
            })

        else:
            # Fluxo de texto clássico
            data = request.json or {}

            # TTS puro (botão de som dos exercícios): só sintetiza o texto recebido,
            # sem passar pelo agente de IA. Usa o edge-tts (gratuito, sem chave) —
            # o Azure fica reservado ao fluxo do chat com IA.
            tts_text = (data.get('ttsText') or '').strip()
            if tts_text:
                return jsonify({"audio": synthesize_text_edge(tts_text, data.get('ttsRate'))})

            messages = data.get('messages', [])
            generate_audio = data.get('generateAudio', False)
            previous_response_id = data.get('previous_response_id')

            if not messages:
                return jsonify({"error": "Nenhuma mensagem recebida"}), 400

            reply, response_id = get_agent_response(messages, previous_response_id)

            audio_base64 = None
            if generate_audio:
                audio_base64 = synthesize_text(reply)

            return jsonify({
                "reply": reply,
                "audio": audio_base64,
                "response_id": response_id
            })
            
    except Exception as e:
        print(f"Erro no processamento da rota /chat: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("\n" + "="*50)
    print("🚀 Servidor IA do Comunica Fácil Iniciado!")
    print("URL do Backend: http://127.0.0.1:5001")
    print("="*50 + "\n")
    # Adicionar rotas estáticas antes de iniciar o servidor
    # Serve index.html na raiz
    @app.route('/')
    def serve_index():
        return send_from_directory('.', 'index.html')

    # Serve quaisquer outros arquivos HTML estáticos (ex.: login.html, complete-frase.html)
    @app.route('/<path:filename>')
    def serve_file(filename):
        # Evita servir arquivos fora do diretório do projeto
        if os.path.isfile(filename):
            return send_from_directory('.', filename)
        else:
            return jsonify({"error": "Arquivo não encontrado"}), 404

    @app.after_request
    def add_no_cache_headers(response):
        response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response

    app.run(host='0.0.0.0', port=5001, debug=True)
