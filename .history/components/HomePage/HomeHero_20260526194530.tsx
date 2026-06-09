'use client';

import React from "react";
import Image from "next/image";
import { CldImage } from 'next-cloudinary';
import styles from "../../styles/HomePage/homehero.module.scss";

const HomeHero = () => {
  return (
    <div className={styles.homehero}>
      <div className={styles.background__image}>
        <CldImage
          alt="SCI AFG"
          fill
          // sizes="(max-width: 768px) 100vw,
          // (max-width: 1200px) 50vw,
          // 33vw"
          src="https://res.cloudinary.com/dl6xz3hu4/image/upload/v1779816742/sci_9_tbwg2f.webp"
        />
      </div>
    </div>
  );
};

export default HomeHero;
