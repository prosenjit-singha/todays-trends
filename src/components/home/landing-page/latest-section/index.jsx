import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgCalendarDates as CalIcon } from "react-icons/cg";
// import articles from "../../../../data/articles.json";
import {
  Container,
  Body,
  Side,
  SideContent,
  Header,
  Main,
  Item,
  ImageContainer,
  Image,
  Content,
  Badge,
  ItemTitle,
  SubTitle,
  Date,
} from "./styles";

// importing components
import HeadingTitle from "../heading-title";
import HotCategories from "./hot-categories";
import Newsletter from "./newsletter";
import Skeleton from "./skeleton";

const LatestNews = () => {
  console.log("<----- Latest News ----->");
  const [articles, setArticles] = useState([]);
  function formateDate(string) {
    const date = string.slice(0, string.indexOf("T"));
    const yymmdd = date.split("-");
    return yymmdd[2] + "-" + yymmdd[1] + "-" + yymmdd[0];
  }

  async function getArticles() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=12&country=us`
      );
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // getArticles();
    return () => {};
  }, []);

  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Latest News</HeadingTitle>
        </Header>
        {articles.length !== 0 ? (
          <Main>
            {articles.slice(0, 5).map((article, index) => (
              <Item key={index}>
                <ImageContainer>
                  <Image src={article.urlToImage} />
                </ImageContainer>
                <Content>
                  <Badge>{article.source.name}</Badge>
                  <ItemTitle>{article.title}</ItemTitle>
                  <SubTitle>
                    <CalIcon style={{ marginRight: "5px" }} size="1.25rem" />
                    <Date>{formateDate(article.publishedAt)}</Date>
                  </SubTitle>
                </Content>
              </Item>
            ))}
          </Main>
        ) : (
          <Skeleton />
        )}
      </Body>
      <Side>
        <SideContent>
          <Newsletter />
          <HotCategories />
        </SideContent>
      </Side>
    </Container>
  );
};

export default LatestNews;
