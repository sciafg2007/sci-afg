import React from 'react'
const { t, i18n } = useT();
import styles from "../../styles/HomePage/marquee.module.scss"

const MarqueeClients = () => {
  const { t, i18n } = useT();
  return (
    <div className={styles.marquee}>
      <div className={`container ${styles.marquee__container}`}>
        <span></span>
      </div>
    </div>
  )
}

export default MarqueeClients