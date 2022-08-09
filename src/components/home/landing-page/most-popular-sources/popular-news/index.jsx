import React from "react";
import { CgCalendarDates as CalIcon } from "react-icons/cg";
import { useSelector } from "react-redux";
import {
  Container,
  ImageContainer,
  Image,
  Content,
  Label,
  Title,
  Footer,
  Date,
  Item,
} from "./styles";
import HeadingTitle from "../../heading-title";
import Skeleton from "./skeleton";
// import articles from "../../../../../data/articles.json";

const Articles = ({ articles, loading }) => {
  function validateImage(url) {
    if (url !== null) return url;
    else return "https://source.unsplash.com/300x300";
  }

  function formatDate(string) {
    const date = string.slice(0, string.indexOf("T"));
    const yymmdd = date.split("-");
    return yymmdd[2] + "-" + yymmdd[1] + "-" + yymmdd[0];
  }
  if (!loading && articles.length !== 0) {
    return articles.slice(0, 4).map((article, i) => (
      <Item key={i}>
        <ImageContainer>
          <Image src={validateImage(article.urlToImage)} />
        </ImageContainer>
        <Content>
          <Label>{article.source.name}</Label>
          <Title href={article.url} target="_blank">
            {article.title}
          </Title>
          <Footer>
            <CalIcon />
            <Date>{formatDate(article.publishedAt)}</Date>
          </Footer>
        </Content>
      </Item>
    ));
  } else {
    return [1, 2, 3, 4].map((_, i) => <Skeleton key={i} />);
  }
};
const PopularNews = () => {
  const { articles, loading } = useSelector((state) => state.news);
  // const loading = false;
  return (
    <Container>
      <HeadingTitle>Popular news</HeadingTitle>
      <Articles articles={articles} loading={loading} />
    </Container>
  );
};

export default PopularNews;
