import { whatsappLink } from "@/lib/whatsapp";

const LOGO_URL = "/__l5e/assets-v1/e43b6d32-bf3c-4757-b9b3-32fa29c54447/blomberg-logo-circle.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex items-center gap-3">
            <span className="rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1 ring-2 ring-primary/40 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
              <img
                src={LOGO_URL}
                alt="Blomberg Auditoria e BPO"
                width={48}
                height={48}
                className="h-10 w-auto rounded-full"
              />
            </span>
          </a>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
            <a
              href={whatsappLink("Olá, sou síndico e quero falar sobre auditoria do meu condomínio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              WhatsApp (51) 99918-7885
            </a>
            <span className="hidden md:inline" aria-hidden="true">
              ·
            </span>
            <a
              href="https://www.instagram.com/bloombergconsultoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              @bloombergconsultoria
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {currentYear} Blomberg Auditoria e BPO. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
