import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static output to /out (perfect for S3 + CloudFront)
  output: "export",

  // Needed for static hosting: /about/ => /about/index.html
  trailingSlash: true,

  // next/image optimization requires a server; disable for static export
  images: { unoptimized: true },
};

export default nextConfig;
