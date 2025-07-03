import { IMAGE_URL } from "../utils/constants";
const MovieCard = ({ movieData }) => {
  if (!movieData.backdrop_path && !movieData.poster_path) return null;
  const imagePath = movieData.backdrop_path || movieData.poster_path;
  return (
    <div className="w-64 mr-1">
      <img className="h-40 w-full rounded-md" src={IMAGE_URL + imagePath} />
    </div>
  );
};

export default MovieCard;
