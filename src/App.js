import React, { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import { NavBarSpace } from "./styles/containers";
import Home from "./components/home";
import About from "./components/about";
import CommandList from "./components/command-list";
import Developers from "./components/dev";
import Error from "./components/error";
import { GlobalStyle } from "./styles/containers";
import ScrollToTop from "./components/scroll-to-top";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/features/theme/theme-slice";
import {
  setAPI,
  setAPI_KEY,
  fetchArticles,
} from "./redux/features/news/news-slice";
import {
  setSource,
  setCategory,
  setKey,
  setKeyword,
  setPage,
  setCountry,
} from "./redux/features/filter/filter-slice";
import { toTitle } from "./utils/functions";

const ALAN_KEY =
  "9d1324a30a0a78d5a51fdfa0d05b9c372e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const themeStyle = useSelector((state) => state.theme.props);
  const filterData = useSelector((state) => state.filter);
  const newsData = useSelector((state) => state.news);
  const mode = localStorage.getItem("theme");
  const dispatch = useDispatch();
  const [activeArticle, setActiveArticle] = useState(null); //set null
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    console.log("API: ", newsData.api);
    console.log("API_KEY: ", newsData.api_key);
    dispatch(fetchArticles(newsData.api_key));
  }, [newsData.api, newsData.api_key]);

  useEffect(() => {
    console.log(filterData);
    dispatch(toggleTheme(mode));

    AOS.init(); //for scroll animation
    alanBtn({
      key: ALAN_KEY,
      onCommand: ({ command, articles, number, params }) => {
        if (command === "by source") {
          dispatch(setCategory("All"));
          dispatch(setCountry("All"));
          dispatch(setKeyword(""));
          dispatch(setAPI(params.API));
          dispatch(setAPI_KEY(params.API));
          dispatch(setPage(1));
          setActiveArticle(0);
          dispatch(setSource(params.source.toUpperCase()));
        } else if (command === "by terms") {
          dispatch(setCategory("All"));
          dispatch(setCountry("All"));
          dispatch(setSource("All"));
          dispatch(setAPI(params.API));
          dispatch(setAPI_KEY(params.API));
          dispatch(setPage(1));
          setActiveArticle(0);
          dispatch(setKeyword(params.keyword));
        } else if (command === "by categories") {
          dispatch(setSource("All"));
          dispatch(setCountry("All"));
          dispatch(setKeyword(""));
          dispatch(setAPI(params.API));
          dispatch(setAPI_KEY(params.API));
          setActiveArticle(0);
          dispatch(setPage(1));
          dispatch(setCategory(toTitle(params.category)));
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
    // axios.get(NEWS_API).then((res) => {
    //   setNewsArticles(res.data.articles);
    // });
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
          <Route path="/about" element={<About />} />
          <Route path="/command-list" element={<CommandList />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
