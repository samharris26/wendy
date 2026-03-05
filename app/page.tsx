import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";
import { Pricing } from "@/components/Pricing";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
