import { motion } from "framer-motion";
import { SearchCheck, ListChecks, Target, TrendingUp, Compass } from "lucide-react";

const items = [
  { icon: SearchCheck, title: "Clareza total", description: "Você entende exatamente onde sua empresa perde dinheiro e reconhecimento." },
  { icon: ListChecks, title: "Plano de ação", description: "Prioridades claras pra melhorar, sem achismo." },
  { icon: Target, title: "Decisões com base em dados", description: "Cada ponto do seu negócio recebe uma nota — chega de decidir no escuro." },
  { icon: TrendingUp, title: "Economia de tempo e dinheiro", description: "Você para de investir no que não é o problema real." },
  { icon: Compass, title: "Direção pra crescer", description: "Sai com um caminho claro pros 3 pilares: Posicionamento, Captação e Vendas." },
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
            Vantagens do diagnóstico
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
