import React from "react";
import { Container, Body, Side, SideContent, Header, Main } from "./styles";

// components
import HeadingTitle from "../heading-title";
import PopularNews from "./popular-news";
import NewsTemplate from "./news-template";

const MostPopularSources = () => {
  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Most Popular Sources</HeadingTitle>
        </Header>
        <Main>
          <NewsTemplate source="abc" />
          <NewsTemplate source="bbc" />
          <NewsTemplate source="cnn" />
        </Main>
      </Body>
      <Side>
        <SideContent>
          <PopularNews />
        </SideContent>
      </Side>
    </Container>
  );
};

export default MostPopularSources;
