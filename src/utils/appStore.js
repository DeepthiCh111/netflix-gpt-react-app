import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import GptSlice from "./GptSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: GptSlice,
  },
});

export default appStore;
