"use client";

import React,  from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/HomePage/prefooter.module.scss";

const PreFooter = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;


  return (
    <div className={styles.prefooter}>
      <div className={`container ${styles.pf__container}`}>
        <div className={styles.pr__images}>
          <div className={`${styles.images} ${styles.imgOne}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_1_ljxdjb.webp"
              sizes="100vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgTwo}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_4_ibn519.webp"
              sizes="100vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgThree}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_7_l7cs4b.webp"
              sizes="100vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgFour}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_2_xrvbdt.webp"
              sizes="100vw"
            />
          </div>
        </div>
        <div className={styles.pr__bottom}>
          <h1 className={styles.pt__h1}>{t("home:simple")}</h1>
          <div className={styles.prr__right}>
            <p className={styles.prr__p}>{t("home:simplitext")}</p>
            <div className={styles.prr__buttons}>
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
              <Button
                link={currentLng === "fr" ? "/a-propos" : "/en/about"}
                text={t("home:aboutus")}
                backColor="white"
                hoverColor="var(--darkblue)"
                textColor="var(--darkblue)"
                thColor="white"
                border="1px solid var(--darkblue)"
                borderHover="1px solid var(--darkblue)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
