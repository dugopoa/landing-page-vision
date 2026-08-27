const PATRICIA_URL =
  "/__l5e/assets-v1/fedd2aec-1be7-4a63-919e-11038d6b4d09/patricia-bloomberg.png";

export function QuemAssina() {
  return (
    <section id="quem-assina" className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Quem assina o trabalho
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
              Patricia Bloomberg
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Bacharel em Ciências Contábeis e MBA em Gestão Financeira e Tributária.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-4xl font-semibold text-primary">25</p>
                <p className="mt-1 text-sm text-muted-foreground">anos de Controladoria</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-primary">15</p>
                <p className="mt-1 text-sm text-muted-foreground">anos de Auditoria</p>
              </div>
            </div>
            <p className="mt-8 text-muted-foreground">
              Experiência sólida na análise de processos financeiros, contábeis e tributários,
              com olhar técnico e independente para a gestão condominial.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-xl border border-border bg-card lg:ml-auto">
              <img
                src={PATRICIA_URL}
                alt="Patricia Bloomberg, responsável técnica da Blomberg Auditoria e BPO"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
