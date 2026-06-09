import React from 'react'
import styles from "../../styles/HomePage/marquee.module.scss"

const MarqueeClients = () => {
  return (
    <div className={styles.marquee}>
      <div className={`container ${styles.marquee__container}`}>
        <span></span>
      </div>
    </div>
  )
}

export default MarqueeClients