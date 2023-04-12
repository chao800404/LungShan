const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    minWidth: {
      40: '40rem',
      '1/2': '50%',
    },
    extend: {
      boxShadow: {
        body: '0 0 0 1px #d9d9d9',
      },
      textColor: {
        primaryBlue: '#05c',
        primaryGray500: '#959595',
      },
      borderColor: {
        primaryBlue: '#05c',
      },
      colors: {
        primary: '#FAFFFF',
        primaryBlack: '#1c1c1c',
        primaryGray: '#C0C0C0',
        primaryOrange: '#D18966',
        primaryBrown: '#593333',
      },
      backgroundColor: {
        primaryBlue: '#05c',
      },
    },
    fontFamily: {
      primary: ['var(--lora-font)', ...fontFamily.sans],
      serif: ['var(--lora-font)', ...fontFamily.serif],
    },
    gridTemplateColumns: {
      layout: 'minmax(0 , 1fr) minmax(min-content , 1680px) minmax(0 , 1fr)',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1365px',
      '2xl': '1680px',
    },
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
        h4: { fontSize: config('theme.fontSize.md') },
      })
    }),
  ],
}
