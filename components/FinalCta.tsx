import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";

export function FinalCta() {
  return (
    <section className="px-6 pb-24 pt-4 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-xl bg-primaryText px-8 py-16 text-center shadow-surface-sm md:py-20">
          {/* Warm glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[100px]" />
          </div>

          <div className="relative">
            <h2 className="text-4xl text-white sm:text-5xl lg:text-6xl">
              Your life, <em className="italic text-[#E8835E]">organised.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/70">
              Download Noa free today — and give your household its calmest
              week yet with 7 days of Household, free.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
              <AppStoreButton variant="white" />
              <div className="hidden items-center gap-3 lg:flex">
                <Image
                  src="/qr-app-store.svg"
                  alt="QR code linking to Noa on the App Store"
                  width={64}
                  height={64}
                  className="rounded-lg bg-white p-1"
                />
                <span className="max-w-[110px] text-left text-xs leading-snug text-white/60">
                  Scan with your iPhone
                </span>
              </div>
            </div>

            <p className="mt-6 text-xs text-white/50">
              Free to download &middot; Household free for 7 days &middot; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
