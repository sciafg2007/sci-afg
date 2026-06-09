"use client";

import React, { useState } from "react";
import { useT } from "next-i18next/client";
import ChevDown from "@/utils/Icons/ChevDown";
import styles from "../../styles/HomePage/quicksearch.module.scss";

// ─── Types ────────────────────────────────────────────────────────────────────
type TransactionType = "louer" | "acheter";

interface ModalOption {
  key: string;
  name: string;
}

interface QuickModalProps {
  label: string;
  options: ModalOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const QuickSearch = () => {
  const { t } = useT();
  const [activeTransac, setActiveTransac] = useState("louer");

  //Modal Active States
  const [immoData, setImmoData] = useState<string>("appartement");
  const [locData, setLocData] = useState<string>("yaounde");

  const immoOptions: ModalOption[] = [
    { key: "appartement", name: t("home:appartement") },
    { key: "bureau", name: t("home:bureau") },
    { key: "entrepot", name: t("home:entrepot") },
    { key: "espace", name: t("home:espace") },
  ];

  const locationOptions: ModalOption[] = [
    { key: "yaounde", name: "Yaounde" },
    { key: "douala", name: "Douala" },
    { key: "kribi", name: "Kribi" },
    { key: "bafoussam", name: "Bafoussam" },
    { key: "bamenda", name: "Bamenda" },
    { key: "garoua", name: "Garoua" },
    { key: "bertoua", name: "Bertoua" },
    { key: "ngaoundere", name: "Ngaoundere" },
  ];

  const priceOptions: ModalOption[] = [
    { key: "0-500000", name: "<500k" },
    { key: "500000-1000000", name: "500k - 1M" },
    { key: "1000000-5000000", name: "" },
    { key: "5000000-10000000", name: t("home:espace") },
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
            <QuickModal
              label={t("home:type")}
              options={immoOptions}
              selectedValue={immoData}
              onSelect={(value: string) => setImmoData(value)}
            />
            <QuickModal
              label={t("home:location")}
              options={locationOptions}
              selectedValue={locData}
              onSelect={(value: string) => setLocData(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;


// ─── Reusable QuickModal Component ───────────────────────────────────────────
const QuickModal = ({
  label,
  options,
  selectedValue,
  onSelect,
}: {
  label: string;
  selectedValue: string;
  options: { key: string; name: string }[];
  onSelect: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.quick__modal}>
      <span className={styles.qm__span}>{label}</span>
      <div className={styles.modal}>
        <div className={styles.modal__top} onClick={() => setIsOpen(!isOpen)}>
          <span>{options.find((opt) => opt.key === selectedValue)?.name}</span>
          <span className={`${styles.chev} ${isOpen ? styles.active : ""}`}>
            <ChevDown />
          </span>
        </div>
        <div
          className={`${styles.modal__options} ${isOpen ? styles.active : ""}`}
        >
          {options.map((data) => (
            <span
              key={data.key}
              className={styles.mo__span}
              onClick={() => {
                onSelect(data.key);
                setIsOpen(false);
              }}
            >
              {data.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
