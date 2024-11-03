import type { Config } from "tailwindcss";

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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        purple: {
          500: '#7e57c2',
        },

        cyan: {
          500: '#21c7a8',
        },

        blue: {
          100: '#d6deeb',
          200: '#5f7e97',
          400: '#82AAFF',
          700: '#1d3b53',
          800: '#0b253a',
          900: '#011627'
        },

        gray: {
          400: '#8D8D99',
          500: '#7C7C8A',
        }
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
