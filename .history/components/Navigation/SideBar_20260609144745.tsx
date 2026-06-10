import React, { useState } from "react";
import Link from "next/link";
import { SideBarAnim } from "@/animation";
import { motion } from "framer-motion";
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

const SideBar = () => {
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

  return <div>SideBar</div>;
};

export default SideBar;
