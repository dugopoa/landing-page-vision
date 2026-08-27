# Plano: Corrigir bloqueio do link do WhatsApp no preview desktop

## Problema
No preview do computador, clicar em qualquer botão de WhatsApp gera o erro `ERR_BLOCKED_BY_RESPONSE` para `api.whatsapp.com`. Isso acontece porque o link `wa.me` redireciona para `api.whatsapp.com`, e o ambiente de preview do desktop bloqueia essa navegação.

## Objetivo
Garantir que os botões de WhatsApp funcionem tanto no desktop quanto no mobile, sem depender exclusivamente do redirecionamento `wa.me` que é bloqueado no preview.

## Solução proposta

### 1. Criar utilitário de link inteligente por plataforma
- Atualizar `src/lib/whatsapp.ts` para expor duas funções:
  - `whatsappMobileLink(message?)` → `https://wa.me/+5551999187885` (mobile/app nativo)
  - `whatsappDesktopLink(message?)` → `https://web.whatsapp.com/send?phone=+5551999187885` (desktop/WhatsApp Web)
- Manter `WHATSAPP_NUMBER = "+5551999187885"` como fonte única da verdade.

### 2. Criar hook `useWhatsAppLink`
- Em `src/hooks/use-whatsapp-link.ts`, usar `useIsMobile` existente para decidir qual link exibir.
- Retornar o link correto e uma flag indicando se é mobile.
- Garantir SSR-safe: durante a hidratação, retornar o link mobile como padrão para evitar mismatch.

### 3. Atualizar todos os botões do site
- Substituir chamadas diretas a `whatsappLink(...)` pelos novos utilitários em:
  - `src/components/Header.tsx`
  - `src/components/Hero.tsx`
  - `src/components/Contato.tsx`
  - `src/components/Footer.tsx`
- Em desktop, os botões devem abrir `https://web.whatsapp.com/send?phone=+5551999187885`.
- Em mobile, continuar usando `https://wa.me/+5551999187885`.

### 4. Adicionar fallback de cópia do número
- Na seção `Contato`, adicionar um botão secundário "Copiar número" para desktop.
- Usar `navigator.clipboard.writeText` com o número formatado `(51) 99918-7885`.
- Exibir feedback visual (ex: tooltip ou texto "Copiado!") por 2 segundos.

### 5. Testar no preview
- Verificar no preview desktop se o link aponta para `web.whatsapp.com` e se abre corretamente.
- Verificar se em viewport mobile o link continua apontando para `wa.me`.
- Confirmar que não há erros de hidratação ou console.

## Resultado esperado
- Desktop: botões abrem WhatsApp Web sem erro de bloqueio.
- Mobile: botões continuam abrindo o app nativo via `wa.me`.
- Usuário em desktop sem WhatsApp Web logado pode copiar o número facilmente.
