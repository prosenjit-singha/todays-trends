import React, { useCallback, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import useAlan from "./hooks/useAlan";
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
import { fetchArticles } from "./redux/features/news/news-slice";

const App = () => {
  console.log("APP rendered!");
  const themeStyle = useSelector((state) => state.theme.props);
  const newsData = useSelector((state) => state.news);
  const dispatch = useDispatch();
  //hooks
  const alan = useAlan();
  //autometically call fetchApi when api key is updated
  const updateData = useCallback(() => {
    if (alan !== undefined) {
      const { articles, activeArticle, page, totalResults } = newsData;
      console.log("articles: ", articles);
      const isActive = alan.isActive();
      if (!isActive) {
        alan.activate();
        alan.callProjectApi("updateData", {
          articles,
          activeArticle,
          page,
          totalResults,
        });
        //alan.deactivate();
      } else {
        alan.callProjectApi("updateData", {
          articles,
          activeArticle,
          page,
          totalResults,
        });
      }
    }
  }, [newsData.articles]);

  useEffect(() => {
    updateData();
  }, [newsData.articles]);

  useEffect(() => {
    console.log("API: ", newsData.api);
    console.log("API_KEY: ", newsData.api_key);
    dispatch(fetchArticles(newsData.api_key));
  }, [newsData.api, newsData.api_key]);

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    dispatch(toggleTheme(mode));
    AOS.init(); //for scroll animation
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={themeStyle}>
        <ScrollToTop />
        <GlobalStyle />
        <NavBar />
        <NavBarSpace />
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
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

export default React.memo(App);
