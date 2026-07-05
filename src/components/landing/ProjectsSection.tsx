import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

import logoRicciCoach from "@/assets/logos/ricci-coach.png";
import logoUnderground from "@/assets/logos/underground.png";
import logoQuave from "@/assets/logos/quave.png";
import logoScisy from "@/assets/logos/scisy.png";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const projects = [
  { id: 1, title: "Ricci Coach", logo: logoRicciCoach },
  { id: 2, title: "Underground", logo: logoUnderground },
  { id: 3, title: "Quave", logo: logoQuave },
  { id: 5, title: "Scisy", logo: logoScisy },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-16 md:py-24 bg-foreground px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-10 md:mb-14"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background mb-3">
              Projetos
            </h2>
            <p className="text-background/60 max-w-md text-sm sm:text-base">
              Marcas que buscavam clareza e posicionamento estratégico.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-xs tracking-widest uppercase text-background/70 hover:text-orange transition-colors duration-300 whitespace-nowrap underline underline-offset-4"
          >
            Quero um projeto assim
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group"
            >
              <div className="aspect-square bg-background/5 rounded-xl overflow-hidden border border-background/10 relative cursor-pointer transition-all duration-300 hover:border-orange/50 flex items-center justify-center p-6 sm:p-8">
                <img
                  src={project.logo}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-all duration-300" />
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-background/20 group-hover:border-orange transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-background/20 group-hover:border-orange transition-colors duration-300" />
              </div>
              <p className="mt-2 text-center text-background/60 text-xs sm:text-sm">
                {project.title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16 sm:hidden"
        >
          <Button asChild variant="cta" size="lg">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Quero um projeto assim
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
