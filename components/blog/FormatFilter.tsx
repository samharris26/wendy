"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";

/**
 * Filter pills for the blog index. Filtering is client-side: cards carry
 * data-format and are hidden with a class, so there's no page load and every
 * post stays in the HTML for crawlers.
 */
export function FormatFilter({ formats }: { formats: { id: string; label: string }[] }) {
  const [active, setActive] = useState("all");

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-blog-grid] [data-format]").forEach((el) => {
      el.classList.toggle("hidden", active !== "all" && el.dataset.format !== active);
    });
    const empty = document.querySelector<HTMLElement>("[data-blog-empty]");
    if (empty) {
      const visible = document.querySelectorAll("[data-blog-grid] [data-format]:not(.hidden)").length;
      empty.classList.toggle("hidden", visible > 0);
    }
  }, [active]);

  const pills = [{ id: "all", label: "All" }, ...formats];
  return (
    <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:px-0" role="tablist" aria-label="Filter posts">
      {pills.map((p) => (
        <button
          key={p.id}
          type="button"
          role="tab"
          aria-selected={active === p.id}
          onClick={() => {
            setActive(p.id);
            if (p.id !== "all") track("Blog filter", { format: p.id });
          }}
          className={`flex h-[34px] flex-none items-center whitespace-nowrap rounded-full px-[17px] text-[13px] transition-colors md:h-[38px] md:text-sm ${
            active === p.id ? "bg-primaryText font-semibold text-white" : "bg-card font-medium text-secondaryText hover:text-primaryText"
          }`}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}
