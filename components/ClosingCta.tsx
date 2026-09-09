import Image from "next/image";
import { Reveal } from "./Reveal";
import { StoreButton } from "./StoreButton";

export function ClosingCta() {
  return (
    <section className="mx-auto w-full max-w-[1120px] px-6 pt-24">
      <Reveal>
        <div className="grid items-center gap-9 rounded-[34px] bg-card p-12 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          <div className="flex flex-col gap-[18px]">
            <span className="eyebrow">Ready when you are</span>
            <h2 className="font-display text-[clamp(34px,4.6vw,46px)] leading-[1.06] text-primaryText">
              Your life, organised.
            </h2>
            <p className="max-w-[440px] text-[17px] leading-[1.6] text-secondaryText">
              Download Noa free today — and give your household its calmest week yet with 7 days of
              Household, free.
            </p>
            <StoreButton className="self-start" />
            <span className="text-[13px] leading-none text-meta">
              Free to download &middot; Household free for 7 days &middot; Cancel anytime
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Image
              src="/qr-app-store.svg"
              alt="QR code linking to Noa on the App Store"
              width={168}
              height={168}
              className="rounded-[24px] bg-white p-3.5"
            />
            <span className="text-[14px] font-semibold leading-none text-primaryText">Scan to download</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
