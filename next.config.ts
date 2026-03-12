import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "private-user-images.githubusercontent.com"
      }
    ]
  }
};

export default nextConfig;
