import React, { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";

import wordsToNumbers from "words-to-numbers";

import NavBar2 from "./Components/NavBar/NavBar2";
import NewsCards from "./Components/NewsCards/NewsCards";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CommandList from "./Components/CommandList/CommandList";
import Developers from "./Components/Dev/Dev";
import Error from "./Components/Error/Error";
import classNames from "classnames";

const alanKey =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);
  return (
    <React.Fragment>
      <NavBar2 />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={
            <Home articles={newsArticles} activeArticle={activeArticle} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/command-list" element={<CommandList />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </React.Fragment>
  );
};

export default App;
