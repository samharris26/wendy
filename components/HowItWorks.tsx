import { ArrowDownToLine, Users, Sparkles } from "lucide-react";
import { AppStoreButton } from "./AppStoreButton";

const steps = [
  {
    num: "01",
    title: "Download Noa free.",
    description:
      "Get set up in under two minutes. Connect your Apple or Google calendars — nothing moves, everything appears in one view.",
    icon: ArrowDownToLine,
  },
  {
    num: "02",
    title: "Invite your household.",
    description:
      "Add up to 6 people with Household — free for your first 7 days. Shared lists, shared calendars, tasks assigned to the right person.",
    icon: Users,
  },
  {
    num: "03",
    title: "Let Noa keep everyone in sync.",
    description:
      "Daily briefings, reminders, widgets and WhatsApp keep the whole family on the same page — without the nagging.",
    icon: Sparkles,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface/60 px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            How it works
          </p>
          <h2 className="text-3xl text-primaryText sm:text-4xl lg:text-5xl">
            Calm in <em className="italic text-accent">three steps.</em>
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.num}
              className="rounded-xl border border-primaryText/10 bg-card p-7 shadow-surface-xs"
            >
              <div className="mb-4 flex items-center gap-3">
                <step.icon size={18} className="text-accent" aria-hidden />
                <span className="font-mono text-xs tracking-widest text-accent">
                  STEP_{step.num}
                </span>
              </div>
              <h3 className="text-2xl text-primaryText">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondaryText">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
