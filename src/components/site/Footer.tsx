import { Facebook, Instagram, Linkedin, Scale } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Equipe", href: "#equipe" },
  { label: "Conteúdos", href: "#conteudos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Facebook, label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="bg-navy/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
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
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Escritório fictício de Direito do Trabalho, criado como projeto de demonstração de
            identidade visual e experiência digital.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#inicio"
                aria-label={`${s.label} (fictício)`}
                className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-muted-foreground transition-colors hover:border-gold/50 hover:text-gold"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Navegação</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest uppercase">Contato fictício</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>(61) 3333-0000</li>
            <li>(61) 99999-0000</li>
            <li>contato@chupacanos.adv.br</li>
            <li>Setor Jurídico Central, Brasília — DF</li>
            <li>Segunda a sexta • 08h às 18h</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl space-y-3 px-5 py-8 text-xs leading-relaxed text-muted-foreground md:px-8">
          <p>
            “Este site é um projeto demonstrativo. As informações, nomes, números de registro,
            contatos, depoimentos e dados apresentados são fictícios.”
          </p>
          <p>
            Chupa Canos Advocacia Trabalhista (marca fictícia) • CNPJ 00.000.000/0001-00 • OAB/XX
            0000 — dados ilustrativos. © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
