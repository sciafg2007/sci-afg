import React from 'react'

const NumberFormatter = () => {
  return <span>{new Intl.NumberFormat("de-DE").format(value)}</span>;
}

export default NumberFormatter