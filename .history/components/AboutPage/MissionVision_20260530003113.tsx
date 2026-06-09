"use client";

import React from "react";
import { useT } from "next-i18next/client";
import { CldImage } from "next-cloudinary";
import styles from "../../styles/AboutPage/missionvision.module.scss";

const MissionVision = () => {
  const { t } = useT();

  const ourValues = [
    {
      name: t("about:trans"),
      text: t("about:transtext"),
    },
    {
      name: t("about:rig"),
      text: t("about:rigtext"),
    },
    {
      name: t("about:prox"),
      text: t("about:proxtext"),
    },
    {
      name: t("about:transmi"),
      text: t("about:transmitext"),
    }
  ];

  return (
    <div className={styles.vm__section}>
      <div className={styles.vm__reuse}>
        <div className={styles.vr__top}>
          <div className={`container ${styles.vrt__container}`}>
            <h3 className={styles.vr__h3}>{t("about:history")}</h3>
          </div>
        </div>
        <div className={styles.vr__content}>
          <div className={`container ${styles.vrc__container}`}>
            <div className={styles.vrc__spanner}>
              <span className={styles.circle}></span>
              <span className={styles.vrc__span}>2007</span>
            </div>
            <div className={styles.vrc__left}>
              <div className={styles.vrc__spanner}>
                <span className={styles.circle}></span>
                <span className={styles.vrc__span}>{t("about:fondee")}</span>
              </div>
              <div className={styles.vrc__bottom}>
                <p className={styles.vrc__p1}>{t("about:historytext")}</p>
                <p className={styles.vrc__p2}>{t("about:hissubtext")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.background__image}>
        <CldImage
          alt="SCI AFG. Société Civile Immobilière AFRIGROUP"
          fill
          src="sci_6_wqpe53.webp"
          sizes="100vw"
        />
      </div>
      <div className={styles.vm__reuse}>
        <div className={styles.vr__top}>
          <div className={`container ${styles.vrt__container}`}>
            <h3 className={styles.vr__h3}>{t("about:mission")}</h3>
          </div>
        </div>
        <div className={styles.vr__content}>
          <div className={`container ${styles.vrc__container}`}>
            <div className={styles.vrc__spanner}>
              <span className={styles.circle}></span>
              <span className={styles.vrc__span}>2007 - Present</span>
            </div>
            <div className={styles.vrc__left}>
              <div className={styles.vrc__spanner}>
                <span className={styles.circle}></span>
                <span className={styles.vrc__span}>{t("about:rendre")}</span>
              </div>
              <div className={styles.vrc__bottom}>
                <p className={styles.vrc__p1}>{t("about:missiontext")}</p>
                <p className={styles.vrc__p2}>{t("about:missubtext")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vm__reuse}>
        <div className={styles.vr__top}>
          <div className={`container ${styles.vrt__container}`}>
            <h3 className={styles.vr__h3}>{t("about:vision")}</h3>
          </div>
        </div>
        <div className={styles.vr__content}>
          <div className={`container ${styles.vrc__container}`}>
            <div className={styles.vrc__spanner}>
              <span className={styles.circle}></span>
              <span className={styles.vrc__span}>2007 - Present</span>
            </div>
            <div className={styles.vrc__left}>
              <div className={styles.vrc__spanner}>
                <span className={styles.circle}></span>
                <span className={styles.vrc__span}>{t("about:etre")}</span>
              </div>
              <div className={styles.vrc__bottom}>
                <p className={styles.vrc__p1}>{t("about:visiontext")}</p>
                <p className={styles.vrc__p2}>{t("about:vissubtext")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vm__down}>
        <div className={styles.vr__top}>
          <div className={`container ${styles.vrt__container}`}>
            <h3 className={styles.vr__h3}>{t("about:values")}</h3>
          </div>
        </div>
        <div className={styles.vr__content}>
          <div className={`container ${styles.vrc__container2}`}>
            {
              ourValues.map(() => (
                <div className={styles.value__box}>

                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
