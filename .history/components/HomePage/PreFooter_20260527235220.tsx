"use client";

import React from 'react'
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/prefooter.module.scss"

const PreFooter = () => {
  const { t } = useT();

  return (
    <div className={styles.prefooter}>
      <div className={`container ${styles.pf__container}`}>
        <div className={styles.pr__images}>
          <div className={styles.}>

          </div>
        </div>
        <div className={styles.pr__bottom}>

        </div>
      </div>
    </div>
  )
}

export default PreFooter