import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Primeiro contato", text: "O cliente apresenta sua situação." },
  {
    n: "02",
    title: "Análise inicial",
    text: "A equipe analisa as informações e documentos apresentados.",
  },
  {
    n: "03",
    title: "Estratégia",
    text: "São avaliadas as possibilidades jurídicas aplicáveis ao caso.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "O cliente recebe informações sobre o andamento do atendimento.",
  },
  { n: "05", title: "Encaminhamento", text: "São apresentados os próximos passos possíveis." },
];

export function Process() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Um caminho claro, do primeiro contato ao encaminhamento"
        />

        <ol className="relative mt-14 space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[27px] before:w-px before:bg-border md:before:left-1/2">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              delay={i * 90}
              className={`relative flex gap-5 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}
            >
              <span
                className={`z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface-2 font-display text-sm font-bold text-gold md:absolute md:top-1 ${i % 2 ? "md:-left-7" : "md:-right-7"}`}
              >
                {s.n}
              </span>
              <div className="surface-card w-full rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
