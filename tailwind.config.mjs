/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
      },
    },
  },
};
