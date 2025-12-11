import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoreVertical, X } from "lucide-react";
import logoAdson from "@/assets/logo-adson.png";

const NAV_ITEMS = [
  { label: "Sobre mim", href: "#about" },
  { label: "Meu método", href: "#video" },
  { label: "Contato", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={logoAdson} 
            alt="Adson Barros" 
            className="h-8 sm:h-10 w-auto"
          />
        </a>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-orange transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Menu Button - Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:text-orange transition-colors"
          aria-label="Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <MoreVertical className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border/20 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-orange transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
