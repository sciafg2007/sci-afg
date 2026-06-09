"use client";

import React from "react";
import { useT } from "next-i18next/client";
import styles from "../../styles/AboutPage/team.module.scss";

const Team = () => {
  const { t, i18n } = useT();

  return (
    <div className={styles.team__section}>
      <div className={`container ${styles.team__container}`}>
        <h3>{t("about:")}</h3>
      </div>
    </div>
  );
};

export default Team;
