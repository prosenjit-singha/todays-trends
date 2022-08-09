import React from "react";
import Skeleton from "./skeleton";
import { useSelector } from "react-redux";
import {
  Item,
  HeaderImage,
  Image,
  Title,
  SubTitle,
  Writter,
  Icon,
  Date,
  Text,
  News,
} from "./styles";
import {
  BsPencilSquare as Pencil,
  BsFillCalendarDateFill as Calendar,
} from "react-icons/bs";
// import articles from "../../../../data/articles.json";

const NewsTemplate = ({ source }) => {
  function getNews(state) {
    if (source === "abc") return state.abcNews;
    if (source === "bbc") return state.bbcNews;
    if (source === "cnn") return state.cnnNews;
  }
  const { articles, loading } = useSelector((state) => getNews(state));
  //   const loading = false;

  function formateDate(string) {
    const date = string.slice(0, string.indexOf("T"));
    const yymmdd = date.split("-");
    return yymmdd[2] + "-" + yymmdd[1] + "-" + yymmdd[0];
  }

  if (!loading && articles.length !== 0) {
    return (
      <Item>
        {articles.slice(0, 3).map((article, i) => (
          <News key={i}>
            {i === 0 && (
              <HeaderImage data-text={source}>
                <Image src={article.urlToImage} />
              </HeaderImage>
            )}
            <Title href={article.url} target="_blank">
              {article.title}
            </Title>
            <SubTitle>
              <div style={{ display: "flex", width: "65%" }}>
                <Icon>
                  <Pencil fontSize="0.9rem" />
                </Icon>
                <Writter>
                  BY{" "}
                  {article.author !== null
                    ? article.author
                    : article.source.name}
                </Writter>
              </div>
              <div style={{ display: "flex" }}>
                <Icon>
                  <Calendar fontSize="0.9rem" />
                </Icon>
                <Date>{formateDate(article.publishedAt)}</Date>
              </div>
            </SubTitle>
            <Text>{article.description}</Text>
          </News>
        ))}
      </Item>
    );
  } else {
    return <Skeleton />;
  }
};

export default React.memo(NewsTemplate);
