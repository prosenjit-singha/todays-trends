import React from "react";
import { Container, Body, Side, SideContent, Header, Main } from "./styles";

// components
import CNN from "./cnn-news";
import BBC from "./bbc-news";
import ABC from "./abc-news";
import HeadingTitle from "../heading-title";
import PopularNews from "./popular-news";

const MostPopularSources = () => {
  console.log("<--- News Api --->");

  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Most Popular Sources</HeadingTitle>
        </Header>
        <Main>
          <CNN />
          <BBC />
          <ABC />
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
