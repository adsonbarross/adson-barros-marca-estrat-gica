import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Instagram, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function FooterSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    segment: ""
  });

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

      toast({
        title: "Mensagem enviada!",
        description: "Entrarei em contato em breve."
      });
      setFormData({ name: "", email: "", phone: "", segment: "" });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return (
    <footer id="contato" className="bg-foreground px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background mb-4 sm:mb-6">
              Vamos conversar?
            </h2>
            <p className="text-background/70 text-base sm:text-lg mb-6 sm:mb-8 max-w-md">
              Preencha o formulário ao lado ou entre em contato diretamente pelas minhas redes sociais.
            </p>

            <div className="flex gap-4 mb-8 sm:mb-12">
              <a
                href="https://www.instagram.com/adson.barros/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-orange hover:border-orange transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="w-16 h-0.5 bg-brown/30 mb-6 sm:mb-8" />

            <p className="text-background/40 text-xs sm:text-sm">
              © {new Date().getFullYear()} Adson Barros. Todos os direitos reservados.
            </p>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-12 sm:h-14 rounded-lg focus:border-orange focus:ring-orange"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-12 sm:h-14 rounded-lg focus:border-orange focus:ring-orange"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-12 sm:h-14 rounded-lg focus:border-orange focus:ring-orange"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="segment"
                  placeholder="Seu segmento (opcional)"
                  value={formData.segment}
                  onChange={handleChange}
                  className="bg-background/5 border-background/10 text-background placeholder:text-background/40 h-12 sm:h-14 rounded-lg focus:border-orange focus:ring-orange"
                />
              </div>
              <Button type="submit" variant="cta" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}