import React from "react";
import { CgCalendarDates as CalIcon } from "react-icons/cg";
import { useSelector } from "react-redux";
import {
  Main,
  Item,
  ImageContainer,
  Image,
  Content,
  HeaderImage,
  Title,
  Badge,
  ItemTitle,
  SubTitle,
  Date,
} from "./styles";
import Skeleton from "./skeleton";
import articles from "../../../../data/articles.json";

const NewsTemplate = ({ activeSource }) => {
  console.log("<------ Template Rendered ----->");

  function getNews(state) {
    if (activeSource === "technology") return state.techNews;
    if (activeSource === "business") return state.businessNews;
    if (activeSource === "science") return state.scienceNews;
    if (activeSource === "health") return state.healthNews;
  }

  // const { articles, loading } = useSelector((state) => getNews(state));
  const loading = false;

  function formateDate(string) {
    const date = string.slice(0, string.indexOf("T"));
    const yymmdd = date.split("-");
    return yymmdd[2] + "-" + yymmdd[1] + "-" + yymmdd[0];
  }

  function validateImage(url) {
    if (url !== null) return url;
    else return "https://source.unsplash.com/300x300";
  }

  if (!loading && articles !== 0) {
    return (
      <Main>
        {articles.map((article, index) => {
          if (index === 0) {
            return (
              <HeaderImage key={index}>
                <Image src={validateImage(article.urlToImage)} />
                <Content
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0,0,0,0.5)",
                  }}
                >
                  <Badge>{article.source.name}</Badge>
                  <Title href={article.url} target="_blank">
                    {article.title}
                  </Title>
                  <SubTitle>
                    <CalIcon style={{ marginRight: "5px" }} size="1.25rem" />
                    <Date>{formateDate(article.publishedAt)}</Date>
                  </SubTitle>
                </Content>
              </HeaderImage>
            );
          } else {
            return (
              <Item key={index}>
                <ImageContainer>
                  <Image src={validateImage(article.urlToImage)} />
                </ImageContainer>
                <Content>
                  <Badge>{article.source.name}</Badge>
                  <ItemTitle href={article.url} target="_blank">
                    {article.title}
                  </ItemTitle>
                  <SubTitle>
                    <CalIcon style={{ marginRight: "5px" }} />{" "}
                    <Date>{formateDate(article.publishedAt)}</Date>
                  </SubTitle>
                </Content>
              </Item>
            );
          }
        })}
      </Main>
    );
  } else {
    return <Skeleton />;
  }
};

export default NewsTemplate;
