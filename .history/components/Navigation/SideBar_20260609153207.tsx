import React, { useState } from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import { SideBarAnim } from "@/animation";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import Cancel from "@/utils/Icons/Cancel";
import styles from "../../styles/Navigation/sidebar.module.scss";

// ─── Types ────────────────────────────────────────────────────────────────────
type NavbarTheme = {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
  border: string;
};

interface NavbarProps {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
  border: string;
  scrollHeight: number;
}

interface NavLink {
  name: string;
  link: string;
}

const SideBar = ({
  activeSideBar,
  setActiveSide,
}: {
  activeSideBar: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t, i18n } = useT();
  const currentLng: string = i18n.language;

  const navbarLinks: NavLink[] = [
    {
      name: t("common:home"),
      link: currentLng === "fr" ? "/" : "/en",
    },
    {
      name: t("common:rent"),
      link:
        currentLng === "fr"
          ? "/portfolio?transaction=a-louer"
          : "/en/portfolio?transaction=a-louer",
    },
    {
      name: t("common:buy"),
      link:
        currentLng === "fr"
          ? "/portfolio?transaction=a-vendre"
          : "/en/portfolio?transaction=a-vendre",
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

  return (
    <div className={styles.sidebar}>
      <div className={styles.side__wrap}>
        <div className={styles.sb__top}>
          <LanguageSwitcher status="side" />
          {/* <Link href="/" className={styles.nav__logo}>
            <Logo />
          </Link> */}
          <div className={styles.menu}>
            <span className={styles.menutext}>Close</span>
            <Cancel />
          </div>
        </div>
        <div className={styles.sidemid}>
          {navbarLinks.map((data: NavLink, i: number) => (
            <Link href={data.link} key={i} className={styles.nav__link}>
              <span>{data.name}</span>
            </Link>
          ))}
        </div>
        <div className={styles.sidebot}>
          <div className={styles.loca}>
            <span>{t("home:location")}</span>
            <div className={styles.locone}>
              <span>7eme Etage Immeuble CCA, pharmacie du soleil</span>
              <span>Immeuble CCA Bonanjo, Douala</span>
              <span>CCA Douch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
