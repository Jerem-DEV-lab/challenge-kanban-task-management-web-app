/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@kanban/ui', '@kanban/typescript'],
}

module.exports = nextConfig
