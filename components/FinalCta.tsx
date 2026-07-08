import Image from "next/image";
import { AppStoreButton } from "./AppStoreButton";
import { Reveal } from "./Reveal";

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2 C 12.8 7.5, 16.5 11.2, 22 12 C 16.5 12.8, 12.8 16.5, 12 22 C 11.2 16.5, 7.5 12.8, 2 12 C 7.5 11.2, 11.2 7.5, 12 2 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-primaryText px-6 py-28 lg:px-10">
      {/* Warm glow + arcs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[110px]" />
        <svg className="absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1100 1100" fill="none">
          {[300, 400, 500].map((r) => (
            <circle key={r} cx="550" cy="550" r={r} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow justify-center !text-[#E8835E]">Ready when you are</p>

        <h2 className="mt-8 text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          Your life,{" "}
          <span className="relative inline-block">
            <em className="italic text-[#E8835E]">organised.</em>
            <Sparkle className="absolute -right-8 -top-5 h-6 w-6 text-[#E8835E]" />
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/70">
          Download Noa free today — and give your household its calmest week
          yet with 7 days of Household, free.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <AppStoreButton variant="white" />
          <div className="hidden items-center gap-3 lg:flex">
            <div className="rounded-lg border border-dashed border-white/40 bg-white p-2">
              <Image
                src="/qr-app-store.svg"
                alt="QR code linking to Noa on the App Store"
                width={76}
                height={76}
              />
            </div>
            <span className="max-w-[110px] text-left font-mono text-[10px] uppercase leading-relaxed tracking-wider text-white/60">
              Scan to download
            </span>
          </div>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
          Free to download · Household free for 7 days · Cancel anytime
        </p>
      </Reveal>
    </section>
  );
}
