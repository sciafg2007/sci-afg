import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const ProjectBox = ({
  transaction,
  image,
  link,
  projectDetails
}: {
  transaction: string;
  image: string;
  link: string;
  projectDetails
}) => {
  return (
    <Link className={styles.projectbox} href={link}>
      <div className={styles.pb__top}>
        <div className={styles.image}>
          <CldImage alt={projectDetails.na} fill src={projectDetails.image} />
        </div>
        <span className={styles.tag}>{projectDetails.transaction}</span>
      </div>
      <div className={styles.pb__bottom}></div>
    </Link>
  );
};

export default ProjectBox;
