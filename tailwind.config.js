import { nextui } from "@nextui-org/theme";

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    }
  },

  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: {
            50: "#fdd94f",
            100: "#fdd94f",
            200: "#fdd94f",
            300: "#fdd94f",
            400: "#fdd94f",
            500: "#fdd94f",
            600: "#fdd94f",
            700: "#fdd94f",
            800: "#fdd94f",
            900: "#fdd94f",
            DEFAULT: "#fdd94f",
            foreground: "#000000"
          },
          secondary: {
            50: "#1e96fc",
            100: "#1e96fc",
            200: "#1e96fc",
            300: "#1e96fc",
            400: "#1e96fc",
            500: "#1e96fc",
            600: "#1e96fc",
            700: "#1e96fc",
            800: "#1e96fc",
            900: "#1e96fc",
            DEFAULT: "#1e96fc"
          },
          focus: "#1e96fc"
        }
      },
      dark: {
        colors: {
          background: "#0e0c04",
          foreground: "#ffffff",
          primary: {
            50: "#fdd94f",
            100: "#fdd94f",
            200: "#fdd94f",
            300: "#fdd94f",
            400: "#fdd94f",
            500: "#fdd94f",
            600: "#fdd94f",
            700: "#fdd94f",
            800: "#fdd94f",
            900: "#fdd94f",
            DEFAULT: "#fdd94f",
            foreground: "#000000"
          },
          secondary: {
            50: "#1e96fc",
            100: "#1e96fc",
            200: "#1e96fc",
            300: "#1e96fc",
            400: "#1e96fc",
            500: "#1e96fc",
            600: "#1e96fc",
            700: "#1e96fc",
            800: "#1e96fc",
            900: "#1e96fc",
            DEFAULT: "#1e96fc"
          },
          focus: "#1e96fc"
        }
      }
    }
  })
  ]
};
