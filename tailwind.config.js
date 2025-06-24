/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        rosasuave: '#F7E6E1',
        salviaclaro: '#C8D5B9',
        crudo: '#FAF8F5',
        grispiedra: '#A8A8A8',
        musgoprofundo: '#6B7F6A',
        rosaintenso: '#D6A5A1',
        textoprincipal: '#333333',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: []
}
