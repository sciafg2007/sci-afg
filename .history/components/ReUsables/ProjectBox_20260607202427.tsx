"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useT } from "next-i18next/client";
import House from "@/utils/Icons/House";
import Bed from "@/utils/Icons/Bed";
import Bath from "@/utils/Icons/Bath";
import Area from "@/utils/Icons/Area";
import styles from "../../styles/ReUsables/projectbox.module.scss";
import NumberFormatter from "@/utils/NumberFormatter";

interface PropertyProps {
  _id: string;
  area: number;
  bath?: number | null;
  parlour?: number | null;
  room?: number | null;
  price: number;
  name: string;
  propertytype: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  transaction: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  quarter: string;
  city: {
    cityname: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  rentpricing: string;
  mainimage: {
    alt: string;
  };
}

const ProjectBox = ({ projectDetails }: { projectDetails: PropertyProps }) => {
  const {t, i18n} = useT();
  const currentLocale = i18n.language;
  
  return (
    <Link className={styles.projectbox} href={currentLocale===""}>
      <div className={styles.pb__top}>
        <div className={styles.image}>
          <CldImage
            alt={projectDetails.name}
            fill
            src={projectDetails.image}
            sizes="100vw"
          />
        </div>
        <span className={styles.tag}>{projectDetails.transaction}</span>
      </div>
      <div className={styles.pb__bottom}>
        <div className={styles.pbb__top}>
          <div className={styles.attr}>
            <span>
              <House />
            </span>
            <span>{projectDetails.type}</span>
          </div>
          {projectDetails.room && (
            <div className={`${styles.attr} ${styles.bed}`}>
              <span>
                <Bed />
              </span>
              <span>{projectDetails.room}</span>
            </div>
          )}
          {projectDetails.bath && (
            <div className={styles.attr}>
              <span>
                <Bath />
              </span>
              <span>{projectDetails.bath}</span>
            </div>
          )}
          {projectDetails.area && (
            <div className={`${styles.attr} ${styles.area}`}>
              <span>
                <Area />
              </span>
              <span>{projectDetails.area} m²</span>
            </div>
          )}
        </div>
        <div className={styles.pbb__bottom}>
          <h4 className={styles.pb__h4}>{projectDetails.name}</h4>
          <div className={styles.pdbb}>
            <div className={styles.price}>
              FCFA {NumberFormatter(projectDetails.price.value)}{" "}
              {projectDetails.price.status}
            </div>
            <span className={styles.buttoner}></span>
            <div className={styles.location}>{projectDetails.location}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
