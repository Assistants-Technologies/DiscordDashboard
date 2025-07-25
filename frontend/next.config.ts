import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['https://dbd.assts.tech'],
    images: {
        domains: ['images.unsplash.com', 'i.pravatar.cc'],
    },
};

export default nextConfig;
