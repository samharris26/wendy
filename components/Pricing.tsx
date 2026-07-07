import { Check } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

// Annual saving vs paying monthly for a year
// Single:    £2.99 × 12 = £35.88  vs £19.99  → 44% off
// Household: £5.99 × 12 = £71.88  vs £39.99  → 44% off
const plans = [
  {
    name: "Free",
    annualPrice: "£0",
    monthlyPrice: null,
    saving: null,
    badge: null,
    tagline: "Forever free.",
    cta: "Download free",
    ctaNote: null,
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
    annualPrice: "£19.99",
    monthlyPrice: "£2.99",
    saving: "44",
    badge: null,
    tagline: "Your life, organised.",
    cta: "Get Single",
    ctaNote: null,
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
    annualPrice: "£39.99",
    monthlyPrice: "£5.99",
    saving: "44",
    badge: "7-day free trial",
    tagline: "Up to 6 people.",
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
    <section id="pricing" className="px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h2 className="text-3xl text-primaryText sm:text-4xl lg:text-5xl">
            Free to start,{" "}
            <em className="italic text-accent">free to try.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondaryText">
            Download free and use Noa forever. Try everything Household offers,
            free for 7 days.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-xl p-7 shadow-[0_1px_2px_rgba(11,36,64,0.04)] ${
                plan.highlight
                  ? "border-[1.5px] border-accent bg-accentSoft"
                  : "border border-primaryText/10 bg-card"
              }`}
            >
              {/* Trial badge */}
              {plan.badge && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-white uppercase">
                  {plan.badge}
                </span>
              )}

              {/* Plan name + tagline */}
              <div className="mb-5">
                <h3 className="text-2xl text-primaryText">{plan.name}</h3>
                <p className="mt-1 text-sm text-secondaryText">{plan.tagline}</p>
              </div>

              {/* Price block */}
              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl text-primaryText">{plan.annualPrice}</span>
                      <span className="text-sm text-secondaryText">/yr</span>
                    </div>
                    {plan.highlight && (
                      <p className="mt-1 text-xs font-semibold text-accentDeep">
                        First 7 days free
                      </p>
                    )}
                    <p className="mt-1 text-xs text-secondaryText">
                      or {plan.monthlyPrice}/mo &middot; save {plan.saving}% annually
                    </p>
                  </>
                ) : (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl text-primaryText">{plan.annualPrice}</span>
                    <span className="text-sm text-secondaryText">forever</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
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
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-sm text-center text-xs text-secondaryText">
          Prices shown in GBP. USD pricing available in the App Store. Cancel any time.
        </p>
      </div>
    </section>
  );
}
