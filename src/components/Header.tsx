import { whatsappLink } from "@/lib/whatsapp";

const LOGO_URL = "/__l5e/assets-v1/50c449f4-d82a-4398-8fa6-46d65512a9e5/blomberg-logo.png";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Blomberg Auditoria e BPO"
            width={56}
            height={56}
            className="h-12 w-auto sm:h-14"
          />
          <span className="sr-only">Blomberg Auditoria e BPO</span>
        </a>
        <a
          href={whatsappLink("Olá, sou síndico e quero falar sobre auditoria do meu condomínio.")}
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
