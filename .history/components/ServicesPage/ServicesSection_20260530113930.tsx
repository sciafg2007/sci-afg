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
    {
      sername: t("services:elone"),
      serhead: t("services:eltwo"),
      sertext: t("services:elthree"),
      serpoints: [
        t("services:elfour"),
        t("services:elfive"),
        t("services:elsix"),
        t("services:elseven"),
      ],
    },
    {
      sername: t("services:hcone"),
      serhead: t("services:hctwo"),
      sertext: t("services:hcthree"),
      serpoints: [
        t("services:hcfour"),
        t("services:hcfive"),
        t("services:hcsix"),
      ],
    },
    {
      sername: t("services:gmone"),
      serhead: t("services:gmtwo"),
      sertext: t("services:gmthree"),
      serpoints: [
        t("services:gmfour"),
        t("services:gmfive"),
        t("services:gmsix"),
        t("services:gmseven"),
      ],
    },
  ];
  return (
    <div className={styles.ss__section}>
      <div className={`container ${styles.ss__container}`}>
        {servicesData.map((data, i) => (
          <div className={styles.service__wrap} key={i}>
            <h3 className={styles.ser__h3}>{data.sername}</h3>
            <div className={styles.ser__right}>
              <div className={styles.sr__top}>
                <h4>{data.serhead}</h4>
                
              </div>
              <div className={styles.sr__bottom}>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
