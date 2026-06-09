"use client";

import React, { useEffect, useState } from "react";
import ProjectBox from "../ReUsables/ProjectBox";
import { client } from "@/sanity/lib/client";
import { useT } from "next-i18next/client";
import { useSearchParams, useRouter } from "next/navigation";
import { LocationsData, TransactionData, PropertyData } from "@/types";
import Settings from "@/utils/Icons/Settings";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import styles from "../../styles/PortfolioPage/portfoliobottom.module.scss";
import SortBook from "@/utils/Icons/SortBook";

interface PropertyProps {
  _id: string;
  area: number;
  bath?: number | null;
  parlour?: number | null;
  room?: number | null;
  price: number;
  name: string;
  propertytype: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  transaction: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  quarter: string;
  city: {
    cityname: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  rentpricing: string;
  mainimage: {
    alt: string;
  };
}

const PortfolioBottom = ({
  transactions,
  locations,
  propertytypes,
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: PropertyData[];
}) => {
  const { t, i18n } = useT();
  const currentLocale = i18n.language;

  const [activeSort, setActiveSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState(-1);
  const [activeModal, setActiveModal] = useState(false);
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  // App Router search params
  const searchParams = useSearchParams();
  const router = useRouter() as AppRouterInstance;

  /* -----------------------
     Helpers: parse search params
  ------------------------*/
  const parseCommaParam = (raw: string | null) => {
    if (!raw) return [];
    return raw.split(",").map((s) => decodeURIComponent(s));
  };

  // parse price/area token into numeric ranges
  type Range = { min?: number; max?: number };
  const parseRangeToken = (token: string): Range => {
    if (!token) return {};
    const t = token.trim();
    if (t.includes("+")) {
      const v = Number(t.replace("+", "").replace(/\D/g, ""));
      return { min: Number.isFinite(v) ? v : undefined };
    }
    if (t.includes("-")) {
      const parts = t.split("-").map((p) => Number(p.replace(/\D/g, "")));
      return { min: parts[0] || undefined, max: parts[1] || undefined };
    }
    return {};
  };

  /* -----------------------
     Build filters object from searchParams
  ------------------------*/
  const buildFiltersFromParams = () => {
    const f: {
      transactions?: string[];
      types?: string[];
      cities?: string[];
      priceRanges?: Range[];
      areaRanges?: Range[];
    } = {};

    if (!searchParams) return f;

    const transRaw = searchParams.get("transaction");
    const typesRaw = searchParams.get("type");
    const cityRaw = searchParams.get("city");
    const priceRaw = searchParams.get("price");
    const areaRaw = searchParams.get("area");

    const trans = parseCommaParam(transRaw);
    if (trans.length) f.transactions = trans;

    const types = parseCommaParam(typesRaw);
    if (types.length) f.types = types;

    const cities = parseCommaParam(cityRaw);
    if (cities.length) f.cities = cities;

    const priceTokens = parseCommaParam(priceRaw);
    if (priceTokens.length) {
      f.priceRanges = priceTokens.map((tok) => parseRangeToken(tok));
    }

    const areaTokens = parseCommaParam(areaRaw);
    if (areaTokens.length) {
      f.areaRanges = areaTokens.map((tok) => parseRangeToken(tok));
    }

    return f;
  };

  /* -----------------------
     Build GROQ query dynamically & params
     (parameterized to avoid injection)
  ------------------------*/
  const buildGROQ = (filters: ReturnType<typeof buildFiltersFromParams>) => {
    const conditions: string[] = ["available == true"]; // base condition
    const params: Record<string, any> = {};

    if (filters.transactions?.length) {
      params.transactionSlugs = filters.transactions;
      conditions.push("transaction->slug.current in $transactionSlugs");
    }

    if (filters.types?.length) {
      params.typeSlugs = filters.types;
      conditions.push("propertytype->slug.current in $typeSlugs");
    }

    if (filters.cities?.length) {
      params.citySlugs = filters.cities;
      conditions.push("city->slug.current in $citySlugs");
    }

    // price ranges -> OR clauses
    if (filters.priceRanges?.length) {
      const priceClauses: string[] = [];
      filters.priceRanges.forEach((r, idx) => {
        if (r.min != null && r.max != null) {
          params[`pmin${idx}`] = r.min;
          params[`pmax${idx}`] = r.max;
          priceClauses.push(`(price >= $pmin${idx} && price <= $pmax${idx})`);
        } else if (r.min != null) {
          params[`pmin${idx}`] = r.min;
          priceClauses.push(`(price >= $pmin${idx})`);
        } else if (r.max != null) {
          params[`pmax${idx}`] = r.max;
          priceClauses.push(`(price <= $pmax${idx})`);
        }
      });
      if (priceClauses.length)
        conditions.push("(" + priceClauses.join(" || ") + ")");
    }

    // area ranges
    if (filters.areaRanges?.length) {
      const areaClauses: string[] = [];
      filters.areaRanges.forEach((r, idx) => {
        if (r.min != null && r.max != null) {
          params[`amin${idx}`] = r.min;
          params[`amax${idx}`] = r.max;
          areaClauses.push(`(area >= $amin${idx} && area <= $amax${idx})`);
        } else if (r.min != null) {
          params[`amin${idx}`] = r.min;
          areaClauses.push(`(area >= $amin${idx})`);
        } else if (r.max != null) {
          params[`amax${idx}`] = r.max;
          areaClauses.push(`(area <= $amax${idx})`);
        }
      });
      if (areaClauses.length)
        conditions.push("(" + areaClauses.join(" || ") + ")");
    }

    // combine conditions
    const whereClause = conditions.length
      ? "&& " + conditions.join(" && ")
      : "";

    // sorting
    let order = " | order(publishedAt desc)"; // default
    if (selectedSort === 0) order = " | order(price asc)";
    if (selectedSort === 1) order = " | order(price desc)";
    if (selectedSort === 2) order = " | order(area asc)";
    if (selectedSort === 3) order = " | order(area desc)";

    const query = `*[_type == "property" ${whereClause}]${order}{
      _id,
name,
    slug,
    price,
    quarter,
    transaction-> {
      nameen,
      namefr,
      slug
    },
    city->{
      cityname,
      slug
    },
    area,
    mainimage,
    propertytype-> {
      nameen,
      namefr,
      slug
    },
    rentpricing,
    bath,
    parlour,
    room
    }`;

    return { query, params };
  };

  /* -----------------------
     Effect: build filters -> query -> fetch
  ------------------------*/
  useEffect(() => {
    const fetchFiltered = async () => {
      setLoading(true);

      try {
        const filters = buildFiltersFromParams();
        const { query: groqQuery, params } = buildGROQ(filters);

        const res = await client.fetch(groqQuery, params);

        setProperties(res || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setHasFetched(true);
      }
    };

    fetchFiltered();
    // react on searchParams string and selectedSort
  }, [searchParams?.toString(), selectedSort]);

  //Clear Filters
  const activeFiltersCount = React.useMemo(() => {
    if (!searchParams) return 0;

    let count = 0;

    searchParams.forEach((value) => {
      if (value) {
        count += value.split(",").length;
      }
    });

    return count;
  }, [searchParams]);

  const clearAllFilters = () => {
    const basePath = currentLocale === "fr" ? "/portfolio" : "/en/portfolio";

    router.replace(basePath);
  };

  /** Helper: parse comma-separated param into clean array */
  const parseCommaParam2 = (raw: string | null): string[] => {
    if (!raw) return [];
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };

  /** Helper: build map from slug -> display name (locale-aware) */
  const buildLabelMap = () => {
    const map = new Map<string, string>();

    // propertytypes: TransactionData[] passed as prop
    propertytypes?.forEach((pt) => {
      const slug = pt.slug?.current || pt.slug; // adjust to your shape
      const label =
        (currentLocale === "en" ? pt.nameen : pt.namefr) ?? pt.namefr ?? slug;
      if (slug) map.set(String(slug), label);
    });

    // transactions
    transactions?.forEach((tr) => {
      const slug = tr.slug?.current || tr.slug;
      const label =
        (currentLocale === "en" ? tr.nameen : tr.namefr) ?? tr.namefr ?? slug;
      if (slug) map.set(String(slug), label);
    });

    // locations
    locations?.forEach((loc) => {
      const slug = loc.slug?.current || loc.slug;
      const label = loc.cityname ?? slug;
      if (slug) map.set(String(slug), label);
    });

    return map;
  };

  /** Build the message using URL searchParams and label map */
  const buildPrefilledMessage = (): string => {
    const labelMap = buildLabelMap();

    // read raw params
    const typeRaw = parseCommaParam2(searchParams?.get("type"));
    const transactionRaw = parseCommaParam2(searchParams?.get("transaction"));
    const cityRaw = parseCommaParam2(searchParams?.get("city"));
    const priceRaw = parseCommaParam2(searchParams?.get("price"));
    const areaRaw = parseCommaParam2(searchParams?.get("area"));

    // map slugs to readable labels (fall back to slug)
    const mapToLabels = (arr: string[]) =>
      arr.map((v) => labelMap.get(v) ?? v).join(", ") || "—";

    const propertytypesText = mapToLabels(typeRaw); // "Villa, Apartment"
    const transactionText = mapToLabels(transactionRaw); // "Rent, Sale"
    const cityText = mapToLabels(cityRaw); // "Douala, Yaounde"
    const budgetText = priceRaw.length ? priceRaw.join(", ") : "—";
    const areaText = areaRaw.length ? areaRaw.join(", ") : "—";

    const message =
      currentLocale === "en"
        ? `Hi — I’m looking for;\nProperty Type(s): ${propertytypesText}\nTransaction(s): ${transactionText}\nLocation(s): ${cityText}\nBudget Range(s): ${budgetText}\nArea: ${areaText}\nPlease send available listings or similar options. Thanks — [Your name]`
        : `Bonjour — je recherche :\nType de bien : ${propertytypesText}\nTransaction(s) : ${transactionText}\nLocalisation(s) : ${cityText}\nBudget : ${budgetText}\nSurface : ${areaText}\nMerci d'envoyer les annonces disponibles ou des options similaires. Merci — [Votre nom]`;

    return message;
  };

  return (
    <div className={styles.p__bottom}>
      <div className={`container ${styles.pb__container}`}>
        <div className={styles.pb__sortfilter}>
          <div className={styles.filter__button}>
            <span>{t("portfolio:filtres")}</span>
            <Settings />
          </div>
          <div className={styles.sort__wrapper}>
            <div className={styles.s__left}>
              <SortBook/>
              <span>{t("portfolio:filterby")}</span>
            </div>
            <div className={styles.s__right}></div>
          </div>
        </div>
        <div className={styles.pb__content}></div>
      </div>
    </div>
  );
};

export default PortfolioBottom;
