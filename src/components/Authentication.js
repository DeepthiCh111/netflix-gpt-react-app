import { useRef, useState } from "react";
import { checkValidity, checkValiditySignIn } from "../utils/checkValidity";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import Header from "./Header";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [validationMessage, setValidationMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  let message = "";

  function handleClick() {
    message = checkValiditySignIn(email.current.value, password.current.value);
    setValidationMessage(message);
    if (message) return;
    if (!isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                adduser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setValidationMessage(errorCode + "-" + errorMessage);
        });
    }
  }

  return (
    <div className="relative h-screen bg-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg)] bg-center bg-opacity-0">
      <div className="absolute inset-0 bg-black/60 z-0">
        {/* <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-52 ml-36"
        /> */}
        <Header />
        <form
          className="flex flex-col mt-8 p-6 ml-[570px] w-96 h-96 bg-black bg-opacity-50 absolute"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-white font-bold mb-8 text-3xl">
            {isSignUp ? "Sign In" : "SignUp"}
          </h1>
          <p className="text-red-500 font-bold mb-5 pl-2 text-sm cursor-pointer">
            {validationMessage}
          </p>
          {!isSignUp && (
            <input
              ref={name}
              type="text"
              className="mb-5 rounded-md p-2"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            type="text"
            className="mb-5 rounded-md p-2"
            placeholder="Email Address"
          />
          <input
            ref={password}
            type="text"
            className="mb-8 rounded-md p-2"
            placeholder="Password"
          />

          <button
            className="bg-red-700 rounded-md font-semibold mt-2 px-2 py-1 text-white cursor-pointer"
            onClick={() => {
              handleClick();
            }}
          >
            {isSignUp ? "SignIn" : "SignUp"}
          </button>
          <p
            className="text-white font-bold  my-3 pl-2 text-sm cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "New USer? SingnUp" : "Already a User? SignIn"}
          </p>
        </form>
      </div>
    </div>
  );
};
export default Authentication;
