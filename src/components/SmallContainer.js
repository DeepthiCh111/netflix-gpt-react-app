import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SmallContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;

  return (
    <div className="w-screen aspect-video bg-black">
      {movies?.nowPlayingMovies && (
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
      )}
      {movies?.popularMovies && (
        <MovieList title="Popular" movies={movies?.popularMovies} />
      )}
      {movies?.topRatedMovies && (
        <MovieList title="Top Rated" movies={movies?.topRatedMovies} />
      )}
      {movies?.upComingMovies && (
        <MovieList title="Up Coming" movies={movies?.upComingMovies} />
      )}
    </div>
  );
};

export default SmallContainer;
