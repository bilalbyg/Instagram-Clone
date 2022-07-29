// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "../utils";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASqW7O2kFleGEM4DbPJY8KmykNLmhFKqM",
  authDomain: "instagram-clone-e389f.firebaseapp.com",
  projectId: "instagram-clone-e389f",
  storageBucket: "instagram-clone-e389f.appspot.com",
  messagingSenderId: "307219034503",
  appId: "1:307219034503:web:3c3ac65d4278f3c21c6322",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  userHandle(user || false);
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response.user);
  } catch (err) {
    toast.error(err.message);
  }
};
