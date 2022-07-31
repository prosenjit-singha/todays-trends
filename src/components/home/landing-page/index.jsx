import React from "react";
import HeroSection from "./hero-section";
import MostPopularSources from "./most-popular-sources";
import MostPopularCategories from "./most-popular-categories";
import LatestNews from "./latest-section";
import Newsletter from "./newsletter";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <MostPopularSources />
      <MostPopularCategories />
      <LatestNews />
      <Newsletter />
    </>
  );
};

export default LandingPage;
