import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoContainer from "./VideoContainer";
const MainConatainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  return (
    <div>
      <VideoTitle data={mainMovie} />
      <VideoContainer />
    </div>
  );
};

export default MainConatainer;
