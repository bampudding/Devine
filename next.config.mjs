/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {hostname: "hserv.reswns0210.org"},
            {hostname: "images.unsplash.com"},
            {hostname: "unsplash.com"},
        ],
        formats: ['image/webp'],
        deviceSizes: [320, 360, 400, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256]
    },
};

export default nextConfig
