import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../ReUsables/Button";
import styles from "../../styles/PortfolioPage/portfoliobottom.module.scss";

const NotFoundProp = ({ message }: { message: string }) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const encoded = encodeURIComponent(message);

  const url = `https://wa.me/237675846270?text=${encoded}`;

  return (
    <div className={styles.not__found}>
      <h3 className={styles.nf__h3}>{t("portfolio:nfheader")}</h3>
      <p className={styles.nf__p}>{t("portfolio:nftext")}</p>
      <div className={styles.nf__cta}>
        <Button
        lin
          target="_blank"
          text={t("home:parcourir")}
          backColor="var(--darkblue)"
          hoverColor="white"
          textColor="white"
          thColor="var(--darkblue)"
          border="1px solid transparent"
          borderHover="1px solid var(--darkblue)"
        />
      </div>
    </div>
  );
};

export default NotFoundProp;
