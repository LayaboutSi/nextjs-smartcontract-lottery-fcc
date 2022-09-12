/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "./",
  },
  assetPrefix: "./",
  exportTrailingSlash: true,
};

module.exports = nextConfig;
