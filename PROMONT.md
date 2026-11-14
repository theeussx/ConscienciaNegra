# RAÍZES — ALÉM DA COR
## MASTER PROMPT — EXPERIÊNCIA DOCUMENTAL INTERATIVA

### MISSÃO

Você atuará como uma equipe de especialistas composta por:

- Creative Director.
- Principal Frontend Engineer.
- Senior React/TypeScript Developer.
- Motion Designer.
- UI/UX Designer.
- Especialista em acessibilidade.
- Especialista em performance web.
- QA Automation Engineer.
- Pesquisador de história e cultura afro-brasileira.

Sua missão é transformar o projeto existente **RAÍZES — ALÉM DA COR** em uma experiência documental interativa, cinematográfica, educativa, fluida, visualmente autoral e tecnicamente confiável.

O projeto será apresentado ao vivo em um palco escolar, utilizando computador e projetor.

A interface deve funcionar como uma narrativa conduzida pelo apresentador.

Enquanto o apresentador gira a rodinha do mouse, novas informações aparecem progressivamente, como capítulos de uma história.

Quando um assunto precisar de aprofundamento, o apresentador poderá clicar em um elemento interativo. O conteúdo abrirá suavemente, e suas informações serão reveladas com efeito de digitação.

O site deve acompanhar o ritmo da apresentação, e não obrigar o apresentador a acompanhar animações automáticas.

**Não quero uma landing page, um PowerPoint disfarçado de site, nem uma demonstração exagerada de bibliotecas de animação.**

Quero uma experiência original, envolvente e profissional.

---

# 1. CONTEXTO DO PROJETO EXISTENTE

O projeto já possui uma implementação funcional baseada em React, TypeScript e uma narrativa organizada em nove capítulos e aproximadamente 14 cenas.

Funcionalidades previamente implementadas incluem:

- Narrativa contínua por rolagem.
- Revelações progressivas.
- Modo apresentação.
- Modo automático.
- Digitação progressiva.
- Diálogos animados.
- Navegação por teclado.
- Fullscreen.
- Notas do apresentador.
- Referências históricas.
- Participantes centralizados.
- Recursos offline.
- Testes com Playwright.

A versão anterior reportou build, TypeScript, quatro testes unitários e 12 testes E2E aprovados.

Entretanto, esses resultados são históricos.

**Inspecione o estado real do repositório antes de realizar qualquer alteração.**

Não assuma que tudo continua funcionando.

Não reinicie o projeto desnecessariamente.

Não destrua funcionalidades corretas.

Você está autorizado a refatorar componentes e estruturas quando houver benefício técnico demonstrável.

# 2. REFERÊNCIA CONCEITUAL

Estude o seguinte projeto:

Site:
https://perna-cabeluda.vercel.app/

Repositório:
https://github.com/theeussx/perna_cabeluda

O Perna Cabeluda é uma experiência narrativa desenvolvida para uma apresentação escolar.

Utilize-o como referência de:

- Scroll-driven storytelling.
- Revelação progressiva de conteúdo.
- Ritmo narrativo.
- Navegação contínua.
- Organização editorial.
- Componentes interativos.
- Experiências imersivas.
- Separação entre conteúdo e apresentação.

Inspecione especialmente os componentes:

- Entrance.tsx
- PernaReveal.tsx
- Archive.tsx
- Travel.tsx
- Chrome.tsx
- Participants.tsx

Observe como os elementos aparecem conforme a rolagem e como conteúdos detalhados são apresentados após a interação.

### REGRA DE ORIGINALIDADE

Não copiar código, layouts, textos, imagens, cores, animações idênticas ou identidade visual do Perna Cabeluda.

A referência serve para compreender os princípios de experiência narrativa.

O RAÍZES deve possuir identidade própria.

---

# 3. CONCEITO NARRATIVO

Nome:

RAÍZES — ALÉM DA COR

Subtítulo:

"Uma história de identidade, cultura, resistência e humanidade."

Mensagem central:

A história da população negra não começa com a escravidão e não termina com a abolição.

A experiência deve apresentar:

1. Ancestralidade.
2. História e resistência.
3. Cultura afro-brasileira.
4. Culinária.
5. Racismo no esporte.
6. Personalidades negras.
7. Desafios contemporâneos.
8. Reflexão e encerramento.
9. Participantes.

A narrativa deve celebrar as contribuições da população negra sem minimizar a violência histórica e os problemas contemporâneos.

O conteúdo precisa ser historicamente correto, respeitoso e acessível ao público escolar.

# 4. NOVA DIREÇÃO DE ARTE

A identidade visual deve transmitir:

- Cultura.
- História.
- Humanidade.
- Criatividade.
- Contemporaneidade.
- Sensibilidade.
- Expressividade.
- Sofisticação editorial.

Abandonar completamente a aparência genérica de landing page criada por IA.

### Evitar

- Dourado metálico dominante.
- Layout corporativo.
- Glassmorphism excessivo.
- Gradientes decorativos.
- Cards repetitivos.
- Botões gigantes.
- Microtextos sem função.
- Fontes pequenas.
- Sombras exageradas.
- Elementos visuais que competem com o conteúdo.
- Animações sem significado.
- Texto excessivo em uma única tela.

### Preferir

- Fotografia documental.
- Composições editoriais.
- Tipografia expressiva.
- Contraste bem trabalhado.
- Espaçamento generoso.
- Assimetria intencional.
- Imagens em destaque.
- Mudanças de ritmo visual.
- Componentes com identidade.
- Transições cinematográficas discretas.

### Paleta inicial

- Fundo profundo: #171714
- Superfície escura: #24231E
- Creme: #F4ECDD
- Terracota: #C46F4F
- Verde oliva: #848C65
- Acento quente: #DBA66D

Essas cores são referências, não valores obrigatórios.

Refine a paleta após inspecionar a interface.

Não utilizar todas as cores simultaneamente.

Garantir contraste apropriado.

### Tipografia

Escolher uma combinação tipográfica expressiva e legível.

Utilizar:

- Títulos fortes.
- Subtítulos claros.
- Textos informativos com leitura confortável.
- Hierarquia consistente.
- Line-height adequado.
- Letter-spacing equilibrado.
- Escalas responsivas.

Priorizar legibilidade em projetor.

Não utilizar palavras enormes como decoração quando elas prejudicarem a leitura dos nomes e conteúdos.

# 5. ARQUITETURA NARRATIVA POR SCROLL

Este é o comportamento principal da aplicação.

A página deverá funcionar como uma narrativa vertical contínua.

Não utilizar um conjunto de slides rígidos com altura fixa como estrutura dominante.

Cada capítulo poderá conter múltiplos blocos narrativos.

### Comportamento esperado

O apresentador começa a rolar.

Primeiro aparece o título.

Conforme continua, uma fotografia entra suavemente.

Depois, uma explicação aparece.

Em seguida, surge um acontecimento, personagem ou conteúdo interativo.

Por fim, aparece uma transição para o próximo tema.

**As informações devem surgir individualmente, não todas ao mesmo tempo.**

### Tipos de revelação

Implementar um sistema reutilizável com:

- Fade-up.
- Reveal lateral.
- Reveal por máscara.
- Entrada progressiva de palavras.
- Transição fotográfica.
- Parallax sutil.
- Scale reveal.
- Sticky storytelling quando justificável.

Utilizar efeitos diferentes conforme a função narrativa.

Evitar repetir exatamente a mesma animação em todos os elementos.

### Controle por scroll

Utilizar Motion for React.

Empregar, conforme necessário:

- useScroll.
- useTransform.
- useSpring.
- useInView.
- IntersectionObserver.

Revelações simples podem ocorrer ao entrar na viewport.

Momentos cinematográficos podem acompanhar progressivamente a posição do scroll.

A rolagem deve permanecer natural.

Não bloquear o navegador agressivamente.

Não transformar cada pequeno movimento do mouse em troca obrigatória de cena.

Permitir que o apresentador pare em qualquer ponto e continue narrando.

Ao rolar para cima, conteúdos anteriores precisam continuar acessíveis e compreensíveis.

# 6. TIMING E RITMO NARRATIVO

O site será apresentado ao vivo.

Não quero que as animações determinem o tempo da apresentação.

Regras:

- A maior parte das revelações deve durar entre 300 e 700 ms.
- Transições cinematográficas podem durar mais, quando justificadas.
- Textos importantes precisam permanecer na tela.
- Não fazer informações desaparecerem antes de serem lidas.
- Não obrigar o apresentador a esperar animações longas.
- Permitir interrupção ou conclusão imediata.
- Não gerar grandes espaços vazios sem função.
- Não agrupar vários acontecimentos importantes numa única revelação.

A narrativa deve alternar momentos visuais intensos e momentos de leitura tranquila.

# 7. COMPONENTES INTERATIVOS

Nem todas as informações serão reveladas apenas por scroll.

Algumas precisarão de cliques.

Aplicar esse comportamento a:

- Personalidades negras.
- Pratos da culinária.
- Manifestações culturais.
- Marcos históricos.
- Acontecimentos do futebol.
- Informações adicionais.

### Ao clicar

1. O elemento responde visualmente.
2. O conteúdo detalhado abre suavemente.
3. O título é apresentado.
4. O texto começa a ser revelado com digitação.
5. O usuário pode pausar, continuar ou completar a escrita.
6. É possível fechar ou selecionar outra informação.
7. A navegação retorna ao ponto anterior naturalmente.

### Ao fechar

- Executar animação de saída.
- Cancelar corretamente a digitação.
- Restaurar foco.
- Preservar a posição do scroll.
- Não reiniciar o capítulo.
- Não causar saltos no layout.

### Troca rápida

Se o usuário clicar em outro card durante uma animação:

- Cancelar a animação anterior.
- Atualizar o conteúdo.
- Executar nova transição.
- Não misturar textos.
- Não duplicar timers.
- Não criar estados inconsistentes.

# 8. SISTEMA DE DIGITAÇÃO PROGRESSIVA

Preservar e aperfeiçoar useTypewriter.ts.

### Aplicação

Usar principalmente em textos que aparecem após cliques.

A narrativa principal deverá utilizar scroll reveal.

Os conteúdos detalhados usarão typewriter.

### Requisitos

- Digitação suave.
- Velocidade configurável.
- Preservação de caracteres Unicode.
- Pausar.
- Continuar.
- Completar imediatamente.
- Reiniciar.
- Cancelar ao fechar.
- Cancelar ao trocar de conteúdo.
- Respeitar movimento reduzido.
- Não causar mudanças bruscas de layout.

Utilizar segmentação Unicode adequada para evitar fragmentar caracteres compostos.

### Acessibilidade

O texto completo precisa permanecer disponível semanticamente para leitores de tela.

Não fazer leitores de tela anunciarem individualmente cada caractere.

Garantir seleção e cópia do texto quando completamente revelado.

# 9. CONTEÚDO DOS NOVE CAPÍTULOS

## CAPÍTULO 01 — ABERTURA

Título:

"Uma história que vive em nós."

Apresentar o conceito de Consciência Negra.

Criar uma abertura visualmente marcante.

Fotografia documental, título expressivo e revelações progressivas.

Eliminar aparência de hero comercial.

Não usar botão corporativo de chamada para ação.

## CAPÍTULO 02 — HISTÓRIA E RESISTÊNCIA

Abordar:

- Sociedades africanas anteriores à colonização.
- Escravização e tráfico transatlântico.
- Resistência.
- Quilombos.
- Zumbi dos Palmares.
- Dandara dos Palmares.
- Abolição.
- Limitações da abolição.
- 20 de novembro.

Criar uma narrativa cronológica.

Os acontecimentos devem aparecer progressivamente conforme a rolagem.

Utilizar imagens, datas e contextualizações curtas.

## CAPÍTULO 03 — CULTURA AFRO-BRASILEIRA

Título:

"A África que vive no Brasil."

Abordar:

- Maracatu.
- Capoeira.
- Samba.
- Música.
- Danças.
- Religiosidades de matriz africana.
- Arte.
- Linguagem.
- Tradições.

Destacar manifestações culturais de Pernambuco quando pertinente.

Criar estações interativas.

Ao clicar em cada manifestação, abrir uma contextualização com digitação progressiva.

Não tratar culturas africanas como uma única cultura homogênea.

## CAPÍTULO 04 — CULINÁRIA

Título:

"Sabores que contam histórias."

Apresentar:

- Acarajé.
- Vatapá.
- Caruru.
- Abará.
- Outros exemplos historicamente pertinentes.

Criar uma composição editorial gastronômica.

Fotografias grandes e contextualização cultural.

Ao clicar no prato:

- Revelar nome.
- Explicar sua história.
- Apresentar ingredientes característicos.
- Mostrar influências culturais.
- Utilizar digitação progressiva.

Verificar as origens e evitar atribuições históricas incorretas.

## CAPÍTULO 05 — RACISMO NO FUTEBOL

Título:

"O talento não deveria ter cor."

Este capítulo deve ter forte impacto narrativo.

### MARIO BALOTELLI — ESTUDO DE CASO PRINCIPAL

Apresentar o episódio de 3 de novembro de 2019, na partida Hellas Verona x Brescia.

Contextualizar:

- O jogador.
- A partida.
- Os insultos racistas relatados.
- A reação de Balotelli.
- A interrupção temporária do jogo.
- As consequências documentadas.
- A discussão sobre racismo no esporte.

Fontes para consulta inicial:

https://www.bbc.com/sport/football/50281847

https://www.bbc.com/sport/football/50299720

https://www.euronews.com/2019/11/03/balotelli-threatens-to-walk-off-over-racist-abuse-in-verona

Verificar as informações antes de publicar.

### NARRATIVA DO BALOTELLI

Primeiro scroll:
Revelar o título.

Segundo momento:
Fotografia do jogador.

Terceiro:
Data e local.

Quarto:
Contextualização da partida.

Quinto:
Acontecimento racista.

Sexto:
Reação do jogador.

Sétimo:
Timeline interativa.

Oitavo:
Reflexão final.

Não revelar tudo ao mesmo tempo.

Ao clicar em um marco da timeline, abrir detalhes com digitação progressiva.

### OUTROS JOGADORES

Incluir também:

- Vinícius Júnior.
- Richarlison.

Utilizar casos documentados.

Apresentar contexto, data e fontes.

Não inventar citações, punições ou desfechos.

O caso de Balotelli terá maior profundidade.

## CAPÍTULO 06 — PROTAGONISMO NEGRO

Título:

"Não apenas resistiram. Transformaram o mundo."

Apresentar:

- Machado de Assis.
- Carolina Maria de Jesus.
- Luiz Gama.
- Milton Santos.
- Conceição Evaristo.
- Pelé.

Criar composições editoriais de retratos.

Evitar cards genéricos repetitivos.

Ao clicar em uma personalidade, abrir detalhes com digitação.

Não permitir sobreposição de nomes, imagens e palavras decorativas.

## CAPÍTULO 07 — CONSCIÊNCIA NEGRA NA ATUALIDADE

Abordar:

- Racismo estrutural.
- Desigualdade social.
- Educação antirracista.
- Representatividade.
- Respeito.
- Valorização cultural.
- Responsabilidade coletiva.

Usar estatísticas somente quando verificadas.

Exibir instituição, ano e fonte.

Não inventar números.

## CAPÍTULO 08 — ENCERRAMENTO

Título:

"O futuro também tem raízes."

Criar uma conclusão emocionante e respeitosa.

Mensagem central:

"Conhecer a história é reconhecer o passado. Respeitar as diferenças é transformar o presente. Combater o racismo é construir o futuro."

Não exagerar nas animações.

Criar uma transição natural para os participantes.

## CAPÍTULO 09 — PARTICIPANTES

Título:

"Quem fez acontecer."

Utilizar os dados de:

src/content/participants.ts

Não inventar nomes.

Preservar placeholders quando os dados reais ainda não estiverem disponíveis.

Cada participante poderá possuir:

- Nome.
- Função.
- Fotografia opcional.
- Descrição opcional.

Criar composição editorial elegante.

Os participantes devem surgir progressivamente conforme a rolagem.

Adicionar referências e créditos finais após essa seção.

# 10. MODO APRESENTAÇÃO

Preservar o modo apresentação.

Mas o scroll será o principal mecanismo de navegação.

### Controles

- Rodinha do mouse: avançar naturalmente.
- Seta para baixo: próximo marco narrativo.
- Seta para cima: marco anterior.
- Espaço: avançar etapa quando apropriado.
- Escape: fechar overlays ou sair do fullscreen.
- Botão de capítulos: navegação direta.

Evitar conflitos entre teclas usadas pelo navegador e pelo aplicativo.

### Funcionalidades

- Fullscreen.
- Progresso discreto.
- Notas do apresentador.
- Acesso rápido aos capítulos.
- Retorno a conteúdos anteriores.
- Controle de digitação.
- Modo automático opcional.

Ao abrir um card, os controles devem respeitar o conteúdo ativo.

Não permitir que o mesmo evento dispare duas ações.

# 11. LAYOUT E RESPONSIVIDADE

O site deve funcionar em:

- 1920×1080.
- 1366×768.
- 768×1024.
- 390×844.

A prioridade é a projeção em formato 16:9.

Mas o site não deve depender de alturas fixas.

Evitar:

- Grandes faixas claras.
- Cabeçalhos excessivos.
- Rodapés gigantes.
- Textos sobrepostos.
- Imagens distorcidas.
- Scroll horizontal.
- Modais fora da viewport.
- Cards com conteúdo cortado.

Utilizar fluxo natural de layout.

Reservar posicionamento absoluto para composições que realmente precisam dele.

### Navegação

Criar controles discretos.

Não deixar barras fixas cobrirem botões.

Garantir que elementos decorativos não interceptem cliques.

Definir regras consistentes de z-index e pointer-events.

# 12. PERFORMANCE

A experiência deve funcionar bem num computador intermediário conectado a projetor.

Priorizar:

- Transform e opacity.
- Animações eficientes.
- Carregamento otimizado.
- Fontes locais.
- Imagens responsivas.
- Pré-carregamento inteligente.
- Ausência de memory leaks.
- Limpeza de listeners.
- Cancelamento de animações.
- Baixo custo de renderização.

Evitar efeitos pesados de blur, filtros e WebGL sem justificativa.

O objetivo é obter fluidez próxima de 60 FPS em dispositivos compatíveis.

Não declarar garantias de FPS sem medição.

# 13. ACESSIBILIDADE

Garantir:

- Contraste adequado.
- Navegação por teclado.
- Foco visível.
- Elementos semânticos.
- Textos alternativos.
- Controle de movimento.
- Suporte a prefers-reduced-motion.
- Informações acessíveis sem animação.
- Controles compreensíveis.
- Diálogos corretamente gerenciados.

Não ocultar informações essenciais exclusivamente em hover.

# 14. FUNCIONAMENTO OFFLINE

A apresentação deve funcionar sem internet após o carregamento ou instalação dos recursos necessários.

Preservar o sistema de cache existente.

Incluir localmente os recursos críticos.

Verificar:

- Fontes.
- Imagens essenciais.
- Scripts.
- Estilos.
- Conteúdo.
- Navegação.
- Interações.

Não depender de APIs externas durante a apresentação.

Oferecer fallback para recursos opcionais.

# 15. ARQUITETURA

Preservar a separação entre:

- Componentes.
- Capítulos.
- Conteúdo.
- Hooks.
- Animações.
- Estilos.
- Tipos.
- Recursos.
- Testes.

Auditar os arquivos existentes:

- App.tsx
- Scenes.tsx
- ScrollReveal.tsx
- SceneFrame.tsx
- Dialog.tsx
- usePresentation.ts
- useTypewriter.ts
- chapters.ts
- participants.ts
- presentationSettings.ts
- sources.ts
- global.css
- transitions.ts

Não duplicar estados.

Não criar controladores de scroll concorrentes.

Não acumular CSS corretivo sobre regras antigas defeituosas.

Centralizar design tokens e configurações de animação.

Implementar componentes reutilizáveis e bem tipados.

# 16. AUDITORIA VISUAL OBRIGATÓRIA

Utilizar ferramentas de navegador e Playwright.

Inspecionar os nove capítulos e suas cenas.

Testar:

- Rolagem lenta.
- Rolagem rápida.
- Retorno para cima.
- Reveals intermediários.
- Cards abertos.
- Cards fechados.
- Troca rápida de cards.
- Digitação em andamento.
- Digitação concluída.
- Diálogos.
- Participantes.
- Modo apresentação.
- Modo automático.
- Movimento reduzido.
- Recursos offline.

Capturar estados intermediários, não apenas páginas totalmente carregadas.

### Detectar colisões

Utilizar bounding boxes e inspeção visual para detectar:

- Sobreposição de textos.
- Imagens invadindo conteúdo.
- Botões cobertos.
- Elementos fora do viewport.
- Controles interceptados.
- Problemas de z-index.
- Quebras tipográficas.

Não confiar somente na ausência de overflow horizontal.

Uma página pode apresentar colisões mesmo sem overflow.

# 17. TESTES AUTOMATIZADOS

Executar:

- Build.
- TypeScript.
- Testes unitários.
- Testes E2E.
- Testes de acessibilidade disponíveis.
- Testes de funcionamento offline.

Preservar cobertura funcional existente.

Adaptar testes antigos quando a arquitetura mudar, sem enfraquecer os critérios.

Adicionar cobertura para:

1. Scroll progressivo.
2. Ordem das revelações.
3. Digitação.
4. Cancelamento.
5. Troca rápida de cards.
6. Navegação por teclado.
7. Nove capítulos.
8. Participantes.
9. Modo automático.
10. Redução de movimento.
11. Ausência de camadas interceptando cliques.
12. Estabilidade visual.

Não declarar resultados de testes que não foram executados.

# 18. EXECUÇÃO E ENTREGA

Execute em etapas:

1. Inspecionar o projeto atual.
2. Estudar o repositório de referência.
3. Auditar problemas reais.
4. Definir arquitetura e direção visual.
5. Refatorar os componentes necessários.
6. Implementar narrativa progressiva.
7. Integrar digitação aos cards.
8. Refinar os nove capítulos.
9. Corrigir tipografia e layout.
10. Integrar apresentação e navegação.
11. Otimizar performance.
12. Validar responsividade.
13. Executar testes automatizados.
14. Inspecionar visualmente.
15. Corrigir regressões.
16. Documentar os resultados.

Não interrompa desnecessariamente a execução para relatar pequenas alterações intermediárias.

Continue enquanto houver trabalho executável.

Não criar commits, pushes ou deploys sem autorização.

Ao finalizar, forneça:

- Resumo das alterações.
- Componentes modificados.
- Funcionalidades implementadas.
- Resultados dos testes.
- Problemas corrigidos.
- Limitações encontradas.
- Orientações para apresentação no palco.

# CRITÉRIO FINAL DE QUALIDADE

O projeto só estará pronto quando o apresentador conseguir percorrer toda a narrativa naturalmente.

Ele deve poder:

- Rolar e revelar informações progressivamente.
- Parar para explicar.
- Continuar rolando.
- Abrir um assunto.
- Acompanhar a digitação.
- Completar a escrita quando desejar.
- Fechar o assunto.
- Retomar exatamente de onde parou.
- Navegar entre capítulos.
- Concluir a apresentação sem problemas visuais ou técnicos.

O resultado deve ser original, organizado, expressivo e emocionalmente envolvente.

**RAÍZES — ALÉM DA COR não deve parecer um site que apresenta informações. Deve parecer uma história que ganha vida enquanto é contada.**

Implemente a experiência completa diretamente no projeto existente.