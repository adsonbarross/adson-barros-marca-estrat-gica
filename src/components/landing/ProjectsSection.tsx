import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

import logoRicciCoach from "@/assets/logos/ricci-coach.png";
import logoUnderground from "@/assets/logos/underground.png";
import logoQuave from "@/assets/logos/quave.png";
import logoSolar from "@/assets/logos/solar.png";
import logoScisy from "@/assets/logos/scisy.png";

const WHATSAPP_LINK = "https://wa.me/message/6TDNDNOCGOXII1";

const projects = [
  { id: 1, title: "Ricci Coach", logo: logoRicciCoach },
  { id: 2, title: "Underground", logo: logoUnderground },
  { id: 3, title: "Quave", logo: logoQuave },
  { id: 4, title: "Solar", logo: logoSolar },
  { id: 5, title: "Scisy", logo: logoScisy },
];

export function ProjectsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 md:py-24 md:min-h-screen md:flex md:items-center bg-foreground px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-background mb-4">
            Projetos
          </h2>
          <p className="text-background/60 max-w-xl mx-auto text-sm sm:text-base px-4">
            Conheça alguns dos projetos que desenvolvi para marcas que buscavam clareza e posicionamento estratégico.
          </p>
          <div className="w-16 h-0.5 bg-orange mx-auto mt-6" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem 
                  key={project.id} 
                  className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group">
                    <div className="aspect-square bg-background/5 rounded-xl overflow-hidden border border-background/10 relative cursor-pointer transition-all duration-300 hover:border-orange/50 flex items-center justify-center p-8">
                      <img 
                        src={project.logo} 
                        alt={project.title}
                        className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-all duration-300" />
                      
                      {/* Corner accents */}
                      <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-background/20 group-hover:border-orange transition-colors duration-300" />
                      <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-background/20 group-hover:border-orange transition-colors duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel indicators and controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-orange hover:border-orange transition-colors duration-300"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? "bg-orange w-6" 
                      : "bg-background/30 hover:bg-background/50"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:text-orange hover:border-orange transition-colors duration-300"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            asChild
            variant="cta"
            size="lg"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Quero um projeto assim
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
