import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, ClipboardCheck } from "lucide-react";
import { TikTokIcon } from "@/components/landing/icons/TikTokIcon";

const socials = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Adsonbarrosmarca" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/adson.barros/" },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@adsonbarros" },
];

export function FooterSection() {
  return (
    <footer id="contato" className="bg-foreground px-10 py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-left"
        >
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-orange mb-3">Você precisa saber disso</p>
          <div className="w-12 h-1 bg-orange rounded-full mb-5" />
          <h2 className="text-5xl font-extrabold text-background leading-[1.1] tracking-tight mb-6">Vamos fazer seu diagnóstico?</h2>
          <p className="text-background/70 text-lg mb-8 max-w-md">
            Assista ao vídeo ao lado pra entender como funciona, acompanhe meu trabalho nas redes, e comece seu diagnóstico quando estiver pronto.
          </p>

          <Button asChild variant="cta" size="xl" className="mb-10">
            <Link to="/quiz">
              <ClipboardCheck className="w-5 h-5" />
              Fazer meu diagnóstico agora
            </Link>
          </Button>


          <div className="flex items-center gap-4 mb-10">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/70 hover:text-orange hover:border-orange transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="w-16 h-0.5 bg-brown/30 mb-8" />

          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Adson Barros. Todos os direitos reservados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative aspect-video rounded-xl overflow-hidden border border-background/10"
        >
          <iframe
            src="https://www.youtube.com/embed/5hoOcKJg9zI"
            title="Adson Barros - Diagnóstico de Unblocking"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </footer>
  );
}
