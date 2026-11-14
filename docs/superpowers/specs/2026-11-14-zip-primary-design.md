# ZIP como base principal — design

## Intenção

Adotar `interactive-documentary-web-development.zip` como implementação principal do RAÍZES, preservando a narrativa contínua em nove capítulos, seus controles de apresentação, conteúdo, tipografia e direção editorial.

## Objetivos e limites

- Substituir a aplicação atual pela estrutura React/Vite do ZIP.
- Preservar as imagens locais comprovadas e seus dados de atribuição em `docs/assets.json`.
- Não reutilizar créditos de imagens que não vieram no ZIP; representar fotos indisponíveis com um fallback neutro.
- Manter a configuração de compilação de arquivo único do ZIP e os recursos de teste fornecidos nele.
- Não reconstruir conteúdo nem atribuir imagens por semelhança apenas.

## Abordagem

O usuário escolheu o ZIP como base principal. A implementação copia seus capítulos, componentes, conteúdo e configuração para a raiz do projeto; integra a mídia existente por um registro central e torna imagens ausentes opcionais. Alternativas de mesclar componentes do app antigo ou manter o app antigo como base contradizem a escolha expressa.

## Restrições e decisões

- Fontes e licenças são as entradas já verificadas em `docs/assets.json`.
- O fallback para uma imagem indisponível não deve mostrar uma fotografia, crédito ou licença substitutos.
- Os créditos de mídia exibem autor, licença e links para origem/licença quando disponíveis.
