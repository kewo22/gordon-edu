import Hero from "@/components/Hero";
import TacticalBriefings from "@/components/TacticalBriefings";
import CapabilitiesMatrix from "@/components/CapabilitiesMatrix";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      {/* Hero Module: Full Screen Height (includes Navbar) */}
      <Hero />

      {/* Content Spacing Container */}
      <div className="max-w-[1400px] mx-auto py-24">
        {/* Video Insight Section */}
        <TacticalBriefings />

        {/* Unified Capability Matrix Section */}
        <CapabilitiesMatrix />

        {/* Contact Form Module */}
        <ContactSection />
      </div>

      {/* Footer Modular Bar */}
      <Footer />
    </main>
  );
}
