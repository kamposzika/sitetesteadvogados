import { HeartHandshake, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import officeImage from "@/assets/office.jpg";

const cards = [
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    text: "“Cada caso recebe uma análise individualizada.”",
  },
  {
    icon: Target,
    title: "Estratégia Jurídica",
    text: "“Planejamento e acompanhamento de cada etapa do processo.”",
  },
];

export function About() {
  return (
    <section id="escritorio" className="section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gold/10 blur-2xl" />
            <img
              src={officeImage}
              alt="Ambiente moderno de escritório de advocacia"
              loading="lazy"
              width={1200}
              height={912}
              className="relative w-full rounded-3xl border border-border object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex rounded-full border border-border bg-surface-2/60 px-4 py-1.5 text-xs tracking-[0.18em] text-gold uppercase">
              O escritório
            </span>
            <h2 className="mt-5 text-3xl leading-tight font-semibold text-balance md:text-4xl">
              Advocacia trabalhista com estratégia, tecnologia e proximidade.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              O Chupa Canos Advocacia Trabalhista é um escritório fictício dedicado exclusivamente ao
              Direito do Trabalho, atuando na orientação de trabalhadores e empresas. Nosso modelo de
              trabalho combina análise jurídica cuidadosa com o uso de tecnologia para organização de
              documentos, acompanhamento de prazos e comunicação clara com cada cliente.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Do primeiro contato ao encaminhamento final, cada etapa é registrada em um ambiente
              digital organizado — para que ninguém precise adivinhar em que ponto está o seu
              atendimento.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="surface-card h-full rounded-2xl p-6">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface-2">
                    <c.icon className="size-5 text-gold" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
