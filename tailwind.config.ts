import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#8D7B68",
          100: "#EED6C4",
          200: "#C8B6A6BF",
          300: "#D9D9D9",
          400: "#625E5E",
          500: "#2B1B12"
        },
        light_gray: "#ECECEC",
        dark_gray: "#D9D9D9",
        dark: "#252525", 
      },
    },
  },
  plugins: [],
} satisfies Config;
