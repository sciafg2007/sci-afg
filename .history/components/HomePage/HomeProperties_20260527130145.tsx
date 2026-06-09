import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/homeproperties.module.scss"

const HomeProperties = () => {
  const { t, i18n } = useT();

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <h3></h3>
      </div>
    </div>
  )
}

export default HomeProperties