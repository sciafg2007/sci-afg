"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  return (
    <div className={styles.homehero}>
      <div className={styles.background__image}>
        <CldImage
          alt="SCI AFG"
          fill
          src="sci_9_tbwg2f.webp"
        />
      </div>
      <div className={styles.hero__main}>
        <div className={styles.garant}>

        </div>
      </div>
      <div className={styles.hero__bottom}>

      </div>
    </div>
  );
};

export default HomeHero;
