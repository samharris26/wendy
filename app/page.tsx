import { CTA } from "@/components/CTA";
import { Capabilities } from "@/components/Capabilities";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Philosophy } from "@/components/Philosophy";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Philosophy />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
