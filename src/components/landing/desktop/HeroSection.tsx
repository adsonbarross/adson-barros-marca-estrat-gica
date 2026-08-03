import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo-about.jpg";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function HeroSection() {
  return (
    <section className="relative bg-foreground px-10 pt-36 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 text-left"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-orange mb-4">
            Identidade Visual Profissional
          </p>
          <div className="w-12 h-1 bg-orange rounded-full mb-5" />
          <h1 className="text-5xl font-extrabold text-background leading-[1.1] tracking-tight mb-6">
            O sucesso do seu negócio é equivalente ao <span className="text-orange">quanto você valoriza sua marca</span>.
          </h1>
          <p className="text-background/70 text-lg max-w-lg mb-8">
            A identidade visual da sua empresa fala para o seu cliente <strong className="text-background/90 font-semibold">o quanto você se importa com o seu negócio</strong> e se realmente vale a pena comprar a sua ideia. Aqui eu crio tudo pra você de forma profissional, mostrando nitidamente o valor do seu negócio.
          </p>

          <div className="flex items-center gap-5 mb-10">
            <Button asChild variant="cta" size="xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" fill="currentColor" />
                Quero minha identidade visual
              </a>
            </Button>
            <a
              href="#portfolio"
              className="text-sm tracking-widest uppercase text-background/70 hover:text-orange transition-colors duration-300 underline underline-offset-4"
            >
              Ver portfólio
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-orange" fill="currentColor" />
              <span className="text-background/80 text-sm">
                <strong className="text-background">700+</strong> seguidores no Behance
              </span>
            </div>
            <div className="text-background/80 text-sm">
              <strong className="text-background">39,5 mil+</strong> visualizações
            </div>
            <div className="text-background/80 text-sm">
              <strong className="text-background">5,4 mil+</strong> apreciações
            </div>
          </div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-w-0 relative mx-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden"
        >
          <img
            src={adsonPhoto}
            alt="Adson Barros - Especialista em identidade visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/5" />
        </motion.div>
      </div>
    </section>
  );
}
