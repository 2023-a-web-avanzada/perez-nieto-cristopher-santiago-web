/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'spotify-green': '#1ED760',
      'spotify-blue': '#082A35',
      'spotify-white': '#ffffff',
      'spotify-dark1': '#121212',
      'spotify-red': '#D62B3F',
      'spotify-grey': '#9C9C9C',
      'spotify-yellow': '#FFC865',
      'spotify-grey2': '#B5B5A9',
      'spotify-black': '#000000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
