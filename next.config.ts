import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  // @ts-ignore - To prevent potential TS errors if types are slightly outdated
  allowedDevOrigins: ["192.168.1.160"],
};

export default nextConfig;
