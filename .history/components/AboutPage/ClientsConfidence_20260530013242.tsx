"use client";

import React from "react";
import AP from "@/utils/CompanyLogos/AP";
import { useT } from "next-i18next/client";
import Camtel from "@/utils/CompanyLogos/Camtel";
import Eneo from "@/utils/CompanyLogos/Eneo";
import Hysacam from "@/utils/CompanyLogos/Hysacam";
import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
import Noble from "@/utils/CompanyLogos/Noble";
import OIM from "@/utils/CompanyLogos/OIM";
import Razel from "@/utils/CompanyLogos/Razel";
import styles from "../../styles/AboutPage/team.module.scss";

const ClientsConfidence = () => {
  const { t } = useT();

  const iconsData = [
    {
      icon: Eneo,
      width: "150px",
    },
    {
      icon: Camtel,
      width: "120px",
    },

    {
      icon: OIM,
      width: "160px",
    },
    {
      icon: AP,
      width: "150px",
    },
    {
      icon: Razel,
      width: "200px",
    },
    {
      icon: Noble,
      width: "180px",
    },

    {
      icon: Hysacam,
      width: "170px",
    },
    {
      icon: Isstmadd,
      width: "150px",
    },
  ];

  return (
    <div className={`section ${styles.confidence__section}`}>
      <div className={`container ${styles.__container}`}>
        <h3 className={styles.team__h3}>{t("home:confidence")}</h3>
      </div>
    </div>
  );
};

export default ClientsConfidence;
