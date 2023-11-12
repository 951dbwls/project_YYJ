module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffb1be',//로고기본 색깔
        dark: '#ffa4b3', //클릭변화색
        light: '#ffc1cc',//클릭변화색
        lighter: '#ffe9f4', //아이콘 배경색
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
