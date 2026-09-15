import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

// Apple's official "Download on the App Store" badge. Rendered per Apple's
// marketing guidelines: unmodified artwork, fixed proportions (119.664 x 40),
// with clear space around it.
const BADGE_RATIO = 119.66407 / 40;

export function StoreButton({
  variant = "navy",
  height = 54,
  className = "",
}: {
  /** "navy" -> black badge (light grounds); "white" -> white badge (dark grounds) */
  variant?: "navy" | "white";
  height?: number;
  className?: string;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Noa on the App Store"
      className={`inline-block transition-opacity hover:opacity-85 ${className}`}
    >
      <Image
        src={variant === "white" ? "/app-store-badge-white.svg" : "/app-store-badge.svg"}
        alt="Download on the App Store"
        width={Math.round(height * BADGE_RATIO)}
        height={height}
        priority
      />
    </a>
  );
}
