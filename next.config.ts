import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.cloudinary.com",
        pathname: "/**",
      },
    ],
    // Enable modern image formats for better compression
    formats: ["image/avif", "image/webp"],
  },

  // Production optimizations
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression

  // Strict mode for development
  reactStrictMode: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react"], // Tree-shake icon libraries
  },
};

export default nextConfig;
