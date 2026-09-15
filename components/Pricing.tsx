import { Reveal } from "./Reveal";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

const PLANS = [
  {
    name: "Free",
    descriptor: "For getting started.",
    price: "£0",
    cadence: "forever",
    features: ["Up to 25 tasks", "Up to 3 lists", "1 calendar source", "20 WhatsApp messages a month"],
    cta: "Download free",
    featured: false,
  },
  {
    name: "Single",
    descriptor: "For your own life admin.",
    price: "£19.99",
    cadence: "/year",
    features: [
      "Unlimited tasks & lists",
      "Unlimited calendar sources",
      "Unlimited WhatsApp & voice",
      "Daily briefing",
    ],
    cta: "Get Single",
    featured: false,
  },
  {
    name: "Household",
    descriptor: "For the whole family — up to 6.",
    price: "£39.99",
    cadence: "/year",
    features: [
      "Everything in Single",
      "Shared lists & calendars",
      "Assign tasks to family",
      "Family briefings & multiple numbers",
    ],
    cta: "Start your free trial",
    featured: true,
  },
];

function Tick() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-6 pt-24">
      <Reveal className="flex max-w-[620px] flex-col gap-2.5">
        <span className="eyebrow">Pricing</span>
        <h2 className="font-display text-[clamp(32px,4.4vw,44px)] leading-[1.08] text-primaryText">
          Free to start, free to try.
        </h2>
        <p className="text-[17px] leading-[1.6] text-secondaryText">
          Download free and use Noa forever. Try everything Household offers, free for 7 days.
        </p>
      </Reveal>

      <div className="grid items-start gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 90}>
            <div
              className={`flex h-full flex-col gap-[18px] rounded-[26px] bg-card p-[26px] ${
                plan.featured ? "shadow-featured outline outline-2 outline-primaryText" : ""
              }`}
            >
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-[9px]">
                  <span className="text-[18px] font-semibold leading-none text-primaryText">{plan.name}</span>
                  {plan.featured && (
                    <span className="rounded-full bg-accentTint px-[9px] py-1 text-[11px] font-bold leading-[1.3] text-accentHover">
                      7 days free
                    </span>
                  )}
                </span>
                <span className="text-[14px] leading-[1.5] text-meta">{plan.descriptor}</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-display text-[40px] leading-none text-primaryText">{plan.price}</span>
                <span className="text-[15px] font-medium leading-none text-meta">{plan.cadence}</span>
              </div>

              <div className="flex flex-col gap-2.5">
                {plan.features.map((f) => (
                  <span key={f} className="flex items-center gap-2.5 text-[15px] font-medium leading-[1.4] text-secondaryText">
                    <Tick />
                    {f}
                  </span>
                ))}
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto rounded-[16px] py-[15px] text-center text-[16px] font-semibold leading-none transition-colors ${
                  plan.featured
                    ? "bg-primaryText text-white hover:bg-[#0a2338]"
                    : "bg-surface text-primaryText hover:bg-[#E6EAF3]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <span className="text-[13px] leading-[1.5] text-meta">
        Prices in GBP &middot; USD pricing in the App Store &middot; cancel any time. Free for 7 days,
        then £39.99/yr.
      </span>
    </section>
  );
}
