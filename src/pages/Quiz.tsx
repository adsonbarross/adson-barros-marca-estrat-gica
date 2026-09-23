import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Lock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const KIWIFY_LINK = "https://pay.kiwify.com.br/M2G61GL";
const VIDEO_SRC = "/videos/diagnostico-video.mp4";
const VIDEO_POSTER = "/videos/diagnostico-video-poster.jpg";

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
      { text: "Seus preços já foram chamados de " },
      { text: "\"caros\"", style: "soft" },
      { text: " por alguém que " },
      { text: "nem tinha entendido direito", style: "strong" },
      { text: " o que você entrega?" },
    ],
    options: ["Raramente acontece", "De vez em quando", "Isso é quase toda semana"],
  },
  {
    pillar: "Posicionamento",
    parts: [
      { text: "Sua marca parece maior e mais séria do que sua empresa " },
      { text: "realmente é hoje", style: "soft" },
      { text: " — ou " },
      { text: "parece menor", style: "strong" },
      { text: "?" },
    ],
    options: ["Parece maior, isso me favorece", "Parece do tamanho real", "Parece menor, e isso me atrapalha"],
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

/** Locked-down local video player: no native controls, no seeking (rewind is
 *  fine, forward-seek is always snapped back), and a custom bar that
 *  visually races ahead of real elapsed time. */
function LockedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxPlayedRef = useRef(0);
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime > maxPlayedRef.current) {
        maxPlayedRef.current = video.currentTime;
      }
      const duration = video.duration || 1;
      const t = Math.min(1, video.currentTime / duration);
      // Ease-out curve: races ahead early, settles in at 100% right on time.
      const eased = 1 - Math.pow(1 - t, 1.6);
      setDisplayProgress(Math.min(100, eased * 100));
    };

    const handleSeeking = () => {
      // Only allow the currently-played point (or earlier) — never forward.
      if (video.currentTime > maxPlayedRef.current + 0.15) {
        video.currentTime = maxPlayedRef.current;
      }
    };

    const handleEnded = () => {
      setEnded(true);
      setDisplayProgress(100);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("seeking", handleSeeking);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("seeking", handleSeeking);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const handlePlay = () => {
    setStarted(true);
    videoRef.current?.play();
  };

  return (
    <div className="w-full mb-8">
      <div
        className="relative w-full aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10"
        onContextMenu={(e) => e.preventDefault()}
      >
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          poster={VIDEO_POSTER}
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Transparent shield: blocks any interaction with the video itself */}
        <div className="absolute inset-0" />

        {!started && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-colors duration-300"
            aria-label="Assistir ao vídeo"
          >
            <span className="w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-lg">
              <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
            </span>
          </button>
        )}
      </div>

      {/* Custom progress bar — no scrubbing, just visual feedback */}
      <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden mt-3">
        <div
          className="h-full bg-orange rounded-full"
          style={{ width: `${displayProgress}%`, transition: "width 0.2s linear" }}
        />
      </div>
      <p className="text-white/35 text-[11px] font-medium tracking-widest uppercase mt-2 text-center">
        {ended ? "Vídeo concluído" : started ? "Assista até o final" : "Toque para assistir"}
      </p>
    </div>
  );
}

const Quiz = () => {
  const [step, setStep] = useState(0); // 0..TOTAL_STEPS-1 = questions, TOTAL_STEPS = result
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_STEPS).fill(null));

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

  const isResult = step === TOTAL_STEPS;
  const progress = Math.min(step, TOTAL_STEPS) / TOTAL_STEPS * 100;

  const selectAnswer = (optionIndex: number) => {
    const next = [...answers];
    next[step] = optionIndex;
    setAnswers(next);

    setTimeout(() => {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS));
    }, 250);
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
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

      {/* Body */}
      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 pb-24">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {!isResult ? (
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
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-orange mb-4">
                  Seu diagnóstico está pronto
                </p>
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

                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                  Faça um{" "}
                  <span className="font-semibold text-white underline decoration-orange/50 decoration-2 underline-offset-4">
                    diagnóstico detalhado
                  </span>{" "}
                  e receba um{" "}
                  <span className="font-semibold text-white underline decoration-orange/50 decoration-2 underline-offset-4">
                    plano de ação
                  </span>{" "}
                  para desbloquear os 3 pilares que trarão sucesso para o seu negócio — Posicionamento, Captação e Vendas — por apenas{" "}
                  <span className="font-extrabold text-orange">R$97</span>.
                </p>

                <Button
                  asChild
                  variant="cta"
                  size="xl"
                  className="w-full whitespace-normal text-base h-auto py-4 px-6"
                >
                  <a href={KIWIFY_LINK} target="_blank" rel="noopener noreferrer">
                    Destravar agora
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
      {!isResult && (
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
