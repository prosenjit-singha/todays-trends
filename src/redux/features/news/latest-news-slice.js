import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  loading: true,
  error: null,
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchLatestNews = createAsyncThunk(
  "news/fetchLatestNews",
  async (_, { rejectWithValue }) => {
    try {
      const API_KEY = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=4&country=us`;
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

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchLatestNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchLatestNews.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.error = "";
      state.loading = false;
    });

    builder.addCase(fetchLatestNews.rejected, (state, action) => {
      state.articles = [];
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default latestNewsSlice.reducer;
