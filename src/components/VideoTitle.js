import { BiInfoCircle } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
const VideoTitle = ({ data }) => {
  return (
    <div className="w-screen absolute pt-[20%] ml-10 text-white">
      <h1 className="text-2xl md:text-4xl font-extrabold">{data?.title}</h1>
      <p className="hidden md:inline-block w-[20%] font-semibold py-1">
        {data.overview}
      </p>
      <div className=" w-[20%] flex items-center mt-2">
        <button className="bg-white text-black w-20 md:w-28 flex items-center rounded-lg justify-center">
          <BiPlay className="text-3xl md:text-5xl" />
          <p className=" text-sm pr-2 md:text-md font-semibold">Play</p>
        </button>
        <button className="bg-stone-500 text-white w-20 md:w-32 ml-2 p-1 flex items-center rounded-lg justify-center">
          <BiInfoCircle className="text-2xl md:text-4xl mr-1" />
          <p className="text-xs md:text-md font-semibold">MoreInfo</p>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
