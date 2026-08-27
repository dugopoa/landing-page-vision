import { whatsappLink } from "@/lib/whatsapp";
import { Phone, MapPin } from "lucide-react";

export function Contato() {
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
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href={whatsappLink("Olá, sou síndico e quero falar sobre auditoria do meu condomínio.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            (51) 99918-7885
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          Rio Grande do Sul
        </div>
      </div>
    </section>
  );
}

