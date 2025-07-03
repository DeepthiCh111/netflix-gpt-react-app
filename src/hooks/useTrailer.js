import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useTrailer = () => {
  const dispatch = useDispatch();
  const trailerData = useSelector((store) => store.movies.trailerVideo);
  const getData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/574475/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length > 0 ? filterData[1] : json.results[0];
    dispatch(addTrailer(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getData();
  });
};

export default useTrailer;
