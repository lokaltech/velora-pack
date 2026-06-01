import { CapabilitiesSection } from "./components/capabilities-section";
import { CertificationsSection } from "./components/certifications-section";
import { CtaSection } from "./components/cta-section";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { IndustriesSection } from "./components/industries-section";
import { MetricsBar } from "./components/metrics-bar";
import { Navbar } from "./components/navbar";
import { ProcessSection } from "./components/process-section";
import { ProductsSection } from "./components/products-section";
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
