import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/en/privacy-policy",
        destination: "/en/confidentialite",
        locale: false,
      },
      {
        source: "/fr/a-propos",
        destination: "/fr/about",
        locale: false,
      },

      {
        source: "/fr/portfolio/a-louer",
        destination: "/fr/portfolio/for-rent",
        locale: false,
      },
      {
        source: "/fr/portfolio/a-vendre",
        destination: "/fr/portfolio/for-sale",
        locale: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
