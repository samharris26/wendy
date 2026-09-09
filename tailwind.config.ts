import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "var(--color-background)",
        card: "var(--color-card)",
        surface: "var(--color-surface)",
        surfaceAlt: "var(--color-surface-alt)",
        track: "var(--color-track)",

        primaryText: "var(--color-primary-text)",
        inkPanel: "var(--color-ink-panel)",
        secondaryText: "var(--color-secondary-text)",
        meta: "var(--color-meta)",
        placeholder: "var(--color-placeholder)",
        label: "var(--color-label)",

        accent: "var(--color-accent)",
        accentHover: "var(--color-accent-hover)",
        accentTint: "var(--color-accent-tint)",
        // kept so existing components keep resolving
        interactive: "var(--color-accent)",
        interactiveInk: "var(--color-accent-hover)",
        interactiveTint: "var(--color-accent-tint)",
        accentSoft: "var(--color-accent-tint)",
        accentDeep: "var(--color-accent-hover)",

        border: "var(--color-border)",
        hairline: "var(--color-hairline)",
        hairlineNavy: "var(--color-hairline-navy)",
        dashed: "var(--color-dashed)",

        danger: "var(--color-danger)",
        dangerTint: "var(--color-danger-tint)",
        success: "var(--color-success)",
        destructive: "var(--color-danger)",

        onNavyBody: "var(--color-on-navy-body)",
        onNavyMeta: "var(--color-on-navy-meta)",
        onNavyMuted: "var(--color-on-navy-muted)",

        calA: "var(--color-cal-a)",
        calB: "var(--color-cal-b)",
        calC: "var(--color-cal-c)",
        calD: "var(--color-cal-d)",
      },
      boxShadow: {
        button: "0 16px 34px -18px rgba(13,43,69,0.7)",
        docked: "0 18px 40px -18px rgba(13,43,69,0.7)",
        phone: "0 40px 80px -30px rgba(13,43,69,0.55)",
        featured: "0 24px 50px -26px rgba(13,43,69,0.5)",
        "surface-sm": "0 8px 20px -10px rgba(13,43,69,0.3)",
        "surface-xs": "0 8px 20px -12px rgba(13,43,69,0.25)",
      },
    },
  },
  plugins: [typography],
};

export default config;
