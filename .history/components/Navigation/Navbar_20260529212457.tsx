"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import styles from "../../styles/Navigation/navbar.module.scss";

type NavbarTheme = {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
};

const Navbar = ({
  buttonBack,
  buttonColor,
  otherColor,
}: {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
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
  });

  const [activeSideBar, setActiveSideBar] = useState(false);

  const activeSideColors = {
    buttonBack: "var(--darkblue)",
    buttonColor: "white",
    otherColor: "var(--darkblue)",
  };

  const barStyle = {
    "--background": activeSideBar
      ? activeSideColors.backColor
      : navbarTheme.backColor,
    "--backhover": activeSideBar
      ? activeSideColors.hoverColor
      : navbarTheme.hoverColor,
    "--color": activeSideBar
      ? activeSideColors.textColor
      : navbarTheme.textColor,
    "--colorhover": activeSideBar
      ? activeSideColors.thColor
      : navbarTheme.thColor,
    "--linkcolor": activeSideBar
      ? activeSideColors.linkColor
      : navbarTheme.linkColor,
    "--linkhover": activeSideBar
      ? activeSideColors.lhColor
      : navbarTheme.lhColor,
    "--logocolor": activeSideBar
      ? activeSideColors.logoColor
      : navbarTheme.logoColor,
  } as React.CSSProperties;

  const Navbar = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = Navbar.current;
    if (navigation) {
      // Initially set navigation to visible with a transparent background.
      gsap.set(navigation, {
        opacity: 1,
        background: "transparent",
      });

      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=600 top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          // If scrolled less than 700, force nav to be visible and transparent.
          if (self.scroll() < 600) {
            gsap.to(navigation, {
              opacity: 1,
              background: "transparent",
              duration: 0.5,
            });
            setNavbarTheme({
              buttonBack: buttonBack,
              buttonColor: buttonColor,
              otherColorColor: otherColor,
            });
          } else {
            // Then animate the translateY based on scroll direction.
            if (self.direction === 1 && self.scroll() > lastScroll) {
              // Scrolling down: hide nav.
              gsap.to(navigation, {
                // opacity: 0,
                duration: 0.5,
              });
            } else if (self.direction === -1 && self.scroll() < lastScroll) {
              // Scrolling up: show nav.
              gsap.to(navigation, {
                // opacity: 1,
                duration: 0.5,
              });
            }
            // Once past 700, always force the gradient background immediately.
            gsap.set(navigation, {
              background:
                "linear-gradient(180deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0) 100%)",
              duration: 0.5,
            });

            setNavbarTheme({
              backColor: activeSideColors.backColor,
              hoverColor: activeSideColors.hoverColor,
              textColor: activeSideColors.textColor,
              thColor: activeSideColors.thColor,
              linkColor: activeSideColors.linkColor,
              lhColor: activeSideColors.lhColor,
              logoColor: activeSideColors.logoColor,
            });
          }
          lastScroll = self.scroll();
        },
      });
    }
  }, []);

  return (
    <>
      <header className={styles.navigation}>
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
