/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/wp',
        destination: process.env.LUNG_SHAN_WORDPRESS,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
