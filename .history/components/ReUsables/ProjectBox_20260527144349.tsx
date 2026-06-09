import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "../../styles/ReUsables/projectbox.module.scss";


interface ProjectData {
  link: string,
      name: string,
      image: string,
      transaction: t("common:rent"),
      type: t("home:appartement"),
      room: 2,
      bath: 2,
      area: 90,
      price: {
        value: 70000,
        status: t("home:perday"),
      },
      location: "Bonanjo, Douala",
}


const ProjectBox = ({
  projectDetails
}: {
  projectDetails
}) => {
  return (
    <Link className={styles.projectbox} href={projectDetails.link}>
      <div className={styles.pb__top}>
        <div className={styles.image}>
          <CldImage alt={projectDetails.name} fill src={projectDetails.image} />
        </div>
        <span className={styles.tag}>{projectDetails.transaction}</span>
      </div>
      <div className={styles.pb__bottom}></div>
    </Link>
  );
};

export default ProjectBox;
