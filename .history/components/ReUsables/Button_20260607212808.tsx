import React from "react";
import Link from "next/link";
import ChevSide from "@/utils/Icons/ChevSide";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  border,
  borderHover,
  link,
  text,
  target==
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  border: string;
  borderHover: string;
  link: string;
  text: string;
  target?:string
}) => {
  const barStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
    "--border": border,
    "--borderhover": borderHover,
  } as React.CSSProperties;

  return (
    <Link className={styles.button} href={link} style={barStyle} target={target}>
      <div className={styles.text__section}>
        <div className={styles.ts__wrapper}>
          <p className={styles.p}>{text}</p>
          <p className={styles.p}>{text}</p>
        </div>
      </div>
      <div className={styles.chevron}>
        <ChevSide />
      </div>
    </Link>
  );
};

export default Button;
