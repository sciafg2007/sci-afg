"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useT } from "next-i18next/client";
import i18nConfig from "../i18n.config";
import World from "./Icons/World";
import ChevDown from "./Icons/ChevDown";
import styles from "../styles/Navigation/navbar.module.scss";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { t, i18n } = useT();
  const { supportedLngs, fallbackLng } = i18nConfig;
  const currentLng = i18n.language;
  const nextLng = currentLng === "fr" ? "en" : "fr";

  const [activeSelect, setActiveSelect] = useState(false);

  const setLocaleCookie = (newLng: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLng};expires=${expires};path=/`;
  };

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    const pathWithoutLocale = supportedLngs.includes(segments[0])
      ? segments.slice(1)
      : segments;

    const nextPath =
      locale === fallbackLng
        ? `/${pathWithoutLocale.join("/")}`
        : `/${locale}/${pathWithoutLocale.join("/")}`;

    const cleanPath = nextPath.replace(/\/$/, "") || "/";

    // Cookie
    setLocaleCookie(nextLng);

    // Update i18next first so UI strings re-render quickly (optional)
    i18n.changeLanguage(nextLng);

    history.pushState({}, "", cleanPath);
  };

  return (
    <div
      className={styles.lng__switcher}
      onClick={() => setActiveSelect(!activeSelect)}
    >
      <div className={styles.world}>
        <World />
      </div>
      <div className={styles.language}>
        <span>
          {currentLng === "fr" ? t("common:french") : t("common:english")}
        </span>
        <span>
          <ChevDown />
        </span>
        <div
          className={`${styles.languages} ${activeSelect ? styles.active : ""}`}
        >
          <div
            className={`${styles.lng} ${
              currentLng === "fr" ? styles.fade : ""
            }`}
            onClick={() => switchLocale("fr")}
          >
            {t("common:french")}
          </div>
          <div
            className={`${styles.lng} ${
              currentLng === "en" ? styles.fade : ""
            }`}
            onClick={() => switchLocale("en")}
          >
            {t("common:english")}
          </div>
        </div>
      </div>
    </div>
  );
}
