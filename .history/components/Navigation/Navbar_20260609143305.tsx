"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useT } from "next-i18next/client";
import Logo from "@/utils/CompanyLogos/Logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LanguageSwitcher from "@/utils/LanguageSwitcher";
import styles from "../../styles/Navigation/navbar.module.scss";

// ─── Types ────────────────────────────────────────────────────────────────────
type NavbarTheme = {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
  border: string;
};

interface NavbarProps {
  buttonBack: string;
  buttonColor: string;
  otherColor: string;
  border: string;
  scrollHeight: number;
}

interface NavLink {
  name: string;
  link: string;
}

// ─── Navbar Component ─────────────────────────────────────────────────────────
const Navbar: React.FC<NavbarProps> = ({
  buttonBack,
  buttonColor,
  otherColor,
  border,
  scrollHeight,
}) => {
  const { t, i18n } = useT();
  const currentLng: string = i18n.language;

  const navbarLinks: NavLink[] = [
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
  ];

  const activeSideColors: NavbarTheme = {
    buttonBack: "var(--darkblue)",
    buttonColor: "white",
    otherColor: "var(--darkblue)",
    border: "1px solid rgba(0,0,0,0.1)",
  };

  const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>({
    buttonBack,
    buttonColor,
    otherColor,
    border,
  });

  const [activeSideBar, setActiveSideBar] = useState<boolean>(false);

  const navRef = useRef<HTMLElement | null>(null);

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
    "--border": activeSideBar ? activeSideColors.border : navbarTheme.border,
  } as React.CSSProperties;

  useEffect(() => {
    // Guard — do nothing if ref is not attached yet
    const navigation = navRef.current;
    if (!navigation) return;

    gsap.registerPlugin(ScrollTrigger);

    // Wrap in gsap.context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      gsap.set(navigation, {
        opacity: 1,
        background: "transparent",
      });

      let lastScroll: number = 0;

      const trigger = ScrollTrigger.create({
        start: `top+=${scrollHeight} top`,
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          const currentScroll: number = self.scroll();

          if (currentScroll < scrollHeight) {
            gsap.to(navigation, {
              opacity: 1,
              background: "transparent",
              duration: 0.5,
            });

            setNavbarTheme({
              buttonBack,
              buttonColor,
              otherColor,
              border,
            });
          } else {
            if (self.direction === 1 && currentScroll > lastScroll) {
              gsap.to(navigation, { duration: 0.5 });
            } else if (self.direction === -1 && currentScroll < lastScroll) {
              gsap.to(navigation, { duration: 0.5 });
            }

            gsap.set(navigation, {
              background: "white",
            });

            setNavbarTheme({
              buttonBack: activeSideColors.buttonBack,
              buttonColor: activeSideColors.buttonColor,
              otherColor: activeSideColors.otherColor,
              border: activeSideColors.border,
            });
          }

          lastScroll = currentScroll;
        },
      });

      // Cleanup ScrollTrigger instance on unmount
      return () => {
        trigger.kill();
      };
    }, navRef); // scope context to navRef

    // Cleanup gsap context on unmount
    return () => ctx.revert();
  }, [buttonBack, buttonColor, otherColor, border]);

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
                {navbarLinks.map((data: NavLink, i: number) => (
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
              <div className={styles.menu}>
                <span>Menu</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
