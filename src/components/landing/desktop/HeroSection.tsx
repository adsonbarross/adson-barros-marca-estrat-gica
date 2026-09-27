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
    <section className="relative bg-foreground px-10 pt-40 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-20 items-center">
        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 text-left"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-orange mb-6">
            Diagnóstico de Unblocking
          </p>

          <h1 className="text-5xl font-extrabold text-background leading-[1.15] tracking-tight mb-7">
            Sua empresa não tem um problema de vendas.<br />
            Tem um problema de <span className="text-orange">percepção</span>.
          </h1>

          <p className="text-background/65 text-lg max-w-md mb-10 leading-relaxed">
            Um diagnóstico estratégico que mostra, em minutos, onde sua empresa está travada nos 3 pilares que decidem se um negócio cresce: Posicionamento, Captação e Vendas.
          </p>

          <div className="flex items-center gap-6 mb-2">
            <div>
              <Button asChild variant="cta" size="xl">
                <Link to="/quiz">
                  <ClipboardCheck className="w-5 h-5" />
                  Fazer meu diagnóstico agora
                </Link>
              </Button>
              <p className="text-background/40 text-xs mt-2.5">
                Leva menos de 2 minutos. Sem compromisso.
              </p>
            </div>
          </div>

          <a
            href="#portfolio"
            className="inline-block mt-4 mb-12 text-sm tracking-widest uppercase text-background/60 hover:text-orange transition-colors duration-300 underline underline-offset-4"
          >
            Ver marcas que já passaram por esse processo
          </a>

          <div className="flex items-center gap-8 pt-8 border-t border-background/10">
            {proofs.map((proof) => (
              <span key={proof} className="text-background/45 text-sm">
                {proof}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-w-0 relative mx-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden"
        >
          <img
            src={adsonPhoto}
            alt="Adson Barros - Diagnóstico de Unblocking"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/5" />
        </motion.div>
      </div>
    </section>
  );
}
