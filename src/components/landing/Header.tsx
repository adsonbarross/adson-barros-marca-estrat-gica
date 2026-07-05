import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAdson from "@/assets/logo-adson.png";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Vídeo", href: "#video" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-background/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Left nav (desktop) */}
        <nav className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-background/70 hover:text-orange transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Logo */}
        <a href="#" className="flex-shrink-0 md:flex-1 md:flex md:justify-center">
          <img src={logoAdson} alt="Adson Barros" className="h-5 sm:h-6 w-auto" />
        </a>

        {/* Right nav (desktop) */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-background/70 hover:text-orange transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="cta" size="sm">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Fale comigo
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-background p-2"
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-background/10 bg-foreground px-4 sm:px-6 py-6 flex flex-col gap-5"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-background/80"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="cta" size="lg" className="w-full mt-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Fale comigo
            </a>
          </Button>
        </motion.div>
      )}
    </header>
  );
}
