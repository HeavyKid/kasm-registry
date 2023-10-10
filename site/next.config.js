/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'HeavyKid Technologies',
    description: 'The HeavyKid store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://heavykid.github.io/kasm-registry/',
    contactUrl: 'https://github.com/HeavyKid/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
