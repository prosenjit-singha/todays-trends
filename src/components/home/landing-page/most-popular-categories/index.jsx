import React, { useState } from "react";
import { useSpring } from "react-spring";
import { red } from "@mui/material/colors";
import { useTheme } from "styled-components";
import {
  Container,
  Body,
  Side,
  SideContent,
  Buttons,
  Button,
  Header,
} from "./styles";
// components
import SocialLinks from "../social-links";
import HeadingTitle from "../heading-title";
import AlanAI from "../alan-ai";
import NewsTemplate from "./news-template";

const Source = ({ children, id = null, handleClick, activeSource }) => {
  const theme = useTheme();
  const isActive = activeSource === children.toLowerCase();
  const props = useSpring({
    background: isActive ? red[500] : "hsla(1, 83%, 63%, 0.15)",
    color: isActive
      ? "rgba(255, 255, 255, 1)"
      : theme.darkMode
      ? "#f8f8f8"
      : "rgba(0, 0, 0, 0.8)",
  });
  return (
    <Button data_btn_id={id} onClick={handleClick} style={props}>
      {children}
    </Button>
  );
};

const Sources = ({ activeSource, setActiveSource }) => {
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
  const [activeSource, setActiveSource] = useState("technology");

  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Most Popular Category</HeadingTitle>
          <Sources
            activeSource={activeSource}
            setActiveSource={setActiveSource}
          />
        </Header>
        <NewsTemplate activeSource={activeSource} />
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
