import React from "react";
import NewsCards from "./news-cards";
import { Container } from "../../styles/containers";
import Filter from "./filter";
import Pages from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../../redux/features/news/news-slice";

const Home = ({ articles, activeArticle }) => {
  const data = useSelector((state) => state.news);
  const totalResults = data.totalResults;
  const dispatch = useDispatch();
  //fetchArticles(data.api);
  return (
    <>
      <Container>
        <Filter />
        <NewsCards articles={data.articles} activeArticle={activeArticle} />
        <Pages totalResults={36} />
      </Container>
    </>
  );
};

export default Home;
