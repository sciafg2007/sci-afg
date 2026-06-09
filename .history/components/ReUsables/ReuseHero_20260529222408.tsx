import React from "react";
import styles from "../../styles/ReUsables/reusehero.module.scss";

const ReuseHero = ({
  heroText,
  subText,
}: {
  heroText: string;
  subText: string;
}) => {
  return (
    <div className={styles.reusehero}>
      <div className={`container ${styles.rh__container}`}>
        <h1>{heroText}</h1>
        <p>{subText}</p>
      </div>
    </div>
  );
};

export default ReuseHero;
