// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // ← これ！
  },
};

module.exports = nextConfig;
