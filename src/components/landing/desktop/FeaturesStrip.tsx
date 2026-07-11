import { motion } from "framer-motion";
import { MessageSquare, Palette, RefreshCw, PackageCheck } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "1. Briefing", description: "Conversamos pelo WhatsApp sobre seu negócio, público e objetivos." },
  { icon: Palette, title: "2. Criação", description: "Desenvolvo o conceito, logotipo, cores e tipografia da sua marca." },
  { icon: RefreshCw, title: "3. Ajustes", description: "Você revisa e eu refino até ficar exatamente como precisa." },
  { icon: PackageCheck, title: "4. Entrega", description: "Todos os arquivos, manual da marca e aplicações em até 30 dias." },
];

export function FeaturesStrip() {
  return (
    <section className="bg-foreground py-20 px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-orange mb-2">Como funciona</p>
          <h2 className="text-4xl font-bold text-background">Do briefing à entrega, em até 30 dias</h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-background/5 border border-background/10 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="font-bold text-background text-lg mb-1">{step.title}</h3>
              <p className="text-background/60 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
