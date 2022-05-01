import React, { useState, useEffect, createRef } from "react";
import {
  CardContainer,
  Card,
  Source,
  Date,
  Title,
  Desc,
  Image,
  ContentWrapper,
  Content,
  BottomBlock,
  ReadMore,
} from "../Styles/CardStyles";
import { useSpring } from "react-spring";
import { colors } from "../Styles/Variables";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
  activeArticle,
}) => {
  //auto scrolling effect for
  const [elementRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 85);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elementRefs[activeArticle]) {
      scrollToRef(elementRefs[activeArticle]);
    }
  }, [index, activeArticle, elementRefs]);
  //end of auto scrolling
  const isTheArticleActive = activeArticle === index ? true : false;
  const [hovered, setHovered] = useState(false);
  const active = useSpring({
    transform:
      isTheArticleActive || hovered
        ? "translateY(-1%) scale(1)"
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

  return (
    <CardContainer ref={elementRefs[index]}>
      <Card
        // style={active}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ContentWrapper
        // style={contentAnimation}
        >
          <Image image={urlToImage} index={index} />
          <Content>
            <Source>{source.name} </Source>
            <Date>{publishedAt} </Date>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </Content>
          {/* <GlowEffect href={url} target="_blank" style={glowEffect} /> */}
        </ContentWrapper>
        <BottomBlock>
          <ReadMore href={url} target="_blank">
            {/* <Shine style={shineEffect} /> */}
            Read More
          </ReadMore>
        </BottomBlock>
      </Card>
    </CardContainer>
  );
};

export default React.memo(NewsCard);
