import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import Header from "./Header";
import MainConatainer from "./MainConatainer";
import Footer from "./Footer";
import SmallContainer from "./SmallContainer";
import { useSelector } from "react-redux";
import Gpt from "./Gpt";
const Browser = () => {
  useNowPlayingMovies();
  useTopRated();
  usePopularMovies();
  useUpComing();

  const isGptClicked = useSelector((store) => store.gpt.isGptSearchClicked);

  return (
    <div>
      <Header />
      {isGptClicked ? (
        <Gpt />
      ) : (
        <>
          <MainConatainer />
          <SmallContainer />
        </>
      )}

      <Footer />
    </div>
  );
};
export default Browser;
