import { visit } from "unist-util-visit";
import type { Root } from "mdast";

// Turns the blog's markdown directives into the five inline blocks from the
// design handoff (stat, pull quote, app moment, printable, checklist).
//
//   :::stat{figure="1 in 3" source="ONS, 2025"}
//   of parents say …          <- caption
//   :::
//
//   :::quote
//   The line worth pulling out.
//   :::
//
//   ::app{src="/images/home.png" caption="…"}
//   ::printable{pdf="/printables/x.pdf" title="…" body="…"}
//
//   :::checklist{label="The whole routine"}
//   - one
//   - two
//   :::
//
// Styling lives in app/blog/blog.css under the `blog-` classes.

const TICK =
  '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2F6BED" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7"/></svg>';
const DOWNLOAD =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>';

function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Plain text of a node's children (captions are written as a paragraph).
function textOf(node: { children?: unknown[]; value?: string }): string {
  if (typeof node.value === "string") return node.value;
  return (node.children ?? [])
    .map((c) => textOf(c as { children?: unknown[]; value?: string }))
    .join("");
}

type DirectiveNode = {
  type: "containerDirective" | "leafDirective" | "textDirective";
  name: string;
  attributes?: Record<string, string | null | undefined>;
  children: unknown[];
  data?: Record<string, unknown>;
};

export class DirectiveError extends Error {}

export function remarkBlogDirectives() {
  return (tree: Root) => {
    visit(tree, (node, index, parent) => {
      if (
        node.type !== "containerDirective" &&
        node.type !== "leafDirective" &&
        node.type !== "textDirective"
      )
        return;
      const d = node as unknown as DirectiveNode;
      const a = d.attributes ?? {};
      const replace = (html: string) => {
        if (parent && typeof index === "number") {
          (parent.children as unknown[])[index] = { type: "html", value: html };
        }
      };

      switch (d.name) {
        case "stat": {
          if (!a.figure || !a.source) {
            throw new DirectiveError(":::stat needs both figure and source");
          }
          const caption = textOf(d).trim();
          replace(
            `<aside class="blog-block blog-stat"><span class="blog-stat-figure">${esc(a.figure)}</span>` +
              `<span class="blog-stat-text"><span class="blog-stat-caption">${esc(caption)}</span>` +
              `<span class="blog-stat-source">${esc(a.source)}</span></span></aside>`,
          );
          return;
        }
        case "quote": {
          const by = a.by ?? "Sam · Founder of Noa";
          replace(
            `<figure class="blog-block blog-pullquote"><blockquote>&ldquo;${esc(textOf(d).trim())}&rdquo;</blockquote>` +
              `<figcaption>${esc(by)}</figcaption></figure>`,
          );
          return;
        }
        case "app": {
          replace(
            `<figure class="blog-block blog-app"><div class="blog-phone"><img src="${esc(a.src ?? "/images/home.png")}" alt="${esc(a.alt ?? "Noa app screenshot")}" loading="lazy"/></div>` +
              `<figcaption><span class="blog-label">In the app</span><span class="blog-app-caption">${esc(a.caption ?? textOf(d).trim())}</span></figcaption></figure>`,
          );
          return;
        }
        case "printable": {
          const rows = Array.from({ length: 5 }, (_, i) => `<span class="${i === 2 ? "on" : ""}"></span>`).join("");
          replace(
            `<aside class="blog-block blog-printable"><div class="blog-printable-thumb" aria-hidden="true"><span class="t">${esc(a.title)}</span><span class="r"></span><span class="rows">${rows}</span></div>` +
              `<div class="blog-printable-text"><span class="blog-label">Free PDF · A4</span><span class="blog-printable-title">${esc(a.title)}</span><span class="blog-printable-body">${esc(a.body ?? "Print it once, use it every week. No email needed.")}</span></div>` +
              `<a class="blog-button" href="${esc(a.pdf)}" download>${DOWNLOAD}<span>Download</span></a></aside>`,
          );
          return;
        }
        case "checklist": {
          // Keep the markdown list so items can hold links/emphasis; the
          // wrapper and label come from hast properties.
          d.data = {
            hName: "div",
            hProperties: { className: ["blog-block", "blog-checklist"] },
          };
          if (a.label) {
            d.children.unshift({
              type: "paragraph",
              data: { hName: "span", hProperties: { className: ["blog-label"] } },
              children: [{ type: "text", value: a.label }],
            });
          }
          visit(d as never, "listItem", (li: { children: unknown[] }) => {
            li.children.unshift({ type: "html", value: `<span class="blog-tick">${TICK}</span>` });
          });
          return;
        }
        default:
          // Unknown directive: leave text as written so nothing silently vanishes.
          if (parent && typeof index === "number" && d.type === "textDirective") {
            (parent.children as unknown[])[index] = { type: "text", value: `:${d.name}` };
          }
      }
    });
  };
}
