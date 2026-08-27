import { Search, FileCheck } from "lucide-react";

export function AuditoriaSection() {
  return (
    <section id="auditoria" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Auditoria Condominial
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Descubra o que os números escondem
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prestação de contas clara, documentada e sem surpresas para o síndico, o conselho fiscal
            e os moradores.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-card-foreground">
              Auditoria condominial investigativa
            </h3>
            <p className="mt-3 text-muted-foreground">
              Processo detalhado para identificar fraudes, irregularidades ou desvios de recursos
              no condomínio. Rastreamento de pagamentos, contratos e movimentações bancárias com
              relatório final claro e acionável.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FileCheck className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-card-foreground">
              Auditoria anual das contas
            </h3>
            <p className="mt-3 text-muted-foreground">
              Revisão completa das contas do exercício para aprovação em assembleia. Garantimos que
              receitas, despesas e provisões estejam corretas e documentadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
