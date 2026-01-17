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
        cream: '#F9F6F2',
        mist: '#F4EFEA',
        blush: '#E9C9C3',
        rose: '#D7A5A0',
        sage: '#C6D2C1',
        pine: '#5E6F64',
        stone: '#B7AFA8',
        ink: '#2F2A27',
        cocoa: '#5F5B55',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(47, 42, 39, 0.08)',
        lift: '0 16px 40px rgba(47, 42, 39, 0.12)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at top, rgba(233, 201, 195, 0.6), rgba(249, 246, 242, 0) 55%)',
      },
    }
  },
  plugins: []
}
