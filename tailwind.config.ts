/* eslint-disable @typescript-eslint/no-require-imports */

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      colors: {
        primary: "#6919FF",
        neutrals: {
          900: "#060918",
          800: "#161A2C",
          700: "#23263B",
          600: "#2E364F",
          500: "#4D5775",
          400: "#6F7A9B",
          300: "#96A1C0",
          200: "#C7D0E5",
          100: "#F0F2FE",
          50: "#FFFEF9",
        },
        success: "#22da6e",
        warning: "#ffeb95",
        error: "#EF5350",
        info: "#64B5F6",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      typography: ({ theme }: { theme: (key: string) => string }) => ({
        primary: {
          css: {
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-invert-links": theme("colors.primary"),
          },
        },
        neutrals: {
          css: {
            "--tw-prose-body": theme("colors.neutrals[300]"),
            "--tw-prose-headings": theme("colors.neutrals[50]"),
            "--tw-prose-lead": theme("colors.neutrals[400]"),
            "--tw-prose-bold": theme("colors.neutrals[100]"),
            "--tw-prose-counters": theme("colors.neutrals[400]"),
            "--tw-prose-bullets": theme("colors.neutrals[600]"),
            "--tw-prose-hr": theme("colors.neutrals[700]"),
            "--tw-prose-quotes": theme("colors.neutrals[100]"),
            "--tw-prose-quote-borders": theme("colors.neutrals[600]"),
            "--tw-prose-captions": theme("colors.neutrals[400]"),
            "--tw-prose-kbd": theme("colors.neutrals[100]"),
            "--tw-prose-code": theme("colors.neutrals[100]"),
            "--tw-prose-pre-code": theme("colors.neutrals[300]"),
            "--tw-prose-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-th-borders": theme("colors.neutrals[600]"),
            "--tw-prose-td-borders": theme("colors.neutrals[700]"),
          },
        },
      }),
    },
  },

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
