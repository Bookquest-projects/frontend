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
            50: "#66AAF9",
            100: "#66AAF9",
            200: "#66AAF9",
            300: "#66AAF9",
            400: "#66AAF9",
            500: "#66AAF9",
            600: "#66AAF9",
            700: "#66AAF9",
            800: "#66AAF9",
            900: "#66AAF9",
            DEFAULT: "#66AAF9"
          },
          focus: "#66AAF9"
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
            50: "#66AAF9",
            100: "#66AAF9",
            200: "#66AAF9",
            300: "#66AAF9",
            400: "#66AAF9",
            500: "#66AAF9",
            600: "#66AAF9",
            700: "#66AAF9",
            800: "#66AAF9",
            900: "#66AAF9",
            DEFAULT: "#66AAF9"
          },
          focus: "#66AAF9"
        }
      }
    }
  })
  ]
};
