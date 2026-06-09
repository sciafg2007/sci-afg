import React from 'react'
import styles from "../../styles/AboutPage/team.module.scss"

const Team = () => {
  return (
    <div className={styles.team__section}>
      <div className={`container ${styles.team__container}`}>
        <h3>{t("about")}</h3>
      </div>
    </div>
  )
}

export default Team