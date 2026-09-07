import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primaryText px-6 py-28 lg:px-10">
      {/* One soft periwinkle glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow !text-white/60">Ready when you are</p>

        <h2 className="mt-6 text-5xl leading-[1.06] text-white sm:text-6xl lg:text-7xl">
          Your life,{" "}
          <em className="italic text-[#9DB0FF]">organised.</em>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/70">
          Download Noa free today — and give your household its calmest week
          yet with 7 days of Household, free.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <AppStoreButton variant="white" />
          <div className="hidden items-center gap-3 lg:flex">
            <div className="rounded-lg border border-white/20 bg-white p-2">
              <Image
                src="/qr-app-store.svg"
                alt="QR code linking to Noa on the App Store"
                width={76}
                height={76}
              />
            </div>
            <span className="max-w-[110px] text-left text-xs leading-relaxed text-white/60">
              Scan to download
            </span>
          </div>
        </div>

        <p className="mt-8 text-[13px] text-white/50">
          Free to download · Household free for 7 days · Cancel anytime
        </p>
      </Reveal>
    </section>
  );
}
