"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import QuickSearch from "./QuickSearch";
import HomeProperties from "./HomeProperties";
import HomeAbout from "./HomeAbout";
import OurProcess from "./OurProcess";
import PreFooter from "./PreFooter";
import MarqueeClients from "./MarqueeClients";
import Footer from "../Navigation/Footer";
import { LocationsData, TransactionData } from "@/types";

interface PropertyProps {
  _id: string;
  area: number;
  bath?: number | null;
  parlour?: number | null;
  room?: number | null;
  price: number;
  name: string;
  propertytype: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  transaction: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  quarter: string;
  city: {
    cityname: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  rentpricing: string;
  mainimage: {
    alt: string;
  };
}

const HomePageWrapper = ({
  transactions,
  locations,
  propertytypes,
  properties,
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: TransactionData[];
  properties: PropertyProps[];
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);

  return (
    <>
      {/* <Navbar
        buttonBack="rgba(255, 255, 255, 0.1)"
        buttonColor="white"
        otherColor="white"
        border="1px solid transparent"
        scrollHeight={300}
      /> */}
      <HomeHero />
      {/* <QuickSearch
        transactions={transactions}
        locations={locations}
        propertytypes={propertytypes}
      />
      <HomeProperties properties={properties} />
      <HomeAbout />
      <OurProcess /> */}
      {/* <MarqueeClients /> */}
      {/* <PreFooter />
      <Footer /> */}
    </>
  );
};

export default HomePageWrapper;
