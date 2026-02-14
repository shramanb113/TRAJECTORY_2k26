import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import PortalSection from "@/components/PortalSection";
import EventTimelineSection from "@/components/EventTimelineSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-black">
      <Hero />
      <MarqueeSection />
      <PortalSection />
      
      {/* Spacer for smooth transition */}
      <div className="h-40 w-full bg-black"></div>
      <footer className="w-full py-20 bg-black text-center text-white">
        <h2 className="text-4xl font-bold text-[var(--color-primary)]">JOIN THE REVOLUTION</h2>
        <p className="mt-4 text-[var(--color-accent)]">Trajectory 2k26</p>
      </footer>
    </main>
  );
}
