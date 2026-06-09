import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/button.module.scss"

const Button = () => {
  return (
    <Link className={styles.button} href="/">
      <div className={styles.text__section}>

      </div>
    </Link>
  )
}

export default Button