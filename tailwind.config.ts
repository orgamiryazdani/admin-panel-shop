/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
// import tailwindFormPlugin from "@tailwindcss/forms";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[class="dark-mode"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          // 900: "var(--color-secondary-900)",
          // 800: "var(--color-secondary-800)",
          // 700: "var(--color-secondary-700)",
          // 600: "var(--color-secondary-600)",
          // 500: "var(--color-secondary-500)",
          // 400: "var(--color-secondary-400)",
          // 300: "var(--color-secondary-300)",
          // 200: "var(--color-secondary-200)",
          // 100: "var(--color-secondary-100)",
        },
        secondary: {
          900: "var(--color-secondary-900)",
          800: "var(--color-secondary-800)",
          700: "var(--color-secondary-700)",
          600: "var(--color-secondary-600)",
          500: "var(--color-secondary-500)",
          400: "var(--color-secondary-400)",
          300: "var(--color-secondary-300)",
          200: "var(--color-secondary-200)",
          100: "var(--color-secondary-100)",
        },
        success: withOpacity("--color-success"),
        warning: withOpacity("--color-warning"),
        error: withOpacity("--color-error"),
      },
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },
    },
  },
  // plugins: [
  //   tailwindFormPlugin({
  //     strategy: "class",
  //   }),
  // ],
};