import { motion } from "framer-motion";
import { CalendarClock, Layers, Sparkles, Compass } from "lucide-react";

const features = [
  {
    icon: CalendarClock,
    title: "+5 anos",
    description: "De experiência no mercado",
  },
  {
    icon: Layers,
    title: "+50 projetos",
    description: "Entregues pelo Brasil e mundo",
  },
  {
    icon: Sparkles,
    title: "Identidade visual",
    description: "Marcas com propósito e clareza",
  },
  {
    icon: Compass,
    title: "Direção criativa",
    description: "Estratégia por trás do design",
  },
];

export function FeaturesStrip() {
  return (
    <section className="bg-background border-y border-border py-10 md:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex items-center gap-3"
          >
            <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange flex-shrink-0" />
            <div>
              <p className="text-foreground font-bold text-sm sm:text-base leading-tight">
                {feature.title}
              </p>
              <p className="text-foreground/60 text-xs sm:text-sm leading-tight">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
