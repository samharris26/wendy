import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Is Noa free?",
    a: "Yes — download Noa free and use it every day at no cost. The free plan includes tasks, lists, a calendar source and a monthly allowance of WhatsApp messages and voice commands.",
  },
  {
    q: "How does the Household free trial work?",
    a: "You get everything — shared lists and calendars, task assignment, family briefings — for up to 6 people, free for 7 days. Nothing is charged until the trial ends, and you can cancel anytime in your App Store settings.",
  },
  {
    q: "Which devices does Noa work on?",
    a: "Noa is an iPhone app, with widgets for your home screen. You can also talk to Noa from any phone over WhatsApp — handy for family members without the app.",
  },
  {
    q: "Do I need to move my calendar?",
    a: "No. Noa connects to your existing Apple and Google calendars and brings them together in one view. Nothing moves, nothing breaks.",
  },
  {
    q: "How is my family's data handled?",
    a: "Your household's data is private to your household. We don't sell data, and you can delete your account — and everything with it — from inside the app at any time.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="mx-auto grid w-full max-w-[1120px] items-start gap-x-16 gap-y-8 px-6 pt-24 lg:grid-cols-[1fr_1.7fr]"
    >
      <Reveal className="flex flex-col gap-2.5">
        <span className="eyebrow">FAQ</span>
        <h2 className="font-display text-[clamp(32px,4.4vw,44px)] leading-[1.08] text-primaryText">
          Questions, answered.
        </h2>
        <p className="text-[17px] leading-[1.6] text-secondaryText">
          The short version: it&rsquo;s free to download, the Household trial is genuinely free, and
          cancelling takes two taps.
        </p>
      </Reveal>

      <Reveal>
        <div className="rounded-[26px] bg-card px-6 py-1">
          {FAQS.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group border-b border-hairline py-5 last:border-b-0"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] font-semibold leading-[1.35] text-primaryText">{f.q}</h3>
                <span
                  aria-hidden
                  className="mt-0.5 shrink-0 text-[18px] leading-none text-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-2 text-[15px] leading-[1.65] text-secondaryText">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
