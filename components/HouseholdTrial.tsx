import { AppStoreButton } from "./AppStoreButton";
import { Reveal } from "./Reveal";

const STUB_DETAILS = [
  ["Plan", "Household"],
  ["Seats", "Up to 6"],
  ["First 7 days", "£0.00"],
  ["Then", "£39.99/yr"],
  ["Cancel", "Anytime"],
];

export function HouseholdTrial() {
  return (
    <section className="px-6 py-24 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow justify-center">Your invitation</p>
          <h2 className="mt-5 text-4xl text-primaryText sm:text-5xl">
            Try Household,{" "}
            <em className="italic text-accent">on the house.</em>
          </h2>
        </Reveal>

        <Reveal>
          <div className="relative mx-auto grid max-w-4xl overflow-hidden rounded-xl border border-primaryText/15 bg-card shadow-surface-sm md:grid-cols-[1.6fr_1fr]">
            {/* Main panel */}
            <div className="relative bg-accentSoft p-8 md:p-12">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accentDeep">
                Noa · Household pass
              </p>

              <div className="mt-6 flex items-end gap-4">
                <span className="font-drama text-[7rem] leading-[0.8] text-accent md:text-[9rem]" aria-hidden>
                  7
                </span>
                <div className="pb-2">
                  <p className="text-3xl leading-none text-primaryText md:text-4xl">days</p>
                  <p className="mt-1 text-3xl italic leading-none text-accent md:text-4xl">free.</p>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-base leading-relaxed text-secondaryText">
                The full family experience from day one — shared calendars and
                lists, task assignment, briefings, WhatsApp for everyone. If
                it&apos;s not for your household, cancel before the week is up
                and pay nothing.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <AppStoreButton />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider text-secondaryText">
                Start the trial inside the app · no commitment
              </p>
            </div>

            {/* Perforation */}
            <div className="relative hidden md:block" aria-hidden>
              <div className="absolute -left-px bottom-0 top-0 border-l-2 border-dashed border-primaryText/20" />
              <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full border border-primaryText/15 bg-background" />
              <div className="absolute -bottom-4 -left-4 h-8 w-8 rounded-full border border-primaryText/15 bg-background" />
            </div>

            {/* Stub */}
            <div className="relative border-t-2 border-dashed border-primaryText/20 p-8 md:border-t-0 md:p-10 md:pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-secondaryText">
                Admit six
              </p>
              <dl className="mt-6 flex flex-col">
                {STUB_DETAILS.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-[var(--color-rule)] py-3 last:border-b-0"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-wider text-secondaryText">
                      {label}
                    </dt>
                    <dd className={`text-sm font-semibold ${label === "First 7 days" ? "text-accentDeep" : "text-primaryText"}`}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <span className="sticker mt-6 inline-block rounded border border-accent px-2.5 py-1 text-[10px] text-accentDeep">
                No card charged for 7 days
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
