const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

/**
 * Site-styled "Download on the App Store" button, matching the Claude Design
 * handoff (navy on light, inverted on navy). NOTE: Apple's marketing
 * guidelines ask for the official badge artwork — swap in
 * /app-store-badge.svg here if App Store review requires it.
 */
export function StoreButton({
  variant = "navy",
  className = "",
}: {
  variant?: "navy" | "white";
  className?: string;
}) {
  const navy = variant === "navy";
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-[13px] rounded-[20px] px-[26px] py-[17px] transition-colors ${
        navy
          ? "bg-primaryText shadow-button hover:bg-[#0a2338]"
          : "bg-card hover:bg-[#E6EAF3]"
      } ${className}`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill={navy ? "#fff" : "#0d2b45"} aria-hidden>
        <path d="M16.4 12.7c0-2 1.6-3 1.7-3.1-.9-1.4-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7.9 1.5 2 2.5 2 1 0 1.4-.6 2.6-.6 1.2 0 1.5.6 2.6.6 1.1 0 1.8-1 2.5-2 .5-.7.7-1.1 1.1-2-2-.7-2.2-3.2-2.2-3.3zM14.4 6.6c.5-.7.9-1.6.8-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.8 2.5 1 .1 1.9-.5 2.5-1.2z" />
      </svg>
      <span className="flex flex-col gap-[3px] text-left">
        <span
          className={`text-[11px] font-medium leading-none tracking-[0.04em] ${
            navy ? "text-onNavyMuted" : "text-secondaryText"
          }`}
        >
          {navy ? "Download on the" : "Start your free week on the"}
        </span>
        <span className={`text-[19px] font-semibold leading-none ${navy ? "text-white" : "text-primaryText"}`}>
          App Store
        </span>
      </span>
    </a>
  );
}
