import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo-about.jpg";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const badges = [
  "Prazo de até 30 dias",
  "+120 marcas entregues",
  "Direto no WhatsApp",
];

export function HeroSection() {
  return (
    <section className="bg-foreground">
      {/* Banner photo */}
      <div className="relative w-full h-[58vh] sm:h-[65vh] lg:h-[75vh] max-h-[720px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={adsonPhoto}
          alt="Adson Barros - Especialista em identidade visual"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/5 to-black/20" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center px-5"
        >
          <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-orange">
            Identidade Visual Profissional
          </p>
        </motion.div>
      </div>

      {/* Headline + CTA */}
      <div className="px-5 sm:px-8 md:px-10 py-10 sm:py-14 text-center max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-background leading-tight tracking-tight mb-5"
        >
          Sua marca merece parecer tão boa quanto o seu trabalho.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-background/70 text-base sm:text-lg mb-8"
        >
          Logotipo, paleta de cores, tipografia, manual da marca e aplicações — tudo criado do zero pra você parar de perder clientes por causa de uma marca amadora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            asChild
            variant="cta"
            size="xl"
            className="w-full sm:w-auto whitespace-normal sm:whitespace-nowrap text-base sm:text-lg h-auto sm:h-14 py-3.5 sm:py-0 px-6 sm:px-10"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 shrink-0" fill="currentColor" />
              Quero minha identidade visual
            </a>
          </Button>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-6">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-1.5 text-background/60 text-xs sm:text-sm"
              >
                <Check className="w-3.5 h-3.5 text-orange shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
