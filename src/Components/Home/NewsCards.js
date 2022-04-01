import React from "react";
import NewsCard from "./NewsCard";
import { Container } from "../Styles/Containers";
import { Grid } from "./Styles";

const NewsCards = ({ articles, activeArticle }) => {
  return (
    <Container>
      <Grid>
        {articles.map((article, i) => (
          <NewsCard
            article={article}
            activeArticle={activeArticle}
            index={i}
            key={i}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default React.memo(NewsCards);
