import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for older computers
  experimental: {
    optimizeCss: false,
    workerThreads: false,
  },
  // Reduce memory usage
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
  // Disable some heavy features
  compiler: {
    removeConsole: false,
  },
};

export default nextConfig;
