import useTrailer from "../hooks/useTrailer";
import { useSelector } from "react-redux";
const VideoContainer = () => {
  const trailerData = useSelector((store) => store.movies.trailerVideo);
  useTrailer();
  return (
    <div className="w-screen bg-slate-400">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerData?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
