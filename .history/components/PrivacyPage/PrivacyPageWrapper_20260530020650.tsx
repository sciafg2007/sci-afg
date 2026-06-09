"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { useT } from "next-i18next/client";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import ReuseHero from "../ReUsables/ReuseHero";
import PreFooter from "../HomePage/PreFooter";
import PrivacySection from "./PrivacySection";

const PrivacyPageWrapper = () => {
  const { t } = useT();
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
      <Navbar
        buttonBack="var(--darkblue)"
        buttonColor="white"
        otherColor="var(--darkblue)"
        border="1px solid rgba(0, 0, 0, 0.1)"
        scrollHeight={50}
      />
      <ReuseHero heroText={t("about:herotext")} subText={t("about:hsubtext")} />
      <PrivacySection lenis={lenis}/>
      <PreFooter />
      <Footer />
    </>
  );
};

export default PrivacyPageWrapper;
