import { type Config } from 'tailwindcss'
export default {
  content: [
    './src/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        greenSoft: '#c8e6c9',
        offwhite: '#f5f5f4'
      }
    }
  },
  plugins: []
} satisfies Config
