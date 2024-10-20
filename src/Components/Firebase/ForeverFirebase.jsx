// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFsZgR0FZV6D13QQ0yof-SpAIDRRXdslo",
  authDomain: "forever-c811c.firebaseapp.com",
  projectId: "forever-c811c",
  storageBucket: "forever-c811c.appspot.com",
  messagingSenderId: "862379557747",
  appId: "1:862379557747:web:315b4a956d57853d4cfb06",
  measurementId: "G-2XKSFBFGPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage=getStorage(app)
const db = getFirestore(app);
const auth = getAuth(app);

export {auth,db,storage}