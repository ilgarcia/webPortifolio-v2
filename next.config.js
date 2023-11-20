/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  images: { domains: ['cdn.sanity.io'] }
  // , formats: ['image/avif', 'image/webp'],
};

module.exports = nextConfig;
