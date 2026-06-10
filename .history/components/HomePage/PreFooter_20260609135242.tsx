"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import Button from "../ReUsables/Button";
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
              src="SCI_AFG_39_vppkn1.jpg"
              sizes="30vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgTwo}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="SCI_AFG_3_mdhmat.jpg"
              sizes="30vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgThree}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="SCI_AFG_40_dny5sa.jpg"
              sizes="30vw"
            />
          </div>
          <div className={`${styles.images} ${styles.imgFour}`}>
            <CldImage
              alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
              fill
              src="sci_2_xrvbdt.webp"
              sizes="30vw"
            />
          </div>
        </div>
        <div className={styles.pr__bottom}>
          <h1 className={styles.pt__h1}>{t("home:simpli")}</h1>
          <div className={styles.prr__right}>
            <p className={styles.prr__p}>{t("home:simplitext")}</p>
            <div className={styles.prr__buttons}>
              <Button
                link={currentLng === "fr" ? "/contact" : "/en/contact"}
                text={t("home:contact")}
                backColor="var(--darkblue)"
                hoverColor="white"
                textColor="white"
                thColor="var(--darkblue)"
                border="1px solid transparent"
                borderHover="1px solid var(--darkblue)"
              />
              <Button
                link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
                text={t("home:parcourir")}
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
