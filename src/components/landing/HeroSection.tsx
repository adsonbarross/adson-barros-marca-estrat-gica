import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo-about.jpg";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function HeroSection() {
  return (
    <section className="relative bg-foreground px-5 sm:px-8 md:px-10 lg:px-6 py-14 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-orange mb-3">
            Identidade Visual Profissional
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background leading-tight tracking-tight mb-5">
            Sua marca merece parecer tão boa quanto o seu trabalho.
          </h1>
          <p className="text-background/70 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-6">
            Logotipo, paleta de cores, tipografia, manual da marca e aplicações — tudo criado do zero pra você parar de perder clientes por causa de uma marca amadora.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
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
            <a
              href="#portfolio"
              className="text-xs sm:text-sm tracking-widest uppercase text-background/70 hover:text-orange transition-colors duration-300 underline underline-offset-4"
            >
              Ver portfólio
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
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
          className="min-w-0 order-1 lg:order-2 relative mx-auto w-full max-w-[85%] sm:max-w-xs md:max-w-sm aspect-[4/5] rounded-2xl overflow-hidden"
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
