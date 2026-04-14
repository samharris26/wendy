import { Check } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

const plans = [
  {
    name: "Free",
    price: "£0",
    period: "",
    annual: "",
    tagline: "Try Noa for yourself.",
    cta: "Start Free",
    highlight: false,
    features: [
      "Personal calendar view",
      "Tasks & to-dos",
      "Lists & collections",
      "Basic reminders",
      "Manual event creation",
    ],
  },
  {
    name: "Single",
    price: "£5.99",
    period: "/mo",
    annual: "£29.99/yr — save over 50%",
    tagline: "Your life, organised.",
    cta: "Upgrade to Single",
    highlight: false,
    features: [
      "Everything in Free",
      "Import plans from ChatGPT or Notes",
      "WhatsApp assistant",
      "Natural language commands",
      "AI daily schedule summary",
      "Voice → task capture",
      "Smart reminders & nudges",
    ],
  },
  {
    name: "Household",
    price: "£12.99",
    period: "/mo",
    annual: "£44.99/yr — save over 70%",
    tagline: "Run your life together.",
    cta: "Start Household Plan",
    highlight: true,
    features: [
      "Everything in Single",
      "Shared calendars & lists",
      "Assign tasks to people",
      "Review & edit imported plans",
      "Household timeline",
      "Multiple WhatsApp numbers",
      "Family command centre",
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
            Simple Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-primaryText sm:text-4xl lg:text-5xl">
            Start free. Upgrade when you need more.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-secondaryText">
            Use Noa free in the app. Import, WhatsApp and household features on paid plans.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 shadow-surface-xs ${
                plan.highlight
                  ? "border-accent bg-card"
                  : "border-primaryText/10 bg-card"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primaryText">{plan.name}</h3>
                <p className="mt-1 text-sm text-secondaryText">{plan.tagline}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-primaryText">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-secondaryText">{plan.period}</span>
                  )}
                </div>
                {"annual" in plan && plan.annual && (
                  <p className="mt-1.5 text-xs font-medium text-accent">{plan.annual}</p>
                )}
              </div>

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
                className={`block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-primaryText text-white hover:bg-[#0b223d]"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
