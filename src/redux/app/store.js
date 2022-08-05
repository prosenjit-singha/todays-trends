import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filter-slice";
import newsReducer from "../features/news/news-slice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    news: newsReducer,
  },
});

export default store;
