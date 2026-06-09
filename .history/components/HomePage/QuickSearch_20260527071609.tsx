"use client";

import React from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {

  const { t } = useT();

  return (
    <div className={`section ${styles.quicksearch}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.top__sec}>
          <span>{t("home:recherche")}</span>
          <h3>{t("home:trouver")}</h3>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
