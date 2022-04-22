import { TOGGLE_THEME } from "./types";
import { DARK, LIGHT } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { dark, light } from "../../Styles/theme";

const initialState = {
  theme: dark,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(TOGGLE_THEME, (state, action) => {
    state.theme = action.payload === "light" ? light : dark;
  });
});

export default reducer;
