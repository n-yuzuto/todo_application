// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCMb0ZuAH4anHZ4Vg3VYscssuHu-PG4mss",
    authDomain: "test1-70490.firebaseapp.com",
    projectId: "test1-70490",
    storageBucket: "test1-70490.appspot.com",
    messagingSenderId: "721998057335",
    appId: "1:721998057335:web:a282ff6cd77770c94f9b72",
    measurementId: "G-17QJ1R60X8"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);