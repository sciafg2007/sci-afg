// import type { Metadata } from "next";
import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProperty,
} from "@/sanity/lib/property";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  params: Promise<{ lng: string; property: string }>;
};

//MetaData
export async function generateMetadata({
  params,
}: {
  params: { property: string };
}): Promise<Metadata> {
  const { property } = params;
  const propertyPost = await getProperty(property);
  if (!propertyPost) return {};
  const lng: string = "fr";
  const overviewText =
    lng === "en"
      ? propertyPost.overview?.[0]?.en
      : propertyPost.overview?.[0]?.fr;

  return {
    title: `${propertyPost.name} - SCI AFG`,
    description: `${overviewText ?? ""} ${propertyPost.gallery?.[0]?.caption ?? ""}`,
    openGraph: {
      images: [
        { url: urlFor(propertyPost.mainimage).width(1200).height(630).url() },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
