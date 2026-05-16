import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdfbf0', 100: '#faf3d0', 200: '#f5e49a',
          300: '#eecf5a', 400: '#e6b830', 500: '#c9960f',
          600: '#a8780a', 700: '#855c0c', 800: '#6e4a11', 900: '#5c3d13',
        },
        dark: {
          50: '#f5f5f0', 100: '#e8e6df', 200: '#d0cdc2', 300: '#b0ac9e',
          400: '#8e8a7a', 500: '#706c5e', 600: '#57544a', 700: '#3e3c35',
          800: '#28261f', 900: '#16140f', 950: '#0c0b07',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        shimmer:      'goldShimmer 4s ease-in-out infinite',
        float:        'float 6s ease-in-out infinite',
        'rotate-slow':'rotateSlow 30s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        goldShimmer: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%':     { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'pulse-gold': {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(201,150,15,0.4)' },
          '50%':     { boxShadow: '0 0 0 12px rgba(201,150,15,0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #a8780a 0%, #e6b830 40%, #fdf3c0 55%, #c9960f 100%)',
        'dark-gradient': 'linear-gradient(135deg, #080705 0%, #16140f 50%, #28261f 100%)',
        'gold-radial':   'radial-gradient(ellipse at center, #e6b830 0%, #a8780a 100%)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
export default config
