import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function HeroSection() {
  return (
    <section className="py-16 md:py-20 min-h-[80vh] md:min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle brown accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brown/20 to-transparent" />
      
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight tracking-tight"
        >
          <span className="block">TRANSFORME</span>
          <span className="block mt-1 sm:mt-2">SUA MARCA COM ESTRATÉGIA.</span>
          <span className="block mt-1 sm:mt-2 text-orange underline decoration-orange underline-offset-4">SE POSICIONE, DIFERENCIE</span>
          <span className="block mt-1 sm:mt-2 text-orange underline decoration-orange underline-offset-4">
            e CRESÇA.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12"
        >
          <Button
            asChild
            variant="cta"
            size="xl"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fale comigo
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 sm:bottom-20 left-1/2 -translate-x-1/2 w-24 h-px bg-brown/30"
      />
    </section>
  );
}
