import React from "react";
import Navbar from "../Navigation/Navbar";
import HomeHero from "./HomeHero";
import QuickSearch from "./QuickSearch";
import HomeProperties from "./HomeProperties";
import HomeAbout from "./HomeAbout";
import OurProcess from "./OurProcess";
import PreFooter from "./PreFooter";
import MarqueeClients from "./MarqueeClients";
import Footer from "../Navigation/Footer";

const HomePageWrapper = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <QuickSearch />
      <HomeProperties />
      <HomeAbout />
      <OurProcess />
      <MarqueeClients />
      <PreFooter />
      <Footer />
    </>
  );
};

export default HomePageWrapper;
