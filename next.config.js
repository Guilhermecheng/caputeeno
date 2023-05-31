/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            port: '',
            pathname: 'https://storage.googleapis.com/',
          },
        ],
        // domains: ['https://storage.googleapis.com'],
      },
}

module.exports = nextConfig
