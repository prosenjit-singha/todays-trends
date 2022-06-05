import React, { useEffect } from "react";
import NewsCard from "./news-card";
import { Grid } from "./styles";
import { useSelector } from "react-redux";

const NewsCards = ({ activeArticle }) => {
  console.log("NewsCards Rendered!");
  const data = useSelector((state) => state.news);
  const articles = data.articles;
  useEffect(() => {
    //console.log("NewsCards Rendered!");
  }, []);

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
