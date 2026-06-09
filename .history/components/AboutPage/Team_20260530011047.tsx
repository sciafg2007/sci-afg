"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings2 } from "@/utils";
import styles from "../../styles/AboutPage/team.module.scss";

// Import Swiper styles
import "swiper/css";

const Team = () => {
  const { t, i18n } = useT();

  const teamData = [
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },

    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
    {
      name: "WOUABIT Jouvel",
      position: t("about:director"),
      link: "https://www.linkedin.com/",
      image: "image10_zrecr2.webp",
    },
  ];

  return (
    <div className={styles.team__section}>
      <div className={`container ${styles.team__container}`}>
        <h3 className={styles.team__h3}>{t("about:teamtext")}</h3>
      </div>
      <div className={styles.team__swiper}>
        <Swiper className={styles.slider} {...swiperSettings2} speed={800}>
          {teamData.map((data, i) => (
            <SwiperSlide key={i} className={styles.team__wrapper}>
              <div className={styles.team__card}>
                <div className={styles.tc__image}>
                  <CldImage
                    alt={data.name}
                    fill
                    src={data.image}
                    sizes="100vw"
                  />
                </div>
                <div className={styles.tc__context}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
