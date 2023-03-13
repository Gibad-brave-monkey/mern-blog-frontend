import { configureStore } from "@reduxjs/toolkit";
import { authReduces } from "./slices/auth";
import { postsReduces } from "./slices/posts";

const store = configureStore({
  reducer: {
    posts: postsReduces,
    auth: authReduces,
  },
});

export default store;
