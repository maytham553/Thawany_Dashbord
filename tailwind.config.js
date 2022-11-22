/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        popup: {
          '0%': { scale:0 },
          '100%': { scale:1 },
        },
        // blur: {
        //   '0%': {filter: blur(2px)} ,
        //   '100%': {filter: blur(3px)},
        // },
      },
      animation: {
        'popup': 'popup 0.2s linear ',
        'blur': 'blur 2s linear ',

      },
    },
  },
  plugins: [],
}

