import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'embakitchen.kvadrat.az',
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.media.amplience.net',
        port: '',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
