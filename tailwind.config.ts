import type { Config } from "tailwindcss";
import c from "color2k";
const Colors = {
  text: "#e8f8f2",
  background: "#04100b",
  primary: "#9ae0c3",
  secondary: "#553172",
  accent: "#36e7a3",
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: Colors.text,
        background: Colors.background,
        foreground: c.darken(Colors.text, 0.85),
        foregroundM: c.darken(Colors.text, 0.7),
        foregroundL: c.darken(Colors.text, 0.6),
        primary: Colors.primary,
        secondary: Colors.secondary,
        accent: Colors.accent,
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
