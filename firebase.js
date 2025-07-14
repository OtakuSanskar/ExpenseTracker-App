import firebase from "firebase/compat/app";
import config from "./config";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: "react-authentication-b1a3f.firebaseapp.com",
  projectId: "react-authentication-b1a3f",
  storageBucket: "react-authentication-b1a3f.firebasestorage.app",
  messagingSenderId: "280416781730",
  appId: "1:280416781730:web:7eb67183c623b80ce21efb",
  measurementId: "G-MQ2VVFM50V"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
