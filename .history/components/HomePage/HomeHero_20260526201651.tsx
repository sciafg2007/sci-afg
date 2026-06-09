"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

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
        <p  className={styles.garant}>

        </p>
        <h1 className={styles.hero__h2}>

        </h2>
        <p></p>
      </div>
      <div className={styles.hero__bottom}>

      </div>
    </div>
  );
};

export default HomeHero;
