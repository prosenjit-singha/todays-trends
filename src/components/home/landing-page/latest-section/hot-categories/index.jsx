import React from "react";
import {
  Container,
  Image,
  Content,
  Title,
  IconContainer,
  Item,
} from "./styles";

// ICONS
import { GiMaterialsScience as Science } from "react-icons/gi";
import { FaBusinessTime as Business } from "react-icons/fa";

import HeadingTitle from "../../heading-title";

const HotCategories = () => {
  return (
    <Container>
      <HeadingTitle fontSize="1.5rem">Hot Categories</HeadingTitle>
      <Item>
        <Image src="https://source.unsplash.com/random/300×100/?entertainment" />
        <Content>
          <Title>Entertainment</Title>
          <IconContainer>
            <Science />
          </IconContainer>
        </Content>
      </Item>
      <Item>
        <Image src="https://source.unsplash.com/random/300×100/?sports" />
        <Content>
          <Title>Sports</Title>
          <IconContainer>
            <Science />
          </IconContainer>
        </Content>
      </Item>
      <Item>
        <Image src="https://source.unsplash.com/random/300×100/?business" />
        <Content>
          <Title>Business</Title>
          <IconContainer>
            <Science />
          </IconContainer>
        </Content>
      </Item>
      <Item>
        <Image src="https://source.unsplash.com/random/300×100/?technology" />
        <Content>
          <Title>Technology</Title>
          <IconContainer>
            <Business />
          </IconContainer>
        </Content>
      </Item>
    </Container>
  );
};

export default HotCategories;
