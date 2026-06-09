import React from 'react'
import { CldImage } from "next-cloudinary";
import styles from "../../styles/ReUsables/projectbox.module.scss"

const ProjectBox = () => {
  return (
    <div className={styles.projectbox}>
      <div className={styles.pb__top}>
        <div className={styles.image}>

        </div>
      </div>
      <div className={styles.pb__bottom}>

      </div>
    </div>
  )
}

export default ProjectBox