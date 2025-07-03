// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaLhtE8jDW0nmHxuLnaEHh7-6-Oq3mBtA",
  authDomain: "netflixgpt-56f89.firebaseapp.com",
  projectId: "netflixgpt-56f89",
  storageBucket: "netflixgpt-56f89.firebasestorage.app",
  messagingSenderId: "845675133791",
  appId: "1:845675133791:web:77c2e3750a58e2dbbd54ea",
  measurementId: "G-ZHJ77DDVQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
