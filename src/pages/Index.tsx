import { HeroSection } from "@/components/landing/HeroSection";
import { VideoSection } from "@/components/landing/VideoSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { CTASection } from "@/components/landing/CTASection";
import { FooterSection } from "@/components/landing/FooterSection";
import { Header } from "@/components/landing/Header";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden pt-14 sm:pt-16">
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
