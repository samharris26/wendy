import { AppStoreButton } from "./AppStoreButton";
import { Reveal } from "./Reveal";

const steps = [
  {
    num: "1",
    title: "Download Noa free.",
    description:
      "Set up in under two minutes. Connect your Apple or Google calendars — nothing moves, everything appears in one view.",
  },
  {
    num: "2",
    title: "Invite your household.",
    description:
      "Add up to 6 people with Household — free for your first 7 days. Shared lists, shared calendars, tasks assigned to the right person.",
  },
  {
    num: "3",
    title: "Let Noa keep everyone in sync.",
    description:
      "Daily briefings, reminders, widgets and WhatsApp keep the whole family on the same page — without the nagging.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-14">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-5 text-4xl text-primaryText sm:text-5xl">
            Calm in <em className="italic text-accent">three steps.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 120}
              className={`relative border-t border-[var(--color-rule)] py-10 pr-8 md:border-t-0 md:py-4 ${
                i > 0 ? "md:border-l md:pl-10" : ""
              }`}
            >
              <span
                className="font-drama block text-[5.5rem] leading-none text-accent/90"
                aria-hidden
              >
                {step.num}
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.22em] text-secondaryText">
                Step {step.num} of 3
              </span>
              <h3 className="mt-4 text-2xl text-primaryText">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondaryText">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-5">
          <AppStoreButton />
          <span className="font-mono text-[11px] uppercase tracking-wider text-secondaryText">
            Two minutes to set up · free
          </span>
        </Reveal>
      </div>
    </section>
  );
}
