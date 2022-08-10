import React from "react";

// importing react hooks
import { useSelector } from "react-redux";

// importing components
import NewsCards from "./news-cards";
import Filter from "./filter";
import Pages from "./pages";
import Loading from "../loading";
import Newsletter from "../newsletter";
import PagesSkeleton from "./pages-skeleton";

// importing styles
import { Container } from "../../styles/containers";

const News = () => {
  const { loading, totalResults } = useSelector((state) => state.news);
  console.log("Loading: ", loading);

  return (
    <Container>
      <Filter />
      <NewsCards />
      {loading ? <PagesSkeleton /> : <Pages totalResults={totalResults} />}
      <Newsletter />
    </Container>
  );
};

export default News;
