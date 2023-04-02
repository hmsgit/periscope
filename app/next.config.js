/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react']
  },
  eslint: {
    dirs: ['src', 'test', 'cypress/e2e', 'cypress/component'],
    ignoreDuringBuilds: true
  },
};

module.exports = nextConfig;
