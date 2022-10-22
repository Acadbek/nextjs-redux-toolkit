import { configureStore } from "@reduxjs/toolkit";
import data from "./data";

export const store = configureStore({
  reducer: {
    data,
  },
});
