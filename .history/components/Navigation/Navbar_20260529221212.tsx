"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import styles from "../../styles/Navigation/navbar.module.scss";

type NavbarTheme = {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
  border: string
};

const Navbar = ({
  buttonBack,
  buttonColor,
  otherColor,
  border
}: {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
  border: string
}) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const navbarLinks = [
    {
      name: t("common:home"),
      link: currentLng === "fr" ? "/" : "/en",
    },
    {
      name: t("common:rent"),
      link: currentLng === "fr" ? "/portfolio" : "/en/portfolio",
    },
    {
      name: t("common:buy"),
      link: currentLng === "fr" ? "/portfolio" : "/en/portfolio",
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

  const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>({
    buttonBack: buttonBack,
    buttonColor: buttonColor,
    otherColor: otherColor,
    border: border
  });

  const [activeSideBar, setActiveSideBar] = useState(false);

  const activeSideColors = {
    buttonBack: "var(--darkblue)",
    buttonColor: "white",
    otherColor: "var(--darkblue)",
    border: "1px solid rgba(0,0,0,0.1)"
  };

  const barStyle = {
    "--buttonBack": activeSideBar
      ? activeSideColors.buttonBack
      : navbarTheme.buttonBack,
    "--buttonColor": activeSideBar
      ? activeSideColors.buttonColor
      : navbarTheme.buttonColor,
    "--otherColor": activeSideBar
      ? activeSideColors.otherColor
      : navbarTheme.otherColor,
  } as React.CSSProperties;

  const navRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = navRef.current;
    if (!navigation) return;

    gsap.set(navigation, {
      opacity: 1,
      background: "transparent",
    });

    let lastScroll = 0;

    const trigger = ScrollTrigger.create({
      start: "top+=300 top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        if (self.scroll() < 300) {
          gsap.to(navigation, {
            opacity: 1,
            background: "transparent",
            duration: 0.5,
          });

          setNavbarTheme({
            buttonBack: buttonBack,
            buttonColor: buttonColor,
            otherColor: otherColor,
          });
        } else {
          if (self.direction === 1 && self.scroll() > lastScroll) {
            gsap.to(navigation, {
              duration: 0.5,
            });
          } else if (self.direction === -1 && self.scroll() < lastScroll) {
            gsap.to(navigation, {
              duration: 0.5,
            });
          }

          gsap.set(navigation, {
            background: "white",
            duration: 0.5,
          });

          setNavbarTheme({
            buttonBack: activeSideColors.buttonBack,
            buttonColor: activeSideColors.buttonColor,
            otherColor: activeSideColors.otherColor,
          });
        }

        lastScroll = self.scroll();
      },
    });

    return () => {
      trigger.kill();
    };

  }, [buttonBack, buttonColor, otherColor]);

  return (
    <>
      <header className={styles.navigation} style={barStyle} ref={navRef}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__inner}>
            <Link href="/" className={styles.nav__logo}>
              <Logo />
            </Link>

            <nav className={styles.navbar}>
              <ul className={styles.nav__links}>
                {navbarLinks.map((data, i) => (
                  <li className={styles.nav__link} key={i}>
                    <Link href={data.link}>{data.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.nav__left}>
              <div className={styles.lng__select}>
                <LanguageSwitcher />
              </div>
              <Link
                href={currentLng === "fr" ? "/contact" : "/en/contact"}
                className={styles.contact}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
