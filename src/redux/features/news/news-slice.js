import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  api:
    "https://newsapi.org/v2/top-headlines?apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12&country=us",
  api_key:
    "https://newsapi.org/v2/top-headlines?apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12&country=us",
  articles: [],
  page: 1,
  totalResults: 0,
  activeArticle: null,
  loading: false,
  error: "",
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchArticles = createAsyncThunk(
  "news/fetchArticles",
  async (API_KEY, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API_KEY);
      return data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility

      const e = {
        ...err.response.data,
        statusCode: err.response.status,
      };
      return rejectWithValue(e);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setActiveArticle: (state, action) => {
      state.activeArticle = action.payload;
    },
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setAPI: (state, action) => {
      //console.log("calling api new console:");
      state.api = action.payload;
    },
    setAPI_KEY: (state, action) => {
      state.api_key = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload.articles;
      state.totalResults = action.payload.totalResults;
      state.error = "";
      state.activeArticle = null;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.loading = false;
      state.articles = [];
      state.error = action.payload;
      state.activeArticle = null;
      state.totalResults = 0;
    });
  },
});

export default newsSlice.reducer;
export const {
  setPage,
  setActiveArticle,
  setArticles,
  setAPI_KEY,
  setAPI,
} = newsSlice.actions;
