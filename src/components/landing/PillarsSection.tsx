import { motion } from "framer-motion";
import { Palette, Compass, Target } from "lucide-react";

const pillars = [
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Criação de marcas que representam quem você é.",
  },
  {
    icon: Compass,
    title: "Direção Criativa",
    description: "Mais de 5 anos guiando negócios com clareza visual.",
  },
  {
    icon: Target,
    title: "Posicionamento",
    description: "Estratégia que traz previsibilidade e evolução.",
  },
];

export function PillarsSection() {
  return (
    <section className="bg-brown py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
        {pillars.map((pillar, index) => (
          <motion.a
            key={pillar.title}
            href="#sobre"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex items-start gap-4"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-xl bg-background/5 border border-background/10 flex items-center justify-center group-hover:border-orange group-hover:bg-orange/10 transition-colors duration-300">
              <pillar.icon className="w-6 h-6 text-orange" />
            </div>
            <div>
              <h3 className="text-background font-bold text-base sm:text-lg mb-1">
                {pillar.title}
              </h3>
              <p className="text-background/60 text-sm leading-relaxed">
                {pillar.description}
              </p>
              <span className="inline-block mt-2 text-xs tracking-widest uppercase text-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saiba mais →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
