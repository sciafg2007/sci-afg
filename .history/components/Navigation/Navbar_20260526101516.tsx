import React from 'react'
import Link from 'next/link'
import Logo from '@/utils/CompanyLogos/Logo'
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.nav__container}`}>
          <Link href="/">
            <Logo/
          </Link>
        </div>

      </header>
    </>
  )
}

export default Navbar