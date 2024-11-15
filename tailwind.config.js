/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'product-card-shadow': '0 5px 15px rgba(0, 0, 0, 0.35)',
        'product-card-shadow-hover': '0 1px 4px rgba(0, 0, 0, 0.16), 0 0 0 2px #333',
      },

      keyframes: {
        'loading': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'toast': {
          '0%': { width: '100%' },
          '100%': { width: '0%' }
        }
      },

      animation: {
        'load-1': 'loading 1s ease-in-out infinite',
        'load-2': 'loading 1s ease-in-out 0.2s infinite',
        'load-3': 'loading 1s ease-in-out 0.4s infinite',
        'in': 'in 0.2s ease-in-out',
        'toast': 'toast 4s linear forwards'
      }
    },
  },
  plugins: [],
}
