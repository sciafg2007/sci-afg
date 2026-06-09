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
  const propertySlugs = await getAllPropertySlugs(); // You need to create this function

  // Generate params for both locales
  const params = [];

  for (const slug of propertySlugs) {
    params.push(
      { lng: "en", property: slug },
      { lng: "fr", property: slug }
    );
  }

  return params;
}

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { , property } = await params;
  const propertyPost = await getProperty(property);

  return {
    title: `${propertyPost.name} - SCI Hibiscus`,
    description:
      locale === "en"
        ? `${propertyPost.overview[0].en}. ${propertyPost.gallery[0].caption}`
        : `${propertyPost.overview[0].fr}. ${propertyPost.gallery[0].caption}`,
    openGraph: {
      images: [
        {
          url: urlFor(propertyPost.mainimage).width(1200).height(630).url(),
        },
      ],
    },
    applicationName: "SCI Hibiscus",
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
