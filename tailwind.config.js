/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-success': '#219653',
        'clr-danger': '#D34053',
        'clr-warning': '#FFA70B',
      },
      fontFamily: {
        serif: ['sans-serif'],
      },
      maxWidth: {
        'max-custom': '1437px',
      },
      width: {
        '96vw': '96vw',
        '90vw': '90vw',
        '80vw': '80vw',
        '70vw': '70vw',
        '60vw': '60vw',
      },
      backgroundImage: {
        // video: "url('../images/video/video.png')",
      },
      boxShadow: {
        boxShadow: '0 0px 35px 0px rgba(0, 0, 0, 0.7)',
        listShadow: '0 12px 24px rgba(0, 0, 0, 0.7)',
        default: '0px 8px 13px -3px rgba(0, 0, 0, 0.07)',
        card: '0px 1px 3px rgba(0, 0, 0, 0.12)',
        cardLow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
        switcher:
          '0px 2px 4px rgba(0, 0, 0, 0.2), inset 0px 2px 2px #FFFFFF, inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'S-xl': '1600px',
        'S-1370': '1370px',
        'S-1080': '1080px',
        'S-950': '950px',
        'S-830': '830px',
        'S-730': '730px',
        'S-630': '630px',
        'S-550': '550px',
        'S-450': '450px',
        'S-330': '330px',
      },
      zIndex: {
        999999: '999999',
        99999: '99999',
        9999: '9999',
        1000: '1000',
        999: '999',
        500: '500',
        250: '250',
        200: '200',
        150: '150',
        100: '100',
        99: '99',
        75: '75',
        9: '9',
        1: '1',
      },
    },
  },
  plugins: [],
}

