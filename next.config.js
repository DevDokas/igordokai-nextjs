/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'export',
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
