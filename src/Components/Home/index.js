import React, { useState } from "react";
import NewsCards from "./news-cards";
import { Container } from "../../styles/containers";
import Filter from "./filter";
import Pages from "./pages";

const Home = ({ articles, activeArticle }) => {
  const [category, setCategory] = useState({
    id: "category",
    selected: "",
    list: {
      Business: "business",
      Entertainment: "entertainment",
      General: "general",
      Health: "health",
      Science: "science",
      Sports: "sports",
      Technology: "technology",
    },
  });

  const [country, setCountry] = useState({
    id: "country",
    selected: "All",
    list: {
      All: "all",
      Argentina: "ar",
      Australia: "au",
      Austria: "at",
      Belgium: "be",
      Brazil: "br",
      Bulgaria: "bg",
      Canada: "ca",
      China: "cn",
      Colombia: "co",
      Cuba: "cu",
      "Czech Republic": "cz",
      Egypt: "eg",
      France: "fr",
      Germany: "de",
      Greece: "gr",
      "Hong Kong": "hk",
      Hungary: "hu",
      India: "in",
      Indonesia: "id",
      Ireland: "ie",
      Israel: "il",
      Italy: "it",
      Japan: "jp",
      Latvia: "lv",
      Lithuania: "lt",
      Malaysia: "my",
      Mexico: "mx",
      Morocco: "ma",
      Netherlands: "nl",
      "New Zealand": "nz",
      Nigeria: "ng",
      Norway: "no",
      Philippines: "ph",
      Poland: "pl",
      Portugal: "pt",
      Romania: "ro",
      Russia: "ru",
      "Saudi Arabia": "sa",
      Serbia: "rs",
      Singapore: "sg",
      Slovakia: "sk",
      Slovenia: "si",
      "South Africa": "za",
      "South Korea": "kr",
      Sweden: "sr",
      Switzerland: "ch",
      Taiwan: "tw",
      Thailand: "th",
      Turkey: "tr",
      UAE: "ae",
      Ukraine: "ua",
      "United Kingdom": "uk",
      "United States": "us",
      Venuzuela: "ve",
    },
  });
  const [source, setSource] = useState({
    id: "source",
    selected: "All",
    list: {
      All: "all",
      "BBC News": "bbc-news",
    },
  });
  const [keyword, setKeyword] = useState(""); //terms
  //const pageSize = 10;
  //const [totalResults, setTotalResult] = useState();

  // return <NewsCards articles={articles} activeArticle={activeArticle} />;
  return (
    <>
      <Container>
        <Filter
          country={country}
          setCountry={setCountry}
          category={category}
          setCategory={setCategory}
          source={source}
          setSource={setSource}
          keyword={keyword}
          setKeyword={setKeyword}
        />
        <NewsCards articles={articles} activeArticle={activeArticle} />
        <Pages totalResults={38} />
      </Container>
    </>
  );
};

export default React.memo(Home);
