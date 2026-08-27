import { ClipboardCheck, BarChart3, Workflow, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Auditoria",
    description: "Revisão independente e documentada de contas, contratos e processos.",
  },
  {
    icon: BarChart3,
    title: "Análise",
    description: "Interpretação dos dados financeiros para apoiar decisões seguras.",
  },
  {
    icon: Workflow,
    title: "Processos",
    description: "Organização da rotina contábil, fiscal e de pagamentos do condomínio.",
  },
  {
    icon: ShieldCheck,
    title: "Confiança",
    description: "Transparência que fortalece a relação entre síndico, conselho e moradores.",
  },
];

export function Pilares() {
  return (
    <section id="pilares" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Por que a Blomberg
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Quatro pilares que sustentam cada entrega
          </h2>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-primary">
                <pillar.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-16 max-w-2xl text-center text-lg font-medium tracking-wide text-primary">
          Transparência. Eficiência. Valor.
        </p>
      </div>
    </section>
  );
}
