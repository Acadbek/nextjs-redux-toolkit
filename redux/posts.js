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
        id: state.posts.length + 1,
        title: action.payload.title,
        status: action.payload.status,
        time: action.payload.time,
      };
      state.posts.push(newTodo);
      // localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export default postsSlice.reducer;
export const { add } = postsSlice.actions;
