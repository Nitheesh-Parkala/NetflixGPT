// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4ftZ6ZOzyQLsLaKpsiXFMGyV1PKLaHRc",
  authDomain: "netflixgpt-427ca.firebaseapp.com",
  projectId: "netflixgpt-427ca",
  storageBucket: "netflixgpt-427ca.appspot.com",
  messagingSenderId: "739421929299",
  appId: "1:739421929299:web:55aa12b363b6bac7c62ba6",
  measurementId: "G-P4X3HPCFTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//we are Doing Auth in Center place bec we r just calling once
 export const auth = getAuth();