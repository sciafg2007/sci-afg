import React from "react";
import Link from "next/link";
import styles from "../../styles/ContactPage/contactsection.module.scss";

interface DataInterface {
  head: string;
  link?: string;
  head1: string;
  text: string;
}

const ContactWrap = ({ data }: { data: DataInterface }) => {
  return (
    <div className={styles.con__wrap}>
      <span className={styles.cw__head}>{data.head}</span>
      <div className={styles.cw__bottom}>
        {data.link ? (
          <Link href={data.link} className={styles.cw__h2}>
            {data.head1}
          </Link>
        ) : (
          <span className={styles.cw__h2}>{data.head1}</span>
        )}
        <p>{data.text}</p>
      </div>
    </div>
  );
};

export default ContactWrap;
