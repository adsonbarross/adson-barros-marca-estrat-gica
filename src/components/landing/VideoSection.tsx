import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/message/6TDNDNOCGOXII1?autoload=1&app_absent=0&utm_source=ig";

export function VideoSection() {
  return (
    <section id="video" className="py-16 md:py-24 md:min-h-screen md:flex md:items-center md:justify-center bg-foreground px-4 sm:px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-background mb-4">
            Assista e entenda meu método
          </h2>
          <div className="w-16 h-0.5 bg-orange mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-xl overflow-hidden border border-background/10"
        >
          <iframe
            src="https://www.youtube.com/embed/x0S9erpc44k"
            title="Adson Barros - Estrategista de Marca"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 md:mt-12"
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
