import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAdson from "@/assets/logo-adson.png";

const KIWIFY_LINK = "https://pay.kiwify.com.br/M2G61GL";

type Question = {
  pillar: string;
  question: string;
  options: string[];
};

const questions: Question[] = [
  {
    pillar: "Posicionamento",
    question: "Se um cliente parar 5 segundos no seu Instagram, ele entende na hora por que sua empresa é diferente das outras?",
    options: ["Sim, é nítido", "Ele até entende, mas demora", "Não, fica tudo meio parecido"],
  },
  {
    pillar: "Posicionamento",
    question: "Seus preços já foram chamados de \"caros\" por alguém que nem tinha entendido direito o que você entrega?",
    options: ["Raramente acontece", "De vez em quando", "Isso é quase toda semana"],
  },
  {
    pillar: "Posicionamento",
    question: "Sua marca parece maior e mais séria do que sua empresa realmente é hoje — ou parece menor?",
    options: ["Parece maior, isso me favorece", "Parece do tamanho real", "Parece menor, e isso me atrapalha"],
  },
  {
    pillar: "Captação",
    question: "Se você parasse de correr atrás de clientes hoje, sua empresa continuaria recebendo gente nova sozinha?",
    options: ["Sim, tenho canais que trazem sozinho", "Talvez, mas cairia bastante", "Não, pararia praticamente tudo"],
  },
  {
    pillar: "Captação",
    question: "Você sabe, com certeza, quanto custa pra sua empresa conquistar um cliente novo?",
    options: ["Sim, sei exatamente", "Tenho uma ideia", "Não faço a menor ideia"],
  },
  {
    pillar: "Captação",
    question: "Se um cliente em dúvida entrasse agora no seu Google Meu Negócio e nas suas redes sociais, o que ele encontraria?",
    options: ["Um perfil bem cuidado, que passa confiança", "Algo ativo, mas meio esquecido", "Nem saberia dizer se a empresa ainda está ativa"],
  },
  {
    pillar: "Vendas",
    question: "De cada 10 pessoas que pedem orçamento, quantas realmente fecham com você?",
    options: ["7 ou mais", "Entre 4 e 6", "3 ou menos, e nem sei bem o motivo"],
  },
  {
    pillar: "Vendas",
    question: "Quando um cliente some depois do orçamento, você sabe exatamente por quê — ou simplesmente perde ele?",
    options: ["Recupero a maioria", "Recupero às vezes", "Praticamente sempre perco, sem entender o motivo"],
  },
];

const TOTAL_STEPS = questions.length;

const Quiz = () => {
  const [step, setStep] = useState(0); // 0..TOTAL_STEPS-1 = questions, TOTAL_STEPS = result
  const [answers, setAnswers] = useState<(number | null)[]>(Array(TOTAL_STEPS).fill(null));

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
    <div className="min-h-screen bg-foreground flex flex-col">
      {/* Header */}
      <header className="w-full px-5 sm:px-8 pt-6 sm:pt-8 pb-4 flex flex-col items-center gap-5">
        <img
          src={logoAdson}
          alt="Adson Barros"
          width={757}
          height={89}
          className="h-4 sm:h-5 w-auto object-contain brightness-0 invert opacity-90"
        />

        {!isResult && (
          <div className="w-full max-w-md">
            <div className="h-1.5 w-full rounded-full bg-background/10 overflow-hidden">
              <motion.div
                className="h-full bg-orange rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
            <p className="text-background/40 text-[11px] tracking-widest uppercase mt-2 text-center">
              Pergunta {step + 1} de {TOTAL_STEPS}
            </p>
          </div>
        )}
      </header>

      {/* Body */}
      <main className="flex-1 flex items-center justify-center px-5 sm:px-8 pb-10">
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
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange mb-4 text-center">
                  {questions[step].pillar}
                </p>
                <h1 className="text-xl sm:text-2xl font-extrabold text-background leading-snug tracking-tight text-center mb-8">
                  {questions[step].question}
                </h1>

                <div className="flex flex-col gap-3">
                  {questions[step].options.map((option, i) => (
                    <button
                      key={option}
                      onClick={() => selectAnswer(i)}
                      className={`text-left rounded-2xl border px-5 py-4 text-sm sm:text-base transition-colors duration-200 ${
                        answers[step] === i
                          ? "border-orange bg-orange/10 text-background"
                          : "border-background/15 bg-background/5 text-background/85 hover:border-orange/50 hover:bg-background/10"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <button
                    onClick={goBack}
                    className="flex items-center gap-1.5 text-background/40 hover:text-background/70 text-xs tracking-widest uppercase mt-8 mx-auto transition-colors duration-200"
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
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange mb-4">
                  Seu diagnóstico está pronto
                </p>
                <div className="w-10 h-1 bg-orange rounded-full mx-auto mb-6" />

                <h1 className="text-2xl sm:text-3xl font-extrabold text-background leading-tight tracking-tight mb-5">
                  Existe um limite invisível travando o crescimento da sua empresa.
                </h1>
                <p className="text-background/65 text-sm sm:text-base leading-relaxed mb-8 max-w-sm mx-auto">
                  Descubra exatamente onde ele está nos 3 pilares do sucesso — Posicionamento, Captação e Vendas — por apenas <strong className="text-background">R$97</strong>.
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

                <p className="flex items-center justify-center gap-1.5 text-background/35 text-[11px] mt-4">
                  <Lock className="w-3 h-3" />
                  Pagamento seguro processado pela Kiwify
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Quiz;
