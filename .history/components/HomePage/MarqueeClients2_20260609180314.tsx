"use client";

import React, { useRef } from "react";
import { useT } from "next-i18next/client";
import AP from "@/utils/CompanyLogos/AP";
import Camtel from "@/utils/CompanyLogos/Camtel";
import Eneo from "@/utils/CompanyLogos/Eneo";
import Hysacam from "@/utils/CompanyLogos/Hysacam";
import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
import Noble from "@/utils/CompanyLogos/Noble";
import OIM from "@/utils/CompanyLogos/OIM";
import Razel from "@/utils/CompanyLogos/Razel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import styles from "../../styles/HomePage/marquee.module.scss";

const MarqueeClients2 = () => {
  const { t } = useT();

  const iconsData = [
    {
      icon: Eneo,
      width: "130px",
    },
    {
      icon: Camtel,
      width: "100px",
    },

    {
      icon: OIM,
      width: "140px",
    },
    {
      icon: AP,
      width: "130px",
    },
    {
      icon: Razel,
      width: "180px",
    },
    {
      icon: Noble,
      width: "160px",
    },

    {
      icon: Hysacam,
      width: "150px",
    },
    {
      icon: Isstmadd,
      width: "130px",
    },
  ];

  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(firstSlide.current, { xPercent });
    gsap.set(secondSlide.current, { xPercent });
    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: 20000,
        scrub: 1,
        onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
      },
      // x: "-150px",
    });
    requestAnimationFrame(animation);
  });

  return (
    <div className={styles.marque}>
      <div className={styles.main__marquee2} ref={sliderRef}>
        <div className={styles.mm__one} ref={firstSlide}>
          {iconsData.map((data, i) => (
            <div
              className={styles.iconwrap}
              key={i}
              style={{ width: data.width }}
            >
              <data.icon />
            </div>
          ))}
          {iconsData.map((data, i) => (
            <div
              className={styles.iconwrap}
              key={i}
              style={{ width: data.width }}
            >
              <data.icon />
            </div>
          ))}
        </div>
        <div className={styles.mm__one2} ref={secondSlide}>
          {iconsData.map((data, i) => (
            <div
              className={styles.iconwrap}
              key={i}
              style={{ width: data.width }}
            >
              <data.icon />
            </div>
          ))}
          {iconsData.map((data, i) => (
            <div
              className={styles.iconwrap}
              key={i}
              style={{ width: data.width }}
            >
              <data.icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeClients2;
