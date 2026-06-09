import React from 'react'
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/quicksearch.module.scss"

const QuickSearch = () => {
  const { t, i18n } = useT();

  return (
    <div className={`section ${styles.quicksearch}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.top__sec}>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default QuickSearch