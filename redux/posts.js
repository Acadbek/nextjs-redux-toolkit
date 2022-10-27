import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    add: (state, action) => {
      const newPost = {
        id: state?.posts?.length + 1,
        title: action?.payload?.title,
        status: action?.payload?.status,
        time: action?.payload?.time,
      };
      state?.posts.push(newPost);
      // localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export default postSlice.reducer;
export const { add } = postSlice.actions;
