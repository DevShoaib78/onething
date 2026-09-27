import type { NextConfig } from "next";

// Built as a static site (out/) so Cloudflare serves it as plain files; see wrangler.jsonc.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 1080, 1440, 1920],
    imageSizes: [96, 256, 384],
  },
};

export default nextConfig;
