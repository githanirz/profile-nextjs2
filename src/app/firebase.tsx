// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZpSQEAr75pGcyGIGycTFod-TT7K6QbqA",
    authDomain: "profile-98b6f.firebaseapp.com",
    projectId: "profile-98b6f",
    storageBucket: "profile-98b6f.appspot.com",
    messagingSenderId: "273050680488",
    appId: "1:273050680488:web:959dbb6087b1ffdd7ad69d",
    measurementId: "G-GKCH11P0BP"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();