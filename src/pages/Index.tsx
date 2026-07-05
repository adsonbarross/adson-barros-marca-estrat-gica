import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { FeaturesStrip } from "@/components/landing/FeaturesStrip";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
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
        <AboutSection />
        <FeaturesStrip />
        <ProjectsSection />
        <VideoSection />
        <FooterSection />
      </main>
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
