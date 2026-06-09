import React from "react";
import styles from "../../styles/HomePage/homeabout.module.scss";

const HomeAbout = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  
  return (
    <div className={`section ${styles.home__about}`}>
      <div className={`container ${styles.ha__container}`}>
        <h3 className={styles.hp__h3}>{t("home:hprops")}</h3>
      </div>
    </div>
  );
};

export default HomeAbout;
