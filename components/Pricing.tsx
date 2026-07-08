import { Reveal } from "./Reveal";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

// Annual saving vs paying monthly for a year
// Single:    £2.99 × 12 = £35.88  vs £19.99  → 44% off
// Household: £5.99 × 12 = £71.88  vs £39.99  → 44% off
const plans = [
  {
    name: "Free",
    price: "£0",
    per: "forever",
    note: "No card, no clock.",
    tagline: "For getting started.",
    cta: "Download free",
    highlight: false,
    features: [
      "Up to 25 tasks",
      "Up to 3 lists",
      "1 calendar source",
      "20 WhatsApp messages/month",
      "5 voice commands/month",
    ],
  },
  {
    name: "Single",
    price: "£19.99",
    per: "/year",
    note: "or £2.99/mo · save 44% annually",
    tagline: "For your own life admin.",
    cta: "Get Single",
    highlight: false,
    features: [
      "Unlimited tasks & lists",
      "Unlimited calendar sources",
      "Unlimited WhatsApp messages",
      "Unlimited voice commands",
      "Daily briefing",
    ],
  },
  {
    name: "Household",
    price: "£39.99",
    per: "/year",
    note: "or £5.99/mo · save 44% annually",
    tagline: "For the whole family — up to 6.",
    cta: "Start your free trial",
    ctaNote: "Free for 7 days, then £39.99/yr. Cancel anytime.",
    highlight: true,
    features: [
      "Everything in Single",
      "Shared lists & calendars",
      "Assign tasks to family",
      "Family briefings",
      "Multiple WhatsApp numbers",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-[var(--color-rule)] px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow justify-center">Pricing</p>
          <h2 className="mt-5 text-4xl text-primaryText sm:text-5xl">
            Free to start, <em className="italic text-accent">free to try.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondaryText">
            Download free and use Noa forever. Try everything Household offers,
            free for 7 days.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-xl p-8 ${
                  plan.highlight
                    ? "border-[1.5px] border-accent bg-card shadow-surface-sm"
                    : "noa-card"
                }`}
              >
                {plan.highlight && (
                  <span className="sticker absolute -top-4 right-6 rounded border border-accent bg-accent px-3 py-1.5 text-[10px] font-semibold text-white shadow-surface-xs">
                    7 days free
                  </span>
                )}

                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accentDeep">
                  {plan.name}
                </p>
                <p className="mt-1 text-sm text-secondaryText">{plan.tagline}</p>

                {/* Serif price */}
                <div className="mt-6 border-b border-[var(--color-rule)] pb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-5xl text-primaryText">{plan.price}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-secondaryText">
                      {plan.per}
                    </span>
                  </div>
                  <p className={`mt-2 text-xs ${plan.highlight ? "font-semibold text-accentDeep" : "text-secondaryText"}`}>
                    {plan.highlight ? "First 7 days free · " : ""}
                    {plan.note}
                  </p>
                </div>

                <ul className="my-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-accent" aria-hidden>
                        +
                      </span>
                      <span className="text-sm text-secondaryText">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-xl px-4 py-3.5 text-center text-sm font-semibold transition-colors ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accentDeep"
                      : "bg-primaryText text-white hover:bg-primaryText/90"
                  }`}
                  style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
                >
                  {plan.cta}
                </a>
                {plan.ctaNote && (
                  <p className="mt-3 text-center text-[11px] leading-snug text-secondaryText">
                    {plan.ctaNote}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 text-center font-mono text-[10px] uppercase tracking-wider text-secondaryText">
          Prices in GBP · USD pricing in the App Store · cancel any time
        </p>
      </div>
    </section>
  );
}
