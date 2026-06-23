"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useT } from "next-i18next/client";
import House from "@/utils/Icons/House";
import Bed from "@/utils/Icons/Bed";
import Bath from "@/utils/Icons/Bath";
import Area from "@/utils/Icons/Area";
import { urlFor } from "@/sanity/lib/image";
import styles from "../../styles/ReUsables/projectbox.module.scss";
import Image from "next/image";
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
  const { t, i18n } = useT();
  const currentLocale = i18n.language;

  return (
    <Link
      className={styles.projectbox}
      href={
        currentLocale === "fr"
          ? `/portfolio/${projectDetails.slug.current}`
          : `/en/portfolio/${projectDetails.slug.current}`
      }
    >
      <div className={styles.pb__top}>
        <div className={styles.image}>
          <Image
            alt={projectDetails.name}
            fill
            src={
              urlFor(projectDetails.mainimage).width(1920).url() ||
              urlFor(projectDetails.mainimage).url()
            }
            sizes="(max-width: 568px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <span className={styles.tag}>
          {currentLocale === "fr"
            ? projectDetails.transaction.namefr
            : projectDetails.transaction.nameen}
        </span>
      </div>
      <div className={styles.pb__bottom}>
        <div className={styles.pbb__top}>
          <div className={styles.attr}>
            <span>
              <House />
            </span>
            <span>
              {currentLocale === "fr"
                ? projectDetails.propertytype.namefr
                : projectDetails.propertytype.nameen}
            </span>
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
            {projectDetails.price !== 0 && (
              <>
                {/* <div className={styles.price}>
                  FCFA {NumberFormatter(projectDetails.price)}{" "}
                  {currentLocale === "en"
                    ? projectDetails.rentpricing === "perday"
                      ? "per night"
                      : projectDetails.rentpricing === "perweek"
                        ? "per week"
                        : projectDetails.rentpricing === "permonth"
                          ? "per month"
                          : ""
                    : projectDetails.rentpricing === "perday"
                      ? "par nuit"
                      : projectDetails.rentpricing === "perweek"
                        ? "par semaine"
                        : projectDetails.rentpricing === "permonth"
                          ? "par mois"
                          : ""}
                </div> */}
                <div className={styles.price}>
                  FCFA {NumberFormatter(projectDetails.price)}{" "}
                  {currentLocale === "en"
                    ? projectDetails.rentpricing === "perday"
                      ? "a night"
                      : projectDetails.rentpricing === "perweek"
                        ? "a week"
                        : projectDetails.rentpricing === "permonth"
                          ? "a month"
                          : ""
                    : projectDetails.rentpricing === "perday"
                      ? "la nuit"
                      : projectDetails.rentpricing === "perweek"
                        ? "la semaine"
                        : projectDetails.rentpricing === "permonth"
                          ? "le mois"
                          : ""}
                </div>
                <span className={styles.buttoner}></span>
              </>
            )}
            <div className={styles.location}>
              {projectDetails.quarter}, {projectDetails.city.cityname}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox;
