// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBftya-eaELWCHQViwg34abbO6Y1y_f4oo",
  authDomain: "assignment9-bccfb.firebaseapp.com",
  projectId: "assignment9-bccfb",
  storageBucket: "assignment9-bccfb.appspot.com",
  messagingSenderId: "810779019071",
  appId: "1:810779019071:web:0cd6a6a2daa1894748358a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;