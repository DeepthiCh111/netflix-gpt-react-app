import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const moviesData = useSelector((store) => store.gpt);

  const movieNames = moviesData.movieNames;
  const movieResults = moviesData.movieResults;
  console.log(movieNames);
  console.log(movieResults);

  return (
    <div className="bg-black md:-mt-96 -mt-[700px]">
      {movieNames &&
        movieNames.map((movieName, index) => (
          <MovieList
            title={movieName}
            key={movieName}
            movies={movieResults[index].results}
          />
        ))}
      GptMovieSuggestions
    </div>
  );
};

export default GptMovieSuggestions;
