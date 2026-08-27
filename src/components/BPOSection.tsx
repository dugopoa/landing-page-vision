import { Landmark, ArrowLeftRight, Wallet, Receipt, FileBarChart, Calculator } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Conciliação bancária e contábil",
    description:
      "Verificação e reconciliação de saldos bancários com os registros contábeis, garantindo precisão nos lançamentos.",
  },
  {
    icon: ArrowLeftRight,
    title: "Gestão de fluxo de caixa",
    description:
      "Monitoramento diário de entradas e saídas e análise detalhada das movimentações do condomínio.",
  },
  {
    icon: Wallet,
    title: "Controle de contas a pagar e a receber",
    description:
      "Organização dos vencimentos, cobranças e compromissos financeiros para evitar atrasos e inadimplência.",
  },
  {
    icon: Receipt,
    title: "Emissão de notas fiscais e controle tributário",
    description:
      "Conformidade fiscal na emissão de notas e acompanhamento das obrigações tributárias do condomínio.",
  },
  {
    icon: FileBarChart,
    title: "Relatórios financeiros e contábeis",
    description:
      "Elaboração de relatórios com visão estratégica para auxiliar o síndico e o conselho fiscal na tomada de decisão.",
  },
  {
    icon: Calculator,
    title: "Planejamento tributário",
    description:
      "Análise da situação fiscal, otimização da carga tributária dentro da lei e conformidade legal.",
  },
];

export function BPOSection() {
  return (
    <section id="servicos" className="border-t border-border bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            BPO Financeiro e Contábil
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            A contabilidade do condomínio sem sobrecarregar a administração
          </h2>
          <p className="mt-4 text-muted-foreground">
            Terceirize a rotina financeira e contábil com quem entende de condomínios e de
            controladoria.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-card-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
