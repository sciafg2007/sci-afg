import React from "react";

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
    type: string;
    url: string;
  }[];
}

const PropertyDetailPage = () => {
  return <div>PropertyDetailPage</div>;
};

export default PropertyDetailPage;
