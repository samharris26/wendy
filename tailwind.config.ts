import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        primaryText: "var(--color-primary-text)",
        secondaryText: "var(--color-secondary-text)",
        accent: "var(--color-accent)",
        charcoal: "var(--color-charcoal)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        destructive: "var(--color-destructive)",
      },
      boxShadow: {
        "surface-sm": "0 8px 24px rgba(15, 42, 74, 0.10)",
        "surface-xs": "0 2px 10px rgba(15, 42, 74, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
