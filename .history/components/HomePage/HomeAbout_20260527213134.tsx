"use client";

import React from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/HomePage/homeabout.module.scss";

const HomeAbout = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={`section ${styles.home__about}`}>
      <div className={`container ${styles.ha__container}`}>
        <h3 className={styles.hp__h3}>{t("home:hprops")}</h3>
        <div className={styles.ha__bottom}>
          
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
