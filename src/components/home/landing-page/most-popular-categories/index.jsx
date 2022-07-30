import React, { useState } from "react";
import { CgCalendarDates as CalIcon } from "react-icons/cg";
import { useSpring } from "react-spring";
import { red } from "../../../../utils/colors";
import {
  Container,
  Body,
  Side,
  SideContent,
  Buttons,
  Button,
  Header,
  Main,
  Item,
  ImageContainer,
  Image,
  Content,
  HeaderImage,
  Badge,
  ItemTitle,
  SubTitle,
} from "./styles";
import SocialLinks from "../social-links";
import HeadingTitle from "../heading-title";
import AlanAI from "../alan-ai";

const Source = ({ children, id = null, handleClick, activeSource }) => {
  const isActive = activeSource === children.toLowerCase();
  const props = useSpring({
    background: isActive ? red[400] : " rgba(255, 102, 102, 0)",
    boxShadow: isActive
      ? "0 3px 10px  rgba(255, 102, 102, 0.8)"
      : "0 0px 0px  rgba(255, 102, 102, 0)",
  });
  return (
    <Button
      data_btn_id={id}
      active={isActive}
      onClick={handleClick}
      style={props}
    >
      {children}
    </Button>
  );
};

const Sources = () => {
  const [activeSource, setActiveSource] = useState("technology");

  function handleClick(e) {
    const innerText = e.target.innerText.toLowerCase();
    if (innerText !== activeSource) {
      setActiveSource(innerText);
    }
  }

  return (
    <Buttons>
      <Source id="first" handleClick={handleClick} activeSource={activeSource}>
        Technology
      </Source>
      <Source handleClick={handleClick} activeSource={activeSource}>
        Business
      </Source>
      <Source handleClick={handleClick} activeSource={activeSource}>
        Science
      </Source>
      <Source id="last" handleClick={handleClick} activeSource={activeSource}>
        Health
      </Source>
    </Buttons>
  );
};

const MostPopularCategories = () => {
  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Most Popular Category</HeadingTitle>
          <Sources />
        </Header>
        <Main>
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
              <ItemTitle>
                Vinales will be as tough for Rossi as Lorenzo
              </ItemTitle>
              <SubTitle>
                <CalIcon style={{ marginRight: "5px" }} />{" "}
                <h4>December 9, 2021</h4>
              </SubTitle>
            </Content>
          </HeaderImage>
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
                <h4>December 9, 2021</h4>
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
                <h4>December 9, 2021</h4>
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
                <h4>December 9, 2021</h4>
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
                <h4>December 9, 2021</h4>
              </SubTitle>
            </Content>
          </Item>
        </Main>
      </Body>
      <Side>
        <SideContent>
          <AlanAI />
          <SocialLinks />
        </SideContent>
      </Side>
    </Container>
  );
};

export default MostPopularCategories;
