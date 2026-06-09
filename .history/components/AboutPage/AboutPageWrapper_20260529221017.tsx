"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const AboutPageWrapper = () => {
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
        border="1px solid rgba(255, 255, 255, 0.1)"
      />
    </>
  );
};

export default AboutPageWrapper;
