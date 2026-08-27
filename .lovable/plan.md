# Landing page — Bloomberg Consultoria

## Situação da pesquisa

O Instagram bloqueia leitura automática de perfis (retornou acesso negado), então a identidade visual e a lista de serviços vão sair do material que você enviar: prints do perfil, destaques, posts de serviços e o arquivo do logo.

## O que envio pedir de você

1. Logo em arquivo (PNG com fundo transparente ou SVG, se tiver).
2. Prints: bio do perfil, destaques de serviços, 3–5 posts que representem bem o visual.
3. Número de WhatsApp e horário de atendimento.
4. Se houver: depoimentos reais de clientes e fotos da equipe/escritório.

Enquanto o material não chega, monto a estrutura com conteúdo provisório claramente marcado e substituo depois.

## Estrutura da página (uma página, rolagem contínua)

1. **Topo fixo enxuto**: logo à esquerda, um botão "Falar no WhatsApp" à direita.
2. **Hero**: título com a proposta central da consultoria, uma linha de apoio, um único botão para WhatsApp.
3. **Serviços**: cartões com os serviços reais extraídos dos prints (quantidade definida pelo que existir, sem inventar).
4. **Como funciona**: 3 passos do primeiro contato até a entrega.
5. **Por que a Bloomberg Consultoria**: diferenciais concretos (experiência, área de atuação, resultados só se comprováveis).
6. **Depoimentos**: só entram se você enviar depoimentos reais; caso contrário a seção não existe.
7. **Contato final**: bloco de chamada com WhatsApp, e-mail e cidade/atendimento remoto.
8. **Rodapé simples**: logo, contato, redes sociais.

Todos os botões de ação levam para o WhatsApp com mensagem pré-preenchida (ex.: "Olá, vim pelo site e quero falar sobre consultoria").

## Identidade visual

Depois de ver o logo e os prints, extraio paleta, tipografia e tom. Direção provável para consultoria: base sóbria (tons escuros ou neutros profundos), uma cor de destaque vinda do logo, tipografia com título de mais personalidade e texto muito legível, cantos e espaçamento consistentes. Nada de gradiente roxo genérico.

Se preferir, posso gerar 3 direções visuais renderizadas para você escolher antes de construir.

## Detalhes técnicos

- Página construída em `src/routes/index.tsx` (substitui o placeholder atual), dividida em componentes de seção em `src/components/`.
- Cores, fontes e raios definidos como tokens no design system em `src/styles.css`; nenhuma cor fixa nos componentes.
- Link do WhatsApp via `https://wa.me/<numero>?text=...`, sem backend.
- Responsivo mobile-first; imagens com `loading="lazy"` e texto alternativo.
- SEO: título e descrição próprios da rota, um único H1, HTML semântico, JSON-LD de negócio local/serviço profissional.
- Sem banco de dados nem login nesta etapa. Se depois você quiser formulário com registro de leads, aí ativamos o backend.

## Fora do escopo agora

Blog, área de cliente, agendamento online, pagamentos.
