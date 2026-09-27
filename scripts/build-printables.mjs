#!/usr/bin/env node
// Builds the blog's free A4 printables into public/printables/*.pdf, in the
// design handoff's printable style (artboard 19j): white ground, ink rules,
// one blue, Playfair once (the title).
//
//   node scripts/build-printables.mjs            # all sheets
//   node scripts/build-printables.mjs chores     # sheets whose id contains "chores"
//
// Needs Google Chrome installed (uses headless --print-to-pdf).

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const OUT = path.join(ROOT, "public", "printables");
const FONTS = path.join(ROOT, "lib", "cards", "fonts");
const CHROME =
  process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");

// ---- building blocks ----

const header = (label, title) => `
  <header>
    <div class="h-left"><span class="label">${esc(label)}</span><h1>${esc(title)}</h1></div>
    <div class="lockup"><span class="sym"><i></i><i></i><i></i><i></i></span><span>Noa</span></div>
  </header>`;

const intro = (text) => `<p class="intro">${esc(text)}</p>`;

/** Ruled table. cols: [{ label, width? }]; rows: [{ main, sub?, tint? }]. First column holds the row label. */
const table = (cols, rows) => `
  <div class="table">
    <div class="tr th">${cols.map((c) => `<span style="${c.width ? `width:${c.width}px;flex:none` : "flex:1"}">${esc(c.label)}</span>`).join("")}</div>
    ${rows
      .map(
        (r) => `<div class="tr${r.tint ? " tint" : ""}">${cols
          .map((c, i) =>
            i === 0
              ? `<span class="rowlabel" style="${c.width ? `width:${c.width}px;flex:none` : "flex:1"}"><b>${esc(r.main)}</b>${r.sub ? `<small>${esc(r.sub)}</small>` : ""}</span>`
              : `<span style="${c.width ? `width:${c.width}px;flex:none` : "flex:1"}"></span>`,
          )
          .join("")}</div>`,
      )
      .join("")}
  </div>`;

const footer = (label, note) => `
  <footer>
    <div><span class="label">${esc(label)}</span><span class="rule"></span></div>
    <p>${note.map(esc).join("<br>")}</p>
  </footer>`;

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// ---- the sheets ----

const SHEETS = [
  {
    id: "half-term-planner",
    title: "Half-term planner",
    body: () =>
      header("Seasonal planner", "Half-term planner") +
      intro("Nine days. Write the plan in pencil, the childcare in pen. Shade the one day nobody has to be anywhere.") +
      table(
        [{ label: "Day", width: 96 }, { label: "Plan" }, { label: "Who's on", width: 150 }, { label: "Cost", width: 106 }],
        ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => ({ main: d, sub: "__ / __" })),
      ) +
      footer("The one quiet day", ["Half-term dates vary by council:", "check yours first. asknoa.app/blog"]),
  },
  {
    id: "sunday-reset-sheet",
    title: "The Sunday reset",
    body: () =>
      header("Weekly sheet", "The Sunday reset") +
      intro("Read the week out loud, Monday to Sunday. Write who's doing each thing. Anything that has to leave the house goes in the bag tonight.") +
      table(
        [{ label: "Day", width: 96 }, { label: "What's on" }, { label: "Who", width: 130 }, { label: "In the bag", width: 150 }],
        DAYS.map((d, i) => ({ main: d, tint: i === 0 })),
      ) +
      footer("Our quiet night this week", ["One evening with nothing in it.", "asknoa.app/blog"]),
  },
  {
    id: "chores-by-age",
    title: "Chores by age",
    body: () =>
      header("Printable chart", "Chores by age") +
      intro("Two jobs each to start. Same job, same day. A grown-up checks, every time, for the first few weeks.") +
      table(
        [{ label: "Job", width: 250 }, ...DAYS.map((d) => ({ label: d }))],
        [
          { main: "Lay the table", sub: "Age 4–6", tint: true },
          { main: "Shoes and coat away", sub: "Age 4–6" },
          { main: "Clear own plate", sub: "Age 7–9" },
          { main: "Feed the pets", sub: "Age 7–9" },
          { main: "Own washing on and away", sub: "Age 10–12" },
          { main: "Bins out", sub: "Age 10–12" },
          { main: "Cook one dinner", sub: "Age 13+" },
          { main: "Change own bed", sub: "Age 13+" },
          { main: "", sub: "Your own" },
        ],
      ) +
      footer("Name", ["Pick from the row that fits the child,", "not the one that matches their birthday. asknoa.app/blog"]),
  },
  {
    id: "meal-planner",
    title: "Weekly meal planner",
    body: () =>
      header("Weekly planner", "Dinners this week") +
      intro("Plan five, leave one for leftovers and one for the night it all goes wrong. Quick meals on the busy nights.") +
      `<div class="split">` +
      table(
        [{ label: "Day", width: 80 }, { label: "Dinner" }, { label: "Who cooks", width: 110 }],
        DAYS.map((d, i) => ({ main: d, tint: i === 2, sub: i === 2 ? "Leftovers" : "" })),
      ) +
      `<div class="list"><div class="th">Shopping list</div>${Array.from({ length: 22 }, () => `<span></span>`).join("")}</div></div>` +
      footer("Emergency dinners in the cupboard", ["Keep two. Replace them when you use them.", "asknoa.app/blog"]),
  },
  {
    id: "birthday-tracker",
    title: "Birthday and present tracker",
    body: () =>
      header("Year planner", "Birthdays and presents") +
      intro("Every date in one place. Set a reminder two weeks before each one, and jot present ideas the moment you hear them.") +
      `<div class="months">${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        .map((m) => `<div class="month"><span class="mname">${m}</span>${Array.from({ length: 4 }, () => `<span class="mline"></span>`).join("")}</div>`)
        .join("")}</div>` +
      footer("Present ideas", ["Name, idea, where you saw it.", "asknoa.app/blog"]),
  },
  {
    id: "family-packing-list",
    title: "Family packing list",
    body: () =>
      header("Holiday checklist", "Family packing list") +
      intro("A column each, plus the things the family needs. After the trip, cross off what you didn't use and keep the list.") +
      `<div class="people">${["", "", "", ""]
        .map(() => `<div class="person"><div class="th">Name</div>${Array.from({ length: 14 }, () => `<span class="box"></span>`).join("")}</div>`)
        .join("")}</div>` +
      `<div class="shared"><div class="th">Everyone</div><div class="grid2">${[
        "Passports and tickets",
        "Insurance and GHIC",
        "Every charger and an adaptor",
        "Medicines, Calpol, plasters",
        "Suncream",
        "Snacks for the journey",
        "A change of clothes each, in hand luggage",
        "Comfort toys",
      ]
        .map((t) => `<span class="check"><i></i>${esc(t)}</span>`)
        .join("")}</div></div>` +
      footer("The week before", ["Check passports months ahead. Confirm pet care,", "order currency, set the out-of-office. asknoa.app/blog"]),
  },
];

const CSS = `
@font-face { font-family: Playfair; src: url(file://${FONTS}/playfair-display-latin-500-normal.woff); font-weight: 500; }
${[400, 500, 600, 700].map((w) => `@font-face { font-family: Jakarta; src: url(file://${FONTS}/plus-jakarta-sans-latin-${w}-normal.woff); font-weight: ${w}; }`).join("\n")}
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 210mm; height: 297mm; }
body { font-family: Jakarta, sans-serif; color: #0D2B45; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { width: 210mm; height: 297mm; padding: 20mm 19mm; display: flex; flex-direction: column; background: #fff; }
.label { font: 700 11px/1 Jakarta; letter-spacing: 0.18em; text-transform: uppercase; color: #6B7789; }
header { display: flex; align-items: flex-end; justify-content: space-between; padding-bottom: 22px; border-bottom: 2px solid #0D2B45; }
.h-left { display: flex; flex-direction: column; gap: 10px; }
h1 { font: 500 44px/1 Playfair; color: #0D2B45; }
.lockup { display: flex; align-items: center; gap: 9px; font: 600 20px/1 Jakarta; }
.sym { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; width: 17px; height: 17px; }
.sym i { border-radius: 2px; background: #0D2B45; } .sym i:first-child { background: #2F6BED; } .sym i:last-child { background: #6F8FE8; }
.intro { padding: 18px 0 20px; font: 400 14px/1.5 Jakarta; color: #55637A; }
.table { flex: 1; display: flex; flex-direction: column; border: 1.5px solid #0D2B45; border-radius: 6px; overflow: hidden; }
.tr { flex: 1; display: flex; border-bottom: 1px solid #DBE2F0; }
.tr:last-child { border-bottom: 0; }
.tr > span { border-right: 1px solid #DBE2F0; padding: 12px; }
.tr > span:last-child { border-right: 0; }
.th { flex: none; background: #EFF2F7; border-bottom: 1.5px solid #0D2B45; }
.th, .th > span { font: 700 10px/1 Jakarta; letter-spacing: 0.14em; text-transform: uppercase; color: #6B7789; }
.th > span { padding: 10px 12px; }
.rowlabel { display: flex; flex-direction: column; gap: 4px; }
.rowlabel b { font: 600 15px/1.15 Jakarta; color: #0D2B45; }
.rowlabel small { font: 500 11px/1 Jakarta; color: #6B7789; }
.tint { background: #EDF2FE; } .tint .rowlabel b, .tint .rowlabel small { color: #2F6BED; }
.split { flex: 1; display: flex; gap: 16px; }
.split .table { flex: 1.7; }
.list { flex: 1; display: flex; flex-direction: column; border: 1.5px solid #0D2B45; border-radius: 6px; overflow: hidden; }
.list .th, .person .th, .shared .th { padding: 10px 12px; }
.list span { flex: 1; border-bottom: 1px solid #DBE2F0; } .list span:last-child { border-bottom: 0; }
.months { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr); gap: 12px; }
.month { border: 1.5px solid #0D2B45; border-radius: 6px; padding: 12px 12px 6px; display: flex; flex-direction: column; }
.mname { font: 600 14px/1 Jakarta; color: #0D2B45; padding-bottom: 6px; }
.mline { flex: 1; border-bottom: 1px solid #DBE2F0; } .mline:last-child { border-bottom: 0; }
.people { flex: 1; display: flex; gap: 10px; }
.person { flex: 1; display: flex; flex-direction: column; border: 1.5px solid #0D2B45; border-radius: 6px; overflow: hidden; }
.box { flex: 1; border-bottom: 1px solid #DBE2F0; } .box:last-child { border-bottom: 0; }
.shared { margin-top: 12px; border: 1.5px solid #0D2B45; border-radius: 6px; overflow: hidden; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 18px; padding: 14px 14px 16px; }
.check { display: flex; align-items: center; gap: 10px; font: 500 13px/1.3 Jakarta; color: #0D2B45; }
.check i { width: 14px; height: 14px; border: 1.5px solid #0D2B45; border-radius: 3px; flex: none; }
footer { display: flex; align-items: flex-end; justify-content: space-between; padding-top: 22px; }
footer > div { display: flex; flex-direction: column; gap: 22px; }
footer .rule { width: 260px; height: 1.5px; background: #0D2B45; }
footer p { text-align: right; font: 500 11px/1.5 Jakarta; color: #6B7789; }
`;

const filter = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "noa-printables-"));

for (const sheet of SHEETS.filter((s) => !filter || s.id.includes(filter))) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${esc(sheet.title)} · Noa</title><style>${CSS}</style></head><body><div class="page">${sheet.body()}</div></body></html>`;
  const src = path.join(tmp, `${sheet.id}.html`);
  fs.writeFileSync(src, html);
  const pdf = path.join(OUT, `${sheet.id}.pdf`);
  execFileSync(CHROME, [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--allow-file-access-from-files",
    `--print-to-pdf=${pdf}`,
    `file://${src}`,
  ], { stdio: "ignore" });
  console.log(`${path.relative(ROOT, pdf)}  ${(fs.statSync(pdf).size / 1024).toFixed(0)} KB`);
}
