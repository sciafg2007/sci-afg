"use client";

import React from "react";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/homeabout.module.scss";

const HomeAbout = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  return (
    <div className={`section ${styles.home__about}`}>
      <div className={`container ${styles.ha__container}`}>
        <h3 className={styles.hp__h3}>{t("home:gestion")}</h3>
        <div className={styles.ha__bottom}>
          <div className={styles.hab__image}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_1_ljxdjb.webp"
              sizes="100vw"
            />
          </div>
          <div className={styles.hab__right}>
            <p className={styles.hab__p}>{t("home:habout")}</p>
            <div className={styles.hab__button}>
              <Button
                link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
                text={t("home:parcourir")}
                backColor="var(--darkblue)"
                hoverColor="var(--blueback)"
                textColor="var(--blueback)"
                thColor="var(--darkblue)"
                border="1px solid transparent"
                borderHover="1px solid var(--darkblue)"
              />
              <Button
                link={currentLng === "fr" ? "/a-propos" : "/en/portfolio"}
                text={t("home:parcourir")}
                backColor="var(--darkblue)"
                hoverColor="var(--blueback)"
                textColor="var(--blueback)"
                thColor="var(--darkblue)"
                border="1px solid transparent"
                borderHover="1px solid var(--darkblue)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
