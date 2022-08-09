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
  Badge,
  ItemTitle,
  SubTitle,
  Date,
} from "./styles";
import Skeleton from "./skeleton";

const ScienceNews = () => {
  console.log("<----- Science News ---->");
  const { articles, loading } = useSelector((state) => state.scienceNews);

  function formateDate(string) {
    const date = string.slice(0, string.indexOf("T"));
    const yymmdd = date.split("-");
    return yymmdd[2] + "-" + yymmdd[1] + "-" + yymmdd[0];
  }

  if (!loading && articles !== 0) {
    return (
      <Main>
        {articles.map((article, index) => {
          if (index === 0) {
            return (
              <HeaderImage key={index}>
                <Image src={article.urlToImage} />
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
                  <ItemTitle>{article.title}</ItemTitle>
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
                  <Image src={article.urlToImage} />
                </ImageContainer>
                <Content>
                  <Badge>{article.source.name}</Badge>
                  <ItemTitle>{article.title}</ItemTitle>
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

export default ScienceNews;
