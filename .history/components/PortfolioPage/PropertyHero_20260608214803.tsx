"use client";

import React from "react";
import { useT } from "next-i18next/client";
import Li
import styles from "../../styles/PortfolioPage/propertyhero.module.scss";

const PropertyHero = () => {
  const { t, i18n } = useT();
  const currentLocale = i18n.language;

  return (
    <div className={styles.ph__section}>
      <div className={`container ${styles.linkhero}`}>
        <div className={styles.link__share}>
          <div className={styles.ls__left}>
            
          </div>
          <div className={styles.ls__right}></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
