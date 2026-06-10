"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation"; // ← add useRouter
import { useT } from "next-i18next/client";
import i18nConfig from "../i18n.config";
import World from "./Icons/World";
import ChevDown from "./Icons/ChevDown";
import styles from "../styles/Navigation/languageswitcher.module.scss";

export default function LanguageSwitcher({ status }: { status?: string }) {
  const { t, i18n } = useT();
  const [activeSelect, setActiveSelect] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter(); // ← add this
  const { supportedLngs, fallbackLng } = i18nConfig;
  const targetRef = useRef<HTMLDivElement>(null);

  const currentLng = pathname.startsWith("/en") ? "en" : "fr";

  const setLocaleCookie = (newLocale: string): void => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale}${expires};path=/`;
  };

  const switchLocale = (locale: string): void => {
    const segments = pathname.split("/").filter(Boolean);

    const pathWithoutLocale =
      segments[0] === "en" ? segments.slice(1) : segments;

    const translatedSegments = pathWithoutLocale.map((segment: string) => {
      if (locale === "en") {
        if (segment === "a-propos") return "about";
        if (segment === "confidentialite") return "privacy";
      } else {
        if (segment === "about") return "a-propos";
        if (segment === "privacy") return "confidentialite";
      }
      return segment;
    });

    const nextPath =
      locale === fallbackLng
        ? `/${translatedSegments.join("/")}`
        : `/en/${translatedSegments.join("/")}`;

    const cleanPath = nextPath === "/" ? "/" : nextPath.replace(/\/$/, "");

    setLocaleCookie(locale);
    i18n.changeLanguage(locale); // updates client-side translations instantly
    router.push(cleanPath); // triggers Next.js navigation properly
    router.refresh(); // forces server components to re-render with new locale
    setActiveSelect(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent): void => {
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
      ref={targetRef}
    >
      <div className={`${styles.world} ${status==="side" ? styles.side : ""}`}>
        <World />
      </div>

      <div className={styles.language}>
        <span>
          {currentLng === "fr" ? t("common:french") : t("common:english")}
        </span>
        <span className={`${styles.svg} ${activeSelect ? styles.active : ""} ${status==="side" ? styles.side : ""}`}>
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
