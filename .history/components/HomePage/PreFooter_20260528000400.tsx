"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/prefooter.module.scss";

const PreFooter = () => {
  const { t } = useT();

  return (
    <div className={styles.prefooter}>
      <div className={`container ${styles.pf__container}`}>
        <div className={styles.pr__images}>
          <div className={`${styles.images} ${styles.imgOne}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="ssci_1_ljxdjb.webp"
              sizes="100vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgTwo}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_4_ibn519.webp"
              sizes="100vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgThree}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_7_l7cs4b.webp"
              sizes="100vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgFour}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_2_xrvbdt.webp"
              sizes="100vw"
            />
          </div>
        </div>
        <div className={styles.pr__bottom}></div>
      </div>
    </div>
  );
};

export default PreFooter;
