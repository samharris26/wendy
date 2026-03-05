import { DayWithWendy } from "@/components/DayWithWendy";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Problem } from "@/components/Problem";
import { SeeWendyInAction } from "@/components/SeeWendyInAction";
import { Value } from "@/components/Value";
import { WhatsAppAssistant } from "@/components/WhatsAppAssistant";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SeeWendyInAction />
        <Problem />
        <WhatsAppAssistant />
        <DayWithWendy />
        <Features />
        <Value />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
