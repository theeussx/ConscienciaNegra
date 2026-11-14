# RAÍZES — ALÉM DA COR

Experiência documental interativa sobre identidade, cultura, resistência e humanidade, em português brasileiro. O briefing original está em `PROMONT.md`.

## Direção visual

A interface usa linguagem de exposição editorial: papel-creme e tinta como base; vermelho-terra e azul profundo como acentos; DM Sans em escala de cartaz; fotografia documental e ritmos de composição específicos para cada capítulo. A linha do tempo é cronológica, Cultura vira mural fotográfico, Culinária assume uma página gastronômica, e o capítulo de futebol segue uma sequência documental. No modo apresentação, os controles recolhem após alguns segundos e reaparecem com movimento do ponteiro ou foco do teclado. As transições variam conforme a cena e respeitam movimento reduzido.

## Executar

Requer Node.js 22.12+ e npm.

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite. Para a apresentação escolar, use a versão de produção:

```bash
npm run build
npm run preview
```

Abra `http://localhost:4173`, aguarde **Pronto para usar offline** e teste o recarregamento com a rede desligada. O cache offline está disponível no build de produção em localhost ou HTTPS; a prévia de desenvolvimento não registra o service worker. É necessário manter o servidor local funcionando para reabrir a experiência em uma nova sessão. Não abra `dist/index.html` diretamente pelo explorador de arquivos.

## Apresentar

- **Iniciar experiência:** entra na sequência depois da abertura.
- **→ / Espaço:** próxima cena; **←:** anterior.
- **Home / End:** abertura / encerramento.
- **Esc:** fecha o painel ativo; o navegador também usa Esc para sair da tela cheia.
- Ícone de expansão: alterna tela cheia, com feedback caso a API falhe.
- **Explorar capítulos:** abre o mapa e permite escolher qualquer um dos oito capítulos.
- Selecionar fotografias, marcos e nomes abre detalhes com referências.
- Ícone de caderno: abre as notas em outra janela. Mova-a para o monitor do apresentador, mantendo a principal no projetor. As janelas precisam usar o mesmo navegador, perfil e origem. BroadcastChannel sincroniza as cenas e os comandos; armazenamento local é a alternativa. Se pop-ups forem bloqueados, um painel explicitamente visível permite consultar as notas ou tentar novamente. Feche o painel antes de projetar.

No celular as composições são reorganizadas e podem ter rolagem vertical. As setas visuais ficam após o conteúdo. O formato desktop prioriza a projeção; teste a resolução real e a área segura do projetor antes do evento.

## Editar conteúdo e adicionar cenas

`src/content/chapters.ts` reúne os capítulos, cenas, detalhes e notas. `src/content/sources.ts` contém o catálogo de fontes, com título, URL, instituição e ano. Os tipos estão em `src/types/content.ts`.

Para adicionar uma cena, insira um objeto em `scenes`, com `id` único, `chapter` (0–7), `kicker`, `title`, `body`, `layout`, `sources` e `notes`. O campo `items` alimenta os murais, linhas do tempo e galerias. As cenas aparecem na ordem da lista; os controles, progresso, notas e mapa acompanham essa ordem automaticamente. Os testes percorrem a lista automaticamente.

Cada detalhe usa `source` para a referência principal e pode incluir `sources` com referências complementares. As chaves precisam existir no catálogo de fontes.

Os layouts ficam em `src/components/Scenes.tsx`. A navegação fica no hook `usePresentation`; ela não depende da duração das animações. Tokens, responsividade e tratamento de movimento reduzido estão em `src/styles/global.css`. Motion é o único motor de animação; GSAP e Lenis não foram necessários.

Para acrescentar uma imagem, salve o arquivo otimizado em `public/images/` e registre-a em `docs/assets.json`, incluindo autoria, licença, fonte e texto alternativo. Use seu `id` no conteúdo. Os aliases das imagens existentes estão em `Photo.tsx`. Não confunda retratos ilustrativos com registros dos episódios narrados.

## Verificar

```bash
npm test
npm run build
npm run test:e2e
```

Os testes unitários cobrem limites e destinos de navegação. Playwright verifica teclado, sequência Balotelli, mapa, detalhes, notas entre janelas, mobile, movimento reduzido e navegação offline após recarregamento. Se o navegador de testes não estiver instalado, execute `npx playwright install chromium`. Os testes de navegador iniciam a prévia de produção automaticamente na porta 4173; refaça o build após alterar o código. As capturas mobile são gravadas em `test-results/`, pasta ignorada pelo Git.

## Arquitetura e recursos

React 19, TypeScript estrito, Vite, Tailwind CSS 4, Motion e Lucide. Instrument Serif e DM Sans são empacotadas localmente pelo Fontsource, sob SIL Open Font License. Fotografias locais têm proveniência e licença em `docs/assets.json`; o painel público **Fontes e créditos** exibe essas informações. O script `scripts/build-offline.mjs` cria o precache de todos os arquivos do build com identificação pelo hash do conteúdo.

O material de verificação histórica e suas ressalvas ficam em `docs/research.md`. Não foram usados números estatísticos sem verificação. A biografia de Dandara é apresentada com ressalva sobre a ausência de comprovação dos detalhes biográficos na documentação seiscentista consultada por especialistas. A resposta disciplinar ao caso Balotelli inclui o resultado do recurso: sanção limitada ao setor 8 e suspensão condicional por um ano.

Os resultados executados e os limites da verificação estão em `docs/verification.md`. Capturas numeradas `art-direction-00..12` e `mobile-art-00..12` registram as 13 cenas em desktop 16:9 e celular.

## Limitações e preparação do evento

Não há áudio, vídeo ou trilha automática. Não foi simulada uma fotografia histórica para assuntos sem imagem licenciada: caruru, abará e algumas personalidades usam composição tipográfica. Dez fotografias estão licenciadas no inventário; não há arquivo de imagem aguardando autorização. As imagens foram redimensionadas e comprimidas; suas licenças próprias, incluindo atribuição e ShareAlike quando aplicável, continuam vigentes.

A consulta dos links externos exige rede. O primeiro carregamento completo também exige acesso ao servidor; só anuncie uso offline quando a interface confirmar a preparação. Fullscreen e abertura de janelas dependem das permissões do navegador. O serviço offline deve ser reconstruído junto com qualquer alteração. O conteúdo é educativo, e os fatos e fontes devem ser revistos quando novas informações relevantes surgirem.

Não foram criados commits, pushes ou deploys.
