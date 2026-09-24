import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

declare global {
  interface Window {
    fbq: any;
  }
}

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const Obrigado = () => {
  useEffect(() => {
    document.title = "Compra confirmada / Diagnóstico de Unblocking";

    if (typeof window.fbq === "function") {
      window.fbq("track", "Purchase", { value: 97.0, currency: "BRL" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-orange/10 border border-orange/30 flex items-center justify-center mb-6">
        <CheckCircle2 className="w-8 h-8 text-orange" />
      </div>

      <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-orange mb-4">
        Pagamento confirmado
      </p>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight mb-4 max-w-md">
        Seu Diagnóstico de Unblocking está garantido.
      </h1>

      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
        Agora é só preencher o formulário que vamos te enviar e falar comigo no WhatsApp pra darmos o próximo passo.
      </p>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-orange hover:bg-orange-hover text-primary-foreground font-semibold tracking-wide rounded-full px-6 py-3.5 text-sm sm:text-base transition-colors duration-300"
      >
        Falar com Adson no WhatsApp
      </a>
    </div>
  );
};

export default Obrigado;
