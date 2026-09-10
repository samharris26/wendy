"use client";

import type { CSSProperties, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { track } from "@vercel/analytics";
import { appStoreUrl } from "@/lib/app-store";

/**
 * Every link to the App Store goes through here: the URL carries a campaign
 * for App Store Connect, and the click is logged as a Vercel Analytics event
 * and a DataFast goal with the placement, so downloads can be traced back to
 * the page and referrer that sent them.
 */
export function AppStoreLink({
  placement,
  className,
  style,
  children,
}: {
  placement: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <a
      href={appStoreUrl(placement)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
      data-fast-goal="app_store_click"
      data-fast-goal-placement={placement}
      onClick={() => track("App Store click", { placement, path: pathname })}
    >
      {children}
    </a>
  );
}
