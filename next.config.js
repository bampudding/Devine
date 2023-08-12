/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
        domains: ['images.unsplash.com', 'go.develoid.net'],
        formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
}