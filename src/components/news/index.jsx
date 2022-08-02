import React from "react";

// importing react hooks
import { useSelector } from "react-redux";

// importing components
import NewsCards from "./news-cards";
import Filter from "./filter";
import Pages from "./pages";
import Loading from "../loading";
import Newsletter from "../newsletter";

// importing styles
import { Container } from "../../styles/containers";

const News = () => {
  const data = useSelector((state) => state.news);
  const totalResults = data.totalResults;
  return (
    <Container>
      <Filter />
      {data.Loading ? <Loading /> : <NewsCards />}
      <Pages totalResults={totalResults} />
      <Newsletter />
    </Container>
  );
};

export default News;
