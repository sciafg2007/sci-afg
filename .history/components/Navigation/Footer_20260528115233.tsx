"use client";

import React from "react";
import { useT } from "next-i18next/client";
import Link from "next/link";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const navbarLinks = [
    {
      name: t("common:home"),
      link: currentLng === "fr" ? "/" : "/en",
    },
    {
      name: t("common:rent"),
      link: currentLng === "fr" ? "/portfolio" : "/en/portfolio",
    },
    {
      name: t("common:buy"),
      link: currentLng === "fr" ? "/portfolio" : "/en/portfolio",
    },
    {
      name: t("common:about"),
      link: currentLng === "fr" ? "/a-propos" : "/en/about",
    },
    {
      name: "Services",
      link: currentLng === "fr" ? "/services" : "/en/services",
    },
    {
      name: "Contact",
      link: currentLng === "fr" ? "/contact" : "/en/contact",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <span className={styles.ft__span}>Sitemap</span>
          <div className={styles.ft__links}>
            {navbarLinks.map((data, i) => (
              <Link href={data.link} className={styles.f__link} key={i}>
                <span className={styles.f__span}>{data.name}</span>
              </Link>
            ))}
            <div className={styles.separator}></div>
          </div>
        </div>
        <div className={styles.footer__mid}>
          <div className={styles.fm__left}>
            <div className={styles.fm__wrap}>
              <span className={styles.ft__span}>{t("home:socials")}</span>
              <div className={styles.other__links}>
                <Link></Link>
              </div>
            </div>
          </div>
          <div className={styles.fm__right}></div>
        </div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
