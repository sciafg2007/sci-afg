"use client";

import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/missionvision.module.scss"

const MissionVision = () => {
  const { t } = useT();

  return (
    <div className={styles.vm__section}>
      <div className={styles.vm__reuse}>
        <div className={styles.vr__top}>
          <div className={`container ${styles.vrt__container}`}>
            <h3>{t("about:")}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision