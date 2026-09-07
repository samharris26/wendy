import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        card: "var(--color-card)",
        primaryText: "var(--color-primary-text)",
        secondaryText: "var(--color-secondary-text)",
        tertiaryText: "var(--color-tertiary-text)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accentSoft: "var(--color-accent-soft)",
        accentDeep: "var(--color-accent-deep)",
        interactive: "var(--color-interactive)",
        interactiveInk: "var(--color-interactive-ink)",
        interactiveTint: "var(--color-interactive-tint)",
        charcoal: "var(--color-charcoal)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        destructive: "var(--color-destructive)",
      },
      boxShadow: {
        "surface-sm": "0 1px 2px rgba(15, 41, 74, 0.05)",
        "surface-xs": "0 1px 2px rgba(15, 41, 74, 0.04)",
      },
    },
  },
  plugins: [typography],
};

export default config;
