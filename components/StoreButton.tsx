import Image from "next/image";
import { AppStoreLink } from "./AppStoreLink";

// Apple's official "Download on the App Store" badge. Rendered per Apple's
// marketing guidelines: unmodified artwork, fixed proportions (119.664 x 40),
// with clear space around it.
const BADGE_RATIO = 119.66407 / 40;

export function StoreButton({
  placement,
  variant = "navy",
  height = 54,
  className = "",
}: {
  /** Where this button sits on the site — tags the App Store campaign and the click event. */
  placement: string;
  /** "navy" -> black badge (light grounds); "white" -> white badge (dark grounds) */
  variant?: "navy" | "white";
  height?: number;
  className?: string;
}) {
  return (
    <AppStoreLink
      placement={placement}
      ariaLabel="Download Noa on the App Store"
      className={`inline-block transition-opacity hover:opacity-85 ${className}`}
    >
      <Image
        src={variant === "white" ? "/app-store-badge-white.svg" : "/app-store-badge.svg"}
        alt="Download on the App Store"
        width={Math.round(height * BADGE_RATIO)}
        height={height}
        priority
      />
    </AppStoreLink>
  );
}
