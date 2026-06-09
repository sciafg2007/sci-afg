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
          src="v1779816742/sci_9_tbwg2f.webp"
        />
      </div>
    </div>
  );
};

export default HomeHero;
