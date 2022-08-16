import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: null,
  subscribed: false,
};

const subscribeSlice = createSlice({
  name: "subscriber",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setSubscribed: (state, action) => {
      state.subscribed = action.payload;
    },
  },
});

export default subscribeSlice.reducer;
export const { setEmail, setSubscribed } = subscribeSlice.actions;
