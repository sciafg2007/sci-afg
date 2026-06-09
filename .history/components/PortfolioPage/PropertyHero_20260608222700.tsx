"use client";

import React, { useEffect, useState } from "react";
import { useT } from "next-i18next/client";
import Link from "next/link";
import Share from "@/utils/Icons/Share";
import styles from "../../styles/PortfolioPage/propertyhero.module.scss";
import Arrow from "@/utils/Icons/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";

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

  const [copied, setCopied] = useState(false);

  const propertyUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${
          currentLocale === "fr"
            ? `/portfolio/${slug}`
            : `/en/portfolio/${slug}`
        }`
      : currentLocale === "fr"
        ? `/portfolio/${slug}`
        : `/en/portfolio/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(propertyUrl);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  useEffect(() => {
    if (!copied) return;

    const timer = setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [copied]);

  //Swiper
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={styles.ph__section}>
      <div className={`container ${styles.linkhero}`}>
        <div className={styles.ls__left}>
          <Link href="/">{t("common:home")}</Link> /{" "}
          <Link href={currentLocale === "fr" ? "/portfolio" : "/en/portfolio"}>
            Portfolio
          </Link>{" "}
          / <span className={styles.property}>{name}</span>
        </div>
        <div className={styles.ls__right} onClick={handleCopyLink}>
          <Share />
          <span>{t("common:share")}</span>

          {copied && (
            <div className={styles.copytoast}>
              <span>
                {currentLocale === "fr" ? "Lien copié" : "Link copied"}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className={styles.slider}></div>
    </div>
  );
};

export default PropertyHero;
