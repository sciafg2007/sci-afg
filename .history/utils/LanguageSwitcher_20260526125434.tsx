"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useT } from "next-i18next/client";
import i18nConfig from "../i18n.config";
import World from "./Icons/World";
import ChevDown from "./Icons/ChevDown";
import styles from "../styles/Navigation/navbar.module.scss";

export default function LanguageSwitcher() {
  const { t, i18n } = useT();
  const [activeSelect, setActiveSelect] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { supportedLngs } = i18nConfig;
  const currentLng = i18n.language;

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const pathWithoutLocale = supportedLngs.includes(segments[0])
      ? segments.slice(1)
      : segments;
    const nextPath =
      locale === i18nConfig.fallbackLng
        ? `/${pathWithoutLocale.join("/")}`
        : `/${locale}/${pathWithoutLocale.join("/")}`;

    const cleanPath = nextPath.replace(/\/$/, '') || '/'

    router.push(nextPath === "/" ? "/" : nextPath.replace(/\/$/, ""));
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
