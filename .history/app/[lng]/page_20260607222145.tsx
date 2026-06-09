import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { HomePageWrapper } from "@/components";

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ lng: "en" }, { lng: "fr" }];
}

async function getTransactions() {
  const query = `*[_type == "transaction"] | order(_createdAt asc){
  nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getLocations() {
  const query = `*[_type == "location"] | order(_createdAt asc){
  cityname,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getPropertyType() {
  const query = `*[_type == "propertytype"] | order(_createdAt asc){
    nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getProperty() {
  const query = `*[_type == "property" && available ] | order(_createdAt asc){
    _id,
name,
  slug,
  price,
  quarter,
  transaction-> {
    nameen,
    namefr,
    slug
  },
  city->{
    cityname,
    slug
  },
  area,
  mainimage,
  propertytype-> {
    nameen,
    namefr,
    slug
  },
  rentpricing,
  bath,
  room
  }`;

  const data = await client.fetch(query);
  return data;
}

export default function Home() {
  const transactionData = getTransactions();
  const locationsData = getLocations();
  const propertyData = getPropertyType();
  const propertiesData = getProperty();

  const [transactions, locations, propertytypes, properties] =
    await Promise.all([
      transactionData,
      locationsData,
      propertyData,
      propertiesData,
    ]);

  return <HomePageWrapper />;
}
