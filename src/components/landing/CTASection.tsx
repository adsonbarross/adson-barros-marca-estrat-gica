import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";
export function CTASection() {
  return (
    <section className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-background px-4 sm:px-6 py-16 md:py-24 relative">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 border border-muted rounded-full opacity-30" />
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 border border-brown/20 rounded-full opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 sm:mb-12 leading-tight px-2"
        >
          Construa sua marca com estratégia e aumente seu valor a cada dia que passa.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Button asChild variant="cta" size="xl" className="w-full sm:w-auto">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fale comigo no WhatsApp
            </a>
          </Button>

          <Button asChild variant="ctaOutline" size="xl" className="w-full sm:w-auto">
            <a href="#video">
              Saiba mais
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}