import React from 'react'
import { CldImage } from "next-cloudinary";
import Link from 'next/link';
import styles from "../../styles/ReUsables/projectbox.module.scss"

const ProjectBox = ({transaction, image, link} : {transaction: string, image: string, link: string }) => {
  return (
    <div className={styles.projectbox}>
      <div className={styles.pb__top}>
        <div className={styles.image}>

        </div>
        <span className={styles.tag}>

        </span>
      </div>
      <div className={styles.pb__bottom}>

      </div>
    </div>
  )
}

export default ProjectBox