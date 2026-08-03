import { motion } from "framer-motion";
import { ShieldCheck, Brain, TrendingUp, Repeat, Target } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Mais credibilidade", description: "Seu cliente confia mais em uma marca com aparência profissional." },
  { icon: Brain, title: "Fácil de lembrar", description: "Uma identidade forte fica na cabeça do seu cliente na hora certa." },
  { icon: TrendingUp, title: "Maior percepção de valor", description: "Marcas bem construídas justificam preços mais altos." },
  { icon: Repeat, title: "Consistência em todo lugar", description: "Redes sociais, embalagem e site com a mesma cara — profissional." },
  { icon: Target, title: "Se destaca da concorrência", description: "Diferencia seu negócio de quem ainda não investiu na própria marca." },
];

export function PillarsSection() {
  return (
    <section id="incluso" className="bg-foreground py-24 px-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-orange mb-3">
            Vantagens de uma identidade visual
          </p>
          <div className="w-12 h-1 bg-orange rounded-full mx-auto mb-5" />
          <h2 className="text-4xl font-extrabold text-background leading-tight tracking-tight max-w-2xl mx-auto">
            Por que isso muda o jogo pro seu negócio
          </h2>
        </motion.div>

        <div className="grid grid-cols-5 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-start gap-4 rounded-2xl border border-background/10 bg-background/5 p-6 h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-background/5 border border-background/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="font-bold text-background text-lg mb-1">{item.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
