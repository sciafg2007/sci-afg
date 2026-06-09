

import React from "react";
import ProjectBox from "../ReUsables/ProjectBox";
import { client } from "@/sanity/lib/client";
import { useSearchParams, useRouter } from "next/navigation";
import { LocationsData, TransactionData, PropertyData } from "@/types";
import styles from "../../styles/PortfolioPage/portfoliobottom.module.scss";

const PortfolioBottom = ({
  transactions,
  locations,
  propertytypes,
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: PropertyData[];
}) => {
  return (
    <div className={styles.p__bottom}>
      <div className={`container ${styles.pb__container}`}>
        <div className={styles.pb__sortfilter}></div>
        <div className={styles.pb__content}></div>
      </div>
    </div>
  );
};

export default PortfolioBottom;
