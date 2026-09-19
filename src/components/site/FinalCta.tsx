import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="section-pad border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="hero-gradient relative overflow-hidden rounded-3xl border border-border px-7 py-16 text-center md:px-16 md:py-20">
            <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 size-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[130px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold text-balance md:text-5xl">
                Precisa entender melhor seus <span className="gold-text">direitos trabalhistas</span>
                ?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                “Entre em contato com nossa equipe e explique sua situação.”
              </p>
              <Button variant="gold" size="xl" className="mt-9" asChild>
                <a href="#contato">
                  Falar com nossa equipe <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
