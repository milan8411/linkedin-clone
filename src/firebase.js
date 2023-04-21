import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsoO0PPcxnq_NL6jd_GHA5zzLKsMr8MxY",
  authDomain: "linkedin-clone-yt-1237c.firebaseapp.com",
  projectId: "linkedin-clone-yt-1237c",
  storageBucket: "linkedin-clone-yt-1237c.appspot.com",
  messagingSenderId: "406372046563",
  appId: "1:406372046563:web:3088b2302a8129c14197d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
