/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/*.html',
    './public/assets/js/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": {
          10: "#fef6f3",
          20: "#feeee7",
          30: "#fde5db",
          40: "#fdddcf",
          50: "#fcd4c3",
          60: "#fbcbb7",
          70: "#fbc3ab",
          80: "#faba9f",
          90: "#fab293",
          100: "#f9a987",
          200: "#f89a73",
          300: "#f78c5f",
          400: "#f67d4b",
          500: "#f56f37",
          600: "#dd6432",
          700: "#c4592c",
          800: "#ac4e27",
          900: "#934321",
        },
        "secondary": {
          10: "#f2fbfa",
          20: "#e6f7f6",
          30: "#d9f4f1",
          40: "#ccf0ed",
          50: "#c0ece8",
          60: "#b3e8e3",
          70: "#a6e4df",
          80: "#99e1da",
          90: "#8dddd6",
          100: "#80d9d1",
          200: "#6bd3c9",
          300: "#56cdc1",
          400: "#41c6ba",
          500: "#2cc0b2",
          600: "#28ada0",
          700: "#239a8e",
          800: "#1f867d",
          900: "#1a736b",
        },
        "tertiary": {
          100: "#DDDCDA",
          200: "#BBB8B4",
          300: "#99958F",
          400: "#777169",
          500: "#554E44",
          600: "#443E36",
          700: "#332F29",
          800: "#221F1B",
          900: "#11100E",
        },
        "green": {
          "light": "#1FA71F",
          "dark": "#198619",
        },
        "cyan": "#008080",
        "dark": "#554E44",
        "light": "#ffffff",
        "gray": {
          1: "#F9F9F9",
          2: "#EDEDED",
          3: "#CBCBCB",
          4: "#757575",
        }
      },
      saturate: {
        25: '.25',
        75: '.75',
        105: '1.05',
        110: '1.1',
        115: '1.15',
        120: '1.2',
        125: '1.25',
        130: '1.3',
        135: '1.35',
        140: '1.4',
        145: '1.45',
      },
      aspectRatio: {
        '2/1': '2 / 1',
        '3/1': '3 / 1',
        '1/2': '1 / 2',
        '4/3': '4 / 3',
      },
      keyframes: {
        off: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.2)' },
          '50%': { transform: 'rotate(3deg) scale(1)' },
        },
        scale: {
          '0%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '.9' },
        },
        type: {
          '0%': { visible: 'visible', opacity: '1' },
          '100%': { visible: 'hidden', opacity: '0' },
        }
      },
      animation: {
        off: 'off 1s ease-in-out infinite',
        scale: 'scale .5s ease-in-out alternate infinite',
        type: 'type .5s ease-in-out alternate infinite',
      },
      fontFamily: {
        "Dana": "Dana",
        "Lalezar" : "Lalezar",
      },
      spacing: {
        "30" : "7.5rem"
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.625rem',
      },
      },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    fontSize: {
      xs: ['.75rem', '1.7'],
      sm: ['0.875rem', '1.7'],
      base: ['1rem', '1.7'],
      lg: ['1.125rem', '1.7'],
      xl: ['1.25rem', '1.7'],
      '2xl': ['1.5rem', '1.7'],
      '3xl': ['1.875rem', '1.7'],
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('child-third', '& > * > a');
      addVariant('child-td', '& > * > td');
    },
    require('tailwind-scrollbar-hide'),
    require('@xpd/tailwind-3dtransforms')
  ],
}

