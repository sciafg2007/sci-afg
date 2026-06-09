import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const ProjectBox = ({
  transaction,
  image,
  link,
  
}: {
  transaction: string;
  image: string;
  link: string;
}) => {
  return (
    <Link className={styles.projectbox} href={link}>
      <div className={styles.pb__top}>
        <div className={styles.image}>
          <CldImage alt="SCI AFG" fill src="sci_9_tbwg2f.webp" />
        </div>
        <span className={styles.tag}>{transaction}</span>
      </div>
      <div className={styles.pb__bottom}></div>
    </Link>
  );
};

export default ProjectBox;
