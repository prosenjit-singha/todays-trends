import React from "react";
import styled from "styled-components";
import { margin } from "../../styles/global-constants";
import { device } from "../../utils/device";
//components
import NewsCard from "./news-card";
import CardSkeleton from "./card-skeleton";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 1.5rem;
  margin-inline: ${margin};

  @media ${device.laptopL} {
    grid-auto-flow: row;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const NewsCards = ({ articles, loading }) => {
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
