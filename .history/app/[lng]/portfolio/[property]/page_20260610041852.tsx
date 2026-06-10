import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import {
  getProperty,
  getAllPropertySlugs,
  getRelatedProperties,
} from "@/sanity/lib/property";
import { urlFor } from "@/sanity/lib/image";
import { PropertyDetailPage } from "@/components";

type Props = {
  params: Promise<{ property: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPropertySlugs(); // returns ['slug-a','slug-b']
  return slugs.map((s) => ({ property: s }));
}

//MetaData
export async function generateMetadata({
  params,
}: {
  params: { property: string };
  parent: ResolvingMetadata;
}): Promise<Metadata> {
  const { property } = await params;
  const propertyPost = await getProperty(property);
  if (!propertyPost) return {};
  const lng: string = "fr";
  const overviewText =
    lng === "en"
      ? propertyPost.overview?.[0]?.en
      : propertyPost.overview?.[0]?.fr;

  // console.log(propertyPost);
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

export default async function Home({
  params,
}: {
  params: Promise<{ property: string }>;
}) {
  const { property } = await params;
  const propertyDetail = await getProperty(property);
  const relatedProperties = await getRelatedProperties(property);

  if (!propertyDetail) {
    notFound();
  }

  return (
    <PropertyDetailPage
      property={propertyDetail}
      relatedProperties={relatedProperties}
    />
  );
}
