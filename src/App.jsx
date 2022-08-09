import React, { useCallback, useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import useAlan from "./hooks/useAlan";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
//<<<<<<<<< importing components >>>>>>>>>>>>>>>
import Terms from "./components/terms&conditions";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home";
import News from "./components/news";
import About from "./components/about";
import CommandList from "./components/command-list";
import Developers from "./components/dev";
import Error from "./components/error";
import GlobalStyle from "./styles/global-styles";
//import { GlobalStyle } from "./styles/containers";

//<<<<<<<<<<<< importing hooks >>>>>>>>>>>>>>>>>>//
import useUserColorScheme from "./hooks/useUserColorScheme";
import ScrollToTop from "./hooks/scroll-to-top";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "./styles/theme";

// <<<<<<<< importing redux actions >>>>>>>>>>>>
import { fetchArticles } from "./redux/features/news/news-slice";
import { fetchTechArticles } from "./redux/features/news/tech-slice";
import { fetchBusinessArticles } from "./redux/features/news/business-slice";
import { fetchScienceArticles } from "./redux/features/news/science-slice";
import { fetchHealthArticles } from "./redux/features/news/health-slice";
import { fetchABCNews } from "./redux/features/news/abc-slice";
import { fetchBBCNews } from "./redux/features/news/bbc-slice";
import { fetchCNNNews } from "./redux/features/news/cnn-slice";

const App = () => {
  console.log("<-------APP rendered------->");
  //<<<<<<<<<<<<<< Const >>>>>>>>>>>>>>>
  // const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const { darkMode, setDarkMode } = useUserColorScheme();
  // const {
  //   theme: { props: themeStyle },
  //   news: newsData,
  // } = useSelector((state) => state);
  const newsData = useSelector((state) => state.news);
  //hooks
  const alan = useAlan();
  //autometically call fetchApi when api key is updated
  const updateData = useCallback(() => {
    console.log("updating data to alan api...");
    if (alan !== undefined) {
      const { articles, activeArticle, page, totalResults } = newsData;
      const isActive = alan.isActive();
      if (!isActive) {
        alan.activate();
        alan.callProjectApi("updateData", {
          articles,
          activeArticle,
          page,
          totalResults,
        });
        alan.deactivate();
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
    //updateData();
  }, [newsData.articles]);

  useEffect(() => {
    console.log("API: ", newsData.api);
    console.log("API_KEY: ", newsData.api_key);
    //dispatch(fetchArticles(newsData.api_key));
  }, [newsData.api, newsData.api_key]);

  // landing page required fetch api calls
  useEffect(() => {
    // dispatch(fetchTechArticles());
    // dispatch(fetchBusinessArticles());
    // dispatch(fetchScienceArticles());
    // dispatch(fetchHealthArticles());
    // dispatch(fetchABCNews());
    // dispatch(fetchBBCNews());
    // dispatch(fetchCNNNews());
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={darkMode ? dark : light}>
        <ScrollToTop />
        <GlobalStyle />
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/command-list" element={<CommandList />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
