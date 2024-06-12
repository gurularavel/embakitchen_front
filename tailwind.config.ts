import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'slogan-section':
          'url("../../public/assets/images/slogan_section_bg.png")',
      },
      colors: {
        primary: {
          '1': '#E55E25',
          '2': '#E86E3B',
          '3': '#EA7F52',
          '5': '#F0A17F',
        },
        dark: {
          gray: {
            '1': '#333333',
            '2': '#18181B',
          },
          blue: '#31373D',
        },
        semi: {
          white: 'rgba(255, 255, 255, 0.5)',
          gray: {
            '1': '#FAFAFA',
            '2': 'rgba(42, 45, 47, 0.5)',
          },
          dark: '#1A1A1A',
        },
        light: {
          gray: '#E6E6E6',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      lineHeight: {
        '7': '1.875rem', // 30px
        '11': '3rem', // 48px
        '13': '3.5rem', // 56px
        '14': '3.75rem', // 60px
        '16': '5.625rem', // 90px
      },
      fontSize: {
        '3xl': '2rem', // 32px
        '4xl': '2.5rem', // 40px
        '6xl': '3.5rem', // 56px
        '7xl': '4.25rem', // 68px
      },
      maxWidth: {
        '4xl': '54.5rem', // 872px
      },
      spacing: {
        '1.25': '0.3125rem', // 5px
        '15': '3.75rem', // 60px
        '18': '4.5rem', // 72px
        '25': '6.25rem', // 100px
      },
    },
    screens: {
      compact: '375px',
      mobile: '576px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
      widescreen: '1920px',
    },
  },
  plugins: [],
}
export default config
