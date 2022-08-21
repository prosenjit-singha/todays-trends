import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filter-slice";
import newsReducer from "../features/news/news-slice";
import techReducer from "../features/news/tech-slice";
import businessReducer from "../features/news/business-slice";
import scienceReducer from "../features/news/science-slice";
import healthReducer from "../features/news/health-slice";
import abcReducer from "../features/news/abc-slice";
import bbcReducer from "../features/news/bbc-slice";
import cnnReducer from "../features/news/cnn-slice";
import latestNewsReducer from "../features/news/latest-news-slice";
import popularNewsReducer from "../features/news/popular-news";
import subscriberReducer from "../features/subscribe/sub-slice";
import themeReducer from "../features/theme/theme-slice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    news: newsReducer,
    techNews: techReducer,
    businessNews: businessReducer,
    scienceNews: scienceReducer,
    healthNews: healthReducer,
    abcNews: abcReducer,
    bbcNews: bbcReducer,
    cnnNews: cnnReducer,
    latestNews: latestNewsReducer,
    popularNews: popularNewsReducer,
    subscriber: subscriberReducer,
    theme: themeReducer,
  },
});

export default store;
