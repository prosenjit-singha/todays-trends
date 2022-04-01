import React, { useState } from "react";
import {
  CardContainer,
  Card,
  Title,
  Desc,
  Image,
  ReadMore,
} from "../Styles/CardStyles";
import newsAltImage from "../../img/newspaper-2.svg";
import { useSpring, config } from "react-spring";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  const [hovered, setHovered] = useState(false);
  const active = useSpring({
    transform:
      activeArticle === index || hovered
        ? "translateY(-5%) scale(1.05)"
        : "translateY(0%) scale(1)",
    boxShadow:
      activeArticle === index || hovered
        ? "10px 15px 6px rgba(0, 0, 0, 0.35), inset 4px 4px 5px 0px rgba(255, 255, 255, 0.1), inset -4px -4px 5px 0px rgba(0, 0, 0, 0.2)"
        : "0px 0px 0px rgba(0, 0, 0, 0.0),  inset 4px 4px 5px 0px rgba(255, 255, 255, 0.01), inset -4px -4px 5px 0px rgba(0, 0, 0, 0.05)",
    config: {
      mass: 1,
      tension: 200,
      friction: 14,
    },
  });
  return (
    <CardContainer>
      <Card
        style={active}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Image imgURL={urlToImage} index={index} />
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <ReadMore onClick={() => console.log("clicked!")}>Read More</ReadMore>
      </Card>
    </CardContainer>
  );
};

export default NewsCard;
