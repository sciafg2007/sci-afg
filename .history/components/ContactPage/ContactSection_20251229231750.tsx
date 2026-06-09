import React from "react";
import { useTranslation } from "react-i18next";
import ContactBox from "./ContactBox";
import ContactWrap from "./ContactWrap";
import styles from "../../styles/ContactPage/contactsection.module.scss";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      head: "Email",
      link: "mailto:sci_hibiscus@ymail.com",
      head1: "sci_hibiscus@ymail.com",
      text: t("ContactPage:sendemail")
    },
    {
      head: t("ContactPage:phonelabel"),
      link: "tel:+237222222437",
      head1: "+237 2 22 22 24 37",
      text: t("ContactPage:teltext")
    },
    {
      head: t("ContactPage:loca"),
      head1: "Hibiscus Center Park, Quartier Fouda",
      text: t("ContactPage:need")
    }
  ]
  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__left}>
          <ContactBox />
        </div>
        <div className={styles.cs__right}>
          {
            contactData.map((data, i) => (
              <ContactWrap key={i} data={data}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
