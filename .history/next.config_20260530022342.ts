import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/fr/projets/en-planification/:project",
        destination: "/fr/projects/in-planning/:project",
        locale: false,
      },
      {
        source: "/fr/projets/references",
        destination: "/fr/projects/references",
        locale: false,
      },
      {
        source: "/fr/offrir-terrain",
        destination: "/fr/offer-land",
        locale: false,
      },
      {
        source: "/fr/confidentialite",
        destination: "/fr/privacy-policy",
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
