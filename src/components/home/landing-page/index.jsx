import React from "react";
import HeroSection from "./hero-section";
import MostPopularSources from "./most-popular-sources";
import MostPopularCategories from "./most-popular-categories";
import LatestNews from "./latest-section";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <MostPopularSources />
      <MostPopularCategories />
      <LatestNews />
    </>
  );
};

export default LandingPage;
