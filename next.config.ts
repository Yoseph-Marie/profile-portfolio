import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Move out of experimental and place directly at the root */
  allowedDevOrigins: ["192.168.40.44", "localhost:3000"]
};

export default nextConfig;