"use client";

import React, {useEffect, useState} from "react";
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

const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const newsletterRef = useRef<HTMLDivElement | null>(null);

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
      <Navbar />
      <HomeHero />
      <QuickSearch />
      <HomeProperties />
      <HomeAbout />
      <OurProcess />
      <MarqueeClients />
      <PreFooter />
      <Footer />
    </>
  );
};

export default HomePageWrapper;
