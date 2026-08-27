export function ComoFunciona() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico inicial",
      description:
        "Conversão com o síndico ou conselho fiscal para entender a situação do condomínio e definir o escopo da auditoria ou do BPO.",
    },
    {
      number: "02",
      title: "Análise documental",
      description:
        "Coleta e exame de extratos bancários, notas fiscais, contratos, atas e registros contábeis, tudo dentro dos padrões de sigilo.",
    },
    {
      number: "03",
      title: "Relatório entregue",
      description:
        "Entrega de um relatório claro, com achados, recomendações e próximos passos — pronto para assembleia ou para ajustes internos.",
    },
  ];

  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Como funciona
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Três passos para clareza financeira
          </h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-5xl font-semibold text-primary/40">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
