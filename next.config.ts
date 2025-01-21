import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["reshaped"],
  experimental: {
    optimizePackageImports: ["reshaped"],
    // ppr: "incremental",
  },
};

export default nextConfig;
