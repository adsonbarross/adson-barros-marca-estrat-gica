import { MessageCircle } from "lucide-react";
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
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-3xl mx-auto h-16 px-6 flex items-center justify-between rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.25)]">
        <a href="#" className="flex-shrink-0">
          <img
            src={logoAdson}
            alt="Adson Barros"
            width={757}
            height={89}
            className="h-5 w-auto object-contain brightness-0 invert"
          />
        </a>

        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-white/80 hover:text-orange transition-colors duration-300"
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
