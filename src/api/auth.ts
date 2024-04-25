import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";

export const Auth = {
  login: () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
