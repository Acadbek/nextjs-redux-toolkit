import { configureStore } from "@reduxjs/toolkit";
import data from "./data";
import posts from './posts';

export const store = configureStore({
  reducer: {
    data,
    posts
  },
});
