/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 's3storage.duoples.com',
          port: '',
          pathname: '/local-media/ecommerce/blog/image/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  