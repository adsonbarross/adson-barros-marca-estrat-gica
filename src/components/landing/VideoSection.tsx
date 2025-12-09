import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre os serviços de estratégia de marca.";

export function VideoSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-foreground px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
            Assista e entenda meu método
          </h2>
          <div className="w-16 h-0.5 bg-orange mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video bg-background/5 rounded-xl overflow-hidden border border-background/10"
        >
          {/* Video placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background/5 to-background/10">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-orange flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-8 h-8 text-primary-foreground ml-1" />
              </div>
              <p className="text-background/60 text-sm">Adicione seu vídeo aqui</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="cta"
            size="lg"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Vamos estruturar sua marca
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
