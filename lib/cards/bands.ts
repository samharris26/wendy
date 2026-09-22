// Size bands for generated share cards (design handoff §3). Text never gets
// an ellipsis — a long headline steps down a size instead.

export interface Band {
  size: number;
  maxEm?: number;
  lineHeight: number;
}

function pick<T>(length: number, bands: [number, T][], last: T): T {
  for (const [max, band] of bands) if (length <= max) return band;
  return last;
}

/** Link preview 1200×630 (also the post cover). */
export function linkTitleBand(text: string): Band {
  return pick(
    text.length,
    [
      [40, { size: 76, maxEm: 13, lineHeight: 1.08 }],
      [80, { size: 62, maxEm: 15, lineHeight: 1.1 }],
    ],
    { size: 54, maxEm: 17, lineHeight: 1.12 },
  );
}

/** Pinterest pin 1000×1500. */
export function pinTitleBand(text: string): Band {
  return pick(
    text.length,
    [
      [24, { size: 96, lineHeight: 1.05 }],
      [50, { size: 82, lineHeight: 1.06 }],
    ],
    { size: 70, lineHeight: 1.08 },
  );
}

/** Stat card figure. */
export function figureBand(text: string): Band {
  return pick(
    text.length,
    [
      [3, { size: 300, lineHeight: 0.9 }],
      [5, { size: 250, lineHeight: 0.9 }],
    ],
    { size: 210, lineHeight: 0.9 },
  );
}

export const QUOTE_MAX = 260;

/** Quote card. Returns null when the quote is too long to set well. */
export function quoteBand(text: string): Band | null {
  if (text.length > QUOTE_MAX) return null;
  return pick(
    text.length,
    [
      [120, { size: 86, lineHeight: 1.22 }],
      [200, { size: 72, lineHeight: 1.25 }],
    ],
    { size: 62, lineHeight: 1.28 },
  );
}

/** Carousel point titles step down over 30 characters. */
export function pointTitleBand(text: string): Band {
  return text.length > 30 ? { size: 70, maxEm: 14, lineHeight: 1.14 } : { size: 82, maxEm: 14, lineHeight: 1.14 };
}
