"use client";

import React, { useState } from "react";
import { useT } from "next-i18next/client";
import Location from "@/utils/Icons/Location";
import House from "@/utils/Icons/House";
import Bath from "@/utils/Icons/Bath";
import Area from "@/utils/Icons/Area";
import Bed from "@/utils/Icons/Bed";

import styles from "../../styles/PortfolioPage/propertybody.module.scss";

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
  heroimages: {
    alt: string;
    url: string;
  }[];
  overview: {
    en: string;
    fr: string;
    _key: string;
  }[];
  otherdetails: {
    en: string;
    fr: string;
    _key: string;
  }[];
  gallery: {
    caption: string;
    type: string;
    url: string;
  }[];
}

const PropertyBody = ({ property }: { property: PropertyProps }) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  const [activeSelect, setActiveSelect] = useState(0);

  return (
    <div className={styles.pb__section}>
      <div className={`container ${styles.pb__container}`}>
        <div className={styles.pbc__left}>
          <div className={styles.pnames}>
            <h3 className={styles.p__name}>{property.name}</h3>
            <div className={styles.p__location}>
              <Location />
              <span className={styles.location}>
                {property.quarter}, {property.city.cityname}
              </span>
            </div>
          </div>
          <div className={styles.pmid}>
            {property.overview.map((data, i) => (
              <p key={i}>{currentLng === "fr" ? data.fr : data.en}</p>
            ))}
          </div>
          <div className={styles.pbottom}>
            <div className={styles.action__select}>
              <span
                className={`${styles.action} ${activeSelect === 0 ? styles.active : ""}`}
                onClick={() => setActiveSelect(0)}
              >
                General
              </span>
              <span
                className={`${styles.action} ${activeSelect === 1 ? styles.active : ""}`}
                onClick={() => setActiveSelect(1)}
              >
                {t("common:equip")}
              </span>
              <span className={styles.border}></span>
            </div>
            <div className={styles.pbcontent}>
              <div className={styles.general}>
                <div className={styles.gen}>
                  <House />
                  <span>
                    {t("home:type")} :{" "}
                    {currentLng === "fr"
                      ? property.propertytype.namefr
                      : property.propertytype.nameen}
                  </span>
                </div>
                {property.bath && (
                  <div className={styles.gen}>
                    <Bath />
                    <span>
                      {t("home:bath")} :{" "}
                      {property.bath}
                    </span>
                  </div>
                )}
                {property.room && (
                  <div className={styles.gen}>
                    <Bed />
                    <span>
                      {t("home:room")} :{" "}
                      {property.room}
                    </span>
                  </div>
                )}
                {property.area && (
                  <div className={styles.gen}>
                    <Bed />
                    <span>
                      {t("home:room")} :{" "}
                      {property.room}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pbc__right}></div>
      </div>
    </div>
  );
};

export default PropertyBody;
