"use client";

import React from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/PortfolioPage/otherprops.module.scss";

const OtherProperties = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.op__section}>
      <div className={`container ${styles.op__container}`}>
        <h3 className={styles.opc__h3}>{t("portfolio:similar")}</h3>
        <div clas>

        </div>
      </div>
    </div>
  );
};

export default OtherProperties;
