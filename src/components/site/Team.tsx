import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const people = [
  {
    photo: team1,
    name: "Dr. Augusto Canos",
    role: "Advogado Trabalhista",
    oab: "OAB/XX 00000",
    bio: "Perfil fictício. Atua na condução de casos trabalhistas individuais, com foco em análise de verbas rescisórias e jornada de trabalho.",
  },
  {
    photo: team2,
    name: "Dra. Marina Albuquerque",
    role: "Advogada Trabalhista",
    oab: "OAB/XX 00000",
    bio: "Perfil fictício. Dedica-se ao atendimento de trabalhadores em situações de assédio, acidentes e rescisão indireta.",
  },
  {
    photo: team3,
    name: "Dr. Rafael Mendes",
    role: "Advogado Empresarial",
    oab: "OAB/XX 00000",
    bio: "Perfil fictício. Trabalha com consultoria preventiva para empresas, revisão de contratos e políticas internas.",
  },
];

export function Team() {
  return (
    <section id="equipe" className="section-pad border-y border-border bg-navy/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Profissionais fictícios criados para esta demonstração"
          description="Nomes, registros e biografias são ilustrativos e não representam pessoas reais."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <article className="surface-card group h-full overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.photo}
                    alt={`Retrato fictício de ${p.name}`}
                    loading="lazy"
                    width={800}
                    height={1008}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="text-sm text-gold">{p.role}</p>
                  <p className="mt-1 text-xs tracking-wider text-muted-foreground">{p.oab}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
