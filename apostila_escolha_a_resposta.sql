-- ========================================================
-- Escolha a Resposta: exercícios da apostila (pp. 148-199)
-- ========================================================
-- Gerado a partir de apostila_completa.txt (texto extraído de foto, revisado
-- à mão). O gabarito foi marcado por quem montou o arquivo — revisar antes de
-- publicar. Entram como exercícios globais do admin, NÃO publicados
-- (visible = false): o admin confere e publica pelo app.
-- Só o texto da apostila, sem alternativas acrescentadas. Ficaram de fora:
-- 44. Dados pessoais (não tem resposta certa), 45. Letras de músicas (a
-- extração perdeu as alternativas) e, em 40. Quantos, as perguntas dos dias
-- da semana, do par e dos pneus (nenhuma alternativa do texto é a certa).
-- Rodar de novo não duplica: pula o exercício que já existe com o mesmo nome.
-- Precisa da migration 20261020000000_escolha_resposta.

begin;

-- Qual destes? (28 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Qual destes?|blue', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Qual destes?|blue' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Qual destes veículos é o mais veloz?', '[{"text": "bicicleta", "correct": false}, {"text": "moto", "correct": true}, {"text": "velocípede", "correct": false}]'),
    (2, 'Qual destes meios de transporte é o menos perigoso?', '[{"text": "asa delta", "correct": false}, {"text": "elevador", "correct": true}, {"text": "ônibus", "correct": false}]'),
    (3, 'Qual destes materiais é o mais leve?', '[{"text": "chumbo", "correct": false}, {"text": "isopor", "correct": true}, {"text": "pedra", "correct": false}]'),
    (4, 'Qual destes tecidos é o mais quente?', '[{"text": "seda", "correct": false}, {"text": "lã", "correct": true}, {"text": "sarja", "correct": false}]'),
    (5, 'Qual destas estações é a mais fria?', '[{"text": "primavera", "correct": false}, {"text": "outono", "correct": false}, {"text": "inverno", "correct": true}]'),
    (6, 'Qual destas cidades é a mais populosa?', '[{"text": "Sorocaba", "correct": true}, {"text": "Jundiaí", "correct": false}, {"text": "Santos", "correct": false}]'),
    (7, 'Qual destes continentes é o maior?', '[{"text": "Europa", "correct": false}, {"text": "Ásia", "correct": true}, {"text": "Austrália", "correct": false}]'),
    (8, 'Qual destes estados fica mais ao norte?', '[{"text": "Pará", "correct": true}, {"text": "Goiás", "correct": false}, {"text": "Santa Catarina", "correct": false}]'),
    (9, 'Qual destes objetos é o mais caro?', '[{"text": "lápis", "correct": false}, {"text": "borracha", "correct": false}, {"text": "celular", "correct": true}]'),
    (10, 'Qual destes objetos é o mais comprido?', '[{"text": "bengala", "correct": false}, {"text": "vara de pescar", "correct": true}, {"text": "palito", "correct": false}]'),
    (11, 'Qual destes livros é o mais grosso?', '[{"text": "Iracema", "correct": false}, {"text": "Bíblia", "correct": true}, {"text": "Manual do escoteiro mirim", "correct": false}]'),
    (12, 'Qual destas pessoas é a mais nova?', '[{"text": "adolescente", "correct": false}, {"text": "bebê", "correct": true}, {"text": "adulto", "correct": false}]'),
    (13, 'Qual destes é mais brilhante?', '[{"text": "prata", "correct": true}, {"text": "níquel", "correct": false}]'),
    (14, 'Qual destes objetos é mais fino?', '[{"text": "colchão", "correct": false}, {"text": "cobertor", "correct": false}, {"text": "lençol", "correct": true}]'),
    (15, 'Qual destes alimentos é o mais saudável?', '[{"text": "mamão", "correct": true}, {"text": "feijoada", "correct": false}, {"text": "pastel frito", "correct": false}]'),
    (16, 'Qual incomoda mais?', '[{"text": "barulho", "correct": true}, {"text": "mar", "correct": false}, {"text": "praia", "correct": false}]'),
    (17, 'Qual é mais fácil de encontrar?', '[{"text": "uma agulha", "correct": false}, {"text": "uma pulga", "correct": false}, {"text": "uma bolsa", "correct": true}]'),
    (18, 'Qual é o mais alto?', '[{"text": "uma cabana", "correct": false}, {"text": "um prédio", "correct": true}, {"text": "uma casa", "correct": false}]'),
    (19, 'Qual destas pessoas é a mais velha?', '[{"text": "avó", "correct": false}, {"text": "neto", "correct": false}, {"text": "tataravó", "correct": true}]'),
    (20, 'Qual destas frutas tem mais água?', '[{"text": "banana", "correct": false}, {"text": "maçã", "correct": false}, {"text": "melancia", "correct": true}]'),
    (21, 'Qual destes objetos é o maior?', '[{"text": "bambolê", "correct": true}, {"text": "anel", "correct": false}, {"text": "pulseira", "correct": false}]'),
    (22, 'Qual destes alimentos é o mais saudável?', '[{"text": "doce de leite", "correct": false}, {"text": "refrigerante", "correct": false}, {"text": "cenoura", "correct": true}]'),
    (23, 'Qual destes animais corre mais?', '[{"text": "cavalo", "correct": true}, {"text": "vaca", "correct": false}, {"text": "gato", "correct": false}]'),
    (24, 'Qual destes locais é o mais fundo?', '[{"text": "piscina", "correct": false}, {"text": "oceano", "correct": true}, {"text": "lago", "correct": false}]'),
    (25, 'Qual destes países está mais ao sul?', '[{"text": "Noruega", "correct": false}, {"text": "México", "correct": false}, {"text": "Argentina", "correct": true}]'),
    (26, 'Qual destes itens é o mais barato?', '[{"text": "sanduíche", "correct": true}, {"text": "secador de cabelo", "correct": false}, {"text": "joia", "correct": false}]'),
    (27, 'Qual destes objetos é o menor?', '[{"text": "prego", "correct": false}, {"text": "martelo", "correct": false}, {"text": "alfinete", "correct": true}]'),
    (28, 'Qual destes países nunca ganhou uma Copa do Mundo?', '[{"text": "Portugal", "correct": true}, {"text": "Espanha", "correct": false}, {"text": "Argentina", "correct": false}]')
) as item(n, word, choices)
order by item.n;

-- Quantos e Quando (15 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Quantos e Quando|orange', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Quantos e Quando|orange' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Quantos centímetros há em um metro?', '[{"text": "10", "correct": false}, {"text": "100", "correct": true}, {"text": "1000", "correct": false}]'),
    (2, 'Quantas coisas há em meia dúzia?', '[{"text": "2", "correct": false}, {"text": "6", "correct": true}, {"text": "12", "correct": false}]'),
    (3, 'Quantos minutos há em uma hora?', '[{"text": "15", "correct": false}, {"text": "30", "correct": false}, {"text": "60", "correct": true}]'),
    (4, 'Quantos anos há num século?', '[{"text": "10", "correct": false}, {"text": "50", "correct": false}, {"text": "100", "correct": true}]'),
    (5, 'Quantos gramas há num quilo?', '[{"text": "100", "correct": false}, {"text": "500", "correct": false}, {"text": "1000", "correct": true}]'),
    (6, 'Quantos centavos há em um real?', '[{"text": "100", "correct": true}, {"text": "200", "correct": false}, {"text": "300", "correct": false}]'),
    (7, 'Quando o sol nasce?', '[{"text": "de manhã", "correct": true}, {"text": "à tarde", "correct": false}]'),
    (8, 'Quando o homem pisou pela primeira vez na Lua?', '[{"text": "em 1969", "correct": true}, {"text": "em 1989", "correct": false}]'),
    (9, 'Quando nasceu o primeiro bebê de proveta?', '[{"text": "em 1978", "correct": true}, {"text": "em 2008", "correct": false}]'),
    (10, 'Quando se comemora o dia da Criança?', '[{"text": "12 de setembro", "correct": false}, {"text": "12 de outubro", "correct": true}]'),
    (11, 'Quando se comemora o dia do Trabalho?', '[{"text": "1º de agosto", "correct": false}, {"text": "1º de maio", "correct": true}]'),
    (12, 'Quando festejamos o carnaval?', '[{"text": "em janeiro", "correct": false}, {"text": "em fevereiro", "correct": true}]'),
    (13, 'Quando é comemorado o dia do Índio?', '[{"text": "19 de abril", "correct": true}, {"text": "19 de dezembro", "correct": false}]'),
    (14, 'Quando fazemos as festas juninas?', '[{"text": "em junho", "correct": true}, {"text": "em dezembro", "correct": false}]'),
    (15, 'Quando é comemorado o dia das Mães?', '[{"text": "em abril", "correct": false}, {"text": "em maio", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- O que e onde encontramos (56 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'O que e onde encontramos|green', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'O que e onde encontramos|green' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'O que encontramos num jardim?', '[{"text": "pianos", "correct": false}, {"text": "flores", "correct": true}, {"text": "quadros", "correct": false}]'),
    (2, 'O que encontramos numa praia?', '[{"text": "macarrão", "correct": false}, {"text": "pipoca", "correct": false}, {"text": "sorvete", "correct": true}]'),
    (3, 'O que encontramos num cassino?', '[{"text": "árvore", "correct": false}, {"text": "roleta", "correct": true}, {"text": "canoa", "correct": false}]'),
    (4, 'O que encontramos num rio?', '[{"text": "martelos", "correct": false}, {"text": "trens", "correct": false}, {"text": "peixes", "correct": true}]'),
    (5, 'O que encontramos num navio?', '[{"text": "cabines", "correct": true}, {"text": "celas", "correct": false}, {"text": "naves", "correct": false}]'),
    (6, 'O que encontramos num açougue?', '[{"text": "anéis", "correct": false}, {"text": "âncoras", "correct": false}, {"text": "ossos", "correct": true}]'),
    (7, 'O que encontramos numa padaria?', '[{"text": "pandeiros", "correct": false}, {"text": "doces", "correct": true}, {"text": "livros", "correct": false}]'),
    (8, 'O que encontramos enfeitando uma árvore de Natal?', '[{"text": "estrelas", "correct": true}, {"text": "carros", "correct": false}, {"text": "pentes", "correct": false}]'),
    (9, 'O que encontramos numa banda?', '[{"text": "pregos", "correct": false}, {"text": "aviões", "correct": false}, {"text": "tambores", "correct": true}]'),
    (10, 'O que encontramos num deserto?', '[{"text": "areia", "correct": true}, {"text": "mar", "correct": false}, {"text": "agulhas", "correct": false}]'),
    (11, 'O que encontramos num aeroporto?', '[{"text": "quadras de tênis", "correct": false}, {"text": "portão de embarque", "correct": true}, {"text": "sala de reunião", "correct": false}]'),
    (12, 'O que encontramos num zoológico?', '[{"text": "gravatas", "correct": false}, {"text": "fogões", "correct": false}, {"text": "jaulas", "correct": true}]'),
    (13, 'O que encontramos numa camisa?', '[{"text": "agulha", "correct": false}, {"text": "botões", "correct": true}, {"text": "fita métrica", "correct": false}]'),
    (14, 'O que encontramos num rosto?', '[{"text": "pescoço", "correct": false}, {"text": "nuca", "correct": false}, {"text": "nariz", "correct": true}]'),
    (15, 'O que encontramos numa cantina?', '[{"text": "garçom", "correct": true}, {"text": "mágico", "correct": false}, {"text": "barbeiro", "correct": false}]'),
    (16, 'Onde encontramos um <strong>siri</strong>?', '[{"text": "na praia", "correct": true}, {"text": "na sorveteria", "correct": false}, {"text": "na escola", "correct": false}]'),
    (17, 'Onde encontramos um <strong>cachecol</strong>?', '[{"text": "na perna", "correct": false}, {"text": "no pescoço", "correct": true}, {"text": "no joelho", "correct": false}]'),
    (18, 'Onde encontramos um <strong>rei de copas</strong>?', '[{"text": "no restaurante", "correct": false}, {"text": "na cozinha", "correct": false}, {"text": "no baralho", "correct": true}]'),
    (19, 'Onde encontramos um <strong>camelo</strong>?', '[{"text": "na garagem", "correct": false}, {"text": "no deserto", "correct": true}, {"text": "na biblioteca", "correct": false}]'),
    (20, 'Onde encontramos um <strong>bisturi</strong>?', '[{"text": "no barbeiro", "correct": false}, {"text": "na cirurgia", "correct": true}, {"text": "na manicure", "correct": false}]'),
    (21, 'Onde encontramos um <strong>guardanapo</strong>?', '[{"text": "na mesa", "correct": true}, {"text": "na poltrona", "correct": false}, {"text": "na escrivaninha", "correct": false}]'),
    (22, 'Onde encontramos uma <strong>tampa</strong>?', '[{"text": "na garrafa", "correct": true}, {"text": "no garfo", "correct": false}, {"text": "no pires", "correct": false}]'),
    (23, 'Onde encontramos um <strong>pinguim</strong>?', '[{"text": "no Polo Norte", "correct": true}, {"text": "no Equador", "correct": false}, {"text": "no deserto", "correct": false}]'),
    (24, 'Onde encontramos um <strong>batom</strong>?', '[{"text": "na bolsa", "correct": true}, {"text": "no lixo", "correct": false}, {"text": "no quadro", "correct": false}]'),
    (25, 'Onde encontramos um <strong>carro</strong>?', '[{"text": "na garagem", "correct": true}, {"text": "na gaveta", "correct": false}, {"text": "na sala", "correct": false}]'),
    (26, 'Onde encontramos uma <strong>pia</strong>?', '[{"text": "no armário", "correct": false}, {"text": "na garrafa", "correct": false}, {"text": "na cozinha", "correct": true}]'),
    (27, 'Onde encontramos uma <strong>moeda</strong>?', '[{"text": "nos óculos", "correct": false}, {"text": "no bolso", "correct": true}, {"text": "no extintor", "correct": false}]'),
    (28, 'Onde encontramos um <strong>bueiro</strong>?', '[{"text": "na bola", "correct": false}, {"text": "na guia da calçada", "correct": true}, {"text": "no chapéu", "correct": false}]'),
    (29, 'Onde encontramos um <strong>cisne</strong>?', '[{"text": "na cozinha", "correct": false}, {"text": "na panela", "correct": false}, {"text": "no lago", "correct": true}]'),
    (30, 'Onde encontramos um <strong>guichê</strong>?', '[{"text": "no banco", "correct": true}, {"text": "na xícara", "correct": false}, {"text": "no corrimão", "correct": false}]'),
    (31, 'Onde encontramos um <strong>selo</strong>?', '[{"text": "no lenço", "correct": false}, {"text": "no aquário", "correct": false}, {"text": "no envelope", "correct": true}]'),
    (32, 'Onde encontramos um <strong>umbigo</strong>?', '[{"text": "na barriga", "correct": true}, {"text": "no braço", "correct": false}, {"text": "no pescoço", "correct": false}]'),
    (33, 'Onde encontramos <strong>gasolina</strong>?', '[{"text": "no mercado", "correct": false}, {"text": "no posto", "correct": true}, {"text": "na papelaria", "correct": false}]'),
    (34, 'Onde encontramos um <strong>cachorro</strong>?', '[{"text": "no petshop", "correct": true}, {"text": "no avião", "correct": false}, {"text": "na doceria", "correct": false}]'),
    (35, 'Onde encontramos um <strong>ingresso</strong>?', '[{"text": "no ateliê", "correct": false}, {"text": "na bilheteria", "correct": true}, {"text": "na galeria", "correct": false}]'),
    (36, 'Onde encontramos um <strong>pneu</strong>?', '[{"text": "na banca", "correct": false}, {"text": "no carro", "correct": true}, {"text": "na alfaiataria", "correct": false}]'),
    (37, 'Onde encontramos um <strong>bolo de aniversário</strong>?', '[{"text": "na joalheria", "correct": false}, {"text": "no cinema", "correct": false}, {"text": "na confeitaria", "correct": true}]'),
    (38, 'Onde encontramos um <strong>palhaço</strong>?', '[{"text": "na farmácia", "correct": false}, {"text": "no mercado", "correct": false}, {"text": "no circo", "correct": true}]'),
    (39, 'Onde encontramos <strong>lenha</strong>?', '[{"text": "num consultório", "correct": false}, {"text": "numa lavanderia", "correct": false}, {"text": "numa lareira", "correct": true}]'),
    (40, 'Onde encontramos um <strong>helicóptero</strong>?', '[{"text": "no céu", "correct": true}, {"text": "no mar", "correct": false}, {"text": "numa piscina", "correct": false}]'),
    (41, 'Onde encontramos um <strong>colar</strong>?', '[{"text": "na sapateira", "correct": false}, {"text": "no chiqueiro", "correct": false}, {"text": "na joalheria", "correct": true}]'),
    (42, 'Onde encontramos uma <strong>âncora</strong>?', '[{"text": "no avião", "correct": false}, {"text": "no ônibus", "correct": false}, {"text": "no navio", "correct": true}]'),
    (43, 'Onde encontramos um <strong>bigode</strong>?', '[{"text": "no pescoço", "correct": false}, {"text": "na face", "correct": true}, {"text": "na testa", "correct": false}]'),
    (44, 'Onde encontramos um <strong>grampeador</strong>?', '[{"text": "no calendário", "correct": false}, {"text": "na escrivaninha", "correct": true}, {"text": "no bufê", "correct": false}]'),
    (45, 'Onde encontramos um <strong>metrô</strong>?', '[{"text": "na praia", "correct": false}, {"text": "no parque", "correct": false}, {"text": "na cidade", "correct": true}]'),
    (46, 'Onde encontramos um <strong>cabide</strong>?', '[{"text": "no abajur", "correct": false}, {"text": "no armário", "correct": true}, {"text": "na geladeira", "correct": false}]'),
    (47, 'Onde encontramos <strong>remédios</strong>?', '[{"text": "na floricultura", "correct": false}, {"text": "na doceria", "correct": false}, {"text": "na farmácia", "correct": true}]'),
    (48, 'Onde encontramos <strong>verduras</strong>?', '[{"text": "na livraria", "correct": false}, {"text": "na banca de jornais", "correct": false}, {"text": "na feira", "correct": true}]'),
    (49, 'Onde encontramos <strong>livros</strong>?', '[{"text": "na cantina", "correct": false}, {"text": "na biblioteca", "correct": true}, {"text": "na pizzaria", "correct": false}]'),
    (50, 'Onde encontramos uma <strong>escada rolante</strong>?', '[{"text": "na doceria", "correct": false}, {"text": "na farmácia", "correct": false}, {"text": "no shopping", "correct": true}]'),
    (51, 'Onde encontramos <strong>borboletas</strong>?', '[{"text": "na livraria", "correct": false}, {"text": "no jardim", "correct": true}, {"text": "no banheiro", "correct": false}]'),
    (52, 'Onde encontramos uma <strong>geladeira</strong>?', '[{"text": "no quarto", "correct": false}, {"text": "na sala", "correct": false}, {"text": "na cozinha", "correct": true}]'),
    (53, 'Onde encontramos um <strong>violino</strong>?', '[{"text": "na orquestra", "correct": true}, {"text": "no elevador", "correct": false}, {"text": "no piano", "correct": false}]'),
    (54, 'Onde encontramos <strong>macarrãozinho</strong>?', '[{"text": "no brigadeiro", "correct": false}, {"text": "na sopa", "correct": true}, {"text": "na torta de maçã", "correct": false}]'),
    (55, 'Onde encontramos <strong>tomate</strong>?', '[{"text": "no molho", "correct": true}, {"text": "na mochila", "correct": false}, {"text": "na água", "correct": false}]'),
    (56, 'Onde encontramos uma <strong>baleia</strong>?', '[{"text": "na lua", "correct": false}, {"text": "no sol", "correct": false}, {"text": "no mar", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- Filmes conhecidos (7 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Filmes conhecidos|pink', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Filmes conhecidos|pink' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Alice no País das…', '[{"text": "belezas", "correct": false}, {"text": "maravilhas", "correct": true}]'),
    (2, 'Branca de Neve e os sete…', '[{"text": "macacos", "correct": false}, {"text": "anões", "correct": true}]'),
    (3, 'O Fantasma da…', '[{"text": "ópera", "correct": true}, {"text": "oficina", "correct": false}]'),
    (4, 'E o Vento…', '[{"text": "soprou", "correct": false}, {"text": "levou", "correct": true}]'),
    (5, 'Um violinista no…', '[{"text": "porão", "correct": false}, {"text": "telhado", "correct": true}]'),
    (6, 'O Mágico de…', '[{"text": "Oz", "correct": true}, {"text": "Ás", "correct": false}]'),
    (7, 'A Bela e a…', '[{"text": "feia", "correct": false}, {"text": "fera", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- E por falar em músicos... (6 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'E por falar em músicos...|pink', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'E por falar em músicos...|pink' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Paulinho da…', '[{"text": "Viola", "correct": true}, {"text": "Violino", "correct": false}]'),
    (2, 'Martinho da…', '[{"text": "Gaita", "correct": false}, {"text": "Vila", "correct": true}]'),
    (3, 'Ney…', '[{"text": "Tocantins", "correct": false}, {"text": "Matogrosso", "correct": true}]'),
    (4, 'Vinícius de…', '[{"text": "Barros", "correct": false}, {"text": "Moraes", "correct": true}]'),
    (5, 'Tom…', '[{"text": "João", "correct": false}, {"text": "Zé", "correct": true}]'),
    (6, 'Zeca…', '[{"text": "Bigodinho", "correct": false}, {"text": "Pagodinho", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- O que podemos (17 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'O que podemos|green', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'O que podemos|green' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'O que podemos tomar?', '[{"text": "suco", "correct": true}, {"text": "sanduíche", "correct": false}]'),
    (2, 'O que podemos esfregar?', '[{"text": "estrelas", "correct": false}, {"text": "chão", "correct": true}]'),
    (3, 'O que podemos alugar?', '[{"text": "casa", "correct": true}, {"text": "sombra", "correct": false}]'),
    (4, 'O que podemos carregar?', '[{"text": "bolsa", "correct": true}, {"text": "esporte", "correct": false}]'),
    (5, 'O que podemos costurar?', '[{"text": "roupa", "correct": true}, {"text": "canivete", "correct": false}]'),
    (6, 'O que podemos quebrar?', '[{"text": "garoa", "correct": false}, {"text": "copo", "correct": true}]'),
    (7, 'O que podemos abotoar?', '[{"text": "camisa", "correct": true}, {"text": "chocolate", "correct": false}]'),
    (8, 'O que podemos coar?', '[{"text": "café", "correct": true}, {"text": "caderneta", "correct": false}]'),
    (9, 'O que podemos comer?', '[{"text": "papel", "correct": false}, {"text": "macarrão", "correct": true}]'),
    (10, 'O que podemos discutir?', '[{"text": "opiniões", "correct": true}, {"text": "travesseiros", "correct": false}]'),
    (11, 'O que podemos pedir?', '[{"text": "Sol", "correct": false}, {"text": "comida japonesa", "correct": true}]'),
    (12, 'O que podemos engraxar?', '[{"text": "sapatos", "correct": true}, {"text": "meias", "correct": false}]'),
    (13, 'O que podemos torcer?', '[{"text": "panos", "correct": true}, {"text": "ervilhas", "correct": false}]'),
    (14, 'O que podemos ouvir?', '[{"text": "praia", "correct": false}, {"text": "música", "correct": true}]'),
    (15, 'O que podemos pendurar?', '[{"text": "cabide", "correct": true}, {"text": "sobremesa", "correct": false}]'),
    (16, 'O que podemos mastigar?', '[{"text": "almofada", "correct": false}, {"text": "bolacha", "correct": true}]'),
    (17, 'O que podemos emprestar?', '[{"text": "saúde", "correct": false}, {"text": "casaco", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- O que NÃO podemos (8 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'O que NÃO podemos|red', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'O que NÃO podemos|red' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'O que <strong>não</strong> podemos comer?', '[{"text": "papel", "correct": true}, {"text": "macarrão", "correct": false}]'),
    (2, 'O que <strong>não</strong> podemos discutir?', '[{"text": "opiniões", "correct": false}, {"text": "travesseiros", "correct": true}]'),
    (3, 'O que <strong>não</strong> podemos pedir?', '[{"text": "vento", "correct": true}, {"text": "pizza", "correct": false}]'),
    (4, 'O que <strong>não</strong> podemos dobrar?', '[{"text": "papel", "correct": false}, {"text": "lápis", "correct": true}]'),
    (5, 'O que <strong>não</strong> podemos cozinhar?', '[{"text": "celulares", "correct": true}, {"text": "cenouras", "correct": false}]'),
    (6, 'O que <strong>não</strong> podemos varrer?', '[{"text": "folhas", "correct": false}, {"text": "lâmpadas", "correct": true}]'),
    (7, 'O que <strong>não</strong> podemos queimar?', '[{"text": "papéis", "correct": false}, {"text": "nuvens", "correct": true}]'),
    (8, 'O que <strong>não</strong> podemos costurar?', '[{"text": "vestidos", "correct": false}, {"text": "mesas", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- Onde (9 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Onde|blue', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Onde|blue' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Onde assamos um peru?', '[{"text": "na frigideira", "correct": false}, {"text": "na geladeira", "correct": false}, {"text": "no forno", "correct": true}]'),
    (2, 'Onde anotamos um compromisso?', '[{"text": "no carvão", "correct": false}, {"text": "na agenda", "correct": true}, {"text": "na cadeira", "correct": false}]'),
    (3, 'Onde assistimos a uma Missa?', '[{"text": "no teatro", "correct": false}, {"text": "no parque", "correct": false}, {"text": "na igreja", "correct": true}]'),
    (4, 'Onde tratamos dos dentes?', '[{"text": "na Internet", "correct": false}, {"text": "na escola", "correct": false}, {"text": "no dentista", "correct": true}]'),
    (5, 'Onde o clima é muito árido e quente?', '[{"text": "no deserto", "correct": true}, {"text": "na floresta", "correct": false}, {"text": "nos polos", "correct": false}]'),
    (6, 'Onde há trânsito intenso?', '[{"text": "na cidade grande", "correct": true}, {"text": "à beira mar", "correct": false}, {"text": "no interior", "correct": false}]'),
    (7, 'Onde há muito barulho?', '[{"text": "nas savanas", "correct": false}, {"text": "nas ilhas", "correct": false}, {"text": "no trio elétrico", "correct": true}]'),
    (8, 'Onde observamos animais?', '[{"text": "no trânsito", "correct": false}, {"text": "no zoológico", "correct": true}, {"text": "nas pontes", "correct": false}]'),
    (9, 'Onde usamos um fraque?', '[{"text": "num jogo", "correct": false}, {"text": "num churrasco", "correct": false}, {"text": "num casamento", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- Onde colocamos (14 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Onde colocamos|yellow', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Onde colocamos|yellow' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Onde colocamos um <strong>capacete</strong>?', '[{"text": "nos pés", "correct": false}, {"text": "na cabeça", "correct": true}, {"text": "na barriga", "correct": false}]'),
    (2, 'Onde colocamos um <strong>travesseiro</strong>?', '[{"text": "no forno", "correct": false}, {"text": "na cama", "correct": true}, {"text": "na mesa", "correct": false}]'),
    (3, 'Onde colocamos um <strong>cadeado</strong>?', '[{"text": "na corrente", "correct": true}, {"text": "no pescoço", "correct": false}, {"text": "no braço", "correct": false}]'),
    (4, 'Onde colocamos <strong>fermento</strong>?', '[{"text": "na salada", "correct": false}, {"text": "na massa", "correct": true}, {"text": "no molho", "correct": false}]'),
    (5, 'Onde colocamos <strong>luvas</strong>?', '[{"text": "nas mãos", "correct": true}, {"text": "nos calcanhares", "correct": false}, {"text": "na cintura", "correct": false}]'),
    (6, 'Onde colocamos <strong>quadros</strong>?', '[{"text": "no jardim", "correct": false}, {"text": "na parede", "correct": true}, {"text": "na piscina", "correct": false}]'),
    (7, 'Onde colocamos uma <strong>mochila</strong>?', '[{"text": "nos pulsos", "correct": false}, {"text": "nos cotovelos", "correct": false}, {"text": "nas costas", "correct": true}]'),
    (8, 'Onde colocamos <strong>sorvete</strong>?', '[{"text": "na taça", "correct": true}, {"text": "na panela", "correct": false}, {"text": "na jarra", "correct": false}]'),
    (9, 'Onde colocamos <strong>flores</strong>?', '[{"text": "no forno", "correct": false}, {"text": "no freezer", "correct": false}, {"text": "no vaso", "correct": true}]'),
    (10, 'Onde colocamos <strong>sabão</strong>?', '[{"text": "na geladeira", "correct": false}, {"text": "na máquina de lavar", "correct": true}, {"text": "no forno", "correct": false}]'),
    (11, 'Onde colocamos uma <strong>lâmpada</strong>?', '[{"text": "no chuveiro", "correct": false}, {"text": "na cadeira", "correct": false}, {"text": "no abajur", "correct": true}]'),
    (12, 'Onde colocamos <strong>esmalte</strong>?', '[{"text": "nas unhas", "correct": true}, {"text": "nas pernas", "correct": false}, {"text": "nos joelhos", "correct": false}]'),
    (13, 'Onde colocamos <strong>queijo</strong>?', '[{"text": "no brigadeiro", "correct": false}, {"text": "no feijão", "correct": false}, {"text": "no sanduíche", "correct": true}]'),
    (14, 'Onde colocamos <strong>sal</strong>?', '[{"text": "na goiabada", "correct": false}, {"text": "na pipoca", "correct": true}, {"text": "no violino", "correct": false}]')
) as item(n, word, choices)
order by item.n;

-- Se... (21 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Se...|gray', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Se...|gray' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Se alguém está fritando um ovo, provavelmente está na:', '[{"text": "calçada", "correct": false}, {"text": "cozinha", "correct": true}, {"text": "lavanderia", "correct": false}]'),
    (2, 'Se uma pessoa está xingando alguém, provavelmente está:', '[{"text": "calma", "correct": false}, {"text": "furiosa", "correct": true}, {"text": "com sono", "correct": false}]'),
    (3, 'Se alguém está num convés, provavelmente está num:', '[{"text": "ônibus", "correct": false}, {"text": "navio", "correct": true}, {"text": "avião", "correct": false}]'),
    (4, 'Se alguém está num clube, provavelmente está fazendo:', '[{"text": "um exame", "correct": false}, {"text": "uma cirurgia", "correct": false}, {"text": "um esporte", "correct": true}]'),
    (5, 'Se alguém está num restaurante, provavelmente está:', '[{"text": "dormindo", "correct": false}, {"text": "comendo", "correct": true}, {"text": "se casando", "correct": false}]'),
    (6, 'Se alguém está num estádio, provavelmente está assistindo a:', '[{"text": "uma peça de teatro", "correct": false}, {"text": "um jogo", "correct": true}, {"text": "um filme", "correct": false}]'),
    (7, 'Se alguém está numa academia, provavelmente está:', '[{"text": "treinando", "correct": true}, {"text": "estudando", "correct": false}, {"text": "almoçando", "correct": false}]'),
    (8, 'Se alguém está nadando, provavelmente está numa:', '[{"text": "estrada", "correct": false}, {"text": "piscina", "correct": true}, {"text": "corrida", "correct": false}]'),
    (9, 'Se alguém está apostando, provavelmente está num:', '[{"text": "jantar", "correct": false}, {"text": "cassino", "correct": true}, {"text": "metrô", "correct": false}]'),
    (10, 'Se alguém está andando de bicicleta, provavelmente está:', '[{"text": "escrevendo", "correct": false}, {"text": "cozinhando", "correct": false}, {"text": "pedalando", "correct": true}]'),
    (11, 'Se alguém está num salão de beleza, provavelmente está arrumando o:', '[{"text": "armário", "correct": false}, {"text": "cabelo", "correct": true}, {"text": "quarto", "correct": false}]'),
    (12, 'Se alguém está pescando, provavelmente está usando um:', '[{"text": "cabide", "correct": false}, {"text": "arame", "correct": false}, {"text": "anzol", "correct": true}]'),
    (13, 'Se alguém está usando um bisturi, provavelmente é um:', '[{"text": "ator", "correct": false}, {"text": "mágico", "correct": false}, {"text": "cirurgião", "correct": true}]'),
    (14, 'Se alguém está comprando uma passagem aérea, provavelmente vai:', '[{"text": "viajar", "correct": true}, {"text": "tossir", "correct": false}, {"text": "mentir", "correct": false}]'),
    (15, 'Se alguém está dirigindo, provavelmente está num:', '[{"text": "apartamento", "correct": false}, {"text": "automóvel", "correct": true}, {"text": "abrigo", "correct": false}]'),
    (16, 'Se alguém está trancando uma porta, provavelmente tem em mãos uma:', '[{"text": "balança", "correct": false}, {"text": "caneta", "correct": false}, {"text": "chave", "correct": true}]'),
    (17, 'Se alguém está tomando café, provavelmente tem em mãos uma:', '[{"text": "xícara", "correct": true}, {"text": "borracha", "correct": false}, {"text": "furadeira", "correct": false}]'),
    (18, 'Se alguém está pintando uma tela, provavelmente tem em mãos um:', '[{"text": "calendário", "correct": false}, {"text": "martelo", "correct": false}, {"text": "pincel", "correct": true}]'),
    (19, 'Se alguém está usando um serrote, provavelmente é um:', '[{"text": "padre", "correct": false}, {"text": "marceneiro", "correct": true}, {"text": "carteiro", "correct": false}]'),
    (20, 'Se alguém está dando uma palestra, provavelmente está usando um:', '[{"text": "espelho", "correct": false}, {"text": "estetoscópio", "correct": false}, {"text": "microfone", "correct": true}]'),
    (21, 'Se alguém está usando uma colher, provavelmente está tomando:', '[{"text": "banho", "correct": false}, {"text": "sopa", "correct": true}, {"text": "água", "correct": false}]')
) as item(n, word, choices)
order by item.n;

-- O que acontece? (14 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'O que acontece?|red', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'O que acontece?|red' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'O que acontece numa maternidade?', '[{"text": "compram-se eletrodomésticos", "correct": false}, {"text": "nascem bebês", "correct": true}]'),
    (2, 'O que acontece em museus?', '[{"text": "recebem-se visitantes", "correct": true}, {"text": "cozinham-se perus", "correct": false}]'),
    (3, 'O que acontece numa viagem de avião?', '[{"text": "tiram-se xerox", "correct": false}, {"text": "apertam-se cintos de segurança", "correct": true}]'),
    (4, 'O que acontece numa cozinha?', '[{"text": "cortam-se cebolas", "correct": true}, {"text": "checam-se bagagens", "correct": false}]'),
    (5, 'O que acontece num salão de beleza?', '[{"text": "escova-se o cabelo", "correct": true}, {"text": "corre-se uma maratona", "correct": false}]'),
    (6, 'O que acontece num restaurante?', '[{"text": "compram-se joias", "correct": false}, {"text": "servem às mesas", "correct": true}]'),
    (7, 'O que acontece num estádio?', '[{"text": "assistem jogos", "correct": true}, {"text": "têm liquidações", "correct": false}]'),
    (8, 'O que acontece no nosso aniversário?', '[{"text": "damos uma palestra", "correct": false}, {"text": "ganhamos presentes", "correct": true}]'),
    (9, 'O que acontece num supermercado?', '[{"text": "fazem-se compras", "correct": true}, {"text": "joga-se bola", "correct": false}]'),
    (10, 'O que acontece numa farmácia?', '[{"text": "aviam-se remédios", "correct": true}, {"text": "estuda-se inglês", "correct": false}]'),
    (11, 'O que acontece num teatro?', '[{"text": "faz-se tricô", "correct": false}, {"text": "representam uma peça", "correct": true}]'),
    (12, 'O que acontece numa barbearia?', '[{"text": "come-se", "correct": false}, {"text": "corta-se cabelo", "correct": true}]'),
    (13, 'O que acontece num musical?', '[{"text": "cantores se apresentam", "correct": true}, {"text": "juntam-se latinhas", "correct": false}]'),
    (14, 'O que acontece quando alugamos uma casa?', '[{"text": "vendemos o carro", "correct": false}, {"text": "assinamos um contrato", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- Compramos (8 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Compramos|green', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Compramos|green' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Compramos remédios em:', '[{"text": "feiras", "correct": false}, {"text": "farmácias", "correct": true}, {"text": "drogarias", "correct": true}, {"text": "lojas", "correct": false}]'),
    (2, 'Compramos um bolo em:', '[{"text": "peixarias", "correct": false}, {"text": "docerias", "correct": true}, {"text": "padarias", "correct": true}, {"text": "sorveterias", "correct": false}]'),
    (3, 'Compramos cerveja em:', '[{"text": "mercados", "correct": true}, {"text": "bares", "correct": true}, {"text": "escolas", "correct": false}, {"text": "creches", "correct": false}]'),
    (4, 'Compramos colares em:', '[{"text": "drogarias", "correct": false}, {"text": "butiques", "correct": true}, {"text": "pizzarias", "correct": false}, {"text": "joalherias", "correct": true}]'),
    (5, 'Compramos óculos de sol em:', '[{"text": "praias", "correct": true}, {"text": "óticas", "correct": true}, {"text": "açougues", "correct": false}, {"text": "sapatarias", "correct": false}]'),
    (6, 'Compramos pipoca em:', '[{"text": "carrinhos", "correct": true}, {"text": "Pet shops", "correct": false}, {"text": "cinemas", "correct": true}, {"text": "aeroportos", "correct": false}]'),
    (7, 'Compramos flores em:', '[{"text": "esquinas", "correct": true}, {"text": "sapatarias", "correct": false}, {"text": "floriculturas", "correct": true}, {"text": "livrarias", "correct": false}]'),
    (8, 'Compramos sanduíches em:', '[{"text": "lanchonetes", "correct": true}, {"text": "balsas", "correct": false}, {"text": "borracharias", "correct": false}, {"text": "padarias", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- Quais (10 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Quais|blue', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Quais|blue' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Quais destes voam?', '[{"text": "ratos", "correct": false}, {"text": "patos", "correct": true}, {"text": "gatos", "correct": false}, {"text": "baratas", "correct": true}]'),
    (2, 'Quais destes têm dentes?', '[{"text": "alhos", "correct": false}, {"text": "bugalhos", "correct": false}, {"text": "quilos", "correct": false}, {"text": "esquilos", "correct": true}]'),
    (3, 'Quais destas são redondas?', '[{"text": "solas", "correct": false}, {"text": "bolas", "correct": true}, {"text": "argolas", "correct": true}, {"text": "camisolas", "correct": false}]'),
    (4, 'Quais destes têm cordas?', '[{"text": "harpas", "correct": true}, {"text": "farpas", "correct": false}, {"text": "violões", "correct": true}, {"text": "limões", "correct": false}]'),
    (5, 'Quais destes são gelados?', '[{"text": "perus", "correct": false}, {"text": "iglus", "correct": true}, {"text": "patinetes", "correct": false}, {"text": "sorvetes", "correct": true}]'),
    (6, 'Quais destes têm rodas?', '[{"text": "carretas", "correct": true}, {"text": "cornetas", "correct": false}, {"text": "aviões", "correct": true}, {"text": "feijões", "correct": false}]'),
    (7, 'Quais destes têm ossos?', '[{"text": "braços", "correct": true}, {"text": "maços", "correct": false}, {"text": "pinhas", "correct": false}, {"text": "galinhas", "correct": true}]'),
    (8, 'Quais destes têm pelos?', '[{"text": "macacos", "correct": true}, {"text": "galos", "correct": false}, {"text": "alces", "correct": true}, {"text": "alfaces", "correct": false}]'),
    (9, 'Quais destes servem para aquecer?', '[{"text": "girassóis", "correct": false}, {"text": "cachecóis", "correct": true}, {"text": "uvas", "correct": false}, {"text": "luvas", "correct": true}]'),
    (10, 'Quais destes meses têm dias mais frios?', '[{"text": "junho", "correct": true}, {"text": "julho", "correct": true}, {"text": "dezembro", "correct": false}, {"text": "fevereiro", "correct": false}]')
) as item(n, word, choices)
order by item.n;

-- Fazem parte (14 perguntas)
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Fazem parte|yellow', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Fazem parte|yellow' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Fazem parte de uma calça:', '[{"text": "bolso", "correct": true}, {"text": "gola", "correct": false}, {"text": "zíper", "correct": true}, {"text": "colarinho", "correct": false}]'),
    (2, 'Fazem parte de um celular:', '[{"text": "bateria", "correct": true}, {"text": "teclado", "correct": true}, {"text": "pedal", "correct": false}, {"text": "roda", "correct": false}]'),
    (3, 'Fazem parte de uma casa:', '[{"text": "torre", "correct": false}, {"text": "montanha", "correct": false}, {"text": "cozinha", "correct": true}, {"text": "janela", "correct": true}]'),
    (4, 'Fazem parte de um avião:', '[{"text": "asa", "correct": true}, {"text": "hélice", "correct": true}, {"text": "abajur", "correct": false}, {"text": "helicóptero", "correct": false}]'),
    (5, 'Fazem parte de um computador:', '[{"text": "tela", "correct": true}, {"text": "lapiseira", "correct": false}, {"text": "toalha", "correct": false}, {"text": "teclado", "correct": true}]'),
    (6, 'Fazem parte de um dedo:', '[{"text": "ossinhos", "correct": true}, {"text": "cabelos", "correct": false}, {"text": "unhas", "correct": true}, {"text": "garras", "correct": false}]'),
    (7, 'Fazem parte de um salão de beleza:', '[{"text": "bicicleta", "correct": false}, {"text": "secador", "correct": true}, {"text": "gramado", "correct": false}, {"text": "tesoura", "correct": true}]'),
    (8, 'Fazem parte de uma marcenaria:', '[{"text": "serrote", "correct": true}, {"text": "caranguejo", "correct": false}, {"text": "freezer", "correct": false}, {"text": "martelo", "correct": true}]'),
    (9, 'Fazem parte de uma construção:', '[{"text": "panetone", "correct": false}, {"text": "cimento", "correct": true}, {"text": "penas", "correct": false}, {"text": "areia", "correct": true}]'),
    (10, 'Fazem parte de um lápis:', '[{"text": "tampa", "correct": false}, {"text": "grafite", "correct": true}, {"text": "borracha", "correct": true}, {"text": "caneta", "correct": false}]'),
    (11, 'Fazem parte de uma feijoada:', '[{"text": "linguiça", "correct": true}, {"text": "melancia", "correct": false}, {"text": "feijão", "correct": true}, {"text": "espinafre", "correct": false}]'),
    (12, 'Fazem parte de um strogonoff:', '[{"text": "beterraba", "correct": false}, {"text": "abobrinha", "correct": false}, {"text": "creme de leite", "correct": true}, {"text": "carne", "correct": true}]'),
    (13, 'Fazem parte de uma macarronada:', '[{"text": "molho", "correct": true}, {"text": "brigadeiro", "correct": false}, {"text": "pizza", "correct": false}, {"text": "queijo ralado", "correct": true}]'),
    (14, 'Fazem parte de um bolo:', '[{"text": "ovos", "correct": true}, {"text": "arroz", "correct": false}, {"text": "lentilha", "correct": false}, {"text": "farinha", "correct": true}]')
) as item(n, word, choices)
order by item.n;

-- Escolha uma resposta entre três (5 perguntas) — capítulo 23, de foto da
-- página (fora do apostila_completa.txt).
with novo_exercicio as (
  insert into public.exercises (title, visible, game_kind, syllables_size, syllables_color, syllables_font)
  select 'Escolha uma resposta entre três|blue', false, 'choice', 44, '#1f1f1f', '''Outfit'', sans-serif'
  where not exists (
    select 1 from public.exercises
    where title = 'Escolha uma resposta entre três|blue' and game_kind = 'choice' and doctor_user_id is null and patient_id is null
  )
  returning id
)
insert into public.exercise_items (exercise_id, word, choices, syllables, link)
select novo_exercicio.id, item.word, item.choices::jsonb, '', ''
from novo_exercicio
cross join (values
    (1, 'Este alimento pode ser frito.', '[{"text": "ovo", "correct": true}, {"text": "uva", "correct": false}, {"text": "alface", "correct": false}]'),
    (2, 'Este verbo pode ser usado em receitas culinárias.', '[{"text": "sonhar", "correct": false}, {"text": "dourar", "correct": true}, {"text": "alugar", "correct": false}]'),
    (3, 'Este objeto é redondo.', '[{"text": "celular", "correct": false}, {"text": "livro", "correct": false}, {"text": "bambolê", "correct": true}]'),
    (4, 'Este objeto marca o tempo.', '[{"text": "barômetro", "correct": false}, {"text": "termômetro", "correct": false}, {"text": "cronômetro", "correct": true}]'),
    (5, 'Este objeto é usado para cortar.', '[{"text": "sabonete", "correct": false}, {"text": "pilha", "correct": false}, {"text": "canivete", "correct": true}]')
) as item(n, word, choices)
order by item.n;

commit;
