import React from "react";
import Link from "next/link";
import Logo from "@/utils/CompanyLogos/Logo";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  const 
  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__inner}>
            <Link href="/" className={styles.nav__logo}>
              <Logo />
            </Link>

            <nav className={styles.navbar}>

            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
