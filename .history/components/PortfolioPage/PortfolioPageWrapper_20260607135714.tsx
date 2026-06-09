"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { useT } from "next-i18next/client";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import ReuseHero from "../ReUsables/ReuseHero";
import { LocationsData, TransactionData, PropertyData } from "@/types";

const PortfolioPageWrapper = ({
  transactions,
  locations,
  propertytypes,
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: PropertyData[];
}) => {
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

  console.log(transactions, locations, propertytypes);
  return (
    <>
      <Navbar
        buttonBack="var(--darkblue)"
        buttonColor="white"
        otherColor="var(--darkblue)"
        border="1px solid rgba(0, 0, 0, 0.1)"
        scrollHeight={50}
      />
      <ReuseHero
        heroText={t("portfolio:hero")}
        subText={t("portfolio:herotext")}
      />
      <Footer />
    </>
  );
};

export default PortfolioPageWrapper;
