import React from "react";
import NewsCards from "./news-cards";
import { Container } from "../../styles/containers";
import Filter from "./filter";
import Pages from "./pages";

const Home = ({ articles, activeArticle }) => {
  return (
    <>
      <Container>
        <Filter />
        <NewsCards articles={articles} activeArticle={activeArticle} />
        <Pages totalResults={38} />
      </Container>
    </>
  );
};

export default Home;
