"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/homeprocess.module.scss";

const OurProcess = () => {
  const { t } = useT();

  const processData = [
    {
      name: t("home:visite"),
      text: t("home:vtext"),
    },
    {
      name: t("home:negociation"),
      text: t("home:ntext"),
    },
    {
      name: t("home:signature"),
      text: t("home:stext"),
    },
    {
      name: t("home:paiement"),
      text: t("home:ptext"),
    },
    {
      name: t("home:etat"),
      text: t("home:etext"),
    },
    {
      name: t("home:suivi"),
      text: t("home:s2text"),
    },
  ];

  return (
    <div className={`section ${styles.process}`}>
      <div className={`container ${styles.process__container}`}>
        <div className={styles.process__image}>
          <CldImage
            alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
            fill
            src="sci_8_pgkmhc.webp"
            sizes="100vw"
          />
        </div>
        <div className={styles.process__right}>
          <div className={styles.pr__top}>
            <span className={styles.pr__span}>{t("home:process")}</span>
            <h3 className={styles.pr__h3}>{t("home:processtext")}</h3>
          </div>
          <div className={styles.pr__bottom}>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
