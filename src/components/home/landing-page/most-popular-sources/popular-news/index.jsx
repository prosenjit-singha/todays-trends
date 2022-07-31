import React from "react";
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

const PopularNews = () => {
  return (
    <Container>
      <HeadingTitle>Popular news</HeadingTitle>
      <Item>
        <ImageContainer>
          <Image src="https://source.unsplash.com/random/300×200/?entertainment" />
        </ImageContainer>
        <Content>
          <Label>Fashion</Label>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            corporis atque enim temporibus laboriosam eligendi.
          </Title>
          <Footer>
            <Date>december 21, 2021</Date>
          </Footer>
        </Content>
      </Item>
      <Item>
        <ImageContainer>
          <Image src="https://source.unsplash.com/random/300×200/?entertainment" />
        </ImageContainer>
        <Content>
          <Label>Fashion</Label>
          <Title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            corporis atque enim temporibus laboriosam eligendi.
          </Title>
          <Footer>
            <Date>december 21, 2021</Date>
          </Footer>
        </Content>
      </Item>
    </Container>
  );
};

export default PopularNews;
