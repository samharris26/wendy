import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Is Noa free?",
    a: "Yes — download Noa free and use it every day at no cost. The free plan includes tasks, lists, a calendar source and a monthly allowance of WhatsApp messages and voice commands. Upgrade only if you want more.",
  },
  {
    q: "How does the Household free trial work?",
    a: "Household comes with a 7-day free trial. You get everything — shared lists and calendars, task assignment, family briefings — for up to 6 people. You won't be charged until the trial ends, and you can cancel anytime in your App Store settings.",
  },
  {
    q: "What happens after the trial?",
    a: "If you love it, do nothing — your Household plan continues from £39.99/yr (or £5.99/mo). If not, cancel before the 7 days are up and you pay nothing. Your data stays safe on the free plan.",
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
    <section id="faq" className="border-t border-[var(--color-rule)] px-6 py-24 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1.8fr]">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-4xl text-primaryText sm:text-5xl">
            Questions,{" "}
            <em className="italic text-accent">answered.</em>
          </h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondaryText">
            The short version: it&apos;s free to download, the Household trial
            is genuinely free, and cancelling takes two taps.
          </p>
        </Reveal>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 60}>
              <details className="group border-t border-[var(--color-rule)] py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-baseline gap-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="font-mono text-[10px] tracking-[0.22em] text-accent">
                    Q_{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg text-primaryText md:text-xl">{faq.q}</span>
                  <span
                    aria-hidden
                    className="font-mono text-xl leading-none text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl pl-[52px] text-sm leading-relaxed text-secondaryText md:pl-[58px]">
                  {faq.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
