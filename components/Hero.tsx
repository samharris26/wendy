import Image from "next/image";
import { StoreButton } from "./StoreButton";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

/* The redesigned Home screen, rendered as DOM — real product UI, not decoration.
   Keep this in step with the app's Home screen. */
function PhoneHomeMock() {
  return (
    <div className="w-full max-w-[340px] rounded-[46px] bg-[#10151f] p-[9px] shadow-phone">
      <div className="overflow-hidden rounded-[38px] bg-background pb-[18px]">
        {/* status bar */}
        <div className="flex items-center justify-between px-7 pt-3 text-[13px] font-semibold text-primaryText">
          <span>7:30</span>
          <span className="h-[25px] w-[88px] rounded-full bg-[#10151f]" />
          <span className="text-[11px] font-normal text-secondaryText">100%</span>
        </div>

        <div className="flex flex-col gap-3 px-[17px] pt-4">
          {/* greeting */}
          <div className="flex items-start justify-between gap-2.5">
            <div className="flex flex-col gap-[3px]">
              <span className="font-display text-[26px] leading-[1.05] text-primaryText">
                Good morning,
                <br />
                Sam
              </span>
              <span className="text-[13px] leading-[1.3] text-secondaryText">Tuesday 8 September</span>
            </div>
            <span className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-full bg-primaryText">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </div>

          {/* progress */}
          <div className="flex items-center gap-2.5">
            <span className="flex h-[5px] flex-1 rounded-full bg-track">
              <span className="w-1/3 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-semibold text-secondaryText">2 of 6 done</span>
          </div>

          {/* today */}
          <div className="flex flex-col gap-[7px]">
            <div className="flex items-center gap-[7px] pl-[3px]">
              <span className="eyebrow text-[10px]">Today</span>
              <span className="rounded-full bg-dangerTint px-[7px] py-[3px] text-[10px] font-bold leading-[1.3] text-danger">
                1 late
              </span>
            </div>
            <div className="rounded-[18px] bg-card px-[15px] py-[2px]">
              <div className="flex items-start gap-[11px] border-b border-hairline py-[11px]">
                <span className="mt-px h-[19px] w-[19px] flex-none rounded-full border-2 border-[#a9b5c7]" />
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium leading-[1.25] text-primaryText">Renew car insurance</span>
                  <span className="text-[11px] font-medium leading-none text-danger">2 days late &middot; Sun 6 Sep</span>
                </div>
              </div>
              <div className="flex items-center gap-[11px] border-b border-hairline py-[11px]">
                <span className="ml-[7px] h-[28px] w-1 flex-none rounded-full bg-accent" />
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium leading-[1.25] text-primaryText">School pick-up</span>
                  <span className="text-[11px] font-medium leading-none text-meta">15:00 &middot; Jane</span>
                </div>
              </div>
              <div className="flex items-start gap-[11px] py-[11px]">
                <span className="mt-px h-[19px] w-[19px] flex-none rounded-full border-2 border-[#a9b5c7]" />
                <div className="flex flex-col gap-1">
                  <span className="text-[14px] font-medium leading-[1.25] text-primaryText">Milk &amp; sourdough</span>
                  <span className="text-[11px] font-medium leading-none text-meta">Shopping &middot; shared</span>
                </div>
              </div>
            </div>
          </div>

          {/* ask noa bar */}
          <div className="flex items-center gap-[9px] rounded-[16px] bg-primaryText px-3.5 py-3">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 3.5l1.7 4.4 4.4 1.7-4.4 1.7L12 15.7l-1.7-4.4L5.9 9.6l4.4-1.7z" />
            </svg>
            <span className="text-[14px] font-semibold leading-none text-white">Ask Noa</span>
            <span className="ml-auto text-[11px] leading-none text-onNavyMuted">What&rsquo;s on today?</span>
          </div>

          {/* tab bar */}
          <div className="grid h-[58px] grid-cols-5 items-center rounded-full bg-card shadow-surface-sm">
            <span className="mx-[5px] flex flex-col items-center gap-[3px] rounded-full bg-surfaceAlt py-[7px] text-[9px] font-semibold leading-none text-primaryText">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0d2b45" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 11l8-6.5 8 6.5V19a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" /></svg>
              Home
            </span>
            {[
              { label: "Tasks", path: <><circle cx="12" cy="12" r="8.5" /><path d="M8.5 12.2l2.4 2.4 4.6-4.9" /></> },
              { label: "Calendar", path: <><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M3.5 10h17M8 3.5v3M16 3.5v3" /></> },
              { label: "Lists", path: <><path d="M10 7h10M10 12.5h10M10 18h10" /><path d="M3.5 6.5l1.6 1.6L8 5.4" /><circle cx="5" cy="12.5" r="1.6" /><circle cx="5" cy="18" r="1.6" /></> },
              { label: "Settings", path: <><circle cx="12" cy="12" r="3.2" /><path d="M12 3v2.5M12 18.5V21M4.9 7.5l2.2 1.3M16.9 15.2l2.2 1.3M4.9 16.5l2.2-1.3M16.9 8.8l2.2-1.3" /></> },
            ].map((t) => (
              <span key={t.label} className="flex flex-col items-center gap-[3px] text-[9px] font-medium leading-none text-secondaryText">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#55637a" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  {t.path}
                </svg>
                {t.label}
              </span>
            ))}
          </div>
        </div>
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

        <div className="flex flex-wrap items-center gap-4">
          <StoreButton />
          <div className="flex items-center gap-3 rounded-[20px] bg-card py-3 pl-3 pr-4">
            <Image
              src="/qr-app-store.svg"
              alt="QR code linking to Noa on the App Store"
              width={58}
              height={58}
              className="rounded-[12px] bg-white p-1"
            />
            <span className="flex flex-col gap-1">
              <span className="text-[14px] font-semibold leading-none text-primaryText">Scan to download</span>
              <span className="text-[13px] leading-none text-meta">Opens the App Store</span>
            </span>
          </div>
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
        <PhoneHomeMock />
      </div>
    </section>
  );
}
