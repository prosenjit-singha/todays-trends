import React, { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import rippleEffect from "./Components/RippleEffect";
import wordsToNumbers from "words-to-numbers";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import Nav from "./Components/Nav/Index";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import { NavBarSpace } from "./Components/Styles/Containers";
import NewsCards from "./Components/NewsCards/NewsCards";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CommandList from "./Components/CommandList/CommandList";
import Developers from "./Components/Dev/Dev";
import Error from "./Components/Error/Error";
import { GlobalStyle } from "./Components/Styles/Containers";
import axios from "axios";

const alanKey =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [activeArticle, setActiveArticle] = useState(1); //set null
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    rippleEffect();
    AOS.init(); //for scroll animation
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
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=daeddbe4bc074bf48d19a82ff073c046"
      )
      .then((res) => {
        setNewsArticles(res.data.articles);
      });
  }, []);
  return (
    <React.Fragment>
      <GlobalStyle />
      <NavBar />
      <NavBarSpace />
      {/* <Nav /> */}
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            <Home articles={newsArticles} activeArticle={activeArticle} />
          }
        />
        {/* <Route path="/news-by/:option1/:option2" element={<NewsBy />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/command-list" element={<CommandList />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* <NewsCards articles={newsArticles} activeArticle={activeArticle} /> */}
      <Footer />
    </React.Fragment>
  );
};

export default App;
