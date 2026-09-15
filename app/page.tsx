import type { Metadata } from "next";
import { ClosingCta } from "@/components/ClosingCta";
import { DayWithNoa } from "@/components/DayWithNoa";
import { DockedBar } from "@/components/DockedBar";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { TrialPanel } from "@/components/TrialPanel";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DayWithNoa />
        <TrialPanel />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <Footer />
      <DockedBar />
    </div>
  );
}
