import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    text: "“Fui muito bem atendido e recebi explicações claras sobre todas as etapas.”",
    name: "Carlos Henrique",
    role: "cliente fictício",
  },
  {
    text: "“Excelente experiência de atendimento e comunicação.”",
    name: "Fernanda Alves",
    role: "cliente fictícia",
  },
  {
    text: "“Equipe atenciosa e organizada.”",
    name: "Marcelo Santos",
    role: "cliente fictício",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad border-y border-border bg-navy/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Relatos criados para demonstração"
          description="Todos os depoimentos abaixo são fictícios e ilustram apenas o formato da seção."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="surface-card h-full rounded-2xl p-7">
                <Quote className="size-7 text-gold" />
                <blockquote className="mt-5 leading-relaxed text-foreground/90">{t.text}</blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  — {t.name}, {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
