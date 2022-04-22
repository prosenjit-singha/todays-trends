import { TOGGLE_THEME } from "./types";
import { createAction } from "@reduxjs/toolkit";

export const toggleTheme = createAction(TOGGLE_THEME, function prepare(mode) {
  return {
    payload: mode,
  };
});
