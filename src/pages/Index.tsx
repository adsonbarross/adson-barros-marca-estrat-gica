import { useIsMobile } from "@/hooks/use-mobile";

import { Header as MobileHeader } from "@/components/landing/mobile/Header";
import { HeroSection as MobileHero } from "@/components/landing/mobile/HeroSection";
import { AboutSection as MobileAbout } from "@/components/landing/mobile/AboutSection";
import { PillarsSection as MobilePillars } from "@/components/landing/mobile/PillarsSection";
import { FeaturesStrip as MobileFeatures } from "@/components/landing/mobile/FeaturesStrip";
import { BehanceSection as MobileBehance } from "@/components/landing/mobile/BehanceSection";
import { FooterSection as MobileFooter } from "@/components/landing/mobile/FooterSection";
import { StickyCTA } from "@/components/landing/mobile/StickyCTA";

import { Header as DesktopHeader } from "@/components/landing/desktop/Header";
import { HeroSection as DesktopHero } from "@/components/landing/desktop/HeroSection";
import { AboutSection as DesktopAbout } from "@/components/landing/desktop/AboutSection";
import { PillarsSection as DesktopPillars } from "@/components/landing/desktop/PillarsSection";
import { FeaturesStrip as DesktopFeatures } from "@/components/landing/desktop/FeaturesStrip";
import { BehanceSection as DesktopBehance } from "@/components/landing/desktop/BehanceSection";
import { FooterSection as DesktopFooter } from "@/components/landing/desktop/FooterSection";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

const MobileLayout = () => (
  <>
    <MobileHeader />
    <main className="overflow-x-hidden pb-20">
      <MobileHero />
      <MobileAbout />
      <MobilePillars />
      <MobileFeatures />
      <MobileBehance />
      <MobileFooter />
    </main>
    <StickyCTA />
  </>
);

const DesktopLayout = () => (
  <>
    <DesktopHeader />
    <main className="overflow-x-hidden">
      <DesktopHero />
      <DesktopAbout />
      <DesktopPillars />
      <DesktopFeatures />
      <DesktopBehance />
      <DesktopFooter />
    </main>
    <FloatingWhatsApp />
  </>
);

const Index = () => {
  const isMobile = useIsMobile();

  if (isMobile === undefined) return null;

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Index;
