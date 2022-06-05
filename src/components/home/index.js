import React from "react";
import NewsCards from "./news-cards";
import { Container } from "../../styles/containers";
import Filter from "./filter";
import Pages from "./pages";
import { useSelector } from "react-redux";
import Loading from "../loading";

const Home = () => {
  console.log("Home Rendered!");
  const data = useSelector((state) => state.news);
  const totalResults = data.totalResults;

  return (
    <>
      <Container>
        <Filter />
        {data.Loading ? <Loading /> : <NewsCards />}
        <Pages totalResults={totalResults} />
      </Container>
    </>
  );
};

export default React.memo(Home);
