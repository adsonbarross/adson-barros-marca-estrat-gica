import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Lock, Loader2, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwYfNT3NEPoJSuWqZWZFrmB_NSSN8bVQ7QX36fTAFupPvQdX6ZSOtPX_6MXmA6X7dc1/exec";

const KIWIFY_LINK = "https://pay.kiwify.com.br/M2G61GL";
const VIDEO_ID = "5hoOcKJg9zI";

declare global {
  interface Window {
    fbq: any;
  }
}

type Segment = { text: string; style?: "soft" | "strong" };
type Question = {
  pillar: string;
  parts: Segment[];
  options: string[];
};

const questions: Question[] = [
  {
    pillar: "Posicionamento",
    parts: [
      { text: "Alguém já disse que seu preço é " },
      { text: "\"caro\"", style: "soft" },
      { text: " sem nem entender direito " },
      { text: "o que você realmente entrega", style: "strong" },
      { text: "?" },
    ],
    options: ["Raramente acontece", "De vez em quando", "Isso é quase toda semana"],
  },
  {
    pillar: "Captação",
    parts: [
      { text: "Se você parasse de correr atrás de clientes hoje, " },
      { text: "sua empresa continuaria recebendo gente nova", style: "soft" },
      { text: " " },
      { text: "sozinha", style: "strong" },
      { text: "?" },
    ],
    options: ["Sim, tenho canais que trazem sozinho", "Talvez, mas cairia bastante", "Não, pararia praticamente tudo"],
  },
  {
    pillar: "Captação",
    parts: [
      { text: "Você sabe, com certeza, " },
      { text: "quanto custa", style: "strong" },
      { text: " pra sua empresa " },
      { text: "conquistar um cliente novo", style: "soft" },
      { text: "?" },
    ],
    options: ["Sim, sei exatamente", "Tenho uma ideia", "Não faço a menor ideia"],
  },
  {
    pillar: "Vendas",
    parts: [
      { text: "De cada 10 pessoas que pedem orçamento, " },
      { text: "quantas realmente fecham", style: "strong" },
      { text: " " },
      { text: "com você", style: "soft" },
      { text: "?" },
    ],
    options: ["7 ou mais", "Entre 4 e 6", "3 ou menos, e nem sei bem o motivo"],
  },
  {
    pillar: "Vendas",
    parts: [
      { text: "Quando um cliente some depois do orçamento, " },
      { text: "você sabe exatamente por quê", style: "soft" },
      { text: " — ou " },
      { text: "simplesmente perde ele", style: "strong" },
      { text: "?" },
    ],
    options: ["Recupero a maioria", "Recupero às vezes", "Praticamente sempre perco, sem entender o motivo"],
  },
];

const TOTAL_STEPS = questions.length;

function RenderParts({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((part, i) => {
        if (part.style === "strong") {
          return (
            <span key={i} className="font-extrabold text-orange">
              {part.text}
            </span>
          );
        }
        if (part.style === "soft") {
          return (
            <span
              key={i}
              className="font-semibold text-white underline decoration-orange/50 decoration-2 underline-offset-4"
            >
              {part.text}
            </span>
          );
        }
        return (
          <span key={i} className="font-normal text-white/60">
            {part.text}
          </span>
        );
      })}
    </>
  );
}

/** Plain YouTube embed — only YouTube's own native controls (play/pause,
 *  volume, seek, fullscreen). No custom overlay or UI from the site. */
function LockedVideo() {
  return (
    <div className="w-full mb-8">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10">
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
          title="Diagnóstico de Unblocking"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}

const Quiz = () => {
  const [step, setStep] = useState(0); // 0..TOTAL_STEPS-1 = questions, TOTAL_STEPS = contact form, TOTAL_STEPS+1 = result
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_STEPS).fill(null));
  const [contact, setContact] = useState({ name: "", phone: "", segment: "" });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Adson Barros / Diagnóstico de Unblocking";

    const iconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    const previousIcon = iconLink?.href;
    if (iconLink) {
      iconLink.href = "/favicon-quiz.png";
    }

    return () => {
      document.title = previousTitle;
      if (iconLink && previousIcon) {
        iconLink.href = previousIcon;
      }
    };
  }, []);

  const isCapture = step === TOTAL_STEPS;
  const isVideo = step === TOTAL_STEPS + 1;
  const isDeliverables = step === TOTAL_STEPS + 2;
  const progress = Math.min(step, TOTAL_STEPS) / TOTAL_STEPS * 100;

  const selectAnswer = (optionIndex: number) => {
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);

    setTimeout(() => {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS + 1));
    }, 250);
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  const contactValid = contact.name.trim() && contact.phone.trim() && contact.segment.trim();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValid || submitting) return;
    setSubmitting(true);

    const answersSummary = questions.map((q, i) => ({
      pillar: q.pillar,
      question: q.parts.map((p) => p.text).join(""),
      answer: answers[i] !== null ? q.options[answers[i] as number] : null,
    }));

    try {
      // Apps Script web apps don't return proper CORS headers for reading the
      // response, so we fire-and-forget with no-cors. The row still gets
      // appended to the sheet; we just can't read a confirmation back.
      await fetch(SHEET_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name: contact.name.trim(),
          phone: contact.phone.trim(),
          segment: contact.segment.trim(),
          answers: answersSummary,
        }),
      });
    } catch (err) {
      console.error("Failed to save lead", err);
    } finally {
      setSubmitting(false);
      setStep(TOTAL_STEPS + 1);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      {!isVideo && !isCapture && !isDeliverables && (
        <header className="w-full px-5 sm:px-8 pt-8 sm:pt-10 pb-3 flex justify-center">
          <div className="relative inline-block pr-6 pb-4 sm:pr-10 sm:pb-6">
            <h2 className="font-extrabold uppercase tracking-tight leading-[0.85] text-white text-2xl sm:text-4xl">
              <span className="block">Diagnóstico</span>
              <span className="block pl-6 sm:pl-10">de Unblocking</span>
              <span className="block">2026©.</span>
            </h2>

            {/* Decorative layered squares */}
            <div className="absolute right-0 bottom-0 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none" aria-hidden="true">
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-orange/15 rounded-sm" />
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-orange/30 rounded-sm" />
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-orange/55 rounded-sm" />
              <div className="absolute inset-0 bg-orange/85 rounded-sm" />
            </div>
          </div>
        </header>
      )}

      {/* Body */}
      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 pb-24">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {!isCapture && !isVideo && !isDeliverables ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-orange mb-4 text-center">
                  {questions[step].pillar}
                </p>
                <h1 className="text-xl sm:text-2xl leading-snug tracking-tight text-center mb-8">
                  <RenderParts parts={questions[step].parts} />
                </h1>

                <div className="flex flex-col gap-3">
                  {questions[step].options.map((option, i) => (
                    <button
                      key={option}
                      onClick={() => selectAnswer(i)}
                      className={`text-left rounded-2xl border px-5 py-4 text-sm sm:text-base font-medium transition-colors duration-200 ${
                        answers[step] === i
                          ? "border-orange bg-orange/10 text-white"
                          : "border-white/15 bg-white/5 text-white/80 hover:border-orange/50 hover:bg-white/10"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-medium tracking-widest uppercase mt-8 mx-auto transition-colors duration-200"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar
                  </button>
                )}
              </motion.div>
            ) : isCapture ? (
              <motion.div
                key="capture"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-orange mb-4 text-center">
                  Quase lá
                </p>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-snug tracking-tight text-center mb-2">
                  Pra onde eu mando seu diagnóstico?
                </h1>
                <p className="text-white/50 text-sm text-center mb-8">
                  Preenche rapidinho pra eu te chamar no WhatsApp com os próximos passos.
                </p>

                <form onSubmit={handleContactSubmit} className="flex flex-col gap-3">
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={contact.name}
                    onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                    required
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/40 h-14 rounded-2xl focus:border-orange focus:ring-orange"
                  />
                  <Input
                    type="tel"
                    placeholder="WhatsApp (com DDD)"
                    value={contact.phone}
                    onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                    required
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/40 h-14 rounded-2xl focus:border-orange focus:ring-orange"
                  />
                  <Input
                    type="text"
                    placeholder="Segmento da sua empresa"
                    value={contact.segment}
                    onChange={(e) => setContact((c) => ({ ...c, segment: e.target.value }))}
                    required
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/40 h-14 rounded-2xl focus:border-orange focus:ring-orange"
                  />

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    disabled={!contactValid || submitting}
                    className="w-full whitespace-normal text-base h-auto py-4 px-6 mt-2"
                  >
                    {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    {submitting ? "Enviando..." : "Ver meu resultado"}
                  </Button>
                </form>

                <button
                  onClick={goBack}
                  className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-medium tracking-widest uppercase mt-8 mx-auto transition-colors duration-200"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Voltar
                </button>
              </motion.div>
            ) : isVideo ? (
              <motion.div
                key="video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-10 h-1 bg-orange rounded-full mx-auto mb-6" />

                <h1 className="text-2xl sm:text-3xl leading-tight tracking-tight mb-6">
                  <span className="font-semibold text-white underline decoration-orange/50 decoration-2 underline-offset-4">
                    Existe um limite invisível
                  </span>
                  <span className="font-normal text-white/60"> </span>
                  <span className="font-extrabold text-orange">travando o crescimento</span>
                  <span className="font-normal text-white/60"> da sua empresa.</span>
                </h1>

                <LockedVideo />

                <Button
                  onClick={() => setStep(TOTAL_STEPS + 2)}
                  variant="cta"
                  size="xl"
                  className="w-full whitespace-normal text-base h-auto py-4 px-6"
                >
                  Ver o que você recebe
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="deliverables"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-orange mb-3">
                  Diagnóstico de Unblocking
                </p>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight mb-8">
                  O que você recebe.
                </h1>

                <div className="text-left mb-7">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-3">Entregáveis</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "Análise individual (nada de conteúdo gravado)",
                      "Avaliação dos pilares de Posicionamento, Captação e Vendas",
                      "Identificação dos principais gargalos dentro dos 3 pilares",
                      "PDF com a pontuação atual da sua empresa nos 3 pilares",
                      "Reunião individual para apresentação",
                      "Plano de ação objetivo e validado",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <Check className="w-4 h-4 text-orange shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-left mb-8">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-3">Vantagens</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      "Identificar problemas que só olhos técnicos enxergam",
                      "Ter clareza do que precisa fazer para evoluir",
                      "Evitar gastos altos em \"soluções\" desnecessárias",
                      "Validar se o seu negócio está 100% alinhado",
                      "Saber o que resolver primeiro, sem perder tempo com o que pode esperar",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <Star className="w-4 h-4 text-orange shrink-0 mt-0.5" fill="currentColor" />
                        <span className="text-white/80 text-sm leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  asChild
                  variant="cta"
                  size="xl"
                  className="w-full whitespace-normal text-base h-auto py-4 px-6"
                >
                  <a
                    href={KIWIFY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window.fbq === "function") {
                        window.fbq("track", "InitiateCheckout");
                      }
                    }}
                  >
                    Desbloquear diagnóstico
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>

                <p className="flex items-center justify-center gap-1.5 text-white/35 text-[11px] font-medium mt-4">
                  <Lock className="w-3 h-3" />
                  Pagamento seguro processado pela Kiwify
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Progress bar fixed at bottom */}
      {!isVideo && !isCapture && !isDeliverables && (
        <div
          className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm px-5 sm:px-8 pt-3"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="w-full max-w-md mx-auto">
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-orange rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <p className="text-white/40 text-[11px] font-medium tracking-widest uppercase mt-2 text-center">
              Pergunta {step + 1} de {TOTAL_STEPS}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
