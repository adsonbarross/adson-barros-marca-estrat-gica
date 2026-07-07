import { motion } from "framer-motion";
import { ExternalLink, Eye, Heart } from "lucide-react";

const BEHANCE_LINK = "https://www.behance.net/adsonbarrosdesign";

const behanceProjects = [
  { title: "Shalom Cell", views: "8,7 mil", likes: "1,2 mil" },
  { title: "Rei do Brilho", views: "6,7 mil", likes: "930" },
  { title: "Quave", views: "6,1 mil", likes: "763" },
  { title: "Maria Izabelly", views: "5,4 mil", likes: "774" },
  { title: "NobleClick", views: "5,2 mil", likes: "733" },
];

export function BehanceSection() {
  return (
    <section id="portfolio" className="bg-background py-16 md:py-24 px-4 sm:px-6 border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-orange mb-2">
            Reconhecido no Behance
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Identidades que já viraram referência
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Mais de <strong className="text-foreground">700 seguidores</strong>, <strong className="text-foreground">39,5 mil visualizações</strong> e <strong className="text-foreground">5,4 mil apreciações</strong> em projetos de identidade visual publicados no Behance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {behanceProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={BEHANCE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group block rounded-xl border border-border p-4 sm:p-5 hover:border-orange/50 transition-colors duration-300"
            >
              <h3 className="font-bold text-foreground text-sm sm:text-base mb-3 group-hover:text-orange transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-foreground/50 text-xs">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  {project.views}
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5" />
                  {project.likes}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={BEHANCE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-foreground hover:text-orange transition-colors duration-300 underline underline-offset-4"
          >
            Ver portfólio completo no Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
