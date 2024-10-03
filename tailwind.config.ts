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
        'slogans-section':
          'url("../../public/assets/images/slogans_section_bg.png")',
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // 'order-stages-section':
        //   'url("../../public/assets/images/order_stages_section_bg.jpg")',
      },
      colors: {
        primary: {
          '1': '#E55E25',
          '2': '#E86E3B',
          '3': '#EA7F52',
          '5': '#F0A17F',
          '9': '#FCEBE4',
        },
        secondary: {
          '4': '#FFC35C',
        },
        tertiary: {
          '1': '#1A1A1A',
          '2': '#333333',
          '4': '#666666',
          '9': '#E6E6E6',
          '11': '#FAFAFA',
        },
        gray: {
          '1': '#31373D',
          '2': '#3D454C',
          '3': '#49525B',
          '4': '#5F6B77',
          '9': '#18181B',
          '10': '#F7F7F8',
        },
        semi: {
          white: 'rgba(255, 255, 255, 0.5)',
        },
        supplementary: {
          '1': '#101828',
        },
        // dark: {
        //   gray: {
        //     '3': '#3D454C',
        //   },
        // },
        // semi: {
        //   gray: {
        //     '2': 'rgba(42, 45, 47, 0.5)',
        //     '4': '#5F6B77',
        //     '8': '#CCD1D6',
        //     '9': '#E8EBED',
        //   },
        // },
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
        // '2.5xl': '1.75rem', // 28px
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
        'input[type="search"]::-webkit-search-cancel-button': {
          display: 'none',
        },
        'input[type="search"]::-moz-search-cancel-button': {
          display: 'none',
        },
      })
    },
  ],
}
export default config
