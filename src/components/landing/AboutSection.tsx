import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo-hero.jpg";

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
          className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-6 sm:px-10 md:px-16 py-14 md:py-20 order-2 lg:order-1"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-orange mb-3">
            Sobre mim
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
            +120 identidades <br /> entregues desde <br /> 2020.
          </h2>

          <div className="space-y-3 text-foreground/80 leading-relaxed text-sm sm:text-base max-w-md mx-auto lg:mx-0">
            <p>
              Me chamo <strong className="text-foreground">Adson Barros</strong>. Estou no mercado desde 2020 — comecei criando logos simples para pequenos negócios e, com o tempo, me especializei em identidade visual completa.
            </p>
            <p>
              Já são <strong className="text-foreground">mais de 120 projetos entregues</strong>, e essa evolução (de R$70 a R$3 mil por trabalho) reflete algo simples: <span className="text-orange font-semibold">entrego qualidade, cumpro prazo e entendo do mercado</span> em que meus clientes atuam.
            </p>
            <p>
              Meu objetivo não é só te dar uma marca bonita — é te ajudar a ter um negócio mais organizado, com processos claros e que lucra mais graças à percepção de valor que uma boa identidade cria.
            </p>
          </div>

          <div className="mt-8">
            <Button asChild variant="cta" size="lg">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" fill="currentColor" />
                Quero minha identidade visual
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
