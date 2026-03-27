import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/gb/app/noa-your-life-organised/id6760316752?itscg=30200&itsct=apps_box_link&mttnsubad=6760316752";

export function AppStoreButton({
  variant = "black",
  className = "",
}: {
  variant?: "black" | "white";
  className?: string;
}) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-opacity hover:opacity-80 ${className}`}
    >
      <Image
        src={variant === "white" ? "/app-store-badge-white.svg" : "/app-store-badge.svg"}
        alt="Download on the App Store"
        width={180}
        height={60}
        priority
      />
    </a>
  );
}
