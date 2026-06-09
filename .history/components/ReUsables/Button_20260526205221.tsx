import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  link
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
}) => {
  return (
    <Link className={styles.button} href="/">
      <div className={styles.text__section}></div>
      <div className={styles.chevron}></div>
    </Link>
  );
};

export default Button;
