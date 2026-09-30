import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full h-12 px-4 rounded-full bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange transition-colors duration-300 text-sm";

export function LeadForm({ fullButton = false }: { fullButton?: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [segment, setSegment] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;
    setSending(true);
    setError(false);
    const { error: insertError } = await supabase.from("leads").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      segment: segment.trim() || null,
    });
    if (insertError) {
      setError(true);
    } else {
      setDone(true);
      setName("");
      setEmail("");
      setPhone("");
      setSegment("");
    }
    setSending(false);
  }

  if (done) {
    return (
      <div className="flex items-center gap-3 bg-background/10 border border-orange/40 rounded-2xl px-6 py-5">
        <CheckCircle2 className="w-6 h-6 text-orange shrink-0" />
        <p className="text-background text-sm">
          Recebido! Vou entrar em contato em breve para fazer seu diagnóstico.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 gap-3 mb-4">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          aria-label="Nome"
          className={inputClass}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          aria-label="E-mail"
          className={inputClass}
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          aria-label="Telefone"
          className={inputClass}
        />
        <input
          type="text"
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          placeholder="Seu segmento"
          aria-label="Seu segmento"
          className={inputClass}
        />
      </div>
      <Button
        type="submit"
        variant="cta"
        size="xl"
        disabled={sending}
        className={fullButton ? "w-full whitespace-normal text-base h-auto py-3.5 px-6" : ""}
      >
        {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        {sending ? "Enviando..." : "Enviar"}
      </Button>
      {error && (
        <p className="text-orange text-sm mt-3">
          Não foi possível enviar agora. Tente de novo em instantes ou chame no WhatsApp.
        </p>
      )}
    </form>
  );
}
