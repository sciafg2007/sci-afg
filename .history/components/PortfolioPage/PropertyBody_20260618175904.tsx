"use client";

import React, { useState } from "react";
import { useT } from "next-i18next/client";
import Location from "@/utils/Icons/Location";
import House from "@/utils/Icons/House";
import Bath from "@/utils/Icons/Bath";
import Area from "@/utils/Icons/Area";
import Bed from "@/utils/Icons/Bed";
import VideoJS from "../ReUsables/VideoJS";
import { urlFor } from "@/sanity/lib/image";
import Button from "../ReUsables/Button";
import Link from "next/link";
import Image from "next/image";
import Avatar from "../../public/images/avatar.png";
import styles from "../../styles/PortfolioPage/propertybody.module.scss";
import Whatsapp from "@/utils/Icons/Whatsapp";
import Phone from "@/utils/Icons/Phone";
import Transaction from "@/utils/Icons/Transaction";
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
  propertyagent: {
    name: string;
    positionfr: string;
    positionen: string;
    languagesfr: string;
    languagesen: string;
    whatsapp: string;
    phone: string;
    image: {
      alt: string;
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
  heroimages: {
    alt: string;
    url: string;
  }[];
  overview: {
    en: string;
    fr: string;
    _key: string;
  }[];
  otherdetails: {
    en: string;
    fr: string;
    _key: string;
  }[];
  gallery: {
    caption: string;
    _type: string;
    url: string;
    aspectRatio?: string;
  }[];
}

const PropertyBody = ({ property }: { property: PropertyProps }) => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;
  const [activeSelect, setActiveSelect] = useState(0);

  //Contact Details
  const properter = property.name;
  const message = t("portfolio:message", { properter });
  const buttontext = t("portfolio:reserve");
  const encoded = encodeURIComponent(message);

  const url = `https://wa.me/237675846270?text=${encoded}`;

  return (
    <div className={styles.pb__section}>
      <div className={`container ${styles.pb__container}`}>
        <div className={styles.pbc__topper}>
          <div className={styles.pbc__left}>
            <div className={styles.pnames}>
              <h3 className={styles.p__name}>{property.name}</h3>
              <div className={styles.p__location}>
                <Location />
                <span className={styles.location}>
                  {property.quarter}, {property.city.cityname}
                </span>
              </div>
            </div>
            <div className={styles.pmid}>
              {property.overview.map((data, i) => (
                <p key={i}>{currentLng === "fr" ? data.fr : data.en}</p>
              ))}
            </div>
            <div className={styles.pbottom}>
              <div className={styles.action__select}>
                <span
                  className={`${styles.action} ${activeSelect === 0 ? styles.active : ""}`}
                  onClick={() => setActiveSelect(0)}
                >
                  General
                </span>
                <span
                  className={`${styles.action} ${activeSelect === 1 ? styles.active : ""}`}
                  onClick={() => setActiveSelect(1)}
                >
                  {t("common:equip")}
                </span>
                <span className={styles.border}></span>
              </div>
              <div className={styles.pbcontent}>
                {activeSelect === 0 ? (
                  <div className={styles.general}>
                    <div className={styles.gen}>
                      <House />
                      <span>
                        {t("home:type")} :{" "}
                        {currentLng === "fr"
                          ? property.propertytype.namefr
                          : property.propertytype.nameen}
                      </span>
                    </div>
                    <div className={`${styles.gen} ${styles.transaction}`}>
                      <Transaction />
                      <span>
                        Transaction :{" "}
                        {currentLng === "fr"
                          ? property.transaction.namefr
                          : property.transaction.nameen}
                      </span>
                    </div>
                    {property.bath && (
                      <div className={styles.gen}>
                        <Bath />
                        <span>
                          {t("home:bath")} : {property.bath}
                        </span>
                      </div>
                    )}
                    {property.room && (
                      <div className={`${styles.gen} ${styles.bed}`}>
                        <Bed />
                        <span>
                          {t("home:room")} : {property.room}
                        </span>
                      </div>
                    )}
                    {property.area && (
                      <div className={styles.gen}>
                        <Area />
                        <span>
                          {t("home:room")} : {property.area}
                        </span>
                      </div>
                    )}
                  </div>
                ) : (
                  <ol className={styles.ammenities}>
                    {property.otherdetails.map((data, i) => (
                      <li className={styles.otherdet} key={i}>
                        {currentLng === "fr" ? data.fr : data.en}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </div>
          <div className={styles.pbc__right}>
            <div className={styles.pricinger}>
              <div className={styles.pptop}>
                FCFA {NumberFormatter(property.price)}{" "}
                {currentLocale === "en"
                  ? property.rentpricing === "perday"
                    ? "per night"
                    : property.rentpricing === "perweek"
                      ? "per week"
                      : property.rentpricing === "permonth"
                        ? "per month"
                        : ""
                  : property.rentpricing === "perday"
                    ? "par nuit"
                    : property.rentpricing === "perweek"
                      ? "par semaine"
                      : property.rentpricing === "permonth"
                        ? "par mois"
                        : ""}
              </div>
              <div className={styles.pp__bottom}></div>
            </div>
            <div className={styles.pbr__one}>
              <div className={styles.pcr__top}>
                <div className={styles.pt__image}>
                  <Image
                    alt={
                      property.propertyagent.image
                        ? property.propertyagent.image.alt
                        : property.propertyagent.name
                    }
                    fill
                    src={
                      property.propertyagent.image
                        ? urlFor(property.propertyagent.image)
                            .width(1920)
                            .url() || urlFor(property.propertyagent.image).url()
                        : Avatar
                    }
                    sizes="15vw"
                  />
                </div>
                <div className={styles.pt__content}>
                  <h4 className={styles.agent__name}>
                    {property.propertyagent.name}
                  </h4>
                  <div className={styles.ptcc__bot}>
                    <span className={styles.position}>
                      {currentLng === "fr"
                        ? property.propertyagent.positionfr
                        : property.propertyagent.positionen}
                    </span>
                    <span>
                      {t("portfolio:language")} :{" "}
                      {currentLng === "fr"
                        ? property.propertyagent.languagesfr
                        : property.propertyagent.languagesen}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.pcr__bottom}>
                <Button
                  link={url}
                  text={buttontext}
                  backColor="var(--darkblue)"
                  hoverColor="var(--blueback)"
                  textColor="white"
                  thColor="var(--darkblue)"
                  border="1px solid transparent"
                  borderHover="1px solid var(--darkblue)"
                  target="_blank"
                />

                <Link href={url} className={styles.c__button}>
                  <Whatsapp />
                </Link>
                <Link
                  href={`tel:${property.propertyagent.phone}`}
                  className={styles.c__button}
                >
                  <Phone />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pbc__bottomer}>
          <h3 className={styles.pbc__h3}>{t("home:gallery")}</h3>
          <div className={styles.gallery}>
            {property.gallery.map((gal, i) => {
              if (gal._type === "image") {
                return (
                  <div
                    className={styles.gallery__images}
                    key={i}
                    style={{
                      aspectRatio: gal.aspectRatio ? gal.aspectRatio : "16/10",
                    }}
                  >
                    <Image
                      fill
                      quality={100}
                      src={urlFor(gal).width(1920).url() || urlFor(gal).url()}
                      alt={gal.caption}
                      unoptimized
                    />
                  </div>
                );
              } else {
                const videoJsOptions = {
                  autoplay: true,
                  muted: true,
                  loop: true,
                  controls: false,
                  playsinline: true,
                  responsive: true,
                  fluid: true,
                  sources: [
                    {
                      src: gal.url, // dynamic per item
                      type: "video/mp4",
                    },
                  ],
                };

                return (
                  <div key={i} className={styles.video__wrapper}>
                    <VideoJS options={videoJsOptions} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBody;
