import Image from "next/image";
import { AppStoreLink } from "./AppStoreLink";

export function AppStoreButton({
  placement,
  variant = "black",
  className = "",
}: {
  placement: string;
  variant?: "black" | "white";
  className?: string;
}) {
  return (
    <AppStoreLink
      placement={placement}
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src={variant === "white" ? "/app-store-badge-white.svg" : "/app-store-badge.svg"}
        alt="Download on the App Store"
        width={180}
        height={60}
        priority
      />
    </AppStoreLink>
  );
}
