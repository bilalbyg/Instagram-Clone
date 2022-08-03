import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

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
const db = getFirestore(app);

onAuthStateChanged(auth, async user => {
  if (user) {
    const dbUser = await getDoc(doc(db,"users",user.uid))
    let data = {
      uid : user.uid,
      fullName : user.displayName,
      email : user.email,
      emailVerified : user.emailVerified,
      ...dbUser.data()
    }
    userHandle(data);
  } else {
    userHandle(false);
  }
});

export const login = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    toast.error(err.code);
  }
};

export const register = async ({ email, password, full_name, user_name }) => {
  try {
    const user = await getDoc(doc(db, "usernames", user_name));
    if (user.exists()) {
      toast.error(
        `${user_name} kullanıcı adı başkası tarafından kullanılıyor.`
      );
    } else {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response.user) {
        await setDoc(doc(db, "usernames", user_name), {
          user_id: response.user.uid,
        });

        await setDoc(doc(db, "users", response.user.uid), {
          full_name: full_name,
          user_name: user_name,
          followers: [],
          following: [],
          notifications: [],
        });

        await updateProfile(auth.currentUser, {
          displayName: full_name,
        });

        return response.user;
      }
    }
  } catch (err) {
    toast.error(err.code);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    toast.error(err.code);
  }
};
