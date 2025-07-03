import { useDispatch, useSelector } from "react-redux";
import { RiArrowDropDownFill, RiArrowUpFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { adduser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { changeState } from "../utils/GptSlice";
import { NETFLIX_LOGO, PROFILE_PHOTO } from "../utils/constants";
const Header = () => {
  const data = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((store) => store.user);

  const isGptClicked = useSelector((store) => store.gpt.isGptSearchClicked);

  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubScribe();
  }, []);

  if (!isAuth) return <img src={NETFLIX_LOGO} className="w-52 ml-36" />;

  return (
    <div className="bg-zinc-900 p-3 flex justify-between items-center">
      <div className="flex items-center">
        <img src={NETFLIX_LOGO} className="w-28 md:ml-5 md:mr-3 ml-" />
        <div>
          <ul className=" hidden md:flex text-stone-300 text-sm font-semibold">
            <li className="pl-4">Home</li>
            <li className="pl-4">Characters</li>
            <li className="pl-4">TV Shows</li>
            <li className="pl-4">Movies</li>
            <li className="pl-4">New & Popular</li>
            <li className="pl-4">My List</li>
            <li className="pl-4">Browse By Languages</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center relative">
        <button
          className="p-2 text-white font-semibold rounded-lg bg-amber-700 mr-8 text-sm "
          onClick={() => {
            dispatch(changeState());
          }}
        >
          {isGptClicked ? "Home" : "GPT Search"}
        </button>
        <img
          src={PROFILE_PHOTO}
          className="w-10 h-10"
          onClick={() => setIsOpen(!isOpen)}
        />
        <p className="text-white text-4xl" onClick={() => setIsOpen(!isOpen)}>
          <RiArrowDropDownFill />
        </p>
        {isOpen && (
          <div className="absolute w-36 z-50 md:z-10 top-12 right-0 h-36 p-3 bg-black text-white md:w-52">
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    // Sign-out successful.
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            >
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
