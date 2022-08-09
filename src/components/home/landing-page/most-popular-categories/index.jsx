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
  Main,
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
// components
import SocialLinks from "../social-links";
import HeadingTitle from "../heading-title";
import AlanAI from "../alan-ai";
import Skeleton from "./skeleton";
import axios from "axios";
import TechNews from "./tech-news";

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

const Sources = ({ setArticles }) => {
  const [activeSource, setActiveSource] = useState("technology");
  const [techArticles, setTechArticles] = useState([]);
  const [businessArticles, setBusinessArticles] = useState([]);
  const [scienceArticles, setScienceArticles] = useState([]);
  const [healthArticles, setHealthArticles] = useState([]);

  async function getArticles() {
    // FETHING TECHNOLOGY RELATED ARTICLES
    try {
      const response = await axios.get();
      setTechArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }

    //FETCHING BUSINESS RELATED ARTICLES
    try {
      const response = await axios.get();
      setTechArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }

    // FETCHING SCIENCE RELATED ARTICLES
    try {
      const response = await axios.get();
      setTechArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
    // FETCHING HEALTH RELATED ARTICLES
    try {
      const response = await axios.get();
      setTechArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick(e) {
    const innerText = e.target.innerText.toLowerCase();
    if (innerText !== activeSource) {
      setActiveSource(innerText);
      switch (innerText) {
        case "technology":
          setArticles(techArticles);
          break;
        case "business":
          setArticles(businessArticles);
          break;
        case "science":
          setArticles(scienceArticles);
          break;
        case "health":
          setArticles(healthArticles);
          break;
        default:
          setArticles([]);
          break;
      }
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
  const [articles, setArticles] = useState([]);
  return (
    <Container>
      <Body>
        <Header>
          <HeadingTitle>Most Popular Category</HeadingTitle>
          <Sources setArticles={setArticles} />
        </Header>
        <TechNews />
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
