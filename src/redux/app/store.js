import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme-slice";
import filterReducer from "../features/filter/filter-slice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    filter: filterReducer,
  },
});

export default store;
