"use client";

import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import gsap from "gsap";
import IMAGE3 from "../../public/images/bettermarque.jpg";
import IMAGE2 from "../../public/images/bettermarque2.png";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import styles from "../../styles/Navigation/bettermarque.module.scss";


const BetterMarque = ({
  activeBetter,
  setActiveBetter,
}: {
  activeBetter: boolean;
  setActiveBetter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //Translations
  const { t } = useTranslation();

  //Better Marque Animations
  const betterMarqueAnim: Variants = {
    open: {
      width: "320px",
      height: "400px",
      transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1] },
    },
    closed: {
      width: "0px",
      height: "0px",
      transition: { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 1 },
    },
  };
  const betterRef = useRef(null);
  const logoRef = useRef(null);
  const footerRef = useRef(null);
  const refs = useRef<HTMLParagraphElement[]>([]);
  const betterText = t("Navigation:bmtext") || "";

  const splitWords = () => {
    return betterText.split(" ").map((word, i) => (
      <div key={`word-${i}`} className={styles.word__wrapper}>
        <p
          ref={(el) => {
            if (el) {
              refs.current.push(el);
            }
          }}
          className={`${styles.word} ${
            word === "Better" || word === "Marque" || word === "Marque's"
              ? styles.highlight
              : ""
          }`}
        >
          {word}
        </p>
      </div>
    ));
  };

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    //TL 1
    tl.to(betterRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      duration: 0.7,
      delay: 0.7,
    })
      .to(
        logoRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
          duration: 0.7,
        },
        ">"
      )
      .to(
        refs.current,
        {
          y: "0%",
          ease: "none",
          stagger: 0.008,
        },
        ">"
      );

    tl.to(
      footerRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      },
      ">-0.7"
    );

    //TL 2
    tl2.to(betterRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 0.7,
    })
      .to(
        logoRef.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          ease: "power4.inOut",
          duration: 0.7,
        },
        "<"
      )
      .to(
        refs.current,
        {
          y: "-100%",
          ease: "none",
          stagger: 0.008,
        },
        "<"
      );

    tl2.to(
      footerRef.current,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      },
      "<"
    );

    tl.pause();
    tl2.pause();

    if (activeBetter) {
      tl.restart();
    } else {
      tl2.restart();
    }

    return () => {
      tl.kill();
      tl2.kill();
    };
  }, [activeBetter]);

  return (
    <motion.div
      variants={betterMarqueAnim}
      initial="closed"
      animate={activeBetter ? "open" : "closed"}
      className={styles.better__marque}
    >
      <div
        className={styles.bi__wrapper}
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        ref={betterRef}
      >
        <div className={styles.b__image}>
          <Image src={IMAGE3} fill quality={100} alt="Better Marque" placeholder="blur" />
        </div>
        <div className={styles.b__contact}>
          <div
            className={styles.bc__svg}
            onClick={() => setActiveBetter(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#FFFFF0"
                fillRule="evenodd"
                d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"
              ></path>
            </svg>
          </div>
          <Link href="https://wa.me/+237693370638" target="_blank">
            {t("Navigation:bmtouch")}
          </Link>
        </div>
      </div>
      <div className={styles.bc__content}>
        <div
          className={styles.logo}
          style={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }}
          ref={logoRef}
        >
          <Image
            src={IMAGE2}
            fill
            alt="Better Marque"
            quality={100}
            sizes="(max-width: 600px) 100%, 100%"
            loading="eager"
          />
        </div>
        <div className={styles.text}>{splitWords()}</div>

        <div
          className={styles.b__footer}
          style={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }}
          ref={footerRef}
        >
          <Link
            href="https://www.bettermarque.com"
            target="_blank"
            className={styles.coming}
          >
            {t("Navigation:bmweb")}
          </Link>
          <div className={styles.button}>
            <Link
              href="https://www.instagram.com/bettermarque/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link
              href="https://web.facebook.com/profile.php?id=61555159313413"
              target="_blank"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BetterMarque;