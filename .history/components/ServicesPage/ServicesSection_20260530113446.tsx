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
      sertext: t("services:lrthree"),
      serpoints: [
        t("services:lrfour"),
        t("services:lrfive"),
        t("services:lrsix"),
        t("services:lrseven"),
      ],
    },
    {
      sername: t("services:lbone"),
      serhead: t("services:lbtwo"),
      sertext: t("services:lbthree"),
      serpoints: [
        t("services:lbfour"),
        t("services:lbfive"),
        t("services:lbsix"),
      ],
    },
  ];
  return (
    <div className={styles.ss__section}>
      <div className={`container ${styles.ss__container}`}></div>
    </div>
  );
};

export default ServicesSection;
