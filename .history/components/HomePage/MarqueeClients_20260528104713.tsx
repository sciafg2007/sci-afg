"use client";

import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/marquee.module.scss"

const MarqueeClients = () => {
  const { t } = useT();

  return (
    <div className={styles.marquee}>
      <div className={`container ${styles.marquee__container}`}>
        <span className={styles.mc__span}>{t("home:confidence")}</span>
        <h3 className={styles.mc__h3}>{t("home:confidence2")}</h3>
      </div>
      <div className={styles.main__marquee}>
        <div className={styles.}>

        </div>
      </div>
    </div>
  )
}

export default MarqueeClients