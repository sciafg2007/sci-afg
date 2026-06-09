"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings2 } from "@/utils";
import type { Swiper as SwiperType } from "swiper";
import styles from "../../styles/AboutPage/team.module.scss";

// Import Swiper styles
import "swiper/css";

const Team = () => {
  const { t, i18n } = useT();

  const teamData = [
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link:
    }
  ]

  return (
    <div className={styles.team__section}>
      <div className={`container ${styles.team__container}`}>
        <h3 className={styles.team__h3}>{t("about:teamtext")}</h3>
      </div>
      <div className={styles.team__swiper}>
        <Swiper
          className={styles.slider}
          {...swiperSettings2}
          speed={800}
        >
          {propertiesData.map((data, i) => (
            <SwiperSlide key={i} className={styles.cb__wrapper}>
              <ProjectBox projectDetails={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
