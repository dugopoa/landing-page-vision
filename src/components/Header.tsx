import { useWhatsAppLink } from "@/hooks/use-whatsapp-link";

const LOGO_URL = "/__l5e/assets-v1/e43b6d32-bf3c-4757-b9b3-32fa29c54447/blomberg-logo-circle.png";

export function Header() {
  const { href } = useWhatsAppLink(
    "Olá, sou síndico e quero falar sobre auditoria do meu condomínio."
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1 ring-2 ring-primary/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <img
              src={LOGO_URL}
              alt="Blomberg Auditoria e BPO"
              width={56}
              height={56}
              className="h-12 w-auto rounded-full sm:h-14"
            />
          </span>
          <span className="sr-only">Blomberg Auditoria e BPO</span>
        </a>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
