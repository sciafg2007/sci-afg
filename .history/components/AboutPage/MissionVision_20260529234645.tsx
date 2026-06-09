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
            <h3 className={styles.vr__h3}>{t("about:history")}</h3>
          </div>
        </div>
        <div className={styles.vr__content}>
          <div className={`container ${styles.vr}`}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MissionVision