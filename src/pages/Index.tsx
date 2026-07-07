import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { FeaturesStrip } from "@/components/landing/FeaturesStrip";
import { BehanceSection } from "@/components/landing/BehanceSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PillarsSection />
        <FeaturesStrip />
        <BehanceSection />
        <ProjectsSection />
        <AboutSection />
        <VideoSection />
        <FooterSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
