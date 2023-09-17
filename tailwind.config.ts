import type { Config } from 'tailwindcss'
const { withTV } = require('tailwind-variants/transformer')

const config: Config = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gray': {
          100: "#FFFFFF",
          200: "#F4F4F4",
          300: "#D6D6D6",
          400: "#7A7A7A",
          600: "#181818",
          700: "#192235",
          900: "#0B0B0D"
        },

        'brand-blue': {
          100: '#0284c7',
          200: '#0369a1',
          300: "#30506E",
          400: "#223459"
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/typography')],
})
export default config
