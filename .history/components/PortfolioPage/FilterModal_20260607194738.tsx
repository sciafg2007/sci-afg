import React, { useState, useMemo, useEffect } from "react";
import { useT } from "next-i18next/client";
import Cancel from "@/utils/Icons/Cancel";
import { FilterAnim } from "@/animation";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { LocationsData, TransactionData } from "@/types";
import styles from "../../styles/PortfolioPage/filtermodal.module.scss";

const FilterModal = ({
  activeModal,
  setActiveModal,
  transactions,
  locations,
  propertytypes,
}: {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: TransactionData[];
}) => {
  //Translations
  const { t, i18n } = useT();
  const currentLocale = i18n.language;
  const router = useRouter() as AppRouterInstance;
  const searchParams = useSearchParams();

  // selections stored as { paramKey: [value, value2] }
  const [selections, setSelections] = useState<Record<string, string[]>>({});

  //Build Transaction filters
  const transactionFilters = transactions.map(
    (transac: TransactionData, key) => {
      return {
        id: key,
        name: currentLocale === "en" ? transac.nameen : transac.namefr,
        value: transac.slug.current,
      };
    }
  );

  const transacFilter = {
    name: "Transaction",
    paramKey: "transaction",
    filters: transactionFilters,
  };

  //Build propertytype filters
  const propertytypeFilters = propertytypes.map(
    (proptype: TransactionData, key) => {
      return {
        id: key,
        name: currentLocale === "en" ? proptype.nameen : proptype.namefr,
        value: proptype.slug.current,
      };
    }
  );

  const spaceFilter = {
    name: t("home:type"),
    paramKey: "type",
    filters: propertytypeFilters,
  };

  //Build location filters
  const locationFilters = locations.map((locay: LocationsData, key) => {
    return {
      id: key,
      name: locay.cityname,
      value: locay.slug.current,
    };
  });
  const locationFilter = {
    name: t("home:location"),
    paramKey: "city",
    filters: locationFilters,
  };

  const priceFilter = {
    name: t("ServicesPage:pricefcfa"),
    paramKey: "price",
    filters: [
      { id: 1, value: "0-500000", name: "<500k" },
      { id: 2, value: "500000-1000000", name: "500k - 1M" },
      { id: 3, value: "1000000-5000000", name: "1M - 5M" },
      { id: 4, value: "5000000-20000000", name: "5M - 20M" },
      { id: 5, value: "20000000+", name: "20M>" },
    ],
  };

  const surfaceFilter = {
    name: t("ServicesPage:aream2"),
    paramKey: "area",
    filters: [
      { id: 1, value: "0-200", name: "<200" },
      { id: 2, value: "200-500", name: "200 - 500" },
      { id: 3, value: "500-1000", name: "500 - 1000" },
      { id: 4, value: "1000-2000", name: "1000 - 2000" },
      { id: 5, value: "2000+", name: "2000>" },
    ],
  };

  // list of groups for easier rendering
  const filterGroups = [
    transacFilter,
    spaceFilter,
    locationFilter,
    priceFilter,
    surfaceFilter,
  ];

  const toggleFilter = (paramKey: string, value: string): void => {
    setSelections((prev) => {
      const current = prev[paramKey] ? [...prev[paramKey]] : [];
      const index = current.indexOf(value);
      let next: string[];

      if (index === -1) {
        // add
        next = [...current, value];
      } else {
        // remove
        next = current.filter((v) => v !== value);
      }

      // if empty remove the key
      if (next.length === 0) {
        const { [paramKey]: _, ...rest } = prev;
        return rest;
      }

      return { ...prev, [paramKey]: next };
    });
  };

  const isSelected = (paramKey: string, value: string): boolean =>
    Boolean(selections[paramKey]?.includes(value));

  const hasAnySelection = useMemo(
    () =>
      Object.values(selections).some(
        (arr) => Array.isArray(arr) && arr.length > 0
      ),
    [selections]
  );

  /* -------------------------
     Apply filters (on button click)
     Build query and navigate
  --------------------------*/

  const handleApply = (): void => {
    const basePath = currentLocale === "fr" ? "/fr/services" : "/en/services";

    const params = new URLSearchParams();

    Object.entries(selections).forEach(([paramKey, values]) => {
      if (values.length > 0) {
        params.set(paramKey, values.join(","));
      }
    });

    const queryString = params.toString();

    const destination = queryString ? `${basePath}?${queryString}` : basePath; // ← this clears filters if empty

    router.replace(destination);

    setActiveModal(false);
  };

  // Sync selections from URL when modal opens or the URL changes.
  useEffect(() => {
    // Only sync when modal is opened (prevents overwriting in-progress choices)
    if (!activeModal) return;

    if (!searchParams) return;

    const urlSelections: Record<string, string[]> = {};

    // For each filter group, check the URL param and set selections
    filterGroups.forEach((group) => {
      const raw = searchParams.get(group.paramKey);
      if (raw) {
        // split comma-separated values, decode just in case
        const values = raw
          .split(",")
          .map((v) => decodeURIComponent(v))
          .filter((v) => v.length > 0);

        if (values.length) {
          urlSelections[group.paramKey] = values;
        }
      }
    });

    // If any selections found in URL, set them
    if (Object.keys(urlSelections).length > 0) {
      setSelections(urlSelections);
    }
  }, [activeModal, searchParams]);

  return (
    <motion.div
      className={styles.filter__modal}
      variants={FilterAnim}
      animate={activeModal ? "entry" : "initial"}
      exit="exit"
    >
      <div className={styles.modal__content}>
        <div className={styles.modal__container}>
          <div className={styles.modal__top}>
            <span className={styles.m__name}>{t("ServicesPage:filter")}</span>
            <span
              className={styles.modal__cancel}
              onClick={() => setActiveModal(false)}
            >
              <Cancel />
            </span>
          </div>
        </div>
        <div className={styles.modal__bottom} data-lenis-prevent>
          <div className={styles.mb__wrapper}>
            {/* map the prepared groups */}
            {filterGroups.map((group, i) => (
              <div className={styles.modal__container} key={group.paramKey}>
                <div
                  className={`${styles.modal__wrapper} ${i === 0 ? styles.modal__wrapper2 : ""}`}
                >
                  <span className={styles.filter__name}>{group.name}</span>
                  <div className={styles.filters}>
                    {group.filters.map((f) => (
                      <span
                        key={f.value}
                        className={`${styles.filter} ${
                          isSelected(group.paramKey, f.value)
                            ? styles.filter__active
                            : ""
                        }`}
                        onClick={() => toggleFilter(group.paramKey, f.value)}
                        aria-pressed={isSelected(group.paramKey, f.value)}
                      >
                        {f.name ?? f.value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.applyfilter}>
          <div className={styles.modal__container2}>
            <button
              className={styles.af__button}
              onClick={handleApply}
              aria-disabled={!hasAnySelection}
            >
              {t("ServicesPage:apply")}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterModal;
