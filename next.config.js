/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // env: {
  //   PUBLIC_URL: "https://edogultom.github.io/myporto",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edogultom.github.io",
        pathname: "/myporto",
      },
    ],
  },
};

module.exports = nextConfig;
