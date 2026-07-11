import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { PillarsSection } from "@/components/landing/PillarsSection";
import { FeaturesStrip } from "@/components/landing/FeaturesStrip";
import { BehanceSection } from "@/components/landing/BehanceSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";
import { StickyCTA } from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pb-20 md:pb-0">
        <HeroSection />
        <AboutSection />
        <PillarsSection />
        <FeaturesStrip />
        <BehanceSection />
        <ProjectsSection />
        <VideoSection />
        <FooterSection />
      </main>
      <FloatingWhatsApp />
      <StickyCTA />
    </>
  );
};

export default Index;
