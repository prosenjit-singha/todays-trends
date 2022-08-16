import React, { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import useAlan from "./hooks/useAlan";
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
import { fetchLatestNews } from "./redux/features/news/latest-news-slice";
import { fetchPopularNews } from "./redux/features/news/popular-news";

const App = () => {
  console.log("<-------APP rendered------->");
  //<<<<<<<<<<<<<< Const >>>>>>>>>>>>>>>
  const dispatch = useDispatch();
  const { darkMode, setDarkMode } = useUserColorScheme();
  const { api_key } = useSelector((state) => state.news);
  //hooks
  useAlan();

  // landing page required fetch api calls
  useEffect(() => {
    console.log("<============ News Fetching ============>");
    // dispatch(fetchTechArticles());
    // dispatch(fetchBusinessArticles());
    // dispatch(fetchScienceArticles());
    // dispatch(fetchHealthArticles());
    // dispatch(fetchABCNews());
    // dispatch(fetchBBCNews());
    // dispatch(fetchCNNNews());
    // dispatch(fetchLatestNews()); do not call this leave it as a comment
    // dispatch(fetchPopularNews());
  }, []);

  useEffect(() => {
    console.log("API_KEY: ", api_key);
    // dispatch(fetchArticles(api_key));
  }, [api_key]);

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

export default React.memo(App);
