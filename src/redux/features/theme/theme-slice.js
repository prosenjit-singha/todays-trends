import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkMode: false,
  name: "null",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    toogleTheme: (state, action) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default themeSlice.reducer;
export const { setDarkMode, toogleTheme } = themeSlice.actions;
