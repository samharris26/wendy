import Link from "next/link";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

const FEATURES = [
  ["Shared family calendar", "/features/shared-family-calendar"],
  ["Tasks", "/features/tasks"],
  ["Shared lists", "/features/shared-lists"],
  ["WhatsApp assistant", "/features/whatsapp-assistant"],
];

const COMPANY = [
  ["Blog", "/blog"],
  ["Privacy policy", "/privacy"],
  ["Terms of service", "/terms"],
  ["Instagram", "https://www.instagram.com/asknoa.app"],
];

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1120px] px-6 pt-[72px]">
      {/* Slim third-party badge row */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-4 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
        <a href="https://www.producthunt.com/products/noa-4" target="_blank" rel="noopener noreferrer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1125090&theme=light&t=1776411913924"
            alt="Noa on Product Hunt"
            width={150}
            height={33}
          />
        </a>
        <a href="https://peerpush.net/p/noa" target="_blank" rel="noopener">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://peerpush.net/p/noa/badge.png" alt="Noa on PeerPush" width={150} height={33} />
        </a>
        <a href="https://tinylaunch.com" target="_blank" rel="noopener">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://tinylaunch.com/tinylaunch_badge_featured_on.svg" alt="Featured on TinyLaunch" width={150} height={33} />
        </a>
      </div>

      <div className="grid gap-8 border-t border-border pt-9 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
        <div className="flex flex-col gap-2.5">
          <span className="font-display text-2xl leading-none text-primaryText">Noa</span>
          <span className="max-w-[260px] text-[14px] leading-[1.6] text-secondaryText">
            Your life, organised. Calendars, tasks, lists and reminders — beautifully designed for iOS.
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Features</span>
          {FEATURES.map(([label, href]) => (
            <Link key={href} href={href} className="text-[14px] font-medium leading-none text-secondaryText transition-colors hover:text-primaryText">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Company</span>
          {COMPANY.map(([label, href]) =>
            href.startsWith("http") ? (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-[14px] font-medium leading-none text-secondaryText transition-colors hover:text-primaryText">
                {label}
              </a>
            ) : (
              <Link key={href} href={href} className="text-[14px] font-medium leading-none text-secondaryText transition-colors hover:text-primaryText">
                {label}
              </Link>
            )
          )}
        </div>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Get the app</span>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-[16px] bg-primaryText px-5 py-[13px] text-[15px] font-semibold leading-none text-white transition-colors hover:bg-[#0a2338]"
          >
            Download free
          </a>
          <span className="flex items-center gap-2 text-[13px] font-medium leading-none text-meta">
            <span className="h-2 w-2 rounded-full bg-accent" />
            System operational
          </span>
        </div>
      </div>

      <div className="pt-7 text-[13px] leading-none text-placeholder">&copy; {new Date().getFullYear()} Noa.</div>
    </footer>
  );
}
