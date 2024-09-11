/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Brygada 1918 Variable'", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        cameo: {
          50: "#faf6f2",
          100: "#f4ebe0",
          200: "#e9d6bf",
          300: "#dec1a1",
          400: "#cb986c",
          500: "#c07f4f",
          600: "#b26c44",
          700: "#94553a",
          800: "#784634",
          900: "#613b2d",
          950: "#341d16",
        },
        equator: {
          50: "#fdf9ed",
          100: "#f8eccd",
          200: "#f1d996",
          300: "#eac264",
          400: "#e4aa3b",
          500: "#dc8c24",
          600: "#c36a1c",
          700: "#a24c1b",
          800: "#843c1c",
          900: "#6d331a",
          950: "#3e190a",
        },
      },
    },
  },
};
