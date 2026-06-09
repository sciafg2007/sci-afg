"use client";

import React from 'react'
import { useT } from "next-i18next/client";
import AP from "@/utils/CompanyLogos/AP";
import Camtel from "@/utils/CompanyLogos/Camtel";
import Eneo from "@/utils/CompanyLogos/Eneo";
import Hysacam from "@/utils/CompanyLogos/Hysacam";
import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
import Noble from "@/utils/CompanyLogos/Noble";
import OIM from "@/utils/CompanyLogos/OIM";
import Razel from "@/utils/CompanyLogos/Razel";
import styles from "../../styles/HomePage/marquee.module.scss"

const MarqueeClients = () => {
  const { t } = useT();

  const iconsData = [
    {
      icon: Eneo,
      width: "120px",
    },
    {
      icon: Camtel,
      width: "100px",
    },

    {
      icon: OIM,
      width: "130px",
    },
    {
      icon: AP,
      width: "120px",
    },
    {
      icon: Razel,
      width: "140px",
    },
    {
      icon: Noble,
      width: "150px",
    },

    {
      icon: Hysacam,
      width: "140px",
    },
    {
      icon: Isstmadd,
      width: "130px",
    },
  ];

  return (
    <div className={styles.marquee}>
      <div className={`container ${styles.marquee__container}`}>
        <span className={styles.mc__span}>{t("home:confidence")}</span>
        <h3 className={styles.mc__h3}>{t("home:confidence2")}</h3>
      </div>
      <div className={styles.main__marquee}>
        <div className={styles.mm__one}>

        </div>
      </div>
    </div>
  )
}

export default MarqueeClients