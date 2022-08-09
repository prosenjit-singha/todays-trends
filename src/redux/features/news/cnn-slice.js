import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_NEWS_API}&pageSize=3&sources=cnn`;

const initialState = {
  articles: [],
  loading: true,
  error: null,
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchCNNNews = createAsyncThunk(
  "news/fetchCNNNews",
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

const cnnSlice = createSlice({
  name: "cnnNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCNNNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCNNNews.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.error = "";
      state.loading = false;
    });

    builder.addCase(fetchCNNNews.rejected, (state, action) => {
      state.articles = [];
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default cnnSlice.reducer;
