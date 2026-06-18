"use client";

import React, { useState } from "react";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import BetterMarque from "./BetterMarque";
import Link from "next/link";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const navbarLinks = [
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
    {
      name: "Contact",
      link: currentLng === "fr" ? "/contact" : "/en/contact",
    },
  ];

  //BetterMarque
  const [activeBetter, setActiveBetter] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <span className={styles.ft__span}>Sitemap</span>
          <div className={styles.ft__links}>
            {navbarLinks.map((data, i) => (
              <Link href={data.link} className={styles.f__link} key={i}>
                <span className={styles.f__span}>{data.name}</span>
              </Link>
            ))}
            <div className={styles.separator}></div>
          </div>
        </div>
        <div className={styles.footer__mid}>
          <div className={styles.fm__left}>
            <div className={styles.fm__wrap}>
              <span className={styles.ft__span}>{t("home:socials")}</span>
              <div className={styles.other__links}>
                <Link
                  href="https://www.facebook.com/p/AFG-Immo-61575173587751/"
                  target="_blank"
                >
                  Facebook
                </Link>
                <Link href="/" target="_blank">
                  Instagram
                </Link>
                <Link href="/" target="_blank">
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.fm__right}>
            <div className={styles.fm__wrap}>
              <span className={styles.ft__span}>Info</span>
              <div className={styles.other__links}>
                <Link href="mailto:info.afrigroupe@sci-afg.com" target="_blank">
                  info.afrigroupe@sci-afg.com
                </Link>
                <Link href="tel:237655225161" target="_blank">
                  +237 655 22 51 61
                </Link>
                <Link
                  href="https://maps.app.goo.gl/jn8DkpzM4zuSVVnJ6"
                  target="_blank"
                >
                  Immeuble CCA <br />
                  Pharmacie du Soleil
                </Link>
              </div>
            </div>
            <div className={styles.fm__wrap}>
              <span className={styles.ft__span}>Legal</span>
              <div className={styles.other__links}>
                <Link
                  href={currentLng === "fr" ? "/confidentialite" : "en/privacy"}
                >
                  {t("home:confidential")}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.fb__left}>
            <Logo />
          </div>
          <div className={styles.fb__right}>
            <div className={styles.fbrr}>
              <div className={styles.fbr__wrap}>
                <span className={styles.fbw}>SCI AFG</span>
                <span className={styles.fbw__span}>{t("home:rights")}</span>
              </div>
              <div className={`${styles.fbr__wrap} ${styles.since}`}>
                <span className={styles.fbw}>{t("home:since")}</span>
                <span className={styles.fbw__span}>{t("home:octo")}</span>
              </div>
            </div>
            <div className={styles.fbr__wrap}>
              <span className={styles.fbw}>{t("home:websiteby")}</span>
              <span
                className={`${styles.fbw__span} ${styles.better}`}
                onClick={() => setActiveBetter(!activeBetter)}
              >
                BetterMarque SARL
              </span>
            </div>
            <BetterMarque
              activeBetter={activeBetter}
              setActiveBetter={setActiveBetter}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
