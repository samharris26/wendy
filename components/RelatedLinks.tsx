import Link from "next/link";

type LinkItem = { href: string; label: string; tags: string[] };

// Money pages to surface from blog posts. `tags` mirror the tags the blog
// generator assigns (calendar / tasks / technology / lifestyle) so each post
// links to the most relevant product pages with keyword-rich anchors.
const LINKS: LinkItem[] = [
  { href: "/family-calendar-app", label: "Family calendar app", tags: ["calendar"] },
  { href: "/shared-family-calendar", label: "Shared family calendar", tags: ["calendar"] },
  { href: "/family-task-manager", label: "Family task manager", tags: ["tasks"] },
  { href: "/shared-task-list", label: "Shared task list", tags: ["tasks"] },
  { href: "/assign-tasks-family", label: "Assign tasks to family", tags: ["tasks"] },
  { href: "/family-shopping-list", label: "Family shopping list", tags: ["lifestyle"] },
  { href: "/family-list-app", label: "Family list app", tags: ["lifestyle"] },
  { href: "/features/whatsapp-assistant", label: "WhatsApp family assistant", tags: ["technology"] },
  { href: "/cozi-alternative", label: "The modern Cozi alternative", tags: ["calendar", "tasks"] },
];

// Always-available fallbacks so every post links out, even untagged ones.
// Must be hrefs present in LINKS above (one per product area: calendar/tasks/lists).
const DEFAULTS = ["/family-calendar-app", "/family-task-manager", "/family-shopping-list"];

export function RelatedLinks({ tags }: { tags: string[] }) {
  const tagSet = new Set(tags.map((t) => t.toLowerCase()));

  const picked: LinkItem[] = LINKS.filter((l) => l.tags.some((t) => tagSet.has(t)));

  // Top up to at least 3 links from defaults if the tags matched too few.
  if (picked.length < 3) {
    for (const href of DEFAULTS) {
      if (picked.length >= 3) break;
      const item = LINKS.find((l) => l.href === href);
      if (item && !picked.includes(item)) picked.push(item);
    }
  }

  const items = picked.slice(0, 4);
  if (items.length === 0) return null;

  return (
    <aside className="mt-10 rounded-2xl border border-primaryText/10 bg-surface p-6">
      <p className="mb-1 text-base font-semibold text-primaryText">
        Get organised with Noa
      </p>
      <p className="mb-4 text-sm text-secondaryText">
        One shared app for your family&rsquo;s calendar, tasks and lists — with WhatsApp built in.
      </p>
      <ul className="flex flex-wrap gap-2">
        {items.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-flex items-center rounded-full border border-primaryText/10 bg-card px-4 py-2 text-sm font-medium text-primaryText transition hover:border-primaryText/25 hover:bg-primaryText/5"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
