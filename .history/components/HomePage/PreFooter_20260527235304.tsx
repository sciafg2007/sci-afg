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
              src="sci_8_pgkmhc.webp"
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
