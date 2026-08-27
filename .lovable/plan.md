# Landing page — Blomberg Auditoria e BPO

## Base de conteúdo já confirmada

O Instagram bloqueia leitura automática, mas o logotipo e o print do perfil já trazem o essencial:

- Nome: **Blomberg Auditoria e BPO** (perfil @bloombergconsultoria, "Consutoria e Assessoria")
- Nicho: **auditoria condominial**
- Credenciais do responsável: Bacharel em Ciências Contábeis; MBA em Gestão Financeira e Tributária; 25 anos de Controladoria; 15 anos de (texto cortado no print — preciso do complemento)
- WhatsApp: **51 99918-7885** (DDD 51, Rio Grande do Sul)
- Pilares do logo: auditoria, análise, processos, confiança
- Assinatura: "Transparência. Eficiência. Valor."
- Paleta: azul-marinho profundo como base, dourado como destaque, branco nos textos
- Estilo: serifada elegante no nome, caixa alta com espaçamento largo nos apoios, contexto visual de edifícios residenciais

## O que ainda preciso de você

1. A frase completa dos "15 anos de..." que aparece cortada no perfil.
2. Lista dos serviços como você os anuncia (ex.: auditoria de prestação de contas, revisão de taxas e rateios, BPO financeiro, conciliação bancária, folha e encargos).
3. Região de atendimento (Porto Alegre e região metropolitana? RS todo? remoto para outros estados?) e e-mail de contato.
4. Se houver: depoimentos reais de síndicos e número de condomínios atendidos.

Sem esses itens, monto as seções com texto provisório marcado e substituo depois. Nada de número ou resultado inventado.

## Estrutura da página (uma página, rolagem contínua)

1. **Topo fixo enxuto**: logo à esquerda, um botão "Falar no WhatsApp" à direita.
2. **Hero**: título voltado a síndicos e conselhos fiscais de condomínio, uma linha de apoio, um único botão para WhatsApp. Fundo escuro com imagem de prédio tratada, no clima do logo.
3. **Serviços**: cartões com os serviços reais (auditoria e BPO), quantidade conforme o que existir.
4. **Como funciona**: 3 passos, do diagnóstico inicial ao relatório entregue.
5. **Quem assina o trabalho**: credenciais reais (formação, MBA, 25 anos de controladoria) como prova de autoridade.
6. **Por que a Blomberg**: os quatro pilares do logo (auditoria, análise, processos, confiança) como diferenciais concretos.
7. **Depoimentos**: só entram se você enviar depoimentos reais.
8. **Contato final**: bloco escuro com WhatsApp, e-mail e região de atendimento.
9. **Rodapé simples**: logo, contato, Instagram.

Todos os botões levam ao WhatsApp `wa.me/5551999187885` com mensagem pré-preenchida (ex.: "Olá, sou síndico e quero falar sobre auditoria do meu condomínio").


## Identidade visual na página

Tokens derivados do logo: fundo azul-marinho profundo, superfícies em azul um tom acima, dourado reservado para detalhes, botões e números, texto claro de alta legibilidade. Título em serifada de personalidade combinando com o logo; apoios e rótulos em caixa alta com espaçamento largo. Cantos discretos, linhas finas douradas como divisores. Sem gradiente roxo, sem visual genérico de startup.

O logo entra como arquivo real no topo e no rodapé (via asset CDN), nunca redesenhado.

## Detalhes técnicos

- Página em `src/routes/index.tsx` (substitui o placeholder), seções como componentes em `src/components/`.
- Cores, fontes e raios como tokens em `src/styles.css`; nenhuma cor fixa nos componentes.
- Fontes carregadas por `<link>` no `src/routes/__root.tsx`.
- Logo publicado com o CLI de assets e importado pelo ponteiro `.asset.json`; favicon gerado a partir do logo.
- WhatsApp via `https://wa.me/<numero>?text=...`, sem backend.
- Responsivo mobile-first; imagens com `loading="lazy"` e texto alternativo.
- SEO: título e descrição próprios da rota, um único H1, HTML semântico, JSON-LD de serviço profissional/negócio local.
- Sem banco de dados nem login nesta etapa. Formulário com registro de leads fica para depois, se quiser, com backend ativado.

## Fora do escopo agora

Blog, área de cliente, agendamento online, pagamentos.
