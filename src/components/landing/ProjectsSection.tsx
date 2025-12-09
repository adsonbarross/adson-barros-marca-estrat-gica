import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://api.whatsapp.com/message/6TDNDNOCGOXII1?autoload=1&app_absent=0&utm_source=ig";

const projects = [
  { id: 1, title: "Projeto 01" },
  { id: 2, title: "Projeto 02" },
  { id: 3, title: "Projeto 03" },
  { id: 4, title: "Projeto 04" },
  { id: 5, title: "Projeto 05" },
  { id: 6, title: "Projeto 06" },
];

export function ProjectsSection() {
  return (
    <section className="min-h-screen flex items-center bg-foreground px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
            Projetos
          </h2>
          <p className="text-background/60 max-w-xl mx-auto">
            Conheça alguns dos projetos que desenvolvi para marcas que buscavam clareza e posicionamento estratégico.
          </p>
          <div className="w-16 h-0.5 bg-orange mx-auto mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-square bg-background/5 rounded-xl overflow-hidden border border-background/10 relative cursor-pointer transition-all duration-300 hover:border-orange/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-background/30 font-bold text-lg group-hover:text-orange transition-colors duration-300">
                    {project.title}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-all duration-300" />
                
                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-background/20 group-hover:border-orange transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-background/20 group-hover:border-orange transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            variant="cta"
            size="lg"
          >
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
