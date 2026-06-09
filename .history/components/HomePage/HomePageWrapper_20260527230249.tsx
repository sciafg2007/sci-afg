import React from "react";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import QuickSearch from "./QuickSearch";
import HomeProperties from "./HomeProperties";
import HomeAbout from "./HomeAbout";
import OurProcess from "./OurProcess";

const HomePageWrapper = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <QuickSearch />
      <HomeProperties />
      <HomeAbout/>
      <OurProcess />
    </>
  );
};

export default HomePageWrapper;
