import React from "react";
import NewsCard from "./news-card";
import styled from "styled-components";
import { margin } from "../../styles/global-constants";
import { useSelector } from "react-redux";

//used in useCommands and here
// import articles from "../../data/articles.json";

export const Grid = styled.section`
  //margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
  margin-inline: ${margin};
`;

const NewsCards = () => {
  console.log("NewsCards Rendered!");
  const articles = useSelector((state) => state.news.articles);
  return (
    <Grid>
      {articles.map((article, i) => (
        <NewsCard
          article={article}
          index={i}
          key={i}
          random={Math.floor(Math.random() * (98 - 50) + 50)}
        />
      ))}
    </Grid>
  );
};

export default React.memo(NewsCards);
