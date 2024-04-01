import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#FFE81F",
              foreground: "#000",
              50: "#FFF8B7",
              100: "#FFF5A3",
              200: "#FFF28F",
              300: "#FFEF7B",
              400: "#FFE81F",
              500: "#FFDF00",
              600: "#FFD600",
              700: "#FFCC00",
              800: "#FFC200",
              900: "#FFB000",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#FFE81F",
              foreground: "#000",
              50: "#FFF8B7",
              100: "#FFF5A3",
              200: "#FFF28F",
              300: "#FFEF7B",
              400: "#FFE81F",
              500: "#FFDF00",
              600: "#FFD600",
              700: "#FFCC00",
              800: "#FFC200",
              900: "#FFB000",
            },
          },
        },
      },
    }),
  ],
  darkMode: "class",
};
export default config;
