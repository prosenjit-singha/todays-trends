import React from "react";
import NewsCards from "./news-cards";
import { Container } from "../../styles/containers";
import Filter from "./filter";
import Pages from "./pages";
import { useSelector } from "react-redux";
import Loading from "../loading";
import Newsletter from "../newsletter";
import LandingPage from "./landing-page";

const Home = () => {
  console.log("Home Rendered!");
  const data = useSelector((state) => state.news);
  const totalResults = data.totalResults;

  return (
    <>
      <Container>
        <LandingPage />
      </Container>
      {/* <Container>
        <Filter />
        {data.Loading ? <Loading /> : <NewsCards />}
        <Pages totalResults={totalResults} />
        <Newsletter />
      </Container> */}
    </>
  );
};

export default React.memo(Home);
