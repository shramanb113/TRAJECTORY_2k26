import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import PortalSection from "@/components/PortalSection";
import CyberneticLensSection from "@/components/CyberneticLensSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Hero />
      <MarqueeSection />
      
      {/* 3D Portal & Timeline Sequence */}
      <PortalSection />

      {/* New Mechanical Lens & Featured Events Transition */}
      <CyberneticLensSection />

      {/* Spacer for smooth transition */}
      <div className="h-40 w-full bg-black"></div>
    </main>
  );
}
