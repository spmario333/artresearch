// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/artsearch/:path*',
        destination: 'https://api.artsearch.io/:path*',
      },
    ];
  },
};

export default nextConfig;