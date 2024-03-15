// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd4TUzb5VOdrWgZDJgiK344OzDKL_6-Xs",
  authDomain: "netflixgpt-9692b.firebaseapp.com",
  projectId: "netflixgpt-9692b",
  storageBucket: "netflixgpt-9692b.appspot.com",
  messagingSenderId: "262215458993",
  appId: "1:262215458993:web:93154b88119b9fda530290",
  measurementId: "G-C77W6P868R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth=getAuth();