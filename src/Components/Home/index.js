import React from "react";
import NewsCards from "./news-cards";
import { Container } from "../../styles/containers";
import Filter from "./filter";
import Pages from "./pages";
import { useSelector } from "react-redux";

const Home = ({ activeArticle }) => {
  const data = useSelector((state) => state.news);
  const totalResults = data.totalResults;
  return (
    <>
      <Container>
        <Filter />
        <NewsCards activeArticle={activeArticle} />
        <Pages totalResults={totalResults} />
      </Container>
    </>
  );
};

export default Home;
