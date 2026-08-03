import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, MessageCircle } from "lucide-react";
import { TikTokIcon } from "@/components/landing/icons/TikTokIcon";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const socials = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Adsonbarrosmarca" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/adson.barros/" },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@adsonbarros" },
  { icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_LINK },
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
          <h2 className="text-5xl font-extrabold text-background leading-[1.1] tracking-tight mb-6">Vamos criar sua marca?</h2>
          <p className="text-background/70 text-lg mb-8 max-w-md">
            Me chama no WhatsApp ou acompanha meu trabalho nas redes — e assista ao vídeo pra entender como eu penso identidade visual.
          </p>

          <Button asChild variant="cta" size="xl" className="mb-10">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" fill="currentColor" />
              Quero minha identidade visual
            </a>
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
            src="https://www.youtube.com/embed/pYhuVCI-0TU"
            title="Adson Barros - Identidade Visual"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </div>
    </footer>
  );
}
