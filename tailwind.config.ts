import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F1E7",
        plate: "#FBF8F1",
        ink: {
          DEFAULT: "#1F1B16",
          muted: "#615A4D",
          faint: "#9A907F",
        },
        pine: {
          DEFAULT: "#23574A",
          deep: "#183F35",
        },
        brass: "#A8834C",
        land: {
          DEFAULT: "#E9E0CC",
          edge: "#CFC2A4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        plate: "72rem",
        prose: "40rem",
      },
    },
  },
  plugins: [],
};

export default config;
