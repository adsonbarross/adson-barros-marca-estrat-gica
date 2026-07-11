import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Instagram, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function FooterSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", segment: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("leads").insert({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        segment: formData.segment.trim() || null
      });
      if (error) throw error;
      toast({ title: "Recebido!", description: "Te chamando no WhatsApp agora..." });
      setFormData({ name: "", email: "", phone: "", segment: "" });
      window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
    } catch (error) {
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <footer id="contato" className="bg-foreground px-10 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-start text-left"
          >
            <h2 className="text-5xl font-bold text-background mb-6">Vamos criar sua marca?</h2>
            <p className="text-background/70 text-lg mb-8 max-w-md">
              Preencha o formulário ao lado e eu te chamo no WhatsApp pra falar sobre sua identidade visual.
            </p>

            <div className="flex gap-4 mb-12">
              <a
                href="https://www.instagram.com/adson.barros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-orange hover:border-orange transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="w-16 h-0.5 bg-brown/30 mb-8" />

            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} Adson Barros. Todos os direitos reservados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required
                className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-14 rounded-lg focus:border-orange focus:ring-orange" />
              <Input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required
                className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-14 rounded-lg focus:border-orange focus:ring-orange" />
              <Input type="tel" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required
                className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-14 rounded-lg focus:border-orange focus:ring-orange" />
              <Input type="text" name="segment" placeholder="Seu segmento (opcional)" value={formData.segment} onChange={handleChange}
                className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-14 rounded-lg focus:border-orange focus:ring-orange" />
              <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {isSubmitting ? "Enviando..." : "Ir para o WhatsApp"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
