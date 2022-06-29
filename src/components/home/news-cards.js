import React from "react";
import NewsCard from "./news-card";
import { Grid } from "./styles";
import { useSelector } from "react-redux";

import articles from "../../data/articles.json"; //used in useCommands and here

const NewsCards = () => {
  console.log("NewsCards Rendered!");
  //const articles = useSelector((state) => state.news.articles);
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
