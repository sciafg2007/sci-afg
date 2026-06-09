"use client";

import React, { useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = ({ lenis }: { lenis: Lenis | null }) => {
  //Translations
  const { t, i18n } = useTranslation();

  const firstRef = useRef<HTMLDivElement>(null);
  const twoRef = useRef<HTMLDivElement>(null);
  const threeRef = useRef<HTMLDivElement>(null);
  const fourRef = useRef<HTMLDivElement>(null);
  const fiveRef = useRef<HTMLDivElement>(null);
  const sixRef = useRef<HTMLDivElement>(null);

  const handleLenisScrollOne = () => {
    if (lenis && firstRef?.current) {
      const referenceTop =
        window.scrollY + firstRef?.current.getBoundingClientRect().top - 100;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };
  const handleLenisScrollTwo = () => {
    if (lenis && twoRef?.current) {
      const referenceTop =
        window.scrollY + twoRef?.current.getBoundingClientRect().top - 100;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };
  const handleLenisScrollThree = () => {
    if (lenis && threeRef?.current) {
      const referenceTop =
        window.scrollY + threeRef?.current.getBoundingClientRect().top - 100;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };
  const handleLenisScrollFour = () => {
    if (lenis && fourRef?.current) {
      const referenceTop =
        window.scrollY + fourRef?.current.getBoundingClientRect().top - 100;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };
  const handleLenisScrollFive = () => {
    if (lenis && fiveRef?.current) {
      const referenceTop =
        window.scrollY + fiveRef?.current.getBoundingClientRect().top - 100;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };
  const handleLenisScrollSix = () => {
    if (lenis && sixRef?.current) {
      const referenceTop =
        window.scrollY + sixRef?.current.getBoundingClientRect().top - 100;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };

  return (
    <div className={styles.ps__section}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__left}>
          <h3 className={styles.ps__h3}>{t("PrivacyPage:table")}</h3>
          <div className={styles.psl__list}>
            <div className={styles.list} onClick={handleLenisScrollOne}>
              <span className={styles.lspan}>01.</span>
              <p className={styles.lp}>{t("PrivacyPage:tableone")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollTwo}>
              <span className={styles.lspan}>02.</span>
              <p className={styles.lp}>{t("PrivacyPage:tabletwo")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollThree}>
              <span className={styles.lspan}>03.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablethree")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollFour}>
              <span className={styles.lspan}>04.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablefour")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollFive}>
              <span className={styles.lspan}>05.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablefive")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollSix}>
              <span className={styles.lspan}>06.</span>
              <p className={styles.lp}>{t("PrivacyPage:tablesix")}</p>
            </div>
          </div>
        </div>
        <div className={styles.ps__right}>
          <div className={styles.psr__one} ref={firstRef}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tableone")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:one")}</p>
              <p>{t("PrivacyPage:two")}</p>
              <p className={styles.p__bold}>{t("PrivacyPage:three")}</p>
            </div>
          </div>
          <div className={styles.psr__one} ref={twoRef}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tabletwo")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:four")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:five")}</li>
                <li>{t("PrivacyPage:six")}</li>
                <li>{t("PrivacyPage:seven")}</li>
              </ul>
            </div>
          </div>
          <div className={styles.psr__one} ref={threeRef}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablethree")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:eight")}</p>
              <p>{t("PrivacyPage:nine")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:ten")}</li>
                <li>{t("PrivacyPage:eleven")}</li>
                <li>{t("PrivacyPage:twelve")}</li>
              </ul>
              <p>{t("PrivacyPage:thirteen")}</p>
            </div>
          </div>
          <div className={styles.psr__one} ref={fourRef}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablefour")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:fourteen")}</p>
              <p>{t("PrivacyPage:fifteen")}</p>
            </div>
          </div>
          <div className={styles.psr__one} ref={fiveRef}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablefive")}</h3>
            <div className={styles.pso}>
              <p>{t("PrivacyPage:sixteen")}</p>
            </div>
          </div>
          <div className={styles.psr__two} ref={sixRef}>
            <h3 className={styles.ps__h3}>{t("PrivacyPage:tablesix")}</h3>
            <div className={styles.pso}>
              <h4 className={styles.ps__h4}>{t("PrivacyPage:seventeen")}</h4>
              <p>{t("PrivacyPage:eighteen")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:nineteen")}</li>
                <li>{t("PrivacyPage:twenty")}</li>
                <li>{t("PrivacyPage:twentyone")}</li>
                <li>{t("PrivacyPage:twentytwo")}</li>
              </ul>
              <p>{t("PrivacyPage:twentythree")}</p>
            </div>
            <div className={styles.pso}>
              <h4 className={styles.ps__h4}>{t("PrivacyPage:twentyfour")}</h4>
              <p>{t("PrivacyPage:twentyfive")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:twentysix")}</li>
              </ul>
              <p>{t("PrivacyPage:twentyseven")}</p>
            </div>
            <div className={styles.pso}>
              <h4 className={styles.ps__h4}>{t("PrivacyPage:twentyeight")}</h4>
              <p>{t("PrivacyPage:twentynine")}</p>
              <ul className={styles.ul}>
                <li>{t("PrivacyPage:thirty")}</li>
                <li>{t("PrivacyPage:thirtyone")}</li>
                <li>{t("PrivacyPage:thirtytwo")}</li>
                <li>{t("PrivacyPage:thirtythree")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySection;
