import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=3&sources=abc-news`;

const initialState = {
  articles: [],
  loading: true,
  error: null,
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchABCNews = createAsyncThunk(
  "news/fetchABCNews",
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

const abcSlice = createSlice({
  name: "abcNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchABCNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchABCNews.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.error = "";
      state.loading = false;
    });

    builder.addCase(fetchABCNews.rejected, (state, action) => {
      state.articles = [];
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default abcSlice.reducer;
