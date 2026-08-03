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
    <footer id="contato" className="bg-foreground px-5 py-14 scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-2">Você precisa saber disso</p>
          <div className="w-10 h-1 bg-orange rounded-full mx-auto mb-3" />
          <h2 className="text-2xl font-extrabold text-background tracking-tight">Vamos criar sua marca?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full relative aspect-video rounded-xl overflow-hidden border border-background/10 mb-8"
        >
          <iframe
            src="https://www.youtube.com/embed/pYhuVCI-0TU"
            title="Adson Barros - Identidade Visual"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full mb-8"
        >
          <Button
            asChild
            variant="cta"
            size="xl"
            className="w-full whitespace-normal text-base h-auto py-3.5 px-6"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 shrink-0" fill="currentColor" />
              Quero minha identidade visual
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
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
        </motion.div>

        <div className="w-16 h-0.5 bg-brown/30 mb-6" />

        <p className="text-background/40 text-xs">
          © {new Date().getFullYear()} Adson Barros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
