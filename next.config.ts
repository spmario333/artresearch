// next.config.ts
import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.artsearch.io",
      },
    ],
  },
};
export default nextConfig;