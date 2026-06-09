"use client";

import React from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const navbarLinks = [
    {
      name: t("common:home"),
      link: currentLng === "fr" ? "/" : "/en",
    },
    {
      name: t("common:rent"),
      link: currentLng === "fr" ? "/portfolio" : "/en ",
    },
    {
      name: t("common:buy"),
      link: currentLng === "fr" ? "/portfolio" : "/en",
    },
    {
      name: t("common:about"),
      link: currentLng === "fr" ? "/a-propos" : "/en/about",
    },
    {
      name: t("common:services"),
      link: currentLng === "fr" ? "/services" : "/en/services",
    },
  ];

  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__inner}>
            <Link href="/" className={styles.nav__logo}>
              <Logo />
            </Link>

            <nav className={styles.navbar}></nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
