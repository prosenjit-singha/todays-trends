import React from "react";
import MostPopularSources from "./most-popular-sources";
import MostPopularCategories from "./most-popular-categories";
import LatestNews from "./latest-section";
import Newsletter from "./newsletter";
import Carousel from "./carousel";

const LandingPage = () => {
  return (
    <>
      <Carousel />
      <MostPopularCategories />
      <LatestNews />
      <MostPopularSources />
      <Newsletter />
    </>
  );
};

export default LandingPage;
