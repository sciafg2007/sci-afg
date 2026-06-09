"use client";

import React, { useState } from "react";
import { useT } from "next-i18next/client";
import ChevDown from "@/utils/Icons/ChevDown";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {
  const { t } = useT();
  const [activeTransac, setActiveTransac] = useState("louer");

  //Modal Active States
  const [activeImmo, setActiveImmo] = useState(false);
  const [immoData, setImmoData] = useState("appartement");

  const mainModalData = [
    {
      key: "type",
      name: t("home:type"),
      options: [
        {
          key: "appartement",
          name: t("home:appartement"),
        },
        {
          key: "bureau",
          name: t("home:bureau"),
        },
        {
          key: "entrepot",
          name: t("home:entrepot"),
        },
        {
          key: "espace",
          name: t("home:espace"),
        },
      ],
    },
  ];
  return (
    <div className={`section ${styles.quicksearch}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.top__sec}>
          <span className={styles.ts__span}>{t("home:recherche")}</span>
          <h3 className={styles.ts__h3}>{t("home:trouver")}</h3>
        </div>

        <div className={styles.qs__main}>
          <div className={styles.transaction}>
            <div className={styles.tran__inner}>
              <div
                className={`${styles.transac} ${
                  activeTransac === "louer" ? styles.active : ""
                }`}
                onClick={() => setActiveTransac("louer")}
              >
                <span>{t("common:rent")}</span>
              </div>
              <div
                className={`${styles.transac} ${
                  activeTransac === "acheter" ? styles.active : ""
                }`}
                onClick={() => setActiveTransac("acheter")}
              >
                <span>{t("common:buy")}</span>
              </div>
              <div
                className={`${styles.indicator} ${
                  activeTransac === "acheter" ? styles.active : ""
                }`}
              ></div>
            </div>
          </div>
          <div className={styles.others}>
            <div className={styles.quick__modal}>
              <span className={styles.qm__span}>{t("home:type")}</span>
              <div className={styles.modal}>
                <div
                  className={styles.modal__top}
                  onClick={() => setActiveImmo(!activeImmo)}
                >
                  <span>
                    {
                      mainModalData[0].options.find(
                        (opt) => opt.key === immoData
                      )?.name
                    }
                  </span>
                  <span
                    className={`${styles.chev} ${
                      activeImmo ? styles.active : ""
                    }`}
                  >
                    <ChevDown />
                  </span>
                </div>
                <div
                  className={`${styles.modal__options} ${
                    activeImmo ? styles.active : ""
                  }`}
                >
                  {mainModalData[0].options.map((data) => (
                    <span
                      key={data.key}
                      className={styles.mo__span}
                      onClick={() => {
                        setImmoData(data.key);
                        setActiveImmo(false);
                      }}
                    >
                      {data.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
