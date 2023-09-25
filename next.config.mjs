import withPlaiceholder from "@plaiceholder/next";
import withPWA from "next-pwa";
import pwacache from "next-pwa/cache.js";

const isProduction = process.env.NODE_ENV === "production";

// PWA configuration
const pwaConfig = withPWA({
    dest: "public",
    disable: !isProduction,
    runtimeCaching: pwacache
});

// Main Next.js configuration
const nextConfig = {
    ...pwaConfig,
    images: {
        domains: ['go.develoid.net', 'images.unsplash.com', 'unsplash.com'],
        formats: ['image/webp'],
        deviceSizes: [320, 360, 400, 560, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256]
    },
};

export default withPlaiceholder(nextConfig);