import type { Metadata } from "next";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { ImportDemo } from "@/components/ImportDemo";
import { ReviewTrust } from "@/components/ReviewTrust";
import { SeeNoaInAction } from "@/components/SeeNoaInAction";
import { TwoWays } from "@/components/TwoWays";
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
        <TwoWays />
        <SeeNoaInAction />
        <ImportDemo />
        <ReviewTrust />
        <Features />
        <Value />
        <WhatsAppAssistant />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
