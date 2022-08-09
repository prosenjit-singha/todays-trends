import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//importing actions
import {
  setSource,
  setCategory,
  setKeyword,
  setCountry,
} from "../../../../../redux/features/filter/filter-slice";

import {
  setAPI,
  setAPI_KEY,
  setPage,
} from "../../../../../redux/features/news/news-slice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(value) {
    let API =
      "https://newsapi.org/v2/top-headlines?apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12&country=us&category=";
    let category = "";
    switch (value.toLowerCase()) {
      case "entertainment":
        category = "Entertainment";
        API += "entertainment";
        break;
      case "business":
        category = "Business";
        API += "business";
        break;
      case "sports":
        category = "Sports";
        API += "sports";
        break;
      case "technology":
        category = "Technology";
        API += "technology";
        break;
      default:
        API = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=12&country=us`;
        break;
    }
    // dispatching starts
    dispatch(setSource("All"));
    dispatch(setCountry("All"));
    dispatch(setKeyword(""));
    dispatch(setAPI(API));
    dispatch(setAPI_KEY(API));
    dispatch(setPage(1));
    dispatch(setCategory(category));
    // dispatching ends
    navigate("./news");
  }
  return (
    <Container>
      <HeadingTitle fontSize="1.5rem">Hot Categories</HeadingTitle>
      <Item onClick={() => handleClick("entertainment")}>
        <Image src="https://source.unsplash.com/random/300×100/?entertainment" />
        <Content>
          <Title>Entertainment</Title>
          <IconContainer>
            <Science />
          </IconContainer>
        </Content>
      </Item>
      <Item onClick={() => handleClick("sports")}>
        <Image src="https://source.unsplash.com/random/300×100/?sports" />
        <Content>
          <Title>Sports</Title>
          <IconContainer>
            <Science />
          </IconContainer>
        </Content>
      </Item>
      <Item onClick={() => handleClick("business")}>
        <Image src="https://source.unsplash.com/random/300×100/?business" />
        <Content>
          <Title>Business</Title>
          <IconContainer>
            <Science />
          </IconContainer>
        </Content>
      </Item>
      <Item onClick={() => handleClick("technology")}>
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
