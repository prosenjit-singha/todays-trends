import React, { useState } from "react";
import {
  CardContainer,
  Card,
  Title,
  Desc,
  Image,
  ContentWrapper,
  Content,
  ReadMore,
  Shine,
  GlowEffect,
} from "../Styles/CardStyles";
import { useSpring } from "react-spring";
import { colors } from "../Styles/Variables";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  const isTheArticleActive = activeArticle === index ? true : false;
  const [hovered, setHovered] = useState(false);
  const active = useSpring({
    transform:
      isTheArticleActive || hovered
        ? "translateY(-5%) scale(1)"
        : "translateY(0%) scale(1)",
    boxShadow:
      isTheArticleActive || hovered
        ? "10px 15px 6px rgba(0, 0, 0, 0.35)"
        : "0px 0px 0px rgba(0, 0, 0, 0.0)",
    config: {
      mass: 1,
      tension: 200,
      friction: 14,
    },
  });
  const contentAnimation = useSpring({
    bottom: isTheArticleActive || hovered ? "2rem" : "0rem",
    config: {
      mass: 0.5,
      tension: 140,
      friction: 18,
    },
  });
  const glowEffect = useSpring({
    //bottom: isTheArticleActive || hovered ? "1.95rem" : "0rem",
    backgroundImage:
      isTheArticleActive || hovered
        ? "linear-gradient(-50deg, rgba(0,0,0,0) 50%, rgba(255,255,255, 0.05) 52%)"
        : "linear-gradient(-50deg, rgba(0,0,0,0) 100%, rgba(255,255,255, 0.05) 100%)",
    boxShadow:
      isTheArticleActive || hovered
        ? "inset 4px 4px 5px 0px rgba(255, 255, 255, 0.2), inset -4px 0px 5px 0px rgba(0, 0, 0, 0.3)"
        : "inset 4px 4px 5px 0px rgba(255, 255, 255, 0.01), inset -4px -4px 5px 0px rgba(0, 0, 0, 0.1)",
    config: {
      mass: 0.5,
      tension: 140,
      friction: 18,
    },
  });
  const readMoreEffect = useSpring({
    fontWeight: "bold",
    boxShadow: hovered
      ? `0px 0px 2rem ${
          isTheArticleActive ? colors.green[200] : "rgba(255, 196, 0, 0.9)"
        }`
      : "0px 0px 2rem rgba(255, 196, 0, 0)",

    config: {
      duration: 100,
      mass: 1,
      tension: 200,
      friction: 0,
    },
  });

  const shineEffect = useSpring({
    loop: isTheArticleActive || hovered ? true : false,
    delay: 500,
    from: {
      backgroundImage:
        "linear-gradient(-50deg, rgba(0,0,0,0) 100%, rgba(255,255,255, 0.7) 100%, rgba(255,255,255, 0) 100%)",
    },
    to: {
      backgroundImage:
        "linear-gradient(-50deg, rgba(0,0,0,0) 0%, rgba(255,255,255, 0.2) 0%, rgba(255,255,255, 0) 50%)",
    },
    config: { duration: 1000 },
  });
  return (
    <CardContainer>
      <Card
        style={active}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ContentWrapper style={contentAnimation}>
          <Image image={urlToImage} index={index} />
          <Content>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </Content>
          <GlowEffect href={url} target="_blank" style={glowEffect} />
        </ContentWrapper>
        <ReadMore href={url} target="_blank" style={readMoreEffect}>
          <Shine style={shineEffect} />
          Read More
        </ReadMore>
      </Card>
    </CardContainer>
  );
};

export default React.memo(NewsCard);
