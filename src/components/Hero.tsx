import { whatsappLink } from "@/lib/whatsapp";

const HERO_IMAGE = "/hero-building.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Auditoria e BPO para condomínios
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Transparência nas contas do seu condomínio
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Auditoria condominial investigativa, BPO financeiro e contabilidade para empresas de
          serviço. Transformamos números em transparência, controle e segurança para quem administra
          dinheiro de terceiros.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink(
              "Olá, sou síndico e quero falar sobre auditoria do meu condomínio."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicitar uma análise
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Conhecer os serviços
          </a>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Atendimento no Rio Grande do Sul · WhatsApp (51) 99918-7885
        </p>
      </div>
    </section>
  );
}
