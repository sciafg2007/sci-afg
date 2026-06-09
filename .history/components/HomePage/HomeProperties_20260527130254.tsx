"use client";

import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/homeproperties.module.scss"

const HomeProperties = () => {
  const { t } = useT();

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <h3>{t("home:hprops")}</h3>
        <div className={styles.prop__swiper}>

        </div>
      </div>
    </div>
  )
}

export default HomeProperties