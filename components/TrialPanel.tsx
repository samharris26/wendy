import { Reveal } from "./Reveal";
import { StoreButton } from "./StoreButton";

const STUB = [
  ["Seats", "Up to 6"],
  ["First 7 days", "£0.00"],
  ["Cancel", "Anytime"],
];

export function TrialPanel() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 pt-24">
      <Reveal>
        <div className="grid items-center gap-9 rounded-[34px] bg-primaryText p-11 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          <div className="flex flex-col gap-5">
            <span className="eyebrow text-onNavyMeta">Your invitation</span>
            <h2 className="font-display text-[clamp(32px,4.4vw,42px)] leading-[1.08] text-white">
              Try Household, on the house.
            </h2>
            <p className="max-w-[460px] text-[16px] leading-[1.65] text-onNavyBody">
              The full family experience from day one — shared calendars and lists, task
              assignment, briefings, WhatsApp for everyone. Cancel before the week is up and pay
              nothing.
            </p>
            <StoreButton placement="trial-panel" variant="white" className="self-start" />
            <span className="text-[13px] leading-none text-onNavyMeta">
              No card charged for 7 days &middot; no commitment
            </span>
          </div>

          <div className="flex flex-col gap-1 rounded-[26px] bg-inkPanel p-[26px]">
            <span className="eyebrow text-onNavyMeta">Noa &middot; Household pass</span>
            <span className="font-display text-[clamp(52px,7vw,76px)] leading-none text-white pt-3 pb-1.5">
              7 days
            </span>
            <span className="pb-[18px] text-[17px] font-medium leading-none text-onNavyBody">
              free, then £39.99/yr
            </span>
            {STUB.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between border-t border-hairlineNavy py-[13px]">
                <span className="text-[15px] font-medium leading-none text-onNavyMeta">{k}</span>
                <span className="text-[15px] font-semibold leading-none text-white">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
