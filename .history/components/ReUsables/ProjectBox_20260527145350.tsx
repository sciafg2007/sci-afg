import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import styles from "../../styles/ReUsables/projectbox.module.scss";

interface ProjectData {
  link: string;
  name: string;
  image: string;
  transaction: string;
  type: string;
  room: number;
  bath: number;
  area: number;
  price: {
    value: number;
    status: string;
  };
  location: string;
}

const ProjectBox = ({ projectDetails }: { projectDetails: ProjectData }) => {
  return (
    <Link className={styles.projectbox} href={projectDetails.link}>
      <div className={styles.pb__top}>
        <div className={styles.image}>
          <CldImage alt={projectDetails.name} fill src={projectDetails.image} />
        </div>
        <span className={styles.tag}>{projectDetails.transaction}</span>
      </div>
      <div className={styles.pb__bottom}>
        <div className={styles.pbb__top}>

        </div>
        <div className={styles.pbb__bottom}>

        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
