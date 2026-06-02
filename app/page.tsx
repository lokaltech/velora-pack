import { CapabilitiesSection } from "./components/sections/capabilities-section";
import { CertificationsSection } from "./components/sections/certifications-section";
import { CtaSection } from "./components/sections/cta-section";
import { Footer } from "./components/footer";
import { Hero } from "./components/sections/hero";
import { IndustriesSection } from "./components/sections/industries-section";
import { MetricsBar } from "./components/sections/metrics-bar";
import { Navbar } from "./components/navbar";
import { ProcessSection } from "./components/sections/process-section";
import { ProductsSection } from "./components/sections/products-section";
import { WhatsAppFab } from "./components/whatsapp-fab";

export default function Home() {
  return (
    <div className="min-h-full overflow-x-hidden bg-background font-sans text-text">
      <Navbar />
      <main className="w-full min-w-0">
        <Hero />
        <MetricsBar />
        <ProductsSection />
        <CapabilitiesSection />
        <ProcessSection />
        <CertificationsSection />
        <IndustriesSection />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
