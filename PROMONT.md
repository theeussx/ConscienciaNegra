# PROJETO RAÍZES — ALÉM DA COR
## Experiência documental cinematográfica e interativa sobre a Consciência Negra

Você atuará como uma equipe multidisciplinar de alto nível, composta por:

- Creative Director especializado em experiências digitais premium.
- Senior Frontend Engineer especializado em React e TypeScript.
- Motion Designer especializado em animações cinematográficas e microinterações.
- UI/UX Designer especializado em narrativa visual e interfaces imersivas.
- Especialista em acessibilidade e performance.
- Pesquisador e editor de conteúdo histórico e cultural.

Sua missão é **projetar e implementar uma aplicação web completa**, visualmente extraordinária, sobre a Consciência Negra, destinada a uma apresentação escolar ao vivo em um palco, com projeção em telão.

Não quero um site institucional convencional, um template genérico, um conjunto de cards repetitivos ou uma apresentação de PowerPoint reproduzida no navegador.

Quero uma experiência com identidade própria, qualidade editorial, direção de arte cinematográfica, navegação extremamente fluida, animações sofisticadas e conteúdo educativo de verdade.

O resultado deverá transmitir o cuidado visual de um documentário interativo, uma exposição digital de museu e uma apresentação profissional de alto impacto.

A aplicação deve se chamar:

**RAÍZES — ALÉM DA COR**

Subtítulo: "Uma história de identidade, cultura, resistência e humanidade."

Idioma: português brasileiro.

---

# 1. INSTRUÇÕES INICIAIS OBRIGATÓRIAS

Antes de implementar:

1. Inspecione o repositório, a estrutura existente e as dependências instaladas.
2. Identifique as ferramentas, skills, servidores MCP, bibliotecas e recursos de frontend disponíveis no ambiente do Codex.
3. Consulte as instruções das ferramentas relevantes e utilize-as quando agregarem qualidade.
4. Identifique o gerenciador de pacotes e preserve as configurações existentes sempre que possível.
5. Consulte a documentação atual das bibliotecas antes de utilizar APIs desconhecidas.
6. Crie um plano técnico e uma arquitetura coerente.
7. Prossiga com a implementação completa, sem parar apenas no planejamento.

Caso o projeto esteja vazio, inicialize-o.

Não instale bibliotecas redundantes nem introduza complexidade desnecessária.

Não faça alterações destrutivas em arquivos existentes sem necessidade.

# 2. STACK TECNOLÓGICA

Stack preferencial:

- React com TypeScript.
- Vite.
- Tailwind CSS.
- Motion for React.
- GSAP, somente nas animações que justificarem seu uso.
- Lucide React.
- Fontes cuidadosamente selecionadas.
- Componentização modular.
- CSS moderno com variáveis e design tokens.

Motion for React será o motor principal de transições de componentes, presença, gestos e animações declarativas.

GSAP poderá ser empregado para timelines cinematográficas complexas, sequenciamento avançado de elementos e cenas sincronizadas.

Não use GSAP e Motion para controlar simultaneamente as mesmas propriedades de um elemento.

Lenis poderá ser utilizado no modo de exploração, mas não deverá interferir na navegação do modo apresentação.

Evite dependências pesadas apenas para efeitos decorativos.

# 3. FILOSOFIA VISUAL

A experiência deve ser:

- Cinematográfica.
- Editorial.
- Sofisticada.
- Fluida.
- Imersiva.
- Responsiva.
- Acessível.
- Emocionalmente impactante.
- Culturalmente respeitosa.

Não deve parecer um site escolar feito às pressas.

Evite:
- Gradientes chamativos sem propósito.
- Glassmorphism exagerado.
- Cards idênticos em todas as seções.
- Emojis como elementos visuais principais.
- Sombras artificiais excessivas.
- Efeitos 3D gratuitos.
- Animações exageradas em assuntos sensíveis.
- Textos extensos projetados na tela.
- Layouts genéricos de landing pages SaaS.

A estética deverá seguir uma abordagem editorial premium, combinando fotografia documental, composição tipográfica e movimento.

### Paleta

- Background principal: #101010
- Fundo secundário: #191614
- Marrom terroso: #563C2F
- Dourado: #D4A65A
- Terracota: #B85D3C
- Creme: #F3E8D5
- Branco suave: #F5F1EB

Esses valores são pontos de partida, não limites absolutos.

Utilize as cores para estabelecer hierarquia emocional entre os capítulos.

### Tipografia

Escolha duas famílias tipográficas compatíveis:

- Uma display elegante, marcante, adequada a títulos editoriais.
- Uma sans-serif altamente legível para textos informativos, navegação e legendas.

Sugestões: DM Sans, Manrope, Inter, Playfair Display e Instrument Serif.

Priorize combinações harmoniosas e evite múltiplas famílias desnecessárias.

### Composição

Empregue:
- Fotografia em tela cheia.
- Títulos grandes.
- Assimetria controlada.
- Espaçamento generoso.
- Máscaras fotográficas.
- Grid editorial.
- Sobreposição tipográfica.
- Contraste de escala.
- Áreas de silêncio visual.

Cada capítulo deve ter uma linguagem visual própria, mas preservar uma identidade unificada.

# 4. ARQUITETURA DA EXPERIÊNCIA

A experiência terá oito capítulos principais.

Cada capítulo conterá uma ou mais cenas internas, permitindo aprofundar o assunto sem sobrecarregar uma única tela.

Modelo conceitual:

Chapter → Scenes → Content → Transitions.

Não considere cada capítulo obrigatoriamente equivalente a um único slide.

O sistema deve permitir que conteúdos sejam editados separadamente da implementação visual.

Criar componentes reutilizáveis para cenas, cabeçalhos, imagens, timelines, overlays, fontes e controles de apresentação.

## CAPÍTULO 01 — ABERTURA

Título principal:

"Uma história que vive em nós."

Mensagem secundária:

"A cultura que nos forma. A resistência que nos inspira."

Criar uma abertura cinematográfica com uma fotografia documental de grande impacto.

Sequência visual sugerida:

1. Fundo inicialmente escuro.
2. Fotografia revelada por uma máscara animada.
3. Pequena identificação "20 DE NOVEMBRO".
4. Título aparece em sequência de palavras.
5. Subtítulo entra suavemente.
6. Indicador discreto convida o usuário a avançar.

Evitar introdução longa ou animação que atrapalhe o início da apresentação.

## CAPÍTULO 02 — HISTÓRIA E RESISTÊNCIA

Apresentar a trajetória histórica da população negra no Brasil com contextualização adequada.

Abordar:

- Sociedades e culturas africanas anteriores à colonização.
- Tráfico transatlântico e escravização.
- Resistências individuais e coletivas.
- Quilombos.
- Zumbi dos Palmares.
- Dandara dos Palmares.
- Abolição de 1888.
- Limitações sociais da abolição.
- Significado histórico do 20 de novembro.

Criar uma timeline interativa com mudanças cinematográficas de contexto.

As transições devem conectar os acontecimentos historicamente.

Não reduzir a história da população negra ao período da escravidão.

Distinguir fatos documentados de interpretações históricas.

## CAPÍTULO 03 — CULTURA AFRO-BRASILEIRA

Título:

"A África que vive no Brasil."

Explorar a influência africana sobre a formação cultural brasileira.

Incluir:

- Capoeira.
- Samba.
- Maracatu.
- Música e instrumentos.
- Religiosidades de matriz africana.
- Expressões linguísticas.
- Festividades.
- Arte e tradições.

Destacar Pernambuco com atenção ao maracatu e suas raízes históricas.

Usar um mural fotográfico interativo com composições variadas.

Ao selecionar um tema, abrir uma cena detalhada com:

- Fotografia de qualidade.
- Nome da manifestação.
- Contexto histórico.
- Influência cultural.
- Curiosidade relevante.

Utilizar transições de imagem compartilhada quando apropriado.

Evitar tratar culturas africanas como se fossem homogêneas.

Não atribuir origem africana exclusiva a manifestações culturais que resultaram de múltiplas influências.

## CAPÍTULO 04 — CULINÁRIA E ANCESTRALIDADE

Título:

"Sabores que contam histórias."

Criar uma galeria editorial de pratos ligados à influência africana na culinária brasileira.

Abordar:

- Acarajé.
- Vatapá.
- Caruru.
- Abará.
- Outros alimentos relevantes, desde que a origem e as influências sejam verificadas.

A apresentação deve destacar a riqueza cultural dos alimentos e o papel dos saberes transmitidos entre gerações.

Interface proposta:

- Fotografias grandes.
- Composição em camadas.
- Transições suaves entre pratos.
- Descrições curtas.
- Origem ou contexto histórico.
- Ingredientes característicos.

Não inventar explicações etimológicas, ingredientes ou origens históricas.

A galeria deve ser bonita e funcional, sem transformar o assunto em simples catálogo de produtos.

## CAPÍTULO 05 — O RACISMO NO FUTEBOL

Este será um dos capítulos emocionalmente mais importantes.

Título:

"O talento não deveria ter cor."

Subtítulo:

"Quando o preconceito ultrapassa as arquibancadas."

Apresentar casos documentados de racismo no futebol, com foco especial em:

### MARIO BALOTELLI

Criar uma sequência cinematográfica dedicada ao episódio de 3 de novembro de 2019, durante Hellas Verona x Brescia, pelo Campeonato Italiano.

Dados históricos a apresentar:

- Balotelli defendia o Brescia.
- Relatou ter sofrido insultos e manifestações racistas de torcedores.
- Em reação, chutou a bola em direção à arquibancada.
- Demonstrou intenção de abandonar o gramado.
- A partida foi interrompida temporariamente.
- Companheiros e oficiais intervieram.
- O Hellas Verona recebeu punição de fechamento parcial de arquibancada por uma partida.

Fontes iniciais para verificação:

https://www.bbc.com/sport/football/50281847

https://www.bbc.com/sport/football/50299720

https://www.euronews.com/2019/11/03/balotelli-threatens-to-walk-off-over-racist-abuse-in-verona

Confirmar os fatos com fontes jornalísticas confiáveis antes de publicar.

### Direção visual da sequência Balotelli

Cena A — O jogador

Fotografia de Balotelli ocupando boa parte da tela.

Título:

"Ele só queria jogar futebol."

Cena B — O acontecimento

A imagem escurece progressivamente.

Surge:

"Verona, Itália."

"3 de novembro de 2019."

Cena C — A reação

Timeline visual dos acontecimentos da partida.

Destacar o instante em que ele interrompeu a jogada e reagiu aos insultos.

Cena D — A reflexão

Exibir a pergunta:

"Até quando alguém precisará lutar pelo direito de ser respeitado?"

Utilizar uma transição silenciosa e contida.

Não reproduzir insultos racistas como efeito visual decorativo.

Não utilizar vídeos, áudios ou imagens chocantes sem necessidade educacional.

Não inventar citações diretas de Balotelli.

### OUTROS CASOS

Adicionar conteúdos sobre:

- Vinícius Júnior.
- Richarlison.
- Outros atletas, se houver documentação suficiente.

Cada caso deve conter:

- Nome do atleta.
- Data.
- Partida ou contexto.
- Descrição objetiva do acontecimento.
- Respostas institucionais, se documentadas.
- Referências.

Não afirmar punições, decisões judiciais ou desfechos sem confirmação.

Finalizar o capítulo destacando a importância de combater o racismo nos estádios, nas escolas e no cotidiano.

## CAPÍTULO 06 — PROTAGONISMO NEGRO

Título:

"Não apenas resistiram. Transformaram o mundo."

Criar uma exposição interativa de personalidades negras.

Possíveis nomes:

- Machado de Assis.
- Carolina Maria de Jesus.
- Luiz Gama.
- Milton Santos.
- Conceição Evaristo.
- Pelé.

Para cada personalidade:

- Nome.
- Área de atuação.
- Contribuição principal.
- Contextualização breve.
- Fotografia histórica, quando disponível.
- Fonte de pesquisa.

Criar cards editoriais de diferentes tamanhos, não um grid repetitivo.

Ao selecionar uma pessoa, revelar uma cena de destaque com sua história e realizações.

## CAPÍTULO 07 — CONSCIÊNCIA NEGRA NO PRESENTE

Título:

"A história continua sendo escrita."

Abordar:

- Racismo estrutural.
- Desigualdade de oportunidades.
- Educação antirracista.
- Representatividade.
- Respeito à diversidade.
- Valorização da cultura negra.
- Responsabilidade coletiva.

Utilizar dados de instituições confiáveis, como IBGE e órgãos públicos, quando relevantes.

Toda estatística deve exibir fonte, ano e contexto.

Não inventar números.

Se não houver dados verificados disponíveis, utilizar explicações qualitativas até obter fontes adequadas.

## CAPÍTULO 08 — ENCERRAMENTO

Título:

"O futuro também tem raízes."

Construir um encerramento emocionalmente significativo.

Mensagem sugerida:

"Conhecer a história é reconhecer o passado. Respeitar as diferenças é transformar o presente. Combater o racismo é construir o futuro."

Utilizar uma composição com retratos ou referências visuais à diversidade da população negra brasileira.

Encerrar com créditos e referências.

Inserir um botão discreto:

"Recomeçar apresentação."

A conclusão deve transmitir responsabilidade, valorização cultural e esperança, sem minimizar os problemas apresentados.

---

# 5. SISTEMA DE ANIMAÇÕES CINEMATOGRÁFICAS

A qualidade das animações é uma prioridade central.

Criar um sistema de motion design com padrões consistentes.

Implementar:

### Transições entre capítulos

- Crossfade sofisticado.
- Movimento horizontal ou vertical contextual.
- Revelação por máscaras.
- Pequenas mudanças de escala.
- Transições fotográficas.
- Preservação da continuidade visual.

### Tipografia

- Entrada escalonada de palavras.
- Text reveal com overflow hidden.
- Fade-up suave.
- Tracking e opacidade quando apropriados.
- Sequenciamento de títulos e subtítulos.

### Imagens

- Zoom cinematográfico discreto.
- Revelação gradual.
- Parallax limitado.
- Shared element transitions quando viável.
- Transições entre estados com continuidade visual.

### Microinterações

- Hover elegante.
- Botões responsivos.
- Indicadores animados.
- Cursor contextual apenas onde fizer sentido.
- Feedback de navegação.
- Transições de foco.

### Regras de qualidade

Não animar tudo simultaneamente.

Não utilizar efeitos apenas para demonstrar capacidade técnica.

Criar hierarquia temporal: primeiro o elemento principal, depois elementos secundários.

Preferir transform e opacity para animações frequentes.

Não gerar layout shifts ou elementos piscando.

A experiência precisa ser agradável mesmo após repetidas navegações.

Respeitar `prefers-reduced-motion`.

Garantir limpeza de timelines, listeners e observers.

Interromper animações corretamente quando o usuário mudar rapidamente de capítulo.

# 6. MODO APRESENTAÇÃO — FUNCIONALIDADE CENTRAL

A aplicação será apresentada em palco, conectada a um projetor ou telão.

Implementar um modo apresentação completo.

### Navegação

- Seta direita: próxima cena.
- Seta esquerda: cena anterior.
- Espaço: próxima cena.
- Home: início.
- End: encerramento.
- Escape: sair do modo tela cheia ou fechar overlays, conforme contexto.

Adicionar navegação por botões visuais discretos.

### Fullscreen

Implementar suporte à Fullscreen API com tratamento de falhas e fallback.

Nunca depender exclusivamente de fullscreen para o site funcionar.

### Indicador de progresso

Mostrar:

- Capítulo atual.
- Total de capítulos.
- Progresso visual.
- Nome do capítulo quando pertinente.

### Mapa de capítulos

Criar um menu que permita saltar para qualquer capítulo.

### Notas do apresentador

Criar um painel de notas com conteúdo de apoio para cada cena.

Essas notas não devem aparecer na projeção durante a apresentação normal.

Preferir janela separada para notas, com sincronização apropriada quando tecnicamente possível.

Fornecer fallback para casos em que o navegador bloqueie janelas adicionais.

### Estados

Implementar corretamente:

- Início da apresentação.
- Avanço.
- Retorno.
- Navegação direta.
- Finalização.
- Reinício.
- Saída do fullscreen.
- Navegação durante uma animação.

Impedir que múltiplos comandos rápidos deixem o estado visual inconsistente.

### Modo exploração

Criar uma alternativa para visitantes navegarem pelo conteúdo sem depender do apresentador.

Permitir explorar capítulos, abrir detalhes e consultar fontes.

Não prejudicar o modo apresentação ao implementar esse recurso.

# 7. DESIGN RESPONSIVO

A aplicação deve funcionar em:

- Projetores e telões 16:9.
- Monitores desktop.
- Notebooks.
- Tablets.
- Celulares.

O formato 16:9 é prioritário para o modo apresentação, mas não deve haver distorção ou corte indevido de conteúdo.

Levar em consideração a área segura para projeção e a legibilidade à distância.

Em dispositivos móveis, reorganizar composições editoriais mantendo a identidade visual.

Não reduzir simplesmente toda a apresentação desktop para caber no celular.

Testar diferentes proporções e resoluções.

# 8. CONTEÚDO, FOTOGRAFIAS E DIREITOS

Utilizar conteúdo historicamente responsável.

Toda informação factual importante deve ser verificável.

Criar uma estrutura centralizada com:

- Título.
- Texto.
- Data.
- Capítulo.
- Descrição da cena.
- Fonte.
- URL.
- Créditos.
- Texto alternativo das imagens.

Priorizar imagens de qualidade com licença adequada.

Não utilizar fotografias protegidas sem verificar as condições de uso.

Não considerar uma fotografia livre apenas porque aparece em uma pesquisa na internet.

Manter um inventário de ativos e suas licenças.

Quando não houver imagem autorizada, usar uma composição visual alternativa de qualidade, sem fingir que é registro histórico autêntico.

Criar uma seção de referências acessível ao público.

Não incluir citações ou estatísticas fabricadas.

Diferenciar claramente fatos documentados, descrições e interpretações.

# 9. PERFORMANCE E CONFIABILIDADE

A apresentação deve ser confiável em ambiente escolar.

Implementar:

- Carregamento otimizado de imagens.
- Pré-carregamento da próxima cena.
- Recursos críticos disponíveis localmente.
- Tratamento de erros de carregamento.
- Fontes locais ou alternativas seguras.
- Renderização eficiente.
- Code splitting quando necessário.
- Limpeza de efeitos e listeners.
- Redução de animações pesadas em dispositivos fracos.
- Evitar memory leaks.

Objetivo: experiência próxima de 60 FPS em hardware compatível, sem prometer estabilidade impossível em todas as máquinas.

Depois do carregamento inicial, a navegação principal deve funcionar sem conexão à internet.

Se houver recursos externos opcionais, oferecer fallback.

Não depender de CDNs ou APIs externas durante a apresentação.

# 10. ACESSIBILIDADE

Implementar:

- Navegação por teclado.
- Foco visível.
- Semântica correta.
- Contraste adequado.
- Texto alternativo.
- Suporte a movimento reduzido.
- Controles com rótulos acessíveis.
- Botões com área de interação adequada.
- Boa legibilidade em projeção.

Não esconder informações essenciais exclusivamente em hover.

Garantir que a experiência continue compreensível com animações desativadas.

# 11. ARQUITETURA DO CÓDIGO

Organizar o código de forma clara.

Estrutura conceitual sugerida:

src/
  app/
  components/
  chapters/
  scenes/
  animations/
  hooks/
  content/
  assets/
  styles/
  utils/
  types/

Adaptar conforme o projeto real.

Separar a lógica de navegação da lógica de animação.

Criar design tokens compartilhados.

Centralizar a configuração de transições.

Utilizar TypeScript com tipagem estrita.

Não criar componentes gigantescos.

Não duplicar textos ou lógica.

Não adicionar comentários óbvios; documentar decisões importantes.

# 12. QUALIDADE DE UI/UX

Cada capítulo deve ter uma composição visual intencional.

Não quero a mesma tela com imagem à esquerda e texto à direita repetida oito vezes.

Criar variedade:

- Hero cinematográfico.
- Timeline histórica.
- Galeria editorial.
- Narrativa em imagens.
- Mural fotográfico.
- Retrato em tela cheia.
- Conteúdo de contraste dramático.
- Encerramento minimalista.

As transições devem estabelecer relações entre os temas.

Usar o espaço vazio como parte do design.

Evitar excesso de informações por cena.

O apresentador deverá complementar a narrativa oralmente.

# 13. CRITÉRIOS DE ACEITAÇÃO

O trabalho somente estará pronto quando:

1. Todos os oito capítulos estiverem implementados.
2. As cenas internas funcionarem.
3. A navegação por teclado estiver correta.
4. O modo apresentação estiver funcional.
5. O layout funcionar em desktop e mobile.
6. As transições forem suaves e consistentes.
7. As fotografias e fontes carregarem corretamente.
8. Não houver erros relevantes de console.
9. O projeto compilar sem erros.
10. As informações históricas tiverem fontes verificáveis.
11. As regras de acessibilidade forem respeitadas.
12. O conteúdo principal funcionar offline após o carregamento.
13. O capítulo de Mario Balotelli estiver completo.
14. A navegação rápida não quebrar a apresentação.
15. O resultado final apresentar uma identidade visual própria e coerente.

# 14. PROCESSO DE EXECUÇÃO

Execute o desenvolvimento por etapas lógicas:

Fase 1 — Auditoria do ambiente e planejamento.

Fase 2 — Design system e arquitetura.

Fase 3 — Navegação e motor de apresentação.

Fase 4 — Implementação das cenas e capítulos.

Fase 5 — Animações e direção de arte.

Fase 6 — Conteúdo histórico, revisão e referências.

Fase 7 — Responsividade, acessibilidade e otimização.

Fase 8 — Testes e validação final.

Utilize ferramentas de inspeção visual e testes de navegador, caso estejam disponíveis.

Capture e examine resultados renderizados em diferentes resoluções.

Corrija problemas observados, não apenas erros identificados pelo compilador.

Ao finalizar, entregue um resumo contendo:

- O que foi implementado.
- Tecnologias utilizadas.
- Como executar localmente.
- Como iniciar a apresentação.
- Como editar o conteúdo.
- Como adicionar cenas.
- Como executar testes.
- Limitações existentes.
- Pendências de fontes ou licenciamento de imagens.

Não declare testes aprovados sem executá-los.

Não declare funcionalidades implementadas se estiverem apenas planejadas.

Não crie commits, pushes ou deploys sem autorização.

# 15. DIRETRIZ FINAL DE CRIATIVIDADE

Este projeto não deve parecer uma demonstração de biblioteca de animação.

Ele deve parecer uma obra digital com propósito educacional.

Priorize a emoção da narrativa, o respeito à história e a clareza da mensagem.

O público deverá perceber uma conexão natural entre história, cultura, gastronomia, esporte, resistência e atualidade.

Use as ferramentas de frontend disponíveis no ambiente para elevar o resultado, mas não comprometa acessibilidade, confiabilidade ou performance.

Quero uma implementação real, navegável, impressionante e pronta para ser apresentada ao vivo.

**Comece analisando o ambiente e depois implemente a experiência completa.**