"use client";

import React, { useRef } from "react";
import Lenis from "lenis";
import { useT } from "next-i18next/client";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = ({ lenis }: { lenis: Lenis | null }) => {
  //Translations
  const { t } = useT();

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
          <h3 className={styles.ps__h3}>{t("privacy:table")}</h3>
          <div className={styles.psl__list}>
            <div className={styles.list} onClick={handleLenisScrollOne}>
              <span className={styles.lspan}>01.</span>
              <p className={styles.lp}>{t("privacy:tableone")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollTwo}>
              <span className={styles.lspan}>02.</span>
              <p className={styles.lp}>{t("privacy:tabletwo")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollThree}>
              <span className={styles.lspan}>03.</span>
              <p className={styles.lp}>{t("privacy:tablethree")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollFour}>
              <span className={styles.lspan}>04.</span>
              <p className={styles.lp}>{t("privacy:tablefour")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollFive}>
              <span className={styles.lspan}>05.</span>
              <p className={styles.lp}>{t("privacy:tablefive")}</p>
            </div>
            <div className={styles.list} onClick={handleLenisScrollSix}>
              <span className={styles.lspan}>06.</span>
              <p className={styles.lp}>{t("privacy:tablesix")}</p>
            </div>
          </div>
        </div>
        <div className={styles.ps__right}>
          <div className={styles.psr__one} ref={firstRef}>
            <h3 className={styles.ps__h3}>{t("privacy:tableone")}</h3>
            <div className={styles.pso}>
              <p>{t("privacy:one")}</p>
              <p>{t("privacy:two")}</p>
              <p className={styles.p__bold}>{t("privacy:three")}</p>
            </div>
          </div>
          <div className={styles.psr__one} ref={twoRef}>
            <h3 className={styles.ps__h3}>{t("privacy:tabletwo")}</h3>
            <div className={styles.pso}>
              <p>{t("privacy:four")}</p>
              <ul className={styles.ul}>
                <li>{t("privacy:five")}</li>
                <li>{t("privacy:six")}</li>
                <li>{t("privacy:seven")}</li>
              </ul>
            </div>
          </div>
          <div className={styles.psr__one} ref={threeRef}>
            <h3 className={styles.ps__h3}>{t("privacy:tablethree")}</h3>
            <div className={styles.pso}>
              <p>{t("privacy:eight")}</p>
              <p>{t("privacy:nine")}</p>
              <ul className={styles.ul}>
                <li>{t("privacy:ten")}</li>
                <li>{t("privacy:eleven")}</li>
                <li>{t("privacy:twelve")}</li>
              </ul>
              <p>{t("privacy:thirteen")}</p>
            </div>
          </div>
          <div className={styles.psr__one} ref={fourRef}>
            <h3 className={styles.ps__h3}>{t("privacy:tablefour")}</h3>
            <div className={styles.pso}>
              <p>{t("privacy:fourteen")}</p>
              <p>{t("privacy:fifteen")}</p>
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
