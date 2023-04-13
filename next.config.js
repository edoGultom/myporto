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
  env: {
    PUBLIC_URL: "./public",
  },
  // images: {
  // remotePatterns: [
  //   {
  //     protocol: "https",
  //     hostname: "edogultom.github.io",
  //     pathname: "/myporto",
  //   },
  // ],
  // domains: ["https://edogultom.github.io/myporto"], //make it 'your-domain.com'
  // },

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
