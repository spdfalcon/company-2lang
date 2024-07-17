import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      backgroundImage: {},
      fontFamily: {
        // yekanbakh: "yekanbakh",
        // cinema: "cinema",
        cinema: ["var(--font-cinema)"],
        yekanbakh: ["var(--font-yekanbakh)"],
      },
      colors: {
        background: "#030712",
        primery_orang: "#FFC828",
        primery_red: "#E65526",
        main_blue: "#5200FF",
        main_dark: "#0E121E",
        second_dark: "#090D18",
        light_text: "#A9A9A9",
        gray_text: "#ffffff70",
        badge: "#808080",
      },
    },
  },
  plugins: [],
};
export default config;
