import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  api: `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=12&country=us`,
  api_key: `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=12&country=us&page=1`,
  articles: [],
  page: 1,
  totalResults: 0,
  activeArticle: null,
  loading: true,
  error: "",
  command: "",
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchArticles = createAsyncThunk(
  "news/fetchArticles",
  async (API_KEY, { rejectWithValue }) => {
    try {
      console.log(
        "<-------------- FETCHING DATA FROM API ------------------->"
      );
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
      state.api = action.payload;
    },
    setAPI_KEY: (state, action) => {
      console.log("set api key called");
      state.api_key = action.payload;
    },
    setCommand: (state, action) => {
      state.command = action.payload;
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
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
  setCommand,
  setTotalResults,
  setLoading,
} = newsSlice.actions;
