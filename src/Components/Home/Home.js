import React, { useState, useEffect } from "react";
import NewsCards from "./NewsCards";
import axios from "axios";
import { useMeasure } from "../../Helpers";
import { useSpring, animated } from "react-spring";
import { Container } from "../Styles/Containers";
import { Grid } from "./Styles";
import { CardContainer, Card, Title, Desc, Image } from "../Styles/CardStyles";
import newsAltImage from "../../img/newspaper-2.svg";
const Home = ({ articles, activeArticle }) => {
  return <NewsCards articles={articles} activeArticle={activeArticle} />;
};

export default React.memo(Home);
