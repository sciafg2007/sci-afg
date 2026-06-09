// "use client";

// import { useState, useEffect, useRef } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { useT } from "next-i18next/client";
// import i18nConfig from "../i18n.config";
// import World from "./Icons/World";
// import ChevDown from "./Icons/ChevDown";
// import styles from "../styles/Navigation/languageswitcher.module.scss";

// export default function LanguageSwitcher() {
//   const { t, i18n } = useT();
//   const [activeSelect, setActiveSelect] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { supportedLngs } = i18nConfig;
//   const currentLng = i18n.language;
//   const targetRef = useRef<HTMLDivElement>(null);

//   const switchLocale = (locale: string) => {
//     const segments = pathname.split("/").filter(Boolean);
//     const pathWithoutLocale = supportedLngs.includes(segments[0])
//       ? segments.slice(1)
//       : segments;
//     const nextPath =
//       locale === i18nConfig.fallbackLng
//         ? `/${pathWithoutLocale.join("/")}`
//         : `/${locale}/${pathWithoutLocale.join("/")}`;

//     const cleanPath = nextPath === "/" ? "/" : nextPath.replace(/\/$/, "");

//     router.push(cleanPath);
//   };

//   // Fermer le modal quand on clique en dehors
//   useEffect(() => {
//     const handleOutsideClick = (e: MouseEvent) => {
//       if (!activeSelect) return;
//       const el = targetRef?.current;
//       if (el && !el.contains(e.target as Node)) {
//         setActiveSelect(false);
//       }
//     };
//     document.addEventListener("pointerdown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("pointerdown", handleOutsideClick);
//     };
//   }, [activeSelect, targetRef]);

//   return (
//     <div
//       className={styles.lng__switcher}
//       onClick={() => setActiveSelect(!activeSelect)}
//       ref={targetRef}
//     >
//       <div className={styles.world}>
//         <World />
//       </div>

//       <div className={styles.language}>
//         <span>
//           {currentLng === "fr" ? t("common:french") : t("common:english")}
//         </span>
//         <span className={`${styles.svg} ${activeSelect ? styles.active : ""}`}>
//           <ChevDown />
//         </span>

//         <div
//           className={`${styles.languages} ${activeSelect ? styles.active : ""}`}
//         >
//           <div
//             className={`${styles.lng} ${
//               currentLng === "fr" ? styles.fade : ""
//             }`}
//             onClick={() => switchLocale("fr")}
//           >
//             {t("common:french")}
//           </div>

//           <div
//             className={`${styles.lng} ${
//               currentLng === "en" ? styles.fade : ""
//             }`}
//             onClick={() => switchLocale("en")}
//           >
//             {t("common:english")}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { useT } from "next-i18next/client";
// import i18nConfig from "../i18n.config";
// import World from "./Icons/World";
// import ChevDown from "./Icons/ChevDown";
// import styles from "../styles/Navigation/languageswitcher.module.scss";

// export default function LanguageSwitcher() {
//   const { t, i18n } = useT();
//   const [activeSelect, setActiveSelect] = useState(false);
//   const pathname = usePathname();
//   const { supportedLngs, fallbackLng } = i18nConfig;
//   const targetRef = useRef<HTMLDivElement>(null);

//   const currentLng = pathname.startsWith("/en") ? "en" : "fr";

//   const setLocaleCookie = (newLocale: string) => {
//     const days = 30;
//     const date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     const expires = "; expires=" + date.toUTCString();
//     document.cookie = `NEXT_LOCALE=${newLocale}${expires};path=/`;
//   };

//   const switchLocale = (locale: string) => {
//     const segments = pathname.split("/").filter(Boolean);

//     // Remove /en prefix if present
//     const pathWithoutLocale =
//       segments[0] === "en" ? segments.slice(1) : segments;

//     // Translate slugs for your current project
//     const translatedSegments = pathWithoutLocale.map((segment) => {
//       if (locale === "en") {
//         if (segment === "a-propos") return "about";
//         if (segment === "confidentialite") return "privacy";
//       } else {
//         if (segment === "about") return "a-propos";
//         if (segment === "privacy") return "confidentialite";
//       }
//       return segment;
//     });

//     const nextPath =
//       locale === fallbackLng
//         ? `/${translatedSegments.join("/")}`
//         : `/en/${translatedSegments.join("/")}`;

//     const cleanPath = nextPath === "/" ? "/" : nextPath.replace(/\/$/, "");

//     i18n.changeLanguage(locale);
//     setLocaleCookie(locale);
//     history.pushState(null, "", cleanPath);
//     setActiveSelect(false);
//   };

//   // Fermer le modal quand on clique en dehors
//   useEffect(() => {
//     const handleOutsideClick = (e: MouseEvent) => {
//       if (!activeSelect) return;
//       const el = targetRef?.current;
//       if (el && !el.contains(e.target as Node)) {
//         setActiveSelect(false);
//       }
//     };
//     document.addEventListener("pointerdown", handleOutsideClick);
//     return () => {
//       document.removeEventListener("pointerdown", handleOutsideClick);
//     };
//   }, [activeSelect, targetRef]);

//   return (
//     <div
//       className={styles.lng__switcher}
//       onClick={() => setActiveSelect(!activeSelect)}
//       ref={targetRef}
//     >
//       <div className={styles.world}>
//         <World />
//       </div>

//       <div className={styles.language}>
//         <span>
//           {currentLng === "fr" ? t("common:french") : t("common:english")}
//         </span>
//         <span className={`${styles.svg} ${activeSelect ? styles.active : ""}`}>
//           <ChevDown />
//         </span>

//         <div
//           className={`${styles.languages} ${activeSelect ? styles.active : ""}`}
//         >
//           <div
//             className={`${styles.lng} ${
//               currentLng === "fr" ? styles.fade : ""
//             }`}
//             onClick={() => switchLocale("fr")}
//           >
//             {t("common:french")}
//           </div>

//           <div
//             className={`${styles.lng} ${
//               currentLng === "en" ? styles.fade : ""
//             }`}
//             onClick={() => switchLocale("en")}
//           >
//             {t("common:english")}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useT } from "next-i18next/client";
import i18nConfig from "../i18n.config";
import World from "./Icons/World";
import ChevDown from "./Icons/ChevDown";
import styles from "../styles/Navigation/languageswitcher.module.scss";

export default function LanguageSwitcher() {
  const { t, i18n } = useT();

  const pathname = usePathname();
  const { fallbackLng } = i18nConfig;

  const targetRef = useRef<HTMLDivElement>(null);

  const [activeSelect, setActiveSelect] = useState(false);
  const [currentLng, setCurrentLng] = useState(i18n.language || "fr");

  const setLocaleCookie = (newLocale: string) => {
    const days = 30;
    const date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    const expires = "; expires=" + date.toUTCString();

    document.cookie = `NEXT_LOCALE=${newLocale}${expires};path=/`;
  };

  const switchLocale = async (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);

    // Remove /en prefix if present
    const pathWithoutLocale =
      segments[0] === "en" ? segments.slice(1) : segments;

    // Translate slugs
    const translatedSegments = pathWithoutLocale.map((segment) => {
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

    // Update i18n first
    await i18n.changeLanguage(locale);

    // Update local state so React rerenders immediately
    setCurrentLng(locale);

    // Save cookie
    setLocaleCookie(locale);

    // Change URL without reload
    history.pushState(null, "", cleanPath);

    setActiveSelect(false);
  };

  // Sync if i18n language changes elsewhere
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      setCurrentLng(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!activeSelect) return;

      const el = targetRef.current;

      if (el && !el.contains(e.target as Node)) {
        setActiveSelect(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [activeSelect]);

  return (
    <div
      className={styles.lng__switcher}
      onClick={() => setActiveSelect(!activeSelect)}
      ref={targetRef}
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
