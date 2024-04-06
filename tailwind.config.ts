import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "var(--at-primary-color)",
        secondary: "var(--at-secondary-color)",
        "analogous-10": "var(--at-analogous-1-color)",
        "analogous-20": "var(--at-analogous-2-color)",
        "light-10": "var(--at-light-color)",
        "med-10":"var(--at-medium-color)"
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero-image.png')",
        gradient:
          "linear-gradient(45deg, rgba(28,189,221,1) 0%, rgba(77,202,121,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
