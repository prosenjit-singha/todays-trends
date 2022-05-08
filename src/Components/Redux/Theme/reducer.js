import { TOGGLE_THEME } from "./types";
import { LIGHT } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { dark, light } from "../../../styles/theme";

const initialState = {
  theme: dark,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(TOGGLE_THEME, (state, action) => {
    state.theme = action.payload === LIGHT ? light : dark;
  });
});

export default reducer;
