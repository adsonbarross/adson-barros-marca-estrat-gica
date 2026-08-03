import { motion } from "framer-motion";
import { ExternalLink, Eye, Heart } from "lucide-react";

const BEHANCE_LINK = "https://www.behance.net/adsonbarrosdesign";

const behanceProjects = [
  { title: "Shalom Cell", views: "8,7 mil", likes: "1,2 mil", image: "https://mir-s3-cdn-cf.behance.net/projects/404/47e792164608779.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg", link: "https://www.behance.net/gallery/164608779/Shalom-Cell" },
  { title: "Rei do Brilho", views: "6,7 mil", likes: "930", image: "https://mir-s3-cdn-cf.behance.net/projects/404/4fcd77175348157.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg", link: "https://www.behance.net/gallery/175348157/Rei-do-Brilho" },
  { title: "Quave", views: "6,1 mil", likes: "763", image: "https://mir-s3-cdn-cf.behance.net/projects/404/270e39204086453.Y3JvcCwxNzg5LDE0MDAsMjc5LDA.jpg", link: "https://www.behance.net/gallery/204086453/Quave" },
  { title: "Maria Izabelly", views: "5,4 mil", likes: "774", image: "https://mir-s3-cdn-cf.behance.net/projects/404/8a5d51178115929.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg", link: "https://www.behance.net/gallery/178115929/Maria-Izabelly" },
  { title: "NobleClick", views: "5,2 mil", likes: "733", image: "https://mir-s3-cdn-cf.behance.net/projects/404/d0dc53206380177.Y3JvcCwyMzI5LDE4MjIsNDU1LDA.jpg", link: "https://www.behance.net/gallery/206380177/NobleClick" },
  { title: "Adson Barros Design", views: "5,9 mil", likes: "769", image: "https://mir-s3-cdn-cf.behance.net/projects/404/262e85182418511.Y3JvcCwxNjg3LDEzMjAsMTE2LDA.jpg", link: "https://www.behance.net/gallery/182418511/Adson-Barros-Design" },
];

export function BehanceSection() {
  return (
    <section id="portfolio" className="bg-foreground py-14 px-5 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-2">Reconhecido no Behance</p>
          <div className="w-10 h-1 bg-orange rounded-full mx-auto mb-4" />
          <h2 className="text-2xl font-extrabold text-background leading-tight tracking-tight mb-4">Identidades que já viraram referência</h2>
          <p className="text-background/60 text-sm">
            Mais de <strong className="text-background">700 seguidores</strong>, <strong className="text-background">39,5 mil visualizações</strong> e <strong className="text-background">5,4 mil apreciações</strong> no Behance.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 mb-8">
          {behanceProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative block aspect-[16/10] rounded-xl overflow-hidden border border-background/10"
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <h3 className="font-bold text-white text-base mb-1.5">{project.title}</h3>
                <div className="flex items-center gap-3 text-white/70 text-xs">
                  <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" />{project.views}</span>
                  <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" />{project.likes}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={BEHANCE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-background hover:text-orange transition-colors duration-300 underline underline-offset-4"
          >
            Ver portfólio completo no Behance
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
