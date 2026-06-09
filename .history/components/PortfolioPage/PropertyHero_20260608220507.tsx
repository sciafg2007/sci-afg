"use client";

import React from "react";
import { useT } from "next-i18next/client";
import Link from "next/link";
import Share from "@/utils/Icons/Share";
import styles from "../../styles/PortfolioPage/propertyhero.module.scss";

interface propertyData {
  name: string;
  slug: string;
  images: {
    alt: string;
  }[];
}
const PropertyHero = ({ name, slug, images }: propertyData) => {
  const { t, i18n } = useT();
  const currentLocale = i18n.language;

  return (
    <div className={styles.ph__section}>
      <div className={`container ${styles.linkhero}`}>
        <div className={styles.ls__left}>
          <Link href="/">{t("common:home")}</Link> /{" "}
          <Link href={currentLocale === "fr" ? "/portfolio" : "/en/portfolio"}>
            Portfolio
          </Link>{" "}
          / <span></span>{name}
        </div>
        <div className={styles.ls__right}>
          <Share />
          <span>{t("common:share")}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
