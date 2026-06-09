"use client";

import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import FormInput from "./FormInput";
import Arrow from "@/utils/Icons/Arrow";
import styles from "../../styles/ContactPage/contactsection.module.scss";

const ContactBox = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const formRef = useRef<HTMLFormElement | null>(null);

  const [buttonText, setButtonText] = useState(t("ContactPage:send"));

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickError, setTickError] = useState(false);
  const [activeBox, setActiveBox] = useState(false);

  const FormFields = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "John Doe",
      errorMessage: t("ContactPage:nameerror"),
      required: true,
      minlength: 3,
      inputState: true,
      label: t("ContactPage:namelabel"),
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "example@domain.com",
      errorMessage: t("ContactPage:emailerror"),
      required: true,
      inputState: true,
      label: "Email",
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "+237 690-000-000",
      errorMessage: t("ContactPage:phoneerror"),
      required: true,
      minlength: 5,
      inputState: true,
      label: t("ContactPage:phonelabel"),
    },
    {
      id: 4,
      name: "subject",
      type: "text",
      placeholder: t("ContactPage:subjectplace"),
      errorMessage: t("ContactPage:subjecterror"),
      required: true,
      minlength: 5,
      inputState: true,
      label: t("ContactPage:subjectlabel"),
    },
    {
      id: 5,
      name: "message",
      type: "text",
      placeholder: t("ContactPage:tellmore"),
      errorMessage: t("ContactPage:messageerror"),
      required: true,
      minlength: 70,
      inputState: false,
      label: "Message",
    },
  ];

  const firstFour = FormFields.slice(0, 4); // Gets the first 4 items
  const lastField = FormFields[4];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }

    setTickError(false);

    //Form Data
    const formData = new FormData(event.currentTarget);
    const fullname = formData.get("fullname") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone") as string | null;
    const subject = formData.get("subject") as string | null;
    const message = formData.get("message") as string | null;

    // Change button text and show "Submitting..."
    setButtonText(t("ContactPage:sending"));
    setIsSubmitting(true);

    try {
      const response = await fetch(`/${currentLocale}/api/contact`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          subject,
          message,
        }),
      });
      if (response.ok) {
        // On success, update button text
        setButtonText(t("ContactPage:thankyou"));
        // Reset form after a successful submission
        if (formRef.current) {
          formRef.current.reset();
        }
        setActiveBox(false);
      } else {
        // If API response is not ok, show error
        setButtonText("Sorry, an error occurred");
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText("Sorry, an error occurred");
      setIsSubmitting(false);
    } finally {
      // After 3 seconds, reset the button text to "Submit form"
      setIsSubmitting(false); // Enable the button again
      setTimeout(() => {
        setButtonText(t("ContactPage:send"));
      }, 5000);
    }
  };

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;
    setActiveBox(newActiveBox);

    // If the user ticks the box, remove any error
    if (newActiveBox) {
      setTickError(false);
    }
  };

  return (
    <div className={styles.contactbox}>
      <div className={styles.cb__content}>
        <div className={styles.cb__top}>
          <h3 className={styles.cb__h3}>{t("ContactPage:message")}</h3>
          <p className={styles.cb__p}>{t("ContactPage:reply")}</p>
        </div>
        <div className={styles.cb__bottom}>
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form__form}>
              <div className={styles.ff__top}>
                {firstFour.map((data, i) => (
                  <FormInput
                    data={data}
                    key={`fs${i}`}
                    isSubmitting={isSubmitting}
                  />
                ))}
              </div>
              <FormInput data={lastField} isSubmitting={isSubmitting} />
            </div>
            <div className={styles.tickbox}>
              <div className={styles.ticktop}>
                <div
                  className={`${styles.tick} ${activeBox ? styles.active : ""}`}
                  onClick={toggleCheckbox}
                >
                  <div className={styles.tbutton}></div>
                </div>
                <div className={styles.agree}>
                  <span>{t("ContactPage:tickagree")}</span>{" "}
                  <Link
                    href={
                      currentLocale === "en"
                        ? "/en/privacy-policy"
                        : "/fr/confidentialite"
                    }
                  >
                    {t("ContactPage:privacyy")}
                  </Link>
                </div>
              </div>
              {tickError && (
                <span className={styles.checkbox__error}>
                  {t("ContactPage:tickagree2")}
                </span>
              )}
            </div>
            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              <span>{buttonText}</span>
              {isSubmitting ? (
                <div className={styles.sub__right}>
                  <span className={styles.spinner}></span>
                </div>
              ) : (
                <div className={styles.bicon}>
                  <div className={styles.bicon__wrapper}>
                    <div className={styles.icons}>
                      <Arrow />
                    </div>
                    <div className={styles.icons}>
                      <Arrow />
                    </div>
                  </div>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactBox;
