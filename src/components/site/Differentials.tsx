import { BarChart3, Eye, FolderKanban, GraduationCap, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: HeartHandshake, title: "Atendimento personalizado" },
  { icon: Eye, title: "Comunicação transparente" },
  { icon: FolderKanban, title: "Organização digital" },
  { icon: BarChart3, title: "Análise estratégica" },
  { icon: GraduationCap, title: "Experiência em Direito Trabalhista" },
  { icon: Users, title: "Acompanhamento próximo" },
];

export function Differentials() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher o Chupa Canos?" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 90}>
              <div className="surface-card flex h-full items-center gap-4 rounded-2xl p-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
                  <it.icon className="size-5 text-gold" />
                </span>
                <p className="font-medium">{it.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
