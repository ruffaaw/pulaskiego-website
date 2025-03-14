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
        background: "#bdc4b4",
        foreground: "#1a1c17",
        "green-spring": {
          "50": "#f3f4f1",
          "100": "#e4e7e0",
          "200": "#bdc4b4",
          "300": "#acb5a1",
          "400": "#8e9982",
          "500": "#727d65",
          "600": "#58624e",
          "700": "#464d3e",
          "800": "#3a3f35",
          "900": "#33382f",
          "950": "#1a1c17",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
