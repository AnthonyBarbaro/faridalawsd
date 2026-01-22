import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Premium palette (black / paper / gold)
       * Add a few neutral ramps for cleaner borders & text hierarchy.
       */
      colors: {
        ink: "#0B0B0F",
        paper: "#F7F6F2",
        gold: {
          DEFAULT: "#C7A253",
          soft: "#E7D19A",
          deep: "#A67C2A",
        },

        // Neutral ramp (use for text/borders on light sections)
        neutral: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        },

        // Convenient semantic tokens for surfaces
        surface: "rgba(255,255,255,0.72)",
        "surface-strong": "rgba(255,255,255,0.92)",
        "ink-soft": "rgba(11,11,15,0.72)",
      },

      /**
       * Typography polish: consistent display scale + readable line heights
       * Use with existing fonts (Cormorant/Inter) you already configured.
       */
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "ui-serif", "Georgia", "serif"],
      },
      fontSize: {
        // Elegant, law-firm-style headline scaling
        display: ["3.25rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }], // ~52px
        "display-sm": ["2.75rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        h1: ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["1.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["1.375rem", { lineHeight: "1.25" }],
      },
      letterSpacing: {
        // For “ATTORNEY”, “PRACTICE AREAS”, etc.
        premium: "0.22em",
      },

      /**
       * Radii: softer, more modern
       */
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },

      /**
       * Shadows: more “premium” depth without looking like a SaaS dashboard
       */
      boxShadow: {
        // For cards on light background
        card: "0 1px 0 rgba(0,0,0,0.04), 0 14px 34px rgba(0,0,0,0.10)",
        // For hover emphasis
        lift: "0 1px 0 rgba(0,0,0,0.05), 0 18px 50px rgba(0,0,0,0.16)",
        // For dark hero UI pieces
        glow: "0 0 0 1px rgba(199,162,83,0.25), 0 18px 50px rgba(0,0,0,0.38)",
        // Soft inset outline
        inset: "inset 0 0 0 1px rgba(0,0,0,0.06)",
      },

      /**
       * Background gradients for hero/sections
       * Use like: className="bg-hero-sheen"
       */
      backgroundImage: {
        "hero-sheen":
          "radial-gradient(900px 450px at 20% 10%, rgba(199,162,83,0.22), transparent 58%), radial-gradient(800px 480px at 85% 0%, rgba(255,255,255,0.10), transparent 60%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(199,162,83,0.9), transparent)",
        "soft-grid":
          "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
      },

      /**
       * Motion: subtle, premium (avoid flashy)
       */
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "shine": {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 650ms ease-out both",
        "float-soft": "float-soft 7s ease-in-out infinite",
        shine: "shine 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
