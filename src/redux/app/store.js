import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme-slice";
import filterReducer from "../features/filter/filter-slice";
import newsReducer from "../features/news/news-slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
    news: newsReducer,
  },
});

export default store;
