import {
  AlarmClock,
  ArrowUpRight,
  Briefcase,
  Building2,
  FileSignature,
  HardHat,
  PiggyBank,
  ShieldAlert,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: FileSignature,
    title: "Rescisão Trabalhista",
    text: "Análise de verbas rescisórias, aviso prévio, férias, 13º salário e demais direitos.",
  },
  {
    icon: AlarmClock,
    title: "Horas Extras",
    text: "Orientação sobre jornada de trabalho, banco de horas e horas extraordinárias.",
  },
  {
    icon: PiggyBank,
    title: "FGTS",
    text: "Análise de situações envolvendo depósitos e direitos relacionados ao FGTS.",
  },
  {
    icon: ShieldAlert,
    title: "Assédio no Trabalho",
    text: "Orientação jurídica em situações de assédio moral e outras condutas inadequadas no ambiente profissional.",
  },
  {
    icon: HardHat,
    title: "Acidentes de Trabalho",
    text: "Orientação sobre direitos relacionados a acidentes e situações decorrentes do trabalho.",
  },
  {
    icon: Briefcase,
    title: "Contratos de Trabalho",
    text: "Análise e orientação sobre contratos e relações trabalhistas.",
  },
  {
    icon: FileSignature,
    title: "Rescisão Indireta",
    text: "Informações e orientação sobre hipóteses previstas na legislação trabalhista.",
  },
  {
    icon: Building2,
    title: "Consultoria Empresarial",
    text: "Orientação preventiva para empresas sobre questões trabalhistas.",
  },
];

export function Services() {
  return (
    <section id="atuacao" className="section-pad border-y border-border bg-navy/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Orientação jurídica para cada frente do Direito do Trabalho"
          description="Conteúdo demonstrativo que ilustra como o escritório organiza suas áreas de atendimento."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <article className="surface-card group h-full rounded-2xl p-6">
                <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-2 transition-colors group-hover:border-gold/50">
                  <s.icon className="size-5 text-gold" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <a
                  href="#contato"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5"
                >
                  Saiba mais <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
