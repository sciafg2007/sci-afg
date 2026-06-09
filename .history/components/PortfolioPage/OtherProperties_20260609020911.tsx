"use client";

import React from "react";
import { useT } from "next-i18next/client";
import ProjectBox from "../ReUsables/ProjectBox";
import styles from "../../styles/PortfolioPage/otherprops.module.scss";

interface Property2Props {
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
const OtherProperties = ({relatedProperties}: {rela}) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={styles.op__section}>
      <div className={`container ${styles.op__container}`}>
        <h3 className={styles.opc__h3}>{t("portfolio:similar")}</h3>
        <div className={styles.opc__bottom}>

        </div>
      </div>
    </div>
  );
};

export default OtherProperties;
