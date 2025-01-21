import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["reshaped"],
  output: "export",
  experimental: {
    optimizePackageImports: ["reshaped"],
  },
};

export default nextConfig;
