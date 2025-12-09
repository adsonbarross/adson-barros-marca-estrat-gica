import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/message/6TDNDNOCGOXII1?autoload=1&app_absent=0&utm_source=ig";

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-orange" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-orange" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-32 h-32 rounded-full bg-foreground/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-foreground/30">AB</span>
                  </div>
                  <p className="text-muted-foreground text-sm">Adicione sua foto aqui</p>
                </div>
              </div>
            </div>
            
            {/* Brown accent detail */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brown/10 rounded-xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Sobre mim
            </h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed">
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

            <div className="mt-10">
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
