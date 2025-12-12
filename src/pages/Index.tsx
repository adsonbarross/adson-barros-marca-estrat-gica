import { HeroSection } from "@/components/landing/HeroSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { CTASection } from "@/components/landing/CTASection";
import { FooterSection } from "@/components/landing/FooterSection";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <HeroSection />
        <VideoSection />
        <AboutSection />
        <ProjectsSection />
        <CTASection />
        <FooterSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
