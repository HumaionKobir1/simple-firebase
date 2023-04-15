// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLkJ3OrCRLwn9G7setxMYA2o0STiI2veg",
  authDomain: "simple-firebase-d7352.firebaseapp.com",
  projectId: "simple-firebase-d7352",
  storageBucket: "simple-firebase-d7352.appspot.com",
  messagingSenderId: "136169057714",
  appId: "1:136169057714:web:2a5a356c7ca6027afd88ab",
  measurementId: "G-6FWCVL5R5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;