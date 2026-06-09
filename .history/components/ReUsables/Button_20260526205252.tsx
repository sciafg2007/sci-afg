import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  link,
  text: string,
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  link: string;
  text: string;
}) => {
  return (
    <Link className={styles.button} href={link}>
      <div className={styles.text__section}></div>
      <div className={styles.chevron}></div>
    </Link>
  );
};

export default Button;
