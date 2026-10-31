/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#08090a",
          secondary: "#0e1013",
          card: "#14161c",
          elevated: "#1b1e26",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.16)",
          accent: "rgba(215, 255, 56, 0.35)",
        },
        text: {
          primary: "#f4f3ee",
          secondary: "#a0a3ad",
          muted: "#626673",
        },
        accent: {
          chartreuse: "#d7ff38",
          amber: "#e8a838",
          cyan: "#38d7ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["Space Grotesk", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
