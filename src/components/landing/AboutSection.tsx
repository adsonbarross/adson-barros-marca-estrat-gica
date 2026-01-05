import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo.jpg";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 md:min-h-screen md:flex md:items-center bg-background px-8 sm:px-12 md:px-16 lg:px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image - appears first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-sm mx-auto lg:max-w-none lg:order-1"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-orange" />
              <div className="absolute bottom-4 right-4 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-orange" />
              
              <img 
                src={adsonPhoto} 
                alt="Adson Barros - Estrategista de marca" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            {/* Brown accent detail */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-brown/10 rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 text-center lg:text-left">
              Sobre mim
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base text-justify">
              <p>
                Me chamo <strong className="text-foreground">Adson Barros</strong>. Sou estrategista de marca e trabalho com design gráfico e direção criativa há mais de 5 anos.
              </p>
              <p>
                Sou especializado em criação de identidade visual e já desenvolvi mais de <strong className="text-foreground">50 projetos</strong> espalhados pelo Brasil (e alguns pelo mundo).
              </p>
              <p>
                Meu objetivo é: <span className="text-orange font-semibold">tirar empresas da escuridão e trazer clareza.</span> Clareza de posicionamento, de estratégia e de direção. Não é só sobre visibilidade ou vendas — é sobre previsibilidade, evolução e consciência do caminho que o empreendedor quer seguir.
              </p>
              <p>
                Acredito que ninguém cresce no improviso. Por isso, ajudo pessoas a enxergarem onde querem chegar e qual postura precisam assumir pra tornar esse caminho possível.
              </p>
              <p>
                Tudo isso através da <strong className="text-foreground">transformação estratégica de marca</strong> — um processo que transforma o negócio, mas principalmente a mentalidade por trás dele.
              </p>
            </div>

            <div className="mt-8 sm:mt-10 text-center lg:text-left">
              <Button
                asChild
                variant="cta"
                size="lg"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Quero minha marca estratégica
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
