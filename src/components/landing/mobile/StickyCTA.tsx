import { ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-foreground border-t border-background/10 px-4 py-3 flex items-center justify-between gap-3"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="min-w-0">
        <p className="text-background font-bold text-sm truncate">Diagnóstico de Unblocking</p>
        <p className="text-background/50 text-xs truncate">Descubra seus 3 pilares</p>
      </div>
      <Link
        to="/quiz"
        className="flex-shrink-0 flex items-center gap-2 bg-orange hover:bg-orange-hover text-primary-foreground font-semibold tracking-wide rounded-lg px-4 py-2.5 text-sm transition-colors duration-300"
      >
        <ClipboardCheck className="w-4 h-4" />
        Fazer diagnóstico
      </Link>
    </motion.div>
  );
}
