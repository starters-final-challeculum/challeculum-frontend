/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mBlack: '#222831',
        mGray: '#393E46',
        mYellow: '#FFD369',
        mWhite: '#EEEEEE',
        mCream: '#F3EAC8',
      },
      '.hide-scroll::-webkit-scrollbar': {
        display: 'none',
      },
      '.hide-scroll': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    },
  },
  plugins: [],
};
