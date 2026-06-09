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
          {
            navbarLinks.map((data, i) => (
              Link
            ))
          }
        </div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
