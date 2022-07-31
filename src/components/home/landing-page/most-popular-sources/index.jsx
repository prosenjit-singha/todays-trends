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
  HeaderImage,
  Image,
  Title,
  SubTitle,
  Writter,
  Icon,
  Date,
  Text,
  News,
} from "./styles";
import HeadingTitle from "../heading-title";
import PopularNews from "./popular-news";

//icons
import {
  BsPencilSquare as Pencil,
  BsFillCalendarDateFill as Calendar,
} from "react-icons/bs";

const Source = ({ articles }) => {
  return (
    <Item>
      {/* heading news  */}
      <News>
        <HeaderImage>
          <Image src="https://source.unsplash.com/random/300×300" />
        </HeaderImage>
        <Title>Hello world</Title>
        <SubTitle>
          <Icon>
            <Pencil fontSize="0.9rem" />
          </Icon>
          <Writter>BY PJ</Writter>
          <Icon>
            <Calendar fontSize="0.9rem" />
          </Icon>
          <Date>December 21, 2021</Date>
        </SubTitle>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, ipsam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eos corrupti consequatur vero quia nulla
          necessitatibus odit sequi, voluptatibus sint at in sapiente magni
          doloribus. Sed ullam provident quia est nam.
        </Text>
      </News>
      {/* footer news  */}
      <News>
        <Title>Hello world</Title>
        <SubTitle>
          <Icon>
            <Pencil fontSize="0.9rem" />
          </Icon>
          <Writter>BY PJ</Writter>
          <Icon>
            <Calendar fontSize="0.9rem" />
          </Icon>
          <Date>December 21, 2021</Date>
        </SubTitle>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, ipsam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eos corrupti consequatur vero quia nulla
          necessitatibus odit sequi, voluptatibus sint at in sapiente magni
          doloribus. Sed ullam provident quia est nam.
        </Text>
      </News>
      <News>
        <Title>Hello world</Title>
        <SubTitle>
          <Icon>
            <Pencil fontSize="0.9rem" />
          </Icon>
          <Writter>BY PJ</Writter>
          <Icon>
            <Calendar fontSize="0.9rem" />
          </Icon>
          <Date>December 21, 2021</Date>
        </SubTitle>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, ipsam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Eos corrupti consequatur vero quia nulla
          necessitatibus odit sequi, voluptatibus sint at in sapiente magni
          doloribus. Sed ullam provident quia est nam.
        </Text>
      </News>
    </Item>
  );
};

const MostPopularSources = () => {
  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Most Popular Sources</HeadingTitle>
        </Header>
        <Main>
          <Source />
          <Source />
          <Source />
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
