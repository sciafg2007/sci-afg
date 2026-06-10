// "use client";

// import React, { useEffect, useRef } from "react";
// import { CldImage } from "next-cloudinary";
// import { useT } from "next-i18next/client";
// import Button from "../ReUsables/Button";
// import AP from "@/utils/CompanyLogos/AP";
// import Camtel from "@/utils/CompanyLogos/Camtel";
// import Eneo from "@/utils/CompanyLogos/Eneo";
// import Hysacam from "@/utils/CompanyLogos/Hysacam";
// import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
// import Noble from "@/utils/CompanyLogos/Noble";
// import OIM from "@/utils/CompanyLogos/OIM";
// import Razel from "@/utils/CompanyLogos/Razel";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
// import styles from "../../styles/HomePage/homehero.module.scss";

// gsap.registerPlugin(ScrollTrigger);

// const HomeHero = () => {
//   const { t, i18n } = useT();
//   const currentLng = i18n.language;

//   const iconsData = [
//     {
//       icon: Eneo,
//       width: "80px",
//     },
//     {
//       icon: Camtel,
//       width: "60px",
//     },

//     {
//       icon: OIM,
//       width: "90px",
//     },
//     {
//       icon: AP,
//       width: "80px",
//     },
//     {
//       icon: Razel,
//       width: "100px",
//     },
//     {
//       icon: Noble,
//       width: "110px",
//     },

//     {
//       icon: Hysacam,
//       width: "100px",
//     },
//     {
//       icon: Isstmadd,
//       width: "90px",
//     },
//   ];

//   const iconsData2 = [
//     {
//       icon: Eneo,
//       width: "80px",
//     },
//     {
//       icon: Camtel,
//       width: "60px",
//     },

//     {
//       icon: OIM,
//       width: "90px",
//     },
//     {
//       icon: AP,
//       width: "80px",
//     },
//     {
//       icon: Razel,
//       width: "100px",
//     },
//     {
//       icon: Noble,
//       width: "110px",
//     },

//     {
//       icon: Hysacam,
//       width: "100px",
//     },
//     {
//       icon: Isstmadd,
//       width: "90px",
//     },
//     {
//       icon: Eneo,
//       width: "80px",
//     },
//     {
//       icon: Camtel,
//       width: "60px",
//     },

//     {
//       icon: OIM,
//       width: "90px",
//     },
//     {
//       icon: AP,
//       width: "80px",
//     },
//     {
//       icon: Razel,
//       width: "100px",
//     },
//     {
//       icon: Noble,
//       width: "110px",
//     },

//     {
//       icon: Hysacam,
//       width: "100px",
//     },
//     {
//       icon: Isstmadd,
//       width: "90px",
//     },
//   ];

//   const firstSlider = useRef(null);
//   const secondSlider = useRef(null);
//   const sliderRefer = useRef(null);
//   const directionRefer = useRef(-1); // Use useRef for mutable direction value
//   let xPercenter = 0;
//   const speeder = 0.1; // Adjust speed of movement

//   const animationer = () => {
//     if (xPercenter <= -100) xPercenter = 0;
//     if (xPercenter > 0) xPercenter = -100;
//     gsap.set(firstSlider.current, { xPercenter });
//     gsap.set(secondSlider.current, { xPercenter });
//     xPercenter += speeder * directionRefer.current; // Use directionRef's current property
//     requestAnimationFrame(animationer);
//   };

//   // Use useGSAP hook to handle gsap animations
//   useGSAP(() => {
//     gsap.to(sliderRefer.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: 20000,
//         scrub: 1,
//         onUpdate: (e) => (directionRefer.current = e.direction * -1), // Update directionRef's current property
//       },
//       // x: "-150px",
//     });
//     requestAnimationFrame(animationer);
//   });

//   return (
//     <div className={styles.homehero}>
//       <div className={styles.background__image}>
//         <CldImage alt="SCI AFG" fill src="SCI_AFG_5_sewngz.jpg" sizes="100vw" />
//       </div>
//       <div className={styles.hero__main}>
//         <h3 className={styles.garant}>{t("home:garant")}</h3>
//         <h1 className={styles.hero__h2}>{t("home:mainhero")}</h1>
//         <p className={styles.hero__p}>{t("home:sechero")}</p>
//         <div className={styles.hero__button}>
//           <Button
//             link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
//             text={t("home:parcourir")}
//             backColor="white"
//             hoverColor="var(--darkblue)"
//             textColor="var(--darkblue)"
//             thColor="white"
//             border="1px solid transparent"
//             borderHover="1px solid transparent"
//           />
//         </div>
//       </div>
//       <div className={styles.hero__bottom}>
//         <span>{t("home:confidence")}</span>
//         <div className={styles.logos}>
//           {iconsData.map((data, i) => (
//             <div
//               className={styles.iconwrap}
//               key={i}
//               style={{ width: data.width }}
//             >
//               <data.icon />
//             </div>
//           ))}
//         </div>
//         <div className={styles.hero__marquee} ref={sliderRefer}>
//           <div className={styles.hm__one} ref={firstSlider}>
//             {iconsData.map((data, i) => (
//               <div
//                 className={styles.iconwrap}
//                 key={i}
//                 style={{ width: data.width }}
//               >
//                 <data.icon />
//               </div>
//             ))}
//           </div>
//           <div className={styles.hm__one} ref={secondSlider}>
//             {iconsData.map((data, i) => (
//               <div
//                 className={styles.iconwrap}
//                 key={i}
//                 style={{ width: data.width }}
//               >
//                 <data.icon />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeHero;
"use client";

import React, { useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import { useT } from "next-i18next/client";
import Button from "../ReUsables/Button";
import AP from "@/utils/CompanyLogos/AP";
import Camtel from "@/utils/CompanyLogos/Camtel";
import Eneo from "@/utils/CompanyLogos/Eneo";
import Hysacam from "@/utils/CompanyLogos/Hysacam";
import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
import Noble from "@/utils/CompanyLogos/Noble";
import OIM from "@/utils/CompanyLogos/OIM";
import Razel from "@/utils/CompanyLogos/Razel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/HomePage/homehero.module.scss";

gsap.registerPlugin(ScrollTrigger);

const HomeHero: React.FC = () => {
  const { t, i18n } = useT();
  const currentLng = i18n.language;

  const iconsData = [
    { icon: Eneo, width: "80px" },
    { icon: Camtel, width: "60px" },
    { icon: OIM, width: "90px" },
    { icon: AP, width: "80px" },
    { icon: Razel, width: "100px" },
    { icon: Noble, width: "110px" },
    { icon: Hysacam, width: "100px" },
    { icon: Isstmadd, width: "90px" },
  ];

  const firstSlider = useRef<HTMLDivElement | null>(null);
  const secondSlider = useRef<HTMLDivElement | null>(null);
  const sliderRefer = useRef<HTMLDivElement | null>(null);

  // mutable refs for animation state
  const directionRef = useRef<number>(-1);
  const xPercentRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // guard DOM
    const sliderEl = sliderRefer.current;
    const firstEl = firstSlider.current;
    const secondEl = secondSlider.current;
    if (!sliderEl || !firstEl || !secondEl) return;

    const ctx = gsap.context(() => {
      // ScrollTrigger to update directionRef
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: 20000,
        scrub: 1,
        onUpdate: (self) => {
          // self.direction is 1 (down) or -1 (up)
          // invert if you want opposite direction
          directionRef.current = self.direction * -1;
        },
      });

      const speed = 0.1; // percent per frame step (tweak)
      const loop = () => {
        // update xPercentRef
        xPercentRef.current += speed * directionRef.current;
        // wrap between -100 and 0 so duplicated content loops
        if (xPercentRef.current <= -100) xPercentRef.current = 0;
        if (xPercentRef.current > 0) xPercentRef.current = -100;

        // apply transform using xPercent (valid GSAP property)
        if (firstEl) gsap.set(firstEl, { xPercent: xPercentRef.current });
        if (secondEl) gsap.set(secondEl, { xPercent: xPercentRef.current });

        rafRef.current = requestAnimationFrame(loop);
      };

      // start loop
      rafRef.current = requestAnimationFrame(loop);
    }, sliderRefer);

    return () => {
      // cleanup
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className={styles.homehero}>
      <div className={styles.background__image}>
        <CldImage alt="SCI AFG" fill src="SCI_AFG_5_sewngz.jpg" sizes="100vw" />
      </div>

      <div className={styles.hero__main}>
        <h3 className={styles.garant}>{t("home:garant")}</h3>
        <h1 className={styles.hero__h2}>{t("home:mainhero")}</h1>
        <p className={styles.hero__p}>{t("home:sechero")}</p>
        <div className={styles.hero__button}>
          <Button
            link={currentLng === "fr" ? "/portfolio" : "/en/portfolio"}
            text={t("home:parcourir")}
            backColor="white"
            hoverColor="var(--darkblue)"
            textColor="var(--darkblue)"
            thColor="white"
            border="1px solid transparent"
            borderHover="1px solid transparent"
          />
        </div>
      </div>

      <div className={styles.hero__bottom}>
        <span>{t("home:confidence")}</span>

        <div className={styles.logos}>
          {iconsData.map((data, i) => (
            <div className={styles.iconwrap} key={i} style={{ width: data.width }}>
              <data.icon />
            </div>
          ))}
        </div>

        <div className={styles.hero__marquee} >
          <div className={styles.hm__one} >
            {iconsData.map((data, i) => (
              <div className={styles.iconwrap} key={i} style={{ width: data.width }}>
                <data.icon />
              </div>
            ))}
          </div>

          <div className={styles.hm__one} >
            {iconsData.map((data, i) => (
              <div className={styles.iconwrap} key={i} style={{ width: data.width }}>
                <data.icon />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

