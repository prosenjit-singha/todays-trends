import React from "react";
import NewsCard from "./news-card";
import { Grid } from "./styles";

const NewsCards = ({ articles, activeArticle }) => {
  return (
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
  );
};

export default React.memo(NewsCards);
