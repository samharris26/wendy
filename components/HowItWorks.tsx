import { CalendarRange, MessageCircleMore, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Connect your calendar.",
    description: "Link your calendar once so Wendy can execute changes with context.",
    icon: CalendarRange,
  },
  {
    title: "Message naturally in WhatsApp.",
    description: "Use plain language commands for events, tasks, and day planning.",
    icon: MessageCircleMore,
  },
  {
    title: "Wendy executes instantly.",
    description: "Every command is parsed, confirmed when needed, and applied reliably.",
    icon: ShieldCheck,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl">How It Works</h2>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-primaryText/10 bg-card p-5 shadow-surface-xs">
              <step.icon size={18} className="text-accent" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-primaryText">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondaryText">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
