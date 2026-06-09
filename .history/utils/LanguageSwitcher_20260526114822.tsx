'use client'

import { usePathname } from 'next/navigation'
import { useT } from 'next-i18next/client'
import i18nConfig from '../i18n.config'
import styles from "../../styles/Navigation/navbar.module.scss";

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const { i18n } = useT()
  const { supportedLngs, fallbackLng } = i18nConfig
  const currentLng = i18n.language

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/').filter(Boolean)

    const pathWithoutLocale = supportedLngs.includes(segments[0])
      ? segments.slice(1)
      : segments

    const nextPath =
      locale === fallbackLng
        ? `/${pathWithoutLocale.join('/')}`
        : `/${locale}/${pathWithoutLocale.join('/')}`

    const cleanPath = nextPath.replace(/\/$/, '') || '/'

    history.pushState({}, '', cleanPath)
  }

  return (
    <div className={styles.lng__w}>

      {/* {supportedLngs.map((lng) => (
        <button
          key={lng}
          onClick={() => switchLocale(lng)}
          type="button"
          className={`language-button${currentLng === lng ? ' active' : ''}`}
        >
          {lng}
        </button>
      ))} */}
    </div>
  )
}