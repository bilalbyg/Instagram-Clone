import {initializeApp} from "firebase/app";
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
import {userHandle} from "./utils";

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
const auth = getAuth()

onAuthStateChanged(auth, user => {
	userHandle(user || false)
})

export const login = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}
