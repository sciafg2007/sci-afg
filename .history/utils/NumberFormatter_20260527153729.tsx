import React from "react";

const NumberFormatter = ( value: number ) => {
  return <span>{new Intl.NumberFormat("de-DE").format(value)}</span>;
};

export default NumberFormatter;
