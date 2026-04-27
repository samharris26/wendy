import { Link2, PenLine, ScanEye, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Connect.",
    description: "Bring in your Apple or Google calendars. Invite your household.",
    icon: Link2,
  },
  {
    num: "02",
    title: "Ask or import.",
    description:
      "Capture things quickly with Ask Noa, or paste a bigger plan from ChatGPT, Notes, or anywhere else.",
    icon: PenLine,
  },
  {
    num: "03",
    title: "Review and save.",
    description:
      "Check what Noa understood, edit if needed, and confirm before anything is created.",
    icon: ScanEye,
  },
  {
    num: "04",
    title: "Stay in sync.",
    description: "Shared calendars, reminders and widgets keep everyone aligned.",
    icon: RefreshCw,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-3xl text-primaryText sm:text-4xl">
          How it works
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step) => (
            <article key={step.num} className="rounded-2xl border border-primaryText/10 bg-card p-6 shadow-surface-xs">
              <div className="mb-4 flex items-center gap-3">
                <step.icon size={18} className="text-accent" aria-hidden />
                <span className="font-mono text-xs tracking-widest text-accent">STEP_{step.num}</span>
              </div>
              <h3 className="text-2xl text-primaryText">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondaryText">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
