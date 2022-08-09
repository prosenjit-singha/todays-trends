import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=5&country=us&category=business`;

const initialState = {
  articles: [],
  loading: true,
  error: null,
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchBusinessArticles = createAsyncThunk(
  "news/fetchBusinessArticles",
  async (_, { rejectWithValue }) => {
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

const businessSlice = createSlice({
  name: "businessNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBusinessArticles.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBusinessArticles.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.error = "";
      state.loading = false;
    });

    builder.addCase(fetchBusinessArticles.rejected, (state, action) => {
      state.articles = [];
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default businessSlice.reducer;
