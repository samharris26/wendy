import fs from "fs";
import path from "path";

// Fonts for next/og. Satori can't read woff2 or variable fonts, so these are
// static Latin WOFF files from @fontsource (SIL OFL), committed in lib/cards/fonts.
const DIR = path.join(process.cwd(), "lib", "cards", "fonts");

type Weight = 400 | 500 | 600 | 700;

let cache: { name: string; data: Buffer; weight: Weight; style: "normal" }[] | null = null;

export function cardFonts() {
  if (cache) return cache;
  const load = (file: string) => fs.readFileSync(path.join(DIR, file));
  cache = [
    { name: "Playfair", data: load("playfair-display-latin-500-normal.woff"), weight: 500, style: "normal" },
    ...([400, 500, 600, 700] as Weight[]).map((weight) => ({
      name: "Jakarta",
      data: load(`plus-jakarta-sans-latin-${weight}-normal.woff`),
      weight,
      style: "normal" as const,
    })),
  ];
  return cache;
}

/** Reads a file under /public and returns a data URI (Satori needs absolute or data URLs). */
export function publicImage(src: string): string | null {
  const file = path.join(process.cwd(), "public", src.replace(/^\//, ""));
  if (!fs.existsSync(file)) return null;
  const ext = path.extname(file).slice(1).toLowerCase();
  const mime = ext === "jpg" ? "jpeg" : ext;
  return `data:image/${mime};base64,${fs.readFileSync(file).toString("base64")}`;
}
