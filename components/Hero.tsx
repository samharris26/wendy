import Image from "next/image";
import { StoreButton } from "./StoreButton";
import { AndroidWaitlist } from "./AndroidWaitlist";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/* The real Home screen: a screenshot from the app, framed as a phone.
   When Home changes, replace public/images/home.png — nothing here needs to
   follow it, which is the point: a hand-built copy of the screen drifts. */
function PhoneHome() {
  return (
    <div className="w-full max-w-[340px] rounded-[46px] bg-[#10151f] p-[9px] shadow-phone">
      <div className="overflow-hidden rounded-[38px] bg-background">
        <Image
          src="/images/home.png"
          alt="The Noa app's Home screen: today's tasks with one running late, tomorrow's plan, and the Ask Noa bar"
          width={1206}
          height={2622}
          sizes="(max-width: 400px) 90vw, 322px"
          className="block h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid w-full max-w-[1120px] items-center gap-12 px-6 pt-16 [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]"
    >
      <div className="flex flex-col gap-[26px]">
        <span className="inline-flex items-center gap-[9px] self-start rounded-full bg-card px-[15px] py-[9px] text-[13px] font-semibold leading-none text-secondaryText">
          <span className="h-2 w-2 rounded-[3px] bg-accent" />
          Free on the App Store &middot; iPhone
        </span>

        <h1 className="font-display text-[clamp(40px,6.2vw,68px)] leading-[1.02] text-primaryText">
          One calm app for the whole household.
        </h1>

        <p className="max-w-[520px] text-[19px] leading-[1.6] text-secondaryText">
          Calendars, tasks, shopping lists and reminders — together in one place,
          shared with your family, and in sync even over WhatsApp.
        </p>

        <div className="flex flex-col items-start gap-3">
          <StoreButton placement="hero" />
          <AndroidWaitlist placement="hero" />
        </div>

        <div className="flex flex-wrap gap-[18px]">
          {["Free to download", "Household free for 7 days", "Cancel anytime"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-sm font-medium leading-none text-secondaryText">
              <Check />
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <PhoneHome />
      </div>
    </section>
  );
}
