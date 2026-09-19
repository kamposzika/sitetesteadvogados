import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const infos = [
  { icon: Phone, label: "Telefone", value: "(61) 3333-0000" },
  { icon: MessageCircle, label: "WhatsApp", value: "(61) 99999-0000" },
  { icon: Mail, label: "E-mail", value: "contato@chupacanos.adv.br" },
  { icon: MapPin, label: "Endereço", value: "Setor Jurídico Central, Brasília — DF" },
];

export function Contact() {
  const [tipo, setTipo] = useState("");

  return (
    <section id="contato" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre o seu caso?"
          description="Formulário demonstrativo: nenhuma mensagem é realmente enviada ou armazenada."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form
              className="surface-card rounded-2xl p-7 md:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("Solicitação registrada (demonstração)", {
                  description: "Este site é fictício, portanto nenhum dado é enviado.",
                });
                (e.target as HTMLFormElement).reset();
                setTipo("");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" name="nome" required className="mt-2" placeholder="Seu nome" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2"
                    placeholder="voce@email.com"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    name="telefone"
                    className="mt-2"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="tipo">Tipo de atendimento</Label>
                  <Select value={tipo} onValueChange={setTipo}>
                    <SelectTrigger id="tipo" className="mt-2 w-full">
                      <SelectValue placeholder="Selecione uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trabalhador">Trabalhador</SelectItem>
                      <SelectItem value="empresa">Empresa</SelectItem>
                      <SelectItem value="consultoria">Consultoria preventiva</SelectItem>
                      <SelectItem value="outro">Outro assunto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    className="mt-2"
                    placeholder="Conte brevemente sobre a sua situação"
                  />
                </div>
              </div>

              <Button type="submit" variant="gold" size="xl" className="mt-7 w-full sm:w-auto">
                Enviar solicitação <Send />
              </Button>
            </form>
          </Reveal>

          <div className="space-y-4">
            {infos.map((info, i) => (
              <Reveal key={info.label} delay={i * 80}>
                <div className="surface-card flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
                    <info.icon className="size-5 text-gold" />
                  </span>
                  <div>
                    <p className="text-xs tracking-widest text-muted-foreground uppercase">
                      {info.label}
                    </p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={320}>
              <div className="surface-card grid-lines relative flex h-56 items-center justify-center overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_50%_50%,var(--primary)/25,transparent_70%)]" />
                <div className="relative text-center">
                  <MapPin className="mx-auto size-7 text-gold" />
                  <p className="mt-3 font-medium">Setor Jurídico Central</p>
                  <p className="text-sm text-muted-foreground">Brasília — DF (endereço fictício)</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
