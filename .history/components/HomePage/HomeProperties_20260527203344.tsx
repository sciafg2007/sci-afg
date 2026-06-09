"use client";

import React from "react";
import { useT } from "next-i18next/client";
import ProjectBox from "../ReUsables/ProjectBox";
import { swiperSettings } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/HomePage/homeproperties.module.scss";

// Import Swiper styles
import "swiper/css";

const HomeProperties = () => {
  const { t } = useT();

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
    }
  ];

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
      <div className={`container ${styles.hp__container}`>

      </div>
    </div>
  );
};

export default HomeProperties;
