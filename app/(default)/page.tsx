export const metadata = {
  title: "BusLotse - Einfache Software für Bürgerbus-Vereine | 14 Tage gratis",
  description:
    "Verwalten Sie Ihren Bürgerbus-Verein einfach und sicher. Fahrzeuge, Fahrer, Wartungen - alles an einem Ort. Seniorenfreundlich & DSGVO-konform. Jetzt 14 Tage kostenlos testen!",
};

import HeroSection from "@/components/landing/hero-section";
import PainPointsSection from "@/components/landing/pain-points-section";
import FeaturesSection from "@/components/landing/features-section";
import TargetGroupsSection from "@/components/landing/target-groups-section";
import PricingSection from "@/components/landing/pricing-section";
import TrustSection from "@/components/landing/trust-section";
import FAQSection from "@/components/landing/faq-section";
import CTASection from "@/components/landing/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <TargetGroupsSection />
      <PricingSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
