// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.artsearch.io",
      },
      {
        protocol: "https",
        hostname: "nekos.best",
      },
    ],
  },
};
export default nextConfig;