"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.homehero}>
      <div className={styles.background__image}>
        <CldImage alt="SCI AFG" fill src="sci_9_tbwg2f.webp" />
      </div>
      <div className={styles.hero__main}>
        <h3 className={styles.garant}>{t("home:garant")}</h3>
        <h1 className={styles.hero__h2}>{t("home:mainhero")}</h1>
        <p className={styles.hero__p}>{t("home:sechero")}</p>
        <div className={styles.hero__button}>
          <Button link="/" text={t("home:parcourir")} backColor="white" hoverColor=""/>
        </div>
      </div>
      <div className={styles.hero__bottom}></div>
    </div>
  );
};

export default HomeHero;
