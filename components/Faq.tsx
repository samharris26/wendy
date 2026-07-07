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
    <section id="faq" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            FAQ
          </p>
          <h2 className="text-3xl text-primaryText sm:text-4xl lg:text-5xl">
            Questions, <em className="italic text-accent">answered.</em>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-primaryText/10 bg-card px-6 py-4 shadow-[0_1px_2px_rgba(11,36,64,0.04)] open:pb-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-primaryText [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden
                  className="text-xl leading-none text-accent transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-secondaryText">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
