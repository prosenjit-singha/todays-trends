import React, { useCallback, useEffect } from "react";
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
import ScrollToTop from "./hooks/scroll-to-top";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./redux/features/theme/theme-slice";
import { fetchArticles } from "./redux/features/news/news-slice";

const App = () => {
  console.log("<--APP rendered-->");
  const dispatch = useDispatch();
  // const {
  //   theme: { props: themeStyle },
  //   news: newsData,
  // } = useSelector((state) => state);
  const themeStyle = useSelector((state) => state.theme.props);
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

  useEffect(() => {
    //this will cause rerender....
    const mode = localStorage.getItem("theme");
    if (mode !== themeStyle.name) dispatch(toggleTheme(mode));
    AOS.init(); //for scroll animation
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider theme={themeStyle}>
        <ScrollToTop />
        <GlobalStyle />
        <NavBar />
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
