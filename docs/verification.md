# Validação — RAÍZES — ALÉM DA COR

Data: 13/11/2026. Ambiente: Linux, Node.js, Chromium via Playwright. O projeto foi implementado localmente, sem commits, pushes ou publicação.

## Resultados executados

- `npm run build`: TypeScript estrito e Vite concluídos. Precache de 28 arquivos, incluindo fotografias, fontes e licenças locais. Build de aproximadamente 5,3 MiB; JavaScript de 415 kB antes de gzip (133 kB comprimido) e CSS de 55 kB (12 kB comprimido).
- `npm test`: quatro testes unitários aprovados, cobrindo limites, índices inválidos, início de capítulos e avanço acumulado.
- `npm run test:e2e`: 11 testes de navegador aprovados no build final do redesenho. A cobertura inclui os oito capítulos e as 13 cenas, verificações automatizadas WCAG AA, detalhes, mapa, teclado, notas sincronizadas, isolamento de sessões, fallback por armazenamento, erros de imagem, pop-up bloqueado e falha de fullscreen.
- Navegação rápida: a sequência que revelou a falha foi executada mais 15 vezes no build de produção; todas passaram. Antes da correção, a mesma sequência falhou três vezes em 15 execuções.
- `npm audit --audit-level=high`: nenhuma vulnerabilidade reportada.

## Projeção e responsividade

Todas as 13 cenas foram percorridas em 1920×1080, 1366×768, 1280×720 e 1024×768, sem ultrapassar a largura ou altura da janela. No celular de 390×844, todas as cenas foram percorridas sem rolagem horizontal; a leitura pode exigir rolagem vertical.

As 13 cenas foram examinadas em capturas 16:9 e também em capturas móveis. A revisão levou a ajustes no enquadramento fotográfico, altura total da tela, contraste em rótulos pequenos e recolhimento dos controles no modo apresentação.

## Acessibilidade e funcionamento offline

Axe não reportou violações nos critérios automatizados WCAG 2 A/AA e 2.1 AA nas 13 cenas e no mapa de capítulos. Foco de diálogos, restauração do foco e movimento reduzido também foram exercitados. Esse resultado automatizado não equivale a certificação completa; leitura com tecnologias assistivas e avaliação com pessoas ainda podem ampliar a verificação.

O teste offline aguarda a preparação do cache, recarrega a página, desliga a rede, recarrega novamente e percorre todas as cenas, verificando as imagens locais. Também abre as notas em uma nova janela enquanto está offline. Links das referências continuam sendo recursos externos e precisam de rede para consulta.

## Correção de navegação durante transições

O índice e a URL chegavam ao destino, mas `AnimatePresence` em modo de espera podia manter uma cena antiga após muitos comandos durante sua saída. A troca agora é simultânea: a cena escolhida entra imediatamente, enquanto as anteriores concluem a saída fora do fluxo. As cenas que saem usam `inert` e `aria-hidden`, evitando controles duplicados no foco e na árvore de acessibilidade. Não foi acrescentado um segundo estado de navegação.

## Conteúdo e limites

Fontes históricas e ressalvas estão em `research.md`. Autoria, proveniência e licenças das dez fotografias estão em `assets.json`, e também aparecem no painel público de créditos. Imagens sem arquivo autorizado usam composição tipográfica; não há fotografia pendente de autorização incorporada à aplicação.

Não foram medidos FPS em hardware de palco, nem testados projetor físico, Safari ou Firefox. Fullscreen, janelas e cache dependem do suporte e das permissões do navegador; os caminhos de falha possuem feedback. O uso offline requer primeiro carregamento completo no build, em localhost ou HTTPS. Não há áudio, vídeo ou serviços externos necessários à navegação principal.
