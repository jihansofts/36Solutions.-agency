/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["flagcdn.com"],
  },
};

module.exports = nextConfig;
