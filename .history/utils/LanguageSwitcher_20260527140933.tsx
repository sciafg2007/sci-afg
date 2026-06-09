"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useT } from "next-i18next/client";
import i18nConfig from "../i18n.config";
import World from "./Icons/World";
import ChevDown from "./Icons/ChevDown";
import styles from "../styles/Navigation/languageswitcher.module.scss";

export default function LanguageSwitcher() {
  const { t, i18n } = useT();
  const [activeSelect, setActiveSelect] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { supportedLngs } = i18nConfig;
  const currentLng = i18n.language;
  const targetRef = useRef<HTMLDivElement>(null);

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const pathWithoutLocale = supportedLngs.includes(segments[0])
      ? segments.slice(1)
      : segments;
    const nextPath =
      locale === i18nConfig.fallbackLng
        ? `/${pathWithoutLocale.join("/")}`
        : `/${locale}/${pathWithoutLocale.join("/")}`;

    const cleanPath = nextPath === "/" ? "/" : nextPath.replace(/\/$/, "");

    router.push(cleanPath);
  };

  // Fermer le modal quand on clique en dehors
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!activeSelect) return;
      const el = targetRef?.current;
      if (el && !el.contains(e.target as Node)) {
        setActiveSelect(false);
      }
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [activeSelect, targetRef]);

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
        <span className={`${styles.svg} ${activeSelect ? styles.active : ""}`}>
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
