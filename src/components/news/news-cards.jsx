import React from "react";
import styled from "styled-components";
import { margin } from "../../styles/global-constants";
import { useSelector } from "react-redux";
//components
import NewsCard from "./news-card";
import CardSkeleton from "./card-skeleton";

//used in useCommands and here
// import articles from "../../data/articles.json";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
  margin-inline: ${margin};
`;

const NewsCards = () => {
  console.log("NewsCards Rendered!");
  const { articles, loading } = useSelector((state) => state.news);
  // const loading = false;

  // [...Array(12).keys()] will return [0, 1,2,3,4,5,6,7,8,9,10,11]
  return (
    <Grid>
      {loading
        ? [...Array(12).keys()].map((_, i) => <CardSkeleton key={i} />)
        : articles.map((article, i) => (
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
