import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Theme/reducer";

export const store = configureStore({ reducer: reducer });
