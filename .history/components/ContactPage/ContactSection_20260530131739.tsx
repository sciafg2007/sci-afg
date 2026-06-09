import React from "react";
import { useT } from "next-i18next/client";
import ContactBox from "./ContactBox";
import ContactWrap from "./ContactWrap";
import styles from "../../styles/ContactPage/contactsection.module.scss";

const ContactSection = () => {
  const { t } = useT();

  const contactData = [
    {
      head: "Email",
      link: "mailto:info.afrigroupe@sci-afg.com",
      head1: "info.afrigroupe@sci-afg.com",
      text: t("contact:sendemail")
    },
    {
      head: t("contact:phonelabel"),
      link: "tel:+237655225161",
      head1: "+237 655 22 51 61",
      text: t("contact:teltext")
    },
    {
      head: t("contact:loca"),
      head1: "Hibiscus Center Park, Quartier Fouda",
      text: t("contact:need")
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
