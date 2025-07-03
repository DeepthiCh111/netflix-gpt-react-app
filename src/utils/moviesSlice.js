import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    upComingMovies: null,
  },
  reducers: {
    addNowPlayingmovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularmovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRatedmovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },

    addUpcomingmovies: (state, action) => {
      state.upComingMovies = action.payload;
    },

    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingmovies,
  addTrailer,
  addPopularmovies,
  addTopRatedmovies,
  addUpcomingmovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
