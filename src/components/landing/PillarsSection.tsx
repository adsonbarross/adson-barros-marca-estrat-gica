import { motion } from "framer-motion";
import { PenTool, Palette, Type, BookOpen, Layers } from "lucide-react";

const items = [
  {
    icon: PenTool,
    title: "Logotipo",
    description: "Marca única, com versões para cada uso.",
  },
  {
    icon: Palette,
    title: "Paleta de cores",
    description: "Cores pensadas pra transmitir a personalidade certa.",
  },
  {
    icon: Type,
    title: "Tipografia",
    description: "Fontes que dão consistência em qualquer peça.",
  },
  {
    icon: BookOpen,
    title: "Manual da marca",
    description: "Guia completo de uso pra sua marca não perder o padrão.",
  },
  {
    icon: Layers,
    title: "Aplicações",
    description: "Cartão de visita, redes sociais e outras peças prontas.",
  },
];

export function PillarsSection() {
  return (
    <section id="incluso" className="bg-background py-14 md:py-20 px-4 sm:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-orange mb-2">
            O que está incluso
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Tudo que sua marca precisa pra ser levada a sério
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center sm:text-left"
            >
              <div className="w-14 h-14 mx-auto sm:mx-0 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-bold text-foreground text-base sm:text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
