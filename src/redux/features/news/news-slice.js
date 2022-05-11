import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  api: "https://newsapi.org/v2/top-headlines?apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12",
  articles: [],
  totalResults: 0,
  activeArticle: null,
  loading: false,
  error: "",
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchArticles = createAsyncThunk(
  "news/fetchArticles",
  async (params, { rejectWithValue }) => {
    const { country, source, keyword, category } = params;
    const API_KEY = `https://newsapi.org/v2/${keyword}apiKey=daeddbe4bc074bf48d19a82ff073c046&pageSize=12${country}${category}${source}`;
    console.log(API_KEY);
    try {
      const { data } = await axios.get(API_KEY);
      console.log(data);
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
  reducers: {},
  reducers: {
    setActiveArticle: (state, action) => {
      state.activeArticle = action.payload;
    },
    setArticles: (state, action) => {
      state.articles = action.payload;
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
