import { createSlice } from "@reduxjs/toolkit";
import { dark, light } from "../../../styles/theme";

const initialState = { props: dark };

const themeSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.props = action.payload === "dark" ? dark : light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
