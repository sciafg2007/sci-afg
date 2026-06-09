// "use client";

// import React, { useState, useEffect, useRef, useMemo } from "react";
// import { useT } from "next-i18next/client";
// import ChevDown from "@/utils/Icons/ChevDown";
// import Search from "@/utils/Icons/Search";
// import { useRouter } from "next/navigation";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import styles from "../../styles/HomePage/quicksearch.module.scss";
// import { LocationsData, TransactionData } from "@/types";

// /** Types */
// type FilterOption = {
//   name: string;
//   value: string;
// };

// type QuickCategory = {
//   id: number;
//   category: string;
//   question: string;
//   paramKey: string;
//   filters: FilterOption[];
// };

// type Selections = Record<number, string[]>;
// // ─── Types ────────────────────────────────────────────────────────────────────

// interface ModalOption {
//   key: string;
//   name: string;
// }

// interface QuickModalProps {
//   label: string;
//   options: ModalOption[];
//   selectedValue: string;
//   onSelect: (value: string) => void;
// }

// const QuickSearch = ({
//   transactions,
//   locations,
//   propertytypes,
// }: {
//   transactions: TransactionData[];
//   locations: LocationsData[];
//   propertytypes: TransactionData[];
// }) => {
//   const { t, i18n } = useT();
//   const currentLocale = i18n.language;
//   const [activeTransac, setActiveTransac] = useState("louer");

//   //Modal Active States
//   const [immoData, setImmoData] = useState<string>("appartement");
//   const [locData, setLocData] = useState<string>("yaounde");
//   const [priceData, setPriceData] = useState<string>("0-500000");
//   const [areaData, setAreaData] = useState<string>("0-200");

//   const immoOptions: ModalOption[] = [
//     { key: "appartement", name: t("home:appartement") },
//     { key: "bureau", name: t("home:bureau") },
//     { key: "entrepot", name: t("home:entrepot") },
//     { key: "espace", name: t("home:espace") },
//   ];

//   const locationOptions: ModalOption[] = [
//     { key: "yaounde", name: "Yaounde" },
//     { key: "douala", name: "Douala" },
//     { key: "kribi", name: "Kribi" },
//     { key: "bafoussam", name: "Bafoussam" },
//     { key: "bamenda", name: "Bamenda" },
//     { key: "garoua", name: "Garoua" },
//     { key: "bertoua", name: "Bertoua" },
//     { key: "ngaoundere", name: "Ngaoundere" },
//   ];

//   const priceOptions: ModalOption[] = [
//     { key: "0-500000", name: "<500k" },
//     { key: "500000-1000000", name: "500k - 1M" },
//     { key: "1000000-5000000", name: "1M - 5M" },
//     { key: "5000000-20000000", name: "5M - 20M" },
//     { key: "20000000", name: "20M+" },
//   ];

//   const areaOptions: ModalOption[] = [
//     { key: "0-200", name: "<200" },
//     { key: "200-500", name: "200 - 500" },
//     { key: "500-1000", name: "500 - 1000" },
//     { key: "1000-2000", name: "1000 - 2000" },
//     { key: "2000", name: "2000+" },
//   ];

//   //Official
//   const router = useRouter() as AppRouterInstance;

//   const [activeCategory, setActiveCategory] = useState<number>(0);

//   // selections: { [categoryId]: [value1, value2, ...] }
//   const [selections, setSelections] = useState<Selections>({});

//   //Build Transaction filters
//   const transactionFilters = transactions.map(
//     (transac: TransactionData, key) => {
//       return {
//         name: currentLocale === "en" ? transac.nameen : transac.namefr,
//         value: transac.slug.current,
//       };
//     }
//   );

//   //Build propertytype filters
//   const propertytypeFilters = propertytypes.map(
//     (proptype: TransactionData, key) => {
//       return {
//         name: currentLocale === "en" ? proptype.nameen : proptype.namefr,
//         value: proptype.slug.current,
//       };
//     }
//   );

//   //Build location filters
//   const locationFilters = locations.map((locay: LocationsData, key) => {
//     return {
//       name: locay.cityname,
//       value: locay.slug.current,
//     };
//   });

//   const quickData: QuickCategory[] = [
//     {
//       id: 1,
//       category: "Transaction",
//       question: t("ServicesPage:transacquest"),
//       paramKey: "transaction",
//       filters: transactionFilters,
//     },
//     {
//       id: 2,
//       category: t("ServicesPage:typeprop"),
//       question: t("ServicesPage:typequest"),
//       paramKey: "type",
//       filters: propertytypeFilters,
//     },
//     {
//       id: 3,
//       category: t("ServicesPage:location"),
//       question: t("ServicesPage:locaquest"),
//       paramKey: "city",
//       filters: locationFilters,
//     },
//     {
//       id: 4,
//       category: t("ServicesPage:pricefcfa"),
//       question: t("ServicesPage:pricequest"),
//       paramKey: "price",
//       filters: [
//         { name: "<500k", value: "0-500000" },
//         { name: "500k - 1M", value: "500000-1000000" },
//         { name: "1M - 5M", value: "1000000-5000000" },
//         { name: "5M - 20M", value: "5000000-20000000" },
//         { name: "20M>", value: "20000000+" },
//       ],
//     },
//     {
//       id: 5,
//       category: t("ServicesPage:aream2"),
//       question: t("ServicesPage:areaquest"),
//       paramKey: "area",
//       filters: [
//         { name: "<200", value: "0-200" },
//         { name: "200 - 500", value: "200-500" },
//         { name: "500 - 1000", value: "500-1000" },
//         { name: "1000 - 2000", value: "1000-2000" },
//         { name: "2000>", value: "2000+" },
//       ],
//     },
//   ];

//   // toggle a filter value for a given category id
//   const toggleFilter = (categoryId: number, value: string): void => {
//     setSelections((prev) => {
//       const arr = prev[categoryId] ? [...prev[categoryId]] : [];
//       const idx = arr.indexOf(value);
//       if (idx === -1) {
//         // add
//         return { ...prev, [categoryId]: [...arr, value] };
//       } else {
//         // remove
//         const next = arr.filter((v) => v !== value);
//         // if empty, remove key
//         if (next.length === 0) {
//           const { [categoryId]: _, ...rest } = prev;
//           return rest;
//         }
//         return { ...prev, [categoryId]: next };
//       }
//     });
//   };

//   // helper to check if a value is selected
//   const isSelected = (categoryId: number, value: string): boolean =>
//     Boolean(selections[categoryId]?.includes(value));

//   // compute whether any selection was made
//   const hasSelection = useMemo<boolean>(
//     () =>
//       Object.values(selections).some(
//         (arr) => Array.isArray(arr) && arr.length > 0
//       ),
//     [selections]
//   );

//   // build query string and navigate to projects page
//   const handleSearch = (): void => {
//     if (!hasSelection) return;

//     // base path includes locale
//     const basePath = currentLocale === "fr" ? "/fr/services" : "/en/services";

//     const params = new URLSearchParams();

//     quickData.forEach((category) => {
//       const sel = selections[category.id];
//       if (sel && sel.length > 0) {
//         // join multiple values with comma
//         params.set(category.paramKey, sel.join(","));
//       }
//     });

//     const queryString = params.toString();
//     const destination = queryString ? `${basePath}?${queryString}` : basePath;

//     // navigate (client-side)
//     router.push(destination);
//   };

//   return (
//     <div className={`section ${styles.quicksearch}`}>
//       <div className={`container ${styles.qs__container}`}>
//         <div className={styles.top__sec}>
//           <span className={styles.ts__span}>{t("home:recherche")}</span>
//           <h3 className={styles.ts__h3}>{t("home:trouver")}</h3>
//         </div>

//         <div className={styles.qs__main}>
//           <div className={styles.transaction}>
//             <div className={styles.tran__inner}>
//               <div
//                 className={`${styles.transac} ${
//                   activeTransac === "louer" ? styles.active : ""
//                 }`}
//                 onClick={() => setActiveTransac("louer")}
//               >
//                 <span>{t("common:rent")}</span>
//               </div>
//               <div
//                 className={`${styles.transac} ${
//                   activeTransac === "acheter" ? styles.active : ""
//                 }`}
//                 onClick={() => setActiveTransac("acheter")}
//               >
//                 <span>{t("common:buy")}</span>
//               </div>
//               <div
//                 className={`${styles.indicator} ${
//                   activeTransac === "acheter" ? styles.active : ""
//                 }`}
//               ></div>
//             </div>
//           </div>
//           <div className={styles.others}>
//             <QuickModal
//               label={t("home:type")}
//               options={immoOptions}
//               selectedValue={immoData}
//               onSelect={(value: string) => setImmoData(value)}
//             />
//             <QuickModal
//               label={t("home:location")}
//               options={locationOptions}
//               selectedValue={locData}
//               onSelect={(value: string) => setLocData(value)}
//             />
//             <QuickModal
//               label={t("home:price")}
//               options={priceOptions}
//               selectedValue={priceData}
//               onSelect={(value: string) => setPriceData(value)}
//             />
//             <QuickModal
//               label={t("home:area")}
//               options={areaOptions}
//               selectedValue={areaData}
//               onSelect={(value: string) => setAreaData(value)}
//             />
//             <button className={styles.searchbutton}>
//               <Search />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuickSearch;

// // ─── Reusable QuickModal Component ───────────────────────────────────────────
// const QuickModal = ({
//   label,
//   options,
//   selectedValue,
//   onSelect,
// }: {
//   label: string;
//   selectedValue: string;
//   options: { key: string; name: string }[];
//   onSelect: (value: string) => void;
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const targetRef = useRef<HTMLDivElement>(null);

//   // Fermer le modal quand on clique en dehors
//   useEffect(() => {
//     const handleOutsideClick = (e: MouseEvent) => {
//       if (!isOpen) return;
//       const el = targetRef?.current;
//       if (el && !el.contains(e.target as Node)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("pointerdown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("pointerdown", handleOutsideClick);
//     };
//   }, [isOpen, targetRef]);

//   return (
//     <div className={styles.quick__modal}>
//       <span className={styles.qm__span}>{label}</span>
//       <div className={styles.modal} ref={targetRef}>
//         <div className={styles.modal__top} onClick={() => setIsOpen(!isOpen)}>
//           <span>{options.find((opt) => opt.key === selectedValue)?.name}</span>
//           <span className={`${styles.chev} ${isOpen ? styles.active : ""}`}>
//             <ChevDown />
//           </span>
//         </div>
//         <div
//           className={`${styles.modal__options} ${isOpen ? styles.active : ""}`}
//           data-lenis-prevent
//         >
//           {options.map((data) => (
//             <span
//               key={data.key}
//               className={styles.mo__span}
//               onClick={() => {
//                 onSelect(data.key);
//                 setIsOpen(false);
//               }}
//             >
//               {data.name}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useT } from "next-i18next/client";
import ChevDown from "@/utils/Icons/ChevDown";
import Search from "@/utils/Icons/Search";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import styles from "../../styles/HomePage/quicksearch.module.scss";
import { LocationsData, TransactionData } from "@/types";

// ─── Types ────────────────────────────────────────────────────────────────────
type FilterOption = {
  name: string;
  value: string;
};

type QuickCategory = {
  id: number;
  category: string;
  question: string;
  paramKey: string;
  filters: FilterOption[];
};

type Selections = Record<number, string[]>;

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

// ─── QuickSearch Component ────────────────────────────────────────────────────
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
  const currentLocale: string = i18n.language;
  const router = useRouter() as AppRouterInstance;

  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [selections, setSelections] = useState<Selections>({});

  // ─── Build filters from props ───────────────────────────────────────────────
  const transactionFilters: FilterOption[] = transactions.map(
    (transac: TransactionData) => ({
      name: currentLocale === "en" ? transac.nameen : transac.namefr,
      value: transac.slug.current,
    })
  );

  const propertytypeFilters: FilterOption[] = propertytypes.map(
    (proptype: TransactionData) => ({
      name: currentLocale === "en" ? proptype.nameen : proptype.namefr,
      value: proptype.slug.current,
    })
  );

  const locationFilters: FilterOption[] = locations.map(
    (locay: LocationsData) => ({
      name: locay.cityname,
      value: locay.slug.current,
    })
  );

  // ─── Quick Data ─────────────────────────────────────────────────────────────
  const quickData: QuickCategory[] = [
    {
      id: 1,
      category: "Transaction",
      question: t("ServicesPage:transacquest"),
      paramKey: "transaction",
      filters: transactionFilters,
    },
    {
      id: 2,
      category: t("ServicesPage:typeprop"),
      question: t("ServicesPage:typequest"),
      paramKey: "type",
      filters: propertytypeFilters,
    },
    {
      id: 3,
      category: t("ServicesPage:location"),
      question: t("ServicesPage:locaquest"),
      paramKey: "city",
      filters: locationFilters,
    },
    {
      id: 4,
      category: t("ServicesPage:pricefcfa"),
      question: t("ServicesPage:pricequest"),
      paramKey: "price",
      filters: [
        { name: "<500k", value: "0-500000" },
        { name: "500k - 1M", value: "500000-1000000" },
        { name: "1M - 5M", value: "1000000-5000000" },
        { name: "5M - 20M", value: "5000000-20000000" },
        { name: "20M>", value: "20000000+" },
      ],
    },
    {
      id: 5,
      category: t("ServicesPage:aream2"),
      question: t("ServicesPage:areaquest"),
      paramKey: "area",
      filters: [
        { name: "<200", value: "0-200" },
        { name: "200 - 500", value: "200-500" },
        { name: "500 - 1000", value: "500-1000" },
        { name: "1000 - 2000", value: "1000-2000" },
        { name: "2000>", value: "2000+" },
      ],
    },
  ];

  // ─── Handlers ───────────────────────────────────────────────────────────────
  const toggleFilter = (categoryId: number, value: string): void => {
    setSelections((prev) => {
      const arr = prev[categoryId] ? [...prev[categoryId]] : [];
      const idx = arr.indexOf(value);
      if (idx === -1) {
        return { ...prev, [categoryId]: [...arr, value] };
      } else {
        const next = arr.filter((v) => v !== value);
        if (next.length === 0) {
          const { [categoryId]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [categoryId]: next };
      }
    });
  };

  const isSelected = (categoryId: number, value: string): boolean =>
    Boolean(selections[categoryId]?.includes(value));

  const hasSelection = useMemo<boolean>(
    () =>
      Object.values(selections).some(
        (arr) => Array.isArray(arr) && arr.length > 0
      ),
    [selections]
  );

  const handleSearch = (): void => {
    if (!hasSelection) return;

    const basePath = currentLocale === "fr" ? "/services" : "/en/services";
    const params = new URLSearchParams();

    quickData.forEach((category) => {
      const sel = selections[category.id];
      if (sel && sel.length > 0) {
        params.set(category.paramKey, sel.join(","));
      }
    });

    const queryString = params.toString();
    const destination = queryString ? `${basePath}?${queryString}` : basePath;
    router.push(destination);
  };

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className={`section ${styles.quicksearch}`}>
      <div className={`container ${styles.qs__container}`}>
        {/* Header */}
        <div className={styles.top__sec}>
          <span className={styles.ts__span}>{t("home:recherche")}</span>
          <h3 className={styles.ts__h3}>{t("home:trouver")}</h3>
        </div>

        <div className={styles.qs__main}>
          {/* Category tabs */}
          <div className={styles.qs__cat}>
            {quickData.map((data, i) => (
              <span
                key={data.id}
                className={`${styles.category} ${
                  activeCategory === i ? styles.active__cat : ""
                }`}
                onClick={() => setActiveCategory(i)}
              >
                {data.category}
              </span>
            ))}
          </div>

          {/* Active category question */}
          <p className={styles.qs__p}>{quickData[activeCategory].question}</p>

          {/* Filter pills + search button */}
          <div className={styles.others}>
            <div className={styles.filters}>
              {quickData[activeCategory].filters.map((f, idx) => {
                const selected = isSelected(
                  quickData[activeCategory].id,
                  f.value
                );
                return (
                  <span
                    key={idx}
                    className={`${styles.filter} ${
                      selected ? styles.filter__active : ""
                    }`}
                    onClick={() =>
                      toggleFilter(quickData[activeCategory].id, f.value)
                    }
                  >
                    {f.name}
                  </span>
                );
              })}
            </div>

            <button
              className={`${styles.searchbutton} ${
                !hasSelection ? styles.disabled : ""
              }`}
              disabled={!hasSelection}
              onClick={handleSearch}
            >
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
export const QuickModal: React.FC<QuickModalProps> = ({
  label,
  options,
  selectedValue,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
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
  }, [isOpen]);

  return (
    <div className={styles.quick__modal}>
      <span className={styles.qm__span}>{label}</span>
      <div className={styles.modal} ref={targetRef}>
        <div className={styles.modal__top} onClick={() => setIsOpen(!isOpen)}>
          <span>
            {
              options.find((opt: ModalOption) => opt.key === selectedValue)
                ?.name
            }
          </span>
          <span className={`${styles.chev} ${isOpen ? styles.active : ""}`}>
            <ChevDown />
          </span>
        </div>
        <div
          className={`${styles.modal__options} ${isOpen ? styles.active : ""}`}
          data-lenis-prevent
        >
          {options.map((data: ModalOption) => (
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
