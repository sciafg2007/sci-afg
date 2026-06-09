"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { useT } from "next-i18next/client";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import ReuseHero from "../ReUsables/ReuseHero";

const AboutPageWrapper = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

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
      />
      <ReuseHero/>
    </>
  );
};

export default AboutPageWrapper;
