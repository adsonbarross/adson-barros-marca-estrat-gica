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
    <section id="incluso" className="bg-foreground py-14 px-5 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-3">
            Vantagens do diagnóstico
          </p>
          <div className="w-10 h-1 bg-orange rounded-full mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-background leading-tight tracking-tight">
            Por que isso muda o jogo pro seu negócio
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
