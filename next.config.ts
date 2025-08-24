import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iamges.pexels.com",
      },
    ],
  },
};

export default nextConfig;
