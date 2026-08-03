import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAdson from "@/assets/logo-adson.png";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const navLinks = [
  { label: "Vantagens", href: "#incluso" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-xs mx-auto h-16 px-6 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
        <a href="#" className="flex-shrink-0">
          <img
            src={logoAdson}
            alt="Adson Barros"
            width={757}
            height={89}
            className="h-5 w-auto object-contain brightness-0 invert"
          />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white p-1.5 -mr-1.5 hover:text-orange transition-colors duration-300"
          aria-label="Abrir menu"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="max-w-xs mx-auto mt-2 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.25)] px-6 py-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase text-white/90 hover:text-orange transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="cta" size="lg" className="w-full mt-1">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" fill="currentColor" />
                Quero a minha
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
