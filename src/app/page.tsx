import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { DestinationsGrid } from "@/components/sections/DestinationsGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <DestinationsGrid />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
