import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingmovies(json?.results));
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useNowPlayingMovies;
