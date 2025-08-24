/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogs.digitalagents.io',
      },
      {
        protocol: 'http',
        hostname: 'blogs.digitalagents.io',
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