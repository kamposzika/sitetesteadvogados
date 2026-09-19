import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const posts = [
  {
    category: "Rescisão",
    date: "12 de março de 2025",
    title: "Quais são os principais direitos na rescisão do contrato?",
    summary:
      "Um panorama geral sobre verbas rescisórias, aviso prévio e documentos normalmente envolvidos no encerramento do contrato.",
  },
  {
    category: "Jornada",
    date: "27 de março de 2025",
    title: "Como funcionam as horas extras?",
    summary:
      "Conceitos gerais sobre jornada, banco de horas e registro de ponto, apresentados em linguagem simples.",
  },
  {
    category: "Ambiente de trabalho",
    date: "08 de abril de 2025",
    title: "O que caracteriza o assédio moral no trabalho?",
    summary:
      "Explicação introdutória sobre condutas inadequadas no ambiente profissional e caminhos de orientação.",
  },
  {
    category: "Direitos",
    date: "22 de abril de 2025",
    title: "Entenda férias e 13º salário",
    summary:
      "Como esses direitos costumam ser calculados e quais pontos merecem atenção na conferência dos valores.",
  },
  {
    category: "Orientação",
    date: "05 de maio de 2025",
    title: "Quando procurar orientação jurídica trabalhista?",
    summary:
      "Sinais comuns de que vale conversar com um profissional antes de tomar decisões sobre o contrato.",
  },
];

export function Blog() {
  return (
    <section id="conteudos" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Conteúdos"
          title="Informação também é um direito."
          description="Artigos fictícios, produzidos apenas para ilustrar a área de conteúdos do escritório."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <article className="surface-card group flex h-full flex-col rounded-2xl p-7">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full border border-gold/40 px-3 py-1 tracking-wide text-gold uppercase">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <CalendarDays className="size-3.5" />
                    {p.date}
                  </span>
                </div>
                <h3 className="mt-5 text-lg leading-snug font-semibold">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.summary}
                </p>
                <a
                  href="#contato"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-2.5"
                >
                  Ler artigo <ArrowUpRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
