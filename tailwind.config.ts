import type { Config } from 'tailwindcss'
import type { PluginAPI } from 'tailwindcss/types/config'
const { SCREENS } = require('./src/utils/const')

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'section-bg-1': 'url("../../public/assets/images/section-bg-1.png")',
        'order-stages-section':
          'url("../../public/assets/images/order-stages-section-bg.png")',
      },
      colors: {
        primary: {
          '1': '#E55E25',
          '2': '#E86E3B',
          '3': '#EA7F52',
          '5': '#F0A17F',
          '6': '#F3B296',
          '9': '#FCEBE4',
        },
        secondary: {
          '3': '#FFB029',
          '4': '#FFC35C',
        },
        tertiary: {
          '1': '#1A1A1A',
          '2': '#333333',
          '4': '#666666',
          '5': '#808080',
          '9': '#E6E6E6',
          '11': '#FAFAFA',
        },
        gray: {
          '1': '#31373D',
          '2': '#3D454C',
          '3': '#49525B',
          '4': '#5F6B77',
          '5': '#778592',
          '8': '#CCD1D6',
          '9': '#E8EBED',
          '10': '#F7F7F8',
          '900': '#18181B',
        },
        semi: {
          white: 'rgba(255, 255, 255, 0.5)',
        },
        supplementary: {
          '1': '#101828',
          '2': '#2A2D2F',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      lineHeight: {
        '7': '1.875rem', // 30px
        '12': '3rem', // 48px
        '14': '3.5rem', // 56px
        '15': '3.75rem', // 60px
      },
      fontSize: {
        '2.5xl': '1.75rem', // 28px
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
      },
      width: {
        '25': '6.25rem', // 100px
      },
      maxWidth: {
        '4xl': '54.5rem', // 872px
      },
      spacing: {
        '15': '3.75rem', // 60px
        '18': '4.5rem', // 72px
        '25': '6.25rem', // 100px
      },
      height: {
        '18': '4.5rem', // 72px
        '19': '4.75rem', // 76px
        '50': '12.5rem', // 200px
      },
    },
    screens: Object.entries(SCREENS).reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: `${value}px`,
      }),
      {},
    ),
  },
  plugins: [
    function ({ addBase }: PluginAPI) {
      addBase({
        'input[type="search"]::-ms-clear': {
          display: 'none',
          width: '0px',
          height: '0px',
        },
        'input[type="search"]::-ms-reveal': {
          display: 'none',
          width: '0px',
          height: '0px',
        },

        'input[type="search"]::-webkit-search-decoration': {
          display: 'none',
        },
        'input[type="search"]::-webkit-search-cancel-button': {
          display: 'none',
        },
        'input[type="search"]::-webkit-search-results-button': {
          display: 'none',
        },
        'input[type="search"]::-webkit-search-results-decoration': {
          display: 'none',
        },
      })
    },
  ],
}

export default config
