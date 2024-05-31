import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'slogan-section':
          'url("../public/assets/images/slogan_section_bg.png")',
      },
      colors: {
        primary: {
          '1': '#E55E25',
          '2': '#E86E3B',
          '5': '#F0A17F',
        },
        dark: {
          gray: '#333333',
          blue: '#31373D',
        },
        semi: {
          white: 'rgba(255, 255, 255, 0.5)',
          gray: '#FAFAFA',
        },
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      lineHeight: {
        '7': '1.875rem',
        '11': '3rem',
        '13': '3.5rem',
        '14': '3.75rem',
        '16': '5.625rem',
      },
      fontSize: {
        '3xl': '2rem',
        '4xl': '2.5rem',
        '6xl': '3.5rem',
        '7xl': '4.25rem',
      },
      maxWidth: {
        '4xl': '54.5rem',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '25': '6.25rem',
      },
    },
    screens: {
      mobile: '576px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
  },
  plugins: [],
}
export default config
