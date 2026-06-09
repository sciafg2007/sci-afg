import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  link,
  text
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  link: string;
  text: string;
}) => {

  const barStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
  } as React.CSSProperties;

  return (
    <Link className={styles.button} href={link} style={barStyle}>
      <div className={styles.text__section}>
        <div className={styles.ts__wrapper}>
          <p className={styles.p}>{text}</p>
          <p className={styles.p}>{text}</p>
        </div>
      </div>
      <div className={styles.chevron}></div>
    </Link>
  );
};

export default Button;
