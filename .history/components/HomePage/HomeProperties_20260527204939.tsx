"use client";

import React,  from "react";
import { useT } from "next-i18next/client";
import ProjectBox from "../ReUsables/ProjectBox";
import { swiperSettings } from "@/utils";
import Button from "../ReUsables/Button";
import Arrow from "@/utils/Icons/Arrow";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "../../styles/HomePage/homeproperties.module.scss";

// Import Swiper styles
import "swiper/css";

const HomeProperties = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  const swiperRef = useRef(null);

  const propertiesData = [
    {
      link: "/",
      name: "Sunset Residence A",
      image: "sci_1_ljxdjb.webp",
      transaction: t("home:forrent"),
      type: t("home:appartement"),
      room: 2,
      bath: 2,
      area: 90,
      price: {
        value: 70000,
        status: t("home:perday"),
      },
      location: "Bonanjo, Douala",
    },
    {
      link: "/",
      name: "Sunset Residence B",
      image: "sci_4_ibn519.webp",
      transaction: t("home:forrent"),
      type: t("home:appartement"),
      room: 3,
      bath: 2,
      area: 90,
      price: {
        value: 100000,
        status: t("home:perday"),
      },
      location: "Golf, Yaounde",
    },
    {
      link: "/",
      name: "Sunset Residence C",
      image: "sci_7_l7cs4b.webp",
      transaction: t("home:forrent"),
      type: t("home:appartement"),
      room: 2,
      bath: 2,
      area: 90,
      price: {
        value: 70000,
        status: t("home:perday"),
      },
      location: "Bonanjo, Douala",
    },
    {
      link: "/",
      name: "Sunset Residence D",
      image: "sci_2_xrvbdt.webp",
      transaction: t("home:forrent"),
      type: t("home:appartement"),
      room: 2,
      bath: 2,
      area: 90,
      price: {
        value: 70000,
        status: t("home:perday"),
      },
      location: "Bonanjo, Douala",
    },
    {
      link: "/",
      name: "Sunset Residence A",
      image: "sci_1_ljxdjb.webp",
      transaction: t("home:forrent"),
      type: t("home:appartement"),
      room: 2,
      bath: 2,
      area: 90,
      price: {
        value: 70000,
        status: t("home:perday"),
      },
      location: "Bonanjo, Douala",
    },
    {
      link: "/",
      name: "Sunset Residence B",
      image: "sci_4_ibn519.webp",
      transaction: t("home:forrent"),
      type: t("home:appartement"),
      room: 3,
      bath: 2,
      area: 90,
      price: {
        value: 100000,
        status: t("home:perday"),
      },
      location: "Golf, Yaounde",
    },
  ];

  const SwiperButtons = () => {
    const swiper = useSwiper();

    return (
      <div className={styles.button__wrapper}>
        <div
          className={styles.button}
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <Arrow />
        </div>
        <div
          className={styles.button2}
          onClick={() => {
            swiper.slideNext();
          }}
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
        <Swiper className={styles.slider} {...swiperSettings} speed={800}>
          {propertiesData.map((data, i) => (
            <SwiperSlide key={i} className={styles.cb__wrapper}>
              <ProjectBox projectDetails={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={`container ${styles.controls__container}`}>
        <Button
          link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
          text={t("home:parcourir")}
          backColor="var(--darkblue)"
          hoverColor="var(--blueback)"
          textColor="var(--blueback)"
          thColor="var(--darkblue)"
        />
        <SwiperButtons />
      </div>
    </div>
  );
};

export default HomeProperties;
