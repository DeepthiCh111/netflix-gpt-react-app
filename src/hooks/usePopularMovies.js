import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularmovies(json?.results));
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);
};

export default usePopularMovies;
