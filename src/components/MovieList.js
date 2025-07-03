import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <div className="md:-mt-56 relative z-20 md:mb-56 p-10">
      <h1 className="text-white mb-3 font-bold text-2xl">{title}</h1>
      <div className="flex no-scrollbar  overflow-x-scroll">
        <div className="flex">
          {movies && movies.map((movie) => <MovieCard movieData={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
