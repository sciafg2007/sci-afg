import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/marquee.module.scss"

const MarqueeClients = () => {
  const { t } = useT();

  return (
    <div className={styles.marquee}>
      <div className={`container ${styles.marquee__container}`}>
        <span>{t("home:confidence")}</span>
        
      </div>
    </div>
  )
}

export default MarqueeClients