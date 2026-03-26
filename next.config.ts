import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - Unblocks cross-origin requests to Next.js dev resources for mobile testing
  allowedDevOrigins: ['192.168.1.212'],
};

export default nextConfig;
