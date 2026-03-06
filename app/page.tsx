import { DayWithNoa } from "@/components/DayWithNoa";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { SeeNoaInAction } from "@/components/SeeNoaInAction";
import { Value } from "@/components/Value";
import { WhatsAppAssistant } from "@/components/WhatsAppAssistant";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SeeNoaInAction />
        <Problem />
        <WhatsAppAssistant />
        <DayWithNoa />
        <Features />
        <Value />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
