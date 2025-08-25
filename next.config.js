/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogs.coresight.net',
      },
      {
        protocol: 'http',
        hostname: 'blogs.coresight.net',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: '*.wordpress.com',
      },
      {
        protocol: 'https',
        hostname: '*.w.org',
      }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig