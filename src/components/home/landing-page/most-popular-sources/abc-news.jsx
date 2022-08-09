import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "./skeleton";

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

const ABC = () => {
  const [articles, setArticles] = useState([]);
  function formateDate(string) {
    const date = string.slice(0, string.indexOf("T"));
    const yymmdd = date.split("-");
    return yymmdd[2] + "-" + yymmdd[1] + "-" + yymmdd[0];
  }
  //hooks //
  useEffect(() => {
    async function getNews() {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=12&sources=abc-news`
        );
        setArticles(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    // getNews();
  }, []);

  return articles.length !== 0 ? (
    <Item>
      {/* heading news  */}
      {articles.slice(0, 3).map((article, i) => (
        <News key={i}>
          {i === 0 && (
            <HeaderImage data-text="ABC">
              <Image src={article.urlToImage} />
            </HeaderImage>
          )}
          <Title>{article.title}</Title>
          <SubTitle>
            <div style={{ display: "flex" }}>
              <Icon>
                <Pencil fontSize="0.9rem" />
              </Icon>
              <Writter>
                BY{" "}
                {article.author !== null ? article.author : article.source.name}
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
      {/* footer news  */}
    </Item>
  ) : (
    <Skeleton />
  );
};

export default React.memo(ABC);
