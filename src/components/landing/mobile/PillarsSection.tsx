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
    <section id="incluso" className="bg-foreground py-14 px-5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-orange mb-2">O que está incluso</p>
          <h2 className="text-2xl font-bold text-background">
            Tudo que sua marca precisa pra ser levada a sério
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-background/10 bg-background/5 p-5"
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-background/5 border border-background/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-orange" />
              </div>
              <div>
                <h3 className="font-bold text-background text-base mb-1">{item.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
