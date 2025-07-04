import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingmovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpComing = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingmovies(json?.results));
    console.log(json);
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useUpComing;
