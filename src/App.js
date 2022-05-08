import React, { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { NavBarSpace } from "./styles/Containers";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CommandList from "./components/CommandList/CommandList";
import Developers from "./components/Dev/Dev";
import Error from "./components/Error/Error";
import { GlobalStyle } from "./styles/Containers";
import axios from "axios";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { DARK, LIGHT } from "./components/Redux/Theme/types";
import { toggleTheme } from "./components/Redux/Theme/action";

const alanKey =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const themeStyle = useSelector((state) => state.theme);
  const localTheme = localStorage.getItem("theme");
  const mode = localTheme === LIGHT ? LIGHT : DARK;
  const dispatch = useDispatch();

  const [activeArticle, setActiveArticle] = useState(null); //set null
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    dispatch(toggleTheme(mode));
    let NEWS_API =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12";
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
    axios.get(NEWS_API).then((res) => {
      setNewsArticles(res.data.articles);
    });
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={themeStyle}>
        <ScrollToTop />
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
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
