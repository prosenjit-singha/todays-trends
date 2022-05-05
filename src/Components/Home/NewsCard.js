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
import wave from "../../img/animatedWave.svg";
import { useSpring } from "react-spring";

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
  const waveStyle = {
    position: "absolute",
    width: "100%",
    left: 0,
    verticalAlign: "middle",
  };

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
          {isTheArticleActive ? <img src={wave} style={waveStyle} /> : ""}
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
