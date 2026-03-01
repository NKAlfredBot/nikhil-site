import type { NextConfig } from "next";

const isExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  ...(isExport
    ? {
        output: "export",
        basePath: "/nikhil-site",
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
