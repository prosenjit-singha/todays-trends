import React, { useEffect, useCallback } from "react";
// import articles from "../../data/articles.json";

// importing react hooks
import { useSelector, useDispatch } from "react-redux";

// importing components
import NewsCards from "./news-cards";
import Filter from "./filter";
import Pages from "./pages";
import Newsletter from "../newsletter";
import PagesSkeleton from "./pages-skeleton";

// importing styles
import { Container } from "../../styles/containers";

// actions
import { fetchArticles } from "../../redux/features/news/news-slice";

const News = () => {
  // console.log("<======== News rendered ==========>");
  const dispatch = useDispatch();
  const { articles, api_key, loading, totalResults } = useSelector(
    (state) => state.news
  );

  useEffect(() => {
    console.log("Fetching will called....");
    console.log("API_KEY: ", api_key);
    // dispatch(fetchArticles(api_key));
  }, [api_key]);

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
