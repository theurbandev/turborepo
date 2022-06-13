/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://core.blacc.xyz',
        permanent: true,
      },
      {
        source: '/blog/:match*',
        destination: 'https://blog.blacc.xyz/:match*',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
