"use client";

import React, {useState} from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {
  const { t } = useT();

  return (
    <div className={`section ${styles.quicksearch}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.top__sec}>
          <span className={styles.ts__span}>{t("home:recherche")}</span>
          <h3 className={styles.ts__h3}>{t("home:trouver")}</h3>
        </div>

        <div className={styles.qs__main}>
          <div className={styles.transaction}>
            <div className={styles.tran__inner}>
              <div className={styles.transac}>
                <span>{t("common:rent")}</span>
              </div>
              <div className={styles.transac}>
                <span>{t("common:buy")}</span>
              </div>
              <div className={styles.indicator}></div>
            </div>
          </div>
          <div className={styles.others}></div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
