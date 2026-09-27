import { motion } from "framer-motion";
import { ClipboardList, CreditCard, FileEdit, Rocket } from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "1. Responda ao quiz", description: "Perguntas rápidas pra eu entender o momento da sua empresa." },
  { icon: CreditCard, title: "2. Garanta seu diagnóstico", description: "Pagamento seguro, por apenas R$97." },
  { icon: FileEdit, title: "3. Conte mais sobre seu negócio", description: "Um formulário rápido pra eu entender os detalhes dos 3 pilares." },
  { icon: Rocket, title: "4. Receba seu plano de ação", description: "Pontuação real e prioridades claras pra sua empresa crescer." },
];

export function FeaturesStrip() {
  return (
    <section className="bg-background py-20 px-10 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-orange mb-2">Como funciona</p>
          <div className="w-12 h-1 bg-orange rounded-full mx-auto mb-5" />
          <h2 className="text-4xl font-extrabold text-foreground leading-tight tracking-tight">Do quiz ao plano de ação</h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-start gap-4 rounded-2xl border border-border bg-foreground/5 p-6 h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-foreground/5 border border-border flex items-center justify-center">
                <step.icon className="w-6 h-6 text-orange" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg mb-1">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
