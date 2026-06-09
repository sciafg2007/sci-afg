import React from 'react'
import AP from "@/utils/CompanyLogos/AP";
import Camtel from "@/utils/CompanyLogos/Camtel";
import Eneo from "@/utils/CompanyLogos/Eneo";
import Hysacam from "@/utils/CompanyLogos/Hysacam";
import Isstmadd from "@/utils/CompanyLogos/Isstmadd";
import Noble from "@/utils/CompanyLogos/Noble";
import OIM from "@/utils/CompanyLogos/OIM";
import Razel from "@/utils/CompanyLogos/Razel";



const ClientsConfidence = () => {
  const iconsData = [
    {
      icon: Eneo,
      width: "150px",
    },
    {
      icon: Camtel,
      width: "120px",
    },

    {
      icon: OIM,
      width: "160px",
    },
    {
      icon: AP,
      width: "150px",
    },
    {
      icon: Razel,
      width: "200px",
    },
    {
      icon: Noble,
      width: "180px",
    },

    {
      icon: Hysacam,
      width: "170px",
    },
    {
      icon: Isstmadd,
      width: "150px",
    },
  ];


  return (
    <div className={`section ${styles.confidence__section}`}>

    </div>
  )
}

export default ClientsConfidence