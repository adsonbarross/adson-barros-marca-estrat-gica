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
      <div className="relative w-full h-[62vh] min-h-[420px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={adsonPhoto}
          alt="Adson Barros - Especialista em identidade visual"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/0 to-black/10" />
      </div>

      {/* Headline + CTA */}
      <div className="px-5 -mt-8 pt-0 pb-6 text-center max-w-2xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange mb-2"
        >
          Identidade Visual Profissional
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="w-8 h-1 bg-orange rounded-full mx-auto mb-3"
        />
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl font-extrabold text-background leading-[1.15] tracking-tight mb-3"
        >
          O sucesso do seu negócio é equivalente ao <span className="text-orange">quanto você valoriza sua marca</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-background/70 text-xs mb-4 leading-relaxed"
        >
          A identidade visual da sua empresa fala para o seu cliente <strong className="text-background/90 font-semibold">o quanto você se importa com o seu negócio</strong> e se realmente vale a pena comprar a sua ideia. Aqui eu crio tudo pra você de forma profissional, mostrando nitidamente o valor do seu negócio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            variant="cta"
            size="lg"
            className="w-full whitespace-normal text-sm h-auto py-3 px-5"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 shrink-0" fill="currentColor" />
              Quero minha identidade visual
            </a>
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 mt-4">
            {badges.map((badge) => (
              <span key={badge} className="flex items-center gap-1 text-background/60 text-[11px]">
                <Check className="w-3 h-3 text-orange shrink-0" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
