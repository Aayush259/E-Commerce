/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'loading': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },

      animation: {
        'load-1': 'loading 1s ease-in-out infinite',
        'load-2': 'loading 1s ease-in-out 0.2s infinite',
        'load-3': 'loading 1s ease-in-out 0.4s infinite'
      }
    },
  },
  plugins: [],
}

