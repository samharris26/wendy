import { AppStoreButton } from "./AppStoreButton";
import { Reveal } from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Download Noa free.",
    description:
      "Set up in under two minutes. Connect your Apple or Google calendars — nothing moves, everything appears in one view.",
  },
  {
    num: "02",
    title: "Invite your household.",
    description:
      "Add up to 6 people with Household — free for your first 7 days. Shared lists, shared calendars, tasks assigned to the right person.",
  },
  {
    num: "03",
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
          <h2 className="mt-4 text-4xl text-primaryText sm:text-5xl">
            Calm in <em className="accent-italic">three steps.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * 120}
              className={`relative border-t border-rule py-10 pr-8 md:border-t-0 md:py-4 ${
                i > 0 ? "md:border-l md:pl-10" : ""
              }`}
            >
              <span
                className="block text-5xl text-accent"
                style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                aria-hidden
              >
                {step.num}
              </span>
              <h3 className="mt-5 text-2xl text-primaryText">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-secondaryText">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center gap-5">
          <AppStoreButton />
          <span className="text-[13px] text-secondaryText">
            Two minutes to set up · free
          </span>
        </Reveal>
      </div>
    </section>
  );
}
