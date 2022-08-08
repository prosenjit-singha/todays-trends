import React from "react";
import {
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

const News = () => {
  return (
    <>
      <HeaderImage>
        <Image src="https://source.unsplash.com/random/300x300" />
        <Content
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <Badge>Sports</Badge>
          <ItemTitle>Vinales will be as tough for Rossi as Lorenzo</ItemTitle>
          <SubTitle>
            <CalIcon style={{ marginRight: "5px" }} />{" "}
            <Date>December 9, 2021</Date>
          </SubTitle>
        </Content>
      </HeaderImage>
      <Item>
        <ImageContainer>
          <Image src="https://source.unsplash.com/random/300x300" />
        </ImageContainer>
        <Content>
          <Badge>Sports</Badge>
          <ItemTitle>Vinales will be as tough for Rossi as Lorenzo</ItemTitle>
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
          <ItemTitle>Vinales will be as tough for Rossi as Lorenzo</ItemTitle>
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
          <ItemTitle>Vinales will be as tough for Rossi as Lorenzo</ItemTitle>
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
          <ItemTitle>Vinales will be as tough for Rossi as Lorenzo</ItemTitle>
          <SubTitle>
            <CalIcon style={{ marginRight: "5px" }} />{" "}
            <Date>December 9, 2021</Date>
          </SubTitle>
        </Content>
      </Item>
    </>
  );
};

export default News;
