"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { useT } from "next-i18next/client";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import ReuseHero from "../ReUsables/ReuseHero";
import MissionVision from "./MissionVision";
import Team from "./Team";
import PreFooter from "../HomePage/PreFooter";
import ClientsConfidence from "./ClientsConfidence";

const AboutPageWrapper = () => {
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
      <ReuseHero heroText={t("about:herotext")} subText={t("about:hsubtext")} />
      <MissionVision />
      <Team />
      <ClientsConfidence />
      <PreFooter />
      <Footer />
    </>
  );
};

export default AboutPageWrapper;
