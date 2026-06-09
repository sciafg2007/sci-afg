"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import AP from "@/utils/CompanyLogos/AP";
import Camtel from "@/utils/CompanyLogos/Camtel";
import Eneo from "@/utils/CompanyLogos/Eneo";
import Hysacam from "@/utils/CompanyLogos/Hysacam";
import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
import Noble from "@/utils/CompanyLogos/Noble";
import OIM from "@/utils/CompanyLogos/OIM";
import Razel from "@/utils/CompanyLogos/Razel";
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const iconsData = [
    {
      icon: Eneo,
      width: "70px",
    },
    {
      icon: Camtel,
      width: "60px",
    },

    {
      icon: OIM,
      width: "90px",
    },
    {
      icon: AP,
      width: "70px",
    },
    {
      icon: Razel,
      width: "90px",
    },
    {
      icon: Noble,
      width: "90px",
    },

    {
      icon: Hysacam,
      width: "100px",
    },
    {
      icon: Isstmadd,
      width: "100px",
    },
  ];

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
          <Button
            link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
            text={t("home:parcourir")}
            backColor="white"
            hoverColor="var(--darkblue)"
            textColor="var(--darkblue)"
            thColor="white"
          />
        </div>
      </div>
      <div className={styles.hero__bottom}>
        <span>{t("home:confidence")}</span>
        <div className={styles.logos}>
          {iconsData.map((data, i) => (
            <div className={styles.iconwrap} key={i} style={{width: data.width}}>
              <data.icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
