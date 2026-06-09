import React from "react";
import SkeletonLoader from "../ReUsables/SkeletonLoader";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const PropertiesLoader = () => {
  const array = [0,1,2,3,4,5]
  return (
    <>
      {array.map((_, i) => (
        <div className={styles.projectbox} key={i}>
          <div className={styles.pb__top}>
            <div className={styles.image}>
              <SkeletonLoader width="100%" height="100%" animation="wave" />
            </div>
          </div>
          <div className={styles.pb__bottom}>
            <span className={styles.p__name2}>
              <SkeletonLoader width="100%" height="30px" mobileHeight="28px" tabletHeight="33px" />
            </span>
            <div className={styles.price__location2}>
              <SkeletonLoader width="100%" height="40px" mobileHeight="20px" tabletHeight="22px" />
            </div>
            <div className={styles.p__stats2}>
              <SkeletonLoader width="100%" height="5px" mobileHeight="25px" tabletHeight="27px" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertiesLoader;
