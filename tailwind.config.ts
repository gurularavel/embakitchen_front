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
        'slogan-section': 'url("../public/images/slogan_section_bg.png")',
      },
      colors: {
        // primary: '#E55E25',
        primary: {
          '2': '#E86E3B',
          '5': '#F0A17F',
        },
        // 'dark-gray': '#333333',
        // 'half-white': 'rgba(255, 255, 255, 0.5)',
        'dark-blue': '#31373D',
        'semi-white': '#FAFAFA',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      lineHeight: {
        '7.5': '30px',
        '11': '56px',
      },
      fontSize: {
        '4.5xl': '40px',
      },
      maxWidth: {
        '3.5xl': '872px',
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
