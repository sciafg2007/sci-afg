"use client";

import React, {useState} from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import styles from "../../styles/Navigation/navbar.module.scss";

type NavbarTheme = {
  buttonBack: string,
  buttonColor: string,
  otherColorColor: string,
};

const Navbar = ({
  buttonBack,
  buttonColor,
  otherColor,
}: {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
}) => {
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
  ];

  const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>({
    buttonBack: buttonBack,
    buttonColor: buttonColor,
    otherColorColor: otherColor,
  });

  const [activeSideBar, setActiveSideBar] = useState(false);

  const activeSideColors = {
    backColor: "white",
    hoverColor: "var(--gold)",
    textColor: "var(--black)",
    thColor: "white",
    linkColor: "white",
    lhColor: "rgba(255,255,255,0.5)",
    logoColor: "white",
  };

  const barStyle = {
    "--background": activeSideBar
      ? activeSideColors.backColor
      : navbarTheme.backColor,
    "--backhover": activeSideBar
      ? activeSideColors.hoverColor
      : navbarTheme.hoverColor,
    "--color": activeSideBar
      ? activeSideColors.textColor
      : navbarTheme.textColor,
    "--colorhover": activeSideBar
      ? activeSideColors.thColor
      : navbarTheme.thColor,
    "--linkcolor": activeSideBar
      ? activeSideColors.linkColor
      : navbarTheme.linkColor,
    "--linkhover": activeSideBar
      ? activeSideColors.lhColor
      : navbarTheme.lhColor,
    "--logocolor": activeSideBar
      ? activeSideColors.logoColor
      : navbarTheme.logoColor,
  } as React.CSSProperties;

  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__inner}>
            <Link href="/" className={styles.nav__logo}>
              <Logo />
            </Link>

            <nav className={styles.navbar}>
              <ul className={styles.nav__links}>
                {navbarLinks.map((data, i) => (
                  <li className={styles.nav__link} key={i}>
                    <Link href={data.link}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.nav__left}>
              <div className={styles.lng__select}>
                <LanguageSwitcher />
              </div>
              <Link
                href={currentLng === "fr" ? "/contact" : "/en/contact"}
                className={styles.contact}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
