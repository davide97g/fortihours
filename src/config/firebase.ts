import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATope6gxmuCP0QSwTQcsBacPnYzxxQEWk",
  authDomain: "forti-hours-test.firebaseapp.com",
  projectId: "forti-hours-test",
  storageBucket: "forti-hours-test.appspot.com",
  messagingSenderId: "128054452430",
  appId: "1:128054452430:web:87273570ddb55c191a709f",
  measurementId: "G-T6L66FTWZ3",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
