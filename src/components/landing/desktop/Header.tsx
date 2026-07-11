import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAdson from "@/assets/logo-adson.png";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const navLinks = [
  { label: "Incluso", href: "#incluso" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-foreground/95 backdrop-blur-sm border-b border-background/10">
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex-shrink-0">
          <img src={logoAdson} alt="Adson Barros" width={757} height={89} className="h-7 w-auto object-contain" />
        </a>

        <nav className="flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-background/70 hover:text-orange transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button asChild variant="cta" size="sm">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" fill="currentColor" />
            Quero a minha
          </a>
        </Button>
      </div>
    </header>
  );
}
