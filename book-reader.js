// book-reader.js — ComunicaFácil Netflix-Style Library Module

import { supabase } from './supabase.js?v=3';

// ── Config ──────────────────────────────────────────────
const MAX_FILE_SIZE = 200 * 1024 * 1024; // 200 MB

// ── Auth guard (mesmo padrão usado em app.js) ─────────────
// Quando embutida como aba do app (iframe em app.html), o próprio app.html
// já exige login antes de tornar essa aba acessível — então o redirect
// próprio só se aplica quando a página é acessada isoladamente pela URL.
function isLocalAppHost() {
  return ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
}
// Contexto de médico "dentro" de um paciente (Fase 6c) — app.html passa
// esses parâmetros na URL do iframe quando o médico clica "Livros" na tela
// de pacientes (ver enterPatientContext/buildBooksFrameUrl em app.js).
const urlParams = new URLSearchParams(window.location.search);
// buildBooksFrameUrl() em app.js sempre inclui ?embedded=1 nessa URL — usar esse marcador
// explícito (em vez de só `window.self !== window.top`) evita que qualquer iframe de
// terceiros que carregue book-reader.html seja tratado como "dentro do app" e escape do
// redirect de sessão (mesmo padrão de embeddedMode em complete-frase.js).
const isEmbedded = urlParams.get('embedded') === '1';
const doctorPatientContext = urlParams.get('patientId')
  ? { id: urlParams.get('patientId'), name: urlParams.get('patientName') || '' }
  : null;

supabase.auth.getSession().then(({ data }) => {
  if (!data?.session && !isLocalAppHost() && !isEmbedded) {
    window.location.href = 'index.html';
  }
}).catch(e => console.warn('Erro ao checar sessão:', e));

supabase.auth.onAuthStateChange((event) => {
  if (event === 'SIGNED_OUT' && !isLocalAppHost() && !isEmbedded) {
    window.location.href = 'index.html';
  }
});

// Dono do livro (uploaded_by) e papel do usuário atual — usado só pra
// decidir se mostra os botões de editar/excluir num card, espelhando a
// mesma regra da policy "Modificação isolada por perfil em books"
// (uploaded_by = auth.uid() OR is_editor_or_admin() OR dono do paciente).
// Sem isso, o botão aparecia pra qualquer livro e só falhava depois de
// clicar, com um alert — confuso pro médico entender por que não conseguia
// mexer num livro alheio da biblioteca geral.
let currentUserId = null;
let isEditorOrAdmin = false;
let currentUserCompanyId = null;
let currentUserInfoLoaded = false;
async function ensureCurrentUserInfo() {
  if (currentUserInfoLoaded) return;
  const { data: { user } } = await supabase.auth.getUser();
  currentUserId = user?.id || null;
  if (currentUserId) {
    const { data } = await supabase.rpc('is_editor_or_admin');
    isEditorOrAdmin = data === true;
    // Grava em todo livro que o médico sobe, pra outros médicos da mesma
    // empresa também verem (mesmo mecanismo de app.js/currentUserCompanyId).
    const { data: memberRow } = await supabase
      .from('company_members').select('company_id').eq('user_id', currentUserId).maybeSingle();
    currentUserCompanyId = memberRow?.company_id || null;
  }
  currentUserInfoLoaded = true;
}

// ── Helpers ────────────────────────────────────────────────
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function deriveCoverPath(filePath) {
  if (!filePath) return null;
  const filename = filePath.split('/').pop();
  const uuid = filename.replace(/\.[^/.]+$/, '');
  return `covers/${uuid}.jpg`;
}

// ── Gêneros ────────────────────────────────────────────────
const GENRES = [
  'Romance', 'Ficção', 'Fantasia', 'Suspense e Mistério',
  'Biografia', 'Autoajuda', 'Infantil', 'Poesia', 'Arte e Cultura',
  'Não-ficção', 'Outros'
];
const NEW_GENRE_VALUE = '__new_genre__';
const CUSTOM_GENRES_KEY = 'comunicafacil_custom_book_genres';

function loadCustomGenres() {
  try {
    const raw = localStorage.getItem(CUSTOM_GENRES_KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch (e) {
    return [];
  }
}

function saveCustomGenres(list) {
  try {
    localStorage.setItem(CUSTOM_GENRES_KEY, JSON.stringify(list));
  } catch (e) {
    // Quota cheia: libera o cache de TTS (fácil de reconstruir, gravado por app.js/
    // complete-frase.js) e tenta de novo, pra não perder o gênero recém-cadastrado.
    try {
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith('comunica_tts_v1:') || key.startsWith('comunica_tts_v2:'))) keysToRemove.push(key);
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
      localStorage.setItem(CUSTOM_GENRES_KEY, JSON.stringify(list));
    } catch (e2) { console.warn('Erro ao salvar gênero customizado (possível limite de quota):', e2); }
  }
}

// Gêneros fixos + os cadastrados pelo usuário, sempre com "Outros" por último.
function getAllGenres() {
  const custom = loadCustomGenres();
  const base = GENRES.filter(g => g !== 'Outros');
  return [...base, ...custom, 'Outros'];
}

// Adiciona um gênero novo (evita duplicar, ignorando maiúsc./minúsc.) e devolve o nome final.
function addCustomGenre(rawName) {
  const name = (rawName || '').trim();
  if (!name) return null;
  const existing = getAllGenres();
  const match = existing.find(g => g.toLowerCase() === name.toLowerCase());
  if (match) return match;
  const custom = loadCustomGenres();
  custom.push(name);
  saveCustomGenres(custom);
  return name;
}

function genreOptionsHtml() {
  const options = getAllGenres().map(g => `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`);
  options.push(`<option value="${NEW_GENRE_VALUE}">+ Novo gênero...</option>`);
  return options.join('');
}

// Se o usuário escolher "+ Novo gênero...", pede o nome e seleciona o gênero criado.
// Retorna false (e volta o select para o valor anterior) se o usuário cancelar.
function handleGenreSelectChange(selectEl, previousValue) {
  if (selectEl.value !== NEW_GENRE_VALUE) return true;
  const name = prompt('Nome do novo gênero:');
  const created = addCustomGenre(name);
  refreshGenreSelects();
  if (created) {
    selectEl.value = created;
  } else {
    selectEl.value = previousValue;
  }
  return Boolean(created);
}

function refreshGenreSelects() {
  [bookGenreSelect, editGenreSelect].forEach(select => {
    if (!select) return;
    const current = select.value;
    select.innerHTML = genreOptionsHtml();
    if (current && current !== NEW_GENRE_VALUE) select.value = current;
  });
}

// ── UI Elements ─────────────────────────────────────────
const navUploadBtn = document.getElementById('nav-upload-btn');
const uploadModal = document.getElementById('upload-modal');
const closeModal = document.getElementById('close-modal');
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('book-file');
const uploadBtn = document.getElementById('upload-btn');
const uploadStatus = document.getElementById('upload-status');

const libraryView = document.getElementById('library-view');
const readerView = document.getElementById('reader-view');
const backToLibrary = document.getElementById('back-to-library');
const viewer = document.getElementById('viewer');
const readerTitle = document.getElementById('reader-title');
const readingProgressEl = document.getElementById('reading-progress');

function updateReadingProgress(text) {
  if (readingProgressEl) readingProgressEl.textContent = text || '';
}

const genreRowsContainer = document.getElementById('genre-rows-container');
const bookGenreSelect = document.getElementById('book-genre');
const emptyMsg = document.getElementById('empty-msg');

const themeDarkBtn = document.getElementById('theme-dark-btn');
const themeLightBtn = document.getElementById('theme-light-btn');
const fontSizeDecBtn = document.getElementById('font-size-dec');
const fontSizeIncBtn = document.getElementById('font-size-inc');
const fontSizeLabel = document.getElementById('font-size-label');
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');

// ── State ────────────────────────────────────────────────
let currentBook = null;
let currentViewer = null;
let currentEpubLocation = null;
let utterance = null;

// ── Tamanho da fonte (stepper Aa) ──────────────────────────
const FONT_SIZES = [
  { value: '1rem', label: 'Pequeno' },
  { value: '1.15rem', label: 'Normal' },
  { value: '1.4rem', label: 'Grande' },
  { value: '1.8rem', label: 'Gigante' }
];
let fontSizeIndex = 1;

function applyFontSize(index, persist = true) {
  fontSizeIndex = Math.max(0, Math.min(FONT_SIZES.length - 1, index));
  const { value, label } = FONT_SIZES[fontSizeIndex];
  if (fontSizeLabel) fontSizeLabel.textContent = label;
  if (fontSizeDecBtn) fontSizeDecBtn.disabled = fontSizeIndex === 0;
  if (fontSizeIncBtn) fontSizeIncBtn.disabled = fontSizeIndex === FONT_SIZES.length - 1;
  if (persist) localStorage.setItem('fontSize', value);
  if (currentViewer?.type === 'epub' && currentViewer.rendition) {
    currentViewer.rendition.themes.fontSize(value);
  }
}

fontSizeDecBtn?.addEventListener('click', () => applyFontSize(fontSizeIndex - 1));
fontSizeIncBtn?.addEventListener('click', () => applyFontSize(fontSizeIndex + 1));

// ── Preferences ──────────────────────────────────────────
// O tema é aplicado só no #reader-view (leitor), não na página inteira —
// a biblioteca mantém sempre o visual escuro estilo Netflix.
function applyTheme(theme) {
  readerView.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeDarkBtn?.classList.toggle('active', theme === 'dark');
  themeLightBtn?.classList.toggle('active', theme === 'light');
}

function applyPreferences() {
  applyTheme('light'); // Tema claro como padrão

  const savedFontSize = localStorage.getItem('fontSize') || '1.15rem';
  const savedIndex = FONT_SIZES.findIndex(f => f.value === savedFontSize);
  applyFontSize(savedIndex >= 0 ? savedIndex : 1, false);
}
applyPreferences();

themeDarkBtn?.addEventListener('click', () => applyTheme('dark'));
themeLightBtn?.addEventListener('click', () => applyTheme('light'));

// ── Modal Logic ──────────────────────────────────────────
navUploadBtn.addEventListener('click', () => {
  uploadModal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
  uploadModal.style.display = 'none';
});

// ── Dropzone highlight ───────────────────────────────────
dropzone.addEventListener('dragover', e => { e.preventDefault(); dropzone.style.borderColor = 'var(--accent)'; });
dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = 'var(--text-muted)'; });
dropzone.addEventListener('drop', e => {
  e.preventDefault();
  dropzone.style.borderColor = 'var(--text-muted)';
  const f = e.dataTransfer.files[0];
  if (f) { fileInput.files = e.dataTransfer.files; dropzone.querySelector('p').textContent = f.name; }
});

fileInput.addEventListener('change', () => {
  if (fileInput.files[0]) dropzone.querySelector('p').textContent = fileInput.files[0].name;
});

// ── Cover Extraction ───────────────────────────────────────
// Configurar worker do PDF.js para evitar erros na extração/renderização
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js';

async function extractCover(file, mimeType) {
  try {
    console.log('Iniciando extração de capa para:', file.name, mimeType);
    if (mimeType.includes('pdf')) {
      const url = URL.createObjectURL(file);
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 0.5 }); // Escala reduzida para capa
      
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      console.log('PDF: Capa gerada no canvas');
      URL.revokeObjectURL(url);
      
      return await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.8));
    } 
    else if (mimeType.includes('epub')) {
      const buffer = await file.arrayBuffer();
      const book = ePub(buffer);
      await book.ready;
      console.log('EPUB: Livro pronto, buscando capa...');
      let coverUrl = await book.coverUrl();
      
      if (!coverUrl && book.packaging && book.packaging.manifest) {
        console.log('EPUB: Tentando busca alternativa de capa...');
        const manifest = Object.values(book.packaging.manifest);
        let coverItem = manifest.find(item => 
          (item.properties && item.properties.includes('cover-image')) || 
          (item.id && item.id.toLowerCase().includes('cover')) || 
          (item.href && item.href.toLowerCase().includes('cover'))
        );
        if (!coverItem) {
           // Último recurso: pega a primeira imagem que encontrar
           coverItem = manifest.find(item => item.type && item.type.startsWith('image/'));
        }
        if (coverItem) {
           const resolvedPath = book.path ? book.path.resolve(coverItem.href) : coverItem.href;
           coverUrl = await book.archive.createUrl(resolvedPath);
        }
      }
      
      if (coverUrl) {
        console.log('EPUB: Capa encontrada:', coverUrl);
        const response = await fetch(coverUrl);
        return await response.blob();
      } else {
        console.warn('EPUB: Nenhuma capa definida dentro do arquivo.');
      }
    }
  } catch (err) {
    console.error('Erro na extração de capa:', err);
  }
  return null;
}

// ── Upload ───────────────────────────────────────────────
async function uploadFile(file) {
  if (!file) return setStatus('⚠️ Selecione um arquivo.', 'warn');
  if (file.size > MAX_FILE_SIZE) return setStatus(`⚠️ Arquivo muito grande (máx 200 MB).`, 'warn');

  uploadBtn.disabled = true;
  setStatus('⏳ Extraindo informações e enviando...', 'loading');

  try {
    const ext = file.name.split('.').pop().toLowerCase();
    const uniqueId = crypto.randomUUID();
    const filePath = `uploads/${uniqueId}.${ext}`;
    const coverPath = `covers/${uniqueId}.jpg`;
    const mimeType = file.type || (ext === 'pdf' ? 'application/pdf' : 'application/epub+zip');

    // 1. Extrair e fazer upload da capa (se possível)
    const coverBlob = await extractCover(file, mimeType);
    if (coverBlob) {
      await supabase.storage.from('books').upload(coverPath, coverBlob, { contentType: 'image/jpeg', upsert: false });
    }

    // 2. Upload do arquivo principal
    const { error: upErr } = await supabase.storage
      .from('books')
      .upload(filePath, file, { contentType: mimeType, upsert: false });

    if (upErr) return setStatus('❌ Falha no upload: ' + upErr.message, 'error');

    // 3. Registrar no banco
    const title = file.name.replace(/\.[^/.]+$/, '');
    const genre = bookGenreSelect?.value || 'Outros';
    await ensureCurrentUserInfo();
    const { error: dbErr } = await supabase.from('books').insert({
      title, mime_type: mimeType, file_path: filePath, file_size: file.size, genre,
      uploaded_by: currentUserId,
      // Só marca doctor_user_id (banco privado, exige liberação por
      // paciente) quando quem sobe é médico de verdade. Admin/editor sobe
      // pro catálogo GLOBAL (todos os 3 campos nulos) — visível a todos os
      // médicos automaticamente, cada um libera pros próprios pacientes.
      ...(isEditorOrAdmin ? {} : { doctor_user_id: currentUserId, company_id: currentUserCompanyId }),
    });

    if (dbErr) return setStatus('❌ Erro ao salvar: ' + dbErr.message, 'error');

    setStatus('✅ Livro adicionado com sucesso!', 'success');
    setTimeout(() => {
      setStatus('');
      uploadModal.style.display = 'none';
      fileInput.value = '';
      dropzone.querySelector('p').textContent = 'Arraste um arquivo ou clique para selecionar';
    }, 2000);
    await loadBookList();
  } catch (err) {
    setStatus('❌ Erro inesperado: ' + err.message, 'error');
  } finally {
    uploadBtn.disabled = false;
  }
}

if (bookGenreSelect) {
  bookGenreSelect.innerHTML = genreOptionsHtml();
  let lastBookGenre = bookGenreSelect.value;
  bookGenreSelect.addEventListener('change', () => {
    if (handleGenreSelectChange(bookGenreSelect, lastBookGenre)) lastBookGenre = bookGenreSelect.value;
  });
}

function setStatus(msg, type = '') {
  uploadStatus.textContent = msg;
  uploadStatus.style.color = type === 'error' ? 'var(--accent)' : type === 'success' ? '#46d369' : 'var(--text-muted)';
}

uploadBtn.addEventListener('click', () => uploadFile(fileInput.files?.[0]));

// ── Editar / Excluir ───────────────────────────────────────
const editModal = document.getElementById('edit-modal');
const closeEditModal = document.getElementById('close-edit-modal');
const editTitleInput = document.getElementById('edit-title-input');
const editGenreSelect = document.getElementById('edit-genre-select');
const editSaveBtn = document.getElementById('edit-save-btn');
const editStatus = document.getElementById('edit-status');
let editingBookId = null;

let lastEditGenre = 'Outros';
if (editGenreSelect) {
  editGenreSelect.innerHTML = genreOptionsHtml();
  editGenreSelect.addEventListener('change', () => {
    if (handleGenreSelectChange(editGenreSelect, lastEditGenre)) lastEditGenre = editGenreSelect.value;
  });
}

function openEditModal(book) {
  editingBookId = book.id;
  editTitleInput.value = book.title || '';
  editGenreSelect.value = getAllGenres().includes(book.genre) ? book.genre : 'Outros';
  lastEditGenre = editGenreSelect.value;
  editStatus.textContent = '';
  editModal.style.display = 'flex';
}

closeEditModal?.addEventListener('click', () => { editModal.style.display = 'none'; });

editSaveBtn?.addEventListener('click', async () => {
  const title = editTitleInput.value.trim();
  if (!title) { editStatus.textContent = '⚠️ Informe um título.'; return; }

  editSaveBtn.disabled = true;
  editStatus.textContent = '⏳ Salvando...';

  const { data, error } = await supabase.from('books')
    .update({ title, genre: editGenreSelect.value })
    .eq('id', editingBookId)
    .select();

  editSaveBtn.disabled = false;
  if (error) { editStatus.textContent = '❌ Erro ao salvar: ' + error.message; return; }
  if (!data || data.length === 0) {
    editStatus.textContent = '❌ Não foi possível salvar (sessão sem permissão para editar). Tente sair e entrar de novo.';
    return;
  }

  editModal.style.display = 'none';
  await loadBookList();
});

async function deleteBook(book) {
  const title = book.title || 'este livro';

  // Dentro do contexto de um paciente, o lixo num livro do banco/catálogo
  // geral (patient_id não é desse paciente — ou seja, é só uma prévia do
  // banco inteiro do médico, igual ao selo Liberado/Não liberado) NÃO pode
  // apagar o livro de verdade — apagaria pra todo mundo, inclusive da
  // biblioteca geral do próprio médico. Nesse caso o botão só remove a
  // liberação (mesma ação do "Remover" no modal de liberar). Livro que já
  // pertence direto a esse paciente (fluxo legado, patient_id === paciente
  // ativo) ou fora de qualquer contexto de paciente continua apagando de
  // verdade — não é compartilhado com mais ninguém.
  const isBankPreview = doctorPatientContext && book.patient_id !== doctorPatientContext.id;
  if (isBankPreview) {
    if (!confirm(`Remover "${title}" da liberação para ${doctorPatientContext.name}? O livro continua no seu banco.`)) return;
    try {
      await supabase.from('patient_book_flags')
        .upsert({ patient_id: doctorPatientContext.id, book_id: book.id, visible: false, updated_at: new Date().toISOString() });
    } catch (err) {
      alert('Erro ao remover liberação: ' + err.message);
      return;
    }
    await loadBookList();
    return;
  }

  // Fora de contexto de paciente, num livro que não é seu (do admin ou de
  // outro médico): não apaga de verdade (afetaria todo mundo), só oculta
  // da sua própria biblioteca. Sempre permitido, pessoal.
  const isHideOnly = !doctorPatientContext && !(isEditorOrAdmin || book.uploaded_by === currentUserId);
  if (isHideOnly) {
    if (!confirm(`Ocultar "${title}" da sua biblioteca? Continua existindo pros outros — só some da sua lista.`)) return;
    await ensureCurrentUserInfo();
    try {
      await supabase.from('book_hidden_for_user')
        .upsert({ user_id: currentUserId, book_id: book.id });
    } catch (err) {
      alert('Erro ao ocultar livro: ' + err.message);
      return;
    }
    await loadBookList();
    return;
  }

  if (!confirm(`Apagar "${title}"? Essa ação não pode ser desfeita.`)) return;

  // Apaga a linha do banco primeiro: se a RLS negar (livro de outro médico/
  // catálogo global sem permissão), sai daqui sem ter tocado no storage.
  const { data: dbData, error: dbErr } = await supabase.from('books').delete().eq('id', book.id).select();
  if (dbErr) { alert('Erro ao excluir: ' + dbErr.message); return; }
  if (!dbData || dbData.length === 0) {
    alert('Não foi possível excluir (sessão sem permissão). Tente sair e entrar de novo.');
    return;
  }

  const filePath = (book.file_path || '').replace(/^\/+/, '');
  const coverPath = deriveCoverPath(book.file_path);
  const pathsToRemove = [filePath, coverPath].filter(Boolean);
  if (pathsToRemove.length) {
    const { error: storageErr } = await supabase.storage.from('books').remove(pathsToRemove);
    if (storageErr) console.warn('[BookReader] Erro ao remover arquivos do storage:', storageErr.message);
  }

  await loadBookList();
}

// ── Book List ────────────────────────────────────────────
const BOOK_GRADIENTS = [
  'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
  'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
  'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
  'linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)'
];

let allBooksCache = [];
let coverUrlMap = {};
// Livro liberado pro paciente ativo (Fase de banco+liberação) — igual ao
// patientExerciseReleaseMap de app.js: alimenta o selo "Liberado"/"Não
// liberado" nos cards quando o médico está "dentro" de um paciente.
let patientBookReleaseMap = new Map();

async function resolveCoverUrls(books) {
  const paths = [...new Set(books.map(b => deriveCoverPath(b.file_path)).filter(Boolean))];
  if (!paths.length) return {};
  const { data, error } = await supabase.storage.from('books').createSignedUrls(paths, 3600);
  if (error || !data) {
    console.warn('[BookReader] Erro ao gerar signed URLs das capas:', error?.message);
    return {};
  }
  const map = {};
  data.forEach(entry => {
    if (entry.signedUrl && !entry.error) map[entry.path] = entry.signedUrl;
  });
  return map;
}

function createBookCard(book, index, opts = {}) {
  const isPdf = book.mime_type?.includes('pdf');
  const icon = isPdf ? '📄' : '📗';
  const type = isPdf ? 'PDF' : 'EPUB';
  const title = book.title || book.file_path.split('/').pop();

  const bgGradient = BOOK_GRADIENTS[index % BOOK_GRADIENTS.length];
  const li = document.createElement('li');
  li.dataset.id = book.id;
  li.tabIndex = 0;
  li.setAttribute('role', 'button');
  li.setAttribute('aria-label', `Abrir livro ${title}`);

  const coverPath = deriveCoverPath(book.file_path);
  const coverUrl = coverPath ? coverUrlMap[coverPath] : null;

  // Espelha a policy de escrita de books (uploaded_by = auth.uid() OR
  // is_editor_or_admin() OR dono do paciente) — sem isso o botão aparecia
  // pra qualquer livro alheio e só falhava depois de clicar.
  const canManageBook = isEditorOrAdmin
    || book.uploaded_by === currentUserId
    || (doctorPatientContext && book.patient_id === doctorPatientContext.id);
  // Três significados possíveis pro botão de lixeira, mutuamente exclusivos:
  // (1) dentro do contexto de um paciente, num livro que só está ali como
  //     prévia do banco/catálogo geral — "remover liberação" (flag, sempre
  //     permitido pra quem já está vendo esse paciente);
  // (2) fora de contexto de paciente, num livro que não é seu — "ocultar da
  //     minha biblioteca" (book_hidden_for_user, sempre permitido, pessoal,
  //     não afeta ninguém — pedido explícito: médico quer poder "excluir"
  //     livro do admin sem apagar de verdade nem depender de ser dono);
  // (3) livro que você realmente pode editar — exclusão de verdade.
  const isBankPreview = doctorPatientContext && book.patient_id !== doctorPatientContext.id;
  const isHideOnly = !doctorPatientContext && !canManageBook;
  const deleteLabel = isBankPreview ? 'Remover liberação' : isHideOnly ? 'Ocultar da minha biblioteca' : 'Excluir';
  const deleteAriaLabel = isBankPreview
    ? `Remover liberação de ${escapeHtml(title)} para ${escapeHtml(doctorPatientContext.name)}`
    : isHideOnly
      ? `Ocultar ${escapeHtml(title)} da minha biblioteca`
      : `Excluir ${escapeHtml(title)}`;

  const showEdit = canManageBook;
  const showDelete = true; // sempre tem alguma ação disponível (as 3 acima)
  // Só mostra quando dá pra saber pra quem avisar: dentro do contexto de um
  // paciente (avisa ele) ou fora dele pra quem pode fazer broadcast geral
  // (editor/admin) — mesmo critério que exercícios/tópicos já usam em
  // app.js (createNotifyUsersButton).
  const showNotify = canManageBook && (doctorPatientContext || isEditorOrAdmin);
  const notifyAriaLabel = doctorPatientContext
    ? `Avisar ${escapeHtml(doctorPatientContext.name)} sobre ${escapeHtml(title)} por e-mail`
    : `Avisar usuários sobre ${escapeHtml(title)} por e-mail`;

  li.innerHTML = `
    <div class="book-cover-fallback" style="background: ${bgGradient}"></div>
    ${coverUrl ? `<img class="book-cover" src="${coverUrl}" alt="" loading="lazy" onerror="this.remove()">` : ''}
    <div class="book-card-actions">
      ${opts.showRemoveProgress ? `<button type="button" class="card-action-btn" data-action="remove-progress" title="Remover de Continuar Lendo" aria-label="Remover ${escapeHtml(title)} de Continuar Lendo">↩</button>` : ''}
      ${showNotify ? `<button type="button" class="card-action-btn" data-action="notify" title="Avisar por e-mail" aria-label="${notifyAriaLabel}">✉️</button>` : ''}
      ${showEdit ? `<button type="button" class="card-action-btn" data-action="edit" title="Editar" aria-label="Editar ${escapeHtml(title)}">✎</button>` : ''}
      ${showDelete ? `<button type="button" class="card-action-btn" data-action="delete" title="${deleteLabel}" aria-label="${deleteAriaLabel}">${isBankPreview ? '🚫' : isHideOnly ? '🙈' : '🗑'}</button>` : ''}
    </div>
    <span class="book-type">${type}</span>
    <div class="book-info-overlay">
      ${coverUrl ? '' : `<span class="book-icon" aria-hidden="true">${icon}</span>`}
      <div class="book-title" title="${escapeHtml(title)}">${escapeHtml(title)}</div>
    </div>
  `;

  li.addEventListener('click', () => openReader(book));
  li.addEventListener('keydown', e => {
    if (e.target !== li) return; // deixa os botões internos tratarem sua própria ativação
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openReader(book);
    }
  });

  li.querySelector('[data-action="notify"]')?.addEventListener('click', async e => {
    e.stopPropagation();
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      await sendBookNotification(title, doctorPatientContext);
    } finally {
      btn.disabled = false;
    }
  });
  li.querySelector('[data-action="edit"]')?.addEventListener('click', e => {
    e.stopPropagation();
    openEditModal(book);
  });
  li.querySelector('[data-action="delete"]')?.addEventListener('click', e => {
    e.stopPropagation();
    deleteBook(book);
  });
  li.querySelector('[data-action="remove-progress"]')?.addEventListener('click', e => {
    e.stopPropagation();
    removeFromContinueReading(book);
  });

  return li;
}

// Avisa por e-mail que um livro está disponível — mesmo mecanismo
// (function 'notify-users') que exercícios/tópicos/módulos já usam em
// app.js. Não existia em Livros até agora: outros tipos de conteúdo
// chamam createNotifyUsersButton (definida em app.js), mas book-reader.js
// roda isolado dele (é uma página/iframe à parte, com seu próprio client
// Supabase importado de supabase.js) — nunca tinha sido ligado aqui.
async function sendBookNotification(title, patient) {
  const patientLabel = patient ? (patient.name || 'este paciente') : null;
  const confirmed = patient
    ? confirm(`Enviar um e-mail para ${patientLabel} avisando que "${title}" está disponível?`)
    : confirm(`Enviar um e-mail para todos os usuários avisando que "${title}" está disponível?`);
  if (!confirmed) return;

  const { data, error } = await supabase.functions.invoke('notify-users', {
    body: { title, category: 'Livro', patientId: patient ? patient.id : undefined }
  });

  if (error) {
    console.error('Erro ao enviar aviso:', error);
    alert('Não foi possível enviar o aviso. Verifique a configuração do Gmail e tente novamente.');
    return;
  }

  alert(patient
    ? (data?.recipientCount ? `Aviso enviado para ${patientLabel}.` : 'Não foi possível encontrar o e-mail deste paciente.')
    : `Aviso enviado para ${data?.recipientCount ?? 0} usuário(s).`);
}

// Tira o livro da fileira "Continuar Lendo" apagando a própria linha de
// progresso em book_reading_progress — não mexe no livro nem no progresso
// de outros leitores. Reaparece normal se o usuário ler de novo.
async function removeFromContinueReading(book) {
  await ensureCurrentUserInfo();
  const { error } = await supabase
    .from('book_reading_progress')
    .delete()
    .eq('user_id', currentUserId)
    .eq('book_id', book.id);
  if (error) { alert('Erro ao remover de Continuar Lendo: ' + error.message); return; }
  await loadBookList();
}

function createGenreRow(title, items, cardOpts = {}) {
  const row = document.createElement('div');
  row.className = 'netflix-row';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const container = document.createElement('div');
  container.className = 'row-container';

  const ul = document.createElement('ul');
  ul.className = 'row-items';
  items.forEach((book, index) => ul.appendChild(createBookCard(book, index, cardOpts)));

  container.appendChild(ul);
  row.appendChild(heading);
  row.appendChild(container);
  return row;
}

function renderLibrary(data) {
  genreRowsContainer.innerHTML = '';

  if (!data.length) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';

  const continuing = data
    .filter(b => b.last_read_at)
    .sort((a, b) => new Date(b.last_read_at) - new Date(a.last_read_at))
    .slice(0, 10);
  if (continuing.length) genreRowsContainer.appendChild(createGenreRow('Continuar Lendo', continuing, { showRemoveProgress: true }));

  const allGenres = getAllGenres();
  const grouped = new Map();
  allGenres.forEach(g => grouped.set(g, []));
  data.forEach(book => {
    const genre = allGenres.includes(book.genre) ? book.genre : 'Outros';
    grouped.get(genre).push(book);
  });

  allGenres.forEach(genre => {
    const items = grouped.get(genre);
    if (items.length) genreRowsContainer.appendChild(createGenreRow(genre, items));
  });
}

function renderSearchResults(matches) {
  genreRowsContainer.innerHTML = '';
  if (!matches.length) {
    emptyMsg.style.display = 'block';
    return;
  }
  emptyMsg.style.display = 'none';
  genreRowsContainer.appendChild(createGenreRow('Resultados da busca', matches));
}

async function loadBookList() {
  console.log('[BookReader] Carregando lista de livros...');
  await ensureCurrentUserInfo();
  const { data, error } = await supabase
    .from('books')
    .select('id, title, mime_type, file_path, genre, patient_id, uploaded_by')
    .order('created_at', { ascending: false });

  if (error) { console.error('[BookReader] Erro na listagem:', error); return; }
  console.log('[BookReader] Livros encontrados:', data?.length);

  // Progresso de leitura é por usuário (book_reading_progress), não mais
  // nas colunas do livro — mescla aqui em cima dos livros carregados.
  let progressMap = new Map();
  if (currentUserId) {
    const { data: progress } = await supabase
      .from('book_reading_progress')
      .select('book_id, last_page, last_location, last_read_at')
      .eq('user_id', currentUserId);
    progressMap = new Map((progress || []).map(p => [p.book_id, p]));
  }
  const withProgress = (data || []).map(b => ({ ...b, ...progressMap.get(b.id) }));

  // Livros que o usuário ocultou da própria biblioteca (book_hidden_for_user)
  // — só vale na biblioteca geral (fora de contexto de paciente); dentro do
  // contexto o médico ainda precisa ver tudo pra poder liberar/gerenciar.
  let hiddenIds = new Set();
  if (currentUserId && !doctorPatientContext) {
    const { data: hidden } = await supabase
      .from('book_hidden_for_user').select('book_id').eq('user_id', currentUserId);
    hiddenIds = new Set((hidden || []).map(h => h.book_id));
  }

  if (doctorPatientContext) {
    const { data: flags } = await supabase
      .from('patient_book_flags').select('book_id, visible').eq('patient_id', doctorPatientContext.id);
    patientBookReleaseMap = new Map((flags || []).map(f => [f.book_id, f.visible]));
  } else {
    patientBookReleaseMap = new Map();
  }

  // Dentro do contexto de um paciente, mostra só o que já foi liberado pra
  // ele (patient_id direto, fluxo legado, ou flag visible=true) — pedido
  // explícito: nada de banco inteiro com selo "Não liberado", só o que
  // realmente aparece pro paciente. Mesmo espírito do redesenho do modal de
  // liberar (openPatientBooksModal em app.js).
  const filtered = doctorPatientContext
    ? withProgress.filter(b => b.patient_id === doctorPatientContext.id || patientBookReleaseMap.get(b.id) === true)
    : withProgress.filter(b => !hiddenIds.has(b.id));

  allBooksCache = filtered;
  coverUrlMap = await resolveCoverUrls(allBooksCache);
  renderLibrary(allBooksCache);
}

const bookSearchInput = document.getElementById('book-search');
bookSearchInput?.addEventListener('input', () => {
  const q = bookSearchInput.value.trim().toLowerCase();
  if (!q) { renderLibrary(allBooksCache); return; }
  const filtered = allBooksCache.filter(b => (b.title || '').toLowerCase().includes(q));
  renderSearchResults(filtered);
});

// ── Fullscreen (leitor maximizado no celular, estilo Kindle) ──
// iOS Safari não implementa Fullscreen API para elementos arbitrários (só <video>),
// então lá o leitor fica limitado ao CSS edge-to-edge já existente. Em Android/desktop
// isso faz o iframe #books-frame tomar a tela toda, escondendo o chrome do app.html.
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

// Avisa o app.html (mesma origem) para esconder sua barra de abas — cobre o iOS Safari,
// que ignora silenciosamente o requestFullscreen() abaixo.
function setParentImmersive(value) {
  if (!isTouchDevice || window.parent === window) return;
  try {
    window.parent.postMessage({ type: 'book-reader:immersive', value }, window.location.origin);
  } catch (e) { /* ignora se não estiver embutido */ }
}

function requestReaderFullscreen() {
  if (!isTouchDevice) return;
  const el = readerView;
  const req = el.requestFullscreen || el.webkitRequestFullscreen;
  if (!req) return;
  try {
    const result = req.call(el);
    if (result?.catch) result.catch(() => {});
  } catch (e) { /* ignora — segue no modo maximizado via CSS */ }
}

function exitReaderFullscreen() {
  const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
  const exit = document.exitFullscreen || document.webkitExitFullscreen;
  if (!fsEl || !exit) return;
  try {
    const result = exit.call(document);
    if (result?.catch) result.catch(() => {});
  } catch (e) { /* já não está em fullscreen */ }
}

// ── Open Reader ──────────────────────────────────────────
async function openReader(book) {
  requestReaderFullscreen(); // primeiro passo síncrono: preserva o gesto do usuário (clique/tap)
  setParentImmersive(true);
  try {
    console.log('Abrindo leitor para:', book.title);
    libraryView.style.display = 'none';
    readerView.style.display = 'flex';
    readerTitle.textContent = book.title;
    
    viewer.innerHTML = `
      <div class="loading-spinner">
        <div class="spinner"></div>
        <span>Carregando ${escapeHtml(book.title)}...</span>
      </div>`;

    let url = null;
    const cleanPath = (book.file_path || '').replace(/^\/+/, '');

    try {
      const { data: signedData, error: signErr } = await supabase.storage
        .from('books')
        .createSignedUrl(cleanPath, 60 * 60);
      if (signedData?.signedUrl) {
        url = signedData.signedUrl;
      } else if (signErr) {
        console.warn('[BookReader] Erro createSignedUrl:', signErr.message);
      }
    } catch (e) {
      console.warn('[BookReader] SignedUrl falhou, tentando PublicUrl:', e);
    }

    if (!url) {
      const { data: pubData } = supabase.storage.from('books').getPublicUrl(cleanPath);
      url = pubData?.publicUrl;
    }

    // Verificar se a URL responde 200 antes de renderizar
    if (url) {
      try {
        const checkRes = await fetch(url, { method: 'HEAD' });
        if (!checkRes.ok && checkRes.status === 404) {
          url = null;
        }
      } catch (e) {
        console.warn('[BookReader] Erro ao verificar HEAD da URL:', e);
      }
    }

    if (!url) {
      viewer.innerHTML = `
        <div class="loading-spinner" style="flex-direction: column; gap: 1rem; color: #ff4d4d; text-align: center; padding: 2rem;">
          <span style="font-size: 2.5rem;">⚠️</span>
          <span style="font-size: 1.2rem; font-weight: bold;">Arquivo do livro não encontrado no servidor</span>
          <span style="font-size: 0.95rem; color: var(--text-muted); max-width: 450px;">O arquivo correspondente a este livro ("${escapeHtml(book.title)}") não existe mais no Supabase Storage. Envie o livro novamente clicando no botão Upload.</span>
          <button id="error-back-btn" class="nav-btn" style="background: var(--accent); margin-top: 1rem; cursor: pointer;">Voltar para Biblioteca</button>
        </div>`;

      document.getElementById('error-back-btn')?.addEventListener('click', () => {
        backToLibrary.click();
      });
      return;
    }

    currentBook = { ...book, url };
    viewer.innerHTML = '';

    if (book.mime_type?.includes('pdf')) {
      await renderPDF(url);
    } else {
      await renderEPUB(url);
    }
  } catch (err) {
    console.error('Erro fatal em openReader:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro ao abrir o livro: ${err.message}</div>`;
  }
}

backToLibrary.addEventListener('click', () => {
  exitReaderFullscreen();
  setParentImmersive(false);
  readerView.style.display = 'none';
  libraryView.style.display = 'block';
  viewer.innerHTML = '';
  prevPageBtn.style.display = 'none';
  nextPageBtn.style.display = 'none';
  currentBook = null;
  currentViewer = null;
  updateReadingProgress('');
  renderLibrary(allBooksCache); // atualiza a fileira "Continuar Lendo" com o progresso recém-salvo
});

// ── Progresso de leitura ───────────────────────────────────
let saveProgressTimer = null;
function saveProgress() {
  if (!currentBook?.id) return;
  clearTimeout(saveProgressTimer);
  saveProgressTimer = setTimeout(async () => {
    const payload = { last_read_at: new Date().toISOString() };
    if (currentViewer?.type === 'pdf') {
      payload.last_page = currentViewer.pageIndex;
    } else if (currentViewer?.type === 'epub' && currentEpubLocation?.start?.cfi) {
      payload.last_location = currentEpubLocation.start.cfi;
    } else {
      return;
    }
    // Progresso é por usuário (book_reading_progress), não na linha do
    // livro — assim salva certo mesmo lendo um livro que não é seu.
    const { error } = await supabase.from('book_reading_progress')
      .upsert({ user_id: currentUserId, book_id: currentBook.id, ...payload });
    if (error) {
      console.warn('[BookReader] Erro ao salvar progresso:', error.message);
      return;
    }
    const cached = allBooksCache.find(b => b.id === currentBook.id);
    if (cached) Object.assign(cached, payload);
  }, 600);
}

// ── Helper para rolar página no PDF ───────────────────────
function scrollToPdfPage(pageIndex) {
  const canvases = viewer.querySelectorAll('canvas');
  if (canvases[pageIndex - 1]) {
    canvases[pageIndex - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updatePdfProgressLabel() {
  if (currentViewer?.type !== 'pdf') return;
  const { pageIndex, totalPages } = currentViewer;
  const pct = Math.round((pageIndex / totalPages) * 100);
  updateReadingProgress(`Página ${pageIndex} de ${totalPages} · ${pct}%`);
}

// EPUB é texto fluido — não tem "página" fixa como um livro impresso (muda
// com o tamanho da fonte). Por isso, igual ao Kindle, mostramos "Local X de Y"
// a partir do índice de localizações gerado por book.locations.generate().
function updateEpubProgressLabel(location) {
  if (currentViewer?.type !== 'epub' || !currentViewer.book?.locations?.length()) return;
  const cfi = location?.start?.cfi;
  if (!cfi) return;
  const total = currentViewer.book.locations.length();
  const idx = currentViewer.book.locations.locationFromCfi(cfi);
  if (idx == null || idx < 0) return;
  const pct = Math.round(currentViewer.book.locations.percentageFromCfi(cfi) * 100);
  updateReadingProgress(`Local ${idx + 1} de ${total} · ${pct}%`);
}

// ── PDF Renderer ─────────────────────────────────────────
async function renderPDF(url) {
  try {
    console.log('Renderizando PDF...');
    viewer.innerHTML = '';
    const loadingTask = pdfjsLib.getDocument({ url, rangeChunkSize: 1024 * 1024 });
    const pdf = await loadingTask.promise;

    const containerWidth = (viewer.clientWidth || 800) - 32;
    const containerHeight = (viewer.clientHeight || 600) - 32;

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1.0 });

      // Scale ideal para caber na largura e altura do leitor
      const scaleX = containerWidth / unscaledViewport.width;
      const scaleY = containerHeight / unscaledViewport.height;
      const scale = Math.min(scaleX, scaleY, 2.0);

      const viewport = page.getViewport({ scale });
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.style.cssText = 'margin: 0 auto 1.5rem; display: block; max-width: 100%; height: auto; border-radius: 4px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);';
      await page.render({ canvasContext: ctx, viewport }).promise;
      viewer.appendChild(canvas);
    }

    const resumePage = (currentBook?.last_page >= 1 && currentBook.last_page <= pdf.numPages) ? currentBook.last_page : 1;
    currentViewer = { type: 'pdf', pdf, pageIndex: resumePage, totalPages: pdf.numPages };
    if (resumePage > 1) scrollToPdfPage(resumePage);
    updatePdfProgressLabel();

    prevPageBtn.onclick = () => {
      if (currentViewer?.type === 'pdf' && currentViewer.pageIndex > 1) {
        currentViewer.pageIndex--;
        scrollToPdfPage(currentViewer.pageIndex);
        updatePdfProgressLabel();
        saveProgress();
      }
    };

    nextPageBtn.onclick = () => {
      if (currentViewer?.type === 'pdf' && currentViewer.pageIndex < currentViewer.totalPages) {
        currentViewer.pageIndex++;
        scrollToPdfPage(currentViewer.pageIndex);
        updatePdfProgressLabel();
        saveProgress();
      }
    };

    prevPageBtn.style.display = 'flex';
    nextPageBtn.style.display = 'flex';
  } catch (err) {
    console.error('Erro PDF.js:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro no PDF: ${err.message}</div>`;
  }
}

// ── EPUB Renderer ─────────────────────────────────────────
async function renderEPUB(url) {
  try {
    console.log('Baixando arquivo EPUB...');
    const response = await fetch(url);
    if (!response.ok) throw new Error('Falha ao baixar o EPUB');
    const buffer = await response.arrayBuffer();

    console.log('Renderizando EPUB...');
    const epubContainer = document.createElement('div');
    epubContainer.style.cssText = 'width: 100%; max-width: 800px; height: 100%; margin: 0 auto; background: #fbf0d9; border-radius: 4px; overflow: hidden; box-shadow: 0 0 15px rgba(0,0,0,0.5);';
    epubContainer.id = 'epub-viewer';
    viewer.appendChild(epubContainer);

    const book = ePub(buffer);
    const rendition = book.renderTo('epub-viewer', {
      width: '100%',
      height: '100%',
      spread: 'none',
      flow: 'paginated'
    });
    
    const epubBodyPadding = window.innerWidth <= 768 ? '1rem 0.6rem !important' : '1.5rem 2rem !important';
    rendition.themes.default({
      'body': {
        'font-family': "'Georgia', 'Times New Roman', serif",
        'color': '#2b2b2b',
        'padding': epubBodyPadding,
        'box-sizing': 'border-box !important',
        'word-wrap': 'break-word !important',
        'overflow-wrap': 'break-word !important'
      },
      'p': { 
        'line-height': '1.6',
        'text-align': 'justify',
        'margin-bottom': '1em',
        'max-width': '100% !important'
      },
      '*:first-letter, p::first-letter, span::first-letter, .dropcap, .initial, [class*="dropcap"], [class*="initial"]': {
        'margin-left': '0 !important',
        'padding-left': '0 !important',
        'position': 'relative !important',
        'left': '0 !important'
      },
      'h1, h2, h3, h4, h5, h6': {
        'font-family': "'Georgia', serif",
        'color': '#111',
        'text-align': 'center',
        'margin-left': '0 !important',
        'margin-right': '0 !important',
        'padding-left': '0 !important',
        'padding-right': '0 !important',
        'max-width': '100% !important',
        'word-break': 'break-word !important',
        'overflow-wrap': 'break-word !important',
        'line-height': '1.2'
      },
      'h1': { 'font-size': '1.8rem !important' },
      'h2': { 'font-size': '1.5rem !important' },
      'h3': { 'font-size': '1.3rem !important' },
      'img': {
        'max-width': '100% !important',
        'height': 'auto !important',
        'display': 'block',
        'margin': '1em auto'
      },
      // Capa de EPUB costuma vir numa página própria embrulhada em <svg>
      // (padrão do formato), não um <img> puro — max-width/height:auto do
      // <img> acima não alcança isso. Sem essa regra, o <svg> herda
      // width/height:100% do wrapper de página e estica a capa fora de
      // proporção pra preencher o quadro, mesmo com a imagem interna
      // preservando proporção.
      'svg': {
        'max-width': '100% !important',
        'max-height': '100% !important',
        'width': 'auto !important',
        'height': 'auto !important'
      }
    });

    const initialFontSize = localStorage.getItem('fontSize') || '1.15rem';
    rendition.themes.fontSize(initialFontSize);

    await rendition.display(currentBook?.last_location || undefined);
    currentViewer = { type: 'epub', book, rendition };

    // Localizações estilo Kindle: precisa gerar um índice do livro inteiro,
    // então roda em segundo plano sem travar a exibição da página atual.
    updateReadingProgress('Calculando localização...');
    book.locations.generate(1600).then(() => {
      const loc = currentEpubLocation || currentViewer?.rendition?.currentLocation();
      updateEpubProgressLabel(loc);
    }).catch(err => console.warn('[BookReader] Erro ao gerar localizações do EPUB:', err));

    const goNext = () => rendition.next();
    const goPrev = () => rendition.prev();

    // Navegação por teclado (Seta Direita / Seta Esquerda)
    document.addEventListener('keydown', e => {
      if (!currentViewer) return;
      if (e.key === 'ArrowRight') {
        if (currentViewer.type === 'epub') goNext();
        else if (currentViewer.type === 'pdf' && currentViewer.pageIndex < currentViewer.totalPages) {
          currentViewer.pageIndex++;
          scrollToPdfPage(currentViewer.pageIndex);
          updatePdfProgressLabel();
          saveProgress();
        }
      }
      if (e.key === 'ArrowLeft') {
        if (currentViewer.type === 'epub') goPrev();
        else if (currentViewer.type === 'pdf' && currentViewer.pageIndex > 1) {
          currentViewer.pageIndex--;
          scrollToPdfPage(currentViewer.pageIndex);
          updatePdfProgressLabel();
          saveProgress();
        }
      }
    });

    // Navegação por toque/clique/arrastar — camada transparente por cima do
    // conteúdo do EPUB, no nosso próprio documento (não dentro do iframe que o
    // epub.js cria para o texto). O epub.js renderiza o livro num iframe com
    // sandbox restrito (sem allow-scripts); o repasse de eventos internos dele
    // (rendition.on('click'/'touchstart'/...)) depende dessa cadeia e não se
    // mostrou confiável no Safari/Chrome do iPhone (WebKit). Capturando aqui
    // fora, o gesto funciona em qualquer navegador.
    const touchLayer = document.createElement('div');
    touchLayer.id = 'epub-touch-layer';
    touchLayer.style.cssText = 'position: absolute; inset: 0; z-index: 4; background: transparent; touch-action: pan-y;';
    viewer.appendChild(touchLayer);

    let touchStartX = null;
    let touchStartY = null;

    const handleTapOrSwipe = (endX, endY) => {
      const deltaX = endX - touchStartX;
      const deltaY = endY - touchStartY;
      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      if (absX >= 40 && absX > absY) {
        // Arrastar/deslizar horizontal: vira a página, igual às setas
        if (deltaX > 0) { goPrev(); } else { goNext(); }
        return;
      }

      if (absX < 10 && absY < 10) {
        // Toque simples: zonas nas bordas viram página (estilo Kindle)
        const width = touchLayer.clientWidth || window.innerWidth;
        if (endX < width * 0.3) { goPrev(); }
        else if (endX > width * 0.7) { goNext(); }
      }
    };

    touchLayer.addEventListener('touchstart', e => {
      const t = e.changedTouches[0];
      touchStartX = t.clientX;
      touchStartY = t.clientY;
    }, { passive: true });

    touchLayer.addEventListener('touchend', e => {
      if (touchStartX === null) return;
      const t = e.changedTouches[0];
      handleTapOrSwipe(t.clientX, t.clientY);
      touchStartX = null;
      touchStartY = null;
    });

    // Mouse (desktop): clique nas zonas ou arrastar com o botão pressionado
    touchLayer.addEventListener('mousedown', e => {
      touchStartX = e.clientX;
      touchStartY = e.clientY;
    });
    touchLayer.addEventListener('mouseup', e => {
      if (touchStartX === null) return;
      handleTapOrSwipe(e.clientX, e.clientY);
      touchStartX = null;
      touchStartY = null;
    });

    // Quando mudar de página no EPUB, salva a localização exata
    rendition.on('relocated', (location) => {
      currentEpubLocation = location;
      updateEpubProgressLabel(location);
      saveProgress();
    });

    prevPageBtn.onclick = () => goPrev();
    nextPageBtn.onclick = () => goNext();
    prevPageBtn.style.display = 'flex';
    nextPageBtn.style.display = 'flex';
  } catch (err) {
    console.error('Erro EPUB.js:', err);
    viewer.innerHTML = `<div class="loading-spinner">❌ Erro no EPUB: ${err.message}</div>`;
  }
}

// ── Init ─────────────────────────────────────────────────
if (doctorPatientContext) {
  const banner = document.getElementById('patient-context-banner');
  const bannerText = document.getElementById('patient-context-banner-text');
  if (banner && bannerText) {
    bannerText.textContent = `Enviando livros para: ${doctorPatientContext.name}`;
    banner.style.display = 'flex';
  }
}
loadBookList();
