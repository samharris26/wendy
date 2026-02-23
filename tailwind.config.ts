import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        primaryText: "var(--color-primary-text)",
        secondaryText: "var(--color-secondary-text)",
        accent: "var(--color-accent)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        destructive: "var(--color-destructive)"
      },
      boxShadow: {
        "surface-sm": "0 8px 24px rgba(17, 17, 17, 0.06)",
        "surface-xs": "0 2px 8px rgba(17, 17, 17, 0.04)"
      }
    }
  },
  plugins: []
};

export default config;
