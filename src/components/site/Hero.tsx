import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-justice.jpg";

export function Hero() {
  return (
    <section id="inicio" className="hero-gradient relative overflow-hidden pt-32 pb-20 md:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-32 -right-24 size-[480px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-4 py-1.5 text-xs tracking-[0.16em] text-gold uppercase">
            <ShieldCheck className="size-3.5" /> Direito do Trabalho
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance md:text-6xl">
            Seus direitos no trabalho merecem uma <span className="gold-text">defesa à altura</span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            “Atuação estratégica em Direito Trabalhista para trabalhadores e empresas, com
            atendimento humanizado, análise cuidadosa de cada caso e soluções jurídicas
            personalizadas.”
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#contato">
                Agendar consulta <ArrowRight />
              </a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="#atuacao">Conhecer nossa atuação</a>
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-5 py-4">
            <Clock className="size-5 text-gold" />
            <div className="text-sm">
              <p className="font-medium">Atendimento jurídico especializado</p>
              <p className="text-muted-foreground">Segunda a sexta • 08h às 18h</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />
          <img
            src={heroImage}
            alt="Composição visual com balança da justiça, documentos e elementos geométricos"
            width={1200}
            height={1408}
            className="relative w-full rounded-3xl border border-border object-cover shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </section>
  );
}
