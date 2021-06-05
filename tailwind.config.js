module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        twitter: {
          primary: '#1DA1F2',
          hover: '#1da1f21a',
          hoverTweet: '#ffffff08',
          buttonHover: '#1a91da',
          background: '#192734',
          gray: '#8899a6',
          light: '#253341'
        }
      },
      flex: {
        'left-bar': '2 0 255px',
        'right-bar': '3 0 350px',
        'main-content': '5 1 600px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
