import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo.jpg";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function HeroSection() {
  return (
    <section className="relative bg-background px-4 sm:px-6 py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.2em] uppercase text-foreground/60 mb-2"
        >
          Estrategista
          <br />
          de marca.
          <span className="block w-8 h-px bg-orange mt-3" />
        </motion.p>

        {/* Giant name + photo overlap */}
        <div className="relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] md:min-h-[520px]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center font-bold text-foreground leading-none select-none tracking-tight text-[18vw] sm:text-[16vw] md:text-[13vw] lg:text-[11rem] whitespace-nowrap"
            aria-hidden="true"
          >
            BARROS
          </motion.h1>

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={adsonPhoto}
            alt="Adson Barros - Estrategista de marca"
            className="relative z-10 h-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-auto object-contain object-bottom"
          />
        </div>

        {/* Bottom row: CTAs left, stat right */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 mt-6 md:mt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
          >
            <Button asChild variant="cta" size="xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Fale comigo
              </a>
            </Button>
            <a
              href="#sobre"
              className="text-xs sm:text-sm tracking-widest uppercase text-foreground/70 hover:text-orange transition-colors duration-300 underline underline-offset-4"
            >
              Sobre mim
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs sm:text-sm tracking-widest uppercase text-foreground/60 text-center sm:text-right"
          >
            +50
            <br />
            projetos
            <span className="block w-8 h-px bg-orange mt-3 ml-auto" />
          </motion.p>
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-14 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center leading-tight tracking-tight"
        >
          <span className="block">TRANSFORME SUA MARCA COM ESTRATÉGIA.</span>
          <span className="block mt-1 sm:mt-2 text-orange underline decoration-orange underline-offset-4">
            SE POSICIONE, DIFERENCIE e CRESÇA.
          </span>
        </motion.h2>
      </div>
    </section>
  );
}
