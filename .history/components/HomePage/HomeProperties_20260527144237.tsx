"use client";

import React from "react";
import { useT } from "next-i18next/client";
import ProjectBox from "../ReUsables/ProjectBox";
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
      image: "sci_9_tbwg2f.webp",
      transaction: t("common:rent"),
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
      image: "sci_9_tbwg2f.webp",
      transaction: t("common:rent"),
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
      image: "sci_9_tbwg2f.webp",
      transaction: t("common:rent"),
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
      image: "sci_9_tbwg2f.webp",
      transaction: t("common:rent"),
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
      image: "sci_9_tbwg2f.webp",
      transaction: t("common:rent"),
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
      image: "sci_9_tbwg2f.webp",
      transaction: t("common:rent"),
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
  ];
  return (
    <div className={`section ${styles.hp__section}`}>
      <div className={`container ${styles.hp__container}`}>
        <h3 className={styles.hp__h3}>{t("home:hprops")}</h3>
      </div>
      <div className={styles.hp__swiper}>
        <div className={styles.slider}>
          <ProjectBox />
        </div>
      </div>
    </div>
  );
};

export default HomeProperties;
