import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"], // Add the domain here
  },
};

export default nextConfig;
