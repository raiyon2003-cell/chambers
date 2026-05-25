import { BackToTop } from "@/components/BackToTop";
import { PagePreloader } from "@/components/PagePreloader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FormerPresidents } from "@/components/sections/FormerPresidents";
import { GrowthBanner } from "@/components/sections/GrowthBanner";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { MousSection } from "@/components/sections/MousSection";
import { PartnersCarousel } from "@/components/sections/PartnersCarousel";
import { ServiceFlipGrid } from "@/components/sections/ServiceFlipGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { WelcomeLeadership } from "@/components/sections/WelcomeLeadership";

export default function Home() {
  return (
    <>
      <PagePreloader />
      <SiteHeader />
      <main id="page-content" className="flex-1">
        <HeroSlider />
        <WelcomeLeadership />
        <GrowthBanner />
        <ServiceFlipGrid />
        <MousSection />
        <StatsSection />
        <FormerPresidents />
        <PartnersCarousel />
      </main>
      <SiteFooter />
      <BackToTop />
    </>
  );
}
