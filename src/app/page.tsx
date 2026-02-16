import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import EventTimelineSection from "@/components/EventTimelineSection";
import CyberneticLensSection from "@/components/CyberneticLensSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Hero />
      <MarqueeSection />
      
      <EventTimelineSection />

      {/* New Mechanical Lens & Featured Events Transition */}
      <CyberneticLensSection />

      {/* Final Footer Section */}
      <Footer />
    </main>
  );
}
