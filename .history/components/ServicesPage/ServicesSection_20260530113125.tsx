"use client";

import React from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/servicessection.module.scss";

const ServicesSection = () => {
  const { t } = useT();

  const servicesData = [
    {
      sername: t("services:lrone"),
      serhead: t("services:lrtwo"),
      sertext: t("services:lrthree")
    }
  ]
  return (
    <div className={styles.ss__section}>
      <div className={`container ${styles.ss__container}`}></div>
    </div>
  );
};

export default ServicesSection;
