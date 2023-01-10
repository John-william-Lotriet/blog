// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtH75F7B_ECu28hGqzSZXpPhn-8mP8ZZU",
  authDomain: "blog-b2f70.firebaseapp.com",
  projectId: "blog-b2f70",
  storageBucket: "blog-b2f70.appspot.com",
  messagingSenderId: "579182237138",
  appId: "1:579182237138:web:b3bd3afc7630286b08240b",
  measurementId: "G-QCZR0Z7TM7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
