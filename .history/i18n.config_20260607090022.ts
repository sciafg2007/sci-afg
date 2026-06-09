import type { I18nConfig } from "next-i18next/proxy";

const i18nConfig: I18nConfig = {
  supportedLngs: ["fr", "en"],
  fallbackLng: "fr",
  defaultNS: "common",
  ns: ["common", "home", "about", "privacy", "services", "contact", ""],
  hideDefaultLocale: true,
};

export default i18nConfig;
