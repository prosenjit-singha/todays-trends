import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCountry: (state, action) => {},
  },
});

export default filterSlice.reducer;
export const { setCountry } = filterSlice.actions;
