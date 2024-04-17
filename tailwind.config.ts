import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        yekanbakh: "yekanbakh",
        cinema: "cinema",
      },
      colors: {
        background: "#030712",
        primery_orang: "#FFC828",
        primery_red: "#E65526",
        main_blue: "#5200FF",
        main_dark: "#0E121E",
      },
    },
  },
  plugins: [],
};
export default config;
