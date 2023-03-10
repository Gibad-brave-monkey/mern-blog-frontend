import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios";

export const fetchPost = createAsyncThunk("posts/fetchPosts", async () => {
  const { data } = await axios("/posts");
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPost.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchPost.fulfilled]: (state, action) => {
      state.posts.status = "loaded";
      state.posts.items = action.payload;
    },
    [fetchPost.rejected]: (state) => {
      state.posts.status = "error";
      state.posts.items = [];
    },
  },
});

export const postsReduces = postsSlice.reducer;
