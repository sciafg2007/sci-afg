import type { I18nConfig } from 'next-i18next/proxy'

const i18nConfig: I18nConfig = {
  supportedLngs: ['en', 'de', 'sv'],
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common', 'home', 'about', 'contact'],
  hideDefaultLocale: true
}

export default i18nConfig