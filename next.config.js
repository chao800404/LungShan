/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/wp',
        destination: 'https://nwz.aph.mybluehost.me/wp-admin/',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['nwz.aph.mybluehost.me'],
  },
}

module.exports = nextConfig
