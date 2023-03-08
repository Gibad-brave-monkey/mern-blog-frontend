import { configureStore } from "@reduxjs/toolkit";
import { postsReduces } from "./slices/posts";

const store = configureStore({
  reducer: {
    posts: postsReduces,
  },
});

export default store;
