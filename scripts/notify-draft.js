// Emails Sam when a new blog draft PR is ready to review (Resend REST API).
//
//   node scripts/notify-draft.js --slug <slug> --title "<title>" --pr <url> [--dry-run]
//
// Env: RESEND_API_KEY (required unless --dry-run), NOTIFY_EMAIL (defaults to Sam).
// The share-card links point at the PR's Vercel preview once it has deployed;
// the PR itself carries the preview URL from the Vercel bot.

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, all) => (a.startsWith("--") ? [...acc, [a.slice(2), all[i + 1]?.startsWith("--") ? true : all[i + 1] ?? true]] : acc), []),
);

const TO = process.env.NOTIFY_EMAIL || "samharris26@gmail.com";
const FROM = "Noa blog <hello@asknoa.app>";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

function html({ title, pr, slug }) {
  return `<!doctype html><html><body style="margin:0;background:#EAEEF8;font-family:'Plus Jakarta Sans',Helvetica,Arial,sans-serif;color:#0D2B45">
  <div style="max-width:560px;margin:0 auto;padding:32px 20px">
    <p style="margin:0 0 8px;font-size:11px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:#7C89A0">New draft to review</p>
    <h1 style="margin:0 0 16px;font-family:'Playfair Display',Georgia,serif;font-weight:500;font-size:28px;line-height:1.15">${esc(title)}</h1>
    <p style="margin:0 0 20px;font-size:16px;line-height:1.55;color:#55637A">The next blog post is drafted and waiting as a draft pull request. Nothing is published until you merge it.</p>
    <p style="margin:0 0 24px"><a href="${esc(pr)}" style="display:inline-block;background:#2F6BED;color:#fff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 22px;border-radius:20px">Open the draft</a></p>
    <div style="background:#fff;border-radius:26px;padding:22px 24px;font-size:15px;line-height:1.6;color:#55637A">
      <p style="margin:0 0 8px;font-weight:600;color:#0D2B45">It just needs a read-through</p>
      <p style="margin:0">There's nothing to fill in. Read it, change anything that doesn't sound like you, and merge. The share images are on the Vercel preview at <code>/blog/${esc(slug)}/share</code>.</p>
    </div>
    <p style="margin:24px 0 0;font-size:13px;color:#6B7789">If it isn't worth editing, close the PR. The brief is marked done either way.</p>
  </div></body></html>`;
}

async function main() {
  const { slug, title, pr } = args;
  if (!slug || !title || !pr) throw new Error("Usage: --slug <slug> --title <title> --pr <url>");
  const body = { from: FROM, to: [TO], subject: `Blog draft ready: ${title}`, html: html({ title, pr, slug }) };
  if (args["dry-run"]) {
    console.log(JSON.stringify({ ...body, html: `${body.html.length} chars` }, null, 2));
    return;
  }
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is not set");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${JSON.stringify(json)}`);
  console.log(`Emailed ${TO} (${json.id})`);
}

main().catch((err) => {
  console.error("Draft notification failed:", err.message);
  process.exit(1);
});
