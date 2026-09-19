import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "Neste cenário fictício, a primeira conversa serve para entender a situação apresentada e identificar quais documentos podem ajudar na análise inicial.",
  },
  {
    q: "Quais documentos devo apresentar?",
    a: "Normalmente contrato de trabalho, holerites, registros de ponto, comunicados da empresa e o termo de rescisão, quando houver.",
  },
  {
    q: "O escritório atende trabalhadores e empresas?",
    a: "Sim. O atendimento demonstrativo contempla tanto trabalhadores quanto empresas que buscam orientação preventiva.",
  },
  {
    q: "Como posso acompanhar meu atendimento?",
    a: "O acompanhamento é feito por canais digitais, com atualizações organizadas sobre cada etapa do atendimento.",
  },
  {
    q: "Posso realizar atendimento online?",
    a: "Sim. As conversas podem acontecer por videochamada ou telefone, conforme a preferência do cliente.",
  },
  {
    q: "Quanto custa uma consulta?",
    a: "Os valores são definidos caso a caso e informados previamente. Nenhum valor real é apresentado neste site demonstrativo.",
  },
  {
    q: "Como entrar em contato?",
    a: "Pelo formulário desta página ou pelos contatos fictícios apresentados na seção de contato.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-pad border-y border-border bg-navy/40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="mb-3 rounded-xl border border-border bg-surface/70 px-5"
              >
                <AccordionTrigger className="text-left text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
