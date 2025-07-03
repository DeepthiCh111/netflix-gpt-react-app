import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchClicked: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    changeState: (state, action) => {
      state.isGptSearchClicked = !state.isGptSearchClicked;
    },

    addMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { changeState, addMovies } = GptSlice.actions;
export default GptSlice.reducer;
