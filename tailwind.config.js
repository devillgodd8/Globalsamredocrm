/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#070A0F',
          900: '#0B0F17',
          850: '#101724',
          800: '#162032',
          700: '#1E293B',
        },
        brand: {
          amber: '#F59E0B',
          amberDark: '#D97706',
          cobalt: '#1D4ED8',
          cobaltDark: '#1E3A8A',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2.5rem',
        },
        screens: {
          '2xl': '1380px',
        },
      },
    },
  },
  plugins: [],
};