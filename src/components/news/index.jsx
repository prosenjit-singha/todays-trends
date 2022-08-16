import React from "react";
// import articles from "../../data/articles.json";

// importing react hooks
import { useSelector } from "react-redux";

// importing components
import NewsCards from "./news-cards";
import Filter from "./filter";
import Pages from "./pages";
import Newsletter from "../newsletter";
import PagesSkeleton from "./pages-skeleton";

// importing styles
import { Container } from "../../styles/containers";

const News = () => {
  // console.log("<======== News rendered ==========>");
  const { articles, loading, totalResults } = useSelector(
    (state) => state.news
  );

  return (
    <Container>
      <Filter />
      {/* <Pages totalResults={totalResults} /> */}
      <NewsCards articles={articles} loading={loading} />
      {loading ? <PagesSkeleton /> : <Pages totalResults={totalResults} />}
      <Newsletter />
    </Container>
  );
};

export default React.memo(News);
