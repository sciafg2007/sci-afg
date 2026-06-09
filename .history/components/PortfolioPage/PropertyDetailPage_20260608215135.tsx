"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useT } from "next-i18next/client";
import Navbar from "../Navigation/Navbar";
import PropertyHero from "./PropertyHero";
import Footer from "../Navigation/Footer";

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
  heroimages: {
    alt: string;
  }[];
  overview: {
    en: string;
    fr: string;
    _key: string;
  }[];
  otherdetails: {
    en: string;
    fr: string;
    _key: string;
  }[];
  gallery: {
    caption: string;
    type: string;
    url: string;
  }[];
}

const PropertyDetailPage = ({ property }: { property: PropertyProps }) => {
  const { t } = useT();

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
  }, []);

  return (
    <>
      <Navbar
        buttonBack="var(--darkblue)"
        buttonColor="white"
        otherColor="var(--darkblue)"
        border="1px solid rgba(0, 0, 0, 0.1)"
        scrollHeight={50}
      />
      <PropertyHero pro/>
    </>
  );
};

export default PropertyDetailPage;
