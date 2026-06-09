"use client";

import React from "react";
import { useT } from "next-i18next/client";
import Location from "@/utils/Icons/Location";

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

  return (
    <div className={styles.pb__section}>
      <div className={`container ${styles.pb__container}`}>
        <div className={styles.pbc__left}>
          <div className={styles.pnames}>
            <h3 className={styles.p__name}>{property.name}</h3>
            <div className={styles.p__location}>
              <Location />
              <span>
                {property.quarter}, {property.city.cityname}
              </span>
            </div>
          </div>
          <div className={styles.pmid}>
            {
              property.overview.map(() => (
                
              ))
            }
          </div>
        </div>
        <div className={styles.pbc__right}></div>
      </div>
    </div>
  );
};

export default PropertyBody;
