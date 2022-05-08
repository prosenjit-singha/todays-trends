import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../../styles/theme";

const initialState = { ...dark };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (action) => {
      state = action.payload === "light" ? light : dark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
