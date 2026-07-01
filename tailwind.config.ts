import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // warm ivory paper
        cream: {
          DEFAULT: "#F7F2E7",
          deep: "#F1E8D5",
          card: "#FCFAF3",
        },
        // near-black warm ink for text
        ink: {
          DEFAULT: "#211C15",
          soft: "#6E6552",
          faint: "#9C927B",
        },
        // deep pine — the signature accent
        pine: {
          DEFAULT: "#255C4A",
          deep: "#1A4335",
          light: "#3C7A64",
        },
        // antique brass — metallic touch
        brass: {
          DEFAULT: "#B08D57",
          light: "#C6A876",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        pulseRing: {
          "0%": { transform: "scale(0.6)", opacity: "0.5" },
          "80%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        pulseRing: "pulseRing 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadeUp: "fadeUp 0.8s ease-out both",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
