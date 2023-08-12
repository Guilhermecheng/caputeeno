/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
    HYGRAPH_ACCESS_TOKEN: process.env.HYGRAPH_ACCESS_TOKEN,
  },
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
    compiler: {
      styledComponents: true,
    },
}

module.exports = nextConfig
