import React from "react";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import QuickSearch from "./QuickSearch";
import HomeProperties from "./HomeProperties";

const HomePageWrapper = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <QuickSearch />
    </>
  );
};

export default HomePageWrapper;
