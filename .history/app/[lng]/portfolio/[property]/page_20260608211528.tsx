import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperty, getAllPropertySlugs } from "@/sanity/lib/property";
import { urlFor } from "@/sanity/lib/image";
import { PropertyDetailPage } from "@/components";

type Props = {
  params: Promise<{ lng: string; property: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPropertySlugs(); // returns ['slug-a','slug-b']
  return slugs.map((s) => ({ property: s }));
}

//MetaData
export async function generateMetadata({ params }: { params: { property: string } }): Promise<Metadata> {
  const { property } = params;
  const propertyPost = await getProperty(property);
  if (!propertyPost) return {};
  const lng = "fr"; // or detect via defaultLocale or request if needed
  const overviewText = lng==="en" ? propertyPost.overview?.[0]?.en : propertyPost.overview?.[0]?.fr;
  return {
    title: `${propertyPost.name} - SCI AFG`,
    description: `${overviewText ?? ""} ${propertyPost.gallery?.[0]?.caption ?? ""}`,
    openGraph: {
      images: [{ url: urlFor(propertyPost.mainimage).width(1200).height(630).url() }],
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

  if (!propertyDetail) {
    notFound();
  }

  return <PropertyDetailPage property={propertyDetail} />;
}
