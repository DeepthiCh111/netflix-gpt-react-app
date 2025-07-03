import { useRef } from "react";
// import openai from "../utils/openai";
import { API_OPTIONS, movies } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/GptSlice";
const GptSearch = () => {
  const searchText = useRef(null);

  const dispatch = useDispatch();

  const getMovieData = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json;
  };
  const handleClickSearch = async () => {
    // const gptSearchQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   "an only give me names of 5 movies, comma separated like the example given a head : Gadar, Sholay, Don, Golmaal, Koi Mil gaya";
    // const response = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptSearchQuery }],
    // });
    // console.log(response.choices);
    // if(!response.choices) return error;
    // response.choices?.[0]?.message?.content;
    const data = movies[searchText.current.value];

    console.log("Movie Names");
    console.log(data);

    const resultData = await Promise.all(
      data.map((movieName) => getMovieData(movieName))
    );

    dispatch(addMovies({ movieNames: data, movieResults: resultData }));
  };
  return (
    <div className="relative h-screen bg-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg)] bg-center bg-opacity-0">
      <div className="bg-black opacity-50 w-screen h-screen flex"></div>
      <form
        className="bg-black w-[90%] md:w-[50%] h-[10%] ml-6 flex items-center md:ml-96 top-11 z-40 absolute md:top-36"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="w-[90%] md:w-[70%] ml-3 pl-2 md:ml-20 py-2 rounded-l-lg focus:outline-none"
          placeholder="Search your Gener : horror, comedy, thriller, action.."
        />
        <button
          className="bg-red-600 mr-3 md:mr-0 py-2 w-20 rounded-r-lg font-semibold"
          onClick={() => handleClickSearch()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearch;
