import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const res = await axios
    .get("https://jsonplaceholder.typicode.com/users");
  return res.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      (state.loading = false), (state.users = action.payload);
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      (state.loading = false),
        (state.users = []),
        (state.error = action.error.message);
    });
  },
});

export default userSlice.reducer;
