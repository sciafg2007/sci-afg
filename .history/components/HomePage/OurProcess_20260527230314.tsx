"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/homeprocess.module.scss";

const OurProcess = () => {
  const { t } = useT();

  return (
    <div className={`section ${styles.process}`}>
      <div className={`container ${styles.process__container}`}>
        <div className={styles.process__image}>
          <CldImage
            alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
            fill
            src="sci_8_pgkmhc.webp"
            sizes="100vw"
          />
        </div>
        <div className={styles.process__bottom}>

        </div>
      </div>
    </div>
  );
};

export default OurProcess;
