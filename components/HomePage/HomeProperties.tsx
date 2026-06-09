"use client";

import React, { useRef } from "react";
import { useT } from "next-i18next/client";
import ProjectBox from "../ReUsables/ProjectBox";
import { swiperSettings } from "@/utils";
import Button from "../ReUsables/Button";
import Arrow from "@/utils/Icons/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import styles from "../../styles/HomePage/homeproperties.module.scss";

// Import Swiper styles
import "swiper/css";

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

const HomeProperties = ({ properties }: { properties: PropertyProps[] }) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  const swiperRef = useRef<SwiperType | null>(null);


  const SwiperButtons = () => {
    return (
      <div className={styles.button__wrapper}>
        <div
          className={styles.button}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Arrow />
        </div>
        <div
          className={styles.button2}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Arrow />
        </div>
      </div>
    );
  };

  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <h3 className={styles.hp__h3}>{t("home:hprops")}</h3>
      </div>
      <div className={styles.hp__swiper}>
        <Swiper
          className={styles.slider}
          {...swiperSettings}
          speed={800}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {properties.map((data, i) => (
            <SwiperSlide key={i} className={styles.cb__wrapper}>
              <ProjectBox projectDetails={data} key={data._id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`container ${styles.controls__container}`}>
        <Button
          link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
          text={t("home:parcourir")}
          backColor="var(--darkblue)"
          hoverColor="white"
          textColor="white"
          thColor="var(--darkblue)"
          border="1px solid transparent"
          borderHover="1px solid var(--darkblue)"
        />
        <SwiperButtons />
      </div>
    </div>
  );
};

export default HomeProperties;
