import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { value: 1200, prefix: "+", suffix: "", label: "Casos analisados" },
  { value: 850, prefix: "+", suffix: "", label: "Clientes atendidos" },
  { value: 12, prefix: "", suffix: " anos", label: "De experiência fictícia" },
  { value: 98, prefix: "", suffix: "%", label: "De satisfação dos clientes" },
];

function useCountUp(target: number, start: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start]);
  return value;
}

function Stat({ item }: { item: (typeof stats)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);

          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const value = useCountUp(item.value, start);

  return (
    <div ref={ref} className="surface-card rounded-2xl px-6 py-8 text-center">
      <p className="font-display text-3xl font-bold md:text-4xl">
        {item.prefix}
        {value.toLocaleString("pt-BR")}
        {item.suffix}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="section-pad border-y border-border bg-navy/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-10 text-center">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">
            Indicadores institucionais fictícios
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Números meramente demonstrativos, criados para este projeto de portfólio.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <Stat item={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
