import { useState } from "react";
import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";
import { WHATSAPP_NUMBER_DISPLAY } from "@/lib/whatsapp";
import { Phone, MapPin, Copy, Check } from "lucide-react";

export function Contato() {
  const { href } = useWhatsAppLink(
    "Olá, sou síndico e quero falar sobre auditoria do meu condomínio."
  );
  const [copied, setCopied] = useState(false);

  async function handleCopyNumber() {
    try {
      await navigator.clipboard.writeText(WHATSAPP_NUMBER_DISPLAY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silencioso se o clipboard não estiver disponível
    }
  }

  return (
    <section id="contato" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contato</p>
        <h2 className="mt-4 text-3xl font-semibold text-card-foreground sm:text-4xl">
          Vamos conversar sobre o seu condomínio
        </h2>
        <p className="mt-4 text-muted-foreground">
          Entre em contato pelo WhatsApp. Atendemos condomínios no Rio Grande do Sul.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {WHATSAPP_NUMBER_DISPLAY}
          </a>
          <button
            type="button"
            onClick={handleCopyNumber}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {copied ? (
              <Check className="h-5 w-5 text-primary" aria-hidden="true" />
            ) : (
              <Copy className="h-5 w-5" aria-hidden="true" />
            )}
            {copied ? "Número copiado" : "Copiar número"}
          </button>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          Rio Grande do Sul
        </div>
      </div>
    </section>
  );
}
