import React from "react";
import { CgCalendarDates as CalIcon } from "react-icons/cg";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../utils/functions";
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
  const { articles, loading } = useSelector((state) => state.latestNews);

  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Latest News</HeadingTitle>
        </Header>
        {loading || articles.length === 0 ? (
          <Skeleton />
        ) : (
          <Main>
            {articles.map((article, index) => (
              <Item key={index}>
                <ImageContainer>
                  <Image src={article.urlToImage} />
                </ImageContainer>
                <Content>
                  <Badge>{article.source.name}</Badge>
                  <ItemTitle>{article.title}</ItemTitle>
                  <SubTitle>
                    <CalIcon style={{ marginRight: "5px" }} size="1.25rem" />
                    <Date>{formatDate(article.publishedAt)}</Date>
                  </SubTitle>
                </Content>
              </Item>
            ))}
          </Main>
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
