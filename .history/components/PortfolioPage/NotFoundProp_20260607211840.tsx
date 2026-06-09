import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../ReUsables/Button";
import styles from "../../styles/PortfolioPage/portfoliobottom.module.scss";

const NotFoundProp = ({message}: {message: string}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={styles.not__found}>
      <h3 className={styles.nf__h3}>{t("portfolio:nfheader")}</h3>
      <p className={styles.nf__p}>{t("portfolio:nftext")}</p>
      <div className={styles.nf__cta}>
        {/* <WhatsappButton
          buttontext={t("ServicesPage:nfcontact")}
          textmessage={message}
          backColor="white"
          textColor="var(--black)"
          border="1px solid rgba(0,0,0,0.15)"
          dropshadow="drop-shadow(0px 0px 5px rgba(0,0,0,0.15))"
        /> */}
      </div>
    </div>
  );
};

export default NotFoundProp;
