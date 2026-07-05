import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo-about.jpg";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-muted/40 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-14 md:py-20 order-2 lg:order-1"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-orange mb-3">
            Sobre mim
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            Clareza de <br /> posicionamento <br /> e estratégia.
          </h2>

          <div className="space-y-3 text-foreground/80 leading-relaxed text-sm sm:text-base max-w-md">
            <p>
              Me chamo <strong className="text-foreground">Adson Barros</strong>. Sou estrategista de marca e trabalho com design gráfico e direção criativa há mais de 5 anos.
            </p>
            <p>
              Meu objetivo é <span className="text-orange font-semibold">tirar empresas da escuridão e trazer clareza</span> — de posicionamento, estratégia e direção.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild variant="cta" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Quero minha marca estratégica
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative min-h-[320px] sm:min-h-[420px] md:min-h-full order-1 lg:order-2"
        >
          <img
            src={adsonPhoto}
            alt="Adson Barros - Estrategista de marca"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-foreground/10" />
        </motion.div>
      </div>
    </section>
  );
}
