import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mbcci.com.pk",
        pathname: "/wp-content/**",
      },
    ],
  },
};

export default nextConfig;
