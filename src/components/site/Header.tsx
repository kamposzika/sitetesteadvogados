import { useEffect, useState } from "react";
import { Menu, Scale, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "O Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Equipe", href: "#equipe" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface-2">
            <Scale className="size-5 text-gold" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-[0.14em]">
              CHUPA CANOS
            </span>
            <span className="block text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
              Advocacia Trabalhista
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="gold" className="hidden md:inline-flex" asChild>
            <a href="#contato">Falar com um advogado</a>
          </Button>
          <Button
            variant="outlineLight"
            size="icon"
            className="xl:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="gold" className="mt-2" asChild>
              <a href="#contato" onClick={() => setOpen(false)}>
                Falar com um advogado
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
