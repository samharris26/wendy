import Link from "next/link";

import { CommandDemo } from "@/components/CommandDemo";

export function Hero() {
  return (
    <section id="product" className="min-h-[90vh] px-6 pb-16 pt-12 lg:px-10 lg:pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-16">
        <div className="max-w-2xl">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-primaryText sm:text-5xl lg:text-[3.4rem] lg:leading-[1.04]">
            Run your life from a single command.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-secondaryText">
            Wendy is your Personal OS inside WhatsApp. Add events. Move plans. Clear your day.
            Just message naturally.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#waitlist"
              className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b54d8]"
            >
              Start using Wendy
            </Link>
            <Link
              href="#capabilities"
              className="rounded-xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-primaryText transition-colors hover:border-black/25"
            >
              View demo
            </Link>
          </div>
        </div>

        <CommandDemo />
      </div>
    </section>
  );
}
