import React from "react";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import QuickSearch from "./QuickSearch";
import HomeProperties from "./HomeProperties";
import HomeAbout from "./HomeAbout";

const HomePageWrapper = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <QuickSearch />
      <HomeProperties />
      <HomeAbout/>
    </>
  );
};

export default HomePageWrapper;
