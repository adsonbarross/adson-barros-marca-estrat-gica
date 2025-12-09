import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/message/6TDNDNOCGOXII1?autoload=1&app_absent=0&utm_source=ig";

export function CTASection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background px-6 py-24 relative">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-muted rounded-full opacity-30" />
        <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-brown/20 rounded-full opacity-40" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-12"
        >
          Construa sua marca com estratégia e{" "}
          <span className="text-orange">aumente seu valor</span>{" "}
          a cada dia que passa.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            asChild
            variant="cta"
            size="xl"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fale comigo no WhatsApp
            </a>
          </Button>

          <Button
            asChild
            variant="ctaOutline"
            size="xl"
          >
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
