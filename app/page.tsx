import type { Metadata } from "next";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HouseholdTrial } from "@/components/HouseholdTrial";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { StickyDownloadBar } from "@/components/StickyDownloadBar";
import { Value } from "@/components/Value";
import { WhatsAppAssistant } from "@/components/WhatsAppAssistant";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Value />
        <Features />
        <HowItWorks />
        <WhatsAppAssistant />
        <HouseholdTrial />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyDownloadBar />
    </div>
  );
}
