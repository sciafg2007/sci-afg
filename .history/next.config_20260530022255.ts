import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/fr/projets",
        destination: "/fr/projects",
        locale: false,
      },
      {
        source: "/fr/projets/projets-actuels",
        destination: "/fr/projects/current-projects",
        locale: false,
      },
      {
        source: "/fr/projets/projets-actuels/:project",
        destination: "/fr/projects/current-projects/:project",
        locale: false,
      },
      {
        source: "/fr/projets/en-planification",
        destination: "/fr/projects/in-planning",
        locale: false,
      },
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
        source: "/fr/services/a-louer",
        destination: "/fr/services/for-rent",
        locale: false,
      },
      {
        source: "/fr/services/a-vendre",
        destination: "/fr/services/for-sale",
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
