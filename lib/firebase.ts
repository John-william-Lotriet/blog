import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBtH75F7B_ECu28hGqzSZXpPhn-8mP8ZZU",
  authDomain: "blog-b2f70.firebaseapp.com",
  projectId: "blog-b2f70",
  storageBucket: "blog-b2f70.appspot.com",
  messagingSenderId: "579182237138",
  appId: "1:579182237138:web:b3bd3afc7630286b08240b",
  measurementId: "G-QCZR0Z7TM7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
