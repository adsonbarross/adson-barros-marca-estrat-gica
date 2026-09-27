import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";
import adsonPhoto from "@/assets/adson-photo-about.jpg";

const proofs = [
  "120+ marcas desenvolvidas",
  "6 anos posicionando empresas",
  "Diversos segmentos atendidos",
];

export function HeroSection() {
  return (
    <section className="bg-foreground">
      {/* Banner photo */}
      <div className="relative w-full h-[58vh] min-h-[400px] overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={adsonPhoto}
          alt="Adson Barros - Diagnóstico de Unblocking"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/0 to-black/10" />
      </div>

      {/* Headline + CTA */}
      <div className="px-6 -mt-10 pt-0 pb-10 text-center max-w-xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-semibold tracking-[0.3em] uppercase text-orange mb-5"
        >
          Diagnóstico de Unblocking
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-extrabold text-background leading-[1.2] tracking-tight mb-4"
        >
          Sua empresa não tem um problema de vendas.<br />
          Tem um problema de <span className="text-orange">percepção</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-background/65 text-sm mb-8 leading-relaxed"
        >
          Um diagnóstico estratégico que mostra, em minutos, onde sua empresa está travada nos 3 pilares que decidem se um negócio cresce: Posicionamento, Captação e Vendas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            asChild
            variant="cta"
            size="lg"
            className="w-full whitespace-normal text-sm h-auto py-3.5 px-5"
          >
            <Link to="/quiz">
              <ClipboardCheck className="w-4 h-4 shrink-0" />
              Fazer meu diagnóstico agora
            </Link>
          </Button>
          <p className="text-background/40 text-[11px] mt-2.5">
            Leva menos de 2 minutos. Sem compromisso.
          </p>

          <a
            href="#portfolio"
            className="inline-block mt-5 text-xs tracking-widest uppercase text-background/60 hover:text-orange transition-colors duration-300 underline underline-offset-4"
          >
            Ver marcas que já passaram por esse processo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-1.5 mt-10 pt-6 border-t border-background/10"
        >
          {proofs.map((proof) => (
            <span key={proof} className="text-background/45 text-xs">
              {proof}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
