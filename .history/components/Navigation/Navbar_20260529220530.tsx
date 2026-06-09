"use client";

import React, { useState, useEffect, useRef } from "react";
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

  const Navbar = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = Navbar.current;
    if (!navigation) return;

    if (navigation) {
      // Initially set navigation to visible with a transparent background.
      gsap.set(navigation, {
        opacity: 1,
        background: "transparent",
      });

      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=300 top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          // If scrolled less than 300, force nav to be visible and transparent.
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
            // Once past 300, always force the gradient background immediately.
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
    }
  }, []);

  return (
    <>
      <header className={styles.navigation} style={barStyle} ref={Navbar}>
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
