import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMeasure } from "../../Helpers";
import { useSpring, animated } from "react-spring";
import { Container } from "../Styles/Containers";
import { Grid } from "./Styles";
import { CardContainer, Card, Title, Desc, Image } from "../Styles/CardStyles";
import newsAltImage from "../../img/newspaper-2.svg";
import NewsCards from "../NewsCards/NewsCards";
const Home = ({ articles, activeArticles }) => {
  //console.log(articles.length());
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=daeddbe4bc074bf48d19a82ff073c046"
      )
      .then((res) => {
        setNewsData(res.data.articles);
      });
  }, []);

  return (
    <Container>
      <Grid>
        {newsData.map(
          (data, i) =>
            data.author != null && (
              <CardContainer>
                <Card hover={true}>
                  <Image
                    src={
                      data.urlToImage === null ? newsAltImage : data.urlToImage
                    }
                  />
                  <Title>{data.title}</Title>
                  <Desc>{data.description}</Desc>
                </Card>
              </CardContainer>
            )
        )}
      </Grid>
    </Container>
  );
};

export default React.memo(Home);
