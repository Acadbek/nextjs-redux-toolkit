import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: new Date(),
        title: action.payload.title,
        status: action.payload.status,
        time: action.payload.time
      };
      state.posts.push(newTodo);
    },
  },
});

export default postsSlice.reducer;
export const { add } = postsSlice.actions;
