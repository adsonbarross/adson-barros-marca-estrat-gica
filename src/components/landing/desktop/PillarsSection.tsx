import { motion } from "framer-motion";
import { PenTool, Palette, Type, BookOpen, Layers } from "lucide-react";

const items = [
  { icon: PenTool, title: "Logotipo", description: "Marca única, com versões para cada uso." },
  { icon: Palette, title: "Paleta de cores", description: "Cores pensadas pra transmitir a personalidade certa." },
  { icon: Type, title: "Tipografia", description: "Fontes que dão consistência em qualquer peça." },
  { icon: BookOpen, title: "Manual da marca", description: "Guia completo de uso pra sua marca não perder o padrão." },
  { icon: Layers, title: "Aplicações", description: "Cartão de visita, redes sociais e outras peças prontas." },
];

export function PillarsSection() {
  return (
    <section id="incluso" className="bg-background py-20 px-10 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-orange mb-2">O que está incluso</p>
          <h2 className="text-4xl font-bold text-foreground">
            Tudo que sua marca precisa pra ser levada a sério
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
