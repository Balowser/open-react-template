export const metadata = {
  title: "BusLotse - Einfache Software für Bürgerbus-Vereine | 14 Tage gratis",
  description:
    "Verwalten Sie Ihren Bürgerbus-Verein einfach und sicher. Fahrzeuge, Fahrer, Wartungen - alles an einem Ort. Seniorenfreundlich & DSGVO-konform. Jetzt 14 Tage kostenlos testen!",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import Features from "@/components/features";
import WhyChooseUs from "@/components/why-choose-us";
import Zielgruppen from "@/components/zielgruppen";
import Pricing from "@/components/pricing";
import TrustSection from "@/components/trust-section";
import FAQ from "@/components/faq";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <WhyChooseUs />
      <Zielgruppen />
      <Pricing />
      <TrustSection />
      <FAQ />
      <Cta />
    </>
  );
}
