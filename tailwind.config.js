/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f6f1ea',
        stoneInk: '#1f1a17',
        warmGray: '#81776d',
        champagne: '#d7c3a7',
        taupe: '#b7aa9a',
        line: '#e9e1d8'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(31, 26, 23, 0.08)',
        card: '0 14px 40px rgba(31, 26, 23, 0.10)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at top, rgba(255,255,255,0.9), rgba(246,241,234,0.92))'
      }
    }
  },
  plugins: []
};
