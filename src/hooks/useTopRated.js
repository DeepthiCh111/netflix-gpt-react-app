import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTopRated = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedmovies(json?.results));
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useTopRated;
