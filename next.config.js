/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/i,
      use: 'yaml-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
