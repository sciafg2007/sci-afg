"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useT } from "next-i18next/client";
import ChevDown from "@/utils/Icons/ChevDown";
import Search from "@/utils/Icons/Search";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import styles from "../../styles/HomePage/quicksearch.module.scss";
import { LocationsData, TransactionData } from "@/types";

/** Types */
type FilterOption = {
  name: string;
  value: string;
};

type QuickCategory = {
  id: number;
  category: string;
  paramKey: string;
  filters: FilterOption[];
};

type Selections = Record<number, string[]>;
// ─── Types ────────────────────────────────────────────────────────────────────

interface ModalOption {
  value: string;
  name: string;
}

interface QuickModalProps {
  label: string;
  options: ModalOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
}

const QuickSearch = ({
  transactions,
  locations,
  propertytypes,
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: TransactionData[];
}) => {
  const { t, i18n } = useT();
  const currentLocale = i18n.language;
  const [activeTransac, setActiveTransac] = useState("louer");

  //Modal Active States
  const [immoData, setImmoData] = useState<string>("appartement");
  const [locData, setLocData] = useState<string>("yaounde");
  const [priceData, setPriceData] = useState<string>("0-500000");
  const [areaData, setAreaData] = useState<string>("0-200");

  const priceOptions: ModalOption[] = [
    { name: "<500k", value: "0-500000" },
    { name: "500k - 1M", value: "500000-1000000" },
    { name: "1M - 5M", value: "1000000-5000000" },
    { name: "5M - 20M", value: "5000000-20000000" },
    { name: "20M>", value: "20000000+" },
  ];

  const areaOptions: ModalOption[] = [
    { name: "<200", value: "0-200" },
    { name: "200 - 500", value: "200-500" },
    { name: "500 - 1000", value: "500-1000" },
    { name: "1000 - 2000", value: "1000-2000" },
    { name: "2000>", value: "2000+" },
  ];

  //Official
  const router = useRouter() as AppRouterInstance;


  //Build Transaction filters
  const transactionFilters = transactions.map(
    (transac: TransactionData, key) => {
      return {
        name: currentLocale === "en" ? transac.nameen : transac.namefr,
        value: transac.slug.current,
      };
    }
  );

  //Build propertytype filters
  const propertytypeFilters = propertytypes.map(
    (proptype: TransactionData, key) => {
      return {
        name: currentLocale === "en" ? proptype.nameen : proptype.namefr,
        value: proptype.slug.current,
      };
    }
  );

  //Build location filters
  const locationFilters = locations.map((locay: LocationsData, key) => {
    return {
      name: locay.cityname,
      value: locay.slug.current,
    };
  });



  const handleSearch = (): void => {
    const basePath =
      currentLocale === "fr" ? "/portfolio" : "/en/portfolio";

    const params = new URLSearchParams();

    // Only append param if a value is selected
    if (activeTransac) params.set("transaction", activeTransac);
    if (immoData) params.set("type", immoData);
    if (locData) params.set("ville", locData);
    if (priceData) params.set("prix", priceData);
    if (areaData) params.set("area", areaData);

    const queryString = params.toString();
    const destination = queryString ? `${basePath}?${queryString}` : basePath;

    router.push(destination);
  };

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
              options={propertytypeFilters}
              selectedValue={immoData}
              onSelect={(value: string) => setImmoData(value)}
            />
            <QuickModal
              label={t("home:location")}
              options={locationFilters}
              selectedValue={locData}
              onSelect={(value: string) => setLocData(value)}
            />
            <QuickModal
              label={t("home:price")}
              options={priceOptions}
              selectedValue={priceData}
              onSelect={(value: string) => setPriceData(value)}
            />
            <QuickModal
              label={t("home:area")}
              options={areaOptions}
              selectedValue={areaData}
              onSelect={(value: string) => setAreaData(value)}
            />
            <button className={styles.searchbutton}>
              <Search />
            </button>
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
  options: { value: string; name: string }[];
  onSelect: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  // Fermer le modal quand on clique en dehors
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!isOpen) return;
      const el = targetRef?.current;
      if (el && !el.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen, targetRef]);

  return (
    <div className={styles.quick__modal}>
      <span className={styles.qm__span}>{label}</span>
      <div className={styles.modal} ref={targetRef}>
        <div className={styles.modal__top} onClick={() => setIsOpen(!isOpen)}>
          <span>
            {options.find((opt) => opt.value === selectedValue)?.name}
          </span>
          <span className={`${styles.chev} ${isOpen ? styles.active : ""}`}>
            <ChevDown />
          </span>
        </div>
        <div
          className={`${styles.modal__options} ${isOpen ? styles.active : ""}`}
          data-lenis-prevent
        >
          {options.map((data) => (
            <span
              key={data.value}
              className={styles.mo__span}
              onClick={() => {
                onSelect(data.value);
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
