import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  articles: [],
  loading: true,
  error: null,
};

const getRandomItem = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  const randomItem = items[randomIndex];
  return randomItem
    .toLowerCase()
    .split(" ")
    .join("-");
};

//generate pending, fulfilled and rejected //life cycle hook
export const fetchPopularNews = createAsyncThunk(
  "news/fetchPopularNews",
  async (_, { rejectWithValue }) => {
    try {
      const terms = ["bitcoin", "iron man", "hero alom", "Marvel"];
      const NEWS_API_KEY = `https://newsapi.org/v2/everything?q=${getRandomItem(
        terms
      )}&apiKey=${process.env.REACT_APP_NEWS_API}`;
      const { data } = await axios.get(NEWS_API_KEY);
      console.log(NEWS_API_KEY);
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

const popularNewsSlice = createSlice({
  name: "popularNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPopularNews.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchPopularNews.fulfilled, (state, action) => {
      state.articles = action.payload.articles;
      state.error = "";
      state.loading = false;
    });

    builder.addCase(fetchPopularNews.rejected, (state, action) => {
      state.articles = [];
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export default popularNewsSlice.reducer;
