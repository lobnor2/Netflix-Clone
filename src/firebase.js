// import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCePvJDHtrghX1WZRyfoP1NpQC2fSb-ffI",
  authDomain: "netflix-clone-922c9.firebaseapp.com",
  projectId: "netflix-clone-922c9",
  storageBucket: "netflix-clone-922c9.appspot.com",
  messagingSenderId: "913154081246",
  appId: "1:913154081246:web:5b38509f763066ff33dd4f",
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const firebaseapp = firebase.initializeApp(firebaseConfig);
// const db = firebaseapp.firestore();
// const auth = firebase.auth();

export { auth };
export default db;
