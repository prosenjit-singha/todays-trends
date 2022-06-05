import React, { useState, useEffect, createRef } from "react";
import { useSelector } from "react-redux";
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
} from "../../styles/card-styles";
import wave from "../../img/animated-wave.svg";

const NewsCard = ({
  article: { description, publishedAt, source, title, url, urlToImage },
  index,
}) => {
  //auto scrolling effect for
  const [elementRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 85);
  const activeArticle = useSelector((state) => state.news.activeArticle);
  const page = useSelector((state) => state.news.page);
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
  const waveStyle = {
    position: "absolute",
    width: "100%",
    left: 0,
    verticalAlign: "middle",
  };

  const getIndex = (index) => {
    return index + 1 + (page - 1) * 12;
  };
  return (
    <CardContainer ref={elementRefs[index]}>
      <Card>
        <ContentWrapper>
          <Image image={urlToImage} index={getIndex(index)} />
          <Content>
            <Source>{source.name} </Source>
            <Date>{publishedAt} </Date>
            <Title>{title}</Title>
            <Desc>{description}</Desc>
          </Content>
        </ContentWrapper>
        <BottomBlock>
          {isTheArticleActive ? <img src={wave} style={waveStyle} /> : ""}
          <ReadMore href={url} target="_blank">
            Read More
          </ReadMore>
        </BottomBlock>
      </Card>
    </CardContainer>
  );
};

export default React.memo(NewsCard);
