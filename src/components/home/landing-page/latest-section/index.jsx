import React from "react";
import { CgCalendarDates as CalIcon } from "react-icons/cg";
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
import HeadingTitle from "../heading-title";
import HotCategories from "./hot-categories";
import Newsletter from "./newsletter";

const LatestNews = () => {
  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Latest News</HeadingTitle>
        </Header>
        <Main>
          <Item>
            <ImageContainer>
              <Image src="https://source.unsplash.com/sports/300x300" />
            </ImageContainer>
            <Content>
              <Badge>Sports</Badge>
              <ItemTitle>
                Vinales will be as tough for Rossi as Lorenzo
              </ItemTitle>
              <SubTitle>
                <CalIcon style={{ marginRight: "5px" }} />{" "}
                <Date>December 9, 2021</Date>
              </SubTitle>
            </Content>
          </Item>
          <Item>
            <ImageContainer>
              <Image src="https://source.unsplash.com/random/300x300" />
            </ImageContainer>
            <Content>
              <Badge>Sports</Badge>
              <ItemTitle>
                Vinales will be as tough for Rossi as Lorenzo
              </ItemTitle>
              <SubTitle>
                <CalIcon style={{ marginRight: "5px" }} />{" "}
                <Date>December 9, 2021</Date>
              </SubTitle>
            </Content>
          </Item>
          <Item>
            <ImageContainer>
              <Image src="https://source.unsplash.com/random/300x300" />
            </ImageContainer>
            <Content>
              <Badge>Sports</Badge>
              <ItemTitle>
                Vinales will be as tough for Rossi as Lorenzo
              </ItemTitle>
              <SubTitle>
                <CalIcon style={{ marginRight: "5px" }} />{" "}
                <Date>December 9, 2021</Date>
              </SubTitle>
            </Content>
          </Item>
          <Item>
            <ImageContainer>
              <Image src="https://source.unsplash.com/random/300x300" />
            </ImageContainer>
            <Content>
              <Badge>Sports</Badge>
              <ItemTitle>
                Vinales will be as tough for Rossi as Lorenzo
              </ItemTitle>
              <SubTitle>
                <CalIcon style={{ marginRight: "5px" }} />{" "}
                <Date>December 9, 2021</Date>
              </SubTitle>
            </Content>
          </Item>
        </Main>
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
